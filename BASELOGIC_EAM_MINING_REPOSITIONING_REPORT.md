# BaseLogic EAM — Reporte de reposicionamiento para minería y contratistas

Fecha: 2026-07-23

Repositorio: `C:\Users\nicol\Documents\baselogic-web`

Rama: `master`

## 1. Estado inicial

Después de `git fetch origin --prune`:

- `HEAD`: `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`.
- `origin/master`: `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`.
- La rama local estaba alineada con remoto.
- No había archivos staged.
- Archivos rastreados modificados: `STATUS.md`, `EAM_MINING_VISUAL_REVIEW.md`, V5, V6 y `review.html`, todos dentro de Batch 3.
- Archivos nuevos: los dictámenes V5/V6 y V7/V8, V7 y V8, todos dentro de Batch 3.
- V1–V4 estaban rechazadas; V5–V6 quedaron rechazadas por sus dictámenes; V7 estaba aprobada para selección visual y V8 condicionada a edición localizada y nueva QA.
- `public/images/generated/products/eam-hero.webp` pesaba 127.978 bytes, coincidía por SHA-256 con `visual-review/batch-1/eam/eam-hero-v6.webp` y no tenía cambios locales.
- No existían rutas ni copias de Batch 3 dentro de `public/`.

## 2. Commit documental Batch 3

Se validó que:

- V1–V8 existen y son WebP de 1920×1200.
- `review.html` contiene 8 tarjetas, 8 originales, 8 crops 4:5 y 8 crops 1:1.
- Cada tarjeta referencia tres veces su archivo correcto y todas las rutas existen.
- Los estados del visor se reconciliaron con los dictámenes: V1–V6 rechazadas, V7 aprobada para selección visual y V8 condicionada.

La evidencia visual quedó aislada en:

- Commit: `c0721351887495f38bd251ec1b2b78f9bd3b292e`.
- Mensaje: `chore: finalize EAM mining visual selection`.
- Alcance: nueve archivos de `visual-review/batch-3/`.
- Exclusiones confirmadas: sin `public/`, código, `dist/`, temporales ni archivos ajenos a Batch 3.

## 3. Asset V7 aprobado

Original preservado:

`visual-review/batch-3/eam-mining/eam-mining-hero-v7.webp`

Verificación:

- Formato real: WebP, VP8 lossy, YUV 4:2:0.
- Dimensiones: 1920×1200.
- Ratio: 16:10.
- Peso: 420.092 bytes (410,25 KiB).
- SHA-256: `14b2c1b562e1fa98e5928f441dbc5aeed08d3c4e2df43e19611a592089ec5f47`.
- El hash se comprobó antes y después de generar la copia pública y permaneció idéntico.
- V8 no se editó ni se integró.

## 4. Optimización realizada

Se compararon calidades WebP 80, 81, 82, 83, 84, 86, 88, 90 y 92 con preset fotográfico y nivel máximo de compresión. La configuración elegida fue calidad 83:

| Calidad | Peso | Reducción |
|---:|---:|---:|
| 80 | 311.728 bytes | 25,80% |
| 81 | 323.410 bytes | 23,01% |
| 82 | 334.740 bytes | 20,32% |
| **83** | **349.096 bytes** | **16,90%** |
| 84 | 359.686 bytes | 14,38% |
| 86 | 382.792 bytes | 8,88% |
| 88 | 412.786 bytes | 1,74% |
| 90 | 433.292 bytes | -3,14% |
| 92 | 477.772 bytes | -13,73% |

Comando final:

```powershell
ffmpeg -hide_banner -loglevel error -y -i visual-review\batch-3\eam-mining\eam-mining-hero-v7.webp -frames:v 1 -c:v libwebp -lossless 0 -preset photo -compression_level 6 -quality 83 -map_metadata -1 public\images\generated\products\eam-hero.webp
```

