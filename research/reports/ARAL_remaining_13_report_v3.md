| Product | technical_performance_status | physical_properties_status | technical_publication_allowed | Journal 2026 |
|---|---|---|---|---|
| Aral BlueTronic II 10W-40 | review_note | review_note | true | Не сверялся в v3 |
| Aral HighTronic 5W-40 | verified | review_note | true | Только reference пользователя; строка не проверена |
| Aral HighTronic F 5W-30 | verified | review_note | true | Только reference пользователя; строка не проверена |
| Aral HighTronic J 5W-30 | review_note | review_note | true | Не сверялся в v3 |
| Aral HighTronic M 5W-40 | verified | review_note | true | Только reference пользователя; строка не проверена |
| Aral HighTronic R 5W-30 | verified | verified | true | Не сверялся в v3 |
| Aral SuperTronic E 0W-30 | manual_review | review_note | false | Только reference пользователя; строка не проверена |
| Aral SuperTronic G 0W-40 | verified | review_note | true | Не сверялся в v3 |
| Aral SuperTronic K 5W-30 | review_note | review_note | true | Не сверялся в v3 |
| Aral SuperTronic Longlife III 0W-30 | review_note | review_note | true | Не сверялся в v3 |
| Aral SuperTronic Longlife IV FE 0W-20 | verified | review_note | true | Не сверялся в v3 |
| Aral MegaTurboral 10W-40 | verified | review_note | true | Не сверялся в v3 |
| Aral MegaTurboral LA 10W-40 | verified | manual_review | true | unavailable |

# ARAL — техническая сверка v3

Дата: 11 октября 2026 года. Пересмотр выполнен по новым правилам на основе v2, сохранённых PDS/SDS и reference из текущего сообщения пользователя. **Отчёт завершает доступную проверку и разделение статусов; он не удостоверяет чтение оригинала журнала 2026.**

`technical_publication_allowed=true` означает разрешение публиковать подтверждённые SAE/API/ACEA и OEM/Performance с сохранением типов заявлений и примечаний. Это не разрешение публиковать спорные физические числа и не отметка о полной сверке журнала. Для SuperTronic E значение false.

## Происхождение данных журнала

Проверены доступные файлы Documents/Codex, outputs, document_records, work и папка вложений текущей задачи. Поиск по содержимому MD/JSON/TXT выявил только задания, отчёты и отметки о невыполненной сверке. PDF, сканы раздела ARAL и самостоятельный файл с извлечёнными строками журнала не найдены. Вложение Pasted text.txt — прежнее задание, не журнал. Исследование Extra/Plus использовано только для проверки наличия ранее извлечённых материалов, не повторялось.

Четыре набора из текущего сообщения сохранены ниже с `reference_source=user_provided_reference`, `reported_origin=previous_journal_extraction`, `journal_status=reference_only_unverified`. Для них `journal_source=null`, `journal_page=null`, `journal_row_text=null`, `journal_data_completion=null`. Это reference для сопоставления, а не новая независимая верификация строки журнала. У HighTronic пользователь дополнительно характеризует набор как приблизительный.

Метка `journal_source=extracted_previous_project_material` не назначена: подходящего извлечённого материала среди файлов не обнаружено. Для MegaTurboral LA: `journal_status=unavailable`, reference отсутствует; значения журнала не восстановлены из PDS.

В таблицах R означает reference пользователя. `match (R)` — совпадение значений с R, без утверждения, что журнал прочитан. `journal_supports_main_pds` и `journal_additional` не присвоены без строки источника. `null` в Result означает отсутствие основы сравнения; это не технический конфликт и не дополнительный статус из перечня.

## Правило источников и публикации

На каждый продукт выбран ровно один основной PDS. Его дата, рынок и язык сохранены. Более свежий SDS не является новой технической редакцией PDS. Документный ключ PDS не объявлен кодом фасовки; product code SDS приведён отдельно. Подтверждение актуальности здесь ограничено уже найденными документами, новый поиск не проводился.

При одинаковой дате DE/Global у HighTronic F и M выбран DE как последовательный основной рынок проекта; ни одна редакция не объявлена более новой. Различия других рынков не доказывают другой продукт или хронологическую смену состава. Рынок ваших поставок по-прежнему не установлен.

`verified` для Performance означает, что утверждения однозначно сохранены из выбранного официального PDS и в прочитанных документах нет неразрешённого противоречия Performance. Это не проверка реестров OEM и не обязательно подтверждение журналом. Неоднозначные OEM-перечни остаются performance_level; Meets, Recommended for и Application reference не повышены до Approval.

