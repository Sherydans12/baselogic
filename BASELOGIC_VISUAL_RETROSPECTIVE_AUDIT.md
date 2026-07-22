# BaseLogic — auditoría retrospectiva visual, frontend, Git y gobernanza de assets

**Fecha:** 21 de julio de 2026  
**Repositorio:** `C:\Users\nicol\Documents\baselogic-web`  
**Rama auditada:** `master`  
**HEAD:** `e7a720e520a59b72921d5ffa26c45e399df444b8`  
**Método:** inspección de documentación completa, Git, código Astro, archivos públicos, metadatos binarios, hashes SHA-256, HTML de revisión, assets originales y evidencia visual histórica existente.  
**Restricciones:** no se modificó código ni imágenes; no se movieron o eliminaron archivos; no se ejecutó build, commit, push ni deploy. El único archivo creado es este reporte.

## 1. Resumen ejecutivo

El runtime visual actualmente integrado está acotado y, en lo esencial, es coherente: Home usa exactamente Batch 1 Home V1, Booking usa exactamente Batch 1 Booking V2 y EAM usa exactamente Batch 1 EAM V6. Las tres copias públicas son WebP reales, sus hashes coinciden byte a byte con las fuentes de revisión aprobadas y no se detectó ninguna variante rechazada o pendiente dentro de `public`. Tampoco hay rutas `_review`, nombres `-v1`…`-v10` ni referencias a `visual-review` en `src` o `public`.

La auditoría no aprueba, sin embargo, continuar el proceso de selección tal como está documentado. El problema principal no es el funcionamiento de los tres heroes publicados, sino la confiabilidad de la trazabilidad:

- `visual-review/batch-2/review.html` está estructuralmente corrupto, contiene secciones duplicadas, cuatro cierres `</div>` menos, una tarjeta EduPay V4 truncada y metadatos repetidos.
- EduPay V9 y V10 existen y figuran en inventarios/HTML, pero no están cubiertas por ningún reporte formal de selección. La inspección directa detectó texto inventado claramente visible en carpetas y separadores; además pesan 415,87 y 719,44 KiB, muy por encima del presupuesto de 120–200 KiB definido para heroes interiores.
- La fuente aprobada EAM V6, las variantes EAM V3–V6 y `EAM_SELECTION_REVIEW.md` siguen untracked, aunque el commit y su reporte dependen de esa procedencia. Si se empujan los commits actuales, el repositorio remoto recibirá el derivado público pero no su evidencia de selección.
- El QA de fase 1 enumeraba un reporte adicional inexistente; la referencia vigente debe ser `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`, registro definitivo de esa fase.
- El doble icono del menú mobile sigue pendiente y está confirmado tanto en capturas como en el HTML generado: las clases destinadas a ocultar cada icono no aparecen en el SVG renderizado.

No se detectaron hallazgos de severidad crítica ni contaminación accidental de `public` con variantes rechazadas. Sí existen hallazgos altos que bloquean la continuación ordenada de Batch 2 y, por gobernanza, un push/deploy directo de `master` sin correcciones previas.

## 2. Documentos inspeccionados

Se abrieron y revisaron completos los siguientes documentos y artefactos:

### Planificación, implementación y QA visual

- `BASELOGIC_VISUAL_IDENTITY_PLAN.md`
- `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`
- `BASELOGIC_EAM_VISUAL_INTEGRATION_REPORT.md`
- `design-qa.md`
- `visual-review/batch-1/BASELOGIC_VISUAL_BATCH_1_REVIEW.md`
- `visual-review/batch-1/EAM_SELECTION_REVIEW.md`
- `visual-review/batch-1/review.html`
- `visual-review/batch-2/BASELOGIC_VISUAL_BATCH_2_REVIEW.md`
- `visual-review/batch-2/BATCH_2_SELECTION_REVIEW.md`
- `visual-review/batch-2/REGENERATED_ASSETS_SELECTION_REVIEW.md`
- `visual-review/batch-2/review.html`

### Contexto histórico adicional

- `BASELOGIC_SITE_AUDIT.md`
- `BASELOGIC_REDESIGN_PLAN.md`
- `BASELOGIC_SPRINT_1_IMPLEMENTATION_REPORT.md`
- `BASELOGIC_SPRINT_1_QA_REPORT.md`
- `BASELOGIC_SPRINT_2_IMPLEMENTATION_REPORT.md`
- `BASELOGIC_SPRINT_2_QA_REPORT.md`
- `BASELOGIC_SPRINT_3_PRODUCTION_REPORT.md`
- `README.md`
- `public/robots.txt`

### Documento citado pero inexistente

- La referencia histórica a un reporte adicional de integración no correspondía a ningún archivo del working tree ni del historial. Se corrigió para apuntar a `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`.

No se localizaron otros `.log` de QA/build ni reportes visuales adicionales fuera de los enumerados. `README.md` sigue siendo el texto por defecto del starter Astro y no documenta el proceso real.