La revisión comparativa a 100% y 200% no detectó pérdida perceptible en neumáticos, cubo de rueda, rostro, EPP, tablet, conos, escaleras, suelo ni texturas metálicas. Calidad 83 conserva mejor detalle fino que las alternativas de menor peso y queda dentro del rango preferente sin compresión agresiva. Todos los candidatos y crops temporales fueron eliminados después de la selección.

## 5. Hash y peso público final

Archivo:

`public/images/generated/products/eam-hero.webp`

- Formato real: WebP.
- Dimensiones: 1920×1200.
- Ratio: 16:10.
- Peso final: 349.096 bytes (340,91 KiB).
- Reducción: 70.996 bytes; 16,90%.
- SHA-256: `86f951a5c4bb10457166785bff1e513e7046d933469c48e6794952457900529f`.
- `dist/images/generated/products/eam-hero.webp` existe, pesa 349.096 bytes y tiene el mismo SHA-256.

## 6. Cambios en `visualAssets.ts`

La URL pública se mantuvo:

`/images/generated/products/eam-hero.webp`

Se actualizó:

- Alt: `Técnico inspeccionando un camión minero de alto tonelaje con registro digital de mantenimiento`.
- Foco: `80% 50%`.

`HeroVisual.astro` ya entregaba `object-fit: cover`, `loading="eager"`, `fetchpriority="high"`, `decoding="async"` y un contenedor con ratio reservado. No fue necesario modificarlo.

`ListingHero.astro` recibió una variante móvil opcional para compactar únicamente el hero EAM en pantallas estrechas. Su valor predeterminado conserva el comportamiento previo de Home, Booking y los demás heroes.

## 7. Copy anterior y nuevo

Antes:

- Eyebrow: `Producto avanzado`.
- H1: `BaseLogic EAM`.
- Descripción: `Gestion de activos, mantenimiento, inventario y operaciones.`

Después:

- Eyebrow: `BaseLogic EAM para minería y contratistas`.
- H1: `Controla el mantenimiento de equipos y activos críticos desde una sola plataforma`.
- Descripción: `Planifica mantenimientos, gestiona órdenes de trabajo y centraliza la trazabilidad de maquinaria pesada, flotas de apoyo, equipos de perforación, grúas, componentes y repuestos.`
- CTA único del hero: `Cotizar EAM`, con destino `/contacto`.

La ficha EAM de `/productos` también se actualizó para reflejar minería y contratistas sin presentar el producto como exclusivo de ese sector.

## 8. SEO actualizado

- Title: `Software de mantenimiento para minería | BaseLogic EAM`.
- Description: `Gestiona activos, órdenes de trabajo, mantenimiento preventivo, repuestos y trazabilidad de equipos pesados y flotas con BaseLogic EAM.`
- Canonical verificado: `https://baselogic.cl/productos/eam`.
- Open Graph verificado con el nuevo title, description y URL canónica.
- JSON-LD verificado: `Organization`, `WebSite`, `ProfessionalService`, `BreadcrumbList`, `SoftwareApplication` y `FAQPage`.
- Breadcrumbs verificados: Inicio → Productos → BaseLogic EAM.
- FAQ estructurada: cuatro preguntas.
- La URL pública no cambió.

## 9. Secciones modificadas

La página incorpora:

1. Hero comercial enfocado en minería y contratistas.
2. Introducción: `Más control para operaciones donde cada detención importa`.
3. Seis capacidades principales con descripción.
4. Seis casos de uso para activos críticos.
5. Audiencia: `Pensado para contratistas y operaciones intensivas en activos`.
6. Cinco beneficios sin cifras ni garantías.
7. Cuatro preguntas frecuentes alineadas con el alcance declarado.
8. CTA final existente del sitio, sin duplicar `Cotizar EAM`.

## 10. Claims evitados

No se agregaron:

