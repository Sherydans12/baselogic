# Design QA — integración EAM V6

**Fecha:** 21 de julio de 2026

**Ruta:** `/productos/eam`

**Estado evaluado:** hero inicial, sin interacción previa y con el asset aprobado cargado.

## Evidencia

- Fuente visual: `C:\Users\nicol\Documents\baselogic-web\visual-review\batch-1\eam\eam-hero-v6.webp`.
- Implementación desktop: `C:\Users\nicol\.codex\visualizations\2026\07\21\019f870f-7036-73b0-92ba-1b07b2b5ab72\eam-integration-qa\eam-desktop-1366x900.png`.
- Implementación mobile: `C:\Users\nicol\.codex\visualizations\2026\07\21\019f870f-7036-73b0-92ba-1b07b2b5ab72\eam-integration-qa\eam-mobile-390x844.png`.
- Comparación focal desktop, fuente a la izquierda y render a la derecha: `C:\Users\nicol\.codex\visualizations\2026\07\21\019f870f-7036-73b0-92ba-1b07b2b5ab72\eam-integration-qa\eam-desktop-source-vs-render.png`.
- Comparación focal mobile, crop esperado a la izquierda y render a la derecha: `C:\Users\nicol\.codex\visualizations\2026\07\21\019f870f-7036-73b0-92ba-1b07b2b5ab72\eam-integration-qa\eam-mobile-source-vs-render.png`.

## Viewports y normalización

| Estado | Viewport solicitado | Bitmap de captura | Slot visual CSS | Fuente normalizada | Densidad |
|---|---:|---:|---:|---:|---:|
| Desktop | 1366 × 900 | 1351 × 890 | 582 × 363 | 582 × 363, `cover`, centro | 1:1 |
| Mobile | 390 × 844 | 375 × 812 | 333 × 416,75 | 333 × 417, `cover`, centro | 1:1 |

El bitmap excluye el gutter del navegador embebido. La comparación focal se hizo con el asset fuente redimensionado al tamaño exacto del slot y con el crop renderizado extraído sin reescalado adicional.

## Comparación de vista completa

- Desktop: composición equilibrada en dos columnas; H1, subtítulo y CTA conservan prioridad. El visual mide 582 × 363 y usa 16:10.
- Mobile: orden de lectura correcto `eyebrow → H1 → subtítulo → CTA → imagen`. El CTA termina en `y=393`, dentro del primer viewport, y el visual usa 4:5.
- No hay overflow horizontal: `scrollWidth === clientWidth` en EAM, Home, Booking y Productos en desktop y mobile.
- No hay imágenes rotas, placeholders ni solicitudes con `src` vacío.

## Comparación focal

- Desktop: el ratio coincide con la fuente 1920 × 1200, por lo que no hay recorte destructivo. Supervisor, bomba y tablet permanecen completos.
- Mobile: el crop 4:5 centrado elimina únicamente contexto lateral. Conserva la cabeza y torso del supervisor, el activo principal, la tablet y el borde frontal de la mesa.
- No fue necesario un recorte focal adicional: `object-position: 50% 50%` es el punto más estable en ambos formatos.

## Superficies de fidelidad

- **Tipografía:** se conserva Inter, la escala, pesos, tracking, line-height y wrapping del sistema aprobado de `ListingHero`.
- **Espaciado y layout:** se conservan padding, gaps, radio de 2rem, borde y sombra del sistema Home/Booking. El cambio de ratio ocurre solo en EAM.
- **Colores y tokens:** no se introdujeron colores ni gradientes nuevos; el visual no usa overlay.
- **Calidad de imagen:** WebP real, 1920 × 1200, 127.978 bytes, sin escalado hacia arriba y con sujetos críticos legibles en ambos crops.
- **Copy y contenido:** H1, subtítulo, CTA, beneficios y contenido comercial se conservaron. El CTA existente se reubicó al hero sin cambiar texto ni destino.
- **Accesibilidad e interacción:** alt semántico presente; carga `eager` con prioridad alta; CTA único, visible, habilitado y con navegación validada a `/contacto`; consola sin errores ni warnings.

## Findings

- No se detectaron hallazgos P0, P1 ni P2.
- [P3] El control del menú mobile muestra simultáneamente los iconos de menú y cierre. Es un comportamiento preexistente, ya registrado en la QA de fase 1, y no fue causado por esta integración.

## Open Questions

- Ninguna para la integración EAM V6.

## Implementation Checklist

