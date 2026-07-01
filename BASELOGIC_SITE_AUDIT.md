# BaseLogic Site Audit

Fecha de auditoría: 2026-06-18  
Repositorio auditado: `baselogic-web`  
Alcance: inspección técnica, arquitectura frontend, copy comercial, SEO técnico y estructura de contenido a partir del código disponible.  
Restricciones respetadas: sin refactors, sin instalación de dependencias, sin cambios en rutas ni estilos existentes. Solo se creó este archivo.

## 1. Resumen ejecutivo

El sitio actual de BaseLogic es técnicamente pequeño, legible y relativamente simple de reestructurar, lo que juega a favor de un rediseño rápido. La base con Astro, Tailwind y componentes compartidos permite evolucionar la arquitectura sin una migración compleja.

El problema principal no es técnico sino estratégico: casi todo el mensaje público actual está orientado a software enterprise, white label, agencias, auditoría técnica, EAM industrial y lenguaje para perfiles muy técnicos. Eso choca de frente con el nuevo foco de BaseLogic hacia pymes y empresas en Chile que necesitan soluciones web, sistemas simples, automatización accesible y soporte cercano.

Hoy el sitio funciona más como vitrina para ingeniería avanzada que como máquina comercial para captar clientes no técnicos. La navegación, los CTAs, los formularios, la estructura de servicios y el SEO están construidos alrededor del posicionamiento anterior.

### Diagnóstico rápido

- Viabilidad técnica para llegar a la nueva estructura: `media-alta`.
- Alineación del sitio actual con la nueva estrategia: `baja`.
- Reutilización de UI/arquitectura: `parcial`.
- Reutilización de copy comercial: `baja`.
- Estado de conversión: `débil`.
- Estado de SEO técnico base: `aceptable como punto de partida`, pero incompleto y mal orientado en contenido.

### Conclusión práctica

La recomendación no es “parchar” el sitio actual sección por sección. Conviene usar la base técnica existente, pero rehacer la arquitectura comercial, el sistema de contenido, la navegación y casi todo el copy público.

## 2. Estado actual del sitio

### 2.1 Panorama general

El sitio actual tiene esta forma:

- Home one-page corporativa en español.
- Home one-page paralela en inglés.
- 4 páginas de servicios técnicos.
- 1 landing técnica para `BaseLogic EAM`.
- 1 página de contacto.
- 2 páginas legales.
- Réplica equivalente en inglés.

No existe todavía una arquitectura alineada con:

- `BaseLogic Web`
- `BaseLogic Sistemas`
- `BaseLogic Productos` como línea con `Booking`, `EduPay` y `EAM`
- `BaseLogic Soporte Digital`
- `Planes`
- `Casos de éxito`

### 2.2 Encaje comercial actual

La propuesta pública actual comunica:

- ingeniería enterprise
- software B2B
- white label
- proyectos complejos
- arquitectura técnica
- minería e industria pesada
- auditoría técnica
- stack y fiabilidad

La nueva estrategia necesita comunicar:

- soluciones claras para pymes
- sitios web y sistemas accesibles
- automatización entendible
- soporte cercano
- servicios de entrada simples
- confianza comercial local en Chile

La distancia entre ambos discursos es alta.

### 2.3 Revisión visual actual

#### Paleta y marca

- Fondo principal: azul muy oscuro casi negro (`--color-brand-dark: #0a0f14`).
- Superficies: gris azulado oscuro (`--color-brand-surface: #161c24`).
- Acentos: cian eléctrico y azul saturado (`#00e5ff`, `#0066ff`).
- Secundarios: ámbar, verde, rojo para estados o secciones técnicas.

#### Tipografías

- Sans principal: `Inter`.
- Mono secundaria: `Fira Code`.

#### Estilo visual

- Muy técnico, oscuro, “terminal/devtools”.
- Uso intenso de grids, glows, blur, badges tipo sistema, mockups de código y dashboards.
- Mucho peso visual en monospace, etiquetas técnicas, pseudo-logs y wireframes de software.

#### Densidad visual

- Alta en desktop.
- El diseño prioriza impacto visual técnico más que claridad comercial.
- Varias secciones usan terminología y composiciones pensadas para impresionar a perfiles técnicos.

#### Dark mode

- El sitio está esencialmente diseñado en dark mode.
- No hay alternativa visual más cálida o comercial.

