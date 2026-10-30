import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Mail, RotateCcw, Send, ShieldCheck } from 'lucide-react';
import { budgetRanges, createMailtoHref, projectTypes } from '../data/contact';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  privacyAccepted: boolean;
  company_website: string;
};

type UtmState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  page_path: string;
  referrer: string;
};

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: projectTypes[0],
  budget: budgetRanges[0],
  message: '',
  privacyAccepted: false,
  company_website: '',
};

const initialUtm: UtmState = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  page_path: '/contacto',
  referrer: '',
};

const QUERY_PROJECT_MAP: Record<string, string> = {
  web: 'Página web',
  'paginas-web': 'Página web',
  landing: 'Landing page',
  'landing-pages': 'Landing page',
  wordpress: 'WordPress',
  sistemas: 'Sistema para pyme',
  'sistemas-para-pymes': 'Sistema para pyme',
  automatizacion: 'Automatización',
  booking: 'BaseLogic Booking',
  edupay: 'BaseLogic EduPay',
  eam: 'BaseLogic EAM',
  pos: 'BaseLogic POS (Piloto)',
  soporte: 'Soporte mensual',
};

const buildLeadMessage = (form: FormState) =>
  [
    'Hola BaseLogic, quiero cotizar o evaluar un proyecto tecnológico.',
    '',
    `Nombre: ${form.name}`,
    `Email: ${form.email}`,
    `Teléfono de contacto: ${form.phone || 'No indicado'}`,
    `Empresa o negocio: ${form.company || 'No indicada'}`,
    `Tipo de proyecto: ${form.projectType}`,
    `Presupuesto aproximado: ${form.budget}`,
    '',
    `Mensaje: ${form.message}`,
  ].join('\n');

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [utm, setUtm] = useState<UtmState>(initialUtm);
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [referenceId, setReferenceId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const nextUtm: UtmState = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      page_path: window.location.pathname + window.location.search,
      referrer: document.referrer || '',
    };
    setUtm(nextUtm);

    const requestedKey = (
      params.get('producto') ||
      params.get('servicio') ||
      params.get('tipo') ||
      ''
    )
      .trim()
      .toLowerCase();

    if (requestedKey && QUERY_PROJECT_MAP[requestedKey]) {
      setForm((prev) => ({ ...prev, projectType: QUERY_PROJECT_MAP[requestedKey] }));
    }
  }, []);

  const leadMessage = useMemo(() => buildLeadMessage(form), [form]);
  const mailtoHref = useMemo(
    () => createMailtoHref(`Consulta web: ${form.projectType}`, leadMessage),
    [form.projectType, leadMessage],
  );

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (fieldErrors[field as string]) {
      setFieldErrors((current) => {
        const copy = { ...current };
        delete copy[field as string];
        return copy;
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setServerMessage('');
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
          privacyAccepted: form.privacyAccepted,
          company_website: form.company_website,
          utm,
        }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        referenceId?: string;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !payload.ok) {
        setStatus('error');
        setServerMessage(
          payload.message ||
            'No fue posible procesar el formulario en este momento. Revisa los datos o utiliza el enlace directo de correo.',
        );
        if (payload.errors) {
          setFieldErrors(payload.errors);
        }
        return;
      }

      setReferenceId(payload.referenceId || 'BL-RECIBIDO');
      setStatus('success');
    } catch {
      setStatus('error');
      setServerMessage(
        'Ocurrió un error de conexión al enviar tu solicitud. Puedes reintentar o abrir tu correo con la información ya preparada.',
      );
    }
  };

  const handleReset = () => {
    setForm(initialState);
    setFieldErrors({});
    setServerMessage('');
    setReferenceId('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div
        id="formulario"
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-emerald-200 bg-white p-6 md:p-8 shadow-sm"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          Solicitud recibida · Ref: {referenceId}
        </div>

        <h3 className="mt-4 text-2xl font-black text-slate-950">
          Recibimos tu consulta correctamente
        </h3>
        <p className="mt-2 text-base leading-7 text-slate-600">
          Hemos notificado al equipo de BaseLogic en{' '}
          <strong className="font-semibold text-slate-900">contacto@baselogic.cl</strong>. Revisaremos el
          contexto de tu requerimiento y te responderemos directamente a{' '}
          <strong className="font-semibold text-slate-900">{form.email}</strong> con los siguientes pasos.
        </p>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-slate-500">
            Resumen registrado
          </div>
          <dl className="mt-3 grid gap-2 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-slate-500">Contacto</dt>
              <dd className="font-semibold text-slate-900">{form.name}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500">Solución consultada</dt>
              <dd className="font-semibold text-slate-900">{form.projectType}</dd>
            </div>
            {form.company && (
              <div>
                <dt className="text-xs text-slate-500">Empresa</dt>
                <dd className="font-semibold text-slate-900">{form.company}</dd>
              </div>
            )}
            {form.phone && (
              <div>
                <dt className="text-xs text-slate-500">Teléfono</dt>
                <dd className="font-semibold text-slate-900">{form.phone}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <RotateCcw className="h-4 w-4" />
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="formulario"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
    >
      <div className="mb-6 border-b border-slate-100 pb-4">
        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-blue">
          Formulario directo · Claridad de alcance
        </span>
        <h2 className="mt-1 text-xl font-black text-slate-950 md:text-2xl">
          Cuéntanos qué proceso o proyecto quieres evaluar
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Los campos marcados con <span className="font-bold text-brand-blue">*</span> son obligatorios. Empresa y
          teléfono son opcionales.
        </p>
      </div>

      {/* Honeypot oculto para bots automatizados */}
      <div
        className="pointer-events-none absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="lead-company-website">
          Sitio web corporativo (no completar)
          <input
            id="lead-company-website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company_website}
            onChange={(event) => updateField('company_website', event.target.value)}
          />
        </label>
      </div>

      {status === 'error' && serverMessage && (
        <div
          role="alert"
          className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div className="grid gap-1">
            <p className="font-bold">Revisa el envío antes de continuar</p>
            <p className="text-red-800">{serverMessage}</p>
          </div>
        </div>
      )}

      <div className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-name" className="grid gap-2 text-sm font-bold text-slate-700">
            <span>
              Nombre <span className="text-brand-blue">*</span>
            </span>
            <input
              id="lead-name"
              name="name"
              autoComplete="name"
              required
              placeholder="Ej. Carolina Rojas"
              value={form.name}
              aria-invalid={Boolean(fieldErrors.name)}
              onChange={(event) => updateField('name', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
            {fieldErrors.name && <span className="text-xs font-semibold text-red-600">{fieldErrors.name}</span>}
          </label>

          <label htmlFor="lead-email" className="grid gap-2 text-sm font-bold text-slate-700">
            <span>
              Correo electrónico <span className="text-brand-blue">*</span>
            </span>
            <input
              id="lead-email"
              name="email"
              required
              type="email"
              autoComplete="email"
              placeholder="nombre@empresa.cl"
              value={form.email}
              aria-invalid={Boolean(fieldErrors.email)}
              onChange={(event) => updateField('email', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
            {fieldErrors.email && <span className="text-xs font-semibold text-red-600">{fieldErrors.email}</span>}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-company" className="grid gap-2 text-sm font-bold text-slate-700">
            <span className="flex items-center justify-between">
              <span>Empresa u organización</span>
              <span className="text-xs font-normal text-slate-400">(opcional)</span>
            </span>
            <input
              id="lead-company"
              name="company"
              autoComplete="organization"
              placeholder="Nombre de tu empresa o proyecto"
              value={form.company}
              aria-invalid={Boolean(fieldErrors.company)}
              onChange={(event) => updateField('company', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
            {fieldErrors.company && <span className="text-xs font-semibold text-red-600">{fieldErrors.company}</span>}
          </label>

          <label htmlFor="lead-phone" className="grid gap-2 text-sm font-bold text-slate-700">
            <span className="flex items-center justify-between">
              <span>Teléfono de contacto</span>
              <span className="text-xs font-normal text-slate-400">(opcional)</span>
            </span>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+56 9 1234 5678"
              value={form.phone}
              aria-invalid={Boolean(fieldErrors.phone)}
              onChange={(event) => updateField('phone', event.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            />
            {fieldErrors.phone && <span className="text-xs font-semibold text-red-600">{fieldErrors.phone}</span>}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label htmlFor="lead-project-type" className="grid gap-2 text-sm font-bold text-slate-700">
            <span>
              ¿Qué necesitas resolver? <span className="text-brand-blue">*</span>
            </span>
            <select
              id="lead-project-type"
              name="projectType"
              value={form.projectType}
              aria-invalid={Boolean(fieldErrors.projectType)}
              onChange={(event) => updateField('projectType', event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {fieldErrors.projectType && (
              <span className="text-xs font-semibold text-red-600">{fieldErrors.projectType}</span>
            )}
          </label>

          <label htmlFor="lead-budget" className="grid gap-2 text-sm font-bold text-slate-700">
            <span className="flex items-center justify-between">
              <span>Presupuesto aproximado</span>
              <span className="text-xs font-normal text-slate-400">(opcional)</span>
            </span>
            <select
              id="lead-budget"
              name="budget"
              value={form.budget}
              onChange={(event) => updateField('budget', event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
            >
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label htmlFor="lead-message" className="grid gap-2 text-sm font-bold text-slate-700">
          <span>
            Mensaje o contexto de tu operación <span className="text-brand-blue">*</span>
          </span>
          <textarea
            id="lead-message"
            name="message"
            required
            rows={4}
            placeholder="Cuéntanos brevemente qué hace tu empresa, qué problema quieres resolver y en qué etapa estás..."
            value={form.message}
            aria-invalid={Boolean(fieldErrors.message)}
            onChange={(event) => updateField('message', event.target.value)}
            className="resize-y rounded-xl border border-slate-200 px-4 py-3 font-medium text-slate-950 outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10"
          />
          {fieldErrors.message && <span className="text-xs font-semibold text-red-600">{fieldErrors.message}</span>}
        </label>

        <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5">
          <label htmlFor="lead-privacy" className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-700">
            <input
              id="lead-privacy"
              name="privacyAccepted"
              type="checkbox"
              required
              checked={form.privacyAccepted}
              aria-invalid={Boolean(fieldErrors.privacyAccepted)}
              onChange={(event) => updateField('privacyAccepted', event.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
            />
            <span>
              Acepto el tratamiento de mis datos de contacto para evaluar esta solicitud conforme a la{' '}
              <a
                href="/legal/privacidad"
                className="font-semibold text-brand-blue underline hover:text-slate-950"
              >
                Política de Privacidad
              </a>{' '}
              de BaseLogic (SENAS TECNOLOGÍAS SpA). No enviamos correo masivo ni compartimos tu información con
              terceros. <span className="font-bold text-brand-blue">*</span>
            </span>
          </label>
          {fieldErrors.privacyAccepted && (
            <p className="mt-1.5 pl-7 text-xs font-semibold text-red-600">{fieldErrors.privacyAccepted}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-base font-bold text-white shadow-sm transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              Enviando solicitud...
              <Loader2 className="h-5 w-5 animate-spin" />
            </>
          ) : (
            <>
              Enviar solicitud
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
        >
          <Mail className="h-4 w-4" />
          Abrir en correo
        </a>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
        <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" />
        <span>
          Recepción directa en <strong>contacto@baselogic.cl</strong> con protección antispam y validación en
          servidor.
        </span>
      </div>
    </form>
  );
}
