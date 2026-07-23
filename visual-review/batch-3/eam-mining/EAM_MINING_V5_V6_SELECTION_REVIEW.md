# BaseLogic EAM — Selección y QA visual EAM Minería V5–V6

Fecha de revisión: 2026-07-22
Alcance: reconciliación Git, QA técnica y visual de V5/V6, visor responsive y referencias Home/Booking/EAM.
Estado de integración: sin integración; los WebP permanecen exclusivamente en `visual-review/`.

## 1. Resumen ejecutivo y decisión

V5 y V6 son reemplazos locales posteriores al push de `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`; no son los mismos binarios preservados en ese commit. Los dos nuevos archivos sí resuelven el problema principal de V1–V4: son WebP fotográficos, detallados, íntegros y visualmente mucho más creíbles. Sin embargo, ninguna variante puede aprobarse bajo las reglas expresas de este lote.

- **V5** activa descarte automático por logo Toyota reconocible y patente visible/pseudo-legible en la camioneta roja. También muestra caracteres o pseudo-texto en el neumático, carece de segregación operacional inequívoca y comunica EAM de forma secundaria.
- **V6** activa descarte automático por el texto legible `MAINTENANCE`, pseudo-texto protagonista en la tablet y la pauta, y distintivos/texto en casco y uniforme. Además, la segregación/LOTO no es visible, existen herramientas y una manguera en la zona de circulación, y el crop 4:5 no puede conservar a la vez tablet, técnico y contexto de supervisión.

Aunque V5 obtiene el mejor puntaje relativo y es la dirección comercial más fuerte para minería de alto tonelaje, aprobar “la menos mala” contradiría las reglas de descarte automático. Ambas deben regenerarse; V5 debe usarse como referencia de composición, escala y contexto, no como asset integrable.

## 2. Estado Git y reconciliación temporal

Después de `git fetch origin --prune`:

- `HEAD`: `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`
- `origin/master`: `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`
- rama: `master`, sincronizada con `origin/master`
- último commit: `f0aed1a chore: archive EAM mining visual exploration`
- fecha del commit: `2026-07-22T01:20:41-04:00`

Antes de esta auditoría, `git status --short` mostraba cuatro cambios locales no staged:

```text
 M visual-review/batch-3/eam-mining/EAM_MINING_VISUAL_REVIEW.md
 M visual-review/batch-3/eam-mining/eam-mining-hero-v5.webp
 M visual-review/batch-3/eam-mining/eam-mining-hero-v6.webp
 M visual-review/batch-3/eam-mining/review.html
```

`STATUS.md` era idéntico al commit. Los tiempos de modificación locales de V5/V6 (`01:27:28`), `review.html` (`01:27:57`) y `EAM_MINING_VISUAL_REVIEW.md` (`01:28:29`) son posteriores al commit (`01:20:41`). Los hashes y tamaños también cambiaron. La evidencia conjunta descarta que solo se haya recibido tardíamente el reporte de una generación ya incluida: **V5 y V6 fueron reemplazadas/modificadas después del push**, y el visor y reporte se actualizaron después para describir esos nuevos binarios.

La salida de `git show --stat f0aed1a` confirma que el commit ya contenía versiones anteriores de V5 (248.486 bytes), V6 (278.632 bytes), el visor y el reporte de dirección visual. No se alteró ningún archivo durante la fase de comparación.

## 3. Hashes actuales versus commit `f0aed1a`