#### Claridad para usuarios no técnicos

- Baja a media.
- Un usuario pyme no técnico probablemente entiende que “hacen software complejo”, pero no necesariamente qué servicio concreto puede comprar ni por dónde empezar.

#### Problemas detectados

- Exceso de estética técnica para el nuevo público.
- Mucha jerga visual de ingeniería avanzada.
- Navbar sin alternativa móvil visible.
- Repetición de overlays fijos y efectos de fondo en layout y páginas.
- El hero y varias secciones esconden contenido importante en mobile o dependen de contexto técnico.

#### Recomendación visual

Conservar:

- logo
- gradiente cian-azul
- sensación de solidez tecnológica

Suavizar:

- menos monospace
- menos metáfora terminal
- menos fondo oscuro permanente
- más bloques claros, más aire, más beneficios concretos
- más señales de confianza comercial: soporte, tiempos, entregables, ejemplos, planes, CTA de cotización

### 2.4 CTAs y conversión

#### CTAs actuales detectados

- `Agendar Demo`
- `Explorar EAM`
- `Ver ejemplos`
- `Ver casos de uso`
- `Cotizar Plataforma`
- `Analizar Integración`
- `Solicitar Auditoría Express`
- `Agendar una llamada directa`
- email directo `hola@baselogic.dev`
- botón flotante de WhatsApp

#### Formularios actuales

- `src/components/ContactForm.tsx`
  - Es interactivo, pero el envío está simulado con `setTimeout`.
  - No envía datos a ningún endpoint real.
  - Muestra éxito falso.
- `src/pages/servicios/eam.astro`
  - Tiene formulario de lead magnet para descargar PDF.
  - No tiene acción ni integración visible.

#### Fricción comercial actual

- El formulario principal no genera leads reales.
- El CTA principal sigue siendo “demo”, lenguaje más de producto SaaS enterprise que de pyme.
- En páginas de servicio, varios CTA bajan al footer, no a una cotización concreta.
- No hay página de planes, paquetes ni rangos de entrada.
- No hay explicación simple de “qué incluye” cada servicio.
- No hay casos de éxito ni prueba social visible.
- No hay formulario de cotización orientado a páginas web o sistemas simples.
- No hay teléfono visible en UI; solo email y WhatsApp.
- El link de LinkedIn en footer apunta a `https://linkedin.com`, no a un perfil real de marca.

#### Juicio de conversión

Para una pyme no técnica, el sitio actual **no facilita bien** pedir una cotización. Proyecta capacidad técnica, pero no simplifica la decisión de compra.

### 2.5 SEO técnico y de contenido

#### Lo que sí existe

- `title`
- `meta description`
- `canonical`
- `robots` meta
- Open Graph
- Twitter card
- imagen OG global por defecto

#### Lo que falta o está débil

- `site` no está definido en `astro.config.mjs`
- no hay sitemap configurado
- no hay `robots.txt` en `public`
- no hay `hreflang`
- no hay JSON-LD / schema markup
- no hay `LocalBusiness` schema
- no hay estructura SEO local para Chile
- no hay estrategia clara de keywords por servicio
- muchas páginas heredan una description por defecto desalineada
- el OG image actual responde al posicionamiento antiguo

#### Hallazgos importantes

- `src/layouts/Layout.astro` usa `Astro.site ?? 'https://baselogic.dev'` para canonical.
- Como `astro.config.mjs` no define `site`, el canonical depende del fallback hardcodeado.
- Solo algunas páginas pasan `description` personalizada.
- La mayoría hereda esta description por defecto:
  - `BaseLogic | Ingeniería de Software Enterprise & EAM para Industria Pesada. Ecosistema TypeScript de extremo a extremo.`
- Eso afecta negativamente páginas como:
  - contacto
  - servicios API
  - servicios SaaS
  - auditoría
  - legales
  - varias páginas en inglés

#### Issues SEO puntuales

- Favicon roto por typo: el layout referencia `/flavicon.png`, pero en `public` no existe ese archivo.
- No hay `src/content` ni estructura de contenido escalable para SEO.
- No hay URLs nuevas para servicios comerciales simples.
- No hay páginas enfocadas a keywords como:
  - páginas web en Chile
  - diseño web para pymes
  - sistemas para reservas
  - automatización para negocios
  - soporte web mensual

