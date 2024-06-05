import{s as z,e as y,t as Y,a as $,H as O,c as q,b as w,d as Z,f as g,g as D,p as P,l as d,i as I,h as _,j as ee,n as U,o as Q,D as te,q as ne,m as G,y as W,A as J,x as se}from"../chunks/scheduler.Cy5--3XE.js";import{S as K,i as X,c as ie,b as ae,m as oe,t as le,a as re,d as ce}from"../chunks/index.ChWjTNHc.js";import{e as C}from"../chunks/each.D6YF6ztN.js";import{r as L}from"../chunks/KaTeX.DDaMeVYv.js";import"../chunks/index.esm2017.D_845-bC.js";import{q as ue,d as fe}from"../chunks/store.4E4JvqvL.js";function me({params:i}){const e=i.id,n=i.subject;return{id:e,subject:n}}const Te=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"}));function N(i,e,n){const t=i.slice();return t[7]=e[n],t[6]=n,t}function V(i,e,n){const t=i.slice();return t[4]=e[n],t[6]=n,t}function B(i){let e,n;return{c(){e=y("img"),this.h()},l(t){e=q(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){d(e,"class","questionImage svelte-1em7ev9"),ne(e.src,n="/src/lib/images/HM0003.png")||d(e,"src",n),d(e,"alt"," Image")},m(t,s){I(t,e,s)},d(t){t&&g(e)}}}function he(i){var b;let e,n,t,s,c,f,r="Submit",a,p,o=C((b=i[0])==null?void 0:b.unit),l=[];for(let u=0;u<o.length;u+=1)l[u]=x(N(i,o,u));return{c(){e=y("form"),n=y("input"),t=$(),s=y("select");for(let u=0;u<l.length;u+=1)l[u].c();c=$(),f=y("button"),f.textContent=r,this.h()},l(u){e=q(u,"FORM",{});var m=w(e);n=q(m,"INPUT",{type:!0,id:!0,name:!0}),t=D(m),s=q(m,"SELECT",{name:!0,id:!0});var S=w(s);for(let h=0;h<l.length;h+=1)l[h].l(S);S.forEach(g),c=D(m),f=q(m,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),G(f)!=="svelte-ttjbab"&&(f.textContent=r),m.forEach(g),this.h()},h(){d(n,"type","text"),d(n,"id","FreeResponse"),d(n,"name","FreeResponse"),d(s,"name","unit"),d(s,"id","unit"),d(f,"type","submit"),d(f,"class","submit-button svelte-1em7ev9")},m(u,m){I(u,e,m),_(e,n),_(e,t),_(e,s);for(let S=0;S<l.length;S+=1)l[S]&&l[S].m(s,null);_(e,c),_(e,f),a||(p=W(e,"submit",i[2]),a=!0)},p(u,m){var S;if(m&1){o=C((S=u[0])==null?void 0:S.unit);let h;for(h=0;h<o.length;h+=1){const v=N(u,o,h);l[h]?l[h].p(v,m):(l[h]=x(v),l[h].c(),l[h].m(s,null))}for(;h<l.length;h+=1)l[h].d(1);l.length=o.length}},d(u){u&&g(e),J(l,u),a=!1,p()}}}function de(i){var p;let e,n,t,s='<button type="submit" class="submit-button svelte-1em7ev9">Submit</button>',c,f,r=C((p=i[0])==null?void 0:p.options),a=[];for(let o=0;o<r.length;o+=1)a[o]=A(V(i,r,o));return{c(){e=y("form");for(let o=0;o<a.length;o+=1)a[o].c();n=$(),t=y("div"),t.innerHTML=s,this.h()},l(o){e=q(o,"FORM",{});var l=w(e);for(let b=0;b<a.length;b+=1)a[b].l(l);n=D(l),t=q(l,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-184z3ph"&&(t.innerHTML=s),l.forEach(g),this.h()},h(){d(t,"class","submit-button-container svelte-1em7ev9")},m(o,l){I(o,e,l);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(e,null);_(e,n),_(e,t),c||(f=W(e,"submit",i[1]),c=!0)},p(o,l){var b;if(l&1){r=C((b=o[0])==null?void 0:b.options);let u;for(u=0;u<r.length;u+=1){const m=V(o,r,u);a[u]?a[u].p(m,l):(a[u]=A(m),a[u].c(),a[u].m(e,n))}for(;u<a.length;u+=1)a[u].d(1);a.length=r.length}},d(o){o&&g(e),J(a,o),c=!1,f()}}}function x(i){let e,n,t=L(i[7])+"";return{c(){e=y("option"),n=new O(!1),this.h()},l(s){e=q(s,"OPTION",{});var c=w(e);n=P(c,!1),c.forEach(g),this.h()},h(){n.a=null,e.__value=i[6],se(e,e.__value)},m(s,c){I(s,e,c),n.m(t,e)},p(s,c){c&1&&t!==(t=L(s[7])+"")&&n.p(t)},d(s){s&&g(e)}}}function A(i){let e,n,t,s,c,f,r=L(i[4])+"",a,p;return{c(){e=y("label"),n=y("input"),t=$(),s=y("span"),c=$(),f=new O(!1),a=$(),p=y("br"),this.h()},l(o){e=q(o,"LABEL",{class:!0,for:!0});var l=w(e);n=q(l,"INPUT",{type:!0,id:!0,name:!0}),t=D(l),s=q(l,"SPAN",{class:!0}),w(s).forEach(g),c=D(l),f=P(l,!1),a=D(l),l.forEach(g),p=q(o,"BR",{}),this.h()},h(){d(n,"type","radio"),d(n,"id",`option${i[6]}`),d(n,"name","option"),n.value=i[6],n.required=!0,d(s,"class","radio-custom"),f.a=a,d(e,"class","radio"),d(e,"for",`option${i[6]}`)},m(o,l){I(o,e,l),_(e,n),_(e,t),_(e,s),_(e,c),f.m(r,e),_(e,a),I(o,p,l)},p(o,l){l&1&&r!==(r=L(o[4])+"")&&f.p(r)},d(o){o&&(g(e),g(p))}}}function pe(i){let e,n,t,s,c=i[0].topic+"",f,r,a,p,o=L(i[0].question)+"",l,b,u,m=i[0].image&&B();function S(E,k){if(E[0].type==="Multiple Choice")return de;if(E[0].type==="Free Response")return he}let h=S(i),v=h&&h(i);return{c(){e=y("div"),n=y("div"),t=y("div"),s=y("h1"),f=Y(c),r=$(),a=y("p"),p=new O(!1),l=$(),m&&m.c(),b=$(),u=y("div"),v&&v.c(),this.h()},l(E){e=q(E,"DIV",{class:!0});var k=w(e);n=q(k,"DIV",{class:!0});var T=w(n);t=q(T,"DIV",{class:!0});var M=w(t);s=q(M,"H1",{class:!0});var F=w(s);f=Z(F,c),F.forEach(g),r=D(M),a=q(M,"P",{class:!0});var R=w(a);p=P(R,!1),R.forEach(g),l=D(M),m&&m.l(M),M.forEach(g),b=D(T),u=q(T,"DIV",{class:!0});var j=w(u);v&&v.l(j),j.forEach(g),T.forEach(g),k.forEach(g),this.h()},h(){d(s,"class","svelte-1em7ev9"),p.a=null,d(a,"class","svelte-1em7ev9"),d(t,"class","question svelte-1em7ev9"),d(u,"class","answer svelte-1em7ev9"),d(n,"class","questionBox svelte-1em7ev9"),d(e,"class","fullContainer svelte-1em7ev9")},m(E,k){I(E,e,k),_(e,n),_(n,t),_(t,s),_(s,f),_(t,r),_(t,a),p.m(o,a),_(t,l),m&&m.m(t,null),_(n,b),_(n,u),v&&v.m(u,null)},p(E,[k]){k&1&&c!==(c=E[0].topic+"")&&ee(f,c),k&1&&o!==(o=L(E[0].question)+"")&&p.p(o),E[0].image?m||(m=B(),m.c(),m.m(t,null)):m&&(m.d(1),m=null),h===(h=S(E))&&v?v.p(E,k):(v&&v.d(1),v=h&&h(E),v&&(v.c(),v.m(u,null)))},i:U,o:U,d(E){E&&g(e),m&&m.d(),v&&v.d()}}}function _e(i,e,n){let{question:t}=e;Q(()=>{const r=document.querySelector(".questionImage");t.image&&(r.src=`${t.image}`)});const s=te();function c(r){const a=r.target,o=new FormData(a).get("option");s("formSubmitted",{question:t,selected:o})}function f(r){const a=r.target,p=new FormData(a);let o=p.get("FreeResponse");o+=p.get("unit"),console.log(o),s("formSubmitted",{question:t,selected:o})}return i.$$set=r=>{"question"in r&&n(0,t=r.question)},[t,c,f]}class ve extends K{constructor(e){super(),X(this,e,_e,pe,z,{question:0})}}const ge=()=>typeof window<"u"&&"document"in window&&"location"in window,H=i=>({...i.location,state:i.history.state,key:i.history.state&&i.history.state.key||"initial"}),be=i=>{const e=[];let n=H(i);return{get location(){return n},listen(t){e.push(t);const s=()=>{n=H(i),t({location:n,action:"POP"})};return i.addEventListener("popstate",s),()=>{i.removeEventListener("popstate",s);const c=e.indexOf(t);e.splice(c,1)}},navigate(t,{state:s,replace:c=!1,preserveScroll:f=!1,blurActiveElement:r=!0}={}){s={...s,key:Date.now()+""};try{c?i.history.replaceState(s,"",t):i.history.pushState(s,"",t)}catch{i.location[c?"replace":"assign"](t)}n=H(i),e.forEach(a=>a({location:n,action:"PUSH",preserveScroll:f})),r&&document.activeElement.blur()}}},ye=(i="/")=>{let e=0;const n=[{pathname:i,search:""}],t=[];return{get location(){return n[e]},addEventListener(s,c){},removeEventListener(s,c){},history:{get entries(){return n},get index(){return e},get state(){return t[e]},pushState(s,c,f){const[r,a=""]=f.split("?");e++,n.push({pathname:r,search:a}),t.push(s)},replaceState(s,c,f){const[r,a=""]=f.split("?");n[e]={pathname:r,search:a},t[e]=s}}}},qe=be(ge()?window:ye()),{navigate:Ee}=qe;function Se(i){let e,n;return e=new ve({props:{question:i[0][i[1]]}}),e.$on("formSubmitted",i[2]),{c(){ie(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,s){oe(e,t,s),n=!0},p(t,[s]){const c={};s&1&&(c.question=t[0][t[1]]),e.$set(c)},i(t){n||(le(e.$$.fragment,t),n=!0)},o(t){re(e.$$.fragment,t),n=!1},d(t){ce(e,t)}}}function we(i,e,n){let t=[];ue.subscribe(r=>{n(0,t=r.questions),r.loading});let{data:s}=e;var c=t.findIndex(function(r,a){return r.id===s.id});const f=async r=>{const{question:a,selected:p}=r.detail;Ee(`/questions/${s.subject}/${a.id}/${encodeURIComponent(p)}`)};return Q(async()=>{await fe(s.subject)}),i.$$set=r=>{"data"in r&&n(3,s=r.data)},[t,c,f,s]}class Ce extends K{constructor(e){super(),X(this,e,we,Se,z,{data:3})}}export{Ce as component,Te as universal};