| Archivo | Actual: SHA-256 | Actual: bytes | Commit: SHA-256 | Commit: bytes | Resultado |
|---|---|---:|---|---:|---|
| `eam-mining-hero-v5.webp` | `e0755b4f21a35708f5a4aec70be7a54987cb9dc1f73b65a679a0dca918c6fb87` | 421.724 | `73a149e8a388a3d9b8856ccb9fa8d470e06eaf6db974f04a1eff53f24ed3b4c5` | 248.486 | **modificada después del push** |
| `eam-mining-hero-v6.webp` | `914205748256d6a08ad5789febab03890bff54f6bcb965ff03a1692d2010a383` | 449.856 | `f4c16df25772c76e1af613fa1632bfc53e2d88e5f1776f47df3780470a16f94b` | 278.632 | **modificada después del push** |
| `review.html` | `b3f43a63fe069c925151002e9b8eb457701ccf631356c68ec8c405a247fb9332` | 16.580 | `a8a47d391f841040080c466a52101bdbe33c5a84b49eaa7602eb58b6a3696492` | 16.547 | **modificado después del push** |
| `EAM_MINING_VISUAL_REVIEW.md` | `8d3c37e79b8e0b7b5ece80f283d1b59d648c587b61f7256bf87f2b616209cd01` | 10.790 | `db2c7ea2861020440f81d5a0cc0500ad08bc0ef03b07f422fdc2e996f6db551a` | 8.585 | **modificado después del push** |
| `STATUS.md` (antes de esta auditoría) | `e4ebe02466e53507dbeeb3eb9be59af8e15688d006d0acdbd1eeda7b6deda0ea` | 2.900 | `e4ebe02466e53507dbeeb3eb9be59af8e15688d006d0acdbd1eeda7b6deda0ea` | 2.900 | **idéntico a la versión commiteada** |

Dimensiones de los binarios actuales y commiteados: V5 y V6 son 1920×1200 en ambos estados. Por tanto, no hubo cambio nominal de formato o lienzo; hubo reemplazo real del contenido comprimido.

## 4. Verificación técnica de los WebP actuales

| Control | V5 | V6 |
|---|---|---|
| Formato real | `RIFF / WEBP / VP8` lossy | `RIFF / WEBP / VP8` lossy |
| Dimensiones | 1920×1200 | 1920×1200 |
| Ratio | 1,6000; 8:5 equivalente a 16:10 | 1,6000; 8:5 equivalente a 16:10 |
| Modo decodificado | RGB, sin alpha | RGB, sin alpha |
| Almacenamiento reportado por FFmpeg | YUV 4:2:0 | YUV 4:2:0 |
| Peso exacto | 421.724 bytes; 411,839844 KiB | 449.856 bytes; 439,312500 KiB |
| RIFF declarado / físico | 421.724 / 421.724; coincide | 449.856 / 449.856; coincide |
| Chunks | un chunk `VP8 ` de 421.704 bytes | un chunk `VP8 ` de 449.836 bytes |
| Cuadros | 1; no animado | 1; no animado |
| Decodificación completa | correcta | correcta |
| Metadatos | sin ICC, EXIF ni XMP | sin ICC, EXIF ni XMP |
| Corrupción/truncamiento | no detectados | no detectados |

La carga completa, la verificación del decodificador, el recorrido de chunks y el tamaño RIFF terminan exactamente en EOF. Ambos archivos son WebP reales y no presentan corrupción.

### Detalle, posterización y compresión

La inspección a resolución nativa (100%) y ampliada (200%) conserva detalle real en polvo, desgaste, pintura, neumáticos/orugas, mangueras, ropa, piel y herramientas. A 200% no aparecen nuevos detalles —como es normal—, pero sí se mantienen bordes y microtextura suficientemente continuos para una fotografía web de 1920×1200.

| Indicador | V5 | V6 | Lectura |
|---|---:|---:|---|
| Entropía de luminancia | 7,8852 bits | 7,8063 bits | complejidad fotográfica alta; superior al EAM público (7,6343) |
| Vecinos idénticos horizontales | 22,08% | 19,05% | abundante detalle, no grandes campos planos |
| Vecinos idénticos verticales | 20,70% | 19,22% | abundante detalle, no ilustración plana |
| Niveles de luminancia usados | 256/256 | 256/256 | sin posterización global medible |
| Relación de borde de bloque 16 px H/V | 1,095 / 1,048 | 1,034 / 1,035 | no hay macrobloqueo destructivo dominante |

No se observa posterización relevante ni compresión destructiva. Hay un acabado algo sobreenfocado y microtextura típica de imagen sintética en algunos bordes y superficies, más perceptible al 200%, pero el motivo de rechazo no es la compresión.

