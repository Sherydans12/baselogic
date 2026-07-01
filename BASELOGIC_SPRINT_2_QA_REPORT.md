# BaseLogic Sprint 2 QA Report

Fecha: 2026-07-01  
Repositorio: `C:\Users\nicol\Documents\baselogic-web`  
Resultado general: **aprobado con observaciones**

## 1. Resultado general

Sprint 2 queda aprobado funcionalmente para avanzar a la preparacion de Sprint 3, con observaciones menores documentadas.

Durante la QA se corrigieron dos puntos dentro del alcance de Sprint 2:

- Se agrego `public/_redirects` para declarar redirects 301 reales en hosting estatico compatible.
- Se oculto el boton flotante de WhatsApp en mobile para evitar que tape texto; WhatsApp sigue disponible en hero, menu, header/footer y contact bands.

Observacion importante: `astro preview` en modo estatico sirve las paginas de redirect generadas por Astro como `200` con meta refresh. El archivo `dist/_redirects` queda listo para hosting compatible con redirects 301, pero el status 301 debe validarse tambien en el entorno de deploy final.

## 2. Checklist de rutas Sprint 2

Todas las rutas existen, generan HTML y responden `200` desde `dist`:

| Ruta | 200 | H1 unico | Metadata | Canonical | Breadcrumb | CTAs | FAQs | Contact band | Resultado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/servicios/paginas-web` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/servicios/landing-pages` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/servicios/wordpress` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/servicios/sistemas-para-pymes` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/servicios/automatizacion` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/productos/edupay` | OK | OK | OK | OK | OK | OK | OK | OK | OK |
| `/casos-de-exito` | OK | OK | OK | OK | OK | OK | OK | OK | OK |

## 3. Checklist de rutas Sprint 1

Todas las rutas Sprint 1 siguen existiendo y responden `200` desde `dist`:

- `/`
- `/servicios`
- `/productos`
- `/productos/booking`
- `/productos/eam`
- `/planes`
- `/contacto`
- `/legal/privacidad`
- `/legal/terminos`

Validaciones adicionales:

- Home enlaza a las nuevas rutas de servicios, EduPay y casos de uso.
- `/servicios` enlaza a las cinco landings nuevas.
- `/productos` enlaza a Booking, EduPay y EAM.
- Navegacion principal incluye `Casos de uso` y no queda excesivamente larga.
- Footer mantiene navegacion, servicios, productos, contacto y legales de forma ordenada.

## 4. Resultado de redirects antiguos

Se agrego `public/_redirects`, copiado correctamente a `dist/_redirects`, con estas reglas:

| Ruta antigua | Destino | Status configurado |
| --- | --- | --- |
| `/servicios/saas` | `/servicios` | 301 |
| `/servicios/api` | `/servicios` | 301 |
| `/servicios/auditoria` | `/servicios` | 301 |
| `/servicios/eam` | `/productos/eam` | 301 |
| `/en` | `/` | 301 |
| `/en/contact` | `/contacto` | 301 |
| `/en/services/saas` | `/servicios` | 301 |
| `/en/services/api` | `/servicios` | 301 |
| `/en/services/audit` | `/servicios` | 301 |
| `/en/services/eam` | `/productos/eam` | 301 |

Tambien se mantienen las reglas en `astro.config.mjs`. En `astro preview` estas rutas se sirven como paginas estaticas con meta refresh y status `200`, que es una limitacion del preview estatico de Astro. En hosting compatible con `_redirects`, deben responder 301.

## 5. Resultado visual desktop/mobile

Revisado con navegador en desktop `1366x900` y mobile `390x844`.

Resultado:

- Sin overflow horizontal en las siete rutas nuevas.
- Cards dentro del viewport.
- CTAs principales visibles en hero.
- Breadcrumbs visibles y no invasivos.
- Separacion entre secciones correcta.
- Footer presente y ordenado.
- Menu movil abre correctamente, muestra links, CTA y WhatsApp, y queda dentro del viewport.
- Tono visual claro, comercial y no devtools/terminal.
- No se ve excesivamente oscuro ni tecnico.

Correccion aplicada:

- El boton flotante de WhatsApp queda oculto en mobile (`sm:flex`) para no tapar contenido al hacer scroll.

## 6. Resultado comercial por landing

`/servicios/paginas-web`: OK. Vende paginas web profesionales para pymes y empresas en Chile, explica presencia profesional, consultas, celular, WhatsApp, formulario, SEO base y crecimiento por etapas.

