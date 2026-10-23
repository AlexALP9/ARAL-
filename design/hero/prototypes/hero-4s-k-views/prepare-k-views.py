from pathlib import Path
import json
root=Path(__file__).parent
audit=json.loads((root/'k-assets-audit.json').read_text(encoding='utf-8'))
placements=[]
for row in audit[:2]:
    x0,y0,x1,y1=row['solid_bbox'];scale=1401/(y1-y0)
    x=(660-(x1-x0)*scale)/2-x0*scale;y=3-y0*scale
    w,h=row['size'];raw=(root/row['asset']).read_bytes()
    # Presentation viewport only: the original PNG and its alpha channel are unchanged.
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="660" height="1410" viewBox="0 0 660 1410"><image x="{x:.6f}" y="{y:.6f}" width="{w*scale:.6f}" height="{h*scale:.6f}" href="{row['name']}.png"/></svg>'
    path=root/'assets'/'k-views'/(row['name']+'.svg');path.write_text(svg,encoding='utf-8')
    placements.append(dict(name=row['name'],viewBox=[0,0,660,1410],uniform_scale=scale,x=x,y=y,opaque_top=3,opaque_baseline=1404,source_sha256=row['sha256']))
(root/'k-view-registration.json').write_text(json.dumps(placements,indent=2),encoding='utf-8')
print(json.dumps(placements,indent=2))
