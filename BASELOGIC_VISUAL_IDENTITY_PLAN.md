# BaseLogic — auditoría visual y plan de assets generados con IA

**Fecha:** 20 de julio de 2026
**Estado:** planificación; sin integración de imágenes ni cambios visibles
**Alcance:** `/`, `/productos`, `/productos/booking`, `/productos/edupay`, `/productos/eam`, `/servicios/paginas-web` y `/servicios/sistemas-para-pymes`

## 1. Resumen ejecutivo

BaseLogic tiene una base visual coherente, clara y comercialmente ordenada. El sistema actual combina tipografía Inter de alto peso, azul y cian de marca, fondos blancos o celestes, superficies redondeadas y una alternancia consistente entre secciones claras y oscuras. No necesita un rediseño estructural para aceptar una capa visual más rica.

La principal brecha es la **falta de evidencia visual concreta**. En las siete rutas auditadas el contenido principal contiene **cero elementos `<img>` o `<picture>`**. La Home compensa parcialmente esta ausencia con un panel abstracto construido con HTML y CSS, pero el resto de las páginas depende casi por completo de titulares, párrafos, botones y matrices de cards. El resultado se siente profesional y limpio, aunque también plano, repetitivo y poco diferenciado entre productos.

La recomendación es una incorporación gradual y controlada:

1. Crear una familia de **siete imágenes hero maestras**: Home, Productos, Booking, EduPay, EAM, Páginas web y Sistemas para pymes.
2. Producir después **seis imágenes secundarias** enfocadas en contexto humano y casos de uso.
3. Derivar de esas piezas los recortes mobile, miniaturas de cards y OG, sin generar una imagen nueva para cada bloque.
4. Mantener FAQ, beneficios simples, pasos de proceso y CTA finales mayormente tipográficos; no todas las secciones necesitan imagen.
5. Integrar los assets mediante `<picture>` o el componente `Picture` de Astro, con dimensiones reservadas, variantes responsive y formatos AVIF/WebP.

La dirección visual propuesta conserva lo ya definido: **70% realista/humano y 30% tecnológico/limpio**, personas presentes pero secundarias, vegetación moderada, ambientes pyme creíbles en Chile y tecnología expresada con interfaces discretas, no con estética futurista genérica.

---

## 2. Diagnóstico visual del sitio actual

### 2.1 Método y evidencia

La auditoría combinó revisión del código Astro, componentes compartidos, datos de contenido, tokens visuales y capturas renderizadas en desktop (1440 × 900) y mobile (390 × 844). Las capturas de trabajo quedaron fuera del repositorio, en:

