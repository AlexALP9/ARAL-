# ARAL PRODUCT MASTER v1.2

Основа: MASTER v1.1. Применены только изменения, разрешённые текущим заданием пользователя. Повторного поиска PDS/SDS и нового исследования не проводилось. Файлы v1.1, CONTENT_LAYER и карта принятия PDS сохранены без изменений.

## Итоговая таблица

| ID | Коммерческое название | SKU | Identity | Performance | Physical | Content | Technical publication |
|---|---|---:|---|---|---|---|---|
| ARAL-001 | Aral BlueTronic II 10W-40 | 4 | verified | review_note | review_note | complete | true |
| ARAL-002 | Aral EcoTronic F 5W-20 | 1 | verified | verified | review_note | complete | true |
| ARAL-003 | Aral HighTronic 5W-40 | 4 | verified | verified | review_note | complete | true |
| ARAL-004 | Aral HighTronic F 5W-30 | 3 | verified | verified | review_note | complete | true |
| ARAL-005 | Aral HighTronic J 5W-30 | 4 | verified | review_note | review_note | complete | true |
| ARAL-006 | Aral HighTronic M 5W-40 | 3 | verified | verified | review_note | complete | true |
| ARAL-007 | Aral HighTronic R 5W-30 | 2 | verified | verified | verified | complete | true |
| ARAL-008 | Aral SuperTronic E 0W-30 | 3 | verified | manual_review | review_note | complete | false |
| ARAL-009 | Aral SuperTronic G 0W-40 | 2 | verified | verified | review_note | complete | true |
| ARAL-010 | Aral SuperTronic K 5W-30 | 4 | verified | review_note | review_note | complete | true |
| ARAL-011 | Aral SuperTronic Longlife III 0W-30 | 2 | verified | review_note | review_note | complete | true |
| ARAL-012 | Aral SuperTronic Longlife IV FE 0W-20 | 2 | verified | verified | review_note | complete | true |
| ARAL-013 | Aral MegaTurboral 10W-40 | 3 | verified | verified | review_note | complete | true |
| ARAL-014 | Aral MegaTurboral LA 10W-40 | 2 | verified | verified | manual_review | complete | true |
| ARAL-015 | Aral ExtraTurboral SAE 10W-40 | 4 | user_confirmed | verified | verified | complete | true |
| ARAL-016 | Aral масло Turboral (Plus) 15W-40 | 3 | user_confirmed | verified | verified | complete | true |
| ARAL-017 | Aral Silikatfrei G12 | 1 | manual_review | manual_review | manual_review | unavailable | false |

## Контроль изменений относительно v1.1

- ARAL-001—ARAL-014: изменён только блок content — завершённый статус и ссылка на соответствующую запись CONTENT_LAYER v1.2 вместо устаревшего краткого текста. Main PDS, SDS, Performance, Typical Characteristics, SKU, фасовки и все технические статусы идентичны v1.1.
- ARAL-015—ARAL-016: применены точные коммерческие названия пользователя; identity=user_confirmed; назначены подтверждённые DE PDS; перенесены спецификации и типичные значения только из этих документов; Performance и Physical=verified; техническая публикация разрешена. Прежние выводы об идентичности сохранены как история в provenance, а не как действующие блокировки.
- ARAL-017: content=unavailable; добавлена отдельная user_provided_manual_reference. Технические поля, кандидатные материалы и блокировки не изменены.
- Итоговые счётчики, версия схемы, правила связи CONTENT и перечень источников пересчитаны.

**Контроль названий:** утверждённые пользователем названия соблюдены. Относительно старого файла v1.1 изменены ровно две строки:

| ID | Было в v1.1 | Стало по заданию пользователя |
|---|---|---|
| ARAL-015 | Aral Turboral (Extra) 10W-40 | Aral ExtraTurboral SAE 10W-40 |
| ARAL-016 | Aral Turboral (Plus) 15W-40 | Aral масло Turboral (Plus) 15W-40 |

Все остальные коммерческие названия сохранены. Названия из PDF не назначены публичными именами или aliases. У Extra/Plus official_name и current_line_name оставлены пустыми; исходное название PDF хранится только в provenance.

**Контроль ассортимента:** все 47 SKU и обе копии коммерческих данных (internal/public) содержательно идентичны v1.1; фасовки не изменены.

**Контроль CONTENT:** 16 complete означает полноту отдельного принятого контентного слоя. Тексты старых редакций не заменяют текущие API/ACEA/OEM и не получают автоматического разрешения публикации. Прежние краткие тексты доступны в неизменённом v1.1.

## Карточки MASTER

### ARAL-001 — Aral BlueTronic II 10W-40

Категория: PKW; SAE: 10W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 15F073 | 208 L | user_assortment |
| 15F076 | 1 L | user_assortment |
| 15F078 | 4 L | user_assortment |
| 15F471 | 5 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-001; контентная редакция: wepp-dcrgw2.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
  "status": "selected_main",
  "document_key_code": "470643",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0428f4325b4c17798e477f6ef1362e36&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german-de_sdb_470643.pdf",
  "date": "2026-01-22",
  "market": "Germany",
  "language": "de",
  "version": "5",
  "product_code": "470643-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "A3/B4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.3",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets - Fiat 9.55535-D2",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA A3/B4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "VW 5 01 01 / 505 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.864 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 14.3 |
| Динамическая вязкость CCS при −25 °C | ASTM D5293 | mPa.s (cP) | 6280 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 96.6 |
| Индекс вязкости | ASTM D2270 | — | 151 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -39 |
| Температура вспышки, PMCC | ASTM D93 | °C | 200 |
| Сульфатная зольность | ASTM D874 | % wt | 1.2 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS пишет Blue Tronic II раздельно; SAE и документный код 470643 совпадают — орфографическое различие.
- PDS/SDS: KV100 14.3 входит в 13.8–16.3 mm²/s; плотность 0.864 g/ml согласуется с <1000 kg/m³. KV40 96.6 против 89.8 mm²/s и Pour Point −39 против −42 °C различаются: не объявлены округлением и не подменены. Типичные PDS-показатели сохранены; причина междокументной разницы не установлена.
- VW 5 01 01 сохранено в исходном написании PDS; нормализация в VW 501 01 не выполнена.
- Performance из PDS; сохранено нетипичное написание VW 5 01 01 без автоматической правки. Физические значения PDS/SDS различаются.

### ARAL-002 — Aral EcoTronic F 5W-20

Категория: PKW; SAE: 5W-20.

