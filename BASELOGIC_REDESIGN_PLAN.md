# BaseLogic Redesign Plan

Fecha: 2026-06-18  
Repositorio: `baselogic-web`  
Etapa: planificación técnica previa a implementación  
Alcance: rediseño completo de arquitectura comercial, contenido, rutas, SEO técnico, componentes y migración.

Este documento no implementa cambios. Define el plan para rediseñar el sitio de BaseLogic desde el posicionamiento anterior, centrado en ingeniería enterprise y software complejo, hacia una propuesta clara para pymes y empresas en Chile.

## 1. Resumen ejecutivo

El sitio actual tiene una base técnica liviana y útil para reconstruir: Astro, Tailwind, algunos componentes reutilizables y una estructura simple de páginas. El principal problema no es la tecnología, sino la orientación comercial: la mayoría del contenido, navegación, visuales y CTAs comunican software enterprise, white label, auditoría técnica, stack y complejidad.

La nueva versión debe convertirse en una web corporativa orientada a conversión para clientes no técnicos. El sitio debe explicar con claridad qué hace BaseLogic, qué servicios se pueden contratar, qué productos existen, cuánto puede costar empezar y cómo pedir una cotización sin fricción.

La estrategia recomendada es rehacer la arquitectura pública desde datos centralizados en `src/data`, usar nuevos componentes comerciales neutrales y mantener solo las partes técnicas que sirven como base: `Layout`, estilos globales, assets de marca, WhatsApp y algunas estructuras visuales adaptables.

El rediseño debe evitar que sobreviva copy antiguo como mensaje visible: `white label`, `agencias`, `enterprise`, `no hacemos sitios web`, `CTO`, `stack técnico`, `auditoría técnica` y `operaciones complejas` deben salir de la comunicación principal.

## 2. Objetivo del rediseño

### 2.1 Objetivo comercial

Reposicionar BaseLogic como socio digital para pymes y empresas en Chile que necesitan:

- páginas web profesionales
- landing pages
- WordPress autogestionable
- webs estáticas rápidas
- catálogos y tiendas simples
- sistemas simples para operar mejor
- reservas, clientes, pagos, inventario y reportes
- automatización de tareas manuales
- soporte digital mensual
- productos propios como Booking, EduPay y EAM

### 2.2 Objetivo técnico

Construir una arquitectura Astro escalable, mantenible y preparada para SEO, donde el contenido comercial viva en datos centralizados y las páginas consuman esos datos de forma consistente.

### 2.3 Objetivo de conversión

Hacer que un cliente no técnico pueda entender en menos de un minuto:

- qué hace BaseLogic
- qué servicio le conviene
- qué productos existen
- cuánto cuesta empezar
- cómo cotizar
- cómo hablar por WhatsApp

### 2.4 Principio rector

La nueva web debe sonar como una empresa que resuelve problemas digitales concretos, no como una consultora técnica explicando su stack.

## 3. Rutas actuales a conservar, reemplazar, eliminar o redirigir

