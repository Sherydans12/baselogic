# BaseLogic — reporte de integración visual EAM V6

**Fecha:** 21 de julio de 2026

**Alcance:** integración del asset EAM V6 aprobado en `/productos/eam`, QA responsive y validación de build.

**Resultado:** APROBADO.

## 1. Resultado general

EAM V6 quedó integrado como visual lateral del hero usando la arquitectura compartida de Home y Booking. El copy comercial permanece intacto, el CTA está visible antes del fold, el visual no usa overlay, los crops desktop/mobile conservan los sujetos críticos y no se detectaron regresiones en Home, Booking ni `/productos`.

No se generaron imágenes, no se avanzó Batch 2 y no se realizó push ni deploy.

## 2. Asset aprobado integrado

| Validación | Resultado |
|---|---|
| Origen | `visual-review/batch-1/eam/eam-hero-v6.webp` |
| Destino | `public/images/generated/products/eam-hero.webp` |
| Formato real | WebP (`RIFF … WEBP`, codec `webp`) |
| Dimensiones | 1920 × 1200 px |
| Peso | 127.978 bytes / 124,98 KiB |
| SHA-256 origen | `5D05D168E29477A5D4A249747BB492DACC0E0D60CA8994BD90E114BEEE2177BB` |
| SHA-256 destino | `5D05D168E29477A5D4A249747BB492DACC0E0D60CA8994BD90E114BEEE2177BB` |

Los hashes, peso y fecha de modificación coinciden. La copia es byte a byte y el original de revisión no fue modificado.

## 3. Archivos creados/modificados

### Creados

- `public/images/generated/products/eam-hero.webp`
- `BASELOGIC_EAM_VISUAL_INTEGRATION_REPORT.md`
- `design-qa.md`

### Modificados

- `src/data/visualAssets.ts`
- `src/components/HeroVisual.astro`
- `src/components/ListingHero.astro`
- `src/pages/productos/eam.astro`

Los cambios preexistentes bajo `visual-review/batch-1/` se preservaron y quedaron fuera del alcance de esta integración.

## 4. Configuración en `visualAssets.ts`

EAM quedó configurado con:

- `status: 'approved'`
- `src: '/images/generated/products/eam-hero.webp'`
- `alt: 'Supervisor en una operación industrial limpia revisando control de activos y mantenimiento con una tablet'`
- `objectPosition: '50% 50%'`

Home y Booking conservan sus rutas, estados, alt y comportamiento visual existentes.

## 5. Integración en EAM

- Se reutilizaron `ListingHero.astro` y `HeroVisual.astro`.
- El visual se renderiza a la derecha en desktop y debajo del contenido en mobile.
- El CTA existente “Cotizar EAM” se movió desde la segunda sección al hero, conservando texto y destino `/contacto` y evitando duplicados.
- El orden mobile es texto, CTA e imagen.
- No hay overlay.
- El contenedor con `aspect-ratio` reserva el espacio antes de la carga y evita CLS.
- Al ser un hero above-the-fold, usa `loading="eager"` y `fetchpriority="high"`.
- El asset se sirve con tamaño nativo suficiente y `object-fit: cover`.

## 6. Ajuste de `object-position`

Se fijó `object-position: 50% 50%` para EAM. La composición V6 está construida alrededor del eje central; mantener el centro conserva simultáneamente supervisor, bomba y tablet en 16:10 y 4:5. Un desplazamiento lateral habría recortado parte del activo o del contexto industrial sin aportar una mejora visual.

El ratio aplicado a EAM es:

- Mobile: 4:5.
- Desde `sm`: 16:10.

## 7. QA desktop/mobile

### EAM desktop — 1366 × 900

- Visual: 582 × 363 px, ratio 16:10.
- CTA: `y=409,5`, termina en `y=461,5`, visible en el primer viewport.
- Imagen cargada: 1920 × 1200 natural, sin errores.
- Supervisor, bomba, tablet y mesa principal visibles.
- Sin overflow horizontal: `scrollWidth === clientWidth`.
- Hero equilibrado y coherente con Booking.

### EAM mobile — 390 × 844

- Visual: 333 × 416,75 px, ratio 4:5.
- CTA: `y=341`, termina en `y=393`, visible en el primer viewport.
- Crop centrado conserva supervisor, activo y tablet.
- Sin overflow horizontal, imagen rota ni placeholder.
- La navegación del CTA se validó hasta `/contacto`.

### Rutas relacionadas

| Ruta | Desktop 1366 × 900 | Mobile 390 × 844 | Resultado |
|---|---|---|---|
| `/productos/booking` | Sin overflow ni imágenes rotas | Sin overflow ni imágenes rotas | Sin regresión |
| `/` | Sin overflow ni imágenes rotas | Sin overflow ni imágenes rotas | Sin regresión |
| `/productos` | Sin overflow; hero y cards correctos | Sin overflow; cards apiladas correctamente | Sin regresión |

La consola del navegador quedó limpia. El doble icono del menú mobile es un detalle preexistente documentado en la QA de fase 1 y no fue modificado para evitar ampliar el alcance.

Evidencia y comparación visual: `C:\Users\nicol\.codex\visualizations\2026\07\21\019f870f-7036-73b0-92ba-1b07b2b5ab72\eam-integration-qa\`.

## 8. Resultado de build

Comando ejecutado:

```powershell
npm.cmd run build
```

Resultado: exitoso, exit code 0.

- Astro 5.17.1.
- 17 páginas estáticas construidas.
- Build final completado en 5,22 s.
- `/productos/eam` generado en `dist/productos/eam/index.html`.
- `dist/images/generated/products/eam-hero.webp` existe.
- El asset de `dist` conserva los mismos 127.978 bytes y SHA-256 del origen.

## 9. Barridos

El barrido de HTML, JavaScript y XML públicos bajo `dist` produjo cero coincidencias para:

- `eam-hero-v6.webp`
- `wa.me`
- `87751255`
- `baselogic.dev`
- `hola@baselogic.dev`

La ruta final `/images/generated/products/eam-hero.webp` aparece una sola vez en HTML público, únicamente en `dist/productos/eam/index.html`.

Los nombres o datos antiguos que aparecen en reportes históricos Markdown no forman parte del HTML público ni del artefacto desplegable.

## 10. Pendientes

- No hay pendientes bloqueantes para EAM V6.
- Batch 2 permanece sin iniciar.
- Push y deploy permanecen pendientes por instrucción.
- Backlog independiente: corregir el doble icono del menú mobile.