### Texturas por material

| Material | V5 | V6 |
|---|---|---|
| Metal/pintura | desgaste, polvo y corrosión superficial creíbles | desgaste, aceite/polvo y pintura creíbles; panel abierto algo ambiguo |
| Neumáticos/orugas | tacos, polvo y deformación por carga convincentes; lettering problemático | placas y suciedad detalladas; geometría inferior/localmente ambigua |
| Hidráulica | suspensión y componentes visibles con buen detalle | cilindros, pasadores y mangueras abundantes; routing plausible pero recargado |
| Suelo | patio árido con polvo y huellas creíbles | hormigón de taller creíble, pero desordenado y con riesgo de tropiezo |
| EPP | tela, reflectantes, guantes, casco y botas con textura real | tela, reflectantes, guantes, cascos y botas con textura real |
| Piel/anatomía | rostro de perfil y proporciones plausibles | rostros, postura y extremidades plausibles en general |
| Herramientas | carro, envases y útiles creíbles | llaves, linterna, carro y manguera creíbles, aunque excesivamente dispersos |

## 5. Tabla de puntuaciones

Escala: 1 = no cumple; 3 = parcial; 5 = excelente. Máximo 85. Los descartes automáticos prevalecen sobre el total.

| # | Criterio | V5 | V6 |
|---:|---|:---:|:---:|
| 1 | Coherencia BaseLogic | 3 | 3 |
| 2 | Pragmatismo Iluminado — Minería | 4 | 3 |
| 3 | Fotorealismo | 4 | 4 |
| 4 | Calidad editorial | 3 | 3 |
| 5 | Calidad técnica | 4 | 4 |
| 6 | Credibilidad mecánica | 4 | 3 |
| 7 | Credibilidad minera chilena | 4 | 3 |
| 8 | Seguridad operacional | 3 | 2 |
| 9 | EPP | 3 | 3 |
| 10 | Anatomía | 4 | 4 |
| 11 | Claridad EAM | 2 | 4 |
| 12 | Tecnología integrada | 4 | 3 |
| 13 | Ausencia de look publicitario de fabricante | 1 | 2 |
| 14 | Composición desktop 16:10 | 4 | 4 |
| 15 | Crop mobile 4:5 | 3 | 1 |
| 16 | Crop 1:1 | 4 | 3 |
| 17 | Coherencia con el resto del sitio | 3 | 3 |
|  | **Total / 85** | **57** | **52** |

## 6. Análisis completo de V5 — CAEX

### Maquinaria y mecánica

El CAEX es inmediatamente reconocible, de escala correcta frente al mantenedor y la pickup. Tolva, cabina, plataforma, barandas, escaleras, chasis y suspensión forman un conjunto mayormente coherente. En esta vista se percibe un neumático delantero y el conjunto trasero doble del lado visible; los neumáticos mantienen volumen, dibujo y apoyo razonables, sin deformaciones graves. El cubo intervenido, la suspensión y los bajos poseen detalle mecánico suficiente.

La máquina ocupa casi todo el lienzo y la parte superior de la tolva se aproxima mucho al borde; esto da impacto, pero limita el aire editorial. No se detecta logo CAT, Caterpillar, Komatsu ni número de modelo en el CAEX. La camioneta, en cambio, muestra de forma inequívoca el emblema Toyota y una patente visible/pseudo-legible, suficientes para descarte automático.

### Acción EAM y tecnología

El mantenedor está realmente frente al cubo de rueda y realiza una inspección manual comprensible. La postura de pie es estable y la acción se relaciona con un componente concreto. La tablet está físicamente montada sobre un pedestal asociado al carro; no flota y su UI se limita a bloques cian/navy sin texto protagonista.

La debilidad estratégica es que el técnico no interactúa con la tablet y no se ve una orden, lectura o identificación que vincule el cubo con el historial del activo. La relación EAM se infiere por proximidad, no por una secuencia observable de inspección–registro–control.

### Contexto minero chileno

