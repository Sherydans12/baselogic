# BaseLogic — reporte de correcciones retrospectivas visuales

**Fecha:** 21 de julio de 2026  
**Repositorio:** `C:\Users\nicol\Documents\baselogic-web`  
**Rama:** `master`  
**HEAD verificado:** `e7a720e520a59b72921d5ffa26c45e399df444b8`  
**Alcance:** saneamiento de gobernanza visual, visores Batch 1/2, rechazo EduPay V9/V10, trazabilidad EAM, corrección del menú móvil y QA del sitio.  
**Restricciones respetadas:** no se generaron imágenes, no se integró ni copió Batch 2 a `public`, no se editaron WebP, no se regeneraron Home/Booking, no se cambió copy/rutas/CTA, no se hizo staging, commit, push ni deploy.

## 1. Estado inicial

Se ejecutaron y registraron `git status`, `git log --oneline --decorate -10`, `git diff`, `git diff --cached` y `git diff origin/master...HEAD` antes de editar.

- Rama: `master`.
- HEAD: `e7a720e520a59b72921d5ffa26c45e399df444b8`.
- Relación local: `master` estaba 2 commits por delante de `origin/master` y 0 por detrás.
- Commits locales: `6f7c38d feat: add first approved visual assets` y `e7a720e feat: add approved EAM visual asset`.
- Staging inicial: vacío.
- Modificado inicial: `visual-review/batch-1/review.html`.
- Untracked inicial: 36 archivos: la auditoría retrospectiva, 5 evidencias EAM Batch 1 y 30 archivos Batch 2.
- Batch 1 real: 14 WebP; Home V1 y Booking V2 ya públicos; EAM V6 ya público, pero V3–V6 y el acta EAM seguían fuera de Git.
- Batch 2 real: 26 WebP, tres actas/inventarios y un visor, todo local/untracked y completamente fuera de `public`.

El historial visible de 7 commits termina en `a99b0a1 Initial commit from Astro`; no se creó ningún commit durante estas correcciones.

## 2. Hallazgos corregidos

Se cerraron los hallazgos bloqueantes verificables:

- visor Batch 2 corrupto/duplicado;
- metadatos falsos de dimensiones en Batch 1;
- ausencia de dictamen formal para EduPay V9/V10;
- contradicciones de 16 vs 26 variantes y de vigencia documental;
- referencia a un reporte de Fase 1 que nunca existió;
- trazabilidad EAM lista para preservarse;
- doble icono del menú móvil;
- import no usado en Home;
- ausencia de `decoding="async"` en el componente compartido de hero.

No se alteró ningún asset original ni público.

## 3. Visor Batch 2 reconstruido

`visual-review/batch-2/review.html` fue reconstruido desde cero a partir de los 26 WebP reales. No se reutilizaron los bloques duplicados del archivo corrupto.

Cada tarjeta incluye:

- nombre y variante;
- dimensiones reales;
- formato WebP;
- peso en KiB;
- ruta relativa del repositorio;
- original completo con `object-fit: contain`;
- preview 4:5 con `object-fit: cover`;
- preview 1:1 con `object-fit: cover`.

El visor permanece exclusivamente bajo `visual-review` y no fue copiado a `public`.

## 4. Conteo y validación de 26 variantes

Validación con parser HTML5 y comprobación contra el filesystem, exit code 0:

| Grupo | Variantes | Tarjetas | Originales | 4:5 | 1:1 |
|---|---:|---:|---:|---:|---:|
| Ecosistema de Productos | V1–V4 | 4 | 4 | 4 | 4 |
| EduPay | V1–V10 | 10 | 10 | 10 | 10 |
| Páginas Web | V1–V4 | 4 | 4 | 4 | 4 |
| Sistemas para Pymes | V1–V8 | 8 | 8 | 8 | 8 |
| **Total** | **26** | **26** | **26** | **26** | **26** |

Resultados adicionales:

- 4 secciones únicas y encabezados correctos.
- 78 elementos `img`: tres usos por cada uno de los 26 assets.
- 26 rutas únicas; todas existen.
- Ningún asset omitido ni agregado.
- Ningún nombre/variante repetido.
- 294 aperturas y 294 cierres de `<div>`.
- 0 errores de parseo HTML5.
- 0 tarjetas truncadas.

## 5. Visor Batch 1 corregido

Se mantuvieron las 14 variantes y la estructura/crops EAM existentes. Solo se corrigieron metadatos falsos:

- Home V1–V4: `1024×1024`.
- Booking V1–V4: `1024×1024`.
- EAM V1–V2: `1024×1024`.
- EAM V3–V6: `1920×1200`.
- Los valores de peso se etiquetaron correctamente como KiB.

Validación:

- 14 tarjetas y 14 rutas únicas existentes.
- Inventario HTML igual al inventario real de WebP.
- 127 aperturas y 127 cierres de `<div>`.
- 0 errores de parseo.
- Crops EAM preservados.

## 6. Rechazo formal de EduPay V9/V10