## Основание статусов всех 13 продуктов

| Product | Основание | Main PDS |
|---|---|---|
| Aral BlueTronic II 10W-40 | Performance из PDS; сохранено нетипичное написание VW 5 01 01 без автоматической правки. Физические значения PDS/SDS различаются. | [2025-11-03 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf) |
| Aral HighTronic 5W-40 | Performance DE/Global согласован; основной DE PDS новее на день. Reference согласуется с перечисленными значениями; это не чтение журнала. | [2024-11-08 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf) |
| Aral HighTronic F 5W-30 | Performance согласован; Ford остаётся Meets. Opel OV0401547-D40 не добавлен. DE/Global физические таблицы одной даты сохранены отдельно. | [2025-03-06 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf) |
| Aral HighTronic J 5W-30 | В EN Application Fiat упомянут как approved, но Performance явно Meets. Для публикации Fiat только Meets; физические различия HU SDS отдельно. | [2025-02-26 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf) |
| Aral HighTronic M 5W-40 | Performance согласован; DE/Global PDS одной даты. Основной DE; физические таблицы не смешаны. | [2022-08-10 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf) |
| Aral HighTronic R 5W-30 | Performance и общие физические строки двух PDS совпадают. Section 9 HU SDS не извлечён: verified относится к PDS, не к полноте SDS. | [2024-06-21 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf) |
| Aral SuperTronic E 0W-30 | Внутри выбранного PDS: ACEA C2 в Performance против A5/B5 в Application. Физические редакции разных дат и рынков сохранены отдельно. | [2025-06-02 Global/en](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf) |
| Aral SuperTronic G 0W-40 | Performance выбранного датированного PDS подтверждён. Незначительные различия CCS и PDS/SDS — физическое примечание. | [2025-11-03 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf) |
| Aral SuperTronic K 5W-30 | Текущий PDS: API SQ; прежняя веб-страница SP. MB 229.31 — Fulfils, не Approval; контекст редакции сохранён. | [2025-11-03 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf) |
| Aral SuperTronic Longlife III 0W-30 | API/ACEA отсутствуют в выбранном PDS: публиковать только явно перечисленные OEM-заявления, не вычислять отсутствующие категории. | [2025-11-03 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf) |
| Aral SuperTronic Longlife IV FE 0W-20 | LL IV FE — официальное написание коммерческого Longlife IV FE; SAE и линия подтверждены. Физические округления отдельно. | [2025-05-02 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf) |
| Aral MegaTurboral 10W-40 | Performance выбранного PDS подтверждён. Небольшие физические различия и классификация безопасности SDS отдельно. | [2026-02-12 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf) |
| Aral MegaTurboral LA 10W-40 | Performance подтверждён PDS; противоречий Performance среди прочитанных источников не установлено. KV100/Pour Point остаются на ручной проверке. | [2025-03-25 Germany/de](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf) |

Физический статус review_note сохраняет известные различия и ограничения источников; он не означает равенства чисел или доказанной смены рецептуры. В частности, у HighTronic/F/M разницы PDS/SDS остаются в примечаниях v2, но не пересматривают Performance. Для HighTronic R verified — согласованность прочитанных PDS; отдельная проверка Section 9 не завершена.

## Aral HighTronic 5W-40

`technical_performance_status=verified`; `physical_properties_status=review_note`; `technical_publication_allowed=true`.

| Источник | Дата | Рынок / язык | Код |
|---|---|---|---|
| [Main PDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf) | 2024-11-08 | Germany/de | document key 467316 |
| [Other PDS](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=0dbd3119228d43d4330d316454b10d98&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_global_english_pdb_467316.pdf) | 2024-11-07 | Global/en | 467316 |
| [SDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=d8881dd1b94f7bafdc79e387cd081177&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german-de_sdb_467316.pdf) | 2026-04-08 | Germany/de | 467316-DE01; version 3.04 |

**Точное название основного PDS:** Aral HighTronic 5W-40. Название/SAE другой прочитанной редакции совпадают; у MegaTurboral LA содержание Other PDS не прочитано.

