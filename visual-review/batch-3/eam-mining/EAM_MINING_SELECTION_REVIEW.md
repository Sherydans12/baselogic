# BaseLogic EAM — Selección y QA visual del micro-batch Minería Chilena

Fecha de revisión: 2026-07-21

Alcance: V1–V4, visor responsive, referencias Home/Booking/EAM actual.
Estado de integración: sin cambios; `public/images/generated/products/eam-hero.webp` permanece intacto.

## 1. Resumen ejecutivo

Ninguna variante alcanza el estándar exigido. Los cuatro archivos son WebP íntegros de 1920×1200, pero su contenido no es fotografía editorial: son ilustraciones planas muy simplificadas, construidas con grandes campos de color, siluetas geométricas y personajes sin anatomía completa. Las dimensiones nominales no se traducen en detalle visual real.

El peso anormalmente bajo queda explicado por esa baja complejidad, no por una optimización fotográfica excepcional. En V1–V4, entre 88,75% y 96,82% de los píxeles vecinos son exactamente iguales según el eje medido; la entropía de luminancia es 3,74–4,17 bits. En las referencias fotográficas de BaseLogic la entropía es 7,34–7,64 bits y la igualdad entre píxeles vecinos cae aproximadamente a 39,84%–53,59%.

V2 es la menos débil como esquema de composición y V4 comunica mejor la idea abstracta de intervención sobre un componente. Ninguna es una candidata utilizable: todas activan descarte automático por apariencia de ilustración/CGI, falta de detalle fotográfico, maquinaria no validable o físicamente incompleta y anatomía humana esquemática. V3 suma una pantalla sin apoyo visible y pérdida casi total de la perforadora en el crop 4:5. V4 suma una maniobra de izaje sin aparejo, gancho, eslingas ni estabilizadores visibles.

## 2. Verificación técnica

Los cuatro archivos fueron abiertos, verificados y decodificados completamente. El tamaño declarado por el contenedor RIFF coincide exactamente con el tamaño físico de cada archivo; no se detectaron truncamiento, corrupción ni cuadros incompletos.

| Variante | Firma y codec | Dimensiones | Ratio real | Modo | Bytes exactos | KiB reales | Integridad |
|---|---|---:|---:|---|---:|---:|---|
| V1 | `RIFF / WEBP / VP8` lossy | 1920×1200 | 1,6000 (16:10) | RGB, sin ICC | 20.848 | 20,359375 (20,36) | Correcta; RIFF=20.848; 1 frame |
| V2 | `RIFF / WEBP / VP8` lossy | 1920×1200 | 1,6000 (16:10) | RGB, sin ICC | 21.486 | 20,982422 (20,98) | Correcta; RIFF=21.486; 1 frame |
| V3 | `RIFF / WEBP / VP8` lossy | 1920×1200 | 1,6000 (16:10) | RGB, sin ICC | 18.688 | 18,250000 (18,25) | Correcta; RIFF=18.688; 1 frame |
| V4 | `RIFF / WEBP / VP8` lossy | 1920×1200 | 1,6000 (16:10) | RGB, sin ICC | 17.908 | 17,488281 (17,49) | Correcta; RIFF=17.908; 1 frame |

No contienen EXIF, XMP ni perfil ICC embebido. No son animados. El modo RGB es compatible con uso web, aunque al no existir perfil embebido la interpretación efectiva depende de la convención sRGB del navegador.

Hashes SHA-256 revisados:

- V1: `6089de3d6979941a4193bcb5b86fd0c3966bc9daaf1c1b6cb2e819f6f4866c5c`
- V2: `135a1d66546ab38fc81f9f1a99f95ffce09ee3a487e93052350fb01f278bec92`
- V3: `926af87605cc07e025c4e5fb1d3325fb86180d4670fe8d6c1f531e215027dbcc`
- V4: `15750b3f6eb9c1c27651007b1d5207bd5cd5766223253f7d7ac518a3b2ea8a19`

## 3. Evaluación de calidad por peso y resolución

La inspección directa a 100% y 200% confirma que la resolución aparente es muy inferior a la esperada para una fotografía editorial 1920×1200:

- No hay textura de suelo, roca, polvo, metal, neumáticos, pintura, ropa, piel ni cielo fotográfico.
- La maquinaria está representada por rectángulos, círculos y líneas; ampliar no revela componentes adicionales.
- Las personas no tienen manos, dedos, brazos ni facciones que puedan evaluarse.
- Los cielos son gradientes sintéticos con transiciones tonales muy simples; no se observan nubes, grano ni variación atmosférica.
- A 200% aparecen bordes rasterizados y leve ringing/aliasing del WebP lossy en diagonales y contrastes. No se observaron macrobloques severos en los campos planos.
- No se detectó visualmente una retícula inequívoca de reescalado nearest-neighbor desde una fuente pequeña. Sin la fuente original no es posible certificar el historial de escalado. Esto no salva los assets: el detalle real es bajo porque el contenido de partida es una ilustración mínima.

