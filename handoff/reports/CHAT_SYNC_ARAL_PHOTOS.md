# ARAL — PRODUCT / MEDIA / SKU chat synchronization

**Date:** 2026-10-22  
**Origin:** product photography and Excel approval conversation.  
**Scope:** inventory and safe handoff, not publication or replacement of canonical product data.  
**Base:** `main` tree `ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31` (172 files).

## Confirmed inventory

- 17 products and 47 unique SKU/volume mappings agree across `current/master/ARAL_PRODUCT_MASTER_v1.2.json`, `current/catalog/ARAL_PUBLIC_CATALOG_v1.json`, `current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv`, `current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json`, and `current/media/ARAL_MEDIA_MANIFEST.json`.
- `media/production/` already contains 47 SKU-addressed files (42 JPG, 5 PNG). Every one of the 47 embedded Excel preview image binaries was previously checked against the corresponding Git blob in `main`; 47/47 matched byte-for-byte, yielding 36 distinct SHA-256 values because generic drums are reused. **Do not upload them again.**
- `ARAL_catalog_final.xlsx` is the approved operational 3-sheet workbook with 47 embedded 112×112 preview images; statuses: 45 `Готово`, one `Требует обработки`, one `На проверке`. SHA-256: `07c053251a6d9fe9d38356c37acea68ece31e716ec8a8f22ce5d7c6418dbef28`, size 11,887,734 bytes.
- `ARAL_реестр_фото_с_пометкой.xlsx` has the same SHA-256 and must **not** be uploaded as a second workbook. Earlier Excel versions and historical ZIPs are superseded.
- The final XLSX is **not** in `main`; proposed location if separately cleared for publication: `current/product-work/ARAL_catalog_final.xlsx`. This is an internal working artifact and may reveal source details; do not publish to a public repository without privacy/IP review. It is on the user's private Google Drive.
- Neither approved PDS/SDS, frozen MASTER, working CSV, nor runtime site was changed by this handoff.

## Actual path conflicts: five SKU images

The working CSV and `media/production/` point to `.png` files, but production media map AND public catalog link these five SKUs to non-existent `.webp` names within the production directory:

| internal_id | SKU | volume | Existing production file | Conflicting JSON target |
|---|---|---|---|---|
| ARAL-012 | 15F45F | 1 L | `ARAL-012_15F45F_1L.png` | `ARAL-012_15F45F_1L.webp` |
| ARAL-012 | 15F460 | 5 L | `ARAL-012_15F460_5L.png` | `ARAL-012_15F460_5L.webp` |
| ARAL-013 | 10625 | 5 L | `ARAL-013_10625_5L.png` | `ARAL-013_10625_5L.webp` |
| ARAL-015 | 22003 | 20 L | `ARAL-015_22003_20L.png` | `ARAL-015_22003_20L.webp` |
| ARAL-016 | 11281 | 20 L | `ARAL-016_11281_20L.png` | `ARAL-016_11281_20L.webp` |

**Decision:** CONFLICT / REVIEW_REQUIRED. Fixing these targets involves a protected public catalog; not authorized in this PR. Existing media manifest records 47 lossless WebP and original sources under `media/web/` and `media/originals/`, but neither directory is in the currently checked `main` tree. Those historic conversion records do not establish present files on GitHub.

## Other exceptions

1. **HighTronic 5W-40**, `ARAL-003 / 20634 / 4 L`: the existing image label states ACEA A3/B4 and MB 229.3/229.5 while frozen MASTER contains ACEA C3 and MB-Approval 229.31/229.51 (already in product-work README and CSV). The user reportedly found a replacement elsewhere, but **no newly confirmed 4-L replacement resolving this conflict is accessible in this chat**. The local 4-L candidates appear to be the old technical revision; the 5-L pack or other HighTronic variants must not be substituted. Image change requires approved original and a separate branch/PR. Do not change performance values.
2. **ExtraTurboral**, `ARAL-015 / 22003 / 20 L`: image reads "Turboral", while commercial name says "ExtraTurboral". User explicitly approved leaving image intact and adding a small note. XLSX row 42 status `На проверке`; preserve it.
3. **SuperTronic Longlife III**, `ARAL-011 / 15F474 / 1 L`: image exists; XLSX row 32 status `Требует обработки`.
4. Workbook provenance fields I/J/K contain placeholder `27` for `15F45F`, `15F460`, `10625`, `22003`, and `11281`. Do not fabricate original names or links.
5. `ARAL_MEDIA_MANIFEST.json` lists 47 original files and 47 lossless WebP as successfully processed at manifest-creation time. Original backups have not been reverified in `main`.
6. Existing `MISSING_FILES.md` is stale relative to current `main`; do not overwrite as part of this narrow chat handoff.

## Approved decisions

- One image per `internal_id + SKU + volume`; truthful container volume and variant.
- Consistent white-background product presentation, 112×112 Excel preview footprint.
- Common generic drums for 208 L and 60 L; no invented product-specific drum label.
- Approved SuperTronic K 5 L (`15F477`) and MegaTurboral 5 L (`10625`) images already exactly match `main`.
- Do not substitute a different volume, product family, or outdated label.

## Transfer decision

**ALREADY_PRESENT:** 47/47 production SKU images; working CSV and existing manifests/catalog/master.  
**NEW_UNIQUE:** this markdown report only, placed at `handoff/reports/CHAT_SYNC_ARAL_PHOTOS.md`.  
**NEW_UNIQUE / SENSITIVE / MANUAL:** `ARAL_catalog_final.xlsx`, leave outside public GitHub pending approval and binary transfer capability.  
**MISSING_SOURCE:** new, technically consistent approved HighTronic `20634 / 4 L` image; original source paths for some historical photos.  
**SUPERSEDED:** earlier 19/29/39/40/41-image workbooks, test files, duplicate renamed workbook.  
**CONFLICT:** 5 mismatched PNG/WebP image paths; HighTronic 20634, ExtraTurboral 22003 label; 5 provenance placeholders.  
**NOT MODIFIED:** `current/master/`, `current/content/`, `current/catalog/`, `current/media/`, `media/production/`, `catalog.json`, `assets/` and publication status.

This report is a handoff for review, **not** authorization to merge or alter protected data.