**Журнал:** reference_only_unverified; R из текущего сообщения; страница и точная строка null.

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Product name | Aral HighTronic 5W-40 | R: Aral HighTronic 5W-40 | SDS: Aral HighTronic 5W-40 | match (R и прочитанные названия) |
| SAE | 5W-40 | R: 5W-40 | В названии SDS: 5W-40 | match (R) |
| ACEA | ACEA C3 | R: C3 | Other PDS: ACEA C3 | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| API | API CF/SN | R: SN/CF | Other PDS: API CF/SN | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| official_approvals | MB-Approval 229.31/ 229.51 | R: MB 229.31 / 229.51 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| meets | Meets Fiat 9.55535-S2, Ford WSS-M2C917-A, MB-226.5 | R: Fiat 9.55535-S2 (тип Approval/Meets в R не указан); Ford WSS-M2C917-A и MB-226.5 в R не указаны | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | GMdexos2™ supersedes GM-LL-B-025 and GM-LL-A-025 | R: GM Dexos2 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | OPEL OV 040 1547-D40 | Нет проверенной строки; в R не указано | Та же формулировка Performance в Other PDS по сохранённой сверке | match — Main/Other PDS |
| performance_level | Porsche A40 | R: Porsche A40 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | Renault RN 0700 / RN 0710 | R: Renault RN0700 / RN0710 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | VW 505 00/ 505 01 | R: VW 505 00 / 505 01 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| Применимость | Многие четырёхтактные бензиновые и дизельные двигатели легковых автомобилей, включая турбонаддув и непосредственный впрыск. | Нет проверенной строки; в R не указано | SDS не заменяет Application PDS | null |
| Data / Data Completion | Отдельное поле не извлечено | Нет проверенной строки; в R не указано | Нет сохранённых данных журнала | null |

**Физические свойства — отдельно от Performance:**

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Плотность при 15 °C | 0.849 g/ml; ASTM D4052 | Нет доступных физических строк журнала | Other PDS: 0.851 g/ml; ASTM D4052; SDS: <1000 kg/m³; метод не указан | regional_difference — Main/Other PDS |
| Кинематическая вязкость при 100 °C | 13.5 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 14.0 mm²/s; ASTM D445; SDS: 13.8–16.34 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Динамическая вязкость CCS при −30 °C | 5875 mPa.s (cP); ASTM D5293 | Нет доступных физических строк журнала | Other PDS: 5500 mPa.s (cP); ASTM D5293 | regional_difference — Main/Other PDS |
| Кинематическая вязкость при 40 °C | 79 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 86 mm²/s; ASTM D445; SDS: 85.5 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Индекс вязкости | 174 ; ASTM D2270 | Нет доступных физических строк журнала | Other PDS: 169 ; ASTM D2270 | regional_difference — Main/Other PDS |
| Температура застывания (Pour Point) | -42 °C; ASTM D97 | Нет доступных физических строк журнала | Other PDS: -45 °C; ASTM D97; SDS: -45 °C; метод не указан | regional_difference — Main/Other PDS |
| Сульфатная зольность | 0.8 % wt; ASTM D874 | Нет доступных физических строк журнала | Other PDS: 0.8 % wt; ASTM D874 | match — Main/Other PDS |

Числа Main PDS не заменены и не усреднены. Все строки его Typical Characteristics приведены выше; дополнительные свойства SDS/Other PDS остаются в прежних материалах, не дополняют основную таблицу автоматически.

Reference согласуется с C3, SN/CF и перечисленными OEM-обозначениями. Он не подтверждает тип допуска и не охватывает все заявления PDS. Более новая API в журнале не установлена. Для физической таблицы остаётся DE PDS 2024-11-08.

## Aral HighTronic F 5W-30

`technical_performance_status=verified`; `physical_properties_status=review_note`; `technical_publication_allowed=true`.

| Источник | Дата | Рынок / язык | Код |
|---|---|---|---|
| [Main PDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf) | 2025-03-06 | Germany/de | document key 456182 |
| [Other PDS](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=86ea0bdb9d1ff6bf58094e49e97c6b4f&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_global_english_pdb_456182.pdf) | 2025-03-06 | Global/en | 456182 |
| [SDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=add807b47040db44b3008baf86597def&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german-de_sdb_456182.pdf) | 2025-12-09 | Germany/de | 456182-DE01; version 17.01 |

**Точное название основного PDS:** Aral HighTronic F 5W-30. Название/SAE другой прочитанной редакции совпадают; у MegaTurboral LA содержание Other PDS не прочитано.

