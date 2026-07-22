# BaseLogic — rechazo formal EduPay V9/V10

**Fecha:** 21 de julio de 2026  
**Alcance:** inspección a tamaño completo y simulaciones centradas 4:5 y 1:1 de los WebP originales.  
**Regla aplicada:** cualquier texto, pseudo-texto, etiqueta o palabra generada visible activa descarte automático. No se realizó una selección competitiva entre V9 y V10.

## 1. Integridad y metadatos

| Variante | Dimensiones | Formato | Bytes | Peso | SHA-256 |
|---|---:|---|---:|---:|---|
| EduPay V9 | 1920 × 1200 px | WebP | 425.852 | 415,87 KiB | `9B48EB86805848813DAB893BBB2505D9C2ED04C7ECFC265C3D556E98223333CA` |
| EduPay V10 | 1920 × 1200 px | WebP | 736.702 | 719,44 KiB | `726ED6DFA3F752249A22AC78B21A3CE415DAC56EF1E7CC1D11E2D8A723EACD21` |

Los assets fueron inspeccionados sin editarlos, comprimirlos ni convertirlos.

## 2. Geometría de los crops revisados

Ambas fuentes miden 1920 × 1200 px y usan el mismo encuadre general.

- Crop centrado 4:5: conserva 960 × 1200 px, correspondiente a `x=480–1439`, `y=0–1199`.
- Crop centrado 1:1: conserva 1200 × 1200 px, correspondiente a `x=360–1559`, `y=0–1199`.

Estas simulaciones corresponden al visor vigente con `object-fit: cover` y `object-position: 50% 50%`.

## 3. EduPay V9

### Texto o pseudo-texto visible

- En la carpeta manila que sostiene la administradora, en el primer plano centro-derecha, aparece un título negro de dos líneas con caracteres que imitan palabras y una serie numérica. Es el defecto dominante y queda dentro del foco principal.
- En los separadores de la pila de documentos del primer plano inferior izquierdo aparecen dos etiquetas beige con pseudo-palabras oscuras.
- En las hojas blancas y carpetas apiladas del primer plano inferior central hay líneas y microglifos que simulan texto administrativo.
- En el archivador vertical situado detrás de la tablet, cerca del centro, aparecen pequeñas inscripciones verticales.

### Tipo de defecto

Texto generado y pseudo-texto integrado en documentos físicos. No es UI abstracta ni textura incidental: se presenta como rotulación administrativa legible o casi legible dentro del concepto principal de EduPay.

### Resultado del crop 4:5

El crop elimina gran parte de la tablet y del espacio vacío izquierdo, pero conserva completamente la carpeta sostenida con el título de dos líneas. También conserva los documentos centrales y parte de las etiquetas inferiores. El defecto principal sobrevive con alta visibilidad.

### Resultado del crop 1:1

El crop conserva la administradora, la carpeta rotulada, la pila central de documentos y una porción mayor de los separadores inferiores. El pseudo-texto continúa visible y permanece cerca del centro compositivo.

### Dictamen

Rechazo automático. Reencuadrar no elimina el defecto; ambos crops obligatorios lo mantienen.

## 4. EduPay V10

### Texto o pseudo-texto visible

- En la carpeta manila sostenida por la administradora, en el primer plano central, aparece el mismo título negro de dos líneas con pseudo-palabras y una serie numérica.
- En los separadores de la pila inferior izquierda se observan etiquetas beige con pseudo-texto oscuro.
- Las hojas y carpetas del primer plano inferior central contienen líneas que imitan registros escritos.
- Los archivadores verticales situados detrás de la tablet contienen pequeñas marcas o inscripciones.
- La escena no representa claramente la colaboración de dos administradores descrita en el inventario: la acción principal corresponde a una sola persona; las demás figuras permanecen desenfocadas al fondo. Esta contradicción es secundaria al descarte automático por texto.

### Tipo de defecto

Texto generado y pseudo-texto en utilería física, sumado a una discrepancia objetiva entre la descripción de colaboración y la acción visible.

### Resultado del crop 4:5

El crop retira buena parte de la tablet y de la pila izquierda, pero mantiene completa la carpeta rotulada y los documentos centrales. El título defectuoso queda prácticamente en el centro del encuadre y sobrevive con claridad.

### Resultado del crop 1:1

El crop conserva la carpeta con pseudo-texto, los registros centrales y parte de las etiquetas inferiores. El defecto no queda oculto ni reducido a un borde prescindible.

### Dictamen

Rechazo automático. Ninguno de los crops requeridos corrige la rotulación generada ni la discrepancia narrativa.

## 5. Por qué una edición menor no es suficiente

El defecto aparece en varias superficies físicas y no en una única etiqueta aislada: carpeta protagonista, separadores, hojas y archivadores. Ocultarlo exigiría repintar contenido de primer plano con perspectiva, textura de papel, sombras, manos y bordes superpuestos. Esa intervención alteraría materialmente la escena y equivaldría a una reconstrucción visual, no a una corrección menor. Además, el crop no ofrece una salida segura porque el rótulo principal ocupa la zona central en 4:5 y 1:1.

Los pesos elevados son un riesgo adicional, pero no se propone compresión: un asset descartado no debe optimizarse ni integrarse. La acción correcta es regenerar una escena nueva sin texto ni pseudo-texto.

## 6. Decisión

EduPay V9 y V10 rechazadas; regenerar

