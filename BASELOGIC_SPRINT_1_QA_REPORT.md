# BaseLogic Sprint 1 QA Report

Fecha: 2026-07-01  
Repositorio: `C:\Users\nicol\Documents\baselogic-web`  
Resultado general: **aprobado con observaciones menores**

## 1. Resultado general

Sprint 1 queda aprobado para avanzar a Sprint 2, con correcciones menores aplicadas durante esta QA.

No se implementaron rutas de Sprint 2, no se agregaron landings nuevas y no se instalaron dependencias.

Observaciones no bloqueantes:

- Quedan componentes y paginas antiguas no usadas que conviene limpiar en Sprint 2.
- El formulario sigue sin backend real, pero no simula exito y usa WhatsApp/email como fallback claro.
- La revision mobile se valido por estructura responsive, HTML generado y servidor local; el navegador embebido quedo inestable durante una prueba interactiva prolongada.

## 2. Checklist de rutas Sprint 1

Todas las rutas responden correctamente en servidor local y existen en `dist`.

| Ruta | Estado | H1 | Metadata propia | Canonical | CTA visible | Copy antiguo |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | OK 200 | OK | OK | `https://baselogic.cl/` | OK | No detectado |
| `/servicios` | OK 200 | OK | OK | `https://baselogic.cl/servicios` | OK | No detectado |
| `/productos` | OK 200 | OK | OK | `https://baselogic.cl/productos` | OK | No detectado |
| `/productos/booking` | OK 200 | OK | OK | `https://baselogic.cl/productos/booking` | OK | No detectado |
| `/productos/eam` | OK 200 | OK | OK | `https://baselogic.cl/productos/eam` | OK | No detectado |
| `/planes` | OK 200 | OK | OK | `https://baselogic.cl/planes` | OK | No detectado |
| `/contacto` | OK 200 | OK | OK | `https://baselogic.cl/contacto` | OK | No detectado |
| `/legal/privacidad` | OK 200 | OK | OK | `https://baselogic.cl/legal/privacidad` | OK | No detectado |
| `/legal/terminos` | OK 200 | OK | OK | `https://baselogic.cl/legal/terminos` | OK | No detectado |

## 3. Resultado de redirecciones

Las rutas antiguas revisadas no muestran contenido antiguo. Todas redirigen con estado `301`.

| Ruta antigua | Resultado |
| --- | --- |
| `/servicios/saas` | 301 -> `/servicios` |
| `/servicios/api` | 301 -> `/servicios` |
| `/servicios/auditoria` | 301 -> `/servicios` |
| `/servicios/eam` | 301 -> `/productos/eam` |
| `/en` | 301 -> `/` |
| `/en/contact` | 301 -> `/contacto` |
| `/en/services/saas` | 301 -> `/servicios` |
| `/en/services/api` | 301 -> `/servicios` |
| `/en/services/audit` | 301 -> `/servicios` |
| `/en/services/eam` | 301 -> `/productos/eam` |

## 4. Resultado del formulario

Estado: **OK con correcciones aplicadas**

Validaciones:

- No muestra exito falso.
- No usa `setTimeout`.
- Ejecuta `event.preventDefault()`.
- En submit usa `window.location.href = createWhatsappHref(leadMessage)`.
- Incluye alternativa `mailto:` con mensaje prellenado.
- El usuario ve una nota clara: el formulario abre WhatsApp o correo con informacion prellenada.
- Los campos esperados existen: nombre, email, WhatsApp o telefono, empresa o negocio, tipo de proyecto, presupuesto aproximado y mensaje.

Tipos de proyecto verificados:

- Página web.
- Landing page.
- WordPress.
- Sistema para pyme.
- Automatización.
- BaseLogic Booking.
- BaseLogic EduPay.
- BaseLogic EAM.
- Soporte mensual.
- No estoy seguro.

Correcciones aplicadas:

- Se corrigieron acentos en `Página web` y `Automatización`.
- Se cambio el texto visible a `WhatsApp o teléfono`.
- Se agregaron `id`, `name`, `htmlFor`, `autoComplete` y `type="tel"` donde corresponde.
- Se mantuvo el fallback por WhatsApp/email sin simular envio.

## 5. Resultado de WhatsApp

Estado: **OK con correcciones aplicadas**

Validaciones:

- Todos los enlaces usan `https://wa.me/56987751255`.
- El numero sale desde `src/data/site.ts` y `src/data/contact.ts`.
- No se detectaron numeros de WhatsApp hardcodeados dispersos en componentes publicos nuevos.
- Header y footer usan mensaje general.
- Boton flotante usa mensaje contextual por pagina cuando corresponde.

Mensajes contextuales verificados:

- Home/contacto/legal: cotizacion general de proyecto digital.
- Servicios: conversacion sobre servicios digitales.
- Productos: interes por productos BaseLogic.
- Booking: interes por BaseLogic Booking para reservas.
- EAM: interes por BaseLogic EAM para activos, mantenimiento e inventario.
- Planes: orientacion sobre planes disponibles.