- [x] Asset final copiado sin alterar el original.
- [x] EAM aprobado en `visualAssets.ts`.
- [x] Hero lateral con crop responsive y sin overlay.
- [x] CTA visible y funcional.
- [x] QA de EAM y rutas relacionadas completada.
- [x] Build y barridos completados.

## Comparison History

- Primera pasada: no se encontraron diferencias accionables P0/P1/P2; no fue necesaria una iteración visual posterior.

## Follow-up Polish

- Corregir el doble icono del menú mobile en una tarea separada para no ampliar el alcance de esta integración.

final result: passed



## Ajustes finales de Productos, Servicios y movimiento — 5 de noviembre de 2026

### Cambios aplicados

- Se alargó la entrada al desplazamiento a 580 ms para opacidad y 720 ms para movimiento, con 16 px de recorrido. Sigue usando un solo `IntersectionObserver` y mantiene el soporte para `prefers-reduced-motion`.
- Se equilibraron ambos títulos con ajuste de línea balanceado. En la vista local de escritorio, Servicios y Productos quedan en dos líneas sin dejar aisladas “operación” o “para”.
- Se quitó la etiqueta “Piloto” de BaseLogic POS y el botón “Conoce todos los productos”.
- Las tarjetas de Servicios incorporan un acento cian/azul que se despliega, una elevación breve, acercamiento sutil de la imagen y realce de icono y título al pasar el mouse o enfocar con teclado.

### Verificación

- Vista local de escritorio revisada en `/`; los títulos y las cuatro tarjetas de Productos se ven completos y sin los elementos eliminados.
- `npm run build`: completado; se generaron 18 páginas.
- `git diff --check`: sin errores; solo avisos de conversión LF/CRLF.

final result: passed

## QA de diseño — sección «Menos caos. Más control»

**Fecha:** 5 de noviembre de 2026
**Ruta:** `/`
**Referencia:** `C:\Users\nicol\Downloads\RECURSOS BL\Menos caos, más control operativo.png`

### Recursos aplicados

- `public/images/operational-clarity/fondo-claridad-operacional.webp`
- `public/images/operational-clarity/ilustracion-antes.webp`
- `public/images/operational-clarity/ilustracion-ahora.webp`

### Revisión visual

- Escritorio: tarjetas Antes/Ahora en dos columnas, flecha al centro, ilustraciones contenidas y listas visibles.
- Móvil: viewport 390 × 844; tarjetas apiladas, flecha vertical, ilustraciones sin recorte, listas legibles y `scrollWidth === clientWidth`.
- La ilustración Ahora confirmó carga (`naturalWidth > 0`); la ilustración Antes se observó renderizada en la captura móvil.
- Detector visual: `[]`.
- Las capturas se observaron durante la sesión del navegador, pero no quedaron guardadas como archivos independientes. No se ejecutaron build ni pruebas automáticas.

### Resultado

La composición y la jerarquía coinciden con el mockup en escritorio y móvil. La sección conserva la información de trazabilidad sobre cobros, stock y equipos.

final result: passed

## QA de diseño — sección «Nuestros servicios»

**Fecha:** 5 de noviembre de 2026
**Ruta:** `/`
**Referencia:** `C:\Users\nicol\Downloads\RECURSOS BL\resources3\BaseLogic_Servicios_Blanco\mockup-seccion-blanca.png`

### Recursos aplicados

- `public/assets/servicios/presencia-digital.webp`
- `public/assets/servicios/automatizacion-procesos.webp`
- `public/assets/servicios/desarrollo-software.webp`
- `public/assets/servicios/fondo-blanco-sutil.svg`
- Iconos SVG de cada servicio en `public/assets/servicios/`.

### Revisión visual

- Escritorio: viewport 1672 × 1024; sección de 759 px en tres columnas. Bajó desde 917 px en la primera implementación. A 1280 px mide 734 px; a 1024 px mide 817 px en una sola fila de tres tarjetas.
- Tablet: a 1024 px las tarjetas miden unos 302 px y mantienen el contenido legible. Entre 768 y 1023 px se conservan dos columnas y la tercera tarjeta centrada.
- Móvil: viewport solicitado 390 × 844 (área útil 375 × 844); tarjetas apiladas en una columna y de 335 px, texto y listas legibles, sin desbordamiento horizontal (`scrollWidth === clientWidth`).
- Las tres ilustraciones y los tres iconos cargaron correctamente; las imágenes mantienen su proporción original.
- Las capturas se revisaron directamente en la vista local del navegador; no se guardaron como archivos independientes.

### Interacción y movimiento