| Ruta actual | Archivo actual | Acción recomendada | Destino o criterio |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Reemplazar | Nueva home comercial para pymes. |
| `/contacto` | `src/pages/contacto.astro` | Reemplazar | Nuevo contacto con formulario real, email y WhatsApp. |
| `/servicios/saas` | `src/pages/servicios/saas.astro` | Redirigir | `/servicios/sistemas-para-pymes`. |
| `/servicios/api` | `src/pages/servicios/api.astro` | Redirigir | `/servicios/automatizacion`. |
| `/servicios/auditoria` | `src/pages/servicios/auditoria.astro` | Redirigir u ocultar | Recomendado: `/servicios`. No será línea pública principal. |
| `/servicios/eam` | `src/pages/servicios/eam.astro` | Redirigir | `/productos/eam`. |
| `/legal/privacidad` | `src/pages/legal/privacidad.astro` | Conservar y ajustar metadata | Mantener ruta. |
| `/legal/terminos` | `src/pages/legal/terminos.astro` | Conservar y ajustar metadata | Mantener ruta. |
| `/404` | `src/pages/404.astro` | Adaptar | Nuevo tono menos técnico. |
| `/en` | `src/pages/en/index.astro` | Pausar o reemplazar | Decidir si habrá versión inglesa en v0.1. |
| `/en/contact` | `src/pages/en/contact.astro` | Pausar o reemplazar | Mantener solo si se confirma sitio bilingüe. |
| `/en/services/saas` | `src/pages/en/services/saas.astro` | Redirigir o pausar | Depende de decisión bilingüe. |
| `/en/services/api` | `src/pages/en/services/api.astro` | Redirigir o pausar | Depende de decisión bilingüe. |
| `/en/services/audit` | `src/pages/en/services/audit.astro` | Eliminar de navegación | No es prioridad comercial. |
| `/en/services/eam` | `src/pages/en/services/eam.astro` | Redirigir o adaptar | Posible `/en/products/eam` si se mantiene EN. |
| `/en/legal/privacy` | `src/pages/en/legal/privacy.astro` | Conservar si hay EN | Ajustar metadata. |
| `/en/legal/terms` | `src/pages/en/legal/terms.astro` | Conservar si hay EN | Ajustar metadata. |

### 3.1 Redirecciones recomendadas

Implementar redirecciones cuando se haga el cambio de rutas, idealmente en `astro.config.mjs` o en la plataforma de hosting:

| Antigua | Nueva | Tipo |
|---|---|---|
| `/servicios/saas` | `/servicios/sistemas-para-pymes` | 301 |
| `/servicios/api` | `/servicios/automatizacion` | 301 |
| `/servicios/eam` | `/productos/eam` | 301 |
| `/servicios/auditoria` | `/servicios` | 301 |
| `/en/services/saas` | `/servicios/sistemas-para-pymes` o equivalente EN | 301 |
| `/en/services/api` | `/servicios/automatizacion` o equivalente EN | 301 |
| `/en/services/eam` | `/productos/eam` o equivalente EN | 301 |
| `/en/services/audit` | `/servicios` o equivalente EN | 301 |

### 3.2 Rutas antiguas a retirar de navegación

- `/servicios/saas`
- `/servicios/api`
- `/servicios/auditoria`
- `/servicios/eam`
- todas las rutas `/en/services/*` hasta confirmar estrategia bilingüe

## 4. Sitemap objetivo

### 4.1 Sitemap v0.1 completo

```text
/
/servicios
/servicios/paginas-web
/servicios/landing-pages
/servicios/wordpress
/servicios/sistemas-para-pymes
/servicios/automatizacion
/productos
/productos/booking
/productos/edupay
/productos/eam
/planes
/casos-de-exito
/contacto
/legal/privacidad
/legal/terminos
```

### 4.2 Sprint 1

```text
/
/servicios
/productos
/productos/booking
/productos/eam
/planes
/contacto
```

### 4.3 Sprint 2

```text
/servicios/paginas-web
/servicios/wordpress
/servicios/sistemas-para-pymes
/servicios/automatizacion
/productos/edupay
/casos-de-exito
```

### 4.4 Sprint 3

```text
/sitemap-index.xml o sitemap generado
/robots.txt
JSON-LD por tipo de página
OG images por línea comercial
formularios reales
tracking de conversiones
demos por rubro
```

### 4.5 Consideración sobre `/servicios/landing-pages`

Aunque aparece en el sitemap v0.1, no está priorizada en Sprint 2. Recomendación: incluirla en Sprint 2 si se quiere posicionar rápido una oferta de entrada de bajo costo. Si el sprint debe mantenerse acotado, puede resolverse temporalmente como sección dentro de `/servicios` y luego pasar a landing propia.

## 5. Componentes actuales reutilizables