`C:\Users\nicol\.codex\visualizations\2026\07\20\019f81d1-5aed-7e20-9198-883c68f64379\baselogic-visual-audit\`

| Ruta | Secciones en `main` | Alto aproximado desktop | Imágenes en contenido | Lectura visual actual |
|---|---:|---:|---:|---|
| `/` | 9 | 6.669 px | 0 | Completa y variada, pero extensa y basada en cards |
| `/productos` | 3 | 1.295 px | 0 | Clara, breve y demasiado textual |
| `/productos/booking` | 5 | 1.875 px | 0 | Funcional, con poca identidad propia |
| `/productos/edupay` | 8 | 3.735 px | 0 | Mejor desarrollada, pero repetitiva en grillas |
| `/productos/eam` | 5 | 1.957 px | 0 | El panel oscuro ayuda, aunque sigue siendo abstracta |
| `/servicios/paginas-web` | 9 | 4.239 px | 0 | Ordenada y confiable; muy textual en scroll largo |
| `/servicios/sistemas-para-pymes` | 9 | 4.271 px | 0 | Mensaje sólido; poca evidencia del resultado ofrecido |

> El logo del header sí es una imagen, pero no cuenta como contenido editorial de las páginas.

### 2.2 Fortalezas actuales

- **Consistencia alta:** el lenguaje de bordes, radios, espacios, botones y jerarquías se mantiene entre todas las rutas.
- **Claridad comercial:** los titulares explican el servicio o producto sin depender de una imagen para entender la oferta.
- **Paleta propia reconocible:** el azul eléctrico, el cian y el slate oscuro forman una base tecnológica clara.
- **Buena legibilidad:** hay contraste fuerte, columnas de texto contenidas y CTAs visibles.
- **Arquitectura reutilizable:** `HomeHero`, `ListingHero`, `DetailHero`, `BenefitsList`, `FeatureList` y `ServiceLanding` permiten integrar media con cambios acotados y consistentes.
- **La Home ya demuestra una dirección útil:** el panel oscuro del hero da sensación de producto y estructura sin recurrir a recursos decorativos gratuitos.

### 2.3 Debilidades y zonas demasiado vacías

#### Heroes de páginas interiores

`ListingHero` y `DetailHero` ocupan un contenedor ancho, pero el contenido se limita a una columna de texto. En desktop queda una zona derecha amplia sin función visual. Esta es la oportunidad más clara y de menor riesgo para agregar una imagen sin alterar la narrativa ni el orden comercial.

#### Páginas de Booking y EAM

Después de un hero tipográfico, ambas páginas pasan directamente a una sección de texto más una lista de capacidades. El cambio de fondo aporta jerarquía, pero no muestra el contexto de uso. Booking no se siente todavía como agenda/reservas y EAM se diferencia principalmente por una caja oscura, no por una realidad operacional.

#### Página de productos

La ruta `/productos` explica bien las tres ofertas, pero las cards se distinguen por texto y un cambio de color mínimo. El visitante debe leer bastante antes de percibir la diferencia entre una agenda, una solución educativa y una plataforma industrial.

#### EduPay y servicios

Estas páginas tienen una estructura más completa, aunque repiten varias veces el patrón “título + texto + grilla de cards”. La repetición es limpia, pero genera fatiga visual en scroll largo. Una sola imagen secundaria bien ubicada sería más eficaz que mini-imágenes en cada beneficio.

#### Home

La Home alterna superficies, cards, iconos y una sección oscura, por lo que no se siente vacía. Sin embargo, sus nueve secciones y más de 6.600 px de alto se apoyan casi exclusivamente en abstracciones de interfaz. Falta un momento humano que conecte la tecnología con negocios reales.

### 2.4 ¿El sitio se siente plano, textual o abstracto?

- **Textual:** alto. Toda la propuesta de valor y diferenciación depende de lectura.
- **Plano:** medio. La alternancia de fondos y el panel del hero evitan monotonía total, pero muchas secciones comparten el mismo ritmo.
- **Abstracto:** medio-alto. Se habla de reservas, pagos, activos y procesos, pero casi nunca se ve un ambiente, objeto o situación asociada.
- **Inconsistente:** bajo. El problema no es falta de coherencia, sino exceso de uniformidad entre ofertas distintas.

### 2.5 Preparación de componentes para recibir imágenes

| Componente / zona | Preparación actual | Adaptación futura sugerida | Esfuerzo estimado |
|---|---|---|---|
| `HomeHero` | Ya usa dos columnas y tiene un bloque visual derecho | Aceptar media real o composición híbrida conservando el panel actual como overlay/UI | Bajo |
| `ListingHero` | Texto dentro de un contenedor ancho | Prop opcional `media` y grilla 55/45 en desktop | Bajo-medio |
| `DetailHero` | Texto y CTAs bien resueltos | Prop opcional `media`, ratio reservado y orden copy → CTA → imagen en mobile | Medio |
| Cards de `/productos` | Estructura simple y uniforme | Miniatura superior opcional derivada del hero de cada producto | Bajo |
| `ProductsPreviewSection` | Cards listas para extensión | Miniaturas derivadas, no assets nuevos | Bajo |
| `BenefitsList` / `FeatureList` | Grillas repetitivas | No agregar imagen por card; permitir un único slot editorial entre bloques | Medio |
| `ServiceLanding` | Ensambla la misma secuencia para varios servicios | Definir slots por datos para hero y secundaria sin duplicar markup | Medio |
| FAQ, proceso y CTA final | Funcionan bien como contenido puro | Mantener sin fotografía salvo un fondo decorativo muy controlado | Ninguno |

### 2.6 Observaciones responsive y de accesibilidad

- En mobile los heroes consumen gran parte del primer viewport. La imagen debe aparecer **después del copy y los CTAs**, no interrumpir la lectura ni empujar el mensaje principal hacia abajo.
- Las capturas mobile muestran el botón del menú con iconos de menú y cierre simultáneamente. Es una incidencia visual preexistente que conviene verificar en una tarea separada; no depende del plan de assets.
- Las imágenes generadas no deben incluir texto esencial ni interfaces con copy ficticio. El texto generado por IA suele ser ilegible y también crea una barrera de accesibilidad.
- Esta auditoría visual no confirma navegación por teclado, lector de pantalla, zoom al 200%, reducción de movimiento ni cumplimiento WCAG completo; esos puntos requieren pruebas funcionales específicas.

---

## 3. Sistema visual recomendado

### 3.1 Idea rectora

**“Tecnología clara en negocios reales.”**

Las imágenes deben mostrar que BaseLogic entiende operaciones concretas y las ordena con tecnología. La escena humana aporta cercanía; la composición limpia, la luz y las interfaces discretas aportan precisión. El resultado no debe parecer ni una consultora corporativa fría ni una startup de ciencia ficción.

### 3.2 Proporción de estilo

- **70% realista:** fotografía editorial creíble, espacios habitables, objetos auténticos y personas en actividad.
- **30% estilizado/tecnológico:** geometrías limpias, overlays muy sutiles, pantallas ordenadas, reflejos cian/azul y profundidad controlada.
- Evitar estética “AI glossy”, hologramas evidentes, neon cyberpunk, oficinas futuristas imposibles o renders demasiado perfectos.

### 3.3 Paleta aplicada a imágenes

| Función | Colores / tratamiento |
|---|---|
| Base neutra | Blanco cálido, gris claro, slate y azul noche |
| Marca | Azul BaseLogic y cian como acentos, no como baño de color total |
| Pieles y ambientes | Tonos naturales, balance neutro-cálido, sin desaturación extrema |
| Metales / industria | Acero, grafito, azul petróleo; conservar puntos de cian |
| Vegetación | Verdes naturales apagados, nunca verde neón |
| Contraste | Sujetos legibles, sombras suaves, negros no empastados |

### 3.4 Iluminación y fondos

- Luz de día suave, lateral o difusa, equivalente visual a 5000–5600 K.
- Interiores luminosos y realistas, con contraste premium pero amable.
- Fondos ordenados, con profundidad y pocos objetos. El contexto debe entenderse sin competir con el copy.
- Mantener un área de baja densidad para overlays o recortes responsive.
- En piezas industriales se puede aumentar el contraste y usar luz más direccional, sin perder detalle en sombras.

### 3.5 Personas

- Presencia selectiva: una o dos personas, ocupando aproximadamente 15–35% del encuadre.
- Diversidad creíble para Chile y Latinoamérica, evitando casting genérico de banco de imágenes estadounidense.
- Mostrar actividad: revisar agenda, atender, validar pagos, inspeccionar activos, conversar sobre una pantalla.
- Evitar miradas directas a cámara, sonrisas publicitarias exageradas, apretones de manos y poses de “equipo celebrando”.
- En Home y servicios, las personas aportan cercanía. En productos, el sistema o el objeto operacional conserva el protagonismo.

### 3.6 Vegetación

- Moderada y contextual: una planta interior, vegetación desenfocada o un pequeño acento natural.
- Útil especialmente en Home, Booking, EduPay y Páginas web para suavizar la estética tecnológica.
- En EAM debe ser mínima y ambiental; no mezclar industria pesada con decoración verde artificial.

### 3.7 Pantallas e interfaces

- Las pantallas deben funcionar como **superficies para composición posterior**, no como fuentes de texto generado.
- Pedir displays limpios, sin logos de terceros, sin marcas reconocibles y con paneles abstractos de baja complejidad.
- Si una interfaz debe ser informativa, se debe superponer después una captura o mockup real de BaseLogic en HTML/CSS o edición, no confiar en el texto producido por IA.
- Evitar más de dos dispositivos por imagen.

### 3.8 Diferenciación por producto sin romper la unidad

| Línea | Acento propio | Contexto | Tipo de imagen | Evitar |
|---|---|---|---|---|
| **Booking** | Cian fresco, azul claro, pequeños verdes naturales | Barbería, consulta, centro estético, cancha o servicio con agenda | Escena cercana + calendario/interfaz limpia | Reducirlo a una peluquería cliché o mostrar demasiados rubros a la vez |
| **EduPay** | Azul cobalto, cian suave, neutros cálidos | Administración educativa, apoderado, colegio o academia | Confianza, orden financiero y seguimiento | Niños como protagonistas, dinero físico, ansiedad o morosidad dramatizada |
| **EAM** | Navy profundo, grafito, acero, cian preciso | Mantenimiento, bodega, planta, activo crítico | Más técnico, amplio y estructurado | Ciencia ficción, minería insegura, equipos sin EPP, maquinaria de marca |
| **Páginas web** | Azul/cian luminoso con tonos madera o crema | Negocio real revisando su presencia digital | Cercano, creativo y profesional | Pantallas con sitios ilegibles o “diseñador genérico” aislado |
| **Sistemas para pymes** | Azul BaseLogic, slate, acentos cálidos | Equipo ordenando una operación antes dispersa | Operacional, colaborativo, orientado a claridad | Hologramas, hojas de cálculo caóticas con texto generado |

### 3.9 Reglas de continuidad de la familia

- Misma gradación de color, contraste y nivel de detalle.
- Misma sensación de lente editorial: perspectiva natural, sin gran angular extremo.
- Bordes o fondos con aire suficiente para convivir con los radios grandes del sitio.
- Cian/azul como señal secundaria, no como filtro dominante.
- Una escena, una idea y un foco principal por imagen.
- Sin texto generado, sin logos de terceros, sin marcas de agua y sin UI ficticia prominente.

---

## 4. Slots visuales por página prioritaria

### Leyenda de prioridad

- **P0:** imprescindible para la primera fase.
- **P1:** alto valor, producir después de validar los heroes.
- **P2:** derivado, decorativo o prescindible.

### 4.1 Home `/`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `HOME-HERO-01` — hero principal | Humanizar la promesa “web + sistemas + automatización” y crear una primera impresión propia | P0 · principal | Dueño/a o pequeño equipo en un espacio pyme contemporáneo; laptop o tablet; capa de interfaz discreta; persona secundaria, no retrato | 4:3, 2400 × 1800; crop 4:5, 1200 × 1500 | Reutilizar la columna derecha de `HomeHero`. Puede conservarse parte del panel actual como overlay real y accesible |
| `HOME-PRODUCTS-01` — familia de productos | Mostrar que Booking, EduPay y EAM pertenecen a un mismo sistema | P1 · secundaria | Composición editorial con tres superficies/dispositivos o tres mundos conectados, sin texto legible | 16:9, 2400 × 1350 | Ubicar cerca de `ProductsPreviewSection`; no usar tres imágenes nuevas si los heroes de producto ya existen |
| `HOME-TRUST-01` — colaboración | Introducir un momento humano y cercano en el scroll largo | P1 · secundaria | Conversación breve entre cliente pyme y profesional BaseLogic, pantalla compartida, ambiente natural | 3:2, 2100 × 1400 | Candidato para `WhyBaseLogicSection`; debe equilibrar cards, no reemplazarlas |
| `HOME-CARD-*` — miniaturas | Diferenciar productos o servicios en cards | P2 · derivado | Recortes de los heroes correspondientes | 4:3, 960 × 720 | No generar assets base nuevos. Cargar lazy. Usar solo en productos prioritarios, no en todas las cards de servicios |

**Dónde no agregar imágenes:** `PlansPreviewSection`, FAQ y CTA final ya tienen suficiente carga visual y deben conservar velocidad y claridad.

### 4.2 Productos `/productos`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `PRODUCTS-HERO-01` — sistema de productos | Comunicar la amplitud del portafolio antes de leer las tres cards | P0 · principal | Tríptico integrado: agenda, pagos educativos y operación industrial unidos por geometría y color de marca | 4:3, 2400 × 1800 | `ListingHero` necesita variante de dos columnas. Mantener el h1 y texto intactos |
| `PRODUCTS-CARDS-*` — Booking/EduPay/EAM | Acelerar la diferenciación de cada card | P1/P2 · miniaturas derivadas | Recorte reconocible del hero maestro de cada producto | 4:3, 960 × 720 | Misma altura y punto focal. No repetir el hero completo ni cargar imágenes mayores a 80–100 KB |

**Dónde no agregar imágenes:** no se recomienda una imagen adicional antes del CTA final; la página es breve y una segunda pieza competiría con las tres cards.

### 4.3 Booking `/productos/booking`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `BOOKING-HERO-01` — reservas en contexto | Hacer que Booking se entienda en segundos | P0 · principal | Recepción o negocio por hora; profesional revisando disponibilidad en tablet; cliente o segunda persona fuera de foco; área de pantalla limpia | 4:3, 2400 × 1800; crop 4:5 | Adaptar `ListingHero`. En mobile la imagen debe ir después del texto, sin desplazar la propuesta inicial |
| `BOOKING-USECASE-01` — agenda en acción | Reforzar variedad de rubros sin crear un collage confuso | P1 · secundaria | Una escena representativa —por ejemplo consulta, centro estético o barbería premium— con gesto de confirmación de hora | 3:2, 2100 × 1400 | Ubicar en “Ideal para rubros…”. Mantener una sola escena; el copy ya enumera los demás rubros |

**Dónde no agregar imágenes:** la lista “Qué puede incluir” funciona mejor como UI/card real. No necesita una imagen por feature.

### 4.4 EduPay `/productos/edupay`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `EDUPAY-HERO-01` — pagos educativos claros | Asociar la solución con confianza, orden y educación | P0 · principal | Administrativa de institución o apoderado revisando estado de pagos en laptop/tablet; entorno educativo sutil; pantalla preparada para overlay | 4:3, 2400 × 1800; crop 4:5 | Adaptar `DetailHero`. Personas secundarias y sin datos sensibles visibles |
| `EDUPAY-ADMIN-01` — menos trabajo manual | Visualizar el beneficio operacional, no el acto de pagar | P1 · secundaria | Equipo administrativo pequeño revisando un panel ordenado; documentos mínimos; atmósfera tranquila | 3:2, 2100 × 1400 | Colocar entre beneficios y features o dentro de una futura franja editorial; no sumar imágenes en cada caso de uso |

**Dónde no agregar imágenes:** las grillas de “Qué puede incluir” y “Casos de uso” ya son extensas. Una mini-imagen por card aumentaría ruido y peso.

### 4.5 EAM `/productos/eam`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `EAM-HERO-01` — operación controlada | Posicionar EAM como producto avanzado y serio | P0 · principal | Técnico/a o supervisor/a en planta, bodega o mantenimiento; tablet; activo relevante; EPP correcto; overlays mínimos | 4:3, 2400 × 1800; crop 4:5 | Adaptar `ListingHero`; usar fondo/gradación más oscuro que Booking y EduPay sin cambiar la paleta del sitio |
| `EAM-MAINTENANCE-01` — inspección y trazabilidad | Conectar módulos con una tarea real | P1 · secundaria | Inspección de activo, orden de trabajo en tablet, entorno industrial seguro y limpio | 3:2, 2100 × 1400 | Ubicar en “Pensado para operaciones con mayor exigencia”; cargar lazy |

**Dónde no agregar imágenes:** conservar el panel oscuro “Módulos y capacidades”; ya cumple la función de contraste técnico.

### 4.6 Páginas web `/servicios/paginas-web`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `WEBPAGES-HERO-01` — presencia profesional | Mostrar el resultado humano y comercial de una web bien hecha | P0 · principal | Dueño/a de pyme revisando su sitio con un profesional; laptop con pantalla limpia; entorno real y luminoso | 4:3, 2400 × 1800; crop 4:5 | Adaptar `DetailHero` compartido. El foco es el negocio, no una agencia creativa genérica |
| `WEBPAGES-RESULT-01` — negocio visible | Cortar el ritmo de grillas y reforzar confianza | P1 · secundaria | Negocio/servicio real con presencia digital integrada: local, profesional o equipo pequeño usando la web | 3:2, 2100 × 1400 | Ubicar antes de proceso o casos de uso. Evitar una galería completa |

**Dónde no agregar imágenes:** beneficios, includes y FAQ pueden permanecer tipográficos. No generar mockups distintos para cada tipo de página.

### 4.7 Sistemas para pymes `/servicios/sistemas-para-pymes`

| ID / slot | Objetivo visual | Prioridad y rol | Contenido recomendado | Ratio y master | Notas de integración |
|---|---|---|---|---|---|
| `PYMESYSTEMS-HERO-01` — orden operacional | Convertir la idea abstracta de “sistema” en una situación reconocible | P0 · principal | Equipo pequeño coordinando clientes, pagos, inventario o solicitudes en una pantalla común; ambiente pyme chileno | 4:3, 2400 × 1800; crop 4:5 | Adaptar `DetailHero`. No mostrar un ERP complejo ni una oficina corporativa grande |
| `PYMESYSTEMS-FLOW-01` — proceso ordenado | Expresar el paso de información dispersa a un flujo claro | P1 · secundaria | Persona operativa usando tablet/laptop mientras el equipo trabaja; datos abstractos discretos, sin texto | 3:2, 2100 × 1400 | Ubicar antes de “Proceso simple de trabajo” o casos de uso; cargar lazy |

**Dónde no agregar imágenes:** no ilustrar cada feature o etapa. El sistema debe sentirse simple, no saturado.

---

## 5. Lista priorizada de imágenes a generar

### Fase 1 — heroes y lenguaje base

Esta fase valida estilo, personas, iluminación y color. No avanzar con todas las secundarias antes de aprobar al menos Home, Booking y EAM, porque esas tres piezas cubren los extremos humano, pyme e industrial del sistema.

| Orden | Nombre interno | Página | Objetivo | Ratio | Contenido resumido |
|---:|---|---|---|---|---|
| 1 | `HOME-HERO-01` | `/` | Fijar el lenguaje visual general | 4:3 | Pyme real + tecnología clara + persona secundaria |
| 2 | `BOOKING-HERO-01` | `/productos/booking` | Dar identidad al producto principal | 4:3 | Reserva/agenda en negocio por hora |
| 3 | `EDUPAY-HERO-01` | `/productos/edupay` | Construir confianza educativa | 4:3 | Administración/apoderado + pantalla de pagos limpia |
| 4 | `EAM-HERO-01` | `/productos/eam` | Marcar el extremo técnico premium | 4:3 | Operación industrial segura + tablet/activo |
| 5 | `WEBPAGES-HERO-01` | `/servicios/paginas-web` | Humanizar el servicio | 4:3 | Pyme revisando presencia digital |
| 6 | `PYMESYSTEMS-HERO-01` | `/servicios/sistemas-para-pymes` | Mostrar orden operacional | 4:3 | Equipo pequeño trabajando con un sistema simple |
| 7 | `PRODUCTS-HERO-01` | `/productos` | Unificar la familia de productos | 4:3 | Tríptico coherente Booking/EduPay/EAM |

### Fase 2 — contexto y ritmo editorial

| Orden | Nombre interno | Página | Objetivo | Ratio | Contenido resumido |
|---:|---|---|---|---|---|
| 8 | `HOME-TRUST-01` | `/` | Introducir cercanía en el scroll | 3:2 | Conversación y trabajo compartido |
| 9 | `HOME-PRODUCTS-01` | `/` | Presentar la familia de productos | 16:9 | Composición de tres mundos, derivable de Fase 1 |
| 10 | `BOOKING-USECASE-01` | Booking | Mostrar una reserva real | 3:2 | Profesional y cliente en un rubro por hora |
| 11 | `EDUPAY-ADMIN-01` | EduPay | Visualizar menos trabajo manual | 3:2 | Equipo administrativo y panel ordenado |
| 12 | `EAM-MAINTENANCE-01` | EAM | Mostrar trazabilidad de una tarea | 3:2 | Inspección segura y orden de trabajo |
| 13 | `WEBPAGES-RESULT-01` | Páginas web | Reforzar resultado comercial | 3:2 | Negocio real usando su presencia digital |
| 14 | `PYMESYSTEMS-FLOW-01` | Sistemas para pymes | Mostrar operación conectada | 3:2 | Flujo simple de equipo, solicitudes o inventario |

### Fase 3 — derivados y distribución

No requiere una nueva sesión creativa completa. Se debe trabajar desde las imágenes maestras aprobadas.

- Crops 4:5 para mobile de los siete heroes.
- Miniaturas 4:3 para cards de Booking, EduPay y EAM.
- Variantes AVIF/WebP a 480, 768, 1200 y 1600 px según slot.
- OG 1200 × 630 para Home, Productos y los tres productos prioritarios.
- Una versión de baja resolución o LQIP por asset si el pipeline lo necesita.
- Ajustes de punto focal por viewport, sin “object-position” arbitrario.

### Fase 4 — backlog visual futuro

- Rutas secundarias de servicios: WordPress, landing pages, automatización y planes.
- Casos de éxito reales cuando existan fotografías, métricas o testimonios verificables.
- Biblioteca de UI real de Booking, EduPay y EAM.
- Retratos o equipo BaseLogic solo si hay material auténtico o una decisión de marca explícita.

---

## 6. Recomendaciones de contenido para cada imagen

### Brief mínimo común para Gemini / Nano Banana

Cada solicitud de generación debe especificar:

1. **Uso y slot:** hero desktop, hero mobile, secundaria o thumbnail.
2. **Relación de aspecto exacta:** no pedir “horizontal” de forma genérica.
3. **Sujeto y acción:** quién aparece y qué está haciendo.
4. **Jerarquía:** qué debe llamar la atención primero y cuánto espacio ocupa la persona.
5. **Contexto local:** pyme o empresa en Chile/Latinoamérica, sin símbolos turísticos ni estereotipos.
6. **Luz y color:** luz natural suave, neutros limpios, acentos azul/cian.
7. **Zona segura:** área de baja densidad para crop mobile o overlay.
8. **Restricciones:** sin texto, logos, marcas de agua, manos deformes, pantallas con datos reales ni objetos flotantes.
9. **Nivel de realismo:** fotografía editorial premium, no render 3D brillante.
10. **Continuidad:** referenciar la imagen maestra aprobada para las variantes siguientes.

### Matriz de dirección de contenido

| Asset | Foco principal | Persona | Ambiente / objetos | Tecnología | Restricción especial |
|---|---|---|---|---|---|
| `HOME-HERO-01` | Crecimiento ordenado | 1–2, secundarias | Escritorio/negocio luminoso, planta discreta | Laptop + panel sutil | No parecer cowork corporativo |
| `PRODUCTS-HERO-01` | Familia de soluciones | Opcional, mínima | Tres contextos conectados | Tres superficies de UI coherentes | No convertirlo en collage recargado |
| `BOOKING-HERO-01` | Disponibilidad y reserva | 1–2 | Recepción/servicio por hora | Calendario abstracto | No mezclar muchos rubros |
| `EDUPAY-HERO-01` | Confianza y seguimiento | 1–2 | Administración educativa | Panel de pagos sin texto | Sin datos de alumnos ni niños protagonistas |
| `EAM-HERO-01` | Control de activos | 1, secundaria | Planta/bodega/activo | Tablet + overlay técnico mínimo | EPP y seguridad correctos |
| `WEBPAGES-HERO-01` | Presencia profesional | 2 | Negocio pequeño, laptop | Sitio sin texto generado | Cliente como protagonista, no el diseñador |
| `PYMESYSTEMS-HERO-01` | Orden operacional | 1–3 | Oficina/operación pyme | Panel simple compartido | Evitar ERP denso y oficina enterprise |

### Criterios de aprobación visual

- El mensaje se entiende sin leer un caption.
- La imagen todavía se reconoce al verla como miniatura.
- Hay espacio suficiente para crop mobile sin cortar cara, manos, dispositivo o activo principal.
- Las manos, ojos, herramientas, EPP y dispositivos son anatómica y funcionalmente creíbles.
- No hay texto inventado ni marcas reconocibles.
- La pieza parece parte del mismo sistema que las demás, pero su producto se distingue por contexto y acento.
- La imagen mejora la página sin convertirse en el protagonista total de la oferta.

---

## 7. Recomendaciones técnicas de integración futura

### 7.1 Estrategia Astro recomendada

Para imágenes editoriales locales, la opción preferente es guardar los masters aprobados bajo `src/assets/generated/` y usar `Picture` de `astro:assets`, que puede generar variantes y atributos responsive en build. Los logos, favicons y OG con URL pública estable pueden permanecer en `public/images/`.

Si se decide conservar todas las imágenes en `public/images/generated/`, será necesario exportar manualmente cada tamaño y escribir `<picture>` con `srcset`, porque Astro no transforma automáticamente los archivos servidos desde `public`.

### 7.2 Formatos

- **AVIF:** primera opción para fotografía y composiciones realistas.
- **WebP:** fallback principal y formato de trabajo compatible.
- **PNG:** solo transparencia real, overlays o UI que no tolere compresión con pérdida.
- **SVG:** logos, iconos y gráficos vectoriales; no usarlo para fotografías generadas.
- Conservar el master original fuera de la entrega web para futuras correcciones.

### 7.3 Presupuesto de peso orientativo

| Tipo | Peso objetivo AVIF/WebP | Observación |
|---|---:|---|
| Hero Home | 140–220 KB | Es el único candidato a preload/fetch priority alto |
| Hero interior | 120–200 KB | Solo cargar al entrar a la ruta correspondiente |
| Secundaria | 100–160 KB | Siempre lazy |
| Thumbnail card | 45–90 KB | Evitar servir el master reducido por CSS |
| OG 1200 × 630 | 100–250 KB | Priorizar compatibilidad; WebP/JPEG según plataforma |

Estos valores son objetivos, no reglas absolutas. La revisión final debe equilibrar detalle, artefactos y costo real de transferencia.

### 7.4 `<picture>`, `<img>` y background images

- Usar **`<picture>`** para heroes y piezas con crop distinto entre mobile y desktop.
- Usar **`<img>`** para una imagen informativa que no necesita art direction.
- Usar **background image** solo cuando la pieza sea puramente decorativa, ocupe un bleed de sección y no deba tener alt. Nunca usar background para una imagen que explica el producto.
- Evitar imágenes como fondo detrás de párrafos largos; reducen contraste y dificultan responsive.

### 7.5 Carga, prioridad y decodificación

- Home hero: `loading="eager"`, `fetchpriority="high"`, dimensiones explícitas y preload solo si la medición lo justifica.
- Heroes interiores: `loading="eager"` si aparecen en el primer viewport; no precargarlos desde otras rutas.
- Todo asset bajo el fold: `loading="lazy"` y `decoding="async"`.
- No lazy-load del hero principal si es candidato a LCP.
- No cargar variantes desktop ocultas en mobile mediante CSS; `picture/srcset` debe evitar la descarga innecesaria.

### 7.6 Prevención de CLS y recortes incorrectos

- Declarar `width` y `height` o reservar espacio con `aspect-ratio` antes de que llegue la imagen.
- Mantener un contenedor estable por slot: 4:3 desktop y 4:5 mobile para heroes.
- Definir punto focal por asset (`50% 40%`, por ejemplo) y validarlo, no usar un `object-cover` genérico sin revisión.
- No cambiar el ratio después de generar: primero medir el componente, después producir y recortar.
- Probar 320, 390, 768, 1024 y 1440 px, además de zoom y contenido largo.

### 7.7 Imágenes decorativas vs. informativas

- **Informativa:** muestra un caso de uso, contexto real o producto. Debe usar `<img>/<picture>` y un alt breve que agregue información.
- **Decorativa:** solo aporta atmósfera o textura. Debe usar `alt=""`; si es background, no requiere exposición semántica.
- No repetir en el alt el titular de la sección.
- No describir colores o estilo cuando no aportan al propósito de la página.

Ejemplos futuros:

- Booking hero: `alt="Profesional revisando la disponibilidad de reservas en una tablet"`.
- EAM secundaria: `alt="Técnico registrando la inspección de un activo industrial"`.
- Glow o textura de fondo: `alt=""`.

### 7.8 Capa de datos sugerida, sin implementar en esta fase

Sería útil centralizar los slots en `src/data/visualAssets.ts` cuando comience la integración. La capa debería guardar, como mínimo:

```ts
type VisualAsset = {
  id: string;
  desktop: ImageMetadata;
  mobile?: ImageMetadata;
  alt: string;
  role: 'informative' | 'decorative';
  focalPoint?: string;
  priority?: boolean;
};
```

La ventaja es mantener alt, variantes, prioridad y punto focal fuera del markup de cada página. No se recomienda crear esta capa antes de aprobar el primer set de assets, porque todavía podrían cambiar ratios o nombres.

---

## 8. Estructura sugerida de carpetas y naming

### 8.1 Estructura híbrida recomendada

```text
src/
  assets/
    generated/
      home/
      products/
        booking/
        edupay/
        eam/
      services/
        paginas-web/
        sistemas-para-pymes/

