# ARAL — проверка второго комплекта PDS

Все 13 предоставленных файлов являются PDS. Новых совпадений с назначенными Main PDS нет: 12 файлов не подходят по языку, дате или названию; SuperTronic E совпадает побитово с уже обработанным PDF. MASTER и все ранее созданные слои оставлены без изменений.

По действующему правилу задачи текст берётся только из назначенного Main PDS. Английский PDS не подставлен вместо немецкого даже при одинаковой дате. Это ограничение источника CONTENT, а не новая оценка технических характеристик масла.

| PDF | Название в документе | Дата / язык | Назначено в MASTER | Результат |
|---|---|---|---|---|
| bpxe-9ar8eu.pdf | Aral EcoTronic F 5W-20 | 2013-08-19 / en | 2021-05-20 / de | Дата 2013-08-19, назначена 2021-05-20.; Язык EN; назначен DE. |
| wepp-ch72wf.pdf | Aral HighTronic M 5W-40 | 2022-08-10 / en | 2022-08-10 / de | Язык EN; назначен DE. |
| wepp-d6fpfv.pdf | Aral HighTronic R 5W-30 | 2024-06-20 / en | 2024-06-21 / de | Дата 2024-06-20, назначена 2024-06-21.; Язык EN; назначен DE. |
| wepp-d85j7j.pdf | Aral SuperTronic 0W-20 | 2024-08-14 / en | Нет точного совпадения имени | Другое название: SuperTronic 0W-20 не приравнен к SuperTronic Longlife IV FE 0W-20. |
| wepp-dav4bq.pdf | Aral HighTronic 5W-40 | 2024-11-07 / en | 2024-11-08 / de | Дата 2024-11-07, назначена 2024-11-08.; Язык EN; назначен DE. |
| wepp-dcrgw2.pdf | BlueTronic II 10W-40 | 2025-01-08 / en | 2025-11-03 / de | Дата 2025-01-08, назначена 2025-11-03.; Язык EN; назначен DE. |
| wepp-dea9dl.pdf | Aral HighTronic J 5W-30 | 2025-02-26 / en | 2025-02-26 / de | Язык EN; назначен DE. |
| wepp-dejrb4.pdf | Aral HighTronic F 5W-30 | 2025-03-06 / en | 2025-03-06 / de | Язык EN; назначен DE. |
| wepp-df3s57.pdf | SuperTronic K 5W-30 | 2025-03-24 / en | 2025-11-03 / de | Дата 2025-03-24, назначена 2025-11-03.; Язык EN; назначен DE. |
| wepp-df4c8c.pdf | Aral MegaTurboral 10W-40 | 2025-03-24 / en | 2026-02-12 / de | Дата 2025-03-24, назначена 2026-02-12.; Язык EN; назначен DE. |
| wepp-df4cev.pdf | Aral MegaTurboral LA 10W-40 | 2025-03-24 / en | 2025-03-25 / de | Дата 2025-03-24, назначена 2025-03-25.; Язык EN; назначен DE. |
| wepp-dh9j8d.pdf | ARAL SuperTronic G 0W-40 | 2025-06-02 / en | 2025-11-03 / de | Дата 2025-06-02, назначена 2025-11-03.; Язык EN; назначен DE. |
| wepp-djce7p.pdf | Aral SuperTronic E 0W-30 | 2025-06-02 / en | 2025-06-02 / en | Побитово совпадает с ранее обработанным SuperTronic E. Полные текст и перевод уже в CONTENT_LAYER v1.1. |

У загруженных PDS исходный document key и рынок не напечатаны явно. Эти поля не восстановлены по имени файла или адресу издателя.

## Нужные назначенные Main PDS