| Componente actual | Acción | Motivo |
|---|---|---|
| `Layout.astro` | Adaptar | Es el punto correcto para metadata, favicon, canonical, OG y wrapper global. |
| `Navbar.astro` | Reemplazar parcialmente | Mantener idea de header fijo, pero cambiar navegación, CTA y agregar menú móvil. |
| `FooterSection.astro` | Adaptar fuerte | Estructura reutilizable, copy y links deben cambiar. |
| `WhatsAppButton.astro` | Adaptar | Mantener canal flotante, actualizar mensaje y permitir data centralizada. |
| `FAQSection.astro` | Adaptar | Patrón útil, preguntas deben venir desde `src/data/faqs.ts`. |
| `EAMSection.astro` | Adaptar | Útil como base para producto EAM, pero con menos stack y más valor de negocio. |
| `TrustBar.astro` | Adaptar | Puede convertirse en barra de confianza comercial. |
| `ContactForm.tsx` | Reemplazar | Actualmente simula envío y tiene opciones antiguas. |
| `HeroSection.astro` | Reemplazar | El hero actual está contaminado por copy y visual técnica enterprise. |
| `ServicesSection.astro` | Reemplazar | Niega explícitamente páginas web; debe salir. |
| `IndustriesSection.astro` | Adaptar | Puede convertirse en “Soluciones por rubro”. |
| `StackSection.astro` | Eliminar de la home | El stack puede quedar como detalle interno o sección secundaria no protagonista. |
| `MethodSection.astro` | Reemplazar | El pipeline técnico debe pasar a proceso comercial simple. |
| `ManifestoSection.astro` | Eliminar | El mensaje de ingeniería boutique/white label no encaja con la nueva estrategia. |

### 5.1 Componentes que no deben sobrevivir como mensaje visible

- `StackSection.astro` en home.
- `ManifestoSection.astro`.
- Hero técnico con código.
- Diagramas que contrapongan “visual layer” versus “logic layer”.
- CTAs orientados a demo enterprise.

## 6. Componentes nuevos recomendados

### 6.1 Layout y navegación

| Componente nuevo | Propósito |
|---|---|
| `SiteHeader.astro` | Header principal con navegación nueva, CTA cotizar y menú móvil. |
| `MobileMenu.astro` | Menú responsive con navegación, CTA y WhatsApp. |
| `SiteFooter.astro` | Footer comercial con servicios, productos, contacto y legales. |
| `SeoHead.astro` o lógica SEO en `Layout.astro` | Normalizar metadata, canonical, OG, Twitter y schema. |

### 6.2 Home

| Componente nuevo | Propósito |
|---|---|
| `HomeHero.astro` | Hero con título definido, subtítulo y CTAs. |
| `WhatWeDoSection.astro` | Bloque “Qué hacemos” con las 3 líneas principales. |
| `MainServicesSection.astro` | Servicios principales desde datos. |
| `ProductsPreviewSection.astro` | Booking, EduPay y EAM. |
| `IndustriesUseCasesSection.astro` | Rubros: barberías, restaurantes, consultas, gimnasios, colegios, tiendas, empresas. |
| `PlansPreviewSection.astro` | Planes desde $149.000, $399.000, $690.000. |
| `WhyBaseLogicSection.astro` | Razones para elegir BaseLogic en lenguaje simple. |
| `FinalCtaSection.astro` | Cierre orientado a cotización. |

### 6.3 Páginas de listado

| Componente nuevo | Propósito |
|---|---|
| `ListingHero.astro` | Encabezado para `/servicios`, `/productos`, `/planes`. |
| `ServiceGrid.astro` | Grilla de servicios desde `src/data/services.ts`. |
| `ProductGrid.astro` | Grilla de productos desde `src/data/products.ts`. |
| `PlanGrid.astro` | Planes desde `src/data/plans.ts`. |

### 6.4 Páginas detalle

| Componente nuevo | Propósito |
|---|---|
| `DetailHero.astro` | Hero reutilizable para servicios y productos. |
| `BenefitsList.astro` | Beneficios concretos para clientes no técnicos. |
| `FeatureList.astro` | Funcionalidades sin jerga. |
| `ProcessSteps.astro` | Proceso simple: entender, proponer, construir, acompañar. |
| `RelatedItems.astro` | Servicios o productos relacionados. |
| `FaqBlock.astro` | FAQs específicas por página. |
| `ContactBand.astro` | CTA contextual para cotizar. |

