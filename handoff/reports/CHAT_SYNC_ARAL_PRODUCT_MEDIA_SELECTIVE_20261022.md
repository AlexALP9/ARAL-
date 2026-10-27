# PRODUCT / MEDIA selective handoff — 2026-10-22

This is an audit and read-only verification handoff, not a canonical layer,
image replacement, technical approval or website deployment.

## Repository state reviewed

Main at review: `ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31`, 172 tracked files.
Open PR #1–5 remain unmerged. Their changed files were reviewed:
- #1: frontend audit report only; code already in main.
- #2: 19 HERO source/reference/history and handoff files.
- #3: photo/SKU audit report only; no photo bytes added.
- #4: three design/motion documentation files.
- #5: technical audit report only; no PDF bytes added.
None of the six files in this handoff exists in main or those PR change lists.
No existing file is replaced by this PR. Main data/media matching is verified
from the Git objects for the live main commit, not from an unverified checkout HEAD.

## Six additions only

1. `handoff/product-media/20261022/ARAL_PRODUCTION_MEDIA_AUDIT_v1.json`:
   historical source audit; only two personal root paths replaced and a projection
   notice added. All source hashes, sizes, 47 records and historical checks retained.
   It does not claim the local conversion/candidate folders exist in GitHub.
2. `handoff/product-media/20261022/MEDIA_V2_VERIFIED_RESULTS.json`:
   selected current source verification and 47 original-image records. Not a new
   canonical media layer, never an automatic input to the site.
3. `handoff/product-media/20261022/ARAL_MEDIA_REVIEW_QUEUE_v1.md`:
   exact source bytes of the user-updated background/visual queue.
4. `handoff/product-media/20261022/MEDIA_PATH_OPTIONS.md`:
   A/B analysis and recommendation only; 52 production files are forbidden.
5. `scripts/audit/verify_product_media.py`:
   portable Python-standard-library, read-only media and hash checker.
6. This handoff report.

## Fresh source checks

- 17 products, 47 SKU/volume mappings unchanged.
- All 47 original files match their workbook embedded member bytes and recorded
  SHA-256, their dimensions, and the existing PNG/JPG bytes in main.
- All 47 local production files match the historical production audit hashes.
- Five local lossless WebP match main PNG decoded RGBA and dimensions exactly.
- Six rows / 31 historical metadata cells containing `27` are documented, not
  used as filenames, paths, sources, formats or dimensions.
- 10 assignments use the common 208-L barrel and 3 use the common 60-L barrel.
  These are generic package representations, not proof of product-specific labels.
- Current source/media files are unchanged; original inputs stay local.

Historical background measurements: 31 white, 16 near-white; all accepted as-is.
User acceptance concerns photos/backgrounds, not technical identity or label specs.
The separate HighTronic 20634 / 4 L label conflict remains unresolved and is NOT
closed by the queue. Silikatfrei media approval does not change MASTER gates.

## Queue reconciliation with PR #3

The older workbook flags for Longlife III 15F474 / 1 L and Extra 22003 / 20 L
remain historical. Later direct user decisions accepted current backgrounds,
including Longlife III, and explicitly approved Extra 20 L. Source MEDIA v2 now
records 0 processing tasks and 0 open manual visual decisions for that scope.
Do not recreate those holds or edit the photos. Preserve the technical label
issue for HighTronic separately. The imported queue retains its original scope;
it is not an assertion that every independent project issue is resolved.

## Commerce source — no import

The user supplies the filled current table here:
https://docs.google.com/spreadsheets/d/1IX6u3QS3jaeZuGn0cJsalmdhnAR05jLyXdJ7461BuKY/edit

Coverage reported by the user: 46 / 47 SKU. This handoff records that statement
and URL only; it does not independently verify or import the cells. The empty
local template is superseded as the commerce source. No purchase links, prices,
availability, CSV cells or runtime commerce behavior are changed.

## Exact PDS originals reserved for the separate TECHNICAL stage

| Product | Original filename | SHA-256 |
|---|---|---|
| ARAL-015 ExtraTurboral | aral_turboral_10w-40_germany_german_pdb_467759.pdf | 181e2ebd679c081296b117701b1355bd26109fa1394e4b4f486ba05a3af97c9d |
| ARAL-016 Turboral (Plus) | aral_turboral_15w-40_germany_german_pdb_467736.pdf | c3acf7c3ff785cba20f23f4289d81b0ff8163dc18e1febcaf54e7c6827141db3 |

Both exact source files are locally accessible and rehashed against the accepted
CONTENT source records. PR #5's inability to access them was specific to that
chat, not proof that the originals do not exist. Their precise personal paths
are retained in a local-only registry and provided directly to the owner.
No PDS/SDS bytes, download URLs or publication gates are added by this PR.
All rights, revision selection and website-document permission checks are
deferred to the explicit TECHNICAL / PDS / SDS stage.

## Existing materials deliberately omitted

- Frozen MASTER, CONTENT, PUBLIC CATALOG and existing media maps/reports.
- All 47 original pictures, repeated root copies and photographic ZIP archives.
- Five WebP (kept local pending A/B decision); no production file added/replaced.
- Old research reports and superseded layers.
- Old conversion/build scripts tied to local absolute paths and legacy maps.
- Lossy Q95/Q92 candidates and the original 12-MB photo workbook.
- HERO/design/frontend artifacts handled by other chats.
- Filled commerce cells and all PDF binaries.

## Running the checker

From the repository root:

```sh
python3 scripts/audit/verify_product_media.py --root .
python3 scripts/audit/verify_product_media.py --root . --allow-known-path-mismatches
```

Strict mode must return 1 on the audited baseline and show exactly five known
canonical/runtime discrepancies. Acknowledged-baseline mode returns 0 only if
there are no OTHER failures; the five findings remain visible in the output.
It does not repair paths, write files, access the network or replace Pages CI.
No GitHub Actions workflow is changed or added.

Checker validation: baseline strict=1 with exactly five known discrepancies;
acknowledged baseline=0 with 47 matching image hashes; isolated fixture mutations
for an extra 48th production entry, corrupted image bytes, wrong CSV volume and
non-image catalog change all return nonzero. Tests use disposable local copies;
no source/canonical data is edited. Pixel equality is separately checked locally
using Pillow and recorded in the verified handoff; the portable checker needs
only Python's standard library.

## Safety boundary

Neither A nor B is implemented. No change to main, frozen MASTER, CONTENT,
PUBLIC CATALOG, SKU, package sizes, current media maps, production files,
HERO, runtime website, PDF permissions or deployment configuration is included.
No automatic merge. Review this PR independently of other open audits.