## 3. Commits inspeccionados

### `6f7c38d2a3abb6055d9d071b641e6206ef5477d5` — `feat: add first approved visual assets`

- 22 archivos; 1.266 inserciones y 40 eliminaciones.
- Añade Home V1 y Booking V2 públicos, 12 variantes Batch 1 de revisión, plan visual, QA de fase 1, `visualAssets.ts`, `HeroVisual.astro` e integración Home/Booking.
- Añade EAM V1/V2 como revisión y deja EAM `pending` en datos.
- Mueve el CTA de Booking al hero sin cambiar texto ni destino.
- Reemplaza el panel HTML/CSS anterior de Home por la imagen aprobada; no altera el H1, subtítulo ni CTAs comerciales.
- No mezcla trabajo ajeno al alcance visual. La reubicación del CTA y el guard del layout son cambios funcionales mínimos directamente causados por la integración.
- No contiene un reporte adicional separado; el QA vigente `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md` es el registro definitivo de la fase.

### `e7a720e520a59b72921d5ffa26c45e399df444b8` — `feat: add approved EAM visual asset`

- 7 archivos; 236 inserciones y 9 eliminaciones.
- Añade el derivado público EAM, el reporte de integración y `design-qa.md`.
- Cambia EAM de `pending` a `approved`, agrega `objectPosition`, ratio mobile 4:5/desktop 16:10 y mueve el CTA al hero sin cambiar su copy o destino.
- No incluye `EAM_SELECTION_REVIEW.md` ni EAM V3–V6, aunque el reporte afirma que V6 es el origen.
- No se detectó trabajo no visual ajeno al alcance.

### Relación con remoto

`master` está exactamente dos commits por delante de `origin/master`: `6f7c38d` y `e7a720e`. El diff `origin/master...HEAD` comprende 25 archivos, 1.496 inserciones, 43 eliminaciones y los tres assets públicos. No se hizo fetch durante esta auditoría; la afirmación se refiere al `origin/master` local observado.

## 4. Estado real del working tree

Estado al iniciar la auditoría, antes de crear este reporte:

- Rama `master`, ahead 2.
- Sin archivos staged.
- Modificado y no staged: `visual-review/batch-1/review.html` (+169 líneas respecto del commit).
- 35 archivos untracked enumerados explícitamente:
  - `visual-review/batch-1/EAM_SELECTION_REVIEW.md`.
  - EAM V3, V4, V5 y V6.
  - 30 archivos bajo `visual-review/batch-2/`: 26 WebP, tres reportes Markdown y `review.html`.
- Ninguno de esos archivos está ignorado por Git.

Después de esta auditoría se suma únicamente `BASELOGIC_VISUAL_RETROSPECTIVE_AUDIT.md` como untracked permitido. No se alteró ninguno de los cambios preexistentes.

El working tree no está listo para un push gobernado: el commit EAM publicado depende de evidencia que solo existe localmente y el estado de Batch 2 no quedaría preservado en remoto.

## 5. Estado real de assets públicos

| Asset público | Formato/MIME real | Dimensiones | Ratio | Peso | Fuente exacta | Igualdad byte a byte |
|---|---|---:|---:|---:|---|---|
| `public/images/generated/home/home-hero.webp` | WebP / `image/webp`, RGB, RIFF/WEBP | 1024×1024 | 1,000:1 | 59.284 bytes / 57,89 KiB | `visual-review/batch-1/home/home-hero-v1.webp` | Sí; SHA-256 `E1FC9233460AF7944BFB404CA943593E26BFFE1B91FF93428190B574E9A848C0` |
| `public/images/generated/products/booking-hero.webp` | WebP / `image/webp`, RGB, RIFF/WEBP | 1024×1024 | 1,000:1 | 59.134 bytes / 57,75 KiB | `visual-review/batch-1/booking/booking-hero-v2.webp` | Sí; SHA-256 `B5B115DE63C704F347D448BD6533BD7F91CBD13655474A6021FFE1C94FF1A515` |
| `public/images/generated/products/eam-hero.webp` | WebP / `image/webp`, RGB, RIFF/WEBP | 1920×1200 | 1,600:1 | 127.978 bytes / 124,98 KiB | `visual-review/batch-1/eam/eam-hero-v6.webp` | Sí; SHA-256 `5D05D168E29477A5D4A249747BB492DACC0E0D60CA8994BD90E114BEEE2177BB` |

Conclusiones:

- Solo existen tres assets bajo `public/images/generated/`.
- Ningún archivo público coincide con una variante rechazada distinta de las tres selecciones documentadas.
- No existe `public/images/generated/_review/`.
- Los tres archivos presentes en `dist/images/generated/` tienen el mismo SHA-256 que sus equivalentes en `public`. El `dist` observado data del 21 de julio de 2026 a las 19:54 y corresponde al cierre del commit EAM; no fue regenerado en esta auditoría.
- Home/Booking cumplen ampliamente el presupuesto de transferencia, pero su master 1:1 no coincide con el contenedor 16:10. EAM coincide nativamente con 16:10.
- Permanecen assets públicos legados sin referencias en `src`: `og-image.jpg`, `BaseLogic LogoV2.png`, `icon-mail.png`, `icon-phone.png` e `icon-web.png`. No interfieren con los heroes, pero son candidatos a revisión de obsolescencia.

