# Estado de Batch 3 — EAM Minería

Fecha de cierre: 2026-07-22

## 1. Objetivo del batch

Explorar una dirección visual específica para BaseLogic EAM orientada a minería chilena y empresas contratistas, manteniendo todos los candidatos fuera de `public/` hasta completar dirección de arte, QA visual y una aprobación formal.

## 2. Variantes existentes

| Variante | Archivo | Estado | Evidencia |
|---|---|---|---|
| V1 | `eam-mining/eam-mining-hero-v1.webp` | Rechazada | Dictamen formal en `eam-mining/EAM_MINING_SELECTION_REVIEW.md` |
| V2 | `eam-mining/eam-mining-hero-v2.webp` | Rechazada | Dictamen formal en `eam-mining/EAM_MINING_SELECTION_REVIEW.md` |
| V3 | `eam-mining/eam-mining-hero-v3.webp` | Rechazada | Dictamen formal en `eam-mining/EAM_MINING_SELECTION_REVIEW.md` |
| V4 | `eam-mining/eam-mining-hero-v4.webp` | Rechazada | Dictamen formal en `eam-mining/EAM_MINING_SELECTION_REVIEW.md` |
| V5 | `eam-mining/eam-mining-hero-v5.webp` | Rechazada; pendiente de regeneración | Dictamen formal en `eam-mining/EAM_MINING_V5_V6_SELECTION_REVIEW.md`; logo Toyota, patente y pseudo-texto |
| V6 | `eam-mining/eam-mining-hero-v6.webp` | Rechazada; pendiente de regeneración | Dictamen formal en `eam-mining/EAM_MINING_V5_V6_SELECTION_REVIEW.md`; texto, pseudo-texto, marcas en EPP y falla responsive |
| V7 | `eam-mining/eam-mining-hero-v7.webp` | Aprobada para selección visual | Dictamen formal en `eam-mining/EAM_MINING_V7_V8_SELECTION_REVIEW.md`; sin descarte automático; no integrada |
| V8 | `eam-mining/eam-mining-hero-v8.webp` | Candidata condicionada a edición localizada | Dictamen formal en `eam-mining/EAM_MINING_V7_V8_SELECTION_REVIEW.md`; pseudo-lettering en neumático, pseudo-texto en tablet y marca en casco |

Los ocho archivos son WebP decodificables de 1920 × 1200 px (16:10). V1–V4 están caracterizadas técnicamente en el dictamen existente. Las versiones actuales de V5 y V6 reemplazaron localmente a los binarios del commit `f0aed1a`: V5 pesa 421.724 bytes (411,84 KiB; SHA-256 `e0755b4f21a35708f5a4aec70be7a54987cb9dc1f73b65a679a0dca918c6fb87`) y V6 pesa 449.856 bytes (439,31 KiB; SHA-256 `914205748256d6a08ad5789febab03890bff54f6bcb965ff03a1692d2010a383`). V7 pesa 420.092 bytes (410,25 KiB; SHA-256 `14b2c1b562e1fa98e5928f441dbc5aeed08d3c4e2df43e19611a592089ec5f47`) y V8 pesa 386.504 bytes (377,45 KiB; SHA-256 `f774c9a38e3fbe19b336853e103d7a2397575ac2736e25a331f7eb06ecc6c002`).

## 3. Variantes rechazadas

V1, V2, V3 y V4 están formalmente rechazadas. El dictamen concluye que no alcanzan calidad editorial ni fotorealismo y que presentan maquinaria, anatomía, seguridad operacional y comportamiento responsive insuficientes.

## 4. QA de V5 y V6 concluido

V5 y V6 quedan formalmente rechazadas y pendientes de regeneración. V5 mejora con claridad el foco minero y la credibilidad del CAEX, pero activa descarte automático por logo Toyota, patente y pseudo-texto. V6 comunica mejor mantenimiento/orden de trabajo, pero activa descarte por texto legible, pseudo-texto y marcas en EPP; además falla seguridad y crop mobile. El dictamen completo está en `eam-mining/EAM_MINING_V5_V6_SELECTION_REVIEW.md`.

## 5. Variante aprobada

V7 queda aprobada para selección visual. El dictamen no autoriza integración pública. V8 queda condicionada a edición localizada y nueva QA; no está aprobada en su archivo actual.

## 6. Integración pública

No existe integración pública de Batch 3. No hay copias de `eam-mining-hero-v1` a `eam-mining-hero-v8`, rutas `visual-review` ni archivos de este lote dentro de `public/`. El asset público EAM aprobado de Batch 1 permanece sin modificaciones.

## 7. Próximo paso

Mantener V7 fuera de `public/` como selección aprobada. Si se continúa con V8, limpiar únicamente el pseudo-lettering del neumático, el pseudo-texto de la tablet y la marca del casco, y repetir QA a 100%/200%. Cualquier optimización o eventual integración pública debe realizarse en una tarea y commit separados.
