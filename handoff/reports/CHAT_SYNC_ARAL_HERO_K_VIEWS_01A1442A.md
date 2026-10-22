# ARAL HERO K views — selective synchronization

**STATUS: DRAFT / NOT FINALLY APPROVED**

Date: 22 October 2026. Chat: `01a1442a-93fd-7032-a44e-e153440537d9`.

PR: PENDING_CREATION_URL

## Repository / scope

Baseline main: `ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31` (172 files).
Parent: PR #2, branch `codex/aral-hero-design-sync-01a1556a`, commit `b89d9b97ac9723b303b9c8c500614c1077b272f6` (191 files). Head branch: `codex/aral-hero-k-views-draft-01a1442a`.
The Draft PR targets PR #2's branch so the two reused 1L originals are actually available. It is not a direct, independent main PR. Retarget only after the parent is merged and dependencies rechecked.

PR #1–6 and their current heads were reviewed. #1 frontend, #3 media/SKU and #5 technical contain independent audit reports; #4 contains three design documentation changes; #6 contains six media audit/check additions. Their files are not copied or modified. PR #2 contains the three original 1L photos, two reference PNGs, eight superseded 6s JPGs and six documents. All 13 binary source/reference/history files matched local bytes in the preceding audit; none is added again here. Canonical HERO/01–04 remain unchanged.

## New K originals / SHA-256

| File | SHA-256 | Role |
|---|---|---|
| K_front | `e376c12563bfa276f6e10c30fad6bf3b4f04d86a314f8d99b768d747b4a189c7` | primary runtime view |
| K_34_right | `81239cc3ca17fd43b09625849f1a356a3eb63c417eeafeb33710d6229e7b892e` | secondary runtime view |
| K_side | `73824b4896ee857c4c2afacd9a79847776c81a660e7030072b90ac29c54addbd` | reference only |
| K_back | `218a81dbf4cd67712a6c82423d3e5c8fe63c174f8c345ae7e41053ea648490e0` | archival source; not used by Hero |
| K_label_closeup | `5bff8d396f666f6bbdd0c80ae103e2fc208852d40c04b869d54c8f7285643139` | reference only |

Each original PNG is preserved once without pixel edits. Source bytes are not inferred from filenames. SVG wrappers reference source paths; duplicates are embedded only in temporary browser memory, not committed. Existing five source-image hashes and the complete portable path map are in [SOURCE_MANIFEST.json](../../design/hero/prototypes/hero-4s-k-views/SOURCE_MANIFEST.json).

## Dependency / reproduction map

Full checkout → prototype review.html → review.css/review.js → seven SVG wrappers → five existing source images plus two new K PNGs. K light masks reference those same two PNGs. Reflected images reuse the same wrappers. Side/closeup/back PNGs are source-review resources only. mobile.html and storyboard.html embed review.html. Google Fonts is optional with local font fallbacks. HTTP and browser SVG/Blob/DOMParser/FileReader support are required. No GSAP or WebGL dependency.

See [README](../../design/hero/prototypes/hero-4s-k-views/README.md) for run commands. Local isolated preview during this sync: `http://127.0.0.1:8767/design/hero/prototypes/hero-4s-k-views/review.html`; this is not a public deployment and requires the local server. The folder alone is not standalone because it reuses repository/parent-PR files.

## Desktop / mobile / transition QA

Desktop, mobile parameters and reduced-motion final-state logic are covered by the read-only structural/timeline checker. Existing dependencies and source hashes resolve in the complete parent-based checkout. JS syntax passes. No fresh browser-paint pass is claimed: Windows browser access approval timed out in this sync.

Earlier source review observed double cap/shoulder/label contours at the crossfade midpoint. The last source correction (cap alignment + tighter framing) was saved but has no passing post-correction visual evidence. Baseline/height registration is mathematically normalized; cap/label fidelity, scale continuity, light, shadow and reflection realism remain REVIEW_REQUIRED. The relative light/shadow/reflection formulas are synchronized approximations, not a calibrated physical render. See [TIMING_AND_QA](../../design/hero/prototypes/hero-4s-k-views/TIMING_AND_QA.md). Do not convert syntax success into visual acceptance.