## 6. Estado real de assets de revisión

### Batch 1

- 14 WebP: Home V1–V4, Booking V1–V4 y EAM V1–V6.
- Todos son WebP reales y todas las rutas `<img>` de `review.html` existen.
- El HTML tiene 14 tarjetas, 14 bloques de metadatos y balances de `<div>` correctos.
- Diez metadatos de dimensiones son falsos: Home V1–V4, Booking V1–V4 y EAM V1–V2 se declaran `1920×1200`, pero son `1024×1024`.
- Los pesos declarados sí coinciden con los bytes expresados como KiB.
- El HTML modificado incluye correctamente EAM V3–V6, pero ese cambio y sus archivos siguen fuera de Git.

### Batch 2

- 26 WebP: Ecosistema V1–V4, EduPay V1–V10, Páginas Web V1–V4 y Sistemas para Pymes V1–V8.
- Todos son WebP reales; dimensiones y pesos del inventario Markdown coinciden con los archivos.
- Todas las 26 rutas únicas de imágenes referenciadas por `review.html` existen.
- Ninguno está dentro de `public` ni es referenciado por `src`.
- `review.html` no es una hoja confiable en su estado actual:
  - 477 aperturas de `<div>` frente a 473 cierres.
  - 33 tarjetas abiertas, 35 `textarea` y 34 bloques `.file-info`.
  - EduPay V4 queda truncada en la línea 357 y la estructura de Páginas Web V1 comienza dentro de su crop.
  - Páginas Web aparece incompleta primero y completa de nuevo desde la línea 715.
  - Sistemas para Pymes aparece dos veces, desde las líneas 457 y 818.
  - El encabezado de la línea 162 dice EduPay V1–V8, aunque el HTML incluye V9/V10.
  - EduPay V5–V8 usa pesos decimales en el HTML (40,61–42,88 KB), mientras el archivo y el inventario usan KiB (39,65–41,88 KiB).

No se hallaron copias públicas accidentales de Batch 2 ni referencias de revisión filtradas al sitio.

## 7. Comparación entre informes y archivos reales

| Afirmación histórica | Verificación | Resultado |
|---|---|---|
| Home V1 y Booking V2 son los públicos aprobados | Hashes idénticos a los originales | Confirmada |
| EAM V6 se copió byte a byte | Peso, mtime y SHA-256 coinciden | Confirmada |
| Home/Booking son 1024×1024 | Metadatos binarios | Confirmada; contradice `batch-1/review.html` |
| EAM usa 1920×1200 y centro | Archivo real y código | Confirmada |
| `_review` fue retirado de `public` | Árbol `public`, `dist` y búsquedas | Confirmada |
| No hay variantes rechazadas en `public` | Hashes contra todas las variantes | Confirmada |
| El QA citaba un reporte adicional separado | Árbol e historial Git | Afirmación histórica falsa; referencia corregida al QA definitivo |
| Batch 2 tiene 26 variantes | Conteo real | Confirmada |
| “Las 16 imágenes” de Batch 2 están aisladas | Hay 26, no 16 | Contradicción documental |
| `review.html` representa fielmente Batch 2 | Validación estructural y conteos | Falsa en el estado actual |
| V9/V10 son variantes nuevas listas para revisar | Existen y están en HTML/inventario | Parcial; no tienen QA formal y violan restricciones visuales duras |
| Build EAM dejó tres assets finales en `dist` | `dist` existente y hashes | Confirmada para el artefacto histórico; no se ejecutó build nuevo |

La QA de fase 1 es un snapshot válido previo a EAM y no debe leerse como estado actual: sus afirmaciones “EAM pendiente/ausente” fueron legítimas el 20 de julio y quedaron superadas por el commit del 21 de julio. Falta una marca explícita de supersesión.

## 8. Estado de Home

**Estado:** integrada y funcional con observaciones no bloqueantes de imagen y una incidencia compartida de navegación.

- `visualAssets.home.hero.status` es `approved` y la ruta existe.
- Fuente: Batch 1 Home V1, hash idéntico.
- Alt: informativo, no repite el H1 y no expone texto generado.
- Render: imagen a la derecha en desktop y después de copy/CTAs en mobile.
- Carga: `eager` y `fetchpriority="high"`.
- Ratio aplicado: 16:10 en todos los viewports; el master real es 1:1.
- Crop: visualmente aceptable en las capturas históricas, pero no existe crop mobile dedicado 4:5 ni `object-position` específico.
- CLS: el contenedor reserva ratio, aunque el `<img>` no declara `width`/`height` intrínsecos.
- No hay `srcset`, `sizes`, `<picture>`, AVIF ni `decoding="async"`.
- No hay JavaScript añadido por el hero; Astro entrega HTML/CSS.
- `CheckCircle2` quedó importado pero sin uso en `HomeHero.astro:2` después de eliminar el panel anterior.
- H1, subtítulo y CTAs no fueron alterados por los commits visuales.

