var b=Object.defineProperty;var E=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(E(t,typeof e!="symbol"?e+"":e,n),n);import{y as $,n as c,B as x,b as C,f as I,C as O,D as v,E as B,F as p,G as L,I as M,J as w,K as N,L as j,M as D,N as F,O as G}from"./scheduler.BX5N7TL5.js";const o=new Set;let f;function A(){f={r:0,c:[],p:f}}function H(){f.r||$(f.c),f=f.p}function J(t,e){t&&t.i&&(o.delete(t),t.i(e))}function Q(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),f.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function T(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function K(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const d=t.$$.on_mount.map(N).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...d):$(d),t.$$.on_mount=[]}),i.forEach(p)}function P(t,e){const n=t.$$;n.fragment!==null&&(L(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){t.$$.dirty[0]===-1&&(j.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,s,i,d,h=null,S=[-1]){const u=M;w(t);const a=t.$$={fragment:null,ctx:[],props:d,update:c,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};h&&h(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(r,g,...y)=>{const m=y.length?y[0]:g;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),l&&R(t,r)),g}):[],a.update(),l=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){F();const r=C(e.target);a.fragment&&a.fragment.l(r),r.forEach(I)}else a.fragment&&a.fragment.c();e.intro&&J(t.$$.fragment),K(t,e.target,e.anchor),G(),O()}w(u)}class Z{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){P(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!B(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const U="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(U);export{Z as S,Q as a,X as b,W as c,P as d,H as e,T as f,A as g,Y as i,K as m,J as t};