### 6.5 Formularios y contacto

| Componente nuevo | Propósito |
|---|---|
| `LeadForm.tsx` | Formulario real o preparado para integración. |
| `ContactOptions.astro` | Email, WhatsApp, ubicación y horarios. |
| `QuoteTypeSelector.tsx` | Selector de servicio requerido si se mantiene React. |

### 6.6 Componentes de SEO y schema

| Componente nuevo | Propósito |
|---|---|
| `JsonLd.astro` | Inyectar schema por página. |
| `Breadcrumbs.astro` | Navegación semántica y schema BreadcrumbList. |

## 7. Estructura sugerida de `src/data`

La prioridad es sacar copy comercial y metadata de los componentes. Esto reduce riesgo de que sobreviva el lenguaje antiguo y facilita crear nuevas páginas.

### 7.1 Estructura recomendada

```text
src/
├─ data/
│  ├─ site.ts
│  ├─ navigation.ts
│  ├─ home.ts
│  ├─ services.ts
│  ├─ products.ts
│  ├─ plans.ts
│  ├─ industries.ts
│  ├─ faqs.ts
│  ├─ seo.ts
│  ├─ redirects.ts
│  └─ contact.ts
```

### 7.2 `site.ts`

Debe centralizar:

- nombre: `BaseLogic`
- dominio canónico
- email principal
- WhatsApp
- ubicación: Santiago, Chile
- redes sociales reales
- mensajes base de marca

Ejemplo conceptual:

```ts
export const site = {
  name: 'BaseLogic',
  url: 'https://baselogic.dev',
  email: 'hola@baselogic.dev',
  whatsapp: '56987751255',
  location: 'Santiago, Chile',
};
```

### 7.3 `navigation.ts`

Debe centralizar:

- Inicio
- Servicios
- Productos
- Planes
- Casos de éxito
- Contacto
- CTA principal
- CTA secundario WhatsApp

### 7.4 `home.ts`

Debe contener:

- hero title y subtitle
- CTAs
- qué hacemos
- servicios destacados
- productos destacados
- rubros
- razones para elegir BaseLogic
- CTA final

### 7.5 `services.ts`

Cada servicio debería tener:

- `id`
- `slug`
- `title`
- `shortTitle`
- `summary`
- `description`
- `line`
- `startingPrice`
- `features`
- `benefits`
- `idealFor`
- `faqs`
- `seo`
- `status`: `active`, `planned`, `hidden`

Servicios iniciales:

- `paginas-web`
- `landing-pages`
- `wordpress`
- `webs-estaticas`
- `sistemas-para-pymes`
- `automatizacion`
- `soporte-digital`

Nota: `webs-estaticas` puede vivir dentro de `/servicios` sin landing propia en v0.1 si se quiere mantener el sitemap acotado.

### 7.6 `products.ts`

Cada producto debería tener:

- `id`
- `slug`
- `name`
- `tagline`
- `summary`
- `audience`
- `features`
- `benefits`
- `status`
- `ctaLabel`
- `seo`

Productos:

- `booking`
- `edupay`
- `eam`

### 7.7 `plans.ts`

Planes iniciales:

- `Presencia Digital`: desde `$149.000`
- `Pyme Activa`: desde `$399.000`
- `Operación Digital`: desde `$690.000`

Cada plan debería incluir:

- precio desde
- para quién es
- qué incluye
- qué no incluye
- CTA
- servicios relacionados

### 7.8 `industries.ts`

Rubros:

- barberías y centros estéticos
- restaurantes y cafeterías
- consultas médicas
- gimnasios y canchas
- colegios y jardines
- tiendas y negocios locales
- empresas con procesos internos

Cada rubro debería mapear a soluciones recomendadas:

- web
- reservas
- pagos
- automatización
- soporte
- producto recomendado

### 7.9 `seo.ts`

