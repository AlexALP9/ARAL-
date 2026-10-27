#!/usr/bin/env python3
"""Read-only ARAL media checks. Python 3 standard library; no network or writes.

python scripts/audit/verify_product_media.py --root .
--allow-known-path-mismatches acknowledges ONLY the five documented PNG/WebP
gaps on the audited baseline. Any other error still returns a nonzero exit code.
It is an audit command, not a replacement for Pages CI or a path repair.
"""
import argparse
import csv
import hashlib
import json
from pathlib import Path

KNOWN = {
    ('ARAL-012', '15F45F'), ('ARAL-012', '15F460'),
    ('ARAL-013', '10625'), ('ARAL-015', '22003'), ('ARAL-016', '11281'),
}
SNAPSHOT = 'handoff/product-media/20261022/ARAL_PRODUCTION_MEDIA_AUDIT_v1.json'


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--root', type=Path, default=Path('.'))
    parser.add_argument('--allow-known-path-mismatches', action='store_true')
    parser.add_argument('--snapshot', type=Path, help='Optional local audit snapshot; read only.')
    args = parser.parse_args()
    root = args.root.resolve()
    errors, findings = [], []

    def load(relative):
        return json.loads((root / relative).read_text(encoding='utf-8-sig'))

    def safe_path(url):
        if not isinstance(url, str) or not url.startswith('/media/production/'):
            raise ValueError(f'Non-production path: {url!r}')
        p = (root / url.lstrip('/')).resolve()
        if root not in p.parents:
            raise ValueError('Path escapes repository')
        return p

    def variants(catalog):
        result = {}
        skus = []
        ids = []
        for p in catalog['products']:
            ids.append(p['internal_id'])
            for v in p['variants']:
                key = (p['internal_id'], v['sku'])
                if key in result:
                    errors.append(f'Duplicate variant {key}')
                result[key] = v
                skus.append(v['sku'])
        if len(ids) != 17 or len(set(ids)) != 17:
            errors.append('Expected 17 distinct products')
        if len(skus) != 47 or len(set(skus)) != 47:
            errors.append('Expected 47 distinct SKU')
        return result

    try:
        canonical = load('current/catalog/ARAL_PUBLIC_CATALOG_v1.json')
        runtime = load('catalog.json')
        mapping = load('current/media/ARAL_PRODUCTION_MEDIA_MAP_v1.json')
        canonical_rows, runtime_rows = variants(canonical), variants(runtime)
        map_rows = {(pid, sku): v for pid, p in mapping.items() for sku, v in p['variants'].items()}
        if canonical_rows.keys() != runtime_rows.keys() or map_rows.keys() != canonical_rows.keys():
            errors.append('Variant keys differ across canonical, runtime and map')
        files = sorted((root / 'media/production').iterdir())
        if len(files) != 47 or not all(p.is_file() for p in files):
            errors.append('Pages requires exactly 47 files in production')

        # The only accepted baseline difference between the two catalogs is image
        # path extension. All non-image public fields must remain identical.
        runtime_without_paths = json.loads(json.dumps(runtime))
        for p in runtime_without_paths['products']:
            for v in p['variants']:
                key = (p['internal_id'], v['sku'])
                if key in canonical_rows:
                    v['image'] = canonical_rows[key]['image']
        if runtime_without_paths != canonical:
            errors.append('Canonical/runtime differences include non-image data')

        csv_file = root / 'current/product-work/ARAL_PRODUCT_WORKING_TABLE_v1.csv'
        with csv_file.open(encoding='utf-8-sig', newline='') as stream:
            csv_records = list(csv.DictReader(stream))
        csv_rows = {(r['internal_id'], r['sku']): r for r in csv_records}
        if len(csv_records) != 47 or csv_rows.keys() != runtime_rows.keys():
            errors.append('Working CSV variant keys differ from runtime')
        for key, row in csv_rows.items():
            rt = runtime_rows.get(key)
            if rt and (row['volume'] + ' ' + row['unit'] != rt['volume']
                       or row['repo_image_path'] != rt['image']):
                errors.append(f'Working CSV volume/repo image differs from runtime {key}')

        used, acknowledged = set(), []
        for key, v in canonical_rows.items():
            m, rt = map_rows.get(key), runtime_rows.get(key)
            if m is None or rt is None:
                continue
            if v['image'] != m['image'] or v['volume'] != m['volume'] or v['volume'] != rt['volume']:
                errors.append(f'Volume or canonical/map mismatch {key}')
            cp, rp = safe_path(v['image']), safe_path(rt['image'])
            if not rp.is_file():
                errors.append(f'Missing runtime image {key}: {rt["image"]}')
            used.add(rp)
            is_known = (key in KNOWN and cp.suffix == '.webp'
                        and rp == cp.with_suffix('.png') and rp.is_file())
            if not cp.is_file() or v['image'] != rt['image']:
                finding = {'internal_id': key[0], 'sku': key[1], 'canonical': v['image'],
                           'runtime': rt['image'], 'canonical_exists': cp.is_file(),
                           'known_baseline': is_known}
                findings.append(finding)
                if is_known and args.allow_known_path_mismatches:
                    acknowledged.append(key)
                else:
                    errors.append(f'Canonical/runtime image discrepancy {key}')
        if set(p.resolve() for p in files) != used:
            errors.append('Runtime image assignments do not cover production files exactly')

        snapshot_path = args.snapshot or root / SNAPSHOT
        if not snapshot_path.is_file():
            errors.append(f'Missing audit snapshot: {snapshot_path.name}')
            hash_count = 0
        else:
            snapshot = json.loads(snapshot_path.read_text(encoding='utf-8-sig'))
            source_rows = {(r['internal_id'], r['sku']): r for r in snapshot['records']}
            if source_rows.keys() != runtime_rows.keys():
                errors.append('Snapshot SKU set differs from runtime')
            hash_count = 0
            for key, v in runtime_rows.items():
                record = source_rows.get(key)
                p = safe_path(v['image'])
                if not record or not p.is_file():
                    continue
                observed = hashlib.sha256(p.read_bytes()).hexdigest()
                allowed = {record['original']['sha256'], record['production']['sha256']}
                if observed not in allowed:
                    errors.append(f'Image bytes differ from recorded source/production {key}')
                else:
                    hash_count += 1
    except (OSError, ValueError, KeyError, TypeError) as exc:
        print(json.dumps({'errors': [str(exc)], 'read_only': True}, ensure_ascii=False, indent=2))
        return 2
    print(json.dumps({'read_only': True, 'products': len(canonical['products']),
                      'sku_variants': len(runtime_rows), 'production_files': len(files),
                      'runtime_image_hashes_matched': hash_count,
                      'known_findings_acknowledged': len(acknowledged),
                      'findings': findings, 'errors': errors}, ensure_ascii=False, indent=2))
    return 1 if errors else 0


if __name__ == '__main__':
    raise SystemExit(main())
