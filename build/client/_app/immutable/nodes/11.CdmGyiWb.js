import{s as I,a as y,e as p,t as B,g as j,c as b,b as g,d as F,f as h,l as m,i as v,h as w,n as E,A as N,o as L,H as q,p as H,X as O,m as S}from"../chunks/scheduler.Cy5--3XE.js";import{S as A,i as V,c as Q,b as $,m as z,t as R,a as U,d as W}from"../chunks/index.ChWjTNHc.js";import{e as T}from"../chunks/each.D6YF6ztN.js";import{r as k}from"../chunks/KaTeX.DDaMeVYv.js";import{q as P,d as X,h as G}from"../chunks/store.4E4JvqvL.js";import{f as J}from"../chunks/index.esm2017.D_845-bC.js";function K({params:r}){const e=r.id,n=r.option,s=r.subject;return{id:e,answer:n,subject:s}}const he=Object.freeze(Object.defineProperty({__proto__:null,load:K},Symbol.toStringTag,{value:"Module"}));function C(r,e,n){const s=r.slice();return s[5]=e[n],s[1]=n,s}function Y(r){let e,n,s=k(r[2][r[1]].formattedAnswer)+"";return{c(){e=p("h1"),n=new q(!1),this.h()},l(a){e=b(a,"H1",{class:!0});var l=g(e);n=H(l,!1),l.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(a,l){v(a,e,l),n.m(s,e)},p(a,l){l&6&&s!==(s=k(a[2][a[1]].formattedAnswer)+"")&&n.p(s)},d(a){a&&h(e)}}}function Z(r){let e,n,s=k(r[2][r[1]].options[r[2][r[1]].answer])+"";return{c(){e=p("h1"),n=new q(!1),this.h()},l(a){e=b(a,"H1",{class:!0});var l=g(e);n=H(l,!1),l.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(a,l){v(a,e,l),n.m(s,e)},p(a,l){l&6&&s!==(s=k(a[2][a[1]].options[a[2][a[1]].answer])+"")&&n.p(s)},d(a){a&&h(e)}}}function D(r){let e,n,s=k(r[5])+"";return{c(){e=p("h2"),n=new q(!1),this.h()},l(a){e=b(a,"H2",{class:!0});var l=g(e);n=H(l,!1),l.forEach(h),this.h()},h(){n.a=null,m(e,"class","svelte-rqlsim")},m(a,l){v(a,e,l),n.m(s,e)},p(a,l){l&6&&s!==(s=k(a[5])+"")&&n.p(s)},d(a){a&&h(e)}}}function x(r){let e,n,s,a,l;function c(t,u){if(t[2][t[1]].type==="Multiple Choice")return Z;if(t[2][t[1]].type==="Free Response")return Y}let d=c(r),i=d&&d(r),_=T(r[2][r[1]].explanation),f=[];for(let t=0;t<_.length;t+=1)f[t]=D(C(r,_,t));return{c(){i&&i.c(),e=y();for(let t=0;t<f.length;t+=1)f[t].c();n=y(),s=p("a"),a=B("Back"),this.h()},l(t){i&&i.l(t),e=j(t);for(let o=0;o<f.length;o+=1)f[o].l(t);n=j(t),s=b(t,"A",{href:!0});var u=g(s);a=F(u,"Back"),u.forEach(h),this.h()},h(){m(s,"href",l=`/${r[0]}/${r[2][r[1]].topic}`)},m(t,u){i&&i.m(t,u),v(t,e,u);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(t,u);v(t,n,u),v(t,s,u),w(s,a)},p(t,[u]){if(d===(d=c(t))&&i?i.p(t,u):(i&&i.d(1),i=d&&d(t),i&&(i.c(),i.m(e.parentNode,e))),u&6){_=T(t[2][t[1]].explanation);let o;for(o=0;o<_.length;o+=1){const M=C(t,_,o);f[o]?f[o].p(M,u):(f[o]=D(M),f[o].c(),f[o].m(n.parentNode,n))}for(;o<f.length;o+=1)f[o].d(1);f.length=_.length}u&7&&l!==(l=`/${t[0]}/${t[2][t[1]].topic}`)&&m(s,"href",l)},i:E,o:E,d(t){t&&(h(e),h(n),h(s)),i&&i.d(t),N(f,t)}}}function ee(r,e,n){let s=[];P.subscribe(c=>{n(2,s=c.questions),c.loading}),L(async()=>{await X(l)});let{index:a}=e,{subject:l}=e;return r.$$set=c=>{"index"in c&&n(1,a=c.index),"subject"in c&&n(0,l=c.subject)},[l,a,s]}class te extends A{constructor(e){super(),V(this,e,ee,x,I,{index:1,subject:0})}}function se(r){let e,n='<h1 class="answertext svelte-1krstp0">False</h1>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-10r1tu7"&&(e.innerHTML=n),this.h()},h(){m(e,"class","false svelte-1krstp0")},m(s,a){v(s,e,a)},d(s){s&&h(e)}}}function ne(r){let e,n='<h1 class="answertext svelte-1krstp0">Correct!</h1>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-75ln9g"&&(e.innerHTML=n),this.h()},h(){m(e,"class","correct svelte-1krstp0")},m(s,a){v(s,e,a)},d(s){s&&h(e)}}}function ae(r){let e,n,s,a,l,c,d;function i(t,u){return t[1]?ne:se}let _=i(r),f=_(r);return c=new te({props:{subject:r[0].subject,index:r[2]}}),{c(){e=p("div"),n=p("div"),f.c(),s=y(),a=p("div"),l=y(),Q(c.$$.fragment),this.h()},l(t){e=b(t,"DIV",{class:!0});var u=g(e);n=b(u,"DIV",{class:!0});var o=g(n);f.l(o),o.forEach(h),s=j(u),a=b(u,"DIV",{class:!0}),g(a).forEach(h),l=j(u),$(c.$$.fragment,u),u.forEach(h),this.h()},h(){m(n,"class","answerbackground svelte-1krstp0"),m(a,"class","break svelte-1krstp0"),m(e,"class","body svelte-1krstp0")},m(t,u){v(t,e,u),w(e,n),f.m(n,null),w(e,s),w(e,a),w(e,l),z(c,e,null),d=!0},p(t,[u]){_!==(_=i(t))&&(f.d(1),f=_(t),f&&(f.c(),f.m(n,null)));const o={};u&1&&(o.subject=t[0].subject),u&4&&(o.index=t[2]),c.$set(o)},i(t){d||(R(c.$$.fragment,t),d=!0)},o(t){U(c.$$.fragment,t),d=!1},d(t){t&&h(e),f.d(),W(c)}}}function le(r,e,n){let{data:s}=e,a=[],l=!1,c;const d=P.subscribe(i=>{a=i.questions,i.loading,n(2,c=a.findIndex(_=>_.id===s.id)),c!==-1&&(n(1,l=a[c].answer.toString()===s.answer),console.log(l))});return L(async()=>{var i;c!==void 0&&a[c]&&await G(a[c].id,l,s.subject,(i=J.currentUser)==null?void 0:i.uid)}),O(()=>{d()}),r.$$set=i=>{"data"in i&&n(0,s=i.data)},[s,l,c]}class de extends A{constructor(e){super(),V(this,e,le,ae,I,{data:0})}}export{de as component,he as universal};