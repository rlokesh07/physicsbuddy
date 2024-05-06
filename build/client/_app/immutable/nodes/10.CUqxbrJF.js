import{s as I,a as y,e as p,t as z,g as j,c as b,b as g,d as B,f as h,m,i as v,h as w,n as E,z as F,v as L,H as q,o as H,W as N,l as S}from"../chunks/scheduler.TjysJePw.js";import{S as V,i as A,c as O,b as Q,m as W,t as $,a as R,d as G}from"../chunks/index.Do5D9Rr6.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{r as k}from"../chunks/KaTeX.DDaMeVYv.js";import{q as P,c as J,u as K}from"../chunks/store.OXLHCObS.js";function U({params:i}){const e=i.id,n=i.option,s=i.subject;return{id:e,answer:n,subject:s}}const fe=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function C(i,e,n){const s=i.slice();return s[5]=e[n],s[1]=n,s}function X(i){let e,n,s=k(i[2][i[1]].formattedAnswer)+"";return{c(){e=p("h1"),n=new q(!1),this.h()},l(l){e=b(l,"H1",{class:!0});var a=g(e);n=H(a,!1),a.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(l,a){v(l,e,a),n.m(s,e)},p(l,a){a&6&&s!==(s=k(l[2][l[1]].formattedAnswer)+"")&&n.p(s)},d(l){l&&h(e)}}}function Y(i){let e,n,s=k(i[2][i[1]].options[i[2][i[1]].answer])+"";return{c(){e=p("h1"),n=new q(!1),this.h()},l(l){e=b(l,"H1",{class:!0});var a=g(e);n=H(a,!1),a.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(l,a){v(l,e,a),n.m(s,e)},p(l,a){a&6&&s!==(s=k(l[2][l[1]].options[l[2][l[1]].answer])+"")&&n.p(s)},d(l){l&&h(e)}}}function D(i){let e,n,s=k(i[5])+"";return{c(){e=p("h2"),n=new q(!1),this.h()},l(l){e=b(l,"H2",{class:!0});var a=g(e);n=H(a,!1),a.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(l,a){v(l,e,a),n.m(s,e)},p(l,a){a&6&&s!==(s=k(l[5])+"")&&n.p(s)},d(l){l&&h(e)}}}function Z(i){let e,n,s,l,a;function o(t,f){if(t[2][t[1]].type==="Multiple Choice")return Y;if(t[2][t[1]].type==="Free Response")return X}let _=o(i),u=_&&_(i),d=T(i[2][i[1]].explanation),c=[];for(let t=0;t<d.length;t+=1)c[t]=D(C(i,d,t));return{c(){u&&u.c(),e=y();for(let t=0;t<c.length;t+=1)c[t].c();n=y(),s=p("a"),l=z("Back"),this.h()},l(t){u&&u.l(t),e=j(t);for(let r=0;r<c.length;r+=1)c[r].l(t);n=j(t),s=b(t,"A",{href:!0});var f=g(s);l=B(f,"Back"),f.forEach(h),this.h()},h(){m(s,"href",a=`/${i[0]}/${i[2][i[1]].topic}`)},m(t,f){u&&u.m(t,f),v(t,e,f);for(let r=0;r<c.length;r+=1)c[r]&&c[r].m(t,f);v(t,n,f),v(t,s,f),w(s,l)},p(t,[f]){if(_===(_=o(t))&&u?u.p(t,f):(u&&u.d(1),u=_&&_(t),u&&(u.c(),u.m(e.parentNode,e))),f&6){d=T(t[2][t[1]].explanation);let r;for(r=0;r<d.length;r+=1){const M=C(t,d,r);c[r]?c[r].p(M,f):(c[r]=D(M),c[r].c(),c[r].m(n.parentNode,n))}for(;r<c.length;r+=1)c[r].d(1);c.length=d.length}f&7&&a!==(a=`/${t[0]}/${t[2][t[1]].topic}`)&&m(s,"href",a)},i:E,o:E,d(t){t&&(h(e),h(n),h(s)),u&&u.d(t),F(c,t)}}}function x(i,e,n){let s=[];P.subscribe(o=>{n(2,s=o.questions),o.loading}),L(async()=>{await J(a)});let{index:l}=e,{subject:a}=e;return i.$$set=o=>{"index"in o&&n(1,l=o.index),"subject"in o&&n(0,a=o.subject)},[a,l,s]}class ee extends V{constructor(e){super(),A(this,e,x,Z,I,{index:1,subject:0})}}function te(i){let e,n='<h1 class="answertext svelte-1krstp0">False</h1>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-10r1tu7"&&(e.innerHTML=n),this.h()},h(){m(e,"class","false svelte-1krstp0")},m(s,l){v(s,e,l)},d(s){s&&h(e)}}}function se(i){let e,n='<h1 class="answertext svelte-1krstp0">Correct!</h1>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-75ln9g"&&(e.innerHTML=n),this.h()},h(){m(e,"class","correct svelte-1krstp0")},m(s,l){v(s,e,l)},d(s){s&&h(e)}}}function ne(i){let e,n,s,l,a,o,_;function u(t,f){return t[1]?se:te}let d=u(i),c=d(i);return o=new ee({props:{subject:i[0].subject,index:i[2]}}),{c(){e=p("div"),n=p("div"),c.c(),s=y(),l=p("div"),a=y(),O(o.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var f=g(e);n=b(f,"DIV",{class:!0});var r=g(n);c.l(r),r.forEach(h),s=j(f),l=b(f,"DIV",{class:!0}),g(l).forEach(h),a=j(f),Q(o.$$.fragment,f),f.forEach(h),this.h()},h(){m(n,"class","answerbackground svelte-1krstp0"),m(l,"class","break svelte-1krstp0"),m(e,"class","body svelte-1krstp0")},m(t,f){v(t,e,f),w(e,n),c.m(n,null),w(e,s),w(e,l),w(e,a),W(o,e,null),_=!0},p(t,[f]){d!==(d=u(t))&&(c.d(1),c=d(t),c&&(c.c(),c.m(n,null)));const r={};f&1&&(r.subject=t[0].subject),f&4&&(r.index=t[2]),o.$set(r)},i(t){_||($(o.$$.fragment,t),_=!0)},o(t){R(o.$$.fragment,t),_=!1},d(t){t&&h(e),c.d(),G(o)}}}function le(i,e,n){let{data:s}=e,l=[],a=!1,o;const _=P.subscribe(u=>{l=u.questions,u.loading,n(2,o=l.findIndex(d=>d.id===s.id)),o!==-1&&(n(1,a=l[o].answer.toString()===s.answer),console.log(a))});return L(async()=>{o!==void 0&&l[o]&&await K(l[o].id,a,s.subject)}),N(()=>{_()}),i.$$set=u=>{"data"in u&&n(0,s=u.data)},[s,a,o]}class ue extends V{constructor(e){super(),A(this,e,le,ne,I,{data:0})}}export{ue as component,fe as universal};