| Indicador | V1 | V2 | V3 | V4 | Referencias fotográficas BaseLogic |
|---|---:|---:|---:|---:|---:|
| Entropía de luminancia (bits) | 3,9737 | 4,1697 | 3,7421 | 3,9727 | 7,3425–7,6404 |
| Vecinos idénticos horizontales | 96,55% | 96,24% | 96,82% | 96,80% | 42,73%–51,19% |
| Vecinos idénticos verticales | 91,12% | 88,75% | 90,99% | 90,56% | 39,84%–53,59% |

Conclusión técnica: los pesos sí son reales, pero corresponden a gráficos planos altamente compresibles. No demuestran una fotografía bien optimizada. La calidad es insuficiente para el uso propuesto.

## 4. Tabla de puntuaciones V1–V4

Escala: 1 = no cumple; 3 = parcial; 5 = excelente. El puntaje no reemplaza las reglas de descarte automático.

| # | Criterio | V1 | V2 | V3 | V4 |
|---:|---|:---:|:---:|:---:|:---:|
| 1 | Coherencia con BaseLogic | 1 | 1 | 1 | 1 |
| 2 | Coherencia con “Pragmatismo Iluminado — Minería” | 1 | 1 | 1 | 1 |
| 3 | Calidad editorial | 1 | 1 | 1 | 1 |
| 4 | Fotorealismo | 1 | 1 | 1 | 1 |
| 5 | Calidad técnica de imagen | 1 | 1 | 1 | 1 |
| 6 | Claridad del concepto EAM | 2 | 2 | 1 | 2 |
| 7 | Claridad del contexto minero chileno | 2 | 2 | 2 | 2 |
| 8 | Representación de empresa contratista | 1 | 2 | 1 | 1 |
| 9 | Representación de mantenimiento y activos | 2 | 2 | 1 | 3 |
| 10 | Tecnología secundaria y creíble | 2 | 2 | 1 | 2 |
| 11 | Ausencia de apariencia CGI/3D | 1 | 1 | 1 | 1 |
| 12 | Composición desktop | 3 | 3 | 2 | 3 |
| 13 | Crop mobile 4:5 | 2 | 3 | 1 | 3 |
| 14 | Crop cuadrado 1:1 | 3 | 3 | 2 | 3 |
| 15 | Coherencia con Home, Booking y EAM actual | 1 | 1 | 1 | 1 |
|  | **Total / 75** | **24** | **26** | **18** | **26** |

## 5. Problemas específicos por variante

### V1 — Alto tonelaje y control de flota

- El supuesto CAEX es una caja sobre dos círculos; carece de tolva, cabina, chasis y neumáticos de escala minera.
- La excavadora se reduce a una línea quebrada y un rectángulo, sin cuerpo, giro, tren de rodaje ni unión física del cucharón.
- La camioneta roja conserva baliza y pértiga, pero su carrocería es un bloque sin configuración creíble de pickup de faena.
- La pantalla está apoyada en un poste y usa bloques abstractos sin texto; es el elemento mejor resuelto, aunque parece señalética más que tablet rugerizada.
- En 4:5 sobrevive camioneta/pantalla/persona, pero se pierde el CAEX y queda solo parte de la excavadora; “control de flota de alto tonelaje” deja de ser claro.

### V2 — Contratista de movimiento de tierra

- La alineación de excavadora, bulldozer y motoniveladora no existe como maquinaria reconocible; son bloques sin ruedas, orugas, cabinas ni implementos.
- El elemento de excavación de la derecha vuelve a ser un brazo y balde sin máquina portadora.
- La mesa soporta la pantalla, pero el dispositivo es demasiado grande y no existe interacción humana con él.
- Es la composición central más ordenada y la que mejor conserva camioneta, pantalla y persona en los crops. Esa ventaja no compensa la falta total de realismo.

### V3 — Perforación

- La “perforadora” es un mástil vertical insertado en un bloque, sin orugas, estabilizadores, cabeza rotatoria, mangueras, tubería ni sistema de nivelación.
- La perforación aparente es físicamente incompleta y no permite inferir operación segura.
- La pantalla no tiene soporte, mesa, pedestal ni vínculo con la camioneta: aparece suspendida.
- El crop 4:5 centrado elimina casi toda la perforadora; el concepto de drilling desaparece.
- Es la variante con menor puntaje y el descarte responsive más claro.

### V4 — Izaje y mantenimiento