Se creó `visual-review/batch-2/EDUPAY_V9_V10_REJECTION_REPORT.md`.

Ambas variantes fueron inspeccionadas a 1920×1200 y en crops centrados 4:5/1:1. La carpeta manila protagonista, separadores y documentos muestran texto o pseudo-texto generado. El rótulo principal sobrevive completo en ambos crops y queda cerca del centro compositivo. V10 además no representa claramente la colaboración de dos administradores descrita en el inventario.

| Variante | Dimensiones | Peso | Resultado |
|---|---:|---:|---|
| V9 | 1920×1200 | 415,87 KiB | Rechazo automático |
| V10 | 1920×1200 | 719,44 KiB | Rechazo automático |

La edición menor no basta porque el defecto aparece en varias superficies superpuestas del primer plano; corregirlo exigiría reconstruir papel, perspectiva, sombras y oclusiones. No se editaron ni comprimieron los archivos.

**Conclusión:** EduPay V9 y V10 rechazadas; regenerar

## 7. Inventarios y documentación reconciliados

Se actualizaron:

- `visual-review/batch-2/BASELOGIC_VISUAL_BATCH_2_REVIEW.md`;
- `visual-review/batch-2/BATCH_2_SELECTION_REVIEW.md`;
- `visual-review/batch-2/REGENERATED_ASSETS_SELECTION_REVIEW.md`.

Estado documental consistente:

- Batch 2 contiene 26 variantes.
- EduPay llega a V10.
- V9/V10 están rechazadas.
- Ecosistema V2 conserva aprobación.
- Páginas Web V2 conserva aprobación.
- EduPay no tiene ganadora.
- Sistemas para Pymes no tiene ganadora.
- Pesos expresados como KiB.
- Los pases V1–V4 y V5–V8 están marcados como snapshots históricos.
- La afirmación de confiabilidad del visor corrupto quedó explícitamente superada; el visor vigente es el reconstruido.

## 8. Referencia al reporte inexistente resuelta

La referencia histórica errónea fue reemplazada en todo el repositorio por `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`. El barrido literal del nombre anterior devuelve 0 coincidencias.

El QA vigente ahora declara claramente que:

- es el registro definitivo de la Fase Visual 1;
- el estado EAM pendiente fue superado por el commit `e7a720e520a59b72921d5ffa26c45e399df444b8`;
- el documento es un snapshot histórico, no el estado actual.

No se inventó ni reconstruyó un reporte histórico ficticio.

## 9. Trazabilidad EAM preparada

Se verificaron el asset público, V6, el acta EAM y el commit `e7a720e520a59b72921d5ffa26c45e399df444b8`.

- Público: `public/images/generated/products/eam-hero.webp`.
- Origen: `visual-review/batch-1/eam/eam-hero-v6.webp`.
- Tamaño en ambos: 127.978 bytes.
- SHA-256 en ambos: `5D05D168E29477A5D4A249747BB492DACC0E0D60CA8994BD90E114BEEE2177BB`.
- Resultado: igualdad byte a byte confirmada.
- El commit EAM contiene el derivado público y la integración, pero no V3–V6 ni el acta de selección.

Quedan listos, sin staging, V3–V6, `EAM_SELECTION_REVIEW.md` y el visor Batch 1 para el próximo commit de gobernanza. La imagen pública no se modificó.

## 10. Doble icono mobile corregido

`SiteHeader.astro` ya no depende de que Lucide conserve clases en el SVG. Cada icono está dentro de un `span` HTML propio y el CSS usa el estado nativo `details[open]`:

- cerrado: wrapper hamburguesa `display: flex`; wrapper X `display: none`;
- abierto: wrapper hamburguesa `display: none`; wrapper X `display: flex`.

No se agregó JavaScript cliente, no se rediseñó el header, no se tocaron navegación desktop, enlaces ni copy.

También se eliminó el import no usado `CheckCircle2` de Home y se añadió `decoding="async"` a `HeroVisual.astro`.

## 11. QA responsive

Evidencia guardada en:

