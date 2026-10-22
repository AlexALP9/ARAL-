# ARAL HERO 4s / K views

**STATUS: DRAFT / NOT FINALLY APPROVED**

Isolated browser prototype from chat `01a1442a-93fd-7032-a44e-e153440537d9`, preserved on 22 October 2026. This is not the production Hero or an approved final render.

## Run locally

This branch depends on PR #2 (`codex/aral-hero-design-sync-01a1556a`, baseline `b89d9b97ac9723b303b9c8c500614c1077b272f6`). The dependent PR targets that branch, not main. Two reused 1L photos are absent from main until PR #2 is merged. Do not copy this folder alone and call it standalone.

From the complete repository checkout:

```sh
python -m http.server 8767 --bind 127.0.0.1
```

Open `http://127.0.0.1:8767/design/hero/prototypes/hero-4s-k-views/review.html`.

- `review.html`: continuous 4-second sequence, repeat, final frame and scrubber.
- `mobile.html`: 390px iframe review.
- `storyboard.html`: eight static timeline views; not eight exported final frames.
- `asset-review.html`: original K PNGs against light/dark/gray/checker backgrounds. The back is visible here only for source review.
- `review.html?t=0.665`: pause at the first transition midpoint.
- `review.html?t=1.065`: pause at the return transition midpoint.
- `review.html?t=4&scene=1`: isolated final product scene.

HTTP is required. SVGs reference existing PNG/JPG files instead of embedding duplicate originals. The loader resolves those references, embeds the existing bytes in memory and decodes the resulting SVG before showing the scene. K light masks use the corresponding original PNG and registration values. The external Google Fonts stylesheet is optional: Manrope falls back to Arial if unavailable. No other external runtime dependency is required.

## Scope and composition

Six packages: K 1L centered in front, LL IV FE left, High Tronic M right; 20L behind left, 5L behind right, generic blue ARAL barrel behind center. The barrel has no inferred oil grade or performance claims. Other packages retain their front photos and subtle pointer parallax. The review has copy and placeholder CTA routes; it does not include the site's catalog/router.

Canonical motion references remain unchanged: [03](../../../../HERO/03_ARAL_HERO_4S_ANIMATION_PROMPT.md), [04](../../../../HERO/04_WORK_PROMPT_ARAL_HERO_4S.md). See [TIMING_AND_QA.md](TIMING_AND_QA.md) for the explicitly unresolved timing differences.

## Files and provenance

[SOURCE_MANIFEST.json](SOURCE_MANIFEST.json) records the five unique K originals, SHA-256, registration and reused dependencies. Each PNG is stored once. Front/right SVGs are normalized presentation wrappers referencing those files; they do not repaint labels. `prepare-k-views.py` can rebuild those wrappers and registration from the original audit. `k-assets-audit.json` preserves alpha measurements without personal source paths.

K_front is the primary view; K_34_right is the secondary view. K_side and K_label_closeup are auxiliary references, not runtime overlays. K_back is an archival source and is not loaded by the Hero. The new K appearance differs from the previous original, including neck orientation and label artwork; acceptance for local exploration is not production-media approval.

The source folder's old name `hero-final-approved` does not establish acceptance. Old HANDOFF/product mapping, full-site snapshots, old screenshot, 6-second frames/ZIPs, LIQUI MOLY video and extracted frames are deliberately excluded. The existing photos and two reference PNGs in PR #2 are reused or linked, never uploaded again.

## Verification

```sh
node --check design/hero/prototypes/hero-4s-k-views/review.js
node design/hero/prototypes/hero-4s-k-views/verify-prototype.mjs
```

The checker is read-only and verifies source/dependency SHA-256, local links, six package objects and timeline logic in a DOM stub, including mobile parameters and the reduced-motion final state. It does not certify browser paint, smoothness, typography, crossfade quality or acceptance. Visual status and outstanding tasks are recorded separately. Review artifacts must not be connected to production routes without a later explicit integration task.
