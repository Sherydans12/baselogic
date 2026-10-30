# BaseLogic Contact API — Cloudflare Worker (`POST /api/contact`)

Worker desacoplado para procesar consultas del formulario de contacto de `baselogic.cl`, con validación estricta en servidor, protección antispam, límite de tasa distribuido en el Edge de Cloudflare, trazabilidad UTM y despacho de notificación interna vía **Resend**.

---

## 1. Diagnóstico DNS actual de `baselogic.cl` y Verificación en Resend

Al inspeccionar los servidores DNS autoritativos de `baselogic.cl` (`jasmine.ns.cloudflare.com`), el estado actual es:
- **Correo entrante (`@`):** Operando en **Zoho Mail** (`mx.zoho.com`, `mx2.zoho.com`, `mx3.zoho.com`).
- **SPF raíz (`TXT @`):** `v=spf1 include:zohomail.com include:_spf.mx.cloudflare.net ~all`.
- **DMARC (`TXT _dmarc`):** `v=DMARC1; p=none;`.
- **Registros de Resend (`resend._domainkey.baselogic.cl` y `send.baselogic.cl`):** **Pendientes de agregar en Cloudflare DNS.**

### Pasos para verificar `baselogic.cl` en Resend (sin afectar Zoho Mail)
1. En el panel de **Resend → Domains**, agregar el dominio `baselogic.cl` (región recomendada: `sa-east-1` São Paulo o `us-east-1`).
2. Copiar los **3 registros DNS** que entrega Resend y agregarlos en la zona DNS de Cloudflare de `baselogic.cl` (con **Proxy desactivado / DNS Only**):
   - **DKIM:** Tipo `TXT`, Nombre `resend._domainkey`, Valor `p=MIGfMA0GCSqGSIb3...` (entregado por Resend).
   - **SPF Return-Path (subdominio `send`):** Tipo `TXT`, Nombre `send`, Valor `v=spf1 include:amazonses.com ~all`. *(No modifica el TXT SPF raíz de Zoho Mail).*
   - **MX Return-Path (subdominio `send`):** Tipo `MX`, Nombre `send`, Servidor `feedback-smtp.<region>.amazonses.com`, Prioridad `10`. *(No modifica los MX raíz de Zoho Mail).*
3. Una vez que el estado del dominio en Resend figure como **Verified**, crear una **API Key exclusiva para la web corporativa**:
   - Nombre sugerido: `baselogic-web-contact-prod`
   - Permiso: `Sending access`
   - Dominio restringido: `baselogic.cl`
   - **Importante:** No reutilizar credenciales ni llaves de `EduPay` ni de otros sistemas.

---

## 2. Identidad de Correo Configurada

- **From:** `BaseLogic · Notificaciones Web <notificaciones@baselogic.cl>`
- **To:** `contacto@baselogic.cl`
- **Reply-To:** Correo electrónico ingresado por el prospecto en el formulario.
- **Alcance de envío:** Envía únicamente la notificación interna estructurada a `contacto@baselogic.cl` (sin acuse automático al prospecto en esta etapa para prevenir abuso de rebote o *spam reflection*).

---

## 3. Seguridad y Rate Limiting en Cloudflare

- **Rate Limiting consistente en el Edge:** Configurado en `wrangler.toml` mediante el binding nativo `CONTACT_RATE_LIMITER` (`type = "ratelimit"` de Cloudflare Workers), más soporte opcional para `RATE_LIMIT_KV`. Adicionalmente se recomienda activar una regla en **Cloudflare Security → WAF → Rate limiting rules** para `URI Path equals /api/contact AND Method equals POST`.
- **Sin bloqueo por autocompletado:** No se aplica penalización por tiempo mínimo de llenado para no bloquear a usuarios reales que utilizan autocompletado del navegador o gestores de contraseñas.
- **Protección Antispam:** Campo *honeypot* (`company_website`), validación de `Origin` (`https://baselogic.cl`), validación de tipos/esquema, escapado HTML contra XSS y soporte opcional para Cloudflare Turnstile (`TURNSTILE_SECRET_KEY`).

---

## 4. Comandos de Prueba y Despliegue (Cuando sea autorizado)

```bash
# 1. Ejecutar suite de pruebas unitarias e integrales localmente:
node --experimental-strip-types ./scratch/test-contact-worker.ts

# 2. Cargar secreto de Resend en Cloudflare (requiere autorización):
cd workers/contact-api
npx wrangler secret put RESEND_API_KEY

# 3. Desplegar Worker (requiere autorización):
npx wrangler deploy
```