| SKU | Фасовка | Источник |
|---|---|---|
| 25094 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-002; контентная редакция: bpxe-9ar8eu.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
  "date": "2021-05-20",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
  "status": "selected_main",
  "document_key_code": null,
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=3616531cf5304ece397eb239c57a4d89&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german-de_sdb_468246.pdf",
  "date": "2024-06-04",
  "market": "Germany",
  "language": "de",
  "version": "12",
  "product_code": "468246-DE04",
  "access_status": "previously_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SN"
  ],
  "acea": [],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets - Ford WSS-M2C948-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "meets"
    }
  ],
  "recommended_for": [],
  "application_references": [
    {
      "claim_original": "Ford WSS-M2C913-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    },
    {
      "claim_original": "Ford WSS-M2C913-C",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    },
    {
      "claim_original": "Ford WSS-M2C925-B",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf",
      "claim_type": "application_reference"
    }
  ],
  "performance_levels": [],
  "other": [
    {
      "claim_original": "ILSAC GF-5",
      "source_url": "https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D1298 | g/ml | 0.847 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 43.5 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 8.2 |
| Индекс вязкости | ASTM D2270 | — | 166 |
| Динамическая вязкость CCS при −30 °C (5W) | ASTM D5293 | mPa.s (cP) | 3450 |
| Вязкость HTHS при 150 °C | ASTM D4683 | cP | 2.6 |
| Температура застывания | ASTM D97 | °C | -45 |
| Температура вспышки PMCC | ASTM D93 | °C | 210 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Точное имя и SAE 5W-20 подтверждены; замена на 0W-20 запрещена.
- В 2013 PDS API/ILSAC не указаны; отсутствие записи не отрицает Performance DE 2021. Ford 948-B остаётся Meets.
- KV40: DE 2021 43.5, EN 2013/SDS 43.51 mm²/s. Сохранено различие представления/редакций; причина округления не доказана. Диапазоны SDS для KV100, плотности и вспышки совместимы с PDS.
- Утверждённая номенклатура пользователя: SKU 25094 — 4 L; источник user_assortment.

### ARAL-003 — Aral HighTronic 5W-40

Категория: PKW; SAE: 5W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 20637 | 1 L | user_assortment |
| 20632 | 208 L | user_assortment |
| 20634 | 4 L | user_assortment |
| 20635 | 5 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-003; контентная редакция: wepp-dav4bq.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
  "date": "2024-11-08",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
  "status": "selected_main",
  "document_key_code": "467316",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=d8881dd1b94f7bafdc79e387cd081177&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german-de_sdb_467316.pdf",
  "date": "2026-04-08",
  "market": "Germany",
  "language": "de",
  "version": "3.04",
  "product_code": "467316-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CF",
    "SN"
  ],
  "acea": [
    "C3"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.31/ 229.51",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets Fiat 9.55535-S2, Ford WSS-M2C917-A, MB-226.5",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API CF/SN",
  "acea_claim_original": "ACEA C3",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "GMdexos2™ supersedes GM-LL-B-025 and GM-LL-A-025",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "OPEL OV 040 1547-D40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche A40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 505 00/ 505 01",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.849 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 13.5 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 5875 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 79 |
| Индекс вязкости | ASTM D2270 | — | 174 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Сульфатная зольность | ASTM D874 | % wt | 0.8 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS 2026: KV100 13.8–16.34 mm²/s; немецкий PDS 13.5 выходит за диапазон. Английский PDS 14.0 согласуется с SDS. Автоматический выбор формулы не сделан.
- Performance DE/Global согласован; основной DE PDS новее на день. Reference согласуется с перечисленными значениями; это не чтение журнала.

### ARAL-004 — Aral HighTronic F 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 10332 | 1 L | user_assortment |
| 10333 | 208 L | user_assortment |
| 10334 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-004; контентная редакция: wepp-dejrb4.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
  "date": "2025-03-06",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
  "status": "selected_main",
  "document_key_code": "456182",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=add807b47040db44b3008baf86597def&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german-de_sdb_456182.pdf",
  "date": "2025-12-09",
  "market": "Germany",
  "language": "de",
  "version": "17.01",
  "product_code": "456182-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP",
    "CF"
  ],
  "acea": [
    "A5/B5"
  ],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets Ford WSS-M2C913-A/ B/ C/ D",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [
    {
      "claim_original": null,
      "reference": "Ford diesel engines",
      "claim_type": "recommended_for",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Beschreibung"
    }
  ],
  "other": [
    {
      "claim_original": "ILSAC GF-6",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "api_claim_original": "API SP/CF",
  "acea_claim_original": "ACEA A5/B5",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA A1/B1; ACEA A5/B5; Ford, Volvo, Jaguar, Land Rover",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.85 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 9.7 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 55 |
| Индекс вязкости | ASTM D2270 | — | 162 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 4750 |
| Вязкость HTHS при 150 °C | ASTM D4741 | cP | 2.96 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 204 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS: KV100 9.8–11.2 против DE PDS 9.7; KV40 58 против 55; Pour Point −33 против −42 °C. В Performance только Meets Ford, не OEM approval.
- Performance согласован; Ford остаётся Meets. Opel OV0401547-D40 не добавлен. DE/Global физические таблицы одной даты сохранены отдельно.

### ARAL-005 — Aral HighTronic J 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 20198 | 1 L | user_assortment |
| 20190 | 208 L | user_assortment |
| 20194 | 4 L | user_assortment |
| 20191 | 60 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-005; контентная редакция: wepp-dea9dl.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
  "date": "2025-02-26",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
  "status": "selected_main",
  "document_key_code": "466947",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/41575EA6F7CB553380258D9A00264DC5/%24File/3259434.pdf",
  "date": "2026-02-06",
  "market": "Hungary",
  "language": "hu",
  "version": "7",
  "product_code": "466947-DE04",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [
    "C2"
  ],
  "official_approvals": [
    {
      "claim_original": "PSA Approval B71 2290",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Meets Fiat 9.55535-S1",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": null,
  "acea_claim_original": "ACEA C2",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "Бензиновые и дизельные двигатели; сажевые фильтры",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.849 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 9.5 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 51 |
| Индекс вязкости | ASTM D2270 | — | 172 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 4100 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -39 |
| Сульфатная зольность | ASTM D874 | % wt | 0.56 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- PDS DE/EN совпадают по общим строкам; только EN дополнительно содержит вспышку 220 °C ASTM D93. Она оставлена в отдельной редакции.
- EN Application употребляет approved рядом с Fiat, но раздел Performance явно говорит Meets Fiat 9.55535-S1. В массив OEM approvals Fiat не перенесён.
- Венгерский SDS 466947-DE04: KV40 60.3 против 51 mm²/s PDS; это не округление. KV100 9.5 входит в 9.3–12.44; Pour Point −39 совпадает. Региональный SDS не заменяет немецкий PDS и не подтверждает формулу конкретной упаковки.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- В EN Application Fiat упомянут как approved, но Performance явно Meets. Для публикации Fiat только Meets; физические различия HU SDS отдельно.

### ARAL-006 — Aral HighTronic M 5W-40

Категория: PKW; SAE: 5W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 21407 | 1 L | user_assortment |
| 156EC2 | 208 L | user_assortment |
| 21404 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-006; контентная редакция: wepp-ch72wf.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
  "date": "2022-08-10",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
  "status": "selected_main",
  "document_key_code": "467457",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=c15d553ca1730685cd59eb7b1d9af9d6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german-de_sdb_467457.pdf",
  "date": "2026-04-09",
  "market": "Germany",
  "language": "de",
  "version": "13",
  "product_code": "467457-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "A3/B4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 226.5/ 229.3/ 229.5",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA A3/B4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "Mercedes-Benz; AMG; Brabus; VW",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-01",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche A40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 502 00/ 505 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0,8519 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 12,9 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 6000 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 70 |
| Индекс вязкости | ASTM D2270 | — | 188 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Температура вспышки, PMCC | ASTM D93 | °C | 213 |
| Сульфатная зольность | ASTM D874 | % wt | 1,2 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Performance согласован; DE/Global PDS одной даты. Основной DE; физические таблицы не смешаны.

### ARAL-007 — Aral HighTronic R 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 16008 | 1 L | user_assortment |
| 16004 | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **verified**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-007; контентная редакция: wepp-d6fpfv.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
  "date": "2024-06-21",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
  "status": "selected_main",
  "document_key_code": "466927",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/DC12B86E54D42D9F80258DAB005800B2/%24File/3264125.pdf",
  "date": "2026-02-26",
  "market": "Hungary",
  "language": "hu",
  "version": "7",
  "product_code": "466927-BE02",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [
    "C4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 226.51",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [],
  "recommended_for": [],
  "other": [],
  "api_claim_original": null,
  "acea_claim_original": "ACEA C4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA C4; Renault; DPF",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "Renault RN 0720",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.850 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 12.2 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 71 |
| Индекс вязкости | ASTM D2270 | — | 171 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 6200 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Температура вспышки, PMCC | ASTM D93 | °C | 238 |
| Сульфатная зольность | ASTM D874 | % wt | 0.5 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Общие показатели DE и Global/EN PDS совпадают; немецкий документ на день новее. Найден HU SDS, но раздел 9 недоступен.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- Performance и общие физические строки двух PDS совпадают. Section 9 HU SDS не извлечён: verified относится к PDS, не к полноте SDS.

### ARAL-008 — Aral SuperTronic E 0W-30

Категория: PKW; SAE: 0W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 10508 | 1 L | user_assortment |
| 10502 | 208 L | user_assortment |
| 10504 | 4 L | user_assortment |

Identity: **verified**; Performance: **manual_review**; Physical: **review_note**; technical_publication_allowed: **false**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-008; контентная редакция: wepp-djce7p.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
  "date": "2025-06-02",
  "market": "Global",
  "language": "en",
  "document_key": "aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
  "status": "selected_main",
  "document_key_code": "463348",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/2276ECF64B17A03480258D5D00791DEB/%24File/3244703.pdf",
  "date": "2025-12-10",
  "market": "Hungary",
  "language": "hu",
  "version": "1.03",
  "product_code": "463348-DE01",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SP"
  ],
  "acea": [
    "C2"
  ],
  "api_claim_original": "API SP",
  "acea_claim_original": "ACEA C2",
  "official_approvals": [],
  "meets": [],
  "recommended_for": [
    {
      "claim_original": "strongly recommended for use in Volvo vehicles",
      "claim_type": "recommended_for",
      "source_section": "Application",
      "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf"
    }
  ],
  "other": [],
  "application_references": [
    {
      "claim_original": "ACEA A5/B5",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
      "source_section": "Description / Application"
    }
  ],
  "performance_levels": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.8420 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 10.6 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 56.9 |
| Индекс вязкости | ASTM D2270 | — | 180 |
| Динамическая вязкость CCS при −35 °C | ASTM D5293 | mPa.s (cP) | 5685 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 209 |
| Сульфатная зольность | ASTM D874 | % wt | 0.6 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Новая EN редакция 2025-06-02 сохранена как источник с конфликтом; старую DE 2021-05-20 не заменял молча. HU SDS: KV100 9.55–10 не включает EN PDS 10.6 mm²/s.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- Внутри выбранного PDS: ACEA C2 в Performance против A5/B5 в Application. Физические редакции разных дат и рынков сохранены отдельно.

**Сохранённые неразрешённые вопросы:**

```json
[
  {
    "field": "ACEA Performance vs Application",
    "pds_value": "Performance: ACEA C2",
    "other_value": "Description/Application: ACEA A5/B5",
    "pds_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "other_source_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "reason": "Несогласованность внутри EN PDS 2025-06-02; применимость нельзя автоматически определить.",
    "resolution": null
  },
  {
    "field": "Performance edition",
    "pds_value": "API SP; ACEA C2",
    "other_value": "API SL/CF; ACEA A5/B5",
    "pds_url": "https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf",
    "other_source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=80614e0f24eec2af3c9384c3d0a3a9e1&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_germany_german_pdb_463348.pdf",
    "reason": "DE 2021 и EN 2025 имеют разные Performance и характеристики; преемственность состава не установлена.",
    "resolution": null
  }
]
```

### ARAL-009 — Aral SuperTronic G 0W-40

Категория: PKW; SAE: 0W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 15A8A | 1 L | user_assortment |
| 15A8AD | 4 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-009; контентная редакция: wepp-dh9j8d.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
  "status": "selected_main",
  "document_key_code": "469294",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```
**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=650d3975c8970858ed0207f921d651da&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german-de_sdb_469294.pdf",
  "date": "2026-04-10",
  "market": "Germany",
  "language": "de",
  "version": "12.02",
  "product_code": "469294-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SQ"
  ],
  "acea": [
    "A3/B4"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.5",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Fulfils the technical requirements of MB 229.3",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SQ",
  "acea_claim_original": "ACEA A3/B4",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA A3/B3; ACEA A3/B4; API SQ",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Anwendung"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-01",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche A40",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 502 00 / 505 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.844 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 13.3 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 76 |
| Индекс вязкости | ASTM D2270 | — | 180 |
| Динамическая вязкость CCS при −35 °C | ASTM D5293 | mPa.s (cP) | 5980 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Температура вспышки, PMCC | ASTM D93 | °C | 210 |
| Сульфатная зольность | ASTM D874 | % wt | 1.2 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- PDS DE CCS −35 °C 5980 против EN 6000 mPa.s — небольшое различие редакций. SDS KV40 75.6 против PDS 76; KV100 13.3 входит в 13–14. Вспышка 210 и Pour Point −45 совпадают.
- Коммерческий SKU 15A8A сохранён как предоставлен; не дополнен до предполагаемого артикула.
- Performance выбранного датированного PDS подтверждён. Незначительные различия CCS и PDS/SDS — физическое примечание.

### ARAL-010 — Aral SuperTronic K 5W-30

Категория: PKW; SAE: 5W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 15DBCC | 1 L | user_assortment |
| 15DBC5 | 20 L | user_assortment |
| 15DBCE | 4 L | user_assortment |
| 15F477 | 5 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-010; контентная редакция: wepp-df3s57.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
  "status": "selected_main",
  "document_key_code": "470247",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8b6204e3832273ddcf5a18fb7e833828&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german-de_sdb_470247.pdf",
  "date": "2025-09-22",
  "market": "Germany",
  "language": "de",
  "version": "10.02",
  "product_code": "470247-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SQ"
  ],
  "acea": [
    "C3"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.51/ 229.52",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Fulfils technical requirement of MB 229.31",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [],
  "api_claim_original": "API SQ",
  "acea_claim_original": "ACEA C3",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "VW; Audi; SEAT; Skoda; Mercedes-Benz; BMW",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Beschreibung (отдельного Application нет)"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-04",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "OPEL OV 040 1547 - D30/ G30",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche C30",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Renault RN 0700 / RN 0710",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 504 00/ 507 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.851 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 12.0 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 69 |
| Индекс вязкости | ASTM D2270 | — | 173 |
| Динамическая вязкость CCS при −30 °C | ASTM D5293 | mPa.s (cP) | 5800 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 196 |
| Сульфатная зольность | ASTM D874 | % wt | 0.71 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- PDS/SDS: KV100 12.0 входит в 11.6–12.4; KV40 69/70.23; вспышка 196/194 °C; Pour Point −42/−43 °C. Небольшие отличия документов сохранены раздельно.
- Выбран SDS 470247-DE01 2025 года; старый 469992-DE01 2022 года сохранён отдельно. Версии разных базовых кодов не трактуются как одна последовательность.
- Веб-страница указывает API SP, текущий датированный PDS — SQ; использована новая PDS-редакция. MB 229.31 в PDS — Fulfils technical requirement, не Approval.
- Текущий PDS: API SQ; прежняя веб-страница SP. MB 229.31 — Fulfils, не Approval; контекст редакции сохранён.

### ARAL-011 — Aral SuperTronic Longlife III 0W-30

Категория: PKW; SAE: 0W-30.

| SKU | Фасовка | Источник |
|---|---|---|
| 15F474 | 1 L | user_assortment |
| 160EC7 | 5 L | user_assortment |

Identity: **verified**; Performance: **review_note**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-011; контентная редакция: wepp-dbd8r2.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
  "date": "2025-11-03",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
  "status": "selected_main",
  "document_key_code": "470402",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://msdspds.aral.com/ussds/amersdsf.nsf/Files/983F35C88B08C2D880258D5C00581C24/%24File/3243362.pdf",
  "date": "2025-12-09",
  "market": "Hungary",
  "language": "hu",
  "version": "4",
  "product_code": "470402-DE01",
  "access_status": "official_url_search_index_excerpt_only"
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.31/ 229.51/ 229.52",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche C30",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
      "source_section": "Spezifikationen",
      "classification_basis": "Anwendung прямо говорит о допуске Porsche C30 и VW 504 00/507 00."
    },
    {
      "claim_original": "VW 504 00/ 507 00",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
      "source_section": "Spezifikationen",
      "classification_basis": "Anwendung прямо говорит о допуске Porsche C30 и VW 504 00/507 00."
    }
  ],
  "meets": [],
  "recommended_for": [],
  "other": [],
  "api_claim_original": null,
  "acea_claim_original": null,
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-04",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | DIN 51757 | g/ml | 0.843 |
| Кинематическая вязкость при 100 °C | DIN 51562 | mm²/s | 12.3 |
| Динамическая вязкость CCS при −35 °C | DIN 51377 | mPa.s (cP) | 5930 |
| Кинематическая вязкость при 40 °C | DIN 51562 | mm²/s | 61 |
| Индекс вязкости | DIN ISO 2909 | — | 205 |
| Температура застывания (Pour Point) | ASTM D5950 | °C | -48 |
| Сульфатная зольность | DIN 51575 | % wt | 0.85 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- В выбранном PDS API и ACEA не указаны: массивы пустые. Они не выведены из OEM-допусков.
- В старом EN PDS есть вспышка 196 °C, в новом DE строки нет; отсутствие не является отрицанием. HU SDS >180 °C PMCC совместим с 196; открытый тигель 230 °C — иной метод.
- KV40 61 совпадает, KV100 12.3 входит в SDS 11.5–12.4; Pour Point −48 совпадает.
- SDS найден на официальном домене через индекс; полное прямое открытие не удалось. Рынок HU не следует автоматически использовать как SDS для иной страны.
- API/ACEA отсутствуют в выбранном PDS: публиковать только явно перечисленные OEM-заявления, не вычислять отсутствующие категории.

### ARAL-012 — Aral SuperTronic Longlife IV FE 0W-20

Категория: PKW; SAE: 0W-20.

| SKU | Фасовка | Источник |
|---|---|---|
| 15F45F | 1 L | user_assortment |
| 15F460 | 5 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-012; контентная редакция: wepp-d8te3h.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
  "date": "2025-05-02",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
  "status": "selected_main",
  "document_key_code": "469571",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=839edbeabc6b6dd7df4756697047871c&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german-de_sdb_469571.pdf",
  "date": "2026-04-08",
  "market": "Germany",
  "language": "de",
  "version": "7.05",
  "product_code": "469571-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "SQ"
  ],
  "acea": [
    "C5",
    "C6"
  ],
  "official_approvals": [
    {
      "claim_original": "MB-Approval 229.71/ 229.72",
      "claim_type": "official_approval",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "meets": [
    {
      "claim_original": "Fulfills the technical requirement of BMW Longlife-14 FE+",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [],
  "other": [
    {
      "claim_original": "ILSAC GF-7",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "api_claim_original": "API SQ",
  "acea_claim_original": "ACEA C5, C6",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "ACEA C5/C6; SAE 0W-20",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Anwendung"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "BMW Longlife-17 FE+",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Porsche C20",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "VW 508 00/ 509 00",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.844 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 7.97 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 42 |
| Индекс вязкости | ASTM D2270 | — | 166 |
| Динамическая вязкость CCS при −35 °C | ASTM D5293 | mPa.s (cP) | 5822 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -45 |
| Сульфатная зольность | ASTM D874 | % wt | 0.74 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Официальное название LL IV FE отличается сокращением от коммерческого Longlife IV FE; оба ваших SKU и объёмы подтверждены официальной страницей.
- EN PDS дополнительно содержит вспышку 200 °C; в DE строки нет. SDS 200.5 °C — близкое значение, не перенесено в DE PDS.
- SDS KV40 41.63 против PDS 42; KV100 7.97 входит в 7.8–8.5; Pour Point −45 совпадает.
- LL IV FE — официальное написание коммерческого Longlife IV FE; SAE и линия подтверждены. Физические округления отдельно.

### ARAL-013 — Aral MegaTurboral 10W-40

Категория: Truck; SAE: 10W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 23937 | 208 L | user_assortment |
| 13932 | 20 L | user_assortment |
| 10625 | 5 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **review_note**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-013; контентная редакция: wepp-df4c8c.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
  "date": "2026-02-12",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
  "status": "selected_main",
  "document_key_code": "456130",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=c8ea456be6fe7b176ddbe8c5459cd81f&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german-de_sdb_456130.pdf",
  "date": "2025-10-13",
  "market": "Germany",
  "language": "de",
  "version": "11",
  "product_code": "456130-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CI-4"
  ],
  "acea": [
    "E4",
    "E7"
  ],
  "official_approvals": [],
  "meets": [],
  "recommended_for": [],
  "other": [
    {
      "claim_original": "JASO DH-1",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "api_claim_original": "API CI-4",
  "acea_claim_original": "ACEA E4, E7",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [
    {
      "claim_original": null,
      "reference": "Euro 2/3/4/5/6; не Low SAPS",
      "claim_type": "application_reference",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Anwendung"
    }
  ],
  "performance_levels": [
    {
      "claim_original": "Cummins CES 20077, CES 20078",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "DDC Powerguard 93K215",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Deutz DQC III-18",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "DTFR 15B120",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Mack EO-N",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "MAN M 3277",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "MTU Oil Category 3",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "RVI RLD-2",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Volvo VDS-3",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.868 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 14.8 |
| Динамическая вязкость CCS при −25 °C | ASTM D5293 | mPa.s (cP) | 6100 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 98 |
| Сульфатная зольность | ASTM D874 | % wt | 1.83 |
| Общее щелочное число, TBN | ASTM D2896 | mg KOH/g | 12.7 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS KV40 98.3 против PDS 98 — небольшое различие; KV100 14.8 входит в 14–15.1. Pour Point −42/−39 °C сохранены отдельно; метод SDS не указан. SDS-вспышка 215 °C не добавлена в PDS.
- По SDS смесь имеет классификацию Skin Sens. 1 / H317. Это отдельная запись безопасности.
- Performance выбранного PDS подтверждён. Небольшие физические различия и классификация безопасности SDS отдельно.

### ARAL-014 — Aral MegaTurboral LA 10W-40

Категория: Truck; SAE: 10W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 1620 | 20 L | user_assortment |
| 11289 | 208 L | user_assortment |

Identity: **verified**; Performance: **verified**; Physical: **manual_review**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-014; контентная редакция: wepp-df4cev.

**Основной технический PDS:**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
  "date": "2025-03-25",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
  "status": "selected_main",
  "document_key_code": "463176",
  "recency_scope": "latest_found_in_previous_project_material_not_global_certification"
}
```

**SDS (без изменения):**

```json
{
  "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=4144d7670fedd3e402bb73510c9718e3&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german-de_sdb_463176.pdf",
  "date": "2026-04-07",
  "market": "Germany",
  "language": "de",
  "version": "9",
  "product_code": "463176-DE01",
  "access_status": "official_pdf_text_read"
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CJ-4"
  ],
  "acea": [
    "E6",
    "E7",
    "E8",
    "E9",
    "E11"
  ],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets requirements of- MAN M 3271-1, M 3477",
      "claim_type": "meets",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "recommended_for": [
    {
      "claim_original": "For Iveco trucks requiring ACEA E6, E7, E8, E9, E11",
      "claim_type": "recommended_for",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "For DAF trucks requiring ACEA E6, E7, E8, E9, E11",
      "claim_type": "recommended_for",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "other": [
    {
      "claim_original": "JASO DH-2",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    }
  ],
  "api_claim_original": "API CJ-4",
  "acea_claim_original": "ACEA E6, E7, E8, E9, E11",
  "classification_note": "Без явного Approval/Freigabe либо прямого указания об одобрении в PDS OEM-обозначения сохранены как performance_level. Это не утверждение об отсутствии реального допуска.",
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "CAT ECF-3",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Cummins CES 20081",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Deutz DQC IV-18 LA",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "DTFR 15C110",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Mack EO-O Premium Plus, EOS-4.5",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "MTU Oil Category 3.1",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "RVI RLD-3",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    },
    {
      "claim_original": "Volvo CNG, VDS-4.5",
      "claim_type": "performance_level",
      "source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
      "source_section": "Spezifikationen"
    }
  ]
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D1298 | g/ml | 0.86 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 13.7 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 99 |
| Динамическая вязкость CCS при −25 °C | ASTM D5293 | mPa.s (cP) | 6100 |
| Индекс вязкости | ASTM D2270 | — | 138 |
| Сульфатная зольность | ASTM D874 | % wt | 0.96 |
| Общее щелочное число, TBN | ASTM D2896 | mg KOH/g | 9.6 |
| Температура застывания (Pour Point) | ASTM D97 | °C | -42 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- SDS KV40 100.9 против PDS 99; плотность PDS согласуется с ограничением SDS. Отличия KV100 и Pour Point требуют проверки редакции.
- Performance подтверждён PDS; противоречий Performance среди прочитанных источников не установлено. KV100/Pour Point остаются на ручной проверке.

**Сохранённые неразрешённые вопросы:**

```json
[
  {
    "field": "kv100",
    "pds_value": "13.7 mm²/s",
    "other_value": "14.2–15.2 mm²/s",
    "pds_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
    "other_source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=4144d7670fedd3e402bb73510c9718e3&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german-de_sdb_463176.pdf",
    "reason": "Значение PDS вне диапазона SDS для того же названия, SAE и базового кода. Это не совместимое представление точки и диапазона; требуется подтверждение редакции.",
    "resolution": null
  },
  {
    "field": "pour",
    "pds_value": "-42 °C",
    "other_value": "-36 °C",
    "pds_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf",
    "other_source_url": "https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=4144d7670fedd3e402bb73510c9718e3&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german-de_sdb_463176.pdf",
    "reason": "Дополнительное расхождение; метод SDS не указан. Не заменяет PDS и само по себе не доказывает другой продукт.",
    "resolution": null
  }
]
```

### ARAL-015 — Aral ExtraTurboral SAE 10W-40

Категория: Truck; SAE: 10W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 11190 | 208 L | user_assortment |
| 22003 | 20 L | user_assortment |
| 22004 | 5 L | user_assortment |
| 2682 | 60 L | user_assortment |

Identity: **user_confirmed**; Performance: **verified**; Physical: **verified**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-015; контентная редакция: aral_turboral_10w-40_germany_german_pdb_467759.

**Основной технический PDS:**

```json
{
  "source_url": null,
  "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
  "date": "2025-11-27",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_turboral_10w-40_germany_german_pdb_467759.pdf",
  "document_key_code": "467759",
  "document_key_basis": "uploaded_filename",
  "status": "selected_main",
  "identity_basis": "user_confirmed",
  "recency_scope": "user_assigned_accepted_DE_PDS; no new search"
}
```

**Provenance PDS — название документа, не имя товара:** Aral Turboral 10W-40. SHA-256: `181e2ebd679c081296b117701b1355bd26109fa1394e4b4f486ba05a3af97c9d`. Идентичность подтверждена пользователем.

Прежние кандидатные документы, сведения SKU и выводы v1.1 сохранены в JSON в pds.provenance.previous_history. Различия исторических редакций не переписаны как ошибочные; они больше не блокируют назначенный пользователем PDS.

**SDS (без изменения):**

```json
{
  "source_url": null,
  "date": null,
  "market": null,
  "language": null,
  "version": null,
  "product_code": null
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CI-4",
    "SL"
  ],
  "acea": [
    "E7"
  ],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets requirements of MAN M 3275-1",
      "claim_type": "meets",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    }
  ],
  "recommended_for": [],
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "CAT ECF-2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "Cummins CES 20077, CES 20078",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "DDC Powerguard 93K215",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "Deutz DQC III-18",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "DTFR 15B110",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "Mack EO-M Plus, EO-N",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "MTU Oil Category 2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "RVI RLD-2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    },
    {
      "claim_original": "Volvo VDS-3",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_10w-40_germany_german_pdb_467759.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-11-27"
    }
  ],
  "other": [],
  "api_claim_original": "API CI-4/SL",
  "acea_claim_original": "ACEA E7",
  "classification_note": "Индивидуальные OEM-строки раздела Spezifikationen без явного Approval/Freigabe классифицированы как performance_level. Общая фраза о Freigaben не доказывает тип каждого конкретного допуска. Meets не является Approval. Пустой official_approvals не означает, что продукт не имеет реальных одобрений."
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0.87 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 14.4 |
| Вязкость CCS при −25 °C | ASTM D5293 | mPa.s (cP) | 6400 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 99 |
| Индекс вязкости | ASTM D2270 | — | 150 |
| Сульфатная зольность | ASTM D874 | % wt | 1.4 |
| Общее щелочное число, TBN | ASTM D2896 | mg KOH/g | 10.5 || Температура застывания | ASTM D97 | °C | -42 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Выбран только подтверждённый немецкий PDS; EN-редакции не смешаны с его показателями.
- Различия исторических редакций и прежние ограничения сохранены в pds.provenance.previous_history, не являются текущим запретом публикации.
- SDS не назначен этой задачей; технические данные взяты только из PDS.

### ARAL-016 — Aral масло Turboral (Plus) 15W-40

Категория: Truck; SAE: 15W-40.

| SKU | Фасовка | Источник |
|---|---|---|
| 22119 | 208 L | user_assortment |
| 11281 | 20 L | user_assortment |
| 14047 | 60 L | user_assortment |

Identity: **user_confirmed**; Performance: **verified**; Physical: **verified**; technical_publication_allowed: **true**.

**Content:** complete; ARAL_CONTENT_LAYER_v1.2.json → ARAL-016; контентная редакция: aral_turboral_15w-40_germany_german_pdb_467736.

**Основной технический PDS:**

```json
{
  "source_url": null,
  "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
  "date": "2025-03-31",
  "market": "Germany",
  "language": "de",
  "document_key": "aral_turboral_15w-40_germany_german_pdb_467736.pdf",
  "document_key_code": "467736",
  "document_key_basis": "uploaded_filename",
  "status": "selected_main",
  "identity_basis": "user_confirmed",
  "recency_scope": "user_assigned_accepted_DE_PDS; no new search"
}
```

**Provenance PDS — название документа, не имя товара:** Aral Turboral 15W-40. SHA-256: `c3acf7c3ff785cba20f23f4289d81b0ff8163dc18e1febcaf54e7c6827141db3`. Идентичность подтверждена пользователем.

Прежние кандидатные документы, сведения SKU и выводы v1.1 сохранены в JSON в pds.provenance.previous_history. Различия исторических редакций не переписаны как ошибочные; они больше не блокируют назначенный пользователем PDS.

**SDS (без изменения):**

```json
{
  "source_url": null,
  "date": null,
  "market": null,
  "language": null,
  "version": null,
  "product_code": null
}
```

**Performance / Specifications:**

```json
{
  "api": [
    "CI-4",
    "SL"
  ],
  "acea": [
    "E7"
  ],
  "official_approvals": [],
  "meets": [
    {
      "claim_original": "Meets requirements of MAN M 3275-1",
      "claim_type": "meets",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    }
  ],
  "recommended_for": [],
  "application_references": [],
  "performance_levels": [
    {
      "claim_original": "CAT ECF-2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "Cummins CES 20077, CES 20078",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "DDC Powerguard 93K215",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "Deutz DQC III-18",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "DTFR 15B110",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "Mack EO-M Plus EO-N",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "MTU Oil Category 2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "RVI RLD-2",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    },
    {
      "claim_original": "Volvo VDS-3",
      "claim_type": "performance_level",
      "source_url": null,
      "source_file": "C:\\Users\\Shevc\\OneDrive\\Рабочий стол\\ппппдддс\\aral_turboral_15w-40_germany_german_pdb_467736.pdf",
      "source_section": "Spezifikationen",
      "source_date": "2025-03-31"
    }
  ],
  "other": [],
  "api_claim_original": "API CI-4/SL",
  "acea_claim_original": "ACEA E7",
  "classification_note": "Индивидуальные OEM-строки раздела Spezifikationen без явного Approval/Freigabe классифицированы как performance_level. Общая фраза о Freigaben не доказывает тип каждого конкретного допуска. Meets не является Approval. Пустой official_approvals не означает, что продукт не имеет реальных одобрений."
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| Плотность при 15 °C | ASTM D4052 | g/ml | 0,875 |
| Кинематическая вязкость при 100 °C | ASTM D445 | mm²/s | 14,7 |
| Вязкость CCS при −20 °C (15W) | ASTM D5293 | mPa.s (cP) | 5410 |
| Кинематическая вязкость при 40 °C | ASTM D445 | mm²/s | 109 |
| Индекс вязкости | ASTM D2270 | — | 140 |
| Сульфатная зольность | ASTM D874 | % wt | 1,42 |
| Общее щелочное число, TBN | ASTM D2896 | mg KOH/g | 10,6 |
| Температура застывания | ASTM D97 | °C | -42 |
| Температура вспышки, PMCC | ASTM D93 | °C | 209 |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Выбран только подтверждённый немецкий PDS; EN-редакции не смешаны с его показателями.
- Различия исторических редакций и прежние ограничения сохранены в pds.provenance.previous_history, не являются текущим запретом публикации.
- SDS не назначен этой задачей; технические данные взяты только из PDS.

### ARAL-017 — Aral Silikatfrei G12

Категория: Coolant; SAE: не применяется.

| SKU | Фасовка | Источник |
|---|---|---|
| 90837 | 1 L | user_master_request |

Identity: **manual_review**; Performance: **manual_review**; Physical: **manual_review**; technical_publication_allowed: **false**.

**Content:** unavailable; ARAL_CONTENT_LAYER_v1.2.json → ARAL-017; контентная редакция: None.

**Основной технический PDS:**

```json
{
  "source_url": null,
  "date": null,
  "market": null,
  "language": null,
  "document_key": null,
  "status": "missing_exact_match"
}
```

**SDS (без изменения):**

```json
{
  "source_url": null,
  "date": null,
  "market": null,
  "language": null,
  "version": null,
  "product_code": null
}
```

**Performance / Specifications:**

```json
{
  "api": [],
  "acea": [],
  "official_approvals": [],
  "meets": [],
  "recommended_for": [],
  "application_references": [],
  "performance_levels": [],
  "other": []
}
```

**Typical Characteristics:**

| Показатель | Метод | Единица | Значение |
|---|---|---|---|
| — | — | — | Нет назначенных значений |

Значения относятся только к указанному Main PDS. Ограничения Physical и Technical publication действуют независимо от полноты CONTENT.

**Примечания:**

- Официальный PDS Aral Antifreeze Silikatfrei найден. Он не содержит SKU 90837, G12 или VW TL 774D; связь с вашей позицией не доказана. Отсутствие G12 не является доказательством несовместимости.
- SDS производителя 2020 найден как копия у дистрибьютора; актуальность не подтверждена. Основной портал вернул ошибку доступа.
- Публично оставлены только коммерческое имя, SKU и 1 л из задания. Цвет, концентрация и нормы кандидата не перенесены.

**Сохранённые неразрешённые вопросы:**

```json
[
  {
    "field": "identity / SKU / G12",
    "commercial_value": "Aral Silikatfrei G12; 90837; 1 L",
    "candidate_value": "Aral Antifreeze Silikatfrei; document 456112",
    "result": "unresolved_identity",
    "reason": "Нет первичного cross-reference, связывающего SKU 90837 и обозначение G12 с документом 456112."
  }
]
```

**Отдельная ручная справка пользователя — не verified official data:**

```json
{
  "source_type": "user_provided_manual_reference",
  "source_name": "Aral Antifreeze Silikatfrei",
  "source_file": "C:\\Users\\Shevc\\.codex\\attachments\\c3bc4b07-4e08-4b39-a82d-14a8d73c5e93\\Pasted text.txt",
  "verified_official_data": false,
  "description": "Антифриз долговременного действия для современных автомобилей, в том числе с алюминиевыми блоками цилиндров.",
  "stated_specifications": [
    "VW/Audi/SEAT/Skoda: VW TL 774D",
    "MB 325.3",
    "Ford WSSM97B44-D",
    "Renault Type D",
    "DAF",
    "Opel после 2001",
    "MAN 324 Type SNF",
    "ASTM D4985",
    "ASTM D3306"
  ],
  "stated_properties": [
    "защита металлов",
    "нейтральность к уплотнителям и прокладкам",
    "отсутствие силикатов",
    "отсутствие нитритов",
    "отсутствие фосфатов",
    "отсутствие аминных соединений",
    "цвет розово-фиолетовый",
    "концентрация 33% — примерно до −20 °C",
    "концентрация 50% — примерно до −40 °C",
    "не смешивать с силикатсодержащими антифризами"
  ],
  "unresolved": [
    "связь SKU 90837 с официальным Aral Antifreeze Silikatfrei",
    "точное обозначение G12 / G12+",
    "официальные формулировки допусков",
    "концентрации",
    "цвет",
    "совместимость"
  ],
  "scope": "Справка пользователя; не переносить в официальные характеристики или публичный verified-контент."
}
```

## Полный перечень изменённых полей

Пути относительны к объекту продукта. Старые значения доступны в неизменённом v1.1; перечень не скрывает перемещение исторических материалов.

### ARAL-001

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-002

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-003

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-004

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-005

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-006

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-007

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-008

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added

### ARAL-009

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-010

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-011

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-012

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-013

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-014

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.source_url` — removed_or_relocated
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `public_product_data.content.accepted_content_document_ids` — added
- `public_product_data.content.advantages_original` — removed_or_relocated
- `public_product_data.content.advantages_ru` — removed_or_relocated
- `public_product_data.content.application_original` — removed_or_relocated
- `public_product_data.content.application_ru` — removed_or_relocated
- `public_product_data.content.content_product_id` — added
- `public_product_data.content.content_source` — added
- `public_product_data.content.content_source_sha256` — added
- `public_product_data.content.content_status` — changed
- `public_product_data.content.description_ru` — removed_or_relocated
- `public_product_data.content.official_description_original` — removed_or_relocated
- `public_product_data.content.preferred_content_document_id` — added
- `public_product_data.content.previous_inline_content_reference` — added
- `public_product_data.content.source_url` — removed_or_relocated
- `public_product_data.content.storage_mode` — added
- `public_product_data.content.technical_fields_source` — added

### ARAL-015

- `internal_source_data.candidate_documents` — removed_or_relocated
- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `internal_source_data.history_sources` — removed_or_relocated
- `internal_source_data.identification.commercial_name` — changed
- `internal_source_data.identification.current_line_name` — changed
- `internal_source_data.matching_evidence` — removed_or_relocated
- `internal_source_data.pds.date` — changed
- `internal_source_data.pds.document_key` — changed
- `internal_source_data.pds.document_key_basis` — added
- `internal_source_data.pds.document_key_code` — added
- `internal_source_data.pds.identity_basis` — added
- `internal_source_data.pds.language` — changed
- `internal_source_data.pds.market` — changed
- `internal_source_data.pds.provenance` — added
- `internal_source_data.pds.recency_scope` — added
- `internal_source_data.pds.source_file` — added
- `internal_source_data.pds.status` — changed
- `internal_source_data.performance.acea` — changed
- `internal_source_data.performance.acea_claim_original` — added
- `internal_source_data.performance.api` — changed
- `internal_source_data.performance.api_claim_original` — added
- `internal_source_data.performance.classification_note` — added
- `internal_source_data.performance.meets` — changed
- `internal_source_data.performance.performance_levels` — changed
- `internal_source_data.publication_exclusions` — changed
- `internal_source_data.sku_identity_evidence` — removed_or_relocated
- `internal_source_data.typical_characteristics` — changed
- `internal_source_data.validation.confidence` — removed_or_relocated
- `internal_source_data.validation.current_formula_equivalence` — removed_or_relocated
- `internal_source_data.validation.historical_name_status` — removed_or_relocated
- `internal_source_data.validation.identity_basis` — added
- `internal_source_data.validation.identity_status` — changed
- `internal_source_data.validation.physical_properties_status` — changed
- `internal_source_data.validation.physical_verification_scope` — added
- `internal_source_data.validation.review_notes` — changed
- `internal_source_data.validation.status_source` — changed
- `internal_source_data.validation.technical_performance_status` — changed
- `internal_source_data.validation.technical_publication_allowed` — changed
- `internal_source_data.validation.unresolved_conflicts` — changed
- `public_product_data.SAE` — added
- `public_product_data.commercial_name` — changed
- `public_product_data.content` — added
- `public_product_data.pds` — added
- `public_product_data.performance` — added
- `public_product_data.product_family` — added
- `public_product_data.technical_context` — added
- `public_product_data.typical_characteristics` — added

### ARAL-016

- `internal_source_data.candidate_documents` — removed_or_relocated
- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `internal_source_data.history_sources` — removed_or_relocated
- `internal_source_data.identification.commercial_name` — changed
- `internal_source_data.identification.current_line_name` — changed
- `internal_source_data.matching_evidence` — removed_or_relocated
- `internal_source_data.pds.date` — changed
- `internal_source_data.pds.document_key` — changed
- `internal_source_data.pds.document_key_basis` — added
- `internal_source_data.pds.document_key_code` — added
- `internal_source_data.pds.identity_basis` — added
- `internal_source_data.pds.language` — changed
- `internal_source_data.pds.market` — changed
- `internal_source_data.pds.provenance` — added
- `internal_source_data.pds.recency_scope` — added
- `internal_source_data.pds.source_file` — added
- `internal_source_data.pds.status` — changed
- `internal_source_data.performance.acea` — changed
- `internal_source_data.performance.acea_claim_original` — added
- `internal_source_data.performance.api` — changed
- `internal_source_data.performance.api_claim_original` — added
- `internal_source_data.performance.classification_note` — added
- `internal_source_data.performance.meets` — changed
- `internal_source_data.performance.performance_levels` — changed
- `internal_source_data.publication_exclusions` — changed
- `internal_source_data.sku_identity_evidence` — removed_or_relocated
- `internal_source_data.typical_characteristics` — changed
- `internal_source_data.validation.confidence` — removed_or_relocated
- `internal_source_data.validation.current_formula_equivalence` — removed_or_relocated
- `internal_source_data.validation.historical_name_status` — removed_or_relocated
- `internal_source_data.validation.identity_basis` — added
- `internal_source_data.validation.identity_status` — changed
- `internal_source_data.validation.physical_properties_status` — changed
- `internal_source_data.validation.physical_verification_scope` — added
- `internal_source_data.validation.review_notes` — changed
- `internal_source_data.validation.status_source` — changed
- `internal_source_data.validation.technical_performance_status` — changed
- `internal_source_data.validation.technical_publication_allowed` — changed
- `internal_source_data.validation.unresolved_conflicts` — changed
- `public_product_data.SAE` — added
- `public_product_data.commercial_name` — changed
- `public_product_data.content` — added
- `public_product_data.pds` — added
- `public_product_data.performance` — added
- `public_product_data.product_family` — added
- `public_product_data.technical_context` — added
- `public_product_data.typical_characteristics` — added

### ARAL-017

- `internal_source_data.content.accepted_content_document_ids` — added
- `internal_source_data.content.advantages_original` — removed_or_relocated
- `internal_source_data.content.advantages_ru` — removed_or_relocated
- `internal_source_data.content.application_original` — removed_or_relocated
- `internal_source_data.content.application_ru` — removed_or_relocated
- `internal_source_data.content.content_product_id` — added
- `internal_source_data.content.content_source` — added
- `internal_source_data.content.content_source_sha256` — added
- `internal_source_data.content.content_status` — changed
- `internal_source_data.content.description_ru` — removed_or_relocated
- `internal_source_data.content.official_description_original` — removed_or_relocated
- `internal_source_data.content.preferred_content_document_id` — added
- `internal_source_data.content.previous_inline_content_reference` — added
- `internal_source_data.content.storage_mode` — added
- `internal_source_data.content.technical_fields_source` — added
- `internal_source_data.user_provided_manual_reference` — added

## Финальный аудит

| Показатель | Значение |
|---|---:|
| products_total | 17 |
| identity_verified | 14 |
| technical_performance_verified | 11 |
| performance_review_note | 4 |
| performance_manual_review | 2 |
| physical_manual_review | 2 |
| technical_publication_allowed | 15/17 |
| PDS_missing | 1 |
| SDS_missing | 3 |
| content_incomplete | 1 |
| image_missing_or_unverified | 17 |
| known_skus | 47 |
| unknown_sku_package_sizes | 0 |
| motor_oils_total | 16 |
| content_complete | 16 |
| content_partial | 0 |
| content_unavailable | 1 |
| identity_user_confirmed | 2 |
| identity_verified_or_user_confirmed | 16 |
| identity_manual_review | 1 |

**Проверки пройдены:** 17 товаров; 16 масел; 47 уникальных SKU; все фасовки известны. Коммерческие блоки совпадают с v1.1. Технические блоки первых 14 масел совпадают с v1.1. Изменения названий строго соответствуют заданию, самовольных переименований нет. Хеши всех прежних файлов outputs совпали до и после сборки.

## Сохранённые ограничения

- SuperTronic E: Application A5/B5 против Performance C2. technical_publication_allowed=false; одна ACEA не выбрана.
- MegaTurboral LA: Performance verified и technical_publication_allowed=true, но Physical manual_review; спорные физические значения не исправлены.
- Silikatfrei G12: identity/performance/physical=manual_review, content=unavailable, technical_publication_allowed=false. Ручная справка хранится отдельно.
- SDS для Extra/Plus этой задачей не назначены. Их отсутствие не заменено данными PDS; technical publication относится к техническим сведениям из назначенного PDS.
