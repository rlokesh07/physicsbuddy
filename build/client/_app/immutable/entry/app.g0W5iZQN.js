function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.zT4eFe1x.js","../chunks/scheduler.Bk5BCwgU.js","../chunks/index.IejQtBaF.js","../chunks/store.Dvg3_2Jk.js","../chunks/index.C3g5pe3j.js","../assets/0.D3FR-Bkf.css","../nodes/1.BDicQ-0o.js","../chunks/entry.6uwx2wIw.js","../nodes/2.DXn0q_UO.js","../assets/2.DM-RpRYk.css","../nodes/3.CLQarYnW.js","../assets/3.5nuQgsWo.css","../nodes/4.B0p5B25d.js","../chunks/each.D6YF6ztN.js","../assets/4.B2RvCv6T.css","../nodes/5.B5APTRiS.js","../assets/5.DqiS9lLi.css","../nodes/6.BxO4PRth.js","../assets/6.DQUnzDpc.css","../nodes/7.bNSXbOOx.js","../chunks/KaTeX.DDaMeVYv.js","../assets/7.Dgc5SHE4.css","../nodes/8.DfSX5MKa.js","../assets/8.CfT4V4vF.css","../nodes/9.BAuXbFsz.js","../assets/9.BouQULic.css","../nodes/10.BlEkXjkp.js","../assets/10.DbyEX3RS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as C,a as N,z as h,g as U,i as v,f as g,R as B,r as z,e as H,c as W,b as F,m as V,S as d,t as G,d as J,j as K,T as D,U as R,V as M}from"../chunks/scheduler.Bk5BCwgU.js";import{S as Q,i as X,a as b,e as A,t as w,g as T,c as P,b as I,m as y,d as L}from"../chunks/index.IejQtBaF.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},p=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const _=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));s=Promise.all(n.map(o=>{if(o=Z(o,i),o in O)return;O[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!i)for(let E=_.length-1;E>=0;E--){const k=_[E];if(k.href===o&&(!c||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Y,c||(u.as="script",u.crossOrigin=""),u.href=o,r&&u.setAttribute("nonce",r),document.head.appendChild(u),c)return new Promise((E,k)=>{u.addEventListener("load",E),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(_=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=_,window.dispatchEvent(t),!t.defaultPrevented)throw _})},$={Physics:{subject:"physics"},Math:{subject:"math"}};function x(a){return a in $}const ae={list:x};function ee(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=R(s,_(a)),a[12](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){T();const o=e;b(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=R(s,_(t)),t[12](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&b(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[12](null),e&&L(e,t)}}}function te(a){let e,n,i;var s=a[1][0];function _(t,r){return{props:{data:t[3],$$slots:{default:[ne]},$$scope:{ctx:t}}}}return s&&(e=R(s,_(a)),a[11](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){T();const o=e;b(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=R(s,_(t)),t[11](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const o={};r&8&&(o.data=t[3]),r&8215&&(o.$$scope={dirty:r,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&b(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[11](null),e&&L(e,t)}}}function ne(a){let e,n,i;var s=a[1][1];function _(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=R(s,_(a)),a[10](e)),{c(){e&&P(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),v(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){T();const o=e;b(o.$$.fragment,1,0,()=>{L(o,1)}),A()}s?(e=R(s,_(t)),t[10](e),P(e.$$.fragment),w(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const o={};r&16&&(o.data=t[4]),r&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&b(e.$$.fragment,t),i=!1},d(t){t&&g(n),a[10](null),e&&L(e,t)}}}function j(a){let e,n=a[6]&&S(a);return{c(){e=H("div"),n&&n.c(),this.h()},l(i){e=W(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=F(e);n&&n.l(s),s.forEach(g),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){v(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=S(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&g(e),n&&n.d()}}}function S(a){let e;return{c(){e=G(a[7])},l(n){e=J(n,a[7])},m(n,i){v(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&g(e)}}}function ie(a){let e,n,i,s,_;const t=[te,ee],r=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=r[e]=t[e](a);let c=a[5]&&j(a);return{c(){n.c(),i=N(),c&&c.c(),s=h()},l(l){n.l(l),i=U(l),c&&c.l(l),s=h()},m(l,m){r[e].m(l,m),v(l,i,m),c&&c.m(l,m),v(l,s,m),_=!0},p(l,[m]){let u=e;e=o(l),e===u?r[e].p(l,m):(T(),b(r[u],1,1,()=>{r[u]=null}),A(),n=r[e],n?n.p(l,m):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?c?c.p(l,m):(c=j(l),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(l){_||(w(n),_=!0)},o(l){b(n),_=!1},d(l){l&&(g(i),g(s)),r[e].d(l),c&&c.d(l)}}}function se(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:r}=e,{data_0:o=null}=e,{data_1:c=null}=e;B(i.page.notify);let l=!1,m=!1,u=null;z(()=>{const f=i.page.subscribe(()=>{l&&(n(6,m=!0),M().then(()=>{n(7,u=document.title||"untitled page")}))});return n(5,l=!0),f});function E(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function q(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,o=f.data_0),"data_1"in f&&n(4,c=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,_,r,o,c,l,m,u,i,s,E,k,q]}class le extends Q{constructor(e){super(),X(this,e,se,ie,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ce=[()=>p(()=>import("../nodes/0.zT4eFe1x.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),()=>p(()=>import("../nodes/1.BDicQ-0o.js"),__vite__mapDeps([6,1,2,7,4]),import.meta.url),()=>p(()=>import("../nodes/2.DXn0q_UO.js"),__vite__mapDeps([8,1,2,3,4,9]),import.meta.url),()=>p(()=>import("../nodes/3.CLQarYnW.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>p(()=>import("../nodes/4.B0p5B25d.js"),__vite__mapDeps([12,1,2,13,3,4,14]),import.meta.url),()=>p(()=>import("../nodes/5.B5APTRiS.js"),__vite__mapDeps([15,1,2,3,4,16]),import.meta.url),()=>p(()=>import("../nodes/6.BxO4PRth.js"),__vite__mapDeps([17,1,2,18]),import.meta.url),()=>p(()=>import("../nodes/7.bNSXbOOx.js"),__vite__mapDeps([19,1,2,13,20,3,4,21]),import.meta.url),()=>p(()=>import("../nodes/8.DfSX5MKa.js"),__vite__mapDeps([22,1,2,13,20,3,4,23]),import.meta.url),()=>p(()=>import("../nodes/9.BAuXbFsz.js"),__vite__mapDeps([24,1,13,2,3,4,25]),import.meta.url),()=>p(()=>import("../nodes/10.BlEkXjkp.js"),__vite__mapDeps([26,1,13,2,3,4,27]),import.meta.url)],fe=[],_e={"/":[2],"/account":[3],"/flashcards/[subject]/[topic]":[4],"/login":[5],"/modules/Harmonic Motion":[6],"/questions/[subject]/[id]":[7],"/questions/[subject]/[id]/[option]":[8],"/[subject=list]":[9],"/[subject=list]/[topic]":[10]},ue={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{_e as dictionary,ue as hooks,ae as matchers,ce as nodes,le as root,fe as server_loads};