Debe centralizar metadata por ruta:

- title
- description
- canonical path
- OG image
- noindex si aplica
- schema type recomendado

### 7.10 `redirects.ts`

Debe documentar el mapa de rutas antiguas a nuevas. Puede usarse luego para configurar `astro.config.mjs` o la plataforma de hosting.

## 8. Estrategia SEO técnica

### 8.1 Metadata por página

Cada página debe recibir metadata explícita. No conviene depender de defaults genéricos.

Campos recomendados:

- `title`
- `description`
- `canonicalPath`
- `ogTitle`
- `ogDescription`
- `ogImage`
- `robots`
- `schema`

### 8.2 Titles recomendados por tipo de página

| Página | Patrón recomendado |
|---|---|
| Home | `BaseLogic | Páginas web, sistemas y automatización para pymes en Chile` |
| Servicios | `Servicios digitales para pymes | BaseLogic` |
| Páginas web | `Páginas web profesionales para pymes en Chile | BaseLogic` |
| WordPress | `Sitios WordPress autogestionables para empresas | BaseLogic` |
| Sistemas | `Sistemas simples para pymes | BaseLogic` |
| Automatización | `Automatización de procesos para pymes | BaseLogic` |
| Productos | `Productos digitales BaseLogic | Booking, EduPay y EAM` |
| Planes | `Planes web y soporte digital para pymes | BaseLogic` |
| Contacto | `Cotiza tu proyecto digital | BaseLogic` |

### 8.3 Canonical

Problema actual:

- `astro.config.mjs` no define `site`.
- `Layout.astro` usa fallback `https://baselogic.dev`.

Plan recomendado:

- Definir `site: 'https://baselogic.dev'` en `astro.config.mjs`.
- Centralizar `site.url` en `src/data/site.ts`.
- El layout debe construir canonical desde `Astro.site` y `canonicalPath`.
- Evitar canonical accidental para rutas antiguas que serán redirigidas.

### 8.4 Favicon

Problema actual:

- El layout referencia `/flavicon.png`.
- En `public` existen `favicon.ico` y `favicon.svg`, pero no `flavicon.png`.

Plan recomendado:

- Corregir referencias a `/favicon.svg` y `/favicon.ico`.
- Agregar `apple-touch-icon` real si se quiere soporte móvil completo.
- Revisar que el logo no dependa de archivos con espacios en nombre para usos críticos.

### 8.5 Sitemap

Plan Sprint 3:

- Agregar generación de sitemap.
- Incluir solo rutas activas.
- Excluir rutas antiguas redirigidas.
- Definir prioridad relativa:
  - home alta
  - servicios/productos media-alta
  - legales baja

### 8.6 Robots

Crear `public/robots.txt` con:

- `User-agent: *`
- `Allow: /`
- referencia a sitemap

Si quedan rutas antiguas sin redirección inmediata, evaluar `noindex` temporal.

### 8.7 JSON-LD/schema

Schemas recomendados:

- `Organization`
- `LocalBusiness` o `ProfessionalService`
- `WebSite`
- `Service`
- `Product` para Booking, EduPay y EAM
- `FAQPage` cuando haya FAQs reales por página
- `BreadcrumbList`

### 8.8 Open Graph

Plan recomendado:

- OG global para home.
- OG por línea:
  - Web
  - Sistemas
  - Productos
  - Soporte
- Evitar la imagen actual centrada en “Ingeniería de Software para Operaciones Complejas”.

### 8.9 H1/H2

Regla:

- un H1 por página
- H2 orientados a intención comercial y keywords reales
- evitar H2 con jerga técnica

### 8.10 SEO local

Incluir señales para Chile:

- Santiago, Chile
- atención remota nacional
- servicios para pymes chilenas
- precios en CLP
- lenguaje local simple

## 9. Estrategia de formularios/contacto

### 9.1 Estado actual

El formulario actual en `ContactForm.tsx` simula envío y muestra éxito sin enviar datos. Esto no puede pasar a producción en la nueva web.

