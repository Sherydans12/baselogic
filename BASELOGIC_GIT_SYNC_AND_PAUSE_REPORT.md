# BaseLogic — Reporte de sincronización Git y pausa

Fecha: 2026-07-22

Repositorio: `C:\Users\nicol\Documents\baselogic-web`

Rama: `master`

## 1. Estado inicial

- HEAD local inicial: `c1181abb8eae4f56d4b8d7466e89ee0f1a0e8e46` (`chore: sanitize visual governance and mobile menu QA`).
- Rama `master`, tres commits por delante de `origin/master`.
- No había archivos tracked modificados ni archivos staged.
- Untracked iniciales: `scratch/` y `visual-review/batch-3/`.

## 2. Estado remoto inicial

Después de `git fetch origin --prune`, `origin/master` permanecía en `cf35b61` (`feat: relaunch BaseLogic website for production`). No existía avance remoto ni divergencia; el historial local era un avance lineal de tres commits.

## 3. Commits locales auditados

1. `6f7c38d2a3abb6055d9d071b641e6206ef5477d5` — `feat: add first approved visual assets`.
   - Incorpora Home V1 y Booking V2, componentes/datos de integración y Batch 1 inicial.
   - Los hashes SHA-256 confirman que los archivos públicos son copias exactas de `home-hero-v1.webp` y `booking-hero-v2.webp`.
2. `e7a720e520a59b72921d5ffa26c45e399df444b8` — `feat: add approved EAM visual asset`.
   - Incorpora EAM V6, su integración y documentación QA.
   - El hash SHA-256 confirma que el asset público EAM es copia exacta de `visual-review/batch-1/eam/eam-hero-v6.webp`.
3. `c1181abb8eae4f56d4b8d7466e89ee0f1a0e8e46` — `chore: sanitize visual governance and mobile menu QA`.
   - Completa gobernanza visual de Batch 1/2 y corrige objetivamente el cambio de icono del menú móvil.

Los tres commits fueron revisados con `git show --stat`, `git show --name-status` e inspección de sus cambios de código. No contienen secretos detectables, `dist/`, temporales, caches ni cambios a `package.json` o `package-lock.json`. No se detectó mezcla ajena a sus alcances. Se preservaron sin squash, rebase ni reescritura.

## 4. Contenido y resolución de `scratch/`

Inventario registrado antes de eliminar temporales:

| Archivo original | Clasificación | Resolución |
|---|---|---|
| `scratch/test_v5_flux.webp` | Fuente única válida de exploración V5; WebP íntegro 1920×1200 | Preservar sin recodificar como `visual-review/batch-3/eam-mining/eam-mining-hero-v5.webp` |
| `scratch/v6_cand1.webp` | Fuente única válida de exploración V6; WebP íntegro 1920×1200 | Preservar sin recodificar como `visual-review/batch-3/eam-mining/eam-mining-hero-v6.webp` |
| `scratch/test_v5_flux.jpg` | Resultado intermedio JPG 971×607 del mismo contenido que V5 | Prescindible; eliminar después de registrar. SSIM frente al WebP reducido: 0,993152 |
| `scratch/v6_cand1.jpg` | Resultado intermedio JPG 971×607 del mismo contenido que V6 | Prescindible; eliminar después de registrar. SSIM frente al WebP reducido: 0,991969 |

Los JPG no son documentación, capturas externas ni fuentes únicas: son exportaciones de prueba redundantes y de menor resolución. `scratch/` no se agrega a `.gitignore`, porque no se comprobó que sea una carpeta deliberada y recurrente del flujo.

## 5. Estado de Batch 3

- V1–V4: WebP íntegros 1920×1200, formalmente rechazados en `EAM_MINING_SELECTION_REVIEW.md`.
- V5–V6: WebP íntegros 1920×1200 recuperados desde `scratch/`; pendientes de QA formal, sin aprobación inventada.
- Ninguna variante de Batch 3 está aprobada.
- No existe integración ni copia pública del lote.
- El visor queda preparado con una tarjeta por cada variante y vistas original, 4:5 y 1:1.