- La grúa no es una grúa móvil: carece de camión portador, cabina, contrapeso, estabilizadores y telescopaje reconocible.
- La carga cuelga de una línea simple sin bloque de gancho, eslingas, grilletes, balancín ni puntos de izaje.
- La carga no se identifica como motor o componente de alto tonelaje; es un rectángulo marrón.
- La idea de intervención de componente es legible a nivel de pictograma y sobrevive en los crops, pero la operación representada no es aceptable como comunicación de seguridad minera.

## 6. Validación de maquinaria

No es posible aprobar proporciones, física ni funcionamiento aparente en ninguna variante. Los elementos no alcanzan el nivel mínimo de maquinaria esquemática técnicamente coherente:

- V1: CAEX sin tolva/cabina y excavadora desconectada.
- V2: equipos de movimiento de tierra indistinguibles y sin sistemas de rodadura.
- V3: perforadora sin carrier ni subsistemas funcionales.
- V4: grúa sin portador ni estabilizadores, con carga sin aparejo.

No se detectaron logos CAT, Caterpillar o Komatsu, textos comerciales, nombres de modelo ni libreas de marca. La ausencia de marca cumple, pero no compensa la imposibilidad mecánica.

## 7. Validación de minería chilena

Las cuatro imágenes usan paleta desértica, montañas, suelo ocre, baliza y bandera de seguridad. Esos signos permiten inferir “minería” de forma genérica, pero no una faena convincente del norte de Chile:

- No hay bancos, bermas, rampas, caminos de acarreo, segregación operacional ni escala de rajo abierto.
- No existe atmósfera, polvo controlado, roca, geología o infraestructura que diferencie Atacama de una cantera genérica.
- No se ve operación real de contratista ni interacción entre activos.
- La camioneta roja no tiene patente ni logo, y sí muestra baliza y pértiga/bandera; aun así, su construcción no es físicamente creíble.

Ninguna parece accidente o catástrofe, pero todas parecen infografía o videojuego 2D, no fotografía editorial minera.

## 8. Validación de seguridad operacional

| Variante | Observación | Resultado |
|---|---|---|
| V1 | Persona separada de los equipos, sin colisión visible; la maquinaria es demasiado abstracta para validar radios o trayectoria. | No verificable; no aprobable |
| V2 | Persona junto a mesa en primer plano; equipos al fondo. No hay demarcación ni segregación real. | No verificable; no aprobable |
| V3 | Persona separada del mástil, pero la perforadora carece de configuración funcional y la operación no puede evaluarse. | No verificable; no aprobable |
| V4 | Persona no está directamente bajo la carga, pero el izaje carece de estabilizadores, gancho y aparejo visible. | Falla evidente; descarte automático |

La simplificación elimina información operacional esencial. Una imagen de seguridad minera no puede apoyarse en la ausencia de detalle para asumir que la práctica es segura.

## 9. Validación de EPP

Todas las figuras muestran casco amarillo y prenda de alta visibilidad con bandas claras. No se pueden validar lentes, guantes, calzado, protección auditiva ni ajuste del EPP porque las personas son pictogramas. El rostro es un óvalo sin facciones; no hay brazos, manos ni dedos. Por ello el EPP es una convención gráfica, no evidencia visual creíble de cumplimiento.

## 10. Validación de tecnología EAM

- V1: pantalla sobre pedestal; UI abstracta sin texto ni números. Relación con flota solo por proximidad.
- V2: pantalla sobre mesa; UI abstracta correcta, pero decorativa y sin interacción.
- V3: pantalla suspendida sin apoyo visible; activa descarte automático por incoherencia física.
- V4: pantalla sobre mesa; UI abstracta correcta, pero sin relación trazable con la carga o el procedimiento de izaje.

No hay logos, texto legible, números ni hologramas. Sin embargo, ninguna escena comunica inspección, orden de trabajo, trazabilidad o mantenimiento mediante una acción observable. La tecnología funciona como símbolo genérico de dashboard.

## 11. Anatomía y personas

Las cuatro personas son figuras geométricas sin brazos, manos, dedos, rasgos faciales ni postura de trabajo. No hay manos fusionadas o dedos extra porque esos elementos directamente no están representados. Esta omisión constituye anatomía insuficiente para una fotografía editorial y activa el descarte por apariencia de ilustración. Ninguna persona mira a cámara ni adopta una sonrisa publicitaria, pero tampoco interactúa físicamente con el dispositivo o el activo.

## 12. Resultado desktop, 4:5 y 1:1

El visor carga las ocho simulaciones de crop sin error, usa imágenes naturales de 1920×1200 y aplica `object-fit: cover` con `object-position: 50% 50%`. A 1600 px presenta dos tarjetas por fila. A 390 px no presenta overflow horizontal; las tarjetas pasan a una columna. No se detectó un defecto objetivo de representación, por lo que `review.html` no fue modificado.