## 9. Estado de Booking

**Estado:** integrada y funcional con observación pendiente de ratio/master.

- `visualAssets.products.bookingHero.status` es `approved` y la ruta existe.
- Fuente: Batch 1 Booking V2, hash idéntico.
- Alt pertinente para agenda/reserva; en la imagen hay UI abstracta sin palabras claramente legibles.
- CTA “Cotizar Booking” conserva copy y `/contacto`; solo fue reubicado al hero y existe una vez.
- Orden mobile confirmado: eyebrow, H1, texto, CTA, imagen.
- Ratio aplicado: 16:10 en desktop y mobile; master real 1:1.
- Crop actual conserva persona, tablet y contexto, pero no cumple la art direction original 4:5 mobile.
- Carga eager/high y reserva de ratio igual que Home.
- Sin `srcset`/`sizes`, dimensiones HTML explícitas ni variante responsive.
- En pantallas DPR 2, el ancho CSS histórico de 582 px requeriría aproximadamente 1164 px para densidad completa; el master de 1024 px queda ligeramente por debajo, aunque no se observó ruptura a DPR 1.
- Copy comercial, features y CTA final no muestran alteraciones accidentales.

## 10. Estado de EAM

**Estado:** integrada y correctamente resuelta en su asset, crop y CTA; gobernanza Git incompleta.

- `visualAssets.products.eamHero.status` es `approved`.
- Fuente real EAM V6, hash idéntico al derivado público y a `dist`.
- Ratio mobile 4:5; desde `sm`, 16:10.
- `object-position: 50% 50%` está implementado y las comparaciones fuente–render confirman que conserva supervisor, bomba y tablet.
- Master nativo 1920×1200; no hay escalado hacia arriba en los slots históricos.
- CTA “Cotizar EAM” conserva copy y `/contacto`, una sola instancia.
- Alt semántico presente; la frase “revisando … con una tablet” es algo más específica que la acción visible, pero no constituye una barrera.
- Carga eager/high, contenedor estable, sin overlay y sin JavaScript.
- EAM V1/V2 permanecen descartadas por tablet sostenida/manos y master 1:1. V3–V5 quedan como alternativas con reservas. V6 sigue siendo la mejor selección del micro-batch.
- Riesgos menores de V6 siguen vigentes: simetría algo escenificada, bodega genérica y acentos amarillos fuera de la paleta principal.
- El defecto pendiente es de trazabilidad: V6 y su informe de selección no forman parte de los commits que publican el derivado.

## 11. Estado de Batch 2

**Estado global:** no integrado; parcialmente seleccionado; documentación local no confiable para continuar sin saneamiento.

### Ecosistema de Productos

- V2 fue aprobada en `BATCH_2_SELECTION_REVIEW.md` con 68/75.
- La inspección directa confirma composición multidispositivo, ambiente real y ausencia de logo obvio.
- Riesgos vigentes: UI densa, pérdida del teléfono en 4:5 y centro ocupado; no admite copy superpuesto.
- No está integrada en `/productos`, no existe entrada en `visualAssets.ts` y permanece untracked.

### Páginas Web

- V2 fue aprobada con 69/75.
- La inspección directa confirma wireframes abstractos desktop/mobile y coherencia material con Home/Booking.
- Riesgos vigentes: monitor dominante, teléfono recortable y pequeño detalle de bisel que debe comprobarse a tamaño final.
- No está integrada, no existe entrada en datos y permanece untracked.

### EduPay

- V1–V4: rechazadas por texto visible, concepto ambiguo o UI no específica.
- V5–V8: rechazadas por apariencia 3D/plástica, falta de contexto educativo y concepto genérico.
- V9/V10: existentes pero sin reporte de selección. Inspección directa:
  - ambas muestran texto inventado legible en carpetas, separadores o documentos, lo que activa la regla de descarte automático definida por el propio proyecto;
  - V10 no representa de forma clara la “colaboración entre dos administradores” descrita en el inventario; la acción principal sigue siendo una sola persona con carpeta;
  - ambas son variaciones muy próximas de la misma escena y sujeto, con baja diversidad creativa;
  - V9 pesa 425.852 bytes / 415,87 KiB y V10 736.702 bytes / 719,44 KiB, aproximadamente 2,1× y 3,6× el máximo orientativo de 200 KiB para hero interior;
  - el crop 4:5 centrado pierde gran parte de la tablet/contexto lateral y conserva el texto problemático de la carpeta.
- Ninguna variante EduPay puede considerarse aprobada ni lista para integrar.