#### Performance esperada

Base técnica favorable:

- Astro está bien para sitios corporativos rápidos.
- Pocas dependencias.
- Sitio mayormente estático.

Riesgos actuales:

- `client:load` en varios íconos que podrían ser solo SSR.
- `ContactForm` hidrata React en cliente.
- muchos efectos visuales fijos, blur y overlays.
- imágenes servidas desde `public` con `img`, sin pipeline de optimización de Astro.

## 3. Stack detectado

### 3.1 Tecnologías principales

| Área | Detectado |
|---|---|
| Framework principal | `astro@^5.17.1` |
| Integración adicional | `@astrojs/react@^4.4.2` |
| UI interactiva | `react@^19.2.4`, `react-dom@^19.2.4` |
| Estilos | `tailwindcss@^4.1.18` vía `@tailwindcss/vite@^4.1.18` |
| Tipografías | `@fontsource/inter`, `@fontsource/fira-code` |
| Iconografía | `lucide-react` |
| Utilidades | `clsx`, `tailwind-merge` |

### 3.2 Scripts en `package.json`

| Script | Comando |
|---|---|
| `dev` | `astro dev` |
| `build` | `astro build` |
| `preview` | `astro preview` |
| `astro` | `astro` |

Observaciones:

- No hay scripts de lint.
- No hay scripts de test.
- No hay scripts de chequeo SEO o validación de contenido.
- No hay scripts propios del proyecto fuera de los básicos del starter.

### 3.3 TypeScript

- `tsconfig.json` extiende `astro/tsconfigs/strict`.
- JSX configurado para React.
- La base es estricta, pero hay atajos de typing:
  - `dict: any` en `src/components/ContactForm.tsx`.

### 3.4 Sistema de estilos

- Tailwind CSS v4 por `@import "tailwindcss";` en `src/styles/global.css`.
- No se detectan CSS Modules.
- No se detecta SCSS.
- No se detecta sistema de tokens separado del archivo global.
- Los tokens principales viven en `@theme` dentro de `global.css`.

### 3.5 Configuración de Astro

Archivo: `astro.config.mjs`

- integración React habilitada
- plugin de Tailwind vía Vite
- sin `site`
- sin `output` explícito
- sin integraciones SEO adicionales
- sin sitemap

### 3.6 Configuración SEO detectada

Centralizada en `src/layouts/Layout.astro`:

- `title`
- `description`
- `canonical`
- `robots`
- Open Graph
- Twitter/X cards

No detectado:

- JSON-LD
- schema por página
- hreflang alternates
- sitemap generator
- robots file real

## 4. Estructura de carpetas

### 4.1 Árbol resumido

```text
src/
├─ components/
│  ├─ ContactForm.tsx
│  ├─ EAMSection.astro
│  ├─ FAQSection.astro
│  ├─ FooterSection.astro
│  ├─ HeroSection.astro
│  ├─ IndustriesSection.astro
│  ├─ ManifestoSection.astro
│  ├─ MethodSection.astro
│  ├─ Navbar.astro
│  ├─ ServicesSection.astro
│  ├─ StackSection.astro
│  ├─ TrustBar.astro
│  └─ WhatsAppButton.astro
├─ i18n/
│  └─ ui.ts
├─ layouts/
│  └─ Layout.astro
├─ pages/
│  ├─ 404.astro
│  ├─ contacto.astro
│  ├─ index.astro
│  ├─ en/
│  │  ├─ contact.astro
│  │  ├─ index.astro
│  │  ├─ legal/
│  │  │  ├─ privacy.astro
│  │  │  └─ terms.astro
│  │  └─ services/
│  │     ├─ api.astro
│  │     ├─ audit.astro
│  │     ├─ eam.astro
│  │     └─ saas.astro
│  ├─ legal/
│  │  ├─ privacidad.astro
│  │  └─ terminos.astro
│  └─ servicios/
│     ├─ api.astro
│     ├─ auditoria.astro
│     ├─ eam.astro
│     └─ saas.astro
└─ styles/
   └─ global.css

public/
├─ BaseLogic Logo.png
├─ BaseLogic LogoV2.png
├─ favicon.ico
├─ favicon.svg
├─ icon-mail.png
├─ icon-phone.png
├─ icon-web.png
└─ og-image.jpg
```