### 9.2 Objetivo del nuevo formulario

Capturar leads reales con información suficiente para cotizar sin hacer el formulario largo.

Campos recomendados para Sprint 1:

- nombre
- email
- teléfono o WhatsApp
- empresa o negocio
- tipo de proyecto
- presupuesto aproximado
- mensaje
- consentimiento básico

Tipos de proyecto:

- Página web
- Landing page
- WordPress
- Sistema para pyme
- Automatización
- Producto BaseLogic
- Soporte mensual
- No estoy seguro

### 9.3 Preparación sin proveedor elegido

Crear una capa de envío desacoplada:

```text
src/lib/forms/
├─ submitLead.ts
└─ types.ts
```

`submitLead` debería tener una interfaz estable aunque el proveedor cambie:

```ts
type LeadPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
  sourcePath: string;
};
```

### 9.4 Proveedores posibles

Opciones compatibles con Sprint 3:

- Formspree
- Netlify Forms si el hosting aplica
- endpoint propio serverless
- HubSpot
- Airtable webhook
- Make/Zapier webhook

### 9.5 WhatsApp

El WhatsApp debe tener mensajes por contexto:

- home: interés general
- servicio: interés en servicio específico
- producto: interés en producto específico
- planes: cotización de plan

Esto debe vivir en `src/data/contact.ts` o generarse desde datos del servicio/producto.

### 9.6 Contacto visible

La nueva página `/contacto` debe mostrar:

- formulario
- WhatsApp
- email
- ubicación
- horario de respuesta si existe
- texto de orientación comercial

## 10. Plan de migración por sprints

### Sprint 1: Base comercial y rutas prioritarias

Objetivo: lanzar una nueva versión coherente, navegable y orientada a conversión.

Tareas:

- Crear `src/data`.
- Definir `site.ts`, `navigation.ts`, `home.ts`, `services.ts`, `products.ts`, `plans.ts`, `contact.ts`, `seo.ts`.
- Adaptar `Layout.astro` para metadata nueva, canonical y favicon.
- Reemplazar navegación con menú desktop y móvil.
- Rehacer `/`.
- Crear `/servicios`.
- Crear `/productos`.
- Crear `/productos/booking`.
- Crear `/productos/eam`.
- Crear `/planes`.
- Rehacer `/contacto`.
- Actualizar footer.
- Mantener legales con metadata corregida.
- Retirar copy antiguo de las rutas visibles.

Criterio de cierre:

- Home explica la oferta en lenguaje simple.
- Hay navegación nueva.
- Hay CTA “Cotizar proyecto”.
- Hay WhatsApp visible.
- No aparece copy antiguo como mensaje principal.
- Sprint 1 compila con `npm run build`.

### Sprint 2: Landings comerciales y prueba social

Objetivo: ampliar captación por intención de búsqueda y completar oferta.

Tareas:

- Crear `/servicios/paginas-web`.
- Crear `/servicios/wordpress`.
- Crear `/servicios/sistemas-para-pymes`.
- Crear `/servicios/automatizacion`.
- Crear `/servicios/landing-pages` si se confirma en este sprint.
- Crear `/productos/edupay`.
- Crear `/casos-de-exito`.
- Convertir rubros en secciones o demos iniciales.
- Crear FAQs específicas por servicio.
- Agregar breadcrumbs.
- Definir redirecciones antiguas.

Criterio de cierre:

- Cada landing tiene H1 claro, CTA, beneficios, features y FAQs.
- Los servicios principales tienen URLs indexables.
- Productos están separados de servicios.
- La estructura permite agregar más páginas sin duplicar copy manualmente.

### Sprint 3: SEO técnico, conversión e integraciones

Objetivo: preparar el sitio para adquisición orgánica y medición real.

Tareas:

- Configurar `site` en Astro.
- Generar sitemap.
- Crear `robots.txt`.
- Agregar JSON-LD/schema.
- Crear OG images nuevas.
- Implementar formulario real.
- Agregar tracking de conversiones.
- Configurar eventos para CTAs, WhatsApp y formularios.
- Crear demos por rubro si hay contenido suficiente.
- Revisar performance y accesibilidad.