### Sistemas para Pymes

- V1–V4: rechazadas por texto/marcas, look stock, concepto genérico y falta de diversidad.
- V5–V8: rechazadas por estética 3D/plástica, dashboard corporativo aislado y ausencia de operación pyme real.
- Ninguna está aprobada o integrada.

## 12. Observaciones históricas recuperadas

| Observación histórica | Estado actual | Clasificación |
|---|---|---|
| Doble icono menú mobile | Visible en todas las capturas mobile y reproducible en HTML generado | Sigue pendiente; bloquea deploy |
| Home/Booking 1024×1024 frente a objetivo horizontal | Continúan 1:1 y se recortan a 16:10 | Sigue pendiente; no bloqueante para layout lateral actual |
| EAM `object-position` centrado | Implementado y validado en 4:5/16:10 | Resuelta |
| `_review` antes dentro de `public` | No existe en `public` ni `dist` actual | Resuelta |
| EAM V1/V2 con anatomía/manos | No fueron publicados | Resuelta por descarte |
| EAM V3–V6 pendientes de generación/selección | Generadas; V6 seleccionada e integrada | Resuelta visualmente; pendiente en Git |
| Reportes sin seguimiento | EAM selection y todo Batch 2 siguen untracked; falta reporte fase 1 | Sigue pendiente; alta |
| Cambios preexistentes fuera del commit EAM | Persisten en `visual-review/batch-1/` | Sigue pendiente; alta |
| Pesos elevados | EAM 125 KiB es aceptable; EduPay V9/V10 son 416/719 KiB | Parcialmente resuelta; sigue pendiente en V9/V10 |
| Diferencias de ratio | Home/Booking 1:1; EAM 16:10; Batch 2 mezcla 1,6–1,99 | Sigue pendiente por slot; no es defecto automático |
| Falta de imágenes en Productos/EduPay/servicios | Ecosistema/Páginas Web seleccionadas pero no integradas; EduPay/Pymes sin ganadora | Sigue pendiente; no bloquea el sitio actual |
| Falta de `<picture>`/responsive | Heroes usan un único WebP público | Sigue pendiente; no bloqueante por pesos actuales |
| Dimensiones reservadas para evitar CLS | `aspect-ratio` en contenedor | Resuelta con limitación; faltan atributos intrínsecos |
| CTA Booking/EAM desplazado | Reubicados al hero sin duplicación | Resuelta |
| Formularios/WhatsApp/dominio antiguos | No aparecen en `src`, `public` ni HTML público observado | Resuelta |
| Formulario real/backend | Sigue siendo fallback `mailto:` según Sprint 3 | Sigue pendiente, fuera del alcance visual inmediato |
| OG final PNG/JPG | `og-baselogic.svg` sigue activo; `og-image.jpg` legado queda público sin uso | Sigue pendiente; baja |
| README starter | Sigue sin actualizar | Sigue pendiente; baja |
| Redirects 301 reales en hosting | No verificable sin entorno desplegado | No verificable; fuera de esta auditoría local |

## 13. Contradicciones encontradas

1. El QA de fase 1 enumeraba un reporte adicional que nunca existió en Git; la referencia se corrigió al QA definitivo.
2. `batch-1/review.html` declara 1920×1200 para diez imágenes 1024×1024.
3. El inventario Batch 2 se titula “26 Variantes”, pero la gobernanza afirma “Las 16 imágenes”.
4. El encabezado de `batch-2/review.html` dice EduPay V1–V8, aunque contiene V9/V10.
5. `REGENERATED_ASSETS_SELECTION_REVIEW.md` afirma que `review.html` representa fielmente los crops; el archivo actual está roto y duplicado. No es posible saber si se corrompió después de aquella QA.
6. La descripción de EduPay V10 habla de colaboración de dos administradores, pero la imagen muestra una sola protagonista en primer plano; las demás personas son fondo desenfocado.
7. La documentación Batch 2 usa “KB” indistintamente para valores decimales y KiB, produciendo diferencias en V5–V8.
8. El reporte EAM es correcto sobre el hash del origen, pero el origen no forma parte del commit ni del historial remoto potencial.
9. `SiteHeader.astro` contiene clases `hidden`/`group-open`, pero el HTML generado histórico elimina esas clases de los SVG Lucide; por eso la afirmación estructural “menú mobile OK” de Sprints 1/2 no equivale a QA visual aprobada.

## 14. Problemas omitidos anteriormente

