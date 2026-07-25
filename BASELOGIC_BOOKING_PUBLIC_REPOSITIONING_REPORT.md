# Reporte de Rediseño y Reposicionamiento Comercial: BaseLogic Booking

**Fecha:** 25 de julio de 2026  
**Proyecto:** BaseLogic Web (`C:\Users\nicol\Documents\baselogic-web`)  
**Página intervenida:** `/productos/booking` (`src/pages/productos/booking.astro`)  

---

## 1. Estado Git Inicial

- **Rama activa:** `master`
- **HEAD commit:** `e776781980370be6bfc014ad2513cfa2ba0ed3d4` (`feat(home): rediseño visual e interactivo del Home, Bento Grid, imagenes WebP y optimizacion a 60 FPS`)
- **Diferencia con remoto (`origin/master`):** 0 commits por delante / al día.
- **Working tree:** Limpio (únicamente el archivo untracked `BASELOGIC_BOOKING_PRODUCT_EXTRACTION.md`).
- **Cambios locales existentes:** Ninguno previo al inicio de la tarea.

---

## 2. Auditoría de la Página Booking Anterior

### Estado previo (`src/pages/productos/booking.astro`)
- **Estructura:** Scaffold mínimo de 67 líneas. Utilizaba únicamente `ListingHero`, un bloque general de 2 columnas con `summary`, `audience` y una lista simple de 4 `features`, seguido de un placeholder `bg-brand-soft` y `FaqBlock` básico con 2 preguntas.
- **Copy:** Promesa generalista ("Reservas simples para negocios que atienden por hora"), sin profundidad comercial ni especificación operacional.
- **SEO:** Meta title genérico ("Sistema de reservas para negocios y pymes | BaseLogic Booking"), sin migas de pan (`BreadcrumbList`) en JSON-LD.
- **CTA:** CTA único a `/contacto` sin arquitectura ni interfaz para soportar demos futuras.
- **Asset visual:** Utilizaba `/images/generated/products/booking-hero.webp` correctamente asignado, pero sin la riqueza estructural requerida.
- **Diferencias frente a EAM:** La página de EAM contaba con 170 líneas, 6 capacidades operacionales, 6 casos de uso por rubro, sección oscura de diferenciación con 5 beneficios, breadcrumbs schema y jerarquía visual madura. Booking se percibía como una maqueta incompleta.

---

## 3. Posicionamiento Seleccionado

- **Audiencia principal:** Profesionales independientes, kinesiólogos, centros terapéuticos simples, barberías, peluquerías, salones de belleza, centros de estética, consultores y asesores con atención programada.
- **Enfoque comercial:** Solución profesional para organizar servicios, profesionales, sucursales y recursos reservables (boxes/salas), reduciendo la coordinación manual por mensajes y la duplicación de horarios.
- **Límite explícito:** Se mantiene como software de gestión de agenda y reservas comercial. **No se posiciona como sistema clínico ni almacena fichas médicas ni diagnósticos**.

---

## 4. Claims Publicados vs. Excluidos

### Claims Autorizados e Implementados
- Reservas en línea y agenda de disponibilidad.
- Gestión de servicios (duración, profesionales asignados).
- Gestión de profesionales y asignación de horarios/pausas.
- Sucursales y recursos reservables (boxes, salas, puestos).
- Bloqueos, excepciones y tiempos entre citas (buffers).
- Anticipación mínima e intervalos de reserva.
- Prevención de reservas superpuestas (coordinación de profesional y recurso).
- Centralización de datos de contacto del cliente para la reserva.
- Experiencia responsive (desktop, tablet, mobile).
- Soporte local en Chile.

### Claims Prohibidos y Estrictamente Excluidos
- ❌ Pagos en línea (Webpay, Transbank, Mercado Pago, abonos, reembolsos).
- ❌ Notificaciones automáticas por WhatsApp, SMS o correos automáticos.
- ❌ Recordatorios automáticos o confirmaciones por mensajería externa.
- ❌ Aplicación móvil nativa o sincronización con Google Calendar.
- ❌ Telemedicina, ficha clínica o diagnósticos médicos.
- ❌ Reportes avanzados o Inteligencia Artificial (IA).
- ❌ Reducción porcentual garantizada de no-shows.
- ❌ Logos o nombres de clientes actuales inventados.
- ❌ Certificaciones legales automáticas o funcionamiento offline.
- ❌ Menciones a "próximamente" para las características anteriores.

---

## 5. Estructura y Secciones Creadas en `/productos/booking`

