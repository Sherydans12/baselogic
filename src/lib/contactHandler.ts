export interface ContactRateLimiterBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

export interface ContactKvNamespaceBinding {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

export interface ContactWorkerEnv {
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
  ALLOWED_ORIGINS?: string;
  ALLOW_LOCALHOST?: string;
  CONTACT_DEV_MOCK?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_RATE_LIMITER?: ContactRateLimiterBinding;
  RATE_LIMIT_KV?: ContactKvNamespaceBinding;
}

export interface ContactUtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  page_path?: string;
  referrer?: string;
}

export interface ContactRequestPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
  privacyAccepted?: unknown;
  company_website?: unknown;
  turnstileToken?: unknown;
  utm?: unknown;
}

export interface ValidatedContactLead {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  privacyAccepted: boolean;
  utm: Required<ContactUtmData>;
}

export const ALLOWED_PROJECT_TYPES = [
  'Página web',
  'Landing page',
  'WordPress',
  'Sistema para pyme',
  'Automatización',
  'BaseLogic Booking',
  'BaseLogic EduPay',
  'BaseLogic EAM',
  'BaseLogic POS (Piloto)',
  'Soporte mensual',
  'No estoy seguro',
] as const;

export const ALLOWED_BUDGET_RANGES = [
  '',
  'Aún no lo tengo definido',
  'Hasta $300.000',
  '$300.000 a $700.000',
  '$700.000 a $1.500.000',
  'Más de $1.500.000',
  'Prefiero recibir orientación',
] as const;

const DEFAULT_FROM_EMAIL = 'BaseLogic · Notificaciones Web <notificaciones@baselogic.cl>';
const DEFAULT_TO_EMAIL = 'contacto@baselogic.cl';
const MAX_PAYLOAD_BYTES = 16 * 1024;
const RATE_LIMIT_WINDOW_SECONDS = 15 * 60;
const RATE_LIMIT_MAX_REQUESTS = 5;

// Respaldo acotado en memoria únicamente para pruebas locales cuando no hay binding de Cloudflare (Rate Limiter / KV)
const localFallbackBuckets = new Map<string, { count: number; resetAt: number }>();

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripControlChars(input: string, allowNewlines = false): string {
  const normalized = input.trim();
  if (allowNewlines) {
    return normalized.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  }
  return normalized.replace(/[\r\n\u0000-\u001F\u007F]+/g, ' ');
}