`C:\Users\nicol\.codex\visualizations\2026\07\22\019f87bc-18af-7182-ac18-ff183d354fe9\baselogic-retrospective-corrections-qa\`

| Paso | Evidencia | Estado general |
|---:|---|---|
| 1 | Home 320×568, menú cerrado | Saludable; solo hamburguesa, imagen íntegra, sin rotura |
| 2 | Home 320×568, menú abierto | Saludable; solo X, navegación visible |
| 3 | Booking 390×844, cerrado | Saludable; CTA a y=341, imagen correcta |
| 4 | Booking 390×844, abierto | Saludable; solo X, sin overflow |
| 5 | EAM 768×1024, cerrado | Saludable; CTA a y=345, crop estable |
| 6 | EAM 768×1024, abierto | Saludable; solo X, navegación estable |
| 7 | Home 1440×900 | Saludable; navegación desktop, CTA e imagen sin regresión |
| 8 | Productos 1440×900 | Saludable; cards y CTA visibles |
| 9 | Booking 1440×900 | Saludable; hero, CTA y visual sin regresión |
| 10 | EAM 1440×900 | Saludable; hero, CTA y visual sin regresión |
| 11 | Contacto 1440×900 | Saludable; formulario e información visibles |
| 12 | Servicios 1440×900 | Saludable; grilla y CTA visibles |

En 320, 390, 768 y desktop no se detectó overflow horizontal real, imágenes rotas ni doble icono. El navegador reserva 15 px para su scrollbar vertical en algunos tamaños; `body.scrollWidth` permanece dentro de `window.innerWidth`. La consola terminó con 0 warnings y 0 errores.

Límite de evidencia: las capturas prueban reflow, visibilidad, crops y estados visuales; no demuestran por sí solas conformidad WCAG completa ni comportamiento de lectores de pantalla.

## 12. Resultado del build

Comando ejecutado:

```powershell
npm.cmd run build
```

Resultado:

- exit code 0;
- Astro 5.17.1;
- 17 páginas construidas;
- build completo en 7,84 s;
- sin errores Astro, TypeScript o Vite;
- `dist` contiene únicamente Home, Booking y EAM bajo `images/generated`.

## 13. Resultado de barridos

Búsqueda en `src`, `public` y `dist`:

| Patrón | Coincidencias |
|---|---:|
| `wa.me` | 0 |
| `87751255` | 0 |
| `baselogic.dev` | 0 |
| `hola@baselogic.dev` | 0 |
| `visual-review` | 0 |
| `_review` | 0 |
| `edupay-hero-v9` | 0 |
| `edupay-hero-v10` | 0 |
| nombres de variantes Batch 2 | 0 |

`dist/images/generated` contiene solo:

- Home: 59.284 bytes;
- Booking: 59.134 bytes;
- EAM: 127.978 bytes.

Ningún asset Batch 2 aparece en `dist`.

## 14. Archivos modificados

Archivos tracked modificados y no staged:

- `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`;
- `src/components/HeroVisual.astro`;
- `src/components/HomeHero.astro`;
- `src/components/SiteHeader.astro`;
- `visual-review/batch-1/review.html`.

`git diff --stat` antes de crear este reporte: 5 archivos, 218 inserciones y 25 eliminaciones. La mayor parte del diff de Batch 1 ya correspondía a la ampliación EAM preexistente; esta corrección solo ajustó metadatos.

## 15. Archivos untracked

Estado esperado al cierre: 38 archivos untracked, agrupados así:

- 1 auditoría retrospectiva de entrada;
- 1 reporte final de correcciones (este archivo);
- 1 acta EAM y 4 WebP EAM V3–V6;
- 26 WebP Batch 2;
- visor Batch 2;
- cuatro documentos Batch 2: inventario, selección inicial, selección regenerada y rechazo V9/V10.

No hay archivos staged.

## 16. Cambios propuestos para el próximo commit

Preparar deliberadamente un commit de saneamiento y gobernanza que incluya:

1. corrección del header, limpieza de Home y `decoding="async"`;
2. QA de Fase 1 con nota de vigencia;
3. visor Batch 1 corregido, acta EAM y EAM V3–V6;
4. visor Batch 2 reconstruido, 26 originales aislados y sus cuatro documentos;
5. auditoría retrospectiva y este reporte de cierre.

Mensaje sugerido: `chore: sanitize visual governance and mobile menu QA`.

Antes de staged/commit conviene revisar el diff completo y confirmar que la política del repositorio desea versionar los 26 masters Batch 2. No se realizó staging automático.

## 17. Pendientes bloqueantes

No persisten bloqueantes para preparar el commit de saneamiento y gobernanza.

Sí persisten bloqueantes para una futura integración visual Batch 2:

- EduPay debe regenerarse y aprobar una nueva variante; V1–V10 están rechazadas.
- Sistemas para Pymes debe regenerarse y aprobar una variante; V1–V8 están rechazadas.
- No integrar Ecosistema V2 ni Páginas Web V2 hasta abrir explícitamente la siguiente fase y completar su QA de integración.

## 18. Pendientes no bloqueantes

- Home y Booking siguen usando masters 1024×1024 recortados a 16:10; documentado como mejora futura.
- Evaluar más adelante `width`/`height`, `srcset`, `sizes`, `<picture>`, AVIF y art direction mobile.
- Revisar assets públicos legados no referenciados antes de retirarlos.
- Actualizar el README starter y verificar redirects en hosting cuando exista una fase de deploy.

No se implementó ninguno de estos cambios fuera de alcance.

## 19. Recomendación de siguiente paso

Revisar este diff sin staged, decidir si los 26 masters Batch 2 deben versionarse en el mismo commit de gobernanza y, solo después, preparar staging deliberado. No hacer push ni deploy hasta revisar ese commit.

## Conclusión

CORRECCIONES COMPLETADAS: se puede preparar commit de saneamiento y gobernanza

