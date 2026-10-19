# Prompt — continue ARAL product-table work from GitHub

@GitHub

We continue maintaining the ARAL product database in repository:

https://github.com/AlexALP9/ARAL-

Do not ask me to re-upload project files if they are available in GitHub.

Start by reading:

1. current/product-work/README.md
2. current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv
3. current/master/ARAL_PRODUCT_MASTER_v1.2.json
4. current/content/ARAL_CONTENT_LAYER_v1.2.json
5. current/content/ARAL_PDS_ACCEPTANCE_MAP_v1.md
6. current/catalog/ARAL_PUBLIC_CATALOG_v1.json
7. current/catalog/ARAL_PUBLIC_CATALOG_INTEGRITY_REPORT_v1.md
8. current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json

Use media/production/ when exact SKU images are needed.

MAIN GOAL:
continue completing the working product table: add official URLs, PDS/SDS links, verified product pages, B2B/B2C purchase links, image verification, source notes, conflicts, and action statuses.

SOURCE PRIORITY:
1. User assortment controls which products, commercial names, SKU and package.
2. ARAL_PRODUCT_MASTER_v1.2 is the frozen technical authority.
3. Accepted official PDS controls current technical claims and typical characteristics.
4. Official SDS is separate and never substitutes for PDS.
5. CONTENT_LAYER is content only, not a replacement for technical data.
6. Images verify visual SKU/package identity only.
7. Retail/wholesale pages are commercial sources, not technical authorities.

CRITICAL RULE:
Never silently overwrite confirmed data when a new source disagrees.

For every conflict show:
- Current value
- New value
- Source
- Possible reason
- Recommended action

Then wait for my decision before changing authoritative technical fields.

LINK HANDLING:
When I send a URL:
1. identify product/internal_id and SKU if possible;
2. classify the URL: official product / PDS / SDS / image / B2B purchase / B2C purchase / additional source;
3. verify name, SAE, SKU, package and version where possible;
4. propose exactly which working-table column should receive it;
5. only then update the working table.

For each link keep:
- URL
- source type
- what it proves
- last checked date
- status: VERIFIED / REVIEW_REQUIRED / BROKEN / ARCHIVED.

IMAGE RULE:
Join exact internal_id + SKU + volume.
Do not substitute a similar package.
If a photo label conflicts with MASTER/PDS, record IMAGE_LABEL_CONFLICT and do not change technical data from the image.

PDS / SDS:
Keep separate.
Do not use one product's document for another product.
Preserve approval / meets / recommended / application-reference distinctions.

COMMERCIAL LINKS:
Use separate columns:
- official_product_url
- skladspk_url
- retail_url
- additional_verified_url
- purchase_link_type

purchase_link_type:
DIRECT_PRODUCT / CATEGORY / HOMEPAGE / MISSING

Do not invent URLs.
Do not replace a missing direct product link with a homepage without marking its type.

WORKING FILE:
current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv

Work on this file as the editable operational table.
Do not modify the frozen MASTER unless I explicitly instruct you to create a new reviewed MASTER version.

After each edit report only:
CHANGED:
...
UNCHANGED:
...
REQUIRES REVIEW:
...

First task in this new chat:
read the GitHub files above, audit the current working table, and tell me which link/status columns are still empty and what should be filled next.
Do not make speculative technical corrections.