1. **Hero Principal (`ListingHero`)**:
   - **Eyebrow:** `Sistema de reservas online para pymes`
   - **H1:** `Organiza tu agenda y recibe reservas en línea sin depender de mensajes`
   - **Descripción:** `Centraliza servicios, profesionales, horarios y disponibilidad en una plataforma diseñada para negocios que trabajan con atención programada.`
   - **CTA Principal:** `Cotizar Booking` -> `/contacto`
   - **Visual Asset:** `public/images/generated/products/booking-hero.webp` (Alt: *"Recepción moderna con una tablet mostrando una agenda digital de reservas"*).

2. **Introducción y Problemas Operacionales**:
   - **Título:** `Deja de coordinar cada hora de forma manual`
   - **Texto:** Explicación del impacto de recibir reservas desordenadas por mensajes dispersos.
   - **3 Tarjetas de problema:**
     - *Mensajes dispersos:* Evita revisar diferentes conversaciones para confirmar quién reservó.
     - *Horarios duplicados:* La disponibilidad considera profesionales, servicios y recursos antes de ofrecer una hora.
     - *Agenda difícil de administrar:* Mantén servicios, horarios y reservas desde un entorno centralizado.

3. **Cómo Funciona (Paso a Paso en 4 Etapas)**:
   - **Título:** `Configura tu negocio y comienza a recibir reservas`
   - **Paso 01:** *Configura tus servicios* (duración, responsables).
   - **Paso 02:** *Organiza profesionales y horarios* (disponibilidad, pausas, excepciones).
   - **Paso 03:** *Publica las horas disponibles* (opciones reales por servicio, staff, sucursal o box).
   - **Paso 04:** *Gestiona las reservas* (agenda e información centralizada).

4. **Capacidades Principales (6 Tarjetas con Iconografía Lucide)**:
   - *Agenda y disponibilidad* (horarios semanales, bloqueos, excepciones).
   - *Servicios y profesionales* (reglas de atención y asignación).
   - *Sucursales y espacios* (boxes, salas y recursos).
   - *Reservas sin superposición* (prevención de dobles reservas).
   - *Información de clientes* (centralización de datos clave).
   - *Reglas adaptables* (anticipación, intervalos y tiempos de limpieza/buffer).

5. **Tipos de Negocios (4 Verticales Compatibles)**:
   - *Salud y bienestar:* Kinesiólogos, terapeutas y centros que coordinan profesionales y boxes.
   - *Belleza y cuidado personal:* Peluquerías, barberías, salones de belleza y estética.
   - *Profesionales independientes:* Consultores, asesores y especialistas.
   - *Servicios con recursos:* Negocios que reservan salas, equipos o puestos.

6. **Diferenciación Operacional y Beneficios (Sección Oscura `bg-slate-950`)**:
   - **Título:** `Más que un calendario compartido`
   - **Comparaciones:** Agenda manual vs. Calendario genérico vs. BaseLogic Booking.
   - **6 Beneficios directos:** Menos coordinación manual, claridad de disponibilidad, servicios organizados, menor riesgo de solapamiento, información centralizada, experiencia multidispositivo.

7. **Preguntas Frecuentes (`FaqBlock`)**:
   - 6 preguntas autorizadas que abordan rubros, múltiples profesionales, gestión de boxes, prevención de duplicidad, personalización de horarios y adaptabilidad.

8. **CTA Final Dedicado**:
   - **Título:** `Ordena las reservas de tu negocio con BaseLogic Booking`
   - **Texto:** `Cuéntanos cómo administras actualmente tus horas y prepararemos una solución adaptada a tus servicios, profesionales y forma de atención.`
   - **CTA:** `Cotizar Booking` -> `/contacto` (Sin botón ni enlace a WhatsApp).

---

## 6. SEO y Estructura de Datos (JSON-LD)

- **Title Tag:** `Sistema de reservas online para pymes | BaseLogic Booking`
- **Meta Description:** `Organiza servicios, profesionales, horarios y reservas en línea con BaseLogic Booking, una plataforma de agenda para pymes y profesionales en Chile.`
- **URL Canónica:** `https://baselogic.cl/productos/booking`
- **Open Graph:** OG Title, OG Description, OG Image (`/og-baselogic.svg`), OG Type `website`, OG Locale `es_CL`.
- **Esquemas JSON-LD validados en la página:**
  - `@type: Organization` (`https://baselogic.cl/#organization`)
  - `@type: WebSite` (`https://baselogic.cl/#website`)
  - `@type: ProfessionalService` (`https://baselogic.cl/#professional-service`)
  - `@type: BreadcrumbList` (Inicio -> Productos -> BaseLogic Booking)
  - `@type: SoftwareApplication` (Name: BaseLogic Booking, Category: BusinessApplication, OS: Web)
  - `@type: FAQPage` (MainEntity con las 6 preguntas autorizadas)