- Las tarjetas completas enlazan a páginas existentes: páginas web, automatización y sistemas para pymes. Se verificó la navegación de la primera tarjeta hasta su página de servicio.
- Al entrar en pantalla, las tarjetas aparecen con un breve escalonado. El borde cian, la flecha y la elevación responden al hover y al foco de teclado.
- El movimiento se desactiva cuando el sistema solicita reducir animaciones.

### Contenido y accesibilidad

- Se conservaron los títulos, descripciones y listas de los tres servicios.
- Las ilustraciones tienen texto alternativo descriptivo; los iconos decorativos usan `alt` vacío y `aria-hidden`.

### Verificación

- `npm run build`: completado correctamente; 18 páginas generadas.
- Revisión visual manual en escritorio y móvil completada.
- Detector visual final: `[]`.

final result: passed

### Revisión de proporciones — 5 de noviembre de 2026

- Escritorio (1672 × 1024): «Nuestros servicios» comparte el ancho de contenido máximo de 1280 px y el título de 40 px con «Claridad operacional». La sección mide 744 px; sus tarjetas quedan en 392 × 492 px.
- Móvil (390 × 844; área útil 375 px): «Claridad operacional» mide 2159 px y «Nuestros servicios» 2041 px. Las tarjetas de servicios se apilan en una columna de 335 px; no hay desbordamiento horizontal (`scrollWidth === clientWidth`) y las tres ilustraciones cargan.
- El padding vertical de servicios sigue una escala uniforme de 40/48/40 px según el breakpoint, en lugar de saltar entre valores sin progresión.
- `npm run build`: completado correctamente; 18 páginas generadas. `git diff --check`: sin errores.
- Detector estático del componente: sin hallazgos reportados. El escaneo de navegador no estuvo disponible porque Puppeteer no está instalado en el proyecto.

final result: passed

## QA de diseño — sección «Nuestros productos»

**Fecha:** 5 de noviembre de 2026
**Ruta:** `/`
**Referencia:** `C:\Users\nicol\AppData\Local\Temp\codex-clipboard-a03095fc-7fd4-4880-80f3-538e16901dfc.png` (1774 × 887)

### Recursos aplicados

- `public/images/productos/baselogic-booking.webp`
- `public/images/productos/baselogic-edupay.webp`
- `public/images/productos/baselogic-eam.webp`
- `public/images/productos/baselogic-pos.webp`
- `public/images/productos/fondo-productos.svg`

### Revisión visual

- Escritorio: viewport 1280 × 720; cuatro tarjetas en una fila. La sección mide unos 834 px de alto y su contenido ocupa 1265 px, igual que el ancho útil de la página.
- El destino `#productos-destacados` respeta 80 px de margen para el encabezado fijo; en la observación la sección comenzó a 79 px del borde superior del viewport.
- Móvil: viewport 390 × 844 (área útil 375 px); tarjetas apiladas en una columna de 335 px, sin desbordamiento horizontal (`scrollWidth === clientWidth`).
- Las cuatro ilustraciones WebP cargaron correctamente y reportan 1040 px de ancho natural. Se revisó la vista de escritorio y móvil en el navegador local; las capturas no se guardaron como archivos independientes.

### Contenido e interacción

- Se conservaron descripción, etiquetas y destinos existentes para Booking, EduPay, EAM y POS; POS mantiene el distintivo «Piloto».
- CTA superior enlaza a `/productos`; las tarjetas enlazan a `/productos/booking`, `/productos/edupay`, `/productos/eam` y `/productos/pos`. Se verificaron los destinos en los enlaces renderizados; no se hizo clic en cada ruta.
- Las tarjetas incluyen transiciones de elevación y zoom de ilustración, foco visible y desactivación del movimiento cuando `prefers-reduced-motion` está activo.
- Las ilustraciones tienen texto alternativo descriptivo; los iconos decorativos están ocultos a lectores de pantalla.

### Verificación

- `npm run build`: completado correctamente; 18 páginas generadas.
- `git diff --check`: sin errores; Git solo mostró avisos de conversión LF/CRLF.
- Revisión visual manual completada en escritorio y móvil.

final result: passed

## QA de consistencia y movimiento — 5 de noviembre de 2026

**Ruta:** `/`

**Componentes revisados:** Claridad operacional, Menos caos. Más control, Nuestros servicios y Nuestros productos

### Sistema compartido