El patio árido, la escala del CAEX, la cordillera seca, el polvo y la pickup roja comunican Atacama/minería de alto tonelaje con mucha más fuerza que V1–V4. La pickup tiene baliza. La bandera de alta visibilidad aparece en el extremo derecho, pero su unión física con la pértiga/pickup no es inequívoca. Tampoco existe una zona segregada claramente demarcada con conos, barreras o líneas de exclusión.

### Seguridad, EPP y anatomía

El mantenedor usa casco, chaleco de alta visibilidad, guantes, ropa reflectante y botas. No se distinguen antiparras, y no se ve bloqueo, tarjeta LOTO ni calzo/inmovilización. La máquina aparenta estar detenida y nadie está bajo una carga suspendida. La postura y anatomía son plausibles; las manos están parcialmente ocultas por guantes y cubo, sin anomalía severa demostrable.

El carro es estable y razonablemente ordenado. Un cable/manguera queda en el suelo en el extremo derecho, pero fuera del paso inmediato del técnico. El riesgo visual principal sigue siendo la falta de evidencia de aislamiento y segregación, no una acción manifiestamente temeraria.

### Riesgos específicos V5

- descarte automático por logo Toyota;
- descarte automático por patente visible/pseudo-legible;
- lettering/pseudo-texto en el flanco del neumático;
- EAM demasiado secundario frente al impacto del CAEX;
- bandera/pértiga y segregación poco claras;
- sin evidencia visible de LOTO, calzos o control de energías;
- encuadre muy lleno y menos sereno que las referencias BaseLogic.

## 7. Análisis completo de V6 — Excavadora

### Maquinaria y mecánica

La excavadora es reconocible y casi completa: cabina, contrapeso/cuerpo posterior, boom, brazo, cilindros, pasadores, articulaciones, mangueras y tren de rodaje están representados. El implemento del extremo izquierdo queda muy próximo al borde. La mayor parte de las uniones hidráulicas es plausible, aunque el routing resulta recargado y algunos empalmes tienen microgeometría sintética.

Las orugas poseen placas, rodillos y suciedad, pero el tren inferior cercano presenta una lectura espacial menos limpia que V5. El compartimiento abierto junto a los trabajadores parece plausible como acceso de servicio, aunque su unión con la superestructura se percibe ambigua y por momentos parece un gabinete independiente adosado. No se detecta logo CAT, Caterpillar o Komatsu ni modelo reconocible, pero la palabra `MAINTENANCE` está impresa de forma protagonista en la máquina.

### Acción EAM y tecnología

V6 comunica mantenimiento preventivo de forma más directa. El técnico arrodillado usa linterna y llave sobre un compartimiento; el supervisor revisa una pauta. La tablet está apoyada/montada sobre el carro y la escena permite inferir orden de trabajo, inspección e historial de activo.

La tablet es demasiado protagonista respecto de la pauta de “tecnología secundaria” y contiene etiquetas/pseudo-texto reconocible. El papel también presenta contenido gráfico y pseudo-textual visible. Por ello, la mejor claridad EAM del lote se obtiene incumpliendo una regla crítica de contenido.

### Contexto minero chileno

El taller y el CAEX desenfocado del fondo sostienen la lectura minera. Sin ese segundo equipo, la escena podría ser un taller industrial o de construcción pesada genérico. Los parches de bandera chilena refuerzan ubicación, pero contradicen el requisito de no usar banderas/marcas en EPP y no sustituyen señales ambientales de Atacama.

### Seguridad, EPP y anatomía

La excavadora aparenta estar detenida y nadie está bajo un componente suspendido. No se observan calzos, aislamiento, candados o tarjetas LOTO. El área de trabajo tiene numerosas herramientas sueltas y una manguera atravesando la zona de circulación y el perímetro de los trabajadores. El técnico trabaja de rodillas sin protección visible y ambos trabajadores carecen de antiparras perceptibles. Esto reduce la credibilidad de una intervención minera controlada.