---

## 7. Preparación Técnica de Futuro CTA de Demo

- **Campos en datos (`src/data/products.ts`):** Adición de `demoUrl?: string | undefined` al objeto de producto.
- **Componente `ListingHero.astro`:** Soporte para props `secondaryCtaLabel`, `secondaryCtaHref`, `secondaryCtaTarget`, `secondaryCtaRel`, `secondaryCtaDataEvent`.
- **Regla de renderizado:** Cuando `demoUrl` no está definido o es string vacío, el componente **no renderiza ningún botón, badge ni contenedor vacío**. Cuando se defina (ej. `https://demo.baselogic.cl/booking`), renderizará el botón *"Ver demo"* con `target="_blank"`, `rel="noopener noreferrer"` y `data-event="booking_demo_click"`.
- **Navegación:** No se agregó ningún enlace de demo al menú de navegación del sitio.

---

## 8. Cambios en Páginas Globales

- **`/productos` (`src/pages/productos/index.astro` / `src/data/products.ts`):** Actualización de la descripción en la tarjeta de Booking a:  
  *"Agenda y reservas online para negocios que trabajan con servicios, profesionales, sucursales y recursos."*
- **Home (`src/components/ProductsPreviewSection.astro`):** Sincronización automática de la tarjeta de Booking con el nuevo copy y lista de características aprobadas.

---

## 9. QA Responsive

Validado en el bundle de producción y renderizado CSS/HTML:
- **320×568 (Mobile S):** H1 visible con tipografía adaptativa `text-[1.875rem]`, padding compacto, tarjetas en single column sin desbordamiento lateral (`overflow-x-hidden`), CTA touch-friendly.
- **390×844 (Mobile M):** Flujo de tarjetas de pasos y capacidades equilibrado, legibilidad óptima.
- **768×1024 (Tablet):** Grid de 2 columnas en capacidades e industrias, menú mobile colapsado correctamente en un solo ícono.
- **1366×768 & 1440×900 (Desktop):** Grid de 3 y 4 columnas en pasos, capacidades y tipos de negocio; layout de 2 columnas en hero e introducción.

---

## 10. Resultado del Build y Barridos de Seguridad

### Verificación del Build (`npm run build`)
- **Resultado:** Exitoso (Exit code 0).
- **Rutas estáticas generadas:** 17 páginas en 5.41s.
- **Ruta validada:** `/productos/booking/index.html` generada sin errores de Astro, TypeScript o Vite.

### Barrido de Términos Prohibidos (`ripgrep`)
Se ejecutó un escaneo estricto buscando términos prohibidos en `src/`, `public/` y `dist/productos/booking/index.html`:
- `Webpay`: 0 coincidencias en Booking.
- `Transbank`: 0 coincidencias en Booking.
- `Mercado Pago`: 0 coincidencias en Booking.
- `WhatsApp / wa.me`: 0 coincidencias en la landing ni CTA de Booking.
- `87751255`: 0 coincidencias.
- `baselogic.dev`: 0 coincidencias.
- `AppointmentHold / BookingClaim / GiST`: 0 coincidencias públicas.
- `demo.baselogic.cl/booking`: 0 coincidencias (permanece oculto en producción).

---

## 11. Resumen de Archivos Modificados

1. `src/data/seo.ts` - Título y descripción SEO de Booking.
2. `src/data/products.ts` - Datos comerciales de Booking, resumen, características y `demoUrl`.
3. `src/data/faqs.ts` - 6 FAQs comerciales autorizadas de Booking.
4. `src/components/ListingHero.astro` - Soporte para CTA secundario preparado para demo futura.
5. `src/pages/productos/booking.astro` - Rediseño completo de la landing pública de Booking.
6. `BASELOGIC_BOOKING_PUBLIC_REPOSITIONING_REPORT.md` - Documento de reporte obligatorio.

---

## 12. Próximos Pasos Recomendados para la Demo

1. **Construcción del entorno demo aislado (`demo.baselogic.cl/booking`):**
   - Habilitar una instancia de visualización interactiva de Booking con datos simulados de un negocio de salud/estética chileno.
   - Configurar reseteo automático de datos cada 2 horas y deshabilitar los envíos reales de correos y pasarelas de pago.
2. **Activación del CTA de demo:**
   - Asignar `demoUrl: 'https://demo.baselogic.cl/booking'` en `src/data/products.ts` cuando el entorno demo esté operativo y verificado en seguridad.