## Timing difference, unchanged canonical scenario

| Phase | HERO/03–04 | This local prototype |
|---|---|---|
| Main 1L | 0–2.0 | 0–2.3 |
| Trio reveal | 2.0–2.7 | 2.3–3.0 |
| Stabilization | 2.7–3.2 | 3.0–3.4 |
| Large packs | 3.2–4.0 | 3.4–4.0 |

This records the chat's latest local timing only. No automatic canonical rewrite. The new nominal 0→7→0 degree view transition is also DRAFT, not new official motion approval. The page-with-copy review and PR #2 scene-only scope are distinguished rather than silently reconciled.

## Figma

[Section 90:48](https://www.figma.com/design/xgN1ERA1pWbl2x8MvOiA5m?node-id=90-48), [desktop 90:49](https://www.figma.com/design/xgN1ERA1pWbl2x8MvOiA5m?node-id=90-49), [mobile 90:74](https://www.figma.com/design/xgN1ERA1pWbl2x8MvOiA5m?node-id=90-74) are the previous image version, confirmed by metadata in the preceding audit. They are not updated for new K views. Historical desktop/mobile screenshots were visually inspected before K updates; neither metadata nor static frames certify working motion. Detailed [FIGMA_MAP](../../design/hero/prototypes/hero-4s-k-views/FIGMA_MAP.md) records eight keyframes, older 46:* and separate PR #2 83:* scope. No Figma writes in this sync.

## Outstanding / safety

Required next: visual review of both crossfades and continuous playback, 1440/1024/390/430 validation, source-label review, timing reconciliation, Figma alignment and optimized integration resources. No accepted final MP4/.fig or final updated animation prompt is asserted.

All parent files remain byte-identical. No modification of main, site runtime, workflow, MASTER/CONTENT/CATALOG, SKU/volumes, PDS/SDS, publication gates or production images. No auto-merge or deployment. Old frontend snapshots, catalog duplicate, old screenshots, 6s frames/ZIP, original LIQUI MOLY video/extracted frames and private paths are excluded.

## Files added

- `design/hero/prototypes/hero-4s-k-views/asset-review.html`
- `design/hero/prototypes/hero-4s-k-views/assets/barrel.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_34_right.png`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_34_right.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_back.png`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_front.png`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_front.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_label_closeup.png`
- `design/hero/prototypes/hero-4s-k-views/assets/k-views/K_side.png`
- `design/hero/prototypes/hero-4s-k-views/assets/pack-20l.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/pack-5l.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/second-1l.svg`
- `design/hero/prototypes/hero-4s-k-views/assets/third-1l.svg`
- `design/hero/prototypes/hero-4s-k-views/FIGMA_MAP.md`
- `design/hero/prototypes/hero-4s-k-views/k-assets-audit.json`
- `design/hero/prototypes/hero-4s-k-views/k-view-registration.json`
- `design/hero/prototypes/hero-4s-k-views/mobile.html`
- `design/hero/prototypes/hero-4s-k-views/prepare-k-views.py`
- `design/hero/prototypes/hero-4s-k-views/README.md`
- `design/hero/prototypes/hero-4s-k-views/review.css`
- `design/hero/prototypes/hero-4s-k-views/review.html`
- `design/hero/prototypes/hero-4s-k-views/review.js`
- `design/hero/prototypes/hero-4s-k-views/SOURCE_MANIFEST.json`
- `design/hero/prototypes/hero-4s-k-views/storyboard.html`
- `design/hero/prototypes/hero-4s-k-views/TIMING_AND_QA.md`
- `design/hero/prototypes/hero-4s-k-views/verify-prototype.mjs`
- `handoff/reports/CHAT_SYNC_ARAL_HERO_K_VIEWS_01A1442A.md`