- clientes mineros, alianzas o certificaciones;
- marcas o nombres de fabricantes;
- telemetría, IoT, GPS o integración con fabricantes;
- mantenimiento predictivo;
- integración ERP;
- operación offline;
- reducción porcentual de costos o fallas;
- cero fallas o eliminación de detenciones;
- cumplimiento normativo automático;
- promesas de disponibilidad o resultados garantizados.

El copy mantiene minería como foco comercial y conserva aplicabilidad para contratistas y otras operaciones con activos físicos.

## 11. QA responsive

Se verificó la página construida en navegador real:

| Viewport | Resultado |
|---|---|
| 320×568 | H1 y CTA completos en el primer viewport; crop 4:5; sin overflow; un solo icono móvil |
| 390×844 | Cubo, técnico y tablet visibles; crop 4:5; CTA visible; sin overflow |
| 768×1024 | Ratio 16:10 reservado; H1, CTA e imagen legibles; sin overflow |
| 1366×768 | Hero a dos columnas; imagen 16:10 completa; CTA visible; sin overflow |
| 1440×900 | Hero a dos columnas equilibrado; imagen 16:10 completa; sin overflow |

Controles adicionales:

- `object-fit: cover`.
- `object-position: 80% 50%`.
- Imagen 1920×1200 cargada correctamente.
- `loading="eager"`, `fetchpriority="high"` y `decoding="async"`.
- Sin imagen rota ni CLS visible.
- Menú móvil validado cerrado y abierto: un solo icono visible en ambos estados.
- Secciones, cards, beneficios y FAQ revisados en mobile con contraste y lectura correctos.
- Sin errores de consola.

Regresión visual y estructural:

- `/`
- `/productos`
- `/productos/booking`
- `/contacto`
- `/servicios`

Las cinco rutas conservaron un H1, no presentaron imágenes rotas ni overflow horizontal. Home y Booking mantuvieron su composición y assets.

## 12. Resultado del build

Comando:

```powershell
npm.cmd run build
```

Resultado:

- Exit code 0.
- 17 páginas informadas por Astro.
- 1.708 módulos transformados.
- Sin errores de Astro, TypeScript o Vite.
- Build final completo en 11,11 s según Astro.

## 13. Resultado de barridos

Los barridos de `src`, `public` y `dist` no encontraron coincidencias para:

- `CAT`;
- `Caterpillar`;
- `Komatsu`;
- `Toyota`;
- `wa.me`;
- `87751255`;
- `baselogic.dev`;
- `hola@baselogic.dev`;
- `eam-mining-hero-v7`;
- `visual-review`;
- `_review`.

Un barrido adicional del alcance EAM no encontró referencias a telemetría, IoT, GPS, mantenimiento predictivo, ERP, offline, fabricantes, clientes mineros, alianzas, certificaciones ni garantías prohibidas.

## 14. Archivos modificados

- `public/images/generated/products/eam-hero.webp`
- `src/components/ListingHero.astro`
- `src/data/faqs.ts`
- `src/data/products.ts`
- `src/data/seo.ts`
- `src/data/visualAssets.ts`
- `src/pages/productos/eam.astro`
- `BASELOGIC_EAM_MINING_REPOSITIONING_REPORT.md`

No se modificaron Home, Booking, V7, V8, Batch 2, EduPay ni Sistemas Pymes.

## 15. Pendientes

- No se hizo push.
- No se hizo deploy.
- V8 continúa como candidata condicionada; no fue editada ni integrada.
- Después de un despliegue autorizado conviene ejecutar smoke test de producción, confirmar caché/CDN del nuevo WebP y revisar métricas reales de carga.

## 16. Recomendación para deploy

Revisar y aprobar el segundo commit local, enviar `master` al remoto solo con autorización explícita y permitir que el pipeline habitual publique el sitio. Después del despliegue, verificar `/productos/eam`, canonical/OG/JSON-LD, respuesta del asset público y los cinco viewports principales. No se recomienda ninguna acción adicional sobre V8 dentro de este despliegue.
