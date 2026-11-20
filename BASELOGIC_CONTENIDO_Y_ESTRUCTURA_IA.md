# Resumen Integral y Contenido de la Web — BaseLogic (`baselogic.cl`)

> **Estado del documento:** Actualizado al **30 de octubre de 2026** tras la implementación local de las Etapas 1, 2 y 3 del rediseño bajo la identidad **«Claridad operacional»**.

---

## 1. Identidad General y Configuración Base (`src/data/site.ts` & `navigation.ts`)

- **Nombre de marca:** BaseLogic
- **Respaldo societario:** BaseLogic es una marca de **SENAS TECNOLOGÍAS SpA** (incorporado en `SiteFooter.astro`, `/legal/privacidad` y `/legal/terminos`).
- **Dominio:** `https://baselogic.cl`
- **Correo comercial:** `contacto@baselogic.cl`
- **Ubicación / Cobertura:** `Región de Coquimbo, Chile · Atención a todo Chile`
- **Tagline:** *"Tecnología que conecta y simplifica tu operación."*
- **Descripción general:** *"BaseLogic desarrolla sitios web, automatizaciones y software empresarial para organizar procesos, controlar operaciones y acompañar el crecimiento de empresas en Chile."*
- **Estado de WhatsApp:** Deshabilitado en configuración (`enabled: false`, `number: ''`), sin CTAs rotos ni enlaces a `#` o `wa.me`.
- **Menú de Navegación Principal:**
  1. Inicio (`/`)
  2. Servicios (`/servicios`)
  3. Productos (`/productos`)
  4. Planes (`/planes`)
  5. Casos de uso (`/casos-de-exito` — preparado para migración a `/soluciones` con redirección HTTP 301 en Cloudflare)
  6. Contacto (`/contacto`)

---

## 2. Mapa Completo de URLs Compiladas (`dist/` · 18 páginas estáticas)

1. `/` — Página de Inicio rediseñada bajo **Claridad operacional** (8 bloques semánticos `<section>`)
2. `/servicios` — Catálogo general de servicios
   - `/servicios/paginas-web` — Páginas web profesionales
   - `/servicios/landing-pages` — Landing pages de campaña y captación
   - `/servicios/wordpress` — WordPress autogestionable
   - `/servicios/sistemas-para-pymes` — Sistemas y paneles a medida para pymes
   - `/servicios/automatizacion` — Automatización de procesos e integraciones
3. `/productos` — Catálogo de 4 plataformas propias BaseLogic
   - `/productos/eam` — **BaseLogic EAM** (Activos, órdenes de trabajo, abastecimiento, bodega/Kardex y trazabilidad)
   - `/productos/edupay` — **BaseLogic EduPay** (Gestión financiera escolar, aranceles, cuotas, cobranza y conciliación)
   - `/productos/booking` — **BaseLogic Booking** (Agenda multiprofesional, recursos/boxes y reservas en línea)
   - `/productos/pos` — **BaseLogic POS** (En desarrollo e implementación piloto supervisada: catálogo, presentaciones de precio, apertura de caja, ventas en efectivo y saldos de inventario)
4. `/planes` — Tres planes referenciales (`$149.000`, `$399.000`, `$690.000`) y notas de alcance
5. `/casos-de-exito` — Escenarios de aplicación representativos por rubro
6. `/contacto` — Formulario serverless conectado a `POST /api/contact` (`LeadForm.tsx` + Cloudflare Worker desacoplado)
7. `/legal/privacidad` y `/legal/terminos` — Páginas legales con respaldo societario de SENAS TECNOLOGÍAS SpA
8. `/404.html` y `/sitemap.xml`

---

## 3. Arquitectura de la Nueva Home (`src/pages/index.astro`)

La página de inicio está estructurada en **8 elementos `<section>` semánticos** que equilibran superficies claras de lectura con esquemáticos oscuros de ingeniería (`#090d16`):

1. **`#hero` (`HomeHero.astro`):**
   - H1: *«Tecnología que conecta y simplifica tu operación»*.
   - Subtítulo explicando el desarrollo de sitios web, automatizaciones y software empresarial en Chile.
   - Tres compromisos operativos (*Alcance documentado*, *Evolución por etapas*, *Ingeniería en Chile*).
   - **Mapa de capacidades interactivo** con pestañas WAI-ARIA accesibles por teclado (`01 · Web y Captación`, `02 · Sistemas y Flujos`, `03 · Plataformas Propias`) e indicación explícita de *«Esquema conceptual interactivo»*.
2. **`#rutas-comerciales` (`WhatWeDoSection.astro`):**
   - Tres rutas comerciales según la etapa del visitante (*Presencia y captación*, *Sistemas y automatización*, *Plataformas BaseLogic*) con enlaces directos a cada servicio y producto.
3. **`#claridad-operacional` (`OperationalClaritySection.astro`):**
   - Demostración comparativa interactiva (*Antes: Operación fragmentada* vs. *Después: Flujo estructurado*) con pestañas accesibles por teclado para **BaseLogic EAM**, **BaseLogic Booking** y **BaseLogic EduPay**.
4. **`#servicios` (`MainServicesSection.astro`):**
   - Tres pilares de ingeniería y servicios tecnológicos con desglose de entregables técnicos concretos.
5. **`#productos` (`ProductsPreviewSection.astro`):**
   - Cuadrícula 2×2 de las **4 plataformas propias** (`BaseLogic EAM`, `BaseLogic EduPay`, `BaseLogic Booking` y `BaseLogic POS`), con cabeceras esquemáticas de sus módulos verificados y modalidades comerciales transparentes.
6. **`#soluciones-y-metodo` (`IndustriesUseCasesSection.astro`):**
   - Cuatro escenarios de aplicación representativos por industria + metodología de trabajo en 4 etapas.
7. **`#planes-y-faq` (`PlansPreviewSection.astro`):**
   - Los 3 planes referenciales (`$149.000`, `$399.000`, `$690.000`), notas de alcance y bloque compacto de Preguntas Frecuentes (`generalFaqs`).
8. **`#evaluacion-proyecto` (`FinalCtaSection.astro`):**
   - Cierre de conversión con acceso directo a `/contacto#formulario` y `mailto:contacto@baselogic.cl`.

---

## 4. Arquitectura del Formulario y Worker (`POST /api/contact`)

- **Componente cliente:** `src/components/LeadForm.tsx` (hidratado en `/contacto`, con `company` y `phone` opcionales, preselección por query string `?producto=`/`?servicio=`, captura automática de parámetros UTM, consentimiento obligatorio de Política de Privacidad y confirmación visual con código de referencia).
- **Lógica de validación y envío:** `src/lib/contactHandler.ts` (estándar Web `Request`/`Response`, sin bloqueo por tiempo mínimo de llenado para soportar autocompletado, con filtro *honeypot*, escapado HTML contra XSS, validación de `Origin` y soporte para el binding nativo de Rate Limiting de Cloudflare Workers `CONTACT_RATE_LIMITER`).
- **Entrypoint del Cloudflare Worker:** `workers/contact-api/src/index.ts` y `workers/contact-api/wrangler.toml`.
- **Integración Resend:** Configurado para enviar notificación interna desde `BaseLogic · Notificaciones Web <notificaciones@baselogic.cl>` hacia `contacto@baselogic.cl` con `reply_to` del prospecto, empleando una API Key exclusiva (`RESEND_API_KEY`).