### 4.2 Lectura funcional de cada carpeta

| Carpeta | Propósito aparente |
|---|---|
| `src/pages` | Rutas públicas del sitio. |
| `src/components` | Secciones reutilizables de home, layout y contacto. |
| `src/layouts` | Layout base con metadata y fondo global. |
| `src/i18n` | Diccionario de textos compartidos ES/EN, pero solo para parte del sitio. |
| `src/styles` | Estilos globales y tokens visuales. |
| `public` | Assets estáticos de marca y OG. |

### 4.3 Ausencias relevantes

- No existe `src/content`.
- No existe `src/data`.
- No existe carpeta `assets` con pipeline de optimización.
- No existe carpeta para constantes de navegación o slugs.
- No existe estructura para SEO programático o contenido escalable.

## 5. Rutas actuales

| Archivo fuente | URL resultante | Objetivo aparente | Estado probable | Observaciones |
|---|---|---|---|---|
| `src/pages/index.astro` | `/` | Home corporativa one-page en español | `modificar` | Debe rehacerse como home comercial para pymes; la estructura de secciones puede servir parcialmente. |
| `src/pages/contacto.astro` | `/contacto` | Página de contacto en español | `modificar` | El formulario actual no envía datos reales. |
| `src/pages/404.astro` | `/404` | Error page | `modificar` | Visual y copy demasiado técnicos para público no técnico. |
| `src/pages/servicios/saas.astro` | `/servicios/saas` | Venta de SaaS, dashboards e intranets enterprise | `reemplazar` | No encaja con la nueva línea “Sistemas simples para pymes”. |
| `src/pages/servicios/api.astro` | `/servicios/api` | Integraciones API y automatización técnica | `reemplazar` | Parte del concepto podría migrar a “automatización”, pero el copy actual es enterprise. |
| `src/pages/servicios/auditoria.astro` | `/servicios/auditoria` | Auditoría técnica de código y seguridad | `eliminar` | No aparece en la nueva arquitectura comercial prioritaria. |
| `src/pages/servicios/eam.astro` | `/servicios/eam` | Landing/ficha técnica de BaseLogic EAM | `adaptar` | El producto sí permanece, pero la página debe dejar de ser solo técnica y pasar a valor de negocio. |
| `src/pages/legal/privacidad.astro` | `/legal/privacidad` | Política de privacidad ES | `conservar` | Requiere ajuste de metadata y revisión legal, pero la ruta sí es útil. |
| `src/pages/legal/terminos.astro` | `/legal/terminos` | Términos de servicio ES | `conservar` | Requiere ajuste de metadata y revisión legal/comercial. |
| `src/pages/en/index.astro` | `/en` | Home corporativa one-page EN | `reemplazar` | Si se mantiene versión inglesa, debe rediseñarse. Si el foco es Chile, puede despriorizarse. |
| `src/pages/en/contact.astro` | `/en/contact` | Contact page EN | `reemplazar` | Misma situación que ES, además sin integración real. |
| `src/pages/en/services/saas.astro` | `/en/services/saas` | Versión EN de SaaS enterprise | `reemplazar` | Duplicación de estrategia antigua. |
| `src/pages/en/services/api.astro` | `/en/services/api` | Versión EN de integraciones API | `reemplazar` | Duplicación de estrategia antigua. |
| `src/pages/en/services/audit.astro` | `/en/services/audit` | Versión EN de auditoría técnica | `eliminar` | Baja prioridad para la nueva estrategia. |
| `src/pages/en/services/eam.astro` | `/en/services/eam` | Versión EN de landing EAM | `adaptar` | Mantener solo si hay estrategia real de producto internacional. |
| `src/pages/en/legal/privacy.astro` | `/en/legal/privacy` | Privacy EN | `conservar` | Útil si se mantiene sitio bilingüe. |
| `src/pages/en/legal/terms.astro` | `/en/legal/terms` | Terms EN | `conservar` | Útil si se mantiene sitio bilingüe. |

### 5.1 Facilidad para llegar a la estructura objetivo

Técnicamente es factible porque:

- hay pocas rutas
- no hay CMS que desarmar
- no hay lógica de negocio compleja en frontend
- la navegación actual es pequeña

Pero hoy falta la base para escalar bien:

- no hay modelo de contenido
- no hay data central para servicios/productos
- no hay taxonomía comercial nueva
- el sitio EN duplica páginas a mano

