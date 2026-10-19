# ARAL product work — source index

This folder is the working entry point for ordinary ChatGPT sessions that maintain the ARAL product table.

## Working table

- `current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv`
  - 47 SKU rows derived from the frozen technical MASTER.
  - One row per SKU/package variant.
  - Includes reserved columns for official product URLs, PDS/SDS, B2B/B2C purchase links, source notes, conflicts and actions.
  - Do not silently overwrite technical fields when a new source disagrees.

## Canonical sources already in this repository

Technical authority:
- `current/master/ARAL_PRODUCT_MASTER_v1.2.json`
- `current/master/ARAL_PRODUCT_MASTER_v1.2.md`

Content layer:
- `current/content/ARAL_CONTENT_LAYER_v1.2.json`
- `current/content/ARAL_CONTENT_LAYER_v1.2.md`

PDS acceptance:
- `current/content/ARAL_PDS_ACCEPTANCE_MAP_v1.md`

Public catalog:
- `current/catalog/ARAL_PUBLIC_CATALOG_v1.json`
- `current/catalog/ARAL_PUBLIC_CATALOG_v1.md`
- `current/catalog/ARAL_PUBLIC_CATALOG_INTEGRITY_REPORT_v1.md`

Media:
- `current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json`
- `current/media/ARAL_PRODUCTION_MEDIA_REPORT_v1.md`
- `media/production/`

Runtime site catalog:
- `catalog.json`
- This is a runtime artifact, not the technical authority.

## Source priority

1. User assortment controls products, commercial name, SKU and package.
2. Frozen MASTER controls technical/publication status.
3. Accepted official PDS controls API/ACEA/OEM/typical characteristics.
4. Official SDS is a separate safety source.
5. CONTENT_LAYER controls prepared content, not technical truth.
6. Exact product/SKU image controls visual representation only.
7. Retail/B2B pages are commercial links and must not be treated as technical sources.

## Conflict rule

Never silently replace a confirmed value. Record:
- current value,
- new value,
- source,
- likely reason,
- recommended action,
then wait for approval.

## Known item to review

ARAL-003 / SKU 20634 / 4 L:
current image label shows ACEA A3/B4 and MB 229.3/229.5 while the current MASTER uses ACEA C3 and MB-Approval 229.31/229.51.
Treat this as `IMAGE_LABEL_CONFLICT`; do not change MASTER technical data from the photo.

## Chat starter

Use:
- `current/product-work/CHAT_PROMPT_PRODUCT_TABLE.md`

The ordinary chat should read files from GitHub first. No manual re-upload is required when the GitHub connector is available.
