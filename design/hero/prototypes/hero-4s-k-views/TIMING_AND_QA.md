# Timing and QA

**STATUS: DRAFT / NOT FINALLY APPROVED**

## Explicit timing difference

| Phase | Canonical HERO/03 and 04, unchanged | Latest local prototype |
|---|---|---|
| Main 1L | 0–2.0 s | 0–2.3 s |
| Two additional 1L | 2.0–2.7 s | 2.3–3.0 s |
| Trio stabilization | 2.7–3.2 s | 3.0–3.4 s |
| 20L, 5L and barrel | 3.2–4.0 s | 3.4–4.0 s |

The local values preserve this chat's latest explicit instruction. They do not amend the canonical files, PR #2 reconciliation, or PR #4. Reconcile centrally before any production integration.

## Actual K orbit control and light

The value 0–7 degrees is an artistic timeline parameter, not a physically calibrated camera angle. Actual input photos may represent a larger viewpoint difference. There is no 3D mesh or synthesized intermediate perspective.

| Time | Action |
|---|---|
| 0–0.55 s | K_front; initial macro and move toward cap/shoulder |
| 0.55–0.78 s | smoothstep crossfade front → right, nominal 0° → 7° |
| 0.78–0.95 s | right view, nominal 7° |
| 0.95–1.18 s | smoothstep crossfade right → front, nominal 7° → 0° |
| 1.18–4.0 s | front view; pullback and family reveal |

Both views use a 660×1410 presentation space. Alpha>=128 body heights are normalized to 1401 units, with top 3 and baseline 1404. Right uniform scale is 1.0130151844. Runtime adds 3.35% horizontal shift to the right-view layer to align the cap during the close shot; this is additional to `k-view-registration.json`.

The same timeline controls body and reflected-view blend weights. A single light sweep runs over 0–1.3 s (peak CSS opacity 0.18), masked to each normalized source. Contact shadow offset 0→1.5px and width 1→1.05, reflection opacity 0.12→0.105 follow orbit weight. These are authored 2D approximations, not physically recalculated lighting. Reduced motion skips orbit/light and starts at the six-product final scene.

## Evidence and limitations

| Check | Status / scope |
|---|---|
| Five original K PNG SHA-256 | PASS; exact copies, no pixel modification |
| Reused five source photos | PASS; exact baseline files; two are PR #2 dependencies |
| External SVG references / repository links | PASS by structural checker; HTTP loader added for browser compatibility |
| JS syntax and reveal logic | PASS; read-only Node checker, six packages and required reveal boundaries |
| Original desktop/mobile before K update | Historical browser screenshots and timeline checks exist in chat; not certification of this packaged version |
| First K front/right crossfade | ISSUE OBSERVED: double contours at cap, shoulder and label |
| Last source correction | Cap registration shift and tighter cap/shoulder crop saved; no passing post-correction visual check recorded |
| Current package desktop paint | NOT VERIFIED in this sync; browser-window access approval timed out |
| Current package mobile paint / motion | NOT VERIFIED; 390px wrapper exists; mobile timeline logic only checked |
| Reduced-motion visual result | NOT VERIFIED visually; final-state logic checked |
| Baseline / normalized height | MATCH by registration math; visual contact during crossfade still needs review |
| Cap / label / scale jump / no double edges | REVIEW_REQUIRED, not marked fixed by syntax or hash checks |
| Shadow / reflection realism | REVIEW_REQUIRED; synchronized code is present, visual quality not certified |
| Final accepted animation / MP4 | NOT PRESENT |

## Source-image observations

No obvious watermark was identified in the earlier light/dark source review; this is not a guarantee of absence at every pixel. The alpha audit finds very low-opacity pixels outside the body (alpha 1–7). Body opacity is mostly 240–254 rather than fully opaque. Small edge residues may show at macro scale; no cleanup was applied. White partial-alpha counts include legitimate white label text and are not by themselves proof of a white halo.

Front and right differ in raw opaque height by about 1.3%, in cap position and label projection; matching the baseline does not align all contours or letters. The new K sources differ from the old product photo in neck direction, XMF/label artwork and text layout. The closeup has a different crop and label placement; mixing it into front would risk ghost text. Side has a distinct narrow silhouette/light stripe. Back is archival and excluded from runtime. Exact fine-print fidelity requires comparison against the accepted original; do not derive product claims from these processed images.

## Outstanding

1. Inspect both crossfade midpoints and continuous playback at desktop 1440/1024 and mobile 390/430.
2. Assess ghosting, cap/shoulder silhouette, label authenticity, baseline, apparent scale, light, shadow and reflection; do not automatically approve.
3. Reconcile local and canonical timing, plus scene-only versus page-with-copy scope.
4. Update Figma only under a subsequent design task; current 90:* remains the previous image version.
5. Complete a final image-audit narrative, optimized delivery assets and production integration/lifecycle QA separately.