- Las cuatro secciones usan el mismo ancho máximo de 1280 px, escala de título, línea cian de sección, estilo de bajada y ritmo vertical.
- El área de contenido conserva fondos claros alternados y tarjetas con borde suave, radio y elevación consistentes. El contenido y los enlaces existentes se conservaron.
- La sección de Productos bajó de 834 px a 799 px en escritorio a 1440 × 900 y sus cuatro tarjetas miden 294 × 539 px. El margen del ancla mantiene el inicio a 80 px del encabezado fijo.
- Alturas de escritorio (1440 × 900): Claridad operacional 1137 px, Menos caos 703 px, Servicios 750 px y Productos 799 px. La sección de Claridad mantiene más altura por su cuadrícula de contenido, pero comparte la misma escala y contenedor.

### Movimiento y rendimiento

- Un único `IntersectionObserver` revela encabezados y tarjetas al entrar en pantalla; cada elemento deja de observarse después de aparecer. El retraso de tarjetas queda limitado a 220 ms.
- Hover y foco dan una elevación corta a las tarjetas, con desplazamiento de flechas e ilustraciones. No hay animaciones continuas ni dependencias nuevas.
- `prefers-reduced-motion` mantiene visible todo el contenido, desactiva transiciones y cambia el desplazamiento suave por inmediato.

### Revisión responsive

- Móvil 390 × 844: contenido sin desbordamiento horizontal (`scrollWidth === clientWidth`); tarjetas de producto en una columna de 335 × 528 px.
- Móvil estrecho 320 × 740: `scrollWidth` igual al ancho de viewport; tarjetas de 280 px y títulos sin recorte lateral.
- Escritorio 1440 × 900: cuatro productos en una fila, todas las imágenes visibles, y las secciones comparten el contenedor centrado de 1280 px.
- Las vistas se revisaron en el navegador local; las capturas no se guardaron como archivos independientes.

### Verificación

- `npm run build`: completado correctamente; 18 páginas generadas.
- `git diff --check`: sin errores; solo avisos de conversión LF/CRLF.
- Detector visual: una sugerencia heredada sobre `.bg-grid-pattern` en `global.css`; no tiene usos en `src` ni interviene en estas secciones.

final result: passed

## QA de imagen a código — metodología — 5 de noviembre de 2026

**Fuente visual:** `C:\Users\nicol\Downloads\RECURSOS BL\Nuestra metodología_ proceso claro, resultados concretos.png` (1923 × 818 px).

**Implementación:** `/` · `http://127.0.0.1:4321/#metodologia`.

**Evidencia visual:** captura observada en el navegador local integrado, sin archivo de captura independiente disponible. Escritorio: 1254 × 720 px; móvil: 390 × 844 px. No se aplicó remuestreo; el DPR no se consultó.

La referencia mide 1923 × 818 px y la vista de escritorio se capturó en el tamaño normal del navegador; por eso la revisión compara composición y comportamiento responsive, no coincidencia píxel a píxel.

**Estado revisado:** cuatro etapas visibles, segunda etapa seleccionada tras probar la interacción. En móvil, tarjetas apiladas en una columna.

### Comparación y fidelidad

- La composición conserva la introducción centrada, los cuatro pasos en secuencia, números, iconos y línea conectiva del mockup.
- El fondo azul oscuro de la referencia se adaptó al celeste suave, tarjetas blancas, texto azul marino y acentos cian/azules del sistema actual, según la solicitud.
- Se revisaron en la captura general la jerarquía tipográfica, el espaciado, la alineación y el ajuste responsive. La vista móvil mantiene títulos y tarjetas legibles sin recorte visible.
- La revisión de detalle cubrió los iconos de búsqueda, capas, código y cohete, los distintivos numéricos, el borde/sombra de tarjetas y el estado activo.
- Al seleccionar una tarjeta, `aria-pressed`, el énfasis visual y el estado accesible en vivo cambian juntos. La selección del paso 2 anunció «Etapa 2 de 4: Diseñamos la solución».
- El contenido específico por industria sigue accesible en «Enfocado en tu industria» y en las páginas de productos correspondientes.

### Hallazgos y comparación posterior

- [P2 corregido] La primera captura mostró que el texto centrado heredaba una línea vertical de otros encabezados. Se quitaron el borde y su sangría solo en esta introducción; la captura posterior confirmó alineación centrada y limpia.
- No quedan diferencias P0/P1/P2. El cambio de fondo es intencional y sigue la instrucción de integrar la sección al diseño claro del sitio.

### Verificación

- `npm run build`: completado correctamente; 18 páginas generadas.
- `git diff --check`: sin errores; permanecen solo avisos de conversión LF/CRLF.

final result: passed
