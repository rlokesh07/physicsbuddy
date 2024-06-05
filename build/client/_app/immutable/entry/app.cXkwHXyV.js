function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.B0xUzFKe.js","../chunks/scheduler.Cy5--3XE.js","../chunks/index.ChWjTNHc.js","../chunks/index.esm2017.D_845-bC.js","../chunks/store.4E4JvqvL.js","../chunks/index.7Qq_5lIc.js","../assets/0.uIvzwhzQ.css","../nodes/1.BrqMqfM8.js","../chunks/entry.C94gmttt.js","../nodes/2.T48LdLSS.js","../assets/2.BbLMTp0I.css","../nodes/3.PEBg-wPi.js","../assets/3.5nuQgsWo.css","../nodes/4.DiOlyViD.js","../chunks/each.D6YF6ztN.js","../assets/4.Be5nF-BW.css","../nodes/5.CnOROnTY.js","../assets/5.BqoLKv2V.css","../nodes/6.CkLhrFq5.js","../assets/6.Dk8GUaa0.css","../assets/Draggable.BN5FzIvs.css","../nodes/7.BPYm8f1c.js","../assets/7.DQUnzDpc.css","../nodes/8.C39I_neh.js","../chunks/KaTeX.DDaMeVYv.js","../assets/8.CEvTU5x5.css","../nodes/9.CQ52vN7V.js","../assets/9.CTBs41fc.css","../nodes/10.BUG2bNUq.js","../assets/10.Cxffx692.css","../nodes/11.CdmGyiWb.js","../assets/11.DvynAe45.css","../nodes/12.BGnxRFqN.js","../assets/12.CYFBr7oV.css","../nodes/13.DAJO2DHu.js","../assets/13.SsuK1Kmx.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as C,a as B,B as h,g as N,i as v,f as g,Y as U,o as W,e as H,c as Y,b as Z,l as T,C as d,t as z,d as F,j as G,E as I,Z as P,_ as J}from"../chunks/scheduler.Cy5--3XE.js";import{S as K,i as M,a as E,f as y,t as b,g as D,c as R,b as O,m as L,d as A}from"../chunks/index.ChWjTNHc.js";const Q="modulepreload",X=function(a,t){return new URL(a,t).href},V={},m=function(t,i,n){let r=Promise.resolve();if(i&&i.length>0){const f=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),s=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));r=Promise.all(i.map(o=>{if(o=X(o,n),o in V)return;V[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!n)for(let w=f.length-1;w>=0;w--){const k=f[w];if(k.href===o&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Q,c||(u.as="script",u.crossOrigin=""),u.href=o,s&&u.setAttribute("nonce",s),document.head.appendChild(u),c)return new Promise((w,k)=>{u.addEventListener("load",w),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>t()).catch(f=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=f,window.dispatchEvent(e),!e.defaultPrevented)throw f})},$={Physics:{subject:"physics"},Math:{subject:"math"}};function x(a){return a in $}const at={list:x};function tt(a){let t,i,n;var r=a[1][0];function f(e,s){return{props:{data:e[3],form:e[2]}}}return r&&(t=P(r,f(a)),a[12](t)),{c(){t&&R(t.$$.fragment),i=h()},l(e){t&&O(t.$$.fragment,e),i=h()},m(e,s){t&&L(t,e,s),v(e,i,s),n=!0},p(e,s){if(s&2&&r!==(r=e[1][0])){if(t){D();const o=t;E(o.$$.fragment,1,0,()=>{A(o,1)}),y()}r?(t=P(r,f(e)),e[12](t),R(t.$$.fragment),b(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(r){const o={};s&8&&(o.data=e[3]),s&4&&(o.form=e[2]),t.$set(o)}},i(e){n||(t&&b(t.$$.fragment,e),n=!0)},o(e){t&&E(t.$$.fragment,e),n=!1},d(e){e&&g(i),a[12](null),t&&A(t,e)}}}function et(a){let t,i,n;var r=a[1][0];function f(e,s){return{props:{data:e[3],$$slots:{default:[it]},$$scope:{ctx:e}}}}return r&&(t=P(r,f(a)),a[11](t)),{c(){t&&R(t.$$.fragment),i=h()},l(e){t&&O(t.$$.fragment,e),i=h()},m(e,s){t&&L(t,e,s),v(e,i,s),n=!0},p(e,s){if(s&2&&r!==(r=e[1][0])){if(t){D();const o=t;E(o.$$.fragment,1,0,()=>{A(o,1)}),y()}r?(t=P(r,f(e)),e[11](t),R(t.$$.fragment),b(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(r){const o={};s&8&&(o.data=e[3]),s&8215&&(o.$$scope={dirty:s,ctx:e}),t.$set(o)}},i(e){n||(t&&b(t.$$.fragment,e),n=!0)},o(e){t&&E(t.$$.fragment,e),n=!1},d(e){e&&g(i),a[11](null),t&&A(t,e)}}}function it(a){let t,i,n;var r=a[1][1];function f(e,s){return{props:{data:e[4],form:e[2]}}}return r&&(t=P(r,f(a)),a[10](t)),{c(){t&&R(t.$$.fragment),i=h()},l(e){t&&O(t.$$.fragment,e),i=h()},m(e,s){t&&L(t,e,s),v(e,i,s),n=!0},p(e,s){if(s&2&&r!==(r=e[1][1])){if(t){D();const o=t;E(o.$$.fragment,1,0,()=>{A(o,1)}),y()}r?(t=P(r,f(e)),e[10](t),R(t.$$.fragment),b(t.$$.fragment,1),L(t,i.parentNode,i)):t=null}else if(r){const o={};s&16&&(o.data=e[4]),s&4&&(o.form=e[2]),t.$set(o)}},i(e){n||(t&&b(t.$$.fragment,e),n=!0)},o(e){t&&E(t.$$.fragment,e),n=!1},d(e){e&&g(i),a[10](null),t&&A(t,e)}}}function j(a){let t,i=a[6]&&S(a);return{c(){t=H("div"),i&&i.c(),this.h()},l(n){t=Y(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=Z(t);i&&i.l(r),r.forEach(g),this.h()},h(){T(t,"id","svelte-announcer"),T(t,"aria-live","assertive"),T(t,"aria-atomic","true"),d(t,"position","absolute"),d(t,"left","0"),d(t,"top","0"),d(t,"clip","rect(0 0 0 0)"),d(t,"clip-path","inset(50%)"),d(t,"overflow","hidden"),d(t,"white-space","nowrap"),d(t,"width","1px"),d(t,"height","1px")},m(n,r){v(n,t,r),i&&i.m(t,null)},p(n,r){n[6]?i?i.p(n,r):(i=S(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(n){n&&g(t),i&&i.d()}}}function S(a){let t;return{c(){t=z(a[7])},l(i){t=F(i,a[7])},m(i,n){v(i,t,n)},p(i,n){n&128&&G(t,i[7])},d(i){i&&g(t)}}}function nt(a){let t,i,n,r,f;const e=[et,tt],s=[];function o(l,p){return l[1][1]?0:1}t=o(a),i=s[t]=e[t](a);let c=a[5]&&j(a);return{c(){i.c(),n=B(),c&&c.c(),r=h()},l(l){i.l(l),n=N(l),c&&c.l(l),r=h()},m(l,p){s[t].m(l,p),v(l,n,p),c&&c.m(l,p),v(l,r,p),f=!0},p(l,[p]){let u=t;t=o(l),t===u?s[t].p(l,p):(D(),E(s[u],1,1,()=>{s[u]=null}),y(),i=s[t],i?i.p(l,p):(i=s[t]=e[t](l),i.c()),b(i,1),i.m(n.parentNode,n)),l[5]?c?c.p(l,p):(c=j(l),c.c(),c.m(r.parentNode,r)):c&&(c.d(1),c=null)},i(l){f||(b(i),f=!0)},o(l){E(i),f=!1},d(l){l&&(g(n),g(r)),s[t].d(l),c&&c.d(l)}}}function rt(a,t,i){let{stores:n}=t,{page:r}=t,{constructors:f}=t,{components:e=[]}=t,{form:s}=t,{data_0:o=null}=t,{data_1:c=null}=t;U(n.page.notify);let l=!1,p=!1,u=null;W(()=>{const _=n.page.subscribe(()=>{l&&(i(6,p=!0),J().then(()=>{i(7,u=document.title||"untitled page")}))});return i(5,l=!0),_});function w(_){I[_?"unshift":"push"](()=>{e[1]=_,i(0,e)})}function k(_){I[_?"unshift":"push"](()=>{e[0]=_,i(0,e)})}function q(_){I[_?"unshift":"push"](()=>{e[0]=_,i(0,e)})}return a.$$set=_=>{"stores"in _&&i(8,n=_.stores),"page"in _&&i(9,r=_.page),"constructors"in _&&i(1,f=_.constructors),"components"in _&&i(0,e=_.components),"form"in _&&i(2,s=_.form),"data_0"in _&&i(3,o=_.data_0),"data_1"in _&&i(4,c=_.data_1)},a.$$.update=()=>{a.$$.dirty&768&&n.page.set(r)},[e,f,s,o,c,l,p,u,n,r,w,k,q]}class lt extends K{constructor(t){super(),M(this,t,rt,nt,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ct=[()=>m(()=>import("../nodes/0.B0xUzFKe.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),()=>m(()=>import("../nodes/1.BrqMqfM8.js"),__vite__mapDeps([7,1,2,8,5]),import.meta.url),()=>m(()=>import("../nodes/2.T48LdLSS.js"),__vite__mapDeps([9,1,2,3,10]),import.meta.url),()=>m(()=>import("../nodes/3.PEBg-wPi.js"),__vite__mapDeps([11,1,2,4,3,5,12]),import.meta.url),()=>m(()=>import("../nodes/4.DiOlyViD.js"),__vite__mapDeps([13,1,2,14,4,3,5,15]),import.meta.url),()=>m(()=>import("../nodes/5.CnOROnTY.js"),__vite__mapDeps([16,1,2,4,3,5,17]),import.meta.url),()=>m(()=>import("../nodes/6.CkLhrFq5.js"),__vite__mapDeps([18,1,2,19,20]),import.meta.url),()=>m(()=>import("../nodes/7.BPYm8f1c.js"),__vite__mapDeps([21,1,2,22]),import.meta.url),()=>m(()=>import("../nodes/8.C39I_neh.js"),__vite__mapDeps([23,1,2,24,25,20]),import.meta.url),()=>m(()=>import("../nodes/9.CQ52vN7V.js"),__vite__mapDeps([26,1,2,24,27]),import.meta.url),()=>m(()=>import("../nodes/10.BUG2bNUq.js"),__vite__mapDeps([28,1,2,14,24,3,4,5,29]),import.meta.url),()=>m(()=>import("../nodes/11.CdmGyiWb.js"),__vite__mapDeps([30,1,2,14,24,4,3,5,31]),import.meta.url),()=>m(()=>import("../nodes/12.BGnxRFqN.js"),__vite__mapDeps([32,1,14,2,4,3,5,33]),import.meta.url),()=>m(()=>import("../nodes/13.DAJO2DHu.js"),__vite__mapDeps([34,1,14,2,4,3,5,35]),import.meta.url)],_t=[],ft={"/":[2],"/account":[3],"/flashcards/[subject]/[topic]":[4],"/login":[5],"/modules/Applications of Derivatives":[6],"/modules/Harmonic Motion":[7],"/modules/Trigonometry":[8],"/modules/Wave":[9],"/questions/[subject]/[id]":[10],"/questions/[subject]/[id]/[option]":[11],"/[subject=list]":[12],"/[subject=list]/[topic]":[13]},ut={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{ft as dictionary,ut as hooks,at as matchers,ct as nodes,lt as root,_t as server_loads};