function sanitizeUtmField(val: unknown, maxLen = 200): string {
  if (typeof val !== 'string') return '';
  return stripControlChars(val, false).slice(0, maxLen);
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[0-9+\s()-]{6,25}$/;

export function validateContactPayload(raw: ContactRequestPayload): {
  valid: boolean;
  errors: Record<string, string>;
  data?: ValidatedContactLead;
  isHoneypotTriggered?: boolean;
} {
  const errors: Record<string, string> = {};

  // 1. Verificación de Honeypot (campo oculto company_website)
  if (typeof raw.company_website === 'string' && raw.company_website.trim().length > 0) {
    return { valid: false, errors: {}, isHoneypotTriggered: true };
  }

  // 2. Nombre (obligatorio)
  const name = typeof raw.name === 'string' ? stripControlChars(raw.name) : '';
  if (!name || name.length < 2) {
    errors.name = 'Ingresa tu nombre (mínimo 2 caracteres).';
  } else if (name.length > 100) {
    errors.name = 'El nombre no puede superar los 100 caracteres.';
  }

  // 3. Correo electrónico (obligatorio)
  const email = typeof raw.email === 'string' ? stripControlChars(raw.email).toLowerCase() : '';
  if (!email) {
    errors.email = 'Ingresa tu correo electrónico de contacto.';
  } else if (email.length > 150 || !EMAIL_REGEX.test(email)) {
    errors.email = 'Ingresa un correo electrónico válido (ejemplo: nombre@empresa.cl).';
  }

  // 4. Teléfono (OPCIONAL)
  const phone = typeof raw.phone === 'string' ? stripControlChars(raw.phone) : '';
  if (phone.length > 0 && !PHONE_REGEX.test(phone)) {
    errors.phone = 'Si ingresas teléfono, utiliza un formato válido (ej. +56 9 1234 5678).';
  }

  // 5. Empresa u organización (OPCIONAL)
  const company = typeof raw.company === 'string' ? stripControlChars(raw.company) : '';
  if (company.length > 120) {
    errors.company = 'El nombre de la empresa no puede superar los 120 caracteres.';
  }

  // 6. Tipo de proyecto / solución (obligatorio, validado contra lista blanca)
  const projectType = typeof raw.projectType === 'string' ? stripControlChars(raw.projectType) : '';
  if (!projectType || !(ALLOWED_PROJECT_TYPES as readonly string[]).includes(projectType)) {
    errors.projectType = 'Selecciona un tipo de proyecto o solución válido.';
  }

  // 7. Rango de presupuesto referencial (opcional, validado contra lista blanca)
  const budget = typeof raw.budget === 'string' ? stripControlChars(raw.budget) : 'Aún no lo tengo definido';
  if (!(ALLOWED_BUDGET_RANGES as readonly string[]).includes(budget)) {
    errors.budget = 'Selecciona un rango de presupuesto válido.';
  }

  // 8. Mensaje / contexto operacional (obligatorio)
  const message = typeof raw.message === 'string' ? stripControlChars(raw.message, true) : '';
  if (!message || message.length < 10) {
    errors.message = 'Cuéntanos brevemente qué necesitas resolver (mínimo 10 caracteres).';
  } else if (message.length > 2500) {
    errors.message = 'El mensaje no puede superar los 2500 caracteres.';
  }

  // 9. Aceptación de política de privacidad (obligatorio)
  const privacyAccepted = raw.privacyAccepted === true;
  if (!privacyAccepted) {
    errors.privacyAccepted = 'Debes aceptar la Política de Privacidad para enviar tu consulta.';
  }

  // 10. Parámetros UTM y contexto de navegación
  const rawUtm = (typeof raw.utm === 'object' && raw.utm !== null ? raw.utm : {}) as Record<string, unknown>;
  const utm: Required<ContactUtmData> = {
    utm_source: sanitizeUtmField(rawUtm.utm_source, 120),
    utm_medium: sanitizeUtmField(rawUtm.utm_medium, 120),
    utm_campaign: sanitizeUtmField(rawUtm.utm_campaign, 150),
    utm_term: sanitizeUtmField(rawUtm.utm_term, 120),
    utm_content: sanitizeUtmField(rawUtm.utm_content, 120),
    page_path: sanitizeUtmField(rawUtm.page_path, 200) || '/contacto',
    referrer: sanitizeUtmField(rawUtm.referrer, 300),
  };

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: {},
    data: {
      name,
      email,
      phone,
      company,
      projectType,
      budget: budget || 'No especificado',
      message,
      privacyAccepted,
      utm,
    },
  };
}

/**
 * Evalúa el límite de tasa utilizando primero las capacidades nativas de Cloudflare
 * (Rate Limiting Binding o Cloudflare KV) y dejando memoria local solo para pruebas locales.
 */
async function checkRateLimit(
  clientIp: string,
  env: ContactWorkerEnv,
): Promise<{ allowed: boolean; source: 'cf-ratelimiter' | 'cf-kv' | 'local-fallback' }> {
  const safeKey = `contact_rl:${clientIp || 'unknown'}`;

  // 1. Binding nativo de Cloudflare Rate Limiting (consistente en el Edge)
  if (env.CONTACT_RATE_LIMITER && typeof env.CONTACT_RATE_LIMITER.limit === 'function') {
    const outcome = await env.CONTACT_RATE_LIMITER.limit({ key: safeKey });
    return { allowed: Boolean(outcome.success), source: 'cf-ratelimiter' };
  }

  // 2. Cloudflare KV Namespace (si se adjunta un KV para ventana fija)
  if (env.RATE_LIMIT_KV && typeof env.RATE_LIMIT_KV.get === 'function') {
    const rawCount = await env.RATE_LIMIT_KV.get(safeKey);
    const current = rawCount ? Number.parseInt(rawCount, 10) : 0;
    if (Number.isFinite(current) && current >= RATE_LIMIT_MAX_REQUESTS) {
      return { allowed: false, source: 'cf-kv' };
    }
    await env.RATE_LIMIT_KV.put(safeKey, String((Number.isFinite(current) ? current : 0) + 1), {
      expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
    });
    return { allowed: true, source: 'cf-kv' };
  }

  // 3. Fallback local para entorno de desarrollo / pruebas unitarias
  const now = Date.now();
  if (localFallbackBuckets.size > 500) {
    for (const [k, v] of localFallbackBuckets.entries()) {
      if (v.resetAt <= now) localFallbackBuckets.delete(k);
    }
  }

  const entry = localFallbackBuckets.get(safeKey);
  if (!entry || entry.resetAt <= now) {
    localFallbackBuckets.set(safeKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_SECONDS * 1000,
    });
    return { allowed: true, source: 'local-fallback' };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, source: 'local-fallback' };
  }

  entry.count += 1;
  return { allowed: true, source: 'local-fallback' };
}

