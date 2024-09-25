import{s as A,a as H,e as b,t as N,h as C,c as g,b as y,f as O,d,o as v,i as k,j as w,n as D,A as Q,w as V,H as M,m as E,g as T,X as $}from"../chunks/scheduler.DoGGijXl.js";import{S as P,i as B,c as z,b as R,m as U,t as W,a as X,d as G}from"../chunks/index.D__1xBxx.js";import{e as I}from"../chunks/each.D6YF6ztN.js";import{r as q}from"../chunks/KaTeX.DDaMeVYv.js";import{q as F,d as J,h as K}from"../chunks/store.Dtiak5n4.js";import{f as Y}from"../chunks/index.esm2017.D_845-bC.js";function Z({params:r}){const e=r.id,s=r.option,t=r.subject;return{id:e,answer:s,subject:t}}const _e=Object.freeze(Object.defineProperty({__proto__:null,load:Z},Symbol.toStringTag,{value:"Module"}));function L(r,e,s){const t=r.slice();return t[5]=e[s],t[1]=s,t}function x(r){let e,s,t=q(r[2][r[1]].formattedAnswer)+"";return{c(){e=b("h1"),s=new M(!1),this.h()},l(n){e=g(n,"H1",{class:!0});var a=y(e);s=E(a,!1),a.forEach(d),this.h()},h(){s.a=null,v(e,"class","svelte-rqlsim")},m(n,a){k(n,e,a),s.m(t,e)},p(n,a){a&6&&t!==(t=q(n[2][n[1]].formattedAnswer)+"")&&s.p(t)},d(n){n&&d(e)}}}function ee(r){let e,s,t=q(r[2][r[1]].options[r[2][r[1]].answer])+"";return{c(){e=b("h1"),s=new M(!1),this.h()},l(n){e=g(n,"H1",{class:!0});var a=y(e);s=E(a,!1),a.forEach(d),this.h()},h(){s.a=null,v(e,"class","svelte-rqlsim")},m(n,a){k(n,e,a),s.m(t,e)},p(n,a){a&6&&t!==(t=q(n[2][n[1]].options[n[2][n[1]].answer])+"")&&s.p(t)},d(n){n&&d(e)}}}function S(r){let e,s,t=q(r[5])+"";return{c(){e=b("h2"),s=new M(!1),this.h()},l(n){e=g(n,"H2",{class:!0});var a=y(e);s=E(a,!1),a.forEach(d),this.h()},h(){s.a=null,v(e,"class","svelte-rqlsim")},m(n,a){k(n,e,a),s.m(t,e)},p(n,a){a&6&&t!==(t=q(n[5])+"")&&s.p(t)},d(n){n&&d(e)}}}function te(r){let e,s,t,n,a;function c(l,u){if(l[2][l[1]].type==="Multiple Choice")return ee;if(l[2][l[1]].type==="Free Response")return x}let m=c(r),i=m&&m(r),p=I(r[2][r[1]].explanation),f=[];for(let l=0;l<p.length;l+=1)f[l]=S(L(r,p,l));return{c(){i&&i.c(),e=H();for(let l=0;l<f.length;l+=1)f[l].c();s=H(),t=b("a"),n=N("Back"),this.h()},l(l){i&&i.l(l),e=C(l);for(let o=0;o<f.length;o+=1)f[o].l(l);s=C(l),t=g(l,"A",{href:!0});var u=y(t);n=O(u,"Back"),u.forEach(d),this.h()},h(){v(t,"href",a=`/${r[0]}/${r[2][r[1]].topic}`)},m(l,u){i&&i.m(l,u),k(l,e,u);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(l,u);k(l,s,u),k(l,t,u),w(t,n)},p(l,[u]){if(m===(m=c(l))&&i?i.p(l,u):(i&&i.d(1),i=m&&m(l),i&&(i.c(),i.m(e.parentNode,e))),u&6){p=I(l[2][l[1]].explanation);let o;for(o=0;o<p.length;o+=1){const h=L(l,p,o);f[o]?f[o].p(h,u):(f[o]=S(h),f[o].c(),f[o].m(s.parentNode,s))}for(;o<f.length;o+=1)f[o].d(1);f.length=p.length}u&7&&a!==(a=`/${l[0]}/${l[2][l[1]].topic}`)&&v(t,"href",a)},i:D,o:D,d(l){l&&(d(e),d(s),d(t)),i&&i.d(l),Q(f,l)}}}function se(r,e,s){let t=[];F.subscribe(c=>{s(2,t=c.questions),c.loading}),V(async()=>{await J(a)});let{index:n}=e,{subject:a}=e;return r.$$set=c=>{"index"in c&&s(1,n=c.index),"subject"in c&&s(0,a=c.subject)},[a,n,t]}class ne extends P{constructor(e){super(),B(this,e,se,te,A,{index:1,subject:0})}}function le(r){let e,s='<h1 class="answertext svelte-1krstp0">False</h1>';return{c(){e=b("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-10r1tu7"&&(e.innerHTML=s),this.h()},h(){v(e,"class","false svelte-1krstp0")},m(t,n){k(t,e,n)},d(t){t&&d(e)}}}function ae(r){let e,s='<h1 class="answertext svelte-1krstp0">Correct!</h1>';return{c(){e=b("div"),e.innerHTML=s,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-75ln9g"&&(e.innerHTML=s),this.h()},h(){v(e,"class","correct svelte-1krstp0")},m(t,n){k(t,e,n)},d(t){t&&d(e)}}}function re(r){let e,s,t,n,a,c,m,i,p="+1 Banana Point",f;function l(h,_){return h[1]?ae:le}let u=l(r),o=u(r);return c=new ne({props:{subject:r[0].subject,index:r[2]}}),{c(){e=b("div"),s=b("div"),o.c(),t=H(),n=b("div"),a=H(),z(c.$$.fragment),m=H(),i=b("h2"),i.textContent=p,this.h()},l(h){e=g(h,"DIV",{class:!0});var _=y(e);s=g(_,"DIV",{class:!0});var j=y(s);o.l(j),j.forEach(d),t=C(_),n=g(_,"DIV",{class:!0}),y(n).forEach(d),a=C(_),R(c.$$.fragment,_),m=C(_),i=g(_,"H2",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-1sodl0n"&&(i.textContent=p),_.forEach(d),this.h()},h(){v(s,"class","answerbackground svelte-1krstp0"),v(n,"class","break svelte-1krstp0"),v(i,"class","svelte-1krstp0"),v(e,"class","body svelte-1krstp0")},m(h,_){k(h,e,_),w(e,s),o.m(s,null),w(e,t),w(e,n),w(e,a),U(c,e,null),w(e,m),w(e,i),f=!0},p(h,[_]){u!==(u=l(h))&&(o.d(1),o=u(h),o&&(o.c(),o.m(s,null)));const j={};_&1&&(j.subject=h[0].subject),_&4&&(j.index=h[2]),c.$set(j)},i(h){f||(W(c.$$.fragment,h),f=!0)},o(h){X(c.$$.fragment,h),f=!1},d(h){h&&d(e),o.d(),G(c)}}}function ie(r,e,s){let{data:t}=e,n=[],a=!1,c;const m=F.subscribe(i=>{n=i.questions,i.loading,s(2,c=n.findIndex(p=>p.id===t.id)),c!==-1&&(s(1,a=n[c].answer.toString()===t.answer),console.log(a))});return V(async()=>{var i;c!==void 0&&n[c]&&await K(n[c].id,a,t.subject,(i=Y.currentUser)==null?void 0:i.uid)}),$(()=>{m()}),r.$$set=i=>{"data"in i&&s(0,t=i.data)},[t,a,c]}class me extends P{constructor(e){super(),B(this,e,ie,re,A,{data:0})}}export{me as component,_e as universal};