| Variante | Desktop 16:10 | Mobile 4:5 centrado | Card 1:1 centrado |
|---|---|---|---|
| V1 | Balance legible, pero muy vacío y pictográfico | Conserva camioneta, pantalla y persona; pierde CAEX y recorta excavadora | Conserva más contexto, sin resolver la falta de realismo |
| V2 | Mejor orden central del lote | Conserva el trío central y parte del equipo derecho; pierde maquinaria izquierda | Conserva el concepto esquemático principal |
| V3 | Mástil queda aislado a la izquierda | Pierde casi toda la perforadora; falla el concepto | Recupera parte del mástil, pero sigue débil |
| V4 | Idea de izaje reconocible solo como pictograma | Conserva carga, camioneta, pantalla y persona; recorta base/boom | Conserva la escena central y más grúa |

En el visor móvil de 390 px, los dos previews de crop permanecen lado a lado y miden aproximadamente 128,5 px de ancho. Es suficiente para comprobar encuadre global, no para evaluar detalle; el control de detalle se realizó directamente a 100% y 200%.

## 13. Descartes automáticos

| Variante | Motivos de descarte automático |
|---|---|
| V1 | Apariencia de ilustración/CGI; calidad técnica insuficiente para fotografía; excavadora físicamente incompleta; anatomía humana sin brazos/manos |
| V2 | Apariencia de ilustración/CGI; calidad técnica insuficiente; maquinaria de movimiento de tierra no reconocible; anatomía humana sin brazos/manos |
| V3 | Apariencia de ilustración/CGI; perforadora físicamente imposible/incompleta; pantalla flotante; crop 4:5 pierde el concepto; anatomía insuficiente |
| V4 | Apariencia de ilustración/CGI; grúa físicamente incompleta; carga sin aparejo y sin estabilizadores visibles; anatomía insuficiente |

La regla de ausencia de logos, marcas, patentes o pseudo-texto se cumple en las cuatro.

## 14. Variante recomendada

No se recomienda ninguna variante para integración, edición final ni aprobación. V2 puede usarse únicamente como referencia interna de distribución de elementos, nunca como asset candidato. V4 puede usarse solo como recordatorio del concepto de componente crítico, corrigiendo por completo la operación de izaje en una nueva generación.

## 15. Riesgos de la recomendada

Al no existir variante recomendada, el riesgo relevante es aprobar “la menos mala”. Integrar V2 o V4 degradaría de inmediato la coherencia con Home, Booking y el EAM público, que sí utilizan fotografía. También expondría a BaseLogic a pérdida de credibilidad frente a mandantes y contratistas mineros por maquinaria ficticia, seguridad no demostrable y un EAM reducido a un monitor decorativo.

## 16. `object-position` recomendado

Estos valores son únicamente referencias de encuadre para QA; no vuelven aprobable ninguna imagen y no deben trasladarse a producción.

| Variante | Desktop 16:10 | Mobile 4:5 | Card 1:1 | Motivo |
|---|---|---|---|---|
| V1 | `50% 50%` | `45% 50%` | `50% 50%` | Desplazar mobile a la izquierda para recuperar parte del CAEX sin perder el trío central |
| V2 | `50% 50%` | `48% 50%` | `50% 50%` | Mantener el grupo central y algo más de maquinaria izquierda |
| V3 | `50% 50%` | `43% 50%` | `45% 50%` | Única forma de incluir perforadora, camioneta, pantalla y persona en un mismo crop |
| V4 | `50% 50%` | `47% 50%` | `48% 50%` | Recuperar boom/carga sin expulsar pantalla y persona |

## 17. Regeneración o edición

Las cuatro requieren regeneración completa. Una edición de retoque, reencuadre, upscale o recompression no puede convertir estas ilustraciones en fotografía editorial ni agregar mecánica, EPP, anatomía y seguridad físicamente creíbles.

La nueva generación debe:

- partir de fotografía editorial fotorealista, no de infografía;
- representar un activo principal completo, funcional y coherente;
- mantener la camioneta roja en zona segregada, con baliza y pértiga creíbles;
- mostrar EPP verificable y posición segura;
- montar físicamente una tablet rugerizada con UI abstracta sin texto;
- comunicar una acción EAM observable: inspección, orden de trabajo, trazabilidad, planificación o control del componente;
- reservar una zona segura central que funcione de verdad en 4:5 y 1:1;
- para izaje, incluir portador, estabilizadores, bloque de gancho, eslingas/grilletes y exclusión de personas bajo la carga.

## 18. Decisión final

Ninguna variante EAM Minería aprueba; regenerar