`/servicios/landing-pages`: OK. Presenta landing pages para campanas, captacion, validacion de ofertas, anuncios, formularios y WhatsApp.

`/servicios/wordpress`: OK. Explica WordPress como sitio autogestionable, con panel, seguridad, backups y capacitacion. Aclara que no siempre es la mejor opcion y compara con web estatica.

`/servicios/sistemas-para-pymes`: OK. Habla de sistemas simples para ordenar procesos, sin vender un sistema gigante desde el inicio.

`/servicios/automatizacion`: OK. Se enfoca en ahorro de tiempo, reduccion de errores, formularios, notificaciones, recordatorios, seguimiento y reportes. No protagoniza APIs ni jerga tecnica.

## 7. Resultado de EduPay

Estado: OK.

La pagina usa tono confiable y prudente:

- `Conversemos sobre EduPay`.
- `Solicitar evaluacion`.
- `evaluacion comercial`.
- `implementacion segun requerimiento`.

No se presenta como producto final cerrado con promesas excesivas.

## 8. Resultado de casos de uso

Estado: OK.

`/casos-de-exito` deja claro que son:

- casos de uso,
- escenarios tipicos,
- ejemplos de solucion,
- no testimonios reales,
- no clientes inventados.

Los rubros solicitados estan cubiertos: barberia/centro estetico, restaurante/cafeteria, consulta profesional, colegio/jardin y empresa con activos o inventario.

## 9. Resultado de footer y navegacion

Footer:

- Muestra navegacion, servicios activos, productos, contacto y legales.
- No queda sobrecargado.
- Los servicios apuntan a rutas nuevas cuando existen.
- Productos enlazan a Booking, EduPay y EAM.

Navegacion:

- Desktop OK.
- Mobile OK.
- Se usa `Casos de uso` como texto visible, manteniendo URL `/casos-de-exito`.
- CTA principal `Cotizar proyecto` sigue destacado.
- WhatsApp sigue accesible.

## 10. Resultado de WhatsApp contextual

Mensajes contextuales detectados:

- Paginas web: `quiero cotizar una pagina web para mi negocio`.
- Landing pages: `quiero una landing page para una campana o servicio`.
- WordPress: `quiero cotizar un sitio WordPress autogestionable`.
- Sistemas para pymes: `quiero ordenar un proceso de mi pyme con un sistema simple`.
- Automatizacion: `quiero automatizar un proceso repetitivo de mi negocio`.
- EduPay: `quiero consultar por BaseLogic EduPay para una institucion educativa`.
- Casos de uso: `quiero una solucion digital para mi rubro`.

Tambien aparecen mensajes generales desde header/footer, lo cual es correcto para navegacion global.

## 11. Resultado de busqueda de copy antiguo

Se busco en `dist/**/*.html`:

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

Resultado: **sin coincidencias visibles**.

## 12. Resultado SEO base

Rutas nuevas:

- title propio: OK.
- description propia: OK.
- canonical con `https://baselogic.cl`: OK.
- Open Graph base: OK.
- H1 unico: OK.
- breadcrumbs visuales: OK.
- sin metadata heredada antigua: OK.

No se implementaron sitemap, robots, tracking, backend de formulario ni schema avanzado.

## 13. Resultado de build

Comando ejecutado:

```powershell
npm.cmd run build
```

Resultado: **exitoso**.

Resumen:

- Astro 5.17.1.
- 17 paginas reales generadas.
- Build completo sin errores.
- Tiempo final reportado: 6.00s.

## 14. Correcciones realizadas durante QA

- `public/_redirects`: agregado mapa completo de redirects 301 para hosting estatico compatible.
- `src/data/redirects.ts`: actualizado con el mapa completo, incluyendo rutas antiguas `/en`.
- `src/components/WhatsAppButton.astro`: boton flotante oculto en mobile para evitar solapamiento visual.

## 15. Pendientes reales antes de Sprint 3

- Validar redirects 301 en el hosting real o confirmar plataforma final de deploy.
- Confirmar correo publico definitivo del dominio `baselogic.cl`.
- Confirmar si `+56 9 8775 1255` sera el WhatsApp comercial definitivo.
- Mantener backend real de formulario, sitemap, robots, tracking y schema avanzado para Sprint 3.
- Revisar textos finales de EduPay si aparece definicion comercial mas precisa.