## 6. Archivos incluidos en el commit nuevo

- `BASELOGIC_GIT_SYNC_AND_PAUSE_REPORT.md`.
- `visual-review/batch-3/STATUS.md`.
- Documentos y visor existentes de `visual-review/batch-3/eam-mining/`.
- Seis candidatos WebP de Batch 3, todos fuera de `public/`.

## 7. Archivos excluidos

- Los dos JPG intermedios registrados en la sección 4.
- La carpeta `scratch/` una vez vacía.
- `dist/`, `node_modules/`, caches, secretos, credenciales, `.env`, capturas externas y cualquier asset público nuevo.

## 8. Resultado del build

`npm.cmd run build` terminó con exit code 0. Astro informó 17 páginas estáticas, 1.708 módulos transformados y finalización completa sin errores de Astro, TypeScript o Vite. La ejecución de verificación final terminó en 4,27 s según Astro.

No se encontraron archivos, directorios ni referencias de Batch 3, `visual-review` o `_review` dentro de `dist/`.

## 9. Resultado de barridos

Los barridos recursivos de `src/`, `public/` y `dist/` no encontraron coincidencias para:

- `wa.me`;
- `87751255`;
- `baselogic.dev`;
- `hola@baselogic.dev`;
- `visual-review`;
- `_review`;
- `eam-mining-hero-v`;
- nombres directos de variantes Batch 2 (`edupay-hero-v*`, `paginas-web-hero-v*`, `products-ecosystem-hero-v*`, `sistemas-pymes-hero-v*`).

La comparación SHA-256 de todos los candidatos Batch 3 contra todos los archivos de `public/` no encontró copias. El barrido de patrones de secretos sobre los commits pendientes, Batch 3 y este reporte no encontró coincidencias.

## 10. Historial final antes del push

El historial que se enviará es lineal sobre `cf35b61`:

1. `6f7c38d` — `feat: add first approved visual assets`.
2. `e7a720e` — `feat: add approved EAM visual asset`.
3. `c1181ab` — `chore: sanitize visual governance and mobile menu QA`.
4. El commit documental `chore: archive EAM mining visual exploration`, que contiene Batch 3 y este reporte.

El hash del cuarto commit se asigna al crear el objeto Git y se registra en la entrega final. Incluir dentro del propio commit su hash exacto sería una referencia circular que cambiaría ese mismo hash.

## 11. Resultado del push

El reporte se crea obligatoriamente antes del push. Por ello, el resultado operativo posterior se registra en la entrega final, junto con la evidencia de `git ls-remote`; no se afirma anticipadamente que el push haya tenido éxito.

## 12. HEAD local final

Será el commit `chore: archive EAM mining visual exploration` que contiene este reporte. Su hash exacto se verifica y registra inmediatamente después de crearlo.

## 13. HEAD remoto final

Debe coincidir exactamente con el HEAD local descrito en la sección 12. La comprobación autoritativa se realiza después del push con `git fetch origin`, `git rev-parse origin/master` y `git ls-remote origin refs/heads/master`, y se registra en la entrega final.

## 14. Estado final del working tree

Objetivo previo y posterior al push: working tree limpio, sin archivos untracked y sin `scratch/`. La verificación autoritativa se registra en la entrega final.

## 15. Estado esperado de Coolify

Si Coolify permanece conectado a `master`, el push debería activar su pipeline automático. No se hará redeploy manual y no se afirmará el resultado del despliegue sin evidencia externa.

## 16. Pendientes para retomar posteriormente

- Ejecutar QA visual formal de EAM Minería V5/V6.
- Emitir un dictamen explícito, sin asumir aprobación.
- Mantener Batch 3 fuera de producción hasta una aprobación formal y una tarea de integración separada.