- No se identificó la causa verificable del doble icono: los SVG renderizados no conservan las clases pasadas a los componentes Lucide, por lo que ambos iconos permanecen visibles.
- No se detectó la corrupción estructural de `batch-2/review.html` ni la duplicación de sus secciones.
- No se informó que diez dimensiones de `batch-1/review.html` eran falsas.
- No se elevó como riesgo de gobernanza que el commit EAM referencia una fuente y una decisión untracked.
- No se señaló la ausencia real del reporte de integración de fase 1 citado por el QA.
- V9/V10 fueron añadidas al inventario/HTML sin un documento de evaluación, pese a contener texto generado visible.
- No se compararon los pesos V9/V10 contra el presupuesto ya aprobado.
- No se señaló que `CheckCircle2` quedó importado sin uso en Home.
- Las QA de integración aceptaron la reserva de ratio como prevención de CLS, pero no documentaron la ausencia de `width`/`height`, `srcset`, `sizes` y `decoding`.
- No se identificaron los assets públicos legados y no referenciados que siguen desplegables.

## 15. Hallazgos bloqueantes

### Antes de continuar Batch 2

1. Reparar o regenerar la hoja `visual-review/batch-2/review.html` y verificar su DOM, conteos y metadatos.
2. Ejecutar una QA formal de EduPay V9/V10; con la evidencia actual ambas activan descarte por texto generado y no deben avanzar a aprobación/integración.
3. Reconciliar el inventario de 26 variantes y eliminar la afirmación obsoleta de 16.

### Antes de push

1. Incorporar o excluir explícitamente la evidencia EAM V3–V6 y `EAM_SELECTION_REVIEW.md`; no empujar un reporte que referencia fuentes ausentes del historial.
2. Mantener la referencia corregida a `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md` y su nota de snapshot histórico.
3. Decidir y registrar el destino de todo Batch 2; el working tree actual no preserva el trabajo en remoto.
4. Si `master` dispara publicación, corregir primero el doble icono mobile.

### Antes de deploy

1. Corregir y recapturar el control mobile con un único icono por estado.
2. Revalidar desktop/mobile de Home, Booking y EAM después de esa corrección compartida.
3. No incluir aún ningún asset Batch 2 adicional.

## 16. Hallazgos no bloqueantes

- Master 1:1 de Home/Booking recortado a 16:10.
- Falta de variantes AVIF/WebP por ancho y art direction mobile.
- Falta de `width`/`height`, `sizes`, `srcset` y `decoding` explícitos.
- Import no usado `CheckCircle2` en Home.
- Riesgos menores de composición EAM V6.
- Assets públicos legados sin referencias.
- `README.md` genérico.
- OG todavía en SVG y formulario todavía dependiente de `mailto:`.
- Aprobaciones Ecosistema V2/Páginas Web V2 todavía no integradas.

## 17. Elementos correctamente resueltos

- Separación entre `visual-review` y `public`.
- Ausencia total de `_review` en el árbol público.
- Selección pública exacta Home V1, Booking V2 y EAM V6.
- Formato WebP real, no renombrado.
- Hash EAM correctamente documentado.
- Guards de `status === 'approved'` y `src` no vacío en `ListingHero`/`HeroVisual`.
- Ausencia de placeholder o columna vacía para assets no entregados.
- CTA Booking/EAM único, visible y con destino conservado.
- Orden mobile de copy → CTA → visual.
- Ratio mobile 4:5 y foco centrado de EAM.
- Reserva de espacio mediante `aspect-ratio`.
- `loading="eager"` y `fetchpriority="high"` en heroes integrados.
- Sin JavaScript cliente añadido por las imágenes.
- Sin referencias antiguas `wa.me`, `87751255`, `baselogic.dev` o `hola@baselogic.dev` en `src`/`public`.
- Sin nombres de variante ni rutas de revisión en HTML público.
- Sin cambios comerciales accidentales de H1, subtítulos o CTAs en los dos commits.

## 18. Archivos obsoletos, duplicados o sin seguimiento

### Sin seguimiento y relevantes

- `visual-review/batch-1/EAM_SELECTION_REVIEW.md`.
- `visual-review/batch-1/eam/eam-hero-v3.webp` a `eam-hero-v6.webp`.
- Todo `visual-review/batch-2/`.

### Modificado sin seguimiento

- `visual-review/batch-1/review.html`.

### Inexistente pero citado

- Referencia histórica a un reporte adicional inexistente, ahora corregida a `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md`.

### Duplicado/corrupto

- Bloques Páginas Web y Sistemas para Pymes dentro de `visual-review/batch-2/review.html`.
- Metadatos repetidos de EduPay V4 y Páginas Web/Sistemas Pymes.
- EduPay V9/V10 no son duplicados byte a byte, pero son variantes conceptualmente muy cercanas de la misma escena.

### Potencialmente obsoletos en `public`

- `og-image.jpg`.
- `BaseLogic LogoV2.png`.
- `icon-mail.png`, `icon-phone.png`, `icon-web.png`.

No se recomienda eliminar nada durante esta auditoría; primero debe confirmarse si existen consumidores externos por URL.

## 19. Riesgos antes de push/deploy