Casco, alta visibilidad, guantes, ropa reflectante y botas están presentes. Sin embargo, cascos y mangas contienen bandera, texto o distintivos, activando la regla de descarte de marcas en EPP. Anatomía y rostros son mayormente plausibles; no se observan dedos adicionales inequívocos. La mano del técnico que ilumina el compartimiento está parcialmente oculta y no debe usarse como evidencia positiva concluyente.

### Riesgos específicos V6

- descarte automático por texto legible `MAINTENANCE`;
- descarte automático por pseudo-texto en tablet y pauta;
- descarte automático por distintivos/texto/banderas en casco y uniforme;
- tablet sobredimensionada y protagonista;
- herramientas y manguera generan desorden y riesgo de tropiezo;
- sin evidencia visible de LOTO/aislamiento;
- compartimiento y tren inferior con ambigüedad mecánica localizada;
- contexto menos inequívocamente Atacama/minería que V5;
- el crop 4:5 no puede conservar todos los actores EAM requeridos.

## 8. Texto, logos y artefactos de IA

| Área inspeccionada | V5 | V6 |
|---|---|---|
| Tablet | bloques abstractos, sin texto legible protagonista; montaje plausible | etiquetas/pseudo-texto visibles; demasiado grande; descarte |
| Pauta | no hay documento protagonista | papel con grilla/dibujo y pseudo-texto visible; descarte |
| Carro de herramientas | creíble, ordenado; sin objeto flotante | creíble, pero muy cargado y con herramientas dispersas |
| Uniforme/casco | sin marca evidente; casco con bandas | banderas/distintivos y pequeños rótulos; descarte |
| Cabina/máquina | sin logo/modelo detectado | `MAINTENANCE` legible; descarte |
| Neumáticos/orugas | lettering/pseudo-texto en flanco; geometría buena | sin marca inequívoca; microgeometría irregular localizada |
| Camioneta | emblema Toyota y patente visible; descarte | no es protagonista/visible |
| Manos/rostros | plausibles, parcialmente ocultos | plausibles en general; sin dedos extra inequívocos |
| Objetos flotantes | no detectados; bandera/pértiga con unión poco clara | no detectados |

No se detectan logos CAT, Caterpillar o Komatsu, pero la regla no se limita a esas marcas: V5 falla por Toyota/patente y V6 por texto y distintivos.

## 9. Resultados de crops y visor

`review.html` es un visor estático válido: usa `object-fit: contain` para el original y `object-fit: cover; object-position: 50% 50%` para 4:5 y 1:1. Las rutas de V5/V6, dimensiones y pesos mostrados coinciden con los archivos actuales. No se encontró defecto objetivo de HTML o representación, por lo que no se modificó.

El navegador integrado bloqueó la apertura de la ruta local `file://` por política. La validación se realizó sobre el HTML/CSS y los originales completos a resolución nativa. Como el visor usa un recorte geométrico estándar, los límites visibles se pueden determinar exactamente: un crop 4:5 sobre 1920×1200 conserva 960 px de ancho y un crop 1:1 conserva 1200 px.

| Variante | Desktop 16:10 | Crop 4:5 | Crop 1:1 |
|---|---|---|---|
| V5 | conserva CAEX, mantenedor, pickup y estación; composición fuerte | centrado pierde pickup y tablet; desplazado a la derecha conserva rueda/CAEX, mantenedor, tablet y parte de pickup | con leve desplazamiento derecho conserva CAEX, mantenedor, tablet y contexto suficiente |
| V6 | conserva excavadora, tablet, técnico y supervisor; lectura EAM clara | no existe una ventana de 960 px que muestre de forma suficiente la tablet izquierda y el grupo humano derecho; falla el requisito | puede conservar gran parte de tablet, excavadora y técnico, pero recorta supervisor y extremos de la máquina |

### `object-position` recomendado para QA

Estos valores son recomendaciones de encuadre, no autorización de integración:

| Variante | Desktop 16:10 | Mobile 4:5 | Card 1:1 | Resultado |
|---|---|---|---|---|
| V5 | `50% 50%` | `75% 50%` | `65% 50%` | mejor equilibrio entre escala CAEX, mantenedor, tablet y pickup; aun así la imagen está rechazada |
| V6 | `50% 50%` | `52% 50%` | `46% 50%` | compromiso menos malo; mobile sigue sin conservar tablet y técnicos de forma suficiente |

