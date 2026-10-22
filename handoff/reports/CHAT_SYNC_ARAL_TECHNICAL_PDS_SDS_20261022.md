# CHAT_SYNC_ARAL_TECHNICAL_PDS_SDS_20261022

Status: **DRAFT audit; not a publication or approval**. Scope: only technical PDS/SDS and user decisions documented in this chat. Based on main HEAD ff14ac5b87c617c6c73fe2b55c8b63ffbad2ff31 on 2026-10-22. Files in main: 172, PDF in main: 0. README alone was not used.

## Authority and protection
- FROZEN: `current/master/ARAL_PRODUCT_MASTER_v1.2.json` (Git blob cffda31ddd43247ce4076d5aa7e4b6e3db9a7698).
- Unchanged: `current/content/ARAL_CONTENT_LAYER_v1.2.json`, `current/content/ARAL_PDS_ACCEPTANCE_MAP_v1.md`, `current/catalog/ARAL_PUBLIC_CATALOG_v1.json`, `docs/sources.json`, working CSV, website.
- 16 of 17 products have accepted CONTENT PDS and translated available Description/Application/Advantages; Silikatfrei CONTENT unavailable. Translation absence of original sections is not a gap.
- All `main` current CSV and user decisions remain in `current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv`. No duplicate copies or technical rewrites.

## Exact 17-product status map
`PDS URL` and `SDS URL` refer to manufacturer direct-document URLs, not receipt of local document. `Technical publication` refers to frozen MASTER; `Website PDS gate` is independent.
| ID | Продукт | SKU | Main PDS | PDS URL | SDS / источник | CONTENT | Technical publication | Website PDS gate | Примечание |
|---|---|---:|---|---|---|---|---|---|---|
| ARAL-001 | Aral BlueTronic II 10W-40 | 4 | 2025-11-03 | есть | 2026-01-22; URL есть | complete | разрешена | on |  |
| ARAL-002 | Aral EcoTronic F 5W-20 | 1 | 2021-05-20 | есть | 2024-06-04; URL есть | complete | разрешена | on |  |
| ARAL-003 | Aral HighTronic 5W-40 | 4 | 2024-11-08 | есть | 2026-04-08; URL есть | complete | разрешена | on |  |
| ARAL-004 | Aral HighTronic F 5W-30 | 3 | 2025-03-06 | есть | 2025-12-09; URL есть | complete | разрешена | on |  |
| ARAL-005 | Aral HighTronic J 5W-30 | 4 | 2025-02-26 | есть | 2026-02-06; URL есть | complete | разрешена | on |  |
| ARAL-006 | Aral HighTronic M 5W-40 | 3 | 2022-08-10 | есть | 2026-04-09; URL есть | complete | разрешена | on |  |
| ARAL-007 | Aral HighTronic R 5W-30 | 2 | 2024-06-21 | есть | 2026-02-26; URL есть | complete | разрешена | on |  |
| ARAL-008 | Aral SuperTronic E 0W-30 | 3 | 2025-06-02 | есть | 2025-12-10; URL есть | complete | ЗАПРЕЩЕНА | off | PDS ACEA C2 vs A5/B5 unresolved. Technical publication frozen FALSE. |
| ARAL-009 | Aral SuperTronic G 0W-40 | 2 | 2025-11-03 | есть | 2026-04-10; URL есть | complete | разрешена | on |  |
| ARAL-010 | Aral SuperTronic K 5W-30 | 4 | 2025-11-03 | есть | 2025-09-22; URL есть | complete | разрешена | on |  |
| ARAL-011 | Aral SuperTronic Longlife III 0W-30 | 2 | 2025-11-03 | есть | 2025-12-09; URL есть | complete | разрешена | on |  |
| ARAL-012 | Aral SuperTronic Longlife IV FE 0W-20 | 2 | 2025-05-02 | есть | 2026-04-08; URL есть | complete | разрешена | on |  |
| ARAL-013 | Aral MegaTurboral 10W-40 | 3 | 2026-02-12 | есть | 2025-10-13; URL есть | complete | разрешена | on |  |
| ARAL-014 | Aral MegaTurboral LA 10W-40 | 2 | 2025-03-25 | есть | 2026-04-07; URL есть | complete | разрешена | on | KV100 and pour point discrepancies PDS vs SDS remain unresolved. |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 4 | 2025-11-27 | нет | 2026-04-02; URL нет | complete | разрешена | on | SDS approved user; PDS 27 Nov 2025 -42 C confirmed; uploaded PDS hash differs from accepted source. |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 3 | 2025-03-31 | нет | нет; URL нет | complete | разрешена | off | Accepted DE PDS 31 Mar 2025 not physically here. EN 29 Mar 2025 different revision. SDS candidate not accepted. |
| ARAL-017 | Aral Silikatfrei G12 | 1 | нет | нет | 2020-12-16; URL нет | unavailable | ЗАПРЕЩЕНА | off | User accepted naming equivalence and SDS (2020 Moldova). PDS PDF is source only; technical publication frozen FALSE. |

