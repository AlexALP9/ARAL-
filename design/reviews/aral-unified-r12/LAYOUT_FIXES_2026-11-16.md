# ARAL R12.6 — screenshot fixes and layout regression check
Date: 2026-11-16
Scope: existing R12 preview, working branch only.

Fixed:
- Drivers hero now derives height from content instead of a rigid 2.5:1 frame; original photo/text retained.
- Timeline year buttons have an opaque background and explicit stacking above the connecting line, including inactive hover/focus.
- Desktop navigation chips are 40px high with reset label geometry.
- Product and comparison header actions are consistent across seven page templates. Existing catalogue counter IDs and local-storage selection retained.
- Both actions use existing ARAL magnetic engine: maximum shift 5px, disabled on coarse pointers and reduced-motion preference.
- Corrected narrow menu-tab hit-area overlaps, including a stale catalogue-only 90px logo minimum width.

Validation:
- Browser Chromium: seven pages at 320,390,768,1024,1201,1440 CSS px (42 combinations), followed by targeted 320/1024 header checks after fixes.
- Checked horizontal overflow, header collisions, clipped headings/paragraphs, chip heights and presence of magnetic controls.
- Intentional scrollable store list and closed filter drawer excluded from clipping defects.
- Driver hero copy fits inside its frame; inspected rendered driver screen and focused 1924 year button. Line no longer visible through button.
- Opened mobile menu: five visible links without clipping; Escape closes it.
- Actual pointer interaction on comparison control produced --mag-x:5.000px and translateX(5px).
- Header comparison link opens #/compare; product link opens #/catalog.
- No site console errors in final inspected state. Shared JavaScript passes node --check.
- Published CSS/JS read back at commit and compared exactly with local output.
Limit: Chromium responsive emulation; no physical iPhone/Safari test.
