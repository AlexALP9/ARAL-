// Read-only structural/timeline check. Does not certify browser rendering or visual quality.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'SOURCE_MANIFEST.json'),'utf8'));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
for(const a of manifest.k_sources)assert.equal(sha(fs.readFileSync(path.join(root,a.path))),a.sha256,a.path);
for(const a of manifest.dependencies)assert.equal(sha(fs.readFileSync(path.resolve(root,a.path))),a.sha256,a.path);
for(const file of fs.readdirSync(path.join(root,'assets')).filter(x=>x.endsWith('.svg')).map(x=>'assets/'+x).concat(['assets/k-views/K_front.svg','assets/k-views/K_34_right.svg'])){
 const text=fs.readFileSync(path.join(root,file),'utf8');assert(!text.includes('base64,'),file+' must reuse originals');
 for(const match of text.matchAll(/href="([^"]+)"/g))assert(fs.existsSync(path.resolve(root,path.dirname(file),match[1])),file+' -> '+match[1]);
}
const html=fs.readFileSync(path.join(root,'review.html'),'utf8');
assert.equal([...html.matchAll(/data-product=/g)].length,6);
assert(!html.includes('K_back')&&!html.includes('K_side')&&!html.includes('K_label_closeup'));
for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g))if(!m[1].startsWith('http'))assert(fs.existsSync(path.resolve(root,m[1])));
const code=fs.readFileSync(path.join(root,'review.js'),'utf8');
function exercise(reduced=false,mobile=false){
 const node=()=>({style:{setProperty(k,v){this[k]=v}},dataset:{},value:'',textContent:'',append(){},addEventListener(){}});
 const names=['barrel','pack-20l','pack-5l','second-1l','third-1l','main-1l'];
 const products=Object.fromEntries(names.map(name=>[name,Object.assign(node(),{dataset:{product:name}})]));
 const camera=node(),scene=Object.assign(node(),{querySelector:()=>camera,querySelectorAll:()=>Object.values(products)}),controls={};
 const context={URLSearchParams,location:{search:''},matchMedia:q=>({matches:q.includes('reduced')?reduced:mobile,addEventListener(){}}),cancelAnimationFrame(){context.pending=null},requestAnimationFrame(fn){context.pending=fn;return 1},performance:{now:()=>0},document:{hidden:false,body:{classList:{add(){}}},querySelector:q=>q==='.aral-scene'?scene:(controls[q]??=node()),createElement:node,addEventListener(){}},console};
 vm.createContext(context);vm.runInContext(code.slice(0,code.indexOf('const loadedPhotos='))+'globalThis.check={draw,play,orbitAt};})();',context);
 const samples=[];
 for(const t of [0,.665,.85,1.065,1.18,2.3,2.65,3,3.4,3.7,4]){context.check.draw(t*1.2);const visible=names.filter(n=>Number(products[n].style.opacity)>0);samples.push({t,visible,orbit:products['main-1l'].dataset.orbit});if(t<=2.3)assert.deepEqual(visible,['main-1l']);if(t===3||t===3.4)assert.equal(visible.length,3);if(t===4)assert.equal(visible.length,6);if(t<3.4)for(const n of ['barrel','pack-20l','pack-5l'])assert.equal(Number(products[n].style.opacity),0);}
 if(reduced){context.check.play();assert.equal(controls['#time'].value,'4.80');assert.equal(products['main-1l'].dataset.orbit,'0');}
 if(!reduced){context.check.play();for(const now of [0,1000,4799,4800]){const fn=context.pending;context.pending=null;if(fn)fn(now);}assert.equal(context.pending,null,'must stop scheduling after final');assert.equal(controls['#time'].value,'4.80');assert.equal(scene.dataset.time,'4.80');}
 return samples;
}
console.log(JSON.stringify({status:'PASS: structural/timeline only',desktop:exercise(),mobile:exercise(false,true),reduced_motion:exercise(true),visual:'REVIEW_REQUIRED; this checker does not render images'},null,2));