## User decisions approved
- Aral ExtraTurboral SAE 10W-40 (ARAL-015, 4 SKU): attached SDS named Aral Turboral 10W-40 is accepted; use accepted German PDS **pour point -42 °C**, not SDS -39 °C. Record difference as provenance only. Historical commercial name accepted.
- Aral Turboral (Plus) 15W-40 (ARAL-016, 3 SKU): user confirmed accepted DE PDS applies to their product; do not substitute English edition for DE main. Extra/Plus commercial names may differ from document headers; neither implies all historical formulas interchangeable.
- Aral Silikatfrei G12 (ARAL-017, SKU 90837 1 L): user explicitly confirms PDS/SDS naming equivalence to Aral Antifreeze Silikatfrei; stop re-escalating that naming difference. SDS date 2020-12-16 accepted. Frozen technical_publication_allowed=false remains.
- Aral SuperTronic E 0W-30 (ARAL-008): PDS 2025-06-02 internally differs (ACEA A5/B5 in Description/Application, C2 in Performance; API SP in Performance). No technical resolution, no PDS publication.
- Aral MegaTurboral LA 10W-40 (ARAL-014): PDS viscosity 13.7 mm²/s KV100 vs SDS 14.2-15.2; pour point -42°C vs -36°C; no unilateral reconciliation.
- Existing product photos accepted by user for now. Images unrelated to technical handoff. All SKU and packaging are unchanged.

## Available original PDF binaries and SHA-256
No PDF in `main`. Ten attachments are six unique PDFs + three exact duplicate copies + one PNG not in technical scope.

| Original filename | Product | Type/date | SHA-256 | Transfer decision |
|---|---|---|---|---|
| `3278043 (2).pdf` | ARAL-015 | SDS 2026-04-02 EN Germany | `fd40796d3c52c4374d1bcce9bcf3de7bb5b534fe999c4ac5e04139c4ab23681d` | Approved-source candidate `docs/sds/ARAL-015.pdf`; binary handoff ZIP prepared, not uploaded |
| `2691765.pdf` | ARAL-017 | SDS 2020-12-16 EN Moldova | `74c9aaa12d060674c9bd976fea779e2c8e840aacb27acc2e94f6bbae2d984c9d` | Approved-source candidate `docs/sds/ARAL-017.pdf`; binary handoff ZIP prepared, not uploaded |
| `bpxe-ayprag.pdf` | ARAL-015 | PDS 2025-11-27 DE | `24f5f5ffff6d7a92475b1178370509006f779d5ee6ad494c29d4bf268c048209` | **CONFLICT**: canonical accepted PDS SHA `181e2ebd679c081296b117701b1355bd26109fa1394e4b4f486ba05a3af97c9d`; research only; do not replace main |
| `WEPP-DF93BK (1).pdf` | ARAL-016 | PDS 2025-03-29 EN | `fe6436396fa07a4ae0a20a17dfa04624c28e0a0b4be2578e5d5d752d7b7f5eb2` | **Different revision** from main DE PDS 2025-03-31 SHA `c3acf7c3ff785cba20f23f4289d81b0ff8163dc18e1febcaf54e7c6827141db3`; research only |
| `bpxe-a9q6w8.pdf` | ARAL-017 | PDS 2016-04-28 EN | `f9d0311cfea5a496ad98d0204fbb6a04d424d6b747166525aed40127067e3616` | User-confirmed name, MASTER blocked; private research only |
| `wepp-djce7p.pdf` | ARAL-008 | PDS 2025-06-02 EN | `e36f4fd0d7a8c3d4a21bbc6888a538e3f66ed5a67f5d359881e5111e34315498` | Matches accepted CONTENT source SHA, but frozen publication blocked; private research only |

Exact duplicate groups: `2691765 (1).pdf` duplicates `2691765.pdf`; `bpxe-a9q6w8 (1).pdf` and `bpxe-a9q6w8 (2).pdf` duplicate `bpxe-a9q6w8.pdf`. Never upload duplicates.

## Missing and handoff
- The 6 unique PDF binaries are not in GitHub. Available locally in this chat and staged into two archives: `ARAL_SDS_APPROVED_HANDOFF_20261022.zip` (2 allowed SDS) and `ARAL_PDS_PRIVATE_REVIEW_20261022.zip` (4 research-only PDS; **do not upload private review ZIP to public GitHub**).
- Canonical binary PDS for ARAL-015 (sha 181e2...), ARAL-016 (sha c3acf...) are **not accessible in this chat**; do not fabricate, replace, or repoint them.
- SDS ARAL-016 not received as a locally verified exact binary; only candidate external references in MASTER history.
- All 17 product files missing physical PDFs from main. The other 14 manufacturer direct PDS/SDS pairs are referenced by URL in `docs/sources.json`, not proven to be downloadable or published by this audit.
- Documentation code is already in main: `docs/README.md`, `docs/sources.json`, `scripts/build_docs.py`, `.github/workflows/pages.yml`, `assets/app.js`. Do not resubmit.
- GitHub Pages result **not verified**. No claim of live PDFs or published downloaded assets.

## PR safety acceptance
This report/registry is metadata only. Do not merge or publish PDFs without reviewing the original binary, accepted revision and site publication gates. Never modify MASTER/CONTENT/CATALOG/media or site code in this handoff. Approved SDS binary transfer remains a separate blocked operational step if byte-safe GitHub upload is unavailable. User review required for ARAL-015 PDF hash and ARAL-016 PDS edition/gate.
