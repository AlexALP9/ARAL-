# Five PNG / WebP paths: options for a later approved change

Scope: analysis only. Neither A nor B is implemented by this PR.
Baseline: `ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31`.

## Current constraint

`.github/workflows/pages.yml` copies every entry of `media/production/` into
`_site/media/production/` and asserts `len(images) == 47`. Adding five files to
the existing 47 would create 52 entries and fail Pages. That approach is rejected.
The workflow runs on pushes to main or manual dispatch; this audit PR does not
change the workflow or deploy a site.

Current main has 42 JPG + 5 PNG. Canonical public catalog and production map
reference five absent WebP paths. Runtime `catalog.json` and the working CSV use
the existing PNG files. Runtime has no non-image differences from the canonical
catalog. Local production has 42 JPG + 5 WebP. The five PNG/WebP pairs have
identical decoded RGBA pixels and dimensions (1100 x 1100); no quality tradeoff
is needed. `MEDIA_V2_VERIFIED_RESULTS.json` records all ten hashes and sizes.

| Area | A: retain PNG, correct canonical references | B: replace five production PNG with existing lossless WebP |
|---|---|---|
| PUBLIC CATALOG | Change only the five image URL values in canonical JSON; update matching Markdown link labels/targets. No product, SKU or technical edits. | Canonical JSON/Markdown image URLs already use WebP; revalidate them without changing product data. |
| Production media map | Five `.webp` image values become `.png`; corresponding five `format` values become `png`. | WebP URLs/formats already match the proposed files; revalidate. |
| Runtime catalog.json | Already points to PNG: no functional change needed. | Change five PNG URLs to WebP, with no other field changes. |
| Working CSV | Existing `canonical_image_path` and `repo_image_path` already use PNG for these five SKU; verify all 47 mappings, normally no edit needed. | Update both image-path columns for five rows. Preserve all commerce, technical and user-note cells. |
| HERO | PNG references in HERO/03 and HERO/04 remain valid. Live index.html currently uses a different JPG and is unaffected. No motion/design change. | Update PNG references for 15F45F and 22003 in HERO/03 and HERO/04 and any subsequent consumers found by a full path search. Keep approved composition and motion unchanged. Live JPG Hero still needs no image change. |
| GitHub Pages | Remains 42 JPG + 5 PNG = 47. No binary edits or CI relaxation. | Remove exactly five PNG and add exactly five WebP in ONE atomic commit: 42 JPG + 5 WebP = 47. Never publish an intermediate 52- or 42-file state. No CI relaxation. |
| Original images | All originals, URLs and bytes remain where they are. | Preserve original PNG bytes in existing root source copies/local archive; do not delete originals elsewhere or upload duplicate archives. Replacing production filenames invalidates old production PNG URLs unless a separately approved redirect layer exists. |
| Quality | Unchanged original pixels. | Same decoded RGBA/dimensions, no new encoding or generation. |
| Transfer size | Existing production remains 12,063,470 bytes. | Becomes 10,647,988 bytes: saving 1,415,482 bytes (11.73% overall; 24.35% for the five pairs). |
| Historical reports | Keep old conversion/audit records as historical. Add a dated verification/disposition note so the original report is not misread as the current deployment. | Same historical-source rule; validate all references against the new atomic file set. |
| Main risks | Protected canonical metadata edits require explicit approval; must update map format as well as URL. | More consumers change, five production files are replaced, and old production URLs cease to resolve. |

## Recommendation

Recommend A for the minimum-change priority: two canonical JSON files, the
matching catalog Markdown links and a dated verification note. No existing
binary, runtime file, CSV or HERO path needs replacing. No loss of quality and
no change to the Pages count. This recommendation is NOT implementation approval.
B is viable if byte savings later justify the broader coordinated migration.

## Acceptance checks for either future option

- Source/technical authority unchanged: frozen MASTER/CONTENT, product names,
  all 47 SKU/volumes and publication gates.
- Exactly 17 products, 47 unique SKU and 47 production files.
- Canonical map, public catalog, runtime and CSV paths agree and resolve.
- Original and approved production hashes preserved or exactly match the selected
  verified lossless pair. No re-encoding, label editing or new AI image.
- Search all live and approved HERO path references; do not blindly edit archives.
- Update current verification evidence without rewriting original historical checks.
- Run Pages assembly assertions and review the five images on the site separately.
- No implementation or deployment occurs in this audit PR.
