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
| V5 | `eam-mining/eam-mining-hero-v5.webp` | Pendiente de QA formal | Candidato recuperado desde `scratch/test_v5_flux.webp`; sin dictamen previo |
| V6 | `eam-mining/eam-mining-hero-v6.webp` | Pendiente de QA formal | Candidato recuperado desde `scratch/v6_cand1.webp`; sin dictamen previo |

Los seis archivos son WebP decodificables de 1920 × 1200 px (16:10). V1–V4 están caracterizadas técnicamente en el dictamen existente. V5 pesa 248.486 bytes (242,66 KiB; SHA-256 `73a149e8a388a3d9b8856ccb9fa8d470e06eaf6db974f04a1eff53f24ed3b4c5`) y V6 pesa 278.632 bytes (272,10 KiB; SHA-256 `f4c16df25772c76e1af613fa1632bfc53e2d88e5f1776f47df3780470a16f94b`).

## 3. Variantes rechazadas

V1, V2, V3 y V4 están formalmente rechazadas. El dictamen concluye que no alcanzan calidad editorial ni fotorealismo y que presentan maquinaria, anatomía, seguridad operacional y comportamiento responsive insuficientes.

## 4. Variantes pendientes de QA

V5 y V6 quedan preservadas como exploraciones pendientes. La revisión de ingreso confirmó formato, dimensiones, integridad y visualización, pero no constituye aprobación ni reemplaza un dictamen de dirección de arte. El QA posterior debe revisar especialmente marcas o pseudotexto, coherencia mecánica, seguridad, EPP, tecnología secundaria, crop 4:5 y crop 1:1.

## 5. Variante aprobada

No existe ninguna variante aprobada en Batch 3.

## 6. Integración pública

No existe integración pública de Batch 3. No hay copias de `eam-mining-hero-v1` a `eam-mining-hero-v6`, rutas `visual-review` ni archivos de este lote dentro de `public/`. El asset público EAM aprobado de Batch 1 permanece sin modificaciones.

## 7. Próximo paso

Al retomar el trabajo, ejecutar QA visual formal de V5/V6 con los tres encuadres del visor, emitir un dictamen explícito de rechazo o aprobación y solo entonces decidir si se genera un nuevo micro-batch. Cualquier eventual integración pública debe realizarse en una tarea y commit separados.
