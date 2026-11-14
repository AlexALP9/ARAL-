# ARAL — unified full-site approval preview R3 (2026-11-11)
**Single entry:** design/hero/prototypes/hero-4s-k-views/ARAL_home_employer_feedback_r3_preview.html

All navigation remains within R3. Working branch only (PR #9). This build is not production and never modifies approved R1 files, main or GitHub Pages.

## Applied on top of complete R1 site
- Approved HERO: exact heading «ARAL Немецкое наследие», 4.8 s canister motion, original media and 2A +20% contours (preserved).
- Approved blue brand header with five items; logo increased to 74px desktop / 58px mobile.
- Comparison button matches Catalog; yellow counter badge removed, count and shared MagneticButton preserved.
- Two original audience photos remain; stronger text gradient and subtle leading dots instead of arrows in their text links.
- All page content and catalog preserved (16 oils, original ARAL-017 data reversible); vehicle type choice stripped of explanatory sentence and duplicated "Выбрать" microcopy.
- Specification rows and PDS/SDS source links preserved, service disclaimers removed. **External document permissions have not been independently verified.**
- Retail find/store instructions simplified; duplicate city in selected location removed; phone numbers normalized +7 (XXX) XXX-XX-XX while retaining digits and extensions; general network phone stays.
- "Основные сайты" subtitles: SKLAD SPK, CENTR AVTOMASEL, ONLINE, OSTVIN. Ozon buy card remains intentionally inactive pending real URL.
- Common footer: unnecessary description and extra PDS/SDS teaser removed; dot style in text links; new «Для автомобилистов» CTA linked to Drivers page.
- Service floating route-inspector button is **not displayed by default**; enable only with ?review=links for debugging.
- No testimonials; no alternative homepage redesign; source R1 remains intact.

## Scope of tests
GitHub Actions browser workflow runs real Chromium at viewport widths 1440/1024/768/390, navigation, client-side filters, hero, logo, console errors and actual internal links. CI evidence is included as workflow artifact. **The public preview URL must be revalidated separately to account for caching.**
