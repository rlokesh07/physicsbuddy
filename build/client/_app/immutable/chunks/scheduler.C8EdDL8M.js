var q=Object.defineProperty;var B=(t,e,n)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(B(t,typeof e!="symbol"?e+"":e,n),n);function D(){}function O(t,e){for(const n in e)t[n]=e[n];return t}function G(t){return t()}function it(){return Object.create(null)}function I(t){t.forEach(G)}function lt(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ct(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function st(t){return Object.keys(t).length===0}function z(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(z(e,n))}function ut(t,e,n,i){if(t){const l=H(t,e,n,i);return t[0](l)}}function H(t,e,n,i){return t[1]&&i?O(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(e.dirty.length,l.length);for(let o=0;o<r;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function ft(t,e,n,i,l,s){if(l){const r=H(e,n,i,s);t.p(r,l)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let y=!1;function dt(){y=!0}function ht(){y=!1}function F(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:F(1,l,C=>e[n[C]].claim_order,u))-1;i[c]=n[a]+1;const N=a+1;n[N]=c,l=Math.max(N,l)}const s=[],r=[];let o=e.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);s.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<s.length&&r[c].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(r[c],a)}}function U(t,e){if(y){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function J(t,e,n){t.insertBefore(e,n||null)}function K(t,e,n){y&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function mt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function Q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function pt(){return T(" ")}function yt(){return T("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return t.dataset.svelteH}function Et(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,l=!1){j(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function W(t,e,n,i){return P(t,l=>l.nodeName===e,l=>{const s=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||s.push(o.name)}s.forEach(r=>l.removeAttribute(r))},()=>i(e))}function vt(t,e,n){return W(t,e,n,L)}function V(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function Tt(t){return V(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function wt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);j(t);const l=t.splice(n,i-n+1);E(l[0]),E(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(e);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,s)}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}class Y{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Q(n.nodeName):this.e=L(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)J(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class b extends Y{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)K(this.t,this.n[i],n)}}function kt(t,e){return new t(e)}let p;function g(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){w().$$.on_mount.push(t)}function Ht(t){w().$$.after_update.push(t)}function Lt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=X(e,n,{cancelable:i});return l.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],k=[];let d=[];const M=[],S=Promise.resolve();let v=!1;function Z(){v||(v=!0,S.then(tt))}function jt(){return Z(),S}function $(t){d.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,g(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(g(null),h.length=0,_=0;k.length;)k.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];x.has(n)||(x.add(n),n())}d.length=0}while(h.length);for(;M.length;)M.pop()();v=!1,x.clear(),g(t)}function et(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Pt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{I as A,it as B,tt as C,lt as D,st as E,$ as F,Pt as G,b as H,p as I,g as J,G as K,h as L,Z as M,dt as N,ht as O,Ht as P,Mt as Q,At as R,k as S,kt as T,jt as U,at as a,vt as b,ut as c,xt as d,L as e,gt as f,_t as g,E as h,K as i,pt as j,Tt as k,Et as l,V as m,D as n,U as o,Nt as p,ot as q,yt as r,rt as s,T as t,ft as u,mt as v,wt as w,Lt as x,ct as y,bt as z};