- **Pérdida de trazabilidad:** remoto con EAM final pero sin fuente aprobada ni acta de selección.
- **Pérdida de trabajo local:** Batch 2 completo no existe en Git.
- **Aprobación equivocada:** una hoja HTML corrupta puede mostrar tarjetas anidadas, duplicadas o crops asociados al asset equivocado.
- **Integración de asset inválido:** V9/V10 contienen texto generado y no tienen dictamen formal.
- **Performance futura:** V10 transferiría 719 KiB si se copiara sin optimización; la arquitectura pública no genera variantes responsive.
- **Regresión visual mobile:** control de menú ambiguo presente en todas las rutas porque `SiteHeader` es compartido.
- **Falsa seguridad documental:** QA históricas aprobadas pueden leerse fuera de su fecha y estado de supersesión.
- **Densidad de píxeles:** Home/Booking pueden perder nitidez en slots grandes de alta densidad.
- **Accesibilidad no demostrada:** screenshots y alt no prueban teclado, foco, lector de pantalla, zoom 200% ni WCAG completo.
- **Deploy de assets legados:** archivos públicos no referenciados siguen siendo accesibles por URL.

## 20. Acciones recomendadas en orden de prioridad

1. Mantener congelados push, deploy e integración Batch 2 hasta cerrar los hallazgos altos.
2. Reconstruir `batch-2/review.html` desde el inventario real de 26 assets, validar balance de etiquetas, una tarjeta por variante, rutas, dimensiones y unidad de peso.
3. Emitir una QA específica EduPay V9/V10 con inspección 100%, 16:10, 4:5 y 1:1. Con la evidencia actual, registrar ambas como rechazadas por texto generado; regenerar si se requiere una nueva pareja.
4. Añadir a la trazabilidad Git EAM V3–V6 y `EAM_SELECTION_REVIEW.md`, o documentar formalmente una política que excluya masters de revisión sin dejar referencias rotas.
5. Crear el reporte de integración fase 1 faltante o corregir todas las referencias que afirman que existe.
6. Corregir el render de iconos mobile y recapturar estado cerrado/abierto en 390×844.
7. Revalidar Home/Booking/EAM en 320, 390, 768, 1024 y 1440 px, incluyendo DPR alto, foco por teclado y zoom.
8. Definir `width`/`height`, `decoding`, `srcset`/`sizes` o migrar los masters a `src/assets` con pipeline Astro; no integrar Batch 2 con un único master público.
9. Decidir si Home/Booking requieren master horizontal 16:10/4:3 y crop 4:5 mobile; mantener los actuales solo si la nitidez se acepta en DPR 2.
10. Marcar reportes históricos como vigentes, superados o de solo planificación.
11. Auditar consumidores externos antes de retirar assets públicos legados y actualizar `README.md`.
12. Solo después de lo anterior, preparar un commit deliberado y volver a ejecutar QA/build antes de push/deploy.

## Tabla maestra de hallazgos