Criterio de cierre:

- Sitemap válido.
- Robots válido.
- Formularios envían leads reales.
- Metadata por página validada.
- No hay rutas antiguas indexables con contenido viejo.

## 11. Riesgos técnicos

### 11.1 Riesgo de copy antiguo persistente

El mayor riesgo es reutilizar componentes actuales sin limpiar textos y metáforas. Aunque cambien rutas, si sobreviven términos como `enterprise`, `white label`, `agencias`, `stack`, `CTO` o `no hacemos sitios web`, el sitio seguirá comunicando la estrategia vieja.

Mitigación:

- Mover todo el contenido nuevo a `src/data`.
- Auditar con `rg` antes de cerrar cada sprint.
- Revisar strings visibles en componentes antes de mergear.

### 11.2 Riesgo de duplicación de páginas

Crear landings copiando archivos puede acelerar al principio, pero después dificultará cambios globales.

Mitigación:

- Usar componentes detalle reutilizables.
- Modelar servicios/productos en datos.
- Evitar hardcodear metadata en cada page salvo lo mínimo.

### 11.3 Riesgo de SEO roto por redirecciones tardías

Las rutas antiguas ya existen. Si se eliminan sin redirigir, se pierden señales y pueden aparecer 404.

Mitigación:

- Preparar mapa de redirecciones desde Sprint 1.
- Implementar redirecciones antes de eliminar páginas antiguas.

### 11.4 Riesgo de formulario falso en producción

El formulario actual simula éxito. Si se reutiliza sin integración, se perderán leads.

Mitigación:

- Reemplazar por `LeadForm`.
- Bloquear estado success falso si no hay proveedor configurado.
- Mostrar fallback mailto/WhatsApp si no hay backend.

### 11.5 Riesgo de menú móvil incompleto

El sitio actual no muestra menú móvil. La nueva navegación multipágina necesita resolver esto desde Sprint 1.

Mitigación:

- Crear menú móvil como parte de `SiteHeader`.
- Validar en viewport mobile antes de cerrar Sprint 1.

### 11.6 Riesgo de performance visual

El sitio actual usa muchos glows, blur y fondos fijos. En la nueva versión conviene reducir decoración pesada.

Mitigación:

- Usar UI más clara y menos efectos.
- Evitar hidratar iconos.
- Hidratar React solo donde haya interacción real.

### 11.7 Riesgo de bilingüismo prematuro

Mantener ES/EN duplica esfuerzo. Si el foco comercial inmediato es Chile, el inglés puede retrasar el relanzamiento.

Mitigación:

- Definir si EN queda fuera de v0.1.
- Si se mantiene, modelarlo desde datos y no duplicar todo manualmente.

## 12. Preguntas pendientes antes de implementar

1. ¿El rediseño v0.1 será solo en español o debe mantener versión en inglés?
2. ¿El dominio final seguirá siendo `https://baselogic.dev`?
3. ¿Qué proveedor se usará para formularios: Formspree, endpoint propio, HubSpot, Make/Zapier u otro?
4. ¿El WhatsApp `56987751255` sigue siendo el número comercial oficial?
5. ¿Existe un perfil real de LinkedIn de BaseLogic para reemplazar el link genérico?
6. ¿Los precios de planes desde `$149.000`, `$399.000` y `$690.000` incluyen IVA o son valores netos?
7. ¿Qué incluye exactamente cada plan?
8. ¿BaseLogic EduPay tiene descripción comercial validada o debe quedar como próximamente?
9. ¿BaseLogic Booking ya tiene demo, capturas o funcionalidades definitivas?
10. ¿BaseLogic EAM debe enfocarse solo en minería o también en empresas medianas con activos e inventario?
11. ¿Hay casos de éxito reales que puedan publicarse con nombre, rubro o de forma anónima?
12. ¿Se ofrecerá hosting y correos como servicio propio, tercerizado o coordinado?
13. ¿Qué tono visual se prefiere: más claro y comercial, o mantener dark mode suavizado?
14. ¿Auditoría técnica desaparece por completo o queda como servicio privado no enlazado?
15. ¿Qué canal debe ser prioridad de conversión: formulario, WhatsApp o llamada agendada?