**Журнал:** reference_only_unverified; R из текущего сообщения; страница и точная строка null.

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Product name | Aral HighTronic F 5W-30 | R: Aral HighTronic F 5W-30 | SDS: Aral HighTronic F 5W-30 | match (R и прочитанные названия) |
| SAE | 5W-30 | R: 5W-30 | В названии SDS: 5W-30 | match (R) |
| ACEA | ACEA A5/B5 | R: A5/B5 | Other PDS: ACEA A5/B5 | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| API | API SP/CF | R: SP/CF | Other PDS: API SP/CF | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| meets | Meets Ford WSS-M2C913-A/ B/ C/ D | R: Ford WSS-M2C913 A/B/C/D (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| other | ILSAC GF-6 | R: ILSAC GF-6 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| recommended_for | Ford diesel engines | Нет проверенной строки; в R не указано | Не подтверждено по Other PDS; SDS не источник допуска | null |
| application_reference | ACEA A1/B1; ACEA A5/B5; Ford, Volvo, Jaguar, Land Rover | Нет проверенной строки; в R не указано | Не подтверждено по Other PDS; SDS не источник допуска | null |
| Opel OV0401547-D40 | Не указан | Нет проверенной строки; в R не указано; обсуждение Opel не является подтверждением | Не указан в прочитанном Performance Other PDS | null |
| Применимость | Применение при требованиях ACEA A1/B1 либо A5/B5; соответствует Ford WSS-M2C913-A/B/C/D. Производитель рекомендует его для дизелей Ford. | Нет проверенной строки; в R не указано | SDS не заменяет Application PDS | null |
| Data / Data Completion | Отдельное поле не извлечено | Нет проверенной строки; в R не указано | Нет сохранённых данных журнала | null |

**Физические свойства — отдельно от Performance:**

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Плотность при 15 °C | 0.85 g/ml; ASTM D4052 | Нет доступных физических строк журнала | Other PDS: 0.85 g/ml; ASTM D4052; SDS: <1000 kg/m³; метод не указан | match — Main/Other PDS |
| Кинематическая вязкость при 100 °C | 9.7 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 9.9 mm²/s; ASTM D445; SDS: 9.8–11.2 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Кинематическая вязкость при 40 °C | 55 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 56 mm²/s; ASTM D445; SDS: 58 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Индекс вязкости | 162 ; ASTM D2270 | Нет доступных физических строк журнала | Other PDS: 163 ; ASTM D2270 | regional_difference — Main/Other PDS |
| Динамическая вязкость CCS при −30 °C | 4750 mPa.s (cP); ASTM D5293 | Нет доступных физических строк журнала | Other PDS: 4600 mPa.s (cP); ASTM D5293 | regional_difference — Main/Other PDS |
| Вязкость HTHS при 150 °C | 2.96 cP; ASTM D4741 | Нет доступных физических строк журнала | Other PDS: 2.96 cP; ASTM D4741 | match — Main/Other PDS |
| Температура застывания (Pour Point) | -42 °C; ASTM D97 | Нет доступных физических строк журнала | Other PDS: -33 °C; ASTM D97; SDS: -33 °C; метод не указан | regional_difference — Main/Other PDS |
| Температура вспышки, PMCC | 204 °C; ASTM D93 | Нет доступных физических строк журнала | Other PDS: 204 °C; ASTM D93 | match — Main/Other PDS |

Числа Main PDS не заменены и не усреднены. Все строки его Typical Characteristics приведены выше; дополнительные свойства SDS/Other PDS остаются в прежних материалах, не дополняют основную таблицу автоматически.

Ford WSS-M2C913-A/B/C/D остаётся Meets. ILSAC GF-6 сохранён ровно как в PDS, без придумывания суффикса. Opel не добавлен ни как допуск, ни как journal_additional. Pour Point −42/−33 °C сохранён как различие региональных PDS одной даты; порядок смены редакций не установлен.

## Aral HighTronic M 5W-40

`technical_performance_status=verified`; `physical_properties_status=review_note`; `technical_publication_allowed=true`.

| Источник | Дата | Рынок / язык | Код |
|---|---|---|---|
| [Main PDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf) | 2022-08-10 | Germany/de | document key 467457 |
| [Other PDS](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=1fb82170fe6ebb10b26f6798708730b8&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_global_english_pdb_467457.pdf) | 2022-08-10 | Global/en | 467457 |
| [SDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=c15d553ca1730685cd59eb7b1d9af9d6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german-de_sdb_467457.pdf) | 2026-04-09 | Germany/de | 467457-DE01; version 13 |

**Точное название основного PDS:** Aral HighTronic M 5W-40. Название/SAE другой прочитанной редакции совпадают; у MegaTurboral LA содержание Other PDS не прочитано.

**Журнал:** reference_only_unverified; R из текущего сообщения; страница и точная строка null.

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Product name | Aral HighTronic M 5W-40 | R: Aral HighTronic M 5W-40 | SDS: Aral HighTronic M 5W-40 | match (R и прочитанные названия) |
| SAE | 5W-40 | R: 5W-40 | В названии SDS: 5W-40 | match (R) |
| ACEA | ACEA A3/B4 | R: A3/B4 | Other PDS: ACEA A3/B4 | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| API | API SP | R: SP | Other PDS: API SP | match (R; у HighTronic порядок CF/SN и SN/CF не меняет набор) |
| official_approvals | MB-Approval 226.5/ 229.3/ 229.5 | R: MB 226.5 / 229.3 / 229.5 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | BMW Longlife-01 | R: BMW Longlife-01 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | Porsche A40 | R: Porsche A40 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | Renault RN 0700 / RN 0710 | R: Renault RN0700 / RN0710 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| performance_level | VW 502 00/ 505 00 | R: VW 502 00 / 505 00 (тип Approval/Meets в R не указан) | Та же формулировка Performance в Other PDS по сохранённой сверке | match (R) — только перечисленные обозначения, не тип допуска |
| application_reference | Mercedes-Benz; AMG; Brabus; VW | Нет проверенной строки; в R не указано | Не подтверждено по Other PDS; SDS не источник допуска | null |
| Применимость | Бензиновые и дизельные автомобили; у Mercedes-Benz — бензиновые и дизельные двигатели без сажевого фильтра. Также упомянуты большинство AMG/Brabus и двигатели группы VW. | Нет проверенной строки; в R не указано | SDS не заменяет Application PDS | null |
| Data / Data Completion | Отдельное поле не извлечено | Нет проверенной строки; в R не указано | Нет сохранённых данных журнала | null |

**Физические свойства — отдельно от Performance:**

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Плотность при 15 °C | 0,8519 g/ml; ASTM D4052 | Нет доступных физических строк журнала | Other PDS: 0.852 g/ml; ASTM D4052; SDS: <1000 kg/m³; метод не указан | regional_difference — Main/Other PDS |
| Кинематическая вязкость при 100 °C | 12,9 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 13.4 mm²/s; ASTM D445; SDS: 13–14 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Динамическая вязкость CCS при −30 °C | 6000 mPa.s (cP); ASTM D5293 | Нет доступных физических строк журнала | Other PDS: 5650 mPa.s (cP); ASTM D5293 | regional_difference — Main/Other PDS |
| Кинематическая вязкость при 40 °C | 70 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 81 mm²/s; ASTM D445; SDS: 80.53 mm²/s; метод не указан | regional_difference — Main/Other PDS |
| Индекс вязкости | 188 ; ASTM D2270 | Нет доступных физических строк журнала | Other PDS: 170 ; ASTM D2270 | regional_difference — Main/Other PDS |
| Температура застывания (Pour Point) | -45 °C; ASTM D97 | Нет доступных физических строк журнала | Other PDS: -42 °C; ASTM D97; SDS: -42 °C; метод не указан | regional_difference — Main/Other PDS |
| Температура вспышки, PMCC | 213 °C; ASTM D93 | Нет доступных физических строк журнала | Other PDS: 210 °C; ASTM D93 | regional_difference — Main/Other PDS |
| Сульфатная зольность | 1,2 % wt; ASTM D874 | Нет доступных физических строк журнала | Other PDS: 1.2 % wt; ASTM D874 | match — Main/Other PDS |

Числа Main PDS не заменены и не усреднены. Все строки его Typical Characteristics приведены выше; дополнительные свойства SDS/Other PDS остаются в прежних материалах, не дополняют основную таблицу автоматически.

Reference согласуется с A3/B4, SP и перечисленными OEM-обозначениями. KV40 70/81 и VI 188/170 остаются разными значениями DE/Global одной даты; совпадение Performance не означает совпадения физических таблиц.

## Aral SuperTronic E 0W-30

`technical_performance_status=manual_review`; `physical_properties_status=review_note`; `technical_publication_allowed=false`.

| Источник | Дата | Рынок / язык | Код |
|---|---|---|---|
| [Main PDS](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=c938cab0747bb2b684b112eabd3d8e16&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_global_english_pdb_463348.pdf) | 2025-06-02 | Global/en | document key 463348 |
| [Other PDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=80614e0f24eec2af3c9384c3d0a3a9e1&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_e_0w-30_germany_german_pdb_463348.pdf) | 2021-05-20 | Germany/de | 463348 |
| [SDS](https://msdspds.aral.com/ussds/amersdsf.nsf/Files/2276ECF64B17A03480258D5D00791DEB/%24File/3244703.pdf) | 2025-12-10 | Hungary/hu | 463348-DE01; version 1.03 |

**Точное название основного PDS:** Aral SuperTronic E 0W-30. Название/SAE другой прочитанной редакции совпадают; у MegaTurboral LA содержание Other PDS не прочитано.

**Журнал:** reference_only_unverified; R из текущего сообщения; страница и точная строка null.

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Product name | Aral SuperTronic E 0W-30 | R: Aral SuperTronic E 0W-30 | SDS: Aral SuperTronic E 0W-30 | match (R и прочитанные названия) |
| SAE | 0W-30 | R: 0W-30 | В названии SDS: 0W-30 | match (R) |
| ACEA | ACEA C2 | R: A5/B5 | Other PDS: ACEA A5/B5 | unresolved_conflict — Performance C2 / Application A5/B5; R согласуется с Application и Old PDS |
| API | API SP | R: SL/CF | Other PDS: API SL/CF | historical_difference — PDS 2021/2025; R совпадает с Old PDS, смена спецификации не доказана |
| recommended_for | strongly recommended for use in Volvo vehicles | Нет проверенной строки; в R не указано | Не подтверждено по Other PDS; SDS не источник допуска | null |
| application_reference | ACEA A5/B5 | R: ACEA A5/B5 | Не подтверждено по Other PDS; SDS не источник допуска | unresolved_conflict — внутри Main PDS |
| Применимость | Текст PDS указывает ACEA A5/B5, автомобили Volvo/Honda/Renault и длительные интервалы Volvo; это расходится с ACEA C2 в Performance. | Нет проверенной строки; в R не указано | SDS не заменяет Application PDS | unresolved_conflict — ACEA внутри Main PDS |
| Data / Data Completion | Отдельное поле не извлечено | Нет проверенной строки; в R не указано | Нет сохранённых данных журнала | null |

**Физические свойства — отдельно от Performance:**

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Плотность при 15 °C | 0.8420 g/ml; ASTM D4052 | Нет доступных физических строк журнала | Other PDS: 0.8437 g/ml; ASTM D4052; SDS: <1000 kg/m³; метод не указан | historical_difference — PDS разных дат/рынков |
| Кинематическая вязкость при 100 °C | 10.6 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 9.78 mm²/s; ASTM D445; SDS: 9.55–10 mm²/s; метод не указан | historical_difference — PDS разных дат/рынков |
| Кинематическая вязкость при 40 °C | 56.9 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: 56.4 mm²/s; ASTM D445; SDS: 52.58 mm²/s; метод не указан | historical_difference — PDS разных дат/рынков |
| Индекс вязкости | 180 ; ASTM D2270 | Нет доступных физических строк журнала | Other PDS: 160 ; ASTM D2270 | historical_difference — PDS разных дат/рынков |
| Динамическая вязкость CCS при −35 °C | 5685 mPa.s (cP); ASTM D5293 | Нет доступных физических строк журнала | Other PDS: 5950 mPa.s (cP); ASTM D5293 | historical_difference — PDS разных дат/рынков |
| Температура застывания (Pour Point) | -42 °C; ASTM D97 | Нет доступных физических строк журнала | Other PDS: -54 °C; ASTM D97; SDS: -45 °C; метод не указан | historical_difference — PDS разных дат/рынков |
| Температура вспышки, PMCC | 209 °C; ASTM D93 | Нет доступных физических строк журнала | Other PDS: 213 °C; ASTM D93 | historical_difference — PDS разных дат/рынков |
| Сульфатная зольность | 0.6 % wt; ASTM D874 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано | null |

Числа Main PDS не заменены и не усреднены. Все строки его Typical Characteristics приведены выше; дополнительные свойства SDS/Other PDS остаются в прежних материалах, не дополняют основную таблицу автоматически.

**Решение:** `official_document_internal_conflict=true`; `manual_review=true`. Reference A5/B5, SL/CF совпадает с прежним DE PDS 2021 и с A5/B5 в Application нового PDS. Но это не прямое доказательство смены рецептуры или ошибки в конкретной строке. Performance C2 и Application A5/B5 в Global PDS 2025 остаются неисправленными. Нужна согласованная официальная редакция либо разъяснение ARAL; даже оригинал журнала сам по себе не устранит внутренний конфликт.

## Aral MegaTurboral LA 10W-40

`technical_performance_status=verified`; `physical_properties_status=manual_review`; `technical_publication_allowed=true`.

| Источник | Дата | Рынок / язык | Код |
|---|---|---|---|
| [Main PDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf) | 2025-03-25 | Germany/de | document key 463176 |
| [Other PDS](https://www.aral-lubricants.de/en/datasheets/automotive?cHash=83e937df9d1a71b68031a2361c18511c&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_global_english_pdb_463176.pdf) | null | Global/en | Дата/содержание не прочитаны; в имени файла 463176 |
| [SDS](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=4144d7670fedd3e402bb73510c9718e3&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german-de_sdb_463176.pdf) | 2026-04-07 | Germany/de | 463176-DE01; version 9 |

**Точное название основного PDS:** Aral MegaTurboral LA 10W-40. Название/SAE другой прочитанной редакции совпадают; у MegaTurboral LA содержание Other PDS не прочитано.

**Журнал:** unavailable; точной строки и reference нет.

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Product name | Aral MegaTurboral LA 10W-40 | unavailable | SDS: Aral MegaTurboral LA 10W-40 | match — только PDS/SDS |
| SAE | 10W-40 | unavailable | В названии SDS: 10W-40 | match — только PDS/SDS |
| ACEA | ACEA E6, E7, E8, E9, E11 | unavailable | Other PDS: не прочитано | null |
| API | API CJ-4 | unavailable | Other PDS: не прочитано | null |
| meets | Meets requirements of- MAN M 3271-1, M 3477 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | CAT ECF-3 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | Cummins CES 20081 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | Deutz DQC IV-18 LA | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | DTFR 15C110 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | Mack EO-O Premium Plus, EOS-4.5 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | MTU Oil Category 3.1 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | RVI RLD-3 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| performance_level | Volvo CNG, VDS-4.5 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| other | JASO DH-2 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| recommended_for | For Iveco trucks requiring ACEA E6, E7, E8, E9, E11 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| recommended_for | For DAF trucks requiring ACEA E6, E7, E8, E9, E11 | unavailable | Не подтверждено по Other PDS; SDS не источник допуска | null |
| MB / DTFR | DTFR 15C110; отдельный MB-номер не указан | unavailable | SDS не определяет допуски; MB-эквивалент не добавлен | null |
| Применимость | Коммерческие дизели с системами очистки выхлопа, особенно с сажевыми фильтрами, которым предписан Low SAPS. | unavailable | SDS не заменяет Application PDS | null |
| Data / Data Completion | Отдельное поле не извлечено | unavailable | Нет сохранённых данных журнала | null |

**Физические свойства — отдельно от Performance:**

| Field | Main PDS | Journal 2026 | Other PDS/SDS | Result |
|---|---|---|---|---|
| Плотность при 15 °C | 0.86 g/ml; ASTM D1298 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано; SDS: <1000 kg/m³; метод не указан | null |
| Кинематическая вязкость при 100 °C | 13.7 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано; SDS: 14.2–15.2 mm²/s; метод не указан | unresolved_conflict — только физические свойства PDS/SDS |
| Кинематическая вязкость при 40 °C | 99 mm²/s; ASTM D445 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано; SDS: 100.9 mm²/s; метод не указан | null |
| Динамическая вязкость CCS при −25 °C | 6100 mPa.s (cP); ASTM D5293 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано | null |
| Индекс вязкости | 138 ; ASTM D2270 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано | null |
| Сульфатная зольность | 0.96 % wt; ASTM D874 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано | null |
| Общее щелочное число, TBN | 9.6 mg KOH/g; ASTM D2896 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано | null |
| Температура застывания (Pour Point) | -42 °C; ASTM D97 | Нет доступных физических строк журнала | Other PDS: Не указано / не прочитано; SDS: -36 °C; метод не указан | unresolved_conflict — только физические свойства PDS/SDS |

Числа Main PDS не заменены и не усреднены. Все строки его Typical Characteristics приведены выше; дополнительные свойства SDS/Other PDS остаются в прежних материалах, не дополняют основную таблицу автоматически.

**Решение:** `performance_verified=true`; `performance_verification_basis=official_main_pds`; `journal_status=unavailable`; `physical_properties_review=true`; `physical_properties_status=manual_review`; `technical_publication_allowed=true`.

Можно публиковать SAE 10W-40, ACEA E6/E7/E8/E9/E11, API CJ-4 и явно записанные в PDS OEM/Performance, сохраняя типы заявлений. MAN M 3271-1 / M 3477 — Meets, а не Approval; Volvo CNG/VDS-4.5, RVI RLD-3, Cummins CES 20081, Deutz DQC IV-18 LA, DTFR 15C110, MTU 3.1, Mack EO-O Premium Plus/EOS-4.5 и JASO DH-2 сохранены в исходных категориях.

PDS 2025-03-25 старше SDS 2026-04-07. Это не доказывает замену технической редакции. KV100 13.7 вне диапазона 14.2–15.2 и Pour Point −42/−36 °C остаются неразрешёнными; спорные физические значения не получают разрешения на автоматическую публикацию. Отсутствие журнала не блокирует Performance по основному PDS.

## Что закрыто относительно v2

- Разделены Performance и физические свойства для всех 13 продуктов; публикация Performance оценивается независимо от физических разночтений.
- HighTronic, HighTronic F и HighTronic M: Performance verified по выбранным PDS. Reference согласуется с приведёнными значениями; региональные физические таблицы не объединены.
- MegaTurboral LA: снята общая блокировка технической публикации. Performance verified по PDS; ручная проверка остаётся только для физических свойств.
- Отсутствие точной строки журнала не останавливает анализ по официальным документам. Opel для HighTronic F не добавлен.

## Что осталось

- SuperTronic E: внутреннее противоречие ACEA официального PDS; technical_performance_status=manual_review и technical_publication_allowed=false.
- MegaTurboral LA: физические свойства manual_review; требуется объяснение ARAL или согласованная техническая редакция, не подстановка SDS.
- Сохранены неблокирующие примечания Performance BlueTronic II, HighTronic J, SuperTronic K и Longlife III. Примечания физических таблиц остаются в отдельных статусах.
- Точные строки/страницы журнала и Data Completion не проверены. Новые OEM approvals по reference не установлены.

## Где отсутствие журнала мешает завершению

**Не мешает разрешению Performance по PDS:** HighTronic 5W-40, HighTronic F 5W-30, HighTronic M 5W-40 и MegaTurboral LA 10W-40. Для них официального PDS достаточно в пределах явно записанных заявлений и текущих правил.

**Мешает именно независимой сверке журнала:** все пять целевых продуктов. Для четырёх доступен только R текущего сообщения; для MegaTurboral LA нет даже R. Нельзя заявить journal_supports_main_pds или journal_additional, страницу, точное название строки, её полноту либо Data Completion без источника. Для HighTronic F это также означает отсутствие подтверждения Opel OV0401547-D40.

**Не разрешится одним журналом:** SuperTronic E требует устранения противоречия самого PDS; MegaTurboral LA требует согласования физических значений, если журнал их не содержит. Данных о том, содержит ли журнал физические показатели, нет.

Чтобы закончить независимую сверку, достаточно читаемого извлечения соответствующих пяти строк с заголовками колонок и происхождением; оригинальный PDF не обязателен. Если такое извлечение появится, использовать journal_source=extracted_previous_project_material. Для остальных восьми продуктов новая сверка журнала в этом задании не проводилась.

## Сохранность базы

Все 13 наименований и 38 пользовательских SKU/фасовок сохранены в исходном JSON без изменений. Основные PDS остались прежними. Отчёты v1/v2 — история; этот v3 определяет новые раздельные статусы. ARAL_remaining_13.json не обновлялся и содержит статусы v1, поэтому его прежние флаги публикации нельзя использовать как статусы v3. Для импорта потребуется отдельно синхронизировать эти поля; изменения сайта не выполнялись.

## Итог

- technical performance verified: 8
- technical performance review_note: 4
- technical performance manual_review: 1
- physical properties manual_review: 1
- technical_publication_allowed: 12 из 13

Эти количества относятся к проверке по доступным официальным PDS/SDS с указанными ограничениями. Независимая сверка оригинальных строк журнала не выдана за выполненную.