Juicio: pasar a la estructura objetivo es `factible`, pero conviene hacerlo con nueva arquitectura de contenido, no solo agregando archivos sueltos.

## 6. Componentes principales

| Archivo | Qué renderiza | Reutilizable para el nuevo sitio | Hardcodeado | Depende de datos externos | Recomendación |
|---|---|---|---|---|---|
| `src/layouts/Layout.astro` | Shell base, metadata, fondo global, botón WhatsApp | `sí, parcialmente` | Metadata por defecto antigua | No | `adaptar` |
| `src/components/Navbar.astro` | Header, navegación ancla, CTA, switch idioma | `sí, estructuralmente` | Sí | No | `adaptar` |
| `src/components/HeroSection.astro` | Hero home con mockup técnico y CTAs | `parcialmente` | Sí, vía `ui.ts` y mockup visual | No | `reemplazar` |
| `src/components/TrustBar.astro` | Barra de credenciales técnicas | `parcialmente` | Sí | No | `adaptar` |
| `src/components/ServicesSection.astro` | Sección de servicios actual | `parcialmente` | Sí | No | `reemplazar` |
| `src/components/IndustriesSection.astro` | Sectores (minería, logística, fintech, etc.) | `parcialmente` | Sí | No | `adaptar` |
| `src/components/EAMSection.astro` | Highlight del producto EAM | `sí` | Sí | No | `adaptar` |
| `src/components/StackSection.astro` | Stack y arquitectura técnica | `bajo` | Sí | No | `eliminar o absorber` |
| `src/components/MethodSection.astro` | Metodología tipo pipeline DevOps | `bajo` | Sí | No | `reemplazar` |
| `src/components/ManifestoSection.astro` | Manifiesto “ingeniería boutique” | `bajo` | Sí | No | `eliminar` |
| `src/components/FAQSection.astro` | FAQ actual | `sí, estructuralmente` | Sí | No | `adaptar` |
| `src/components/FooterSection.astro` | Footer, CTA final, links legales y servicios | `sí, estructuralmente` | Sí | No | `adaptar` |
| `src/components/WhatsAppButton.astro` | Botón flotante WhatsApp | `sí` | Número y copy fijos | No | `adaptar` |
| `src/components/ContactForm.tsx` | Formulario interactivo de contacto | `no, tal como está` | Sí | No | `reemplazar` |

### 6.1 Comentarios clave por componente

#### `Layout.astro`

- Buena base central para metadata.
- Tiene defaults muy viejos para la nueva estrategia.
- Contiene el botón de WhatsApp global, lo cual puede mantenerse.
- Duplica parte del fondo visual que luego también se repite en páginas.

#### `Navbar.astro`

- La lógica ES/EN manual funciona, pero no escala bien.
- No hay navegación móvil visible.
- La navegación actual depende de anchors de una home one-page.

#### `ContactForm.tsx`

- Es el mayor problema de conversión del sitio.
- Simula envío, no captura leads reales.
- Está pensado para agencia/partner y proyectos técnicos.
- No está orientado a servicios como páginas web, soporte, reservas o automatización pyme.

#### `ui.ts`

- Es un primer intento útil de centralizar textos comunes.
- No cubre toda la web.
- Las páginas de servicio y legales siguen teniendo mucho contenido inline.

## 7. Copy actual relevante

### 7.1 Hero principal y mensajes troncales

Ejemplos actuales:

- `Ingeniería de Software para Operaciones Complejas`
- `We don't build websites. We build Business Engines.`
- `No hacemos sitios web. Construimos Motores de Negocio.`
- `Enterprise · Production-Ready`
- `Agendar Demo`

Lectura:

- El hero niega explícitamente un servicio que ahora sí será core: páginas web.
- El lenguaje está pensado para impresionar por complejidad, no por claridad comercial.

### 7.2 Títulos y subtítulos de servicios actuales

Ejemplos:

- `Desarrollo SaaS & Dashboards`
- `Integraciones API & Automatización`
- `Auditoría de Código & Seguridad`
- `Arquitectura para Escalar`
- `Ingeniería más allá del CRUD`
- `Automatización Crítica`
- `Diagnóstico de Precisión`

Lectura:

- Enfocados a CTO, equipos técnicos o proyectos enterprise.
- Poco entendibles como oferta simple para pyme.