| Product | Дата | Язык / рынок | Назначенный файл |
|---|---|---|---|
| Aral BlueTronic II 10W-40 | 2025-11-03 | de / Germany | [aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=8485c0156e39da4cee8b8f48a8546696&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_bluetronic_ii_10w-40_germany_german_pdb_470643.pdf) |
| Aral EcoTronic F 5W-20 | 2021-05-20 | de / Germany | [aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf](https://www.aral-lubricants.de/aral-schmierstoffe/aral-motorenoele/motorenoele-pkw?cHash=414025733de61d5f4ec5908550d781be&tx_datasheet_datasheetproduct%5Baction%5D=downloadPdf&tx_datasheet_datasheetproduct%5Bcontroller%5D=Datasheet&tx_datasheet_datasheetproduct%5Bkey%5D=aral_ecotronic_f_5w-20_germany_german_pdb_468246.pdf) |
| Aral HighTronic 5W-40 | 2024-11-08 | de / Germany | [aral_hightronic_5w-40_germany_german_pdb_467316.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=0c1278be5813b8bcf8c2522ad7f4d0b6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_5w-40_germany_german_pdb_467316.pdf) |
| Aral HighTronic F 5W-30 | 2025-03-06 | de / Germany | [aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=458fb9eabcefe541a54a2b5b69ebfc9a&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_f_5w-30_germany_german_pdb_456182.pdf) |
| Aral HighTronic J 5W-30 | 2025-02-26 | de / Germany | [aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=fe22a203db6bba42c3a3924948fb7743&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_j_5w-30_germany_german_pdb_466947.pdf) |
| Aral HighTronic M 5W-40 | 2022-08-10 | de / Germany | [aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=6ab80919cceddc7b5d26244d96c8ec9e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_m_5w-40_germany_german_pdb_467457.pdf) |
| Aral HighTronic R 5W-30 | 2024-06-21 | de / Germany | [aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=1fe8cdd97481044e39c25f99584b68e0&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_hightronic_r_5w-30_germany_german_pdb_466927.pdf) |
| Aral SuperTronic G 0W-40 | 2025-11-03 | de / Germany | [aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=89b904a8c0f9dd2d43f8aae5e3bf8b5e&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_g_0w-40_germany_german_pdb_469294.pdf) |
| Aral SuperTronic K 5W-30 | 2025-11-03 | de / Germany | [aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=569d852f1caeb1182d3f68782a3ce8e6&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_k_5w-30_germany_german_pdb_470247.pdf) |
| Aral SuperTronic Longlife III 0W-30 | 2025-11-03 | de / Germany | [aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=3773cfe73d2537b61a9b1b8e5d31cd59&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_longlife_iii_0w-30_germany_german_pdb_470402.pdf) |
| Aral SuperTronic Longlife IV FE 0W-20 | 2025-05-02 | de / Germany | [aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=a2df89a4f993658074da274967d8c0d4&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_supertronic_ll_iv_fe_0w-20_germany_german_pdb_469571.pdf) |
| Aral MegaTurboral 10W-40 | 2026-02-12 | de / Germany | [aral_megaturboral_10w-40_germany_german_pdb_456130.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=b5e0c342bd380e867e04b08bb526bffb&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_10w-40_germany_german_pdb_456130.pdf) |
| Aral MegaTurboral LA 10W-40 | 2025-03-25 | de / Germany | [aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf](https://www.aral-lubricants.de/datenblaetter/automotiv?cHash=9fa6e1148a24d46da58db55221344d97&tx_datasheet_datasheet%5Baction%5D=downloadPdf&tx_datasheet_datasheet%5Bcontroller%5D=Datasheet&tx_datasheet_datasheet%5Bkey%5D=aral_megaturboral_la_10w-40_germany_german_pdb_463176.pdf) |

Longlife III 0W-30 в новом комплекте отсутствует. Файл wepp-d85j7j.pdf с названием Aral SuperTronic 0W-20 не является доказанным совпадением Longlife IV FE.

## Итог

- Загруженных PDS: 13.
- mismatch: 12.
- Уже обработанный идентичный файл: 1.
- Новых пригодных Main PDS: 0.
- CONTENT_LAYER v1.1 остаётся: 1 complete, 12 partial (прежние короткие цитаты), 4 unavailable.
- Полный контент остальных 13 назначенных продуктов по этим файлам не дополнен.

Новая версия MASTER или CONTENT_LAYER не создавалась: пригодных новых данных для переноса нет. Подтверждены неизменность исходных файлов и отсутствие изменений технических статусов.