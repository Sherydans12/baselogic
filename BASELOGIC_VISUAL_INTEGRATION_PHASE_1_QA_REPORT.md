# BaseLogic — QA final de integración visual fase 1

> **Nota de vigencia:** este QA report es el registro definitivo de la Fase Visual 1. El estado EAM pendiente descrito aquí fue posteriormente superado por el commit `e7a720e520a59b72921d5ffa26c45e399df444b8`, que integró EAM V6. El documento se conserva como snapshot histórico de su fecha y no representa el estado actual del sitio.

**Fecha:** 20 de julio de 2026
**Alcance:** Home, Booking y validación de EAM pendiente; revisión de `/productos`, `/contacto` y `/servicios`
**Viewport de prueba:** desktop 1440 × 900 y mobile 390 × 844
**Evidencia visual:** `C:\Users\nicol\.codex\visualizations\2026\07\20\019f81d1-5aed-7e20-9198-883c68f64379\baselogic-phase-1-final-qa\`

## 1. Resultado general

**Resultado: FASE 1 APROBADA CON OBSERVACIONES MENORES.**

La integración visual fase 1 funciona correctamente después de una corrección simple realizada durante QA. Home y Booking muestran únicamente los assets aprobados, sin imágenes rotas, sin overflow horizontal y con carga prioritaria adecuada para los heroes. EAM continúa pendiente y no genera `<img>`, placeholder, columna vacía ni referencia pública a `eam-hero.webp`. El build final pasa sin errores.

La corrección realizada fue mover el CTA específico “Cotizar Booking” al hero. La imagen había desplazado ese CTA hasta `y≈983` en desktop y `y≈1131` en mobile. Después del ajuste queda visible en `y=410` desktop y `y=341` mobile, manteniendo una sola instancia del CTA y el mismo destino `/contacto`.

Quedan dos observaciones no bloqueantes:

1. Los assets aprobados actuales son cuadrados (`1024 × 1024`). Se aceptan para fase 1 porque funcionan como visual lateral/card; si en el futuro se usan como hero de ancho completo, conviene regenerar o exportar versiones 16:10, idealmente `1920 × 1200` o al menos `1536 × 960`.
2. En las capturas mobile el control del menú muestra visualmente los iconos de menú y cierre al mismo tiempo. Es una incidencia preexistente del header, no causada por los assets ni por esta fase, y quedó registrada en backlog como `Fix mobile menu double icon`.

La carpeta `_review` ya fue retirada de `public` y trasladada íntegramente a `visual-review/batch-1/`, por lo que no forma parte del artefacto público del build.

No se generaron nuevas imágenes, no se hizo commit y no se realizó deploy.

## 2. Estado real del repositorio

### Estado Git observado antes de QA

- Rama: `master`.
- Sin diferencias de commits respecto de `origin/master`.
- HEAD: `cf35b61` — `feat: relaunch BaseLogic website for production`.
- No había archivos staged.
- No se creó ningún commit durante este QA.

### Archivos existentes modificados

- `src/components/HomeHero.astro`
- `src/components/ListingHero.astro`
- `src/pages/productos/booking.astro`
- `src/pages/productos/eam.astro`

### Archivos nuevos relevantes

- `src/components/HeroVisual.astro`
- `src/data/visualAssets.ts`
- `public/images/generated/home/home-hero.webp`
- `public/images/generated/products/booking-hero.webp`
- Variantes de revisión y hoja de contacto bajo `visual-review/batch-1/`
- `BASELOGIC_VISUAL_IDENTITY_PLAN.md`
- `visual-review/batch-1/BASELOGIC_VISUAL_BATCH_1_REVIEW.md`
- `BASELOGIC_VISUAL_INTEGRATION_PHASE_1_QA_REPORT.md` — registro definitivo de la Fase Visual 1.

### Confirmación de alcance

El diff y los archivos nuevos corresponden a planificación, revisión, assets, capa de datos, componente visual e integración de Home/Booking/EAM pendiente. No se detectaron cambios funcionales o de contenido fuera del alcance visual. La única modificación adicional realizada durante este QA afecta la posición del CTA de Booking y el guard del componente compartido.

## 3. Estado de assets

Los metadatos se validaron leyendo el archivo con `sharp` y comprobando la firma binaria `RIFF … WEBP`.

| Asset | Estado | Formato real | Dimensiones | Peso | Ruta exacta |
|---|---|---|---:|---:|---|
| Home hero | Aprobado y existente | WebP, sRGB, sin alpha | 1024 × 1024 px | 59.284 bytes / 57,89 KiB | `C:\Users\nicol\Documents\baselogic-web\public\images\generated\home\home-hero.webp` |
| Booking hero | Aprobado y existente | WebP, sRGB, sin alpha | 1024 × 1024 px | 59.134 bytes / 57,75 KiB | `C:\Users\nicol\Documents\baselogic-web\public\images\generated\products\booking-hero.webp` |
| EAM hero final | Pendiente y ausente | No aplica | No aplica | No aplica | `C:\Users\nicol\Documents\baselogic-web\public\images\generated\products\eam-hero.webp` **no existe** |

Conclusiones:

- Los dos assets aprobados son WebP reales, no archivos renombrados.
- El peso es muy bajo para un hero y adecuado para fase 1.
- Las dimensiones cuadradas permiten el crop actual 16:10 sin pérdida visible del sujeto principal.
- El formato `1024 × 1024` queda aceptado para fase 1 porque las imágenes se integran como visual lateral/card. Como mejora futura, evaluar regeneración o exportación nativa en 16:10, idealmente `1920 × 1200` o al menos `1536 × 960`, especialmente si pasan a utilizarse como heroes de ancho completo. No se regeneraron assets durante esta limpieza.
- No existe un asset final de EAM.
- Las variantes EAM V1/V2 continúan únicamente en `visual-review/batch-1/eam/`, fuera de `public` y claramente separadas del path final.

## 4. Estado de `src/data/visualAssets.ts`

### Estados confirmados

- `visualAssets.home.hero.status`: `approved`.
- `visualAssets.products.bookingHero.status`: `approved`.
- `visualAssets.products.eamHero.status`: `pending`.

### Rutas y alt

- Home usa `/images/generated/home/home-hero.webp`.
- Booking usa `/images/generated/products/booking-hero.webp`.
- EAM conserva `src: ''` y `alt: ''` mientras está pendiente.
- El guard del componente impide que esos valores vacíos produzcan una solicitud de red o un `<img>` roto.
- Alt Home: “Espacio de trabajo moderno con una interfaz digital limpia para gestionar una pyme”. Es claro, describe el contexto y no repite el H1.
- Alt Booking: “Recepción moderna con una tablet mostrando una agenda digital de reservas”. Es claro y comunica la función de agenda/reserva.

### Capacidad de extensión

La estructura por namespaces (`home`, `products`) y el tipo compartido `VisualAsset` permiten añadir sin cambiar `HeroVisual.astro`:

- `products.edupayHero`
- `products.eamHero` aprobado cuando corresponda
- `products.ecosystemHero`
- `services.webPagesHero`
- `services.pymeSystemsHero`

No es necesario crear esas entradas durante esta fase.

## 5. Estado de `HeroVisual.astro`

| Validación | Resultado |
|---|---|
| Usa `<img>` real | Sí |
| Incluye `alt` desde la capa centralizada | Sí |
| Evita CLS | Sí; el contenedor reserva `aspect-[16/10]` antes de cargar la imagen |
| Permite hero prioritario | Sí; `priority=true` produce `loading="eager"` y `fetchpriority="high"` |
| Permite lazy-load | Sí; el valor por defecto produce `loading="lazy"` y prioridad automática |
| Depende de JavaScript | No; es HTML/CSS generado por Astro |
| Rompe accesibilidad | No se detectó ruptura; el alt es semántico y el overlay no es interactivo |
| Renderiza asset pending | No |
| Renderiza asset sin `src` | No |
| Muestra placeholder | No; devuelve `null` y conserva el layout normal de la página |

Durante QA se reforzó también `ListingHero.astro`: ahora calcula `hasVisual` usando simultáneamente `status === 'approved'` y un `src` no vacío. Esto evita que un estado aprobado mal configurado active una grilla de dos columnas sin imagen.

Límite conocido: el ratio es configurable, pero el llamador debe elegir un ratio coherente con el crop de futuros assets. El componente no puede inferir por sí solo el punto focal.

## 6. QA visual Home desktop/mobile

### Desktop 1440 × 900

**Resultado: aprobado.**

- H1: `x=105`, `y=247`, `631 × 300`.
- Imagen: `x=784`, `y=324`, `535 × 334`.
- CTA principal: `x=105`, `y=699`, `205 × 54`.
- La imagen no se superpone ni compite con el H1.
- Los dos CTAs y el enlace por correo siguen claros.
- El peso visual está equilibrado: copy dominante a la izquierda, evidencia visual secundaria a la derecha.
- Bordes, radio, sombra y gradiente se integran con el lenguaje existente.
- No hay overflow horizontal: `scrollWidth === clientWidth`.
- La escena mantiene una apariencia profesional y cercana. El monitor, la paleta azul/cian y el contexto de trabajo evitan que se sienta como fotografía de stock sin relación con el producto.

### Mobile 390 × 844

**Resultado: aprobado.**

- El H1, subtítulo y ambos CTAs permanecen antes de la imagen.
- La imagen comienza aproximadamente en `y=891`, inmediatamente después del primer viewport de 844 px. Esto preserva la prioridad comercial del copy y evita que la fotografía empuje los CTAs fuera de la primera pantalla.
- Contenedor visual: `333 × 207`.
- No hay overflow horizontal: `scrollWidth === clientWidth`.
- Texto y controles conservan legibilidad.
- La imagen no parece “pegada”: usa el mismo radio, borde y sombra del sistema desktop.

## 7. QA visual Booking desktop/mobile

### Hallazgo y corrección

Antes de la corrección, el CTA “Cotizar Booking” permanecía en la sección siguiente y quedaba en `y≈983` desktop y `y≈1131` mobile. La imagen aumentó naturalmente la altura del hero, por lo que el CTA específico dejó de estar visible en la primera pantalla.

Se añadió soporte opcional de CTA a `ListingHero.astro`, se pasó el texto y destino existentes desde Booking y se eliminó la instancia inferior para evitar duplicación.

### Desktop 1440 × 900 después de la corrección

**Resultado: aprobado.**

- CTA único: `x=105`, `y=410`, `200 × 52`.
- Imagen: `x=738`, `y=162`, `582 × 363`.
- La imagen comunica recepción, agenda y orden mediante tablet/interfaz visible.
- El CTA queda claramente asociado al producto y visible antes del fold.
- El hero mantiene proporción equilibrada; la imagen no es ni dominante ni demasiado pequeña.
- El estilo es coherente con Home: luz natural, vegetación moderada, interfaz en cian y tratamiento de contenedor idéntico.
- No hay overflow horizontal.

### Mobile 390 × 844 después de la corrección

**Resultado: aprobado.**

- CTA único: `x=20`, `y=341`, `200 × 52`.
- Imagen: `x=21`, `y=442`, `333 × 207`.
- Orden de lectura: eyebrow → H1 → tagline → CTA → imagen.
- El CTA ya no queda desplazado por el asset.
- El crop mantiene tablet, profesional y ambiente reconocibles.
- No hay overflow horizontal.

## 8. QA de EAM pendiente sin ruptura

**Resultado: aprobado como estado pending.**

- No existe `public/images/generated/products/eam-hero.webp`.
- `visualAssets.products.eamHero` está `pending`.
- El HTML generado de `/productos/eam` no contiene imagen generada en `main`.
- No hay solicitud a ruta vacía.
- No hay `<img src="">`.
- No hay placeholder ni espacio reservado para un asset inexistente.
- No se activa la grilla visual de dos columnas.
- La página conserva su hero textual, sección de módulos y CTA sin ruptura.
- No hay overflow horizontal en desktop ni mobile.

EAM queda correctamente pendiente; no se avanzó su dirección creativa ni su integración final.

## 9. Páginas relacionadas revisadas

| Ruta | Resultado | Observación |
|---|---|---|
| `/productos` | Aprobado | Conserva hero textual y tres cards. La ausencia de imágenes en EduPay/EAM no produce incoherencia nueva ni roturas |
| `/contacto` | Aprobado | Formulario, información de contacto y jerarquía visual sin cambios. Sin overflow ni imágenes rotas |
| `/servicios` | Aprobado | Mantiene su hero y grilla textual; la integración limitada a Home/Booking no altera componentes compartidos de servicios |

En las tres rutas, `brokenMainImages = 0` y `scrollWidth === clientWidth` en la captura desktop.

## 10. Barridos de contacto, copy y rutas antiguas

Se ejecutó búsqueda literal en HTML, JS y XML generados bajo `dist` después del build final.

| Término | Coincidencias generadas | Resultado |
|---|---:|---|
| `wa.me` | 0 | Limpio |
| `87751255` | 0 | Limpio |
| `baselogic.dev` | 0 | Limpio |
| `hola@baselogic.dev` | 0 | Limpio |
| `eam-hero.webp` | 0 | Limpio; no aparece en HTML público |

También se revisó el HTML de rutas objetivo:

- Home contiene solo `home-hero.webp`, con alt, eager y prioridad alta.
- Booking contiene solo `booking-hero.webp`, con alt, eager y prioridad alta.
- EAM no contiene ninguna imagen generada; solo aparecen los logos globales de header/footer.

Después de la limpieza y del build final, `dist/images/generated/_review/` no existe. Las variantes de revisión permanecen fuera de `public`, en `visual-review/batch-1/`, y no se copian al artefacto publicado.

## 11. Resultado de build

Comando ejecutado después de la limpieza:

```powershell
npm.cmd run build
```

**Resultado: exitoso, exit code 0.**

- Astro 5.17.1.
- 17 páginas estáticas construidas.
- Build final completado en 13,72 s.
- Sin errores de Astro, TypeScript o Vite.
- `git diff --check` no detectó errores de whitespace; solo avisos de conversión LF → CRLF propios del entorno Windows.

La comprobación posterior a la limpieza se detalla en la sección 14.

## 12. Correcciones realizadas durante QA

### 12.1 CTA de Booking

- Se añadieron props opcionales `ctaLabel` y `ctaHref` a `ListingHero.astro`.
- Se reutilizó el mismo texto “Cotizar Booking” y el mismo destino `/contacto`.
- Se eliminó el CTA duplicado de la sección siguiente.
- Resultado: un solo CTA, visible dentro del hero en desktop y mobile.

### 12.2 Guard visual compartido

- Se añadió `hasVisual = asset?.status === 'approved' && Boolean(asset.src)`.
- La grilla y `HeroVisual` se renderizan únicamente cuando el asset está aprobado y posee una ruta real.
- EAM pending conserva el layout textual sin columna vacía.

No se editaron ni regeneraron imágenes.

## 13. Pendientes

- Regenerar EAM V3–V6.
- Revisar y aprobar una variante EAM sin problemas anatómicos.
- Copiar el EAM aprobado al path final y cambiar su estado a `approved` solo después de la aprobación.
- Batch 2: EduPay.
- Batch 2: Páginas Web.
- Batch 2: Sistemas Pymes.
- Batch 2: Ecosistema Productos.
- Backlog visual: `Fix mobile menu double icon`.

## Veredicto

La fase 1 queda aprobada: Home y Booking están integrados, optimizados y coherentes; EAM permanece pendiente sin afectar la página; las rutas relacionadas continúan estables; los barridos están limpios y el build pasa. La carpeta `_review` ya está fuera del árbol público.

## 14. Cierre de limpieza previo a commit/deploy

- **Fase 1 aprobada:** Home aprobada; Booking aprobada tras la corrección del CTA; EAM pendiente sin ruptura.
- **Limpieza `_review` realizada:** `public/images/generated/_review/` fue retirada y ya no existe.
- **Assets públicos finales:** en `public/images/generated/` quedan únicamente `home/home-hero.webp` y `products/booking-hero.webp`.
- **Assets de revisión fuera de `public`:** Home V1–V4, Booking V1–V4, EAM V1–V2, `review.html` y el reporte auxiliar del batch están en `visual-review/batch-1/`.
- **Observación de dimensiones:** los aprobados actuales son `1024 × 1024`, aceptados como visual lateral/card para fase 1. Para un eventual hero de ancho completo, evaluar 16:10 en `1920 × 1200` o al menos `1536 × 960`.
- **EAM pendiente:** no existe `public/images/generated/products/eam-hero.webp` y no se integró ningún asset EAM.
- **Backlog:** `Fix mobile menu double icon`.
- **Build final:** exitoso; `dist/images/generated/_review/` y `dist/images/generated/products/eam-hero.webp` no existen, mientras que los assets finales de Home y Booking sí están presentes en `dist`.
- **Barrido final:** 0 coincidencias de `wa.me`, `87751255`, `baselogic.dev`, `hola@baselogic.dev` y `eam-hero.webp` en HTML, JS y XML generados.
- **Restricciones respetadas:** no se generaron imágenes, no se avanzó Batch 2, no se realizó commit y no se hizo deploy.