### 7.3 Sección de productos actual

Solo aparece con fuerza:

- `BaseLogic EAM`

No aparecen:

- `BaseLogic Booking`
- `BaseLogic EduPay`

Lectura:

- La línea de productos está incompleta y sobrerrepresenta EAM.

### 7.4 FAQ actual

Temas actuales:

- white label
- NDA
- garantía técnica post entrega
- propiedad del código

Lectura:

- Muy orientado a agencias, partners y servicios técnicos complejos.
- No responde preguntas típicas de una pyme:
  - cuánto demora una web
  - qué incluye el soporte
  - si puedo autoadministrar mi sitio
  - cómo funciona hosting/correo/backups

### 7.5 Footer actual

Texto actual:

- `¿Tu agencia rechaza proyectos por complejidad técnica?`
- `Hablemos. Analicemos ese requerimiento difícil sin compromiso y veamos cómo BaseLogic puede ejecutarlo bajo tu marca.`

Lectura:

- Muy desalineado con la nueva estrategia.
- Habla a agencias white label, no a dueños de negocio.

### 7.6 Metadata SEO actual

Hallazgos:

- Home ES: `BaseLogic | Ingeniería de Software B2B`
- Layout default description: enterprise/EAM/industria pesada
- EAM sí tiene description propia
- Home EN también tiene title y description propia
- muchas páginas usan description heredada y vieja

### 7.7 Textos repetidos

Patrones repetidos:

- `enterprise`
- `TypeScript`
- `Angular`
- `NestJS`
- `E2E`
- `white label`
- `agencia / partner`
- `demo`
- `operaciones complejas`
- `industria pesada`

### 7.8 Clasificación del copy

#### Texto que puede mantenerse

- `BaseLogic EAM` como nombre de producto.
- `Santiago, Chile` como anclaje territorial.
- Promesas de soporte directo, cercanía y respuesta rápida, pero reescritas con más precisión.
- Concepto de automatización, pero explicado en lenguaje simple.
- Idea de confianza, continuidad y soporte post entrega.

#### Texto que debe reescribirse

- Home completo.
- Servicios completos.
- CTA principales.
- FAQs.
- Footer comercial.
- Metadata de casi todas las páginas.
- Todo el framing de “demo”.

#### Texto que debe eliminarse

- `No hacemos sitios web`
- enfoque white label como mensaje principal
- enfoque agencias como público central
- `Business Engines`
- `Ingeniería Boutique`
- `departamento de ingeniería invisible`
- `Enterprise Business OS`
- `code forensics`

#### Texto demasiado técnico para el nuevo público

- `Angular 18`
- `NestJS`
- `Prisma ORM`
- `EDA`
- `RBAC`
- `WebSockets`
- `Type Safety`
- `MTBF`
- `CPP`
- `ACID`
- `CI/CD`
- `Git-Flow`
- `SAST`
- `N+1 Query`
- `Zone.js`
- `Signals`

## 8. Elementos a conservar

### 8.1 Técnicos

- Base en Astro.
- Integración React solo donde haga falta interactividad.
- Tailwind como sistema de estilos.
- `Layout.astro` como punto único de metadata.
- lógica básica ES/EN si se decide mantener bilingüe
- páginas legales como base editable

### 8.2 Visuales

- Logo actual.
- Gradiente cian-azul.
- Sensación de marca tecnológica seria.
- Algunos patrones de tarjetas, spacing y jerarquía visual.

### 8.3 Comerciales y de producto

- Presencia de `BaseLogic EAM`.
- Canal de WhatsApp.
- Página/contacto directo por email.
- Idea de automatización e integración como servicio, pero simplificada.

### 8.4 Estructurales

- Separación general entre layout, componentes y páginas.
- Uso parcial de `ui.ts` como base para centralizar textos.

## 9. Elementos a eliminar o reescribir

### 9.1 Eliminar

- posicionamiento principal hacia white label y agencias
- home centrada en enterprise software
- auditoría técnica como oferta destacada en navegación pública
- estética de terminal como identidad dominante
- CTA a “demo” como acción principal global
- copy que niega explícitamente el servicio de páginas web

### 9.2 Reescribir por completo