| ID | Hallazgo | Fuente o archivo | Evidencia real | Severidad | Estado | Bloquea push | Bloquea deploy | Acción recomendada |
|---|---|---|---|---|---|---|---|---|
| H-01 | EAM V6 y su acta de selección están fuera de Git | `visual-review/batch-1/` | `git ls-files --others`; hash del público apunta a V6 untracked | Alta | Sigue pendiente | Sí | No | Preservar fuente/acta o corregir política y referencias |
| H-02 | Hoja Batch 2 estructuralmente corrupta | `visual-review/batch-2/review.html` | 477 `<div>` abiertos/473 cerrados; tarjeta EduPay V4 truncada | Alta | Sigue pendiente | Sí | No | Regenerar y validar HTML |
| H-03 | Secciones duplicadas en Batch 2 | `review.html:457`, `:715`, `:818` | Páginas Web/Sistemas aparecen dos veces | Alta | Sigue pendiente | Sí | No | Una sección y una tarjeta por variante |
| H-04 | EduPay V9/V10 sin QA formal | Batch 2 | No aparecen en los dos reportes de selección | Alta | Sigue pendiente | Sí | No | Crear QA específica antes de selección |
| H-05 | V9/V10 contienen texto inventado visible | EduPay V9/V10 | Carpetas, tabs y documentos muestran pseudo-texto | Alta | Sigue pendiente | Sí | No | Rechazar/regenerar; no integrar |
| H-06 | V9/V10 exceden presupuesto | EduPay V9/V10 | 415,87/719,44 KiB vs objetivo 120–200 KiB | Media | Sigue pendiente | No | No | Optimizar solo una futura variante aprobada |
| H-07 | Doble icono mobile | `SiteHeader.astro:56-57`; capturas | Menu y X simultáneos; clases ausentes en SVG generado | Alta | Sigue pendiente | Sí en `master` | Sí | Corregir y recapturar ambos estados |
| H-08 | Reporte fase 1 citado pero inexistente | QA fase 1:51 | `Test-Path=False`; sin historial Git | Alta | Contradicción documental | Sí | No | Crear o corregir referencia |
| H-09 | Metadatos Batch 1 falsos | `batch-1/review.html` | 10 assets 1024×1024 declarados 1920×1200 | Media | Contradicción documental | Sí si se publica revisión | No | Corregir dimensiones desde archivo real |
| H-10 | Conteo Batch 2 26 vs 16 | `BASELOGIC_VISUAL_BATCH_2_REVIEW.md:15,107` | Conteo real: 26 WebP | Media | Contradicción documental | Sí | No | Unificar inventario y gobernanza |
| H-11 | Encabezado HTML omite V9/V10 | `batch-2/review.html:162` | Texto dice V1–V8; tarjetas V9/V10 en 668/693 | Media | Contradicción documental | Sí | No | Actualizar alcance |
| H-12 | Pesos HTML V5–V8 inconsistentes | Batch 2 HTML | KB decimal vs KiB real/inventario | Baja | Contradicción documental | No | No | Etiquetar unidad y recalcular |
| H-13 | Home/Booking master 1:1 en slot 16:10 | assets públicos | 1024×1024 reales; CSS 16:10 | Media | Sigue pendiente; no bloqueante | No | No | Validar DPR/crops o regenerar masters |
| H-14 | Falta pipeline responsive | `HeroVisual.astro` | Un solo `src`; sin picture/srcset/sizes | Media | Sigue pendiente | No | No | Definir variantes por ancho/formato |
| H-15 | Falta tamaño intrínseco/decoding | `HeroVisual.astro:21-27` | Sin `width`, `height`, `decoding` | Baja | Sigue pendiente | No | No | Añadir en futura corrección; conservar ratio |
| H-16 | Import no usado | `HomeHero.astro:2` | `CheckCircle2` no se renderiza | Baja | Sigue pendiente | No | No | Limpiar en pase posterior |
| H-17 | EAM object-position | código y comparaciones | `50% 50%`; sujetos conservados | Baja | Resuelta | No | No | Mantener y cubrir con QA visual |
| H-18 | `_review` público | `public`, `dist` | No existe; cero referencias | Baja | Resuelta | No | No | Mantener aislamiento |
| H-19 | No aprobadas en `public` | hashes/árbol público | Solo V1 Home, V2 Booking, V6 EAM | Baja | Resuelta | No | No | Mantener política |
| H-20 | Rutas antiguas en código/público | `src`, `public` | Cero `wa.me`, `87751255`, `baselogic.dev`, `hola@...` | Baja | Resuelta | No | No | Mantener barrido previo a release |
| H-21 | V2 Ecosistema/Páginas Web no integradas | Batch 2 y código | Aprobadas en reporte; ausentes de `visualAssets.ts`/public | Baja | Sigue pendiente; no bloqueante | No | No | Integrar solo tras cerrar gobernanza |
| H-22 | QA fase 1 snapshot obsoleto para EAM | QA fase 1 vs reporte EAM | “pending” el 20/7, “approved” el 21/7 | Baja | No es defecto; falta supersesión | No | No | Etiquetar como superado |
| H-23 | QA de redirects/hosting | reportes Sprint | Requiere hosting real | Baja | No verificable | No | No | Verificar en deploy futuro |
| H-24 | Assets públicos legados sin uso | `public/` | Sin referencias en `src` | Baja | Sigue pendiente | No | No | Confirmar consumidores externos antes de retirar |
| H-25 | README genérico | `README.md` | Starter Astro intacto | Baja | Sigue pendiente | No | No | Documentar proyecto y gobernanza |
| H-26 | Claims de build histórico | reportes y `dist` | `dist` consistente con HEAD; no se rehízo build | Baja | Confiable con límite temporal | No | No | Repetir build solo tras correcciones |

## Conclusión

AUDITORÍA REQUIERE CORRECCIONES ANTES DE CONTINUAR

## Resumen final — máximo 15 líneas

1. Los tres assets públicos son WebP reales y coinciden byte a byte con Home V1, Booking V2 y EAM V6.
2. No hay variantes rechazadas, `_review` ni nombres `-v*` dentro del sitio público.
3. `master` está dos commits delante de `origin/master` y los commits no mezclan trabajo ajeno al alcance visual.
4. La fuente/selección EAM V6 sigue fuera de Git aunque el derivado público ya está commiteado.
5. Todo Batch 2 está untracked.
6. `batch-2/review.html` está corrupto, duplicado y no debe usarse para decidir.
7. EduPay V9/V10 no tienen QA formal y contienen texto generado visible.
8. V9/V10 pesan 415,87 y 719,44 KiB, por encima del presupuesto acordado.
9. El doble icono mobile continúa visible y su causa aparece en el HTML generado.
10. Home/Booking siguen con masters 1024×1024 recortados a 16:10.
11. EAM 16:10/4:5 y `object-position: 50% 50%` están correctamente resueltos.
12. Falta el reporte de integración de fase 1 citado por el QA.
13. Batch 1 declara dimensiones falsas para diez imágenes.
14. No se debe integrar ningún asset Batch 2 ni hacer push/deploy hasta sanear trazabilidad, HTML y QA V9/V10.

