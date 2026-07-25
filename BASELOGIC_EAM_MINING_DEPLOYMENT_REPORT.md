# BaseLogic EAM — Reporte de despliegue y smoke test

Fecha: 2026-07-23  
Repositorio: `C:\Users\nicol\Documents\baselogic-web`  
Rama: `master`

## 1. Estado Git antes del push

- `HEAD`: `cf64780cd3f3cdb065363159b0aa8c317df18cce`.
- `origin/master`: `f0aed1a348e9ab7cc39680df8eb2406410cc2dc4`.
- Working tree limpio; sin staged, untracked ni divergencia.
- Exactamente dos commits por delante.
- El commit documental contiene únicamente nueve archivos de Batch 3.
- El commit de implementación contiene únicamente integración EAM, SEO, datos, asset, componente mínimo y reporte.
- No se detectaron `dist/`, secretos, temporales, EduPay ni Sistemas Pymes en el alcance de los dos commits.

## 2. Build previo

`npm.cmd run build` terminó con código 0.

- 17 páginas estáticas.
- 1.708 módulos transformados.
- Sin errores Astro, TypeScript o Vite.
- Asset local: 349.096 bytes.
- SHA-256 local: `86f951a5c4bb10457166785bff1e513e7046d933469c48e6794952457900529f`.
- `dist/images/generated/products/eam-hero.webp` coincide byte a byte con `public/`.

## 3. Resultado del push

Se ejecutó `git push origin master` sin `--force`.

Resultado remoto:

```text
f0aed1a..cf64780  master -> master
```

## 4. Sincronización Git posterior

- `HEAD`: `cf64780cd3f3cdb065363159b0aa8c317df18cce`.
- `origin/master`: `cf64780cd3f3cdb065363159b0aa8c317df18cce`.
- `git ls-remote origin refs/heads/master`: `cf64780cd3f3cdb065363159b0aa8c317df18cce`.
- Delante/detrás: `0/0`.
- Working tree limpio.

## 5. Evidencia del pipeline de Coolify

No hay acceso al panel ni a logs de Coolify desde este workspace. El repositorio no contiene workflows de GitHub Actions y la API pública de GitHub devolvió cero workflow runs y cero deployments; esto no permite confirmar si Coolify inició o terminó un job.

La aplicación pública se consultó con cache-bust después del push y continuó sirviendo la versión anterior. No se ejecutó redeploy manual.

## 6. Commit desplegado

No es posible confirmar que `cf64780` haya sido desplegado. Git remoto sí está en `cf64780`, pero la aplicación pública aún responde con el contenido anterior de `f0aed1a`.

No hay evidencia pública de rollback; el estado observable es simplemente una versión anterior todavía servida.

## 7. Estado del asset público

URL consultada:

`https://baselogic.cl/images/generated/products/eam-hero.webp?v=cf64780`

- HTTP: `200`.
- `Content-Type`: `image/webp`.
- Dimensiones decodificadas: 1920×1200.
- Peso descargado: 127.978 bytes.
- SHA-256 descargado: `5d05d168e29477a5d4a249747bb492dacc0e0d60ca8994bd90e114beee2177bb`.
- `cf-cache-status`: `HIT`.
- `Cache-Control`: `max-age=14400`.
- `Last-Modified`: `Wed, 22 Jul 2026 05:24:09 GMT`.

El hash corresponde al asset anterior, no al esperado `86f951a5c4bb10457166785bff1e513e7046d933469c48e6794952457900529f`. También se probó con varios parámetros de cache-bust; no se limpió caché manualmente.

## 8. Estado de `/productos/eam`

La URL responde HTTP 200, pero conserva el contenido anterior:

- H1 actual: `BaseLogic EAM`.
- Eyebrow actual: `Producto avanzado`.
- Alt actual: supervisor revisando una operación industrial.
- FAQ actuales: 3.
- `object-position` efectivo: `50% 50%`.
- El nuevo H1, eyebrow, alt y las cuatro FAQ no están presentes.

No aparecen referencias públicas a V7, V8, `visual-review` ni marcas CAT, Caterpillar, Komatsu o Toyota.

## 9. SEO y JSON-LD observado

La página pública todavía expone metadata anterior:

- Title: `Gestion de activos, mantenimiento e inventario | BaseLogic EAM`.
- Description: `BaseLogic EAM permite gestionar activos, mantenimiento, inventario, ordenes de trabajo y operaciones para mineria y empresas medianas.`
- Canonical: `https://baselogic.cl/productos/eam`.
- Open Graph coincide con ese title y description antiguos.
- `SoftwareApplication`: presente.
- `FAQPage`: presente.
- `BreadcrumbList`: no detectado en el HTML público actual.

El SEO nuevo no puede darse por verificado hasta que el despliegue refleje `cf64780`.

## 10. QA responsive en producción

Se midieron los cinco viewports sobre la versión pública actualmente servida:

| Viewport | H1 visible | CTA visible | Imagen cargada | Overflow | Foco efectivo | Estado público |
|---|---:|---:|---:|---:|---|---|
| 320×568 | Sí, antiguo | Sí | Sí | No | 50% 50% | Viejo |
| 390×844 | Sí, antiguo | Sí | Sí | No | 50% 50% | Viejo |
| 768×1024 | Sí, antiguo | Sí | Sí | No | 50% 50% | Viejo |
| 1366×768 | Sí, antiguo | Sí | Sí | No | 50% 50% | Viejo |
| 1440×900 | Sí, antiguo | Sí | Sí | No | 50% 50% | Viejo |

La imagen se decodifica como 1920×1200 y no hay doble icono visible en estado cerrado. La FAQ existente abre correctamente, pero solo hay tres entradas antiguas.

La captura CDP de la página pública agotó el tiempo de espera y una segunda pestaña se cerró durante `Page.captureScreenshot`; por ello no se aceptan capturas visuales como evidencia del nuevo diseño. Se conservaron las mediciones DOM/HTTP y se documenta esta limitación en lugar de presentar capturas de otra versión como producción.

## 11. Regresión de otras rutas

Las siguientes rutas públicas respondieron HTTP 200, con un H1 y sin imágenes rotas:

| Ruta | HTTP | H1 | Imágenes rotas |
|---|---:|---:|---:|
| `/` | 200 | 1 | 0 |
| `/productos` | 200 | 1 | 0 |
| `/productos/booking` | 200 | 1 | 0 |
| `/contacto` | 200 | 1 | 0 |
| `/servicios` | 200 | 1 | 0 |

## 12. Errores de consola

La consola del navegador no reportó errores ni warnings durante la comprobación pública de `/productos/eam`.

## 13. Incidencias detectadas

1. El push se completó y Git quedó sincronizado.
2. La publicación automática todavía no refleja `cf64780`.
3. El asset público sigue siendo el anterior y está servido desde Cloudflare con `HIT`.
4. El panel/logs de Coolify no están disponibles desde este entorno.
5. Las capturas visuales públicas no pudieron completarse por timeout/cierre del target del navegador.

## 14. Acciones tomadas

- Se verificó la rama y la ausencia de divergencia antes de publicar.
- Se ejecutó el build final.
- Se publicó con `git push origin master`, sin force.
- Se comprobó `HEAD`, `origin/master` y `git ls-remote` después del push.
- Se consultaron página y asset con cache-bust.
- Se esperaron tres ventanas acotadas de propagación y se repitieron las consultas.
- No se hizo redeploy manual.
- No se borraron cachés.
- No se modificó ningún archivo de código, imagen o copy.

## 15. Pendientes no bloqueantes

- Confirmar en Coolify el inicio, build, salud y commit del deployment automático.
- Repetir el hash del asset público hasta obtener 349.096 bytes y `86f951a5c4bb10457166785bff1e513e7046d933469c48e6794952457900529f`.
- Repetir el smoke test de `/productos/eam` y guardar capturas aceptadas a 390×844 y 1440×900 cuando la versión nueva esté servida.
- Validar el nuevo title, description, BreadcrumbList, SoftwareApplication y FAQPage en HTML público.

## 16. Dictamen técnico

El código y los commits están publicados correctamente en Git, pero el dominio público todavía no refleja la implementación EAM aprobada. No corresponde aprobar el despliegue ni limpiar cachés mientras el pipeline automático siga sin evidencia observable.

## 17. Conclusión

**PUSH COMPLETADO: el despliegue aún no refleja el nuevo commit**