export function resetLocalRateLimitBuckets(): void {
  localFallbackBuckets.clear();
}

function getAllowedOrigins(env: ContactWorkerEnv): string[] {
  const configured = (env.ALLOWED_ORIGINS || 'https://baselogic.cl,https://www.baselogic.cl')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  if (env.ALLOW_LOCALHOST === 'true') {
    configured.push('http://localhost:4321', 'http://127.0.0.1:4321', 'http://localhost:3000');
  }

  return configured;
}

function buildCorsHeaders(originHeader: string | null, env: ContactWorkerEnv): Record<string, string> {
  const allowedOrigins = getAllowedOrigins(env);
  const matchedOrigin = originHeader && allowedOrigins.includes(originHeader) ? originHeader : allowedOrigins[0];

  return {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    'Access-Control-Allow-Origin': matchedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

export function buildInternalNotificationEmail(lead: ValidatedContactLead, referenceId: string, clientIp: string): {
  subject: string;
  text: string;
  html: string;
} {
  const companyTag = lead.company ? ` (${lead.company})` : '';
  const subject = `[Web BaseLogic] Nueva consulta: ${lead.projectType} — ${lead.name}${companyTag}`;
  const timestamp = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

  const utmSummary = [
    `Página de origen: ${lead.utm.page_path || '/contacto'}`,
    `Referrer: ${lead.utm.referrer || 'Directo / No informado'}`,
    `utm_source: ${lead.utm.utm_source || '-'}`,
    `utm_medium: ${lead.utm.utm_medium || '-'}`,
    `utm_campaign: ${lead.utm.utm_campaign || '-'}`,
    `utm_term: ${lead.utm.utm_term || '-'}`,
    `utm_content: ${lead.utm.utm_content || '-'}`,
  ].join('\n');

  const text = [
    `NUEVA CONSULTA COMERCIAL — BASELOGIC WEB (${referenceId})`,
    `Fecha y hora (Chile): ${timestamp}`,
    '',
    '1. DATOS DEL CONTACTO',
    `• Nombre: ${lead.name}`,
    `• Email (Reply-To): ${lead.email}`,
    `• Teléfono: ${lead.phone || 'No indicado (opcional)'}`,
    `• Empresa u organización: ${lead.company || 'No indicada (opcional)'}`,
    '',
    '2. REQUERIMIENTO Y ALCANCE INICIAL',
    `• Solución / Tipo de proyecto: ${lead.projectType}`,
    `• Presupuesto referencial: ${lead.budget || 'No indicado'}`,
    '',
    '3. MENSAJE DEL PROSPECTO',
    lead.message,
    '',
    '4. TRAZABILIDAD COMERCIAL Y UTM',
    utmSummary,
    `IP origen: ${clientIp}`,
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="background:#090d16;padding:20px 24px;color:#ffffff;">
        <div style="font-family:monospace;font-size:12px;color:#22d3ee;text-transform:uppercase;letter-spacing:0.08em;">BaseLogic · Claridad Operacional</div>
        <h1 style="margin:6px 0 0;font-size:18px;font-weight:700;color:#ffffff;">Nueva consulta comercial desde baselogic.cl</h1>
        <div style="margin-top:4px;font-family:monospace;font-size:12px;color:#94a3b8;">ID: ${escapeHtml(referenceId)} · ${escapeHtml(timestamp)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#475569;">1. Datos de contacto</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;font-size:14px;margin-bottom:20px;">
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td width="36%" style="font-weight:600;color:#475569;background:#f8fafc;">Nombre</td>
            <td>${escapeHtml(lead.name)}</td>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="font-weight:600;color:#475569;background:#f8fafc;">Correo (Reply-To)</td>
            <td><a href="mailto:${escapeHtml(lead.email)}" style="color:#1e40af;font-weight:600;">${escapeHtml(lead.email)}</a></td>
          </tr>
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td style="font-weight:600;color:#475569;background:#f8fafc;">Teléfono</td>
            <td>${escapeHtml(lead.phone || 'No indicado (opcional)')}</td>
          </tr>
          <tr>
            <td style="font-weight:600;color:#475569;background:#f8fafc;">Empresa</td>
            <td>${escapeHtml(lead.company || 'No indicada (opcional)')}</td>
          </tr>
        </table>

        <h2 style="margin:0 0 12px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#475569;">2. Alcance consultado</h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:8px;font-size:14px;margin-bottom:20px;">
          <tr style="border-bottom:1px solid #f1f5f9;">
            <td width="36%" style="font-weight:600;color:#475569;background:#f8fafc;">Solución de interés</td>
            <td><strong style="color:#0f172a;">${escapeHtml(lead.projectType)}</strong></td>
          </tr>
          <tr>
            <td style="font-weight:600;color:#475569;background:#f8fafc;">Presupuesto referencial</td>
            <td>${escapeHtml(lead.budget || 'No especificado')}</td>
          </tr>
        </table>

        <h2 style="margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#475569;">3. Mensaje / Contexto operacional</h2>
        <div style="padding:16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap;margin-bottom:20px;">${escapeHtml(lead.message)}</div>

        <h2 style="margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:0.06em;color:#475569;">4. Trazabilidad UTM y origen</h2>
        <div style="padding:12px 16px;background:#0f172a;color:#cbd5e1;border-radius:8px;font-family:monospace;font-size:12px;line-height:1.6;">
          <div>Ruta: ${escapeHtml(lead.utm.page_path)}</div>
          <div>Referrer: ${escapeHtml(lead.utm.referrer || 'Directo')}</div>
          <div>UTM Source: ${escapeHtml(lead.utm.utm_source || '-')} | Medium: ${escapeHtml(lead.utm.utm_medium || '-')} | Campaign: ${escapeHtml(lead.utm.utm_campaign || '-')}</div>
          <div>UTM Term: ${escapeHtml(lead.utm.utm_term || '-')} | Content: ${escapeHtml(lead.utm.utm_content || '-')}</div>
          <div>Consentimiento privacidad: Aceptado explícitamente</div>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}

export async function handleContactRequest(
  request: Request,
  env: ContactWorkerEnv = {},
  customFetch: typeof fetch = fetch,
): Promise<Response> {
  const origin = request.headers.get('Origin');
  const headers = buildCorsHeaders(origin, env);

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'METHOD_NOT_ALLOWED',
        message: 'Método no permitido. Utiliza POST /api/contact.',
      }),
      { status: 405, headers },
    );
  }

  // Validación de Origin cuando está presente
  if (origin) {
    const allowedOrigins = getAllowedOrigins(env);
    if (!allowedOrigins.includes(origin)) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: 'FORBIDDEN_ORIGIN',
          message: 'Origen no autorizado para enviar solicitudes.',
        }),
        { status: 403, headers },
      );
    }
  }

  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().includes('application/json')) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: 'El contenido debe enviarse en formato application/json.',
      }),
      { status: 415, headers },
    );
  }

  const contentLength = Number(request.headers.get('Content-Length') || '0');
  if (contentLength > MAX_PAYLOAD_BYTES) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'PAYLOAD_TOO_LARGE',
        message: 'La solicitud excede el tamaño máximo permitido.',
      }),
      { status: 413, headers },
    );
  }

  const clientIp =
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
    '127.0.0.1';

  const rateLimitResult = await checkRateLimit(clientIp, env);
  if (!rateLimitResult.allowed) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'RATE_LIMITED',
        message: 'Has enviado demasiadas solicitudes en pocos minutos. Por favor espera unos minutos o escríbenos a contacto@baselogic.cl.',
      }),
      { status: 429, headers },
    );
  }

  let rawBodyText = '';
  try {
    rawBodyText = await request.text();
  } catch {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'BAD_BODY',
        message: 'No fue posible leer el cuerpo de la solicitud.',
      }),
      { status: 400, headers },
    );
  }

  if (rawBodyText.length > MAX_PAYLOAD_BYTES) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'PAYLOAD_TOO_LARGE',
        message: 'La solicitud excede el tamaño máximo permitido.',
      }),
      { status: 413, headers },
    );
  }

  let parsedBody: ContactRequestPayload;
  try {
    parsedBody = JSON.parse(rawBodyText) as ContactRequestPayload;
  } catch {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'INVALID_JSON',
        message: 'El formato JSON enviado no es válido.',
      }),
      { status: 400, headers },
    );
  }

  const validation = validateContactPayload(parsedBody);

  // Si se activó el honeypot oculto, devolvemos éxito silencioso sin invocar Resend para no gastar cuota ni alertar al bot
  if (validation.isHoneypotTriggered) {
    return new Response(
      JSON.stringify({
        ok: true,
        referenceId: 'BL-FILTERED',
        message: 'Hemos recibido tu solicitud.',
      }),
      { status: 200, headers },
    );
  }

  if (!validation.valid || !validation.data) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'VALIDATION_ERROR',
        message: 'Por favor revisa los campos marcados antes de enviar.',
        errors: validation.errors,
      }),
      { status: 400, headers },
    );
  }

  // Verificación opcional de Cloudflare Turnstile si la clave secreta está configurada en el Worker
  if (env.TURNSTILE_SECRET_KEY) {
    const token = typeof parsedBody.turnstileToken === 'string' ? parsedBody.turnstileToken.trim() : '';
    if (!token) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: 'TURNSTILE_REQUIRED',
          message: 'Confirma la verificación de seguridad antes de continuar.',
        }),
        { status: 400, headers },
      );
    }

    try {
      const verifyRes = await customFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: env.TURNSTILE_SECRET_KEY,
          response: token,
          remoteip: clientIp,
        }),
      });
      const verifyJson = (await verifyRes.json()) as { success?: boolean };
      if (!verifyJson.success) {
        return new Response(
          JSON.stringify({
            ok: false,
            code: 'TURNSTILE_FAILED',
            message: 'La verificación antispam expiró o no fue válida. Intenta nuevamente.',
          }),
          { status: 400, headers },
        );
      }
    } catch {
      return new Response(
        JSON.stringify({
          ok: false,
          code: 'TURNSTILE_UNAVAILABLE',
          message: 'No fue posible verificar el control antispam en este momento.',
        }),
        { status: 502, headers },
      );
    }
  }

  const referenceId = `BL-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const emailContent = buildInternalNotificationEmail(validation.data, referenceId, clientIp);

  // Modo de prueba local controlada cuando CONTACT_DEV_MOCK === 'true' y no hay RESEND_API_KEY
  if (!env.RESEND_API_KEY && env.CONTACT_DEV_MOCK === 'true') {
    return new Response(
      JSON.stringify({
        ok: true,
        referenceId,
        mode: 'dev-mock',
        message: 'Solicitud validada correctamente en entorno local.',
      }),
      { status: 200, headers },
    );
  }

  if (!env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'MISSING_RESEND_CONFIG',
        message:
          'El servicio de notificaciones está en configuración. Por favor envíanos tu consulta directamente a contacto@baselogic.cl.',
      }),
      { status: 503, headers },
    );
  }

  const fromAddress = env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const toAddress = env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;

  try {
    const resendResponse = await customFetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: validation.data.email,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      }),
    });

    if (!resendResponse.ok) {
      let providerErrorDetail = '';
      try {
        const errPayload = (await resendResponse.json()) as { name?: string; message?: string };
        providerErrorDetail = errPayload.message || errPayload.name || '';
      } catch {
        // Ignorar error de parseo secundario
      }

      console.error('[contact-api] Resend API error:', resendResponse.status, providerErrorDetail);

      return new Response(
        JSON.stringify({
          ok: false,
          code: 'EMAIL_DISPATCH_ERROR',
          message:
            'No pudimos despachar la notificación automática en este instante. Puedes enviarnos tu mensaje con un clic a contacto@baselogic.cl.',
        }),
        { status: 502, headers },
      );
    }

    const resendData = (await resendResponse.json()) as { id?: string };

    return new Response(
      JSON.stringify({
        ok: true,
        referenceId,
        emailId: resendData.id,
        message: 'Tu consulta fue recibida por el equipo de BaseLogic.',
      }),
      { status: 200, headers },
    );
  } catch (error) {
    console.error('[contact-api] Network error calling Resend:', error);
    return new Response(
      JSON.stringify({
        ok: false,
        code: 'UPSTREAM_ERROR',
        message:
          'Ocurrió un problema de conexión al procesar el envío. Por favor intenta nuevamente o escríbenos a contacto@baselogic.cl.',
      }),
      { status: 502, headers },
    );
  }
}
