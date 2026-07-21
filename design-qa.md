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