## 6. Resultado de menu movil

Estado: **OK estructural**

Validaciones:

- El menu usa `details` y `summary`, por lo que abre y cierra sin JavaScript adicional.
- La navegacion mobile contiene Inicio, Servicios, Productos, Planes y Contacto.
- Incluye CTA a `Cotizar proyecto`.
- Incluye CTA a WhatsApp.
- El contenedor usa `w-[min(88vw,360px)]`, reduciendo riesgo de overflow horizontal.
- El body del layout usa `overflow-x-hidden`.
- Al navegar, la nueva pagina recarga y el menu no queda bloqueado.

Observacion: el navegador embebido se quedo inestable durante la prueba interactiva extendida, por lo que el cierre se hizo con inspeccion de estructura responsive, HTML generado y servidor local.

## 7. Resultado de busqueda de copy antiguo

Estado: **OK**

Se busco en las rutas Sprint 1 generadas en `dist`:

- `enterprise`
- `white label`
- `agencias`
- `agencia`
- `CTO`
- `stack`
- `no hacemos sitios web`
- `Business Engines`
- `software enterprise`
- `auditoría técnica`
- `DevOps`
- `TypeScript`
- `NestJS`
- `Angular`
- `Prisma`

Resultado: **sin coincidencias visibles en las paginas publicas Sprint 1**.

Nota: pueden existir menciones en reportes Markdown o archivos antiguos no enlazados, lo que no afecta la experiencia publica nueva.

## 8. Resultado SEO base

Estado: **OK**

Validaciones:

- `astro.config.mjs` usa `site: 'https://baselogic.cl'`.
- Canonical se genera con `https://baselogic.cl`.
- Favicon ya no apunta a `/flavicon.png`.
- Open Graph usa `https://baselogic.cl/og-baselogic.svg`.
- Las paginas principales tienen title y description propios.
- `og:locale` esta configurado como `es_CL`.
- Hay JSON-LD basico en home, Booking y EAM.

Pendientes para Sprint 3:

- Sitemap.
- Robots.
- OG final en PNG/JPG.
- Schema mas completo por pagina.
- Tracking de conversiones.

## 9. Resultado visual y responsive

Estado: **OK para cierre Sprint 1**

Revision rapida:

- Home desktop: mensaje claro para pymes, CTAs visibles, sin estetica devtools dominante.
- Home mobile: estructura responsive preparada, sin overflow horizontal detectado por guardas de layout.
- Servicios: lenguaje comercial y entendible.
- Productos: Booking aparece como producto destacado.
- Booking: mensaje fuerte y claro para negocios con reservas.
- EAM: queda como producto avanzado, visible sin dominar toda la marca.
- Planes: precios de referencia claros y orientados a conversion.
- Contacto: formulario y alternativas de contacto entendibles.

No se comunica que BaseLogic sea solo enterprise, mineria o desarrollo para CTOs.

## 10. Resultado de build

Comando ejecutado:

```powershell
npm.cmd run build
```

Resultado: **exitoso**

Resumen:

- Astro 5.17.1.
- 10 paginas reales generadas.
- Redirects estaticos generados.
- Build completo sin errores.
- Tiempo reportado: 13.42s.

## 11. Correcciones realizadas durante esta QA

Se corrigieron solo incumplimientos menores de Sprint 1:

- `src/data/contact.ts`: tipos de proyecto con acentos correctos en `Página web` y `Automatización`.
- `src/components/LeadForm.tsx`: labels asociados con `htmlFor/id`, atributos `name`, `autoComplete`, `type="tel"` y textos visibles con acentos.
- `src/layouts/Layout.astro`: soporte para mensaje WhatsApp contextual.
- `src/pages/index.astro`: mensaje WhatsApp general explicito.
- `src/pages/servicios/index.astro`: mensaje WhatsApp contextual de servicios.
- `src/pages/productos/index.astro`: mensaje WhatsApp contextual de productos.
- `src/pages/productos/booking.astro`: mensaje WhatsApp contextual de Booking.
- `src/pages/productos/eam.astro`: mensaje WhatsApp contextual de EAM.
- `src/pages/planes.astro`: mensaje WhatsApp contextual de planes.

## 12. Pendientes reales antes de Sprint 2

Pendientes no bloqueantes:

- Confirmar email publico definitivo, actualmente `hola@baselogic.dev`.
- Confirmar numero WhatsApp publico definitivo, actualmente `+56 9 8775 1255`.
- Limpiar componentes antiguos no usados despues de validar que Sprint 1 queda aprobado.
- Eliminar paginas antiguas cubiertas por redirects si ya no se necesitaran como referencia.
- Definir proveedor real del formulario antes de Sprint 3.

Conclusion: Sprint 1 queda listo para aprobacion funcional y avance a Sprint 2.