- home ES
- home EN si se mantiene
- navegación
- secciones de servicios
- FAQ
- footer comercial
- metadata SEO
- og-image
- CTAs de servicio
- formulario de contacto
- landing de EAM en clave de negocio, no solo de stack

### 9.3 Replantear

- si vale la pena mantener sitio bilingüe desde fase 1
- si `/servicios/eam` vive dentro de “productos” o como vertical industrial dentro de esa línea
- si auditoría técnica se archiva, se oculta o queda como servicio secundario no indexado

## 10. Riesgos técnicos

### 10.1 Mantenibilidad

- Mucho copy mezclado con componentes y páginas.
- Solo parte del sitio usa diccionario central.
- Páginas EN duplicadas manualmente.
- No existe una capa `data/content` para servicios, productos, FAQs, CTAs y navegación.

### 10.2 Escalabilidad de contenido

- Agregar nuevas páginas como `booking`, `edupay`, `planes` o `soporte` obligaría hoy a replicar patrones manualmente.
- No hay slugs ni metadatos centralizados.
- No hay colecciones de contenido para SEO.

### 10.3 Riesgos de conversión

- El formulario principal no funciona de verdad.
- El lead magnet de EAM tampoco muestra una integración real.
- El sitio aparenta sofisticación, pero no captura intención comercial de forma confiable.

### 10.4 Riesgos de rediseño

- Si se rediseña “encima” del copy actual, la marca seguirá sonando enterprise aunque cambie el diseño.
- Si se mantienen demasiadas secciones técnicas, el nuevo mensaje quedará contaminado.
- La navegación actual basada en anchors de home no escala bien a una arquitectura multipágina más comercial.

### 10.5 Riesgos SEO

- Descriptions heredadas y mal orientadas.
- Ausencia de sitemap y robots file.
- ausencia de schema local
- falta de `hreflang`
- canonical basado en fallback hardcodeado
- favicon referenciado con path incorrecto

### 10.6 Riesgos UX

- No hay menú móvil visible.
- Varias decisiones visuales privilegian desktop.
- El sitio comunica “sofisticado”, pero no “fácil de comprar”.

### 10.7 Riesgos de performance

- Íconos con `client:load` innecesario.
- React en cliente para contacto.
- múltiples capas fijas visuales
- assets de imagen sin optimización Astro

## 11. Recomendaciones de arquitectura

### 11.1 Dirección recomendada

Migrar desde una web “one-page técnica con páginas satélite” hacia una arquitectura comercial multipágina, con contenido centralizado y orientado a líneas de negocio.

### 11.2 Arquitectura objetivo recomendada

#### Navegación principal

- Inicio
- Servicios
- Productos
- Planes
- Casos de éxito
- Soporte
- Contacto

#### Bloques comerciales

- `BaseLogic Web`
- `BaseLogic Sistemas`
- `BaseLogic Productos`
- `BaseLogic Soporte Digital`

### 11.3 Estructura de contenido recomendada

Crear una capa central para:

- navegación
- servicios
- productos
- FAQs
- CTAs
- metadata SEO
- testimonios/casos
- planes

Opciones sanas para esta base:

- `src/data/*.ts` para datos cortos y estructurados
- `src/content/` para páginas SEO y contenido largo

### 11.4 Componentización recomendada

Separar componentes en bloques reutilizables más neutros:

- `PageHero`
- `ServiceCard`
- `ServiceDetail`
- `ProductHighlight`
- `PricingSection`
- `FAQSection`
- `LeadForm`
- `TrustSection`
- `ContactOptions`
- `CaseStudyCard`

### 11.5 Internacionalización

Si el foco de corto plazo es Chile y pymes:

- priorizar español primero
- dejar inglés para fase posterior o muy controlada

Si se mantiene EN:

- evitar duplicación manual de páginas
- centralizar slugs, metadata y equivalencias

### 11.6 SEO architecture

Definir desde el inicio:

- metadata por página
- H1 único por landing
- FAQs indexables por servicio
- schema básico
- slugs pensados para búsqueda real
- cobertura local Chile

### 11.7 Gap contra la estructura objetivo

| Línea objetivo | Equivalente actual | Gap |
|---|---|---|
| `BaseLogic Web` | No existe como línea dedicada | Alto |
| `BaseLogic Sistemas` | Parcialmente cubierta por `SaaS & Dashboards` | Alto, por tono y enfoque |
| `BaseLogic Productos` | Solo `EAM` existe | Alto |
| `BaseLogic Soporte Digital` | No existe | Muy alto |
| `Planes` | No existe | Alto |
| `Casos de éxito` | No existe | Alto |
| `Contacto` | Existe, pero no funciona realmente | Medio |