## 13. Checklist de implementación para el siguiente paso

### Preparación

- [ ] Confirmar alcance del Sprint 1.
- [ ] Confirmar decisión sobre versión en inglés.
- [ ] Confirmar proveedor de formularios o fallback temporal.
- [ ] Confirmar datos oficiales de contacto.
- [ ] Confirmar precios y alcance de planes.

### Arquitectura

- [ ] Crear `src/data/site.ts`.
- [ ] Crear `src/data/navigation.ts`.
- [ ] Crear `src/data/home.ts`.
- [ ] Crear `src/data/services.ts`.
- [ ] Crear `src/data/products.ts`.
- [ ] Crear `src/data/plans.ts`.
- [ ] Crear `src/data/industries.ts`.
- [ ] Crear `src/data/faqs.ts`.
- [ ] Crear `src/data/seo.ts`.
- [ ] Crear `src/data/contact.ts`.
- [ ] Crear `src/data/redirects.ts`.

### Layout y SEO base

- [ ] Actualizar `astro.config.mjs` con `site`.
- [ ] Adaptar `Layout.astro` para metadata por página.
- [ ] Corregir favicon.
- [ ] Preparar soporte para canonical explícito.
- [ ] Preparar soporte para OG por página.

### Componentes Sprint 1

- [ ] Crear `SiteHeader.astro`.
- [ ] Crear menú móvil.
- [ ] Crear `SiteFooter.astro`.
- [ ] Crear `HomeHero.astro`.
- [ ] Crear `WhatWeDoSection.astro`.
- [ ] Crear `MainServicesSection.astro`.
- [ ] Crear `ProductsPreviewSection.astro`.
- [ ] Crear `IndustriesUseCasesSection.astro`.
- [ ] Crear `PlansPreviewSection.astro`.
- [ ] Crear `WhyBaseLogicSection.astro`.
- [ ] Crear `FinalCtaSection.astro`.
- [ ] Crear `LeadForm.tsx` o versión Astro si no requiere interacción avanzada.

### Rutas Sprint 1

- [ ] Rehacer `/`.
- [ ] Crear `/servicios`.
- [ ] Crear `/productos`.
- [ ] Crear `/productos/booking`.
- [ ] Crear `/productos/eam`.
- [ ] Crear `/planes`.
- [ ] Rehacer `/contacto`.
- [ ] Mantener `/legal/privacidad`.
- [ ] Mantener `/legal/terminos`.

### Limpieza estratégica

- [ ] Buscar y retirar copy visible con `enterprise`.
- [ ] Buscar y retirar copy visible con `white label`.
- [ ] Buscar y retirar copy visible con `agencia`.
- [ ] Buscar y retirar copy visible con `no hacemos sitios web`.
- [ ] Buscar y retirar copy visible con `CTO`.
- [ ] Buscar y retirar copy visible con stack técnico como argumento principal.

### Verificación

- [ ] Ejecutar `npm run build`.
- [ ] Revisar rutas Sprint 1 en desktop.
- [ ] Revisar rutas Sprint 1 en mobile.
- [ ] Verificar que el formulario no simule éxito sin envío real.
- [ ] Verificar links de WhatsApp.
- [ ] Verificar metadata de páginas principales.
- [ ] Verificar que rutas antiguas tengan plan de redirección antes de eliminarlas.

## Cierre

El rediseño debe empezar por arquitectura de contenido y navegación, no por estética. La base actual permite avanzar rápido, pero solo si el nuevo copy queda separado del sistema anterior desde el comienzo.

La prioridad del siguiente paso es implementar Sprint 1 con una home clara, rutas principales nuevas, datos centralizados, contacto realista y una navegación que refleje la nueva oferta de BaseLogic.
