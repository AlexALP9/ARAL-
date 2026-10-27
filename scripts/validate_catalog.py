#!/usr/bin/env python3
"""Static catalog and image referential-integrity checks."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'catalog.json').read_text(encoding='utf8'))
items=data['products']
assert len(items)==17, f'Expected 17 products, got {len(items)}'
variants=[v for p in items for v in p['variants']]
assert len(variants)==47, f'Expected 47 SKU, got {len(variants)}'
ids=[p['internal_id'] for p in items]
assert len(ids)==len(set(ids)), 'Duplicate internal_id'
for p in items:
 for v in p['variants']:
  path=root/v['image'].lstrip('/')
  assert path.is_file(), f'Missing {path}'
print(f'PASS: {len(items)} products / {len(variants)} SKU; images verified')
