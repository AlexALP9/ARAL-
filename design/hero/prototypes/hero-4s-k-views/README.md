# ARAL HERO — current 4.8-second implementation

Current implementation: `review.html`, `review.css`, `review.js` in this folder. Existing directory name is retained to avoid duplicate packages. Supersedes the earlier 4-second K crossfade prototype.

## Run
From the complete repository checkout:
```sh
python -m http.server 8767 --bind 127.0.0.1
```
Open http://127.0.0.1:8767/design/hero/prototypes/hero-4s-k-views/review.html

One automatic play after all photograph decoding, 4.8 seconds, then a stationary final frame. No timer restarts it. Final pointer parallax is disabled. Review buttons allow explicit manual replay/scrubbing only; remove the review-controls and their bindings when integrating, or retain them only in a development review. Reloading the page starts a new visit. Reduced motion shows the final frame immediately; hiding the page finishes the animation rather than replaying on return. `?t=4.8&scene=1` opens a fixed final view.

## Dependencies / integration
This PR remains based on PR #2, branch `codex/aral-hero-design-sync-01a1556a`, baseline `b89d9b97ac9723b303b9c8c500614c1077b272f6`. This folder alone is NOT standalone. Keep the relative paths or update the resolver when bundling.

Required: review HTML/CSS/JS; six `assets/*.svg` wrappers (main-1l, second-1l, third-1l, pack-5l, pack-20l, barrel); existing `assets/k-views/K_side.png`; three original 1L PNGs in `design/hero/ARAL_HERO_MOTION_01A1556A/sources/`; existing 5L/20L/barrel files in `media/production/`. SOURCE_MANIFEST.json records paths and hashes. No original photograph was reuploaded or changed. Other K views are historical reference files, not active views. Google Fonts Manrope is optional with Arial fallback.

The SVG resolver fetches referenced photographs and embeds bytes only in memory before image.decode. Serve via HTTP from repository root. On integration, mount once after entering home, await decode, retain final state until leaving; clean up RAF/listeners/object URLs on unmount. Do not reinitialize on scroll, hover, resize or catalog interactions. Preserve catalog/router; CTA hrefs here are placeholders. `pagehide` releases blob URLs; a restored back-forward-cache page needs image rehydration or a fresh mount.

## Figma
Desktop 93:52 and mobile 98:54 in file xgN1ERA1pWbl2x8MvOiA5m use 4.8-second tracks. Figma player looping is separate from browser code. The Figma prototype navigates at 4.8 seconds to static final frames 125:56 / 125:406; those have no animation tracks or automatic return. Native timeline loop preference is not exposed by the available API. This workaround is not a website dependency.

## Validation and limits
Run `node verify-prototype.mjs`. Checks hashes, file references, reveal times, reduced-motion and RAF termination; it does not certify pixel rendering. The opening right-side plane is a photographic 2.5D approximation and its moving seam still needs visual acceptance. Main original K retains neck-left orientation; no label mirroring or old crossfade. Camera/composition and reveals preserved, all time coordinates multiplied by 1.2.

No main merge or production publication. Checked publishing workflow: `.github/workflows/pages.yml` runs on push to main or manual dispatch, not this branch push. No deployment command is part of this package.