## 10. Comparación comercial y estratégica

### V5

Es la imagen que comunica “minería de alto tonelaje” de forma instantánea. Su CAEX dominante, patio árido y pickup roja tienen alto valor para contratistas de flota, movimiento de tierra y mantenimiento. La escala genera una promesa comercial clara: BaseLogic entiende activos críticos grandes y costosos.

El riesgo se cumple: la imagen vende minería antes que software. La tablet es secundaria y la trazabilidad no está demostrada. Incluso sin los descartes de marca/patente, sería necesario asegurar que el copy y la interfaz web expliquen EAM con claridad.

### V6

La acción de mantenimiento, la pauta, el técnico y la tablet comunican orden de trabajo e historial del activo de forma más directa. Es mejor semánticamente para EAM.

Su riesgo también se cumple: el taller puede leerse como mantenimiento industrial genérico y el contexto minero depende del equipo del fondo y de distintivos que no deberían estar presentes. La composición además es demasiado ancha para mobile y el dispositivo adquiere una presencia publicitaria.

### Elección estratégica

Si se comparara solo dirección futura, **V5 es la base más valiosa**: foco minero 5/5, credibilidad comercial alta y mejor compatibilidad de crop con un ajuste a la derecha. V6 tiene mejor claridad de mantenimiento/trazabilidad, pero menor fuerza minera, menor seguridad y peor integración responsive. La siguiente generación debería conservar la composición y escala de V5 e incorporar una acción EAM tan explícita como la intención de V6, sin texto, marcas ni patentes.

## 11. Descartes automáticos

| Variante | Activadores confirmados | Dictamen |
|---|---|---|
| V5 | logo Toyota; patente visible/pseudo-legible; lettering/pseudo-texto en neumático | rechazo automático |
| V6 | `MAINTENANCE` legible; pseudo-texto de tablet y pauta; distintivos/texto/banderas en EPP | rechazo automático |

No se confirman manos deformes, dedos adicionales, maquinaria completamente fusionada, herramientas imposibles u objetos flotantes como causa principal. Tampoco se confirman logos CAT/Komatsu/modelos. Esas ausencias no compensan los activadores anteriores.

## 12. Necesidad de optimización de peso

Los pesos informados son exactos. V5 (411,84 KiB) y V6 (439,31 KiB) son razonables para originales fotográficos de QA a 1920×1200 y no muestran compresión destructiva. Superan, sin embargo, un presupuesto web conservador de 350 KiB por hero.

No corresponde recomprimir estos binarios porque están rechazados. La próxima variante aprobable debería exportarse después del QA visual con objetivo aproximado de 280–350 KiB, comparando SSIM/inspección visual y preservando textura de neumáticos, metal, EPP y piel. La optimización debe ocurrir solo sobre el final seleccionado, nunca como intento de salvar estos descartes.

## 13. Próximo paso recomendado

Regenerar un micro-batch corto basado en V5:

1. conservar CAEX completo, escala, patio Atacama y mantenedor inspeccionando un componente;
2. usar pickup roja totalmente genérica, sin emblema, parrilla identificable, patente ni texto;
3. montar tablet más cerca del técnico, con bloques abstractos sin caracteres;
4. mostrar una relación observable entre identificación del componente, orden de trabajo y registro;
5. incluir calzos/aislamiento/LOTO y zona segregada sin convertirlos en señalética textual;
6. mantener antiparras, guantes, casco y ropa sin parches, banderas o contratistas;
7. componer desde origen para una ventana 4:5 ubicada aproximadamente al 70–75% horizontal;
8. repetir QA de marcas, texto, anatomía, mecánica y seguridad antes de optimizar peso.

No copiar a `public`, no modificar `visualAssets.ts`, no integrar y no versionar hasta contar con una variante sin activadores de descarte.

## 14. Decisión final

Ninguna variante EAM Minería aprueba; regenerar