## 12. Plan de rediseño por fases

### Fase 1

Objetivo: corregir posicionamiento y arquitectura principal.

- Redefinir propuesta de valor pública.
- Eliminar copy antiguo enfocado en white label/agencias/enterprise como mensaje principal.
- Reestructurar navegación para la nueva oferta.
- Rediseñar `home` completa.
- Priorizar español como versión principal.
- Definir nueva taxonomía de servicios y productos.
- Corregir CTA principal hacia cotización/contacto comercial simple.

### Fase 2

Objetivo: desplegar la nueva oferta comercial.

- Crear página `/servicios`.
- Crear landings de:
  - páginas web
  - landing pages
  - WordPress
  - sistemas para pymes
  - automatización
- Crear página `/productos`.
- Crear landings de:
  - booking
  - edupay
  - eam
- Crear `/planes`.
- Crear `/contacto` comercial real con formulario funcional y opciones de contacto claras.

### Fase 3

Objetivo: mejorar adquisición y madurez comercial.

- Sitemap y robots reales.
- Schema markup.
- Open Graph por línea.
- Casos de éxito.
- Blog o recursos si hay capacidad de mantenerlo.
- Formularios avanzados con tracking real.
- Integraciones:
  - CRM o email
  - automatización de leads
  - eventos de conversión
  - WhatsApp más trazable

## 13. Preguntas pendientes para el dueño del proyecto

1. ¿El sitio seguirá siendo bilingüe en el corto plazo o el foco inmediato será solo español/Chile?
2. ¿`BaseLogic EAM` seguirá siendo un producto público prioritario en la home o pasará a una línea más específica dentro de productos?
3. ¿`BaseLogic Booking` y `BaseLogic EduPay` ya tienen definición comercial clara, demos o descripciones base?
4. ¿La línea `BaseLogic Web` tendrá planes paquetizados desde el lanzamiento o solo cotización a medida?
5. ¿Se quiere vender WordPress activamente como servicio público o solo dejarlo como opción dentro de “páginas web”?
6. ¿Qué nivel de soporte mensual se quiere ofrecer públicamente: básico, estándar, premium?
7. ¿Existe hoy un canal real para capturar formularios: email, CRM, webhook, Formspree, HubSpot, otro?
8. ¿Hay casos de éxito, clientes o proyectos autorizados para mostrar públicamente?
9. ¿Se mantendrá el dominio `baselogic.dev` como dominio principal público?
10. ¿Qué tan importante será el posicionamiento local SEO para consultas tipo “páginas web en Santiago” o “desarrollo web para pymes en Chile”?
11. ¿Auditoría técnica seguirá existiendo como servicio oculto/de segundo nivel o saldrá por completo del sitio público?
12. ¿Qué servicio debe convertirse en la puerta de entrada principal: páginas web, landing pages, sistemas simples o soporte digital?

## Anexo A. Hallazgos puntuales útiles para la implementación futura

- `src/layouts/Layout.astro` referencia `/flavicon.png`, pero ese archivo no existe en `public`.
- `README.md` sigue siendo el starter default de Astro.
- `Navbar.astro` no tiene navegación móvil visible.
- `ContactForm.tsx` usa éxito simulado con `setTimeout`.
- `src/pages/servicios/eam.astro` contiene un formulario sin integración visible.
- `ui.ts` centraliza parte del copy, pero no el sitio completo.
- `FooterSection.astro` usa un link genérico a LinkedIn.
- `public/og-image.jpg` refleja claramente la estrategia antigua.

## Veredicto final

El sitio actual de BaseLogic es una buena base técnica para reconstruir, pero no una buena base comercial para iterar sin rediseño profundo. La prioridad no debería ser “mejorar lo que hay”, sino reorganizar la arquitectura pública alrededor de servicios comprables, copy claro para pymes y una línea de productos bien separada.

La buena noticia es que el repo es lo bastante pequeño como para hacer este giro sin una deuda técnica enorme. El trabajo fuerte está en estrategia, contenido, conversión y SEO de negocio, no en desarmar una plataforma compleja.