public/
  images/
    brand/
      logos/
      icons/
    generated/
      og/
    ui/
      booking/
      edupay/
      eam/
```

- `src/assets/generated/`: imágenes editoriales que Astro debe procesar.
- `public/images/generated/og/`: piezas con URL pública estable para metadata social.
- `public/images/ui/`: capturas o overlays de producto reales, separados de la generación fotográfica.
- `public/images/brand/`: ordenar gradualmente logos e iconos actuales; no es requisito para esta fase.

### 8.2 Si se prefiere una estructura 100% pública

```text
public/images/
  brand/
  generated/
    home/
    products/
      booking/
      edupay/
      eam/
    services/
      paginas-web/
      sistemas-para-pymes/
    og/
  ui/
```

En ese caso cada carpeta debe contener exportaciones explícitas por ancho y formato.

### 8.3 Convención de nombres

Formato recomendado:

`bl-{pagina}-{slot}-{contenido}-{ratio}-{variante}-{ancho}.{formato}`

Ejemplos:

```text
bl-home-hero-pyme-digital-4x3-desktop-1600.avif
bl-home-hero-pyme-digital-4x5-mobile-768.webp
bl-booking-hero-reserva-tablet-4x3-desktop-1200.avif
bl-edupay-secondary-admin-panel-3x2-desktop-1200.webp
bl-eam-hero-inspeccion-activo-4x5-mobile-768.avif
bl-products-card-booking-4x3-480.webp
bl-home-og-1200x630.webp
```

Reglas:

- Minúsculas, guiones y sin espacios ni tildes.
- El nombre describe uso y contenido, no el prompt ni el número aleatorio de Gemini.
- Incluir ratio o viewport cuando existan crops distintos.
- No usar sufijos ambiguos como `final`, `final2`, `nuevo` o `ok`.
- Mantener una hoja de control con prompt, semilla/referencia, fecha, aprobación y derivados.

---

## 9. Riesgos a evitar

### Riesgos de marca

- **Stock genérico:** oficinas perfectas, equipos sonriendo a cámara o apretones de manos debilitan la cercanía real.
- **Futurismo excesivo:** hologramas, partículas y luces neón alejan la marca de pymes y empresas concretas.
- **Diferenciación por color solamente:** Booking, EduPay y EAM deben cambiar de contexto y composición, no solo de tinte.
- **Inconsistencia entre sesiones:** generar cada asset sin imagen de referencia puede producir personas, iluminación y texturas incompatibles.
- **Representación local forzada:** evitar banderas, paisajes turísticos o clichés visuales de Chile; el contexto debe sentirse local por escala y naturalidad.

### Riesgos de contenido

- Texto ilegible o falso en pantallas.
- Datos personales, saldos, nombres de alumnos o información operacional simulada con apariencia real.
- Manos, herramientas, EPP o maquinaria incorrectos.
- Imágenes que prometen funciones no definidas comercialmente.
- Representar EduPay como pasarela financiera regulada si el producto aún se ofrece como solución evaluable.

### Riesgos de UX

- Agregar una imagen en cada card y aumentar ruido cognitivo.
- Colocar fotografía antes del h1 o CTA en mobile.
- Usar fondos ocupados detrás de texto.
- Introducir carruseles solo para mostrar más imágenes.
- Convertir las páginas en galerías y diluir el mensaje comercial.

### Riesgos de performance

- Servir masters de 2400 px donde basta una miniatura de 480 px.
- Cargar WebP y AVIF simultáneamente por una implementación incorrecta.
- Lazy-load del LCP o preload de assets que están bajo el fold.
- Omitir dimensiones y provocar CLS.
- Generar demasiadas variantes sin que `sizes` refleje el ancho real del slot.
- Usar PNG para fotografía.

### Riesgos de mantenimiento

- Duplicar rutas de archivos en componentes y datos.
- Guardar masters, crops y OG sin convención.
- Perder el prompt o la imagen de referencia aprobada.
- Mezclar UI real, fotografía generada y assets de marca en la misma carpeta.
- No documentar alt, rol semántico y punto focal.

---

## 10. Checklist para pasar a generación con Gemini / Nano Banana

### Antes de generar

- [ ] Aprobar la idea rectora “Tecnología clara en negocios reales”.
- [ ] Aprobar la proporción 70% realista / 30% tecnológica.
- [ ] Confirmar que los siete heroes P0 siguen siendo el alcance de Fase 1.
- [ ] Medir el slot final en `HomeHero`, `ListingHero` y `DetailHero` antes de cerrar prompts.
- [ ] Definir 4:3 desktop y 4:5 mobile como ratios de partida.
- [ ] Elegir un hero piloto: recomendado `HOME-HERO-01`.
- [ ] Preparar logo, paleta y capturas del sitio como referencias visuales.
- [ ] Definir si la UI se compondrá después con mockups reales.
- [ ] Confirmar restricciones por producto, especialmente EduPay y EAM.

### Durante la generación

- [ ] Generar pocas variantes controladas por asset, no lotes masivos sin dirección.
- [ ] Mantener la misma imagen aprobada como referencia para la familia siguiente.
- [ ] Revisar manos, ojos, pantallas, logos, herramientas y EPP al 100%.
- [ ] Rechazar cualquier texto generado visible.
- [ ] Validar que existe zona segura para 4:5 mobile.
- [ ] Verificar que las personas no dominen el encuadre.
- [ ] Comparar Booking, EduPay y EAM juntos antes de aprobarlos por separado.

### Antes de integrar

- [ ] Seleccionar master y registrar prompt/referencia.
- [ ] Crear crops responsive con punto focal validado.
- [ ] Exportar AVIF y WebP con presupuesto de peso.
- [ ] Redactar alt según el rol real de la imagen.
- [ ] Clasificar cada asset como informativo o decorativo.
- [ ] Definir `width`, `height`, `sizes`, `loading` y `fetchpriority`.
- [ ] Probar desktop y mobile sin cambios de layout inesperados.
- [ ] Medir LCP, CLS y transferencia antes/después.
- [ ] Revisar coherencia de color entre todas las páginas.
- [ ] No publicar si la imagen sugiere funciones o resultados no respaldados por el copy.

### Criterio de salida de esta fase

La planificación queda lista para generación cuando se aprueben: el sistema visual, los siete slots P0, los ratios maestros y el primer brief de `HOME-HERO-01`. La integración técnica debe comenzar solo después de que el set piloto demuestre consistencia en desktop y mobile.

---

## Conclusión

BaseLogic no necesita más decoración; necesita **evidencia visual selectiva**. Una familia pequeña de escenas creíbles puede transformar la percepción del sitio sin tocar su estrategia ni su arquitectura. Los heroes deben aportar contexto y diferenciación; las piezas secundarias deben romper la repetición de grillas; los derivados deben extender la familia sin aumentar el costo creativo. Con esta jerarquía, la web puede sentirse más premium, humana y propia manteniendo su claridad comercial y su buen rendimiento.
