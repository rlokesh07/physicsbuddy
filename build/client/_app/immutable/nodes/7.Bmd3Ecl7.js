import{s as z,e as b,t as N,j as S,H as B,b as q,l as $,m as V,h as p,k,w as R,f as g,i as y,o as v,p as A,n as E,x as G,y as T,d as Q,z as W,v as J}from"../chunks/scheduler.C8EdDL8M.js";import{S as U,i as F,c as K,b as X,m as Y,t as Z,a as x,d as ee}from"../chunks/index.ClxJndvl.js";import{e as C,q as L}from"../chunks/questions.B0eaTOqF.js";import"../chunks/katex.Dfyhscvt.js";import{r as w}from"../chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js";import{n as te}from"../chunks/history.2hQnOzG5.js";function M(i,e,n){const t=i.slice();return t[4]=e[n],t[6]=n,t}function H(i){let e,n;return{c(){e=b("img"),this.h()},l(t){e=q(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){T(e.src,n=i[0].image)||g(e,"src",n),g(e,"alt"," Image"),g(e,"class","svelte-1yeoynr")},m(t,r){y(t,e,r)},p(t,r){r&1&&!T(e.src,n=t[0].image)&&g(e,"src",n)},d(t){t&&p(e)}}}function P(i){var m;let e,n,t,r="Submit",_,o,u=C((m=i[0])==null?void 0:m.options),s=[];for(let c=0;c<u.length;c+=1)s[c]=j(M(i,u,c));return{c(){e=b("form");for(let c=0;c<s.length;c+=1)s[c].c();n=S(),t=b("button"),t.textContent=r,this.h()},l(c){e=q(c,"FORM",{});var d=$(e);for(let l=0;l<s.length;l+=1)s[l].l(d);n=k(d),t=q(d,"BUTTON",{type:!0,"data-svelte-h":!0}),Q(t)!=="svelte-1ou7dtz"&&(t.textContent=r),d.forEach(p),this.h()},h(){g(t,"type","submit")},m(c,d){y(c,e,d);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(e,null);v(e,n),v(e,t),_||(o=W(e,"submit",i[1]),_=!0)},p(c,d){var l;if(d&1){u=C((l=c[0])==null?void 0:l.options);let a;for(a=0;a<u.length;a+=1){const f=M(c,u,a);s[a]?s[a].p(f,d):(s[a]=j(f),s[a].c(),s[a].m(e,n))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}},d(c){c&&p(e),J(s,c),_=!1,o()}}}function j(i){let e,n,t,r,_=w(i[4])+"",o,u;return{c(){e=b("label"),n=b("input"),t=S(),r=new B(!1),o=S(),u=b("br"),this.h()},l(s){e=q(s,"LABEL",{class:!0});var m=$(e);n=q(m,"INPUT",{type:!0,name:!0}),t=k(m),r=R(m,!1),o=k(m),m.forEach(p),u=q(s,"BR",{}),this.h()},h(){g(n,"type","radio"),g(n,"name","option"),n.value=i[6],n.required=!0,r.a=o,g(e,"class","radio")},m(s,m){y(s,e,m),v(e,n),v(e,t),r.m(_,e),v(e,o),y(s,u,m)},p(s,m){m&1&&_!==(_=w(s[4])+"")&&r.p(_)},d(s){s&&(p(e),p(u))}}}function ne(i){let e,n,t=i[0].topic+"",r,_,o,u,s=w(i[0].question)+"",m,c,d,l=i[0].image&&H(i),a=i[0].options&&P(i);return{c(){e=b("div"),n=b("h1"),r=N(t),_=S(),o=b("p"),u=new B(!1),m=S(),l&&l.c(),c=S(),d=b("div"),a&&a.c(),this.h()},l(f){e=q(f,"DIV",{class:!0});var h=$(e);n=q(h,"H1",{class:!0});var I=$(n);r=V(I,t),I.forEach(p),_=k(h),o=q(h,"P",{class:!0});var D=$(o);u=R(D,!1),D.forEach(p),m=k(h),l&&l.l(h),h.forEach(p),c=k(f),d=q(f,"DIV",{class:!0});var O=$(d);a&&a.l(O),O.forEach(p),this.h()},h(){g(n,"class","svelte-1yeoynr"),u.a=null,g(o,"class","svelte-1yeoynr"),g(e,"class","question svelte-1yeoynr"),g(d,"class","answer")},m(f,h){y(f,e,h),v(e,n),v(n,r),v(e,_),v(e,o),u.m(s,o),v(e,m),l&&l.m(e,null),y(f,c,h),y(f,d,h),a&&a.m(d,null)},p(f,[h]){h&1&&t!==(t=f[0].topic+"")&&A(r,t),h&1&&s!==(s=w(f[0].question)+"")&&u.p(s),f[0].image?l?l.p(f,h):(l=H(f),l.c(),l.m(e,null)):l&&(l.d(1),l=null),f[0].options?a?a.p(f,h):(a=P(f),a.c(),a.m(d,null)):a&&(a.d(1),a=null)},i:E,o:E,d(f){f&&(p(e),p(c),p(d)),l&&l.d(),a&&a.d()}}}function se(i,e,n){let{question:t}=e;const r=G();function _(o){const u=o.target,m=new FormData(u).get("option");r("formSubmitted",{question:t,selectedOption:m})}return i.$$set=o=>{"question"in o&&n(0,t=o.question)},[t,_]}class ae extends U{constructor(e){super(),F(this,e,se,ne,z,{question:0})}}function ie({params:i}){return{id:i.id}}const _e=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));function le(i){let e,n;return e=new ae({props:{question:L[i[0]]}}),e.$on("formSubmitted",i[1]),{c(){K(e.$$.fragment)},l(t){X(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p:E,i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){x(e.$$.fragment,t),n=!1},d(t){ee(e,t)}}}function oe(i,e,n){let{data:t}=e;var r=L.findIndex(function(o,u){return o.id===t.id});const _=async o=>{const{question:u,selectedOption:s}=o.detail;console.log(u.id+s),te(`/questions/${u.id}/${encodeURIComponent(s)}`)};return i.$$set=o=>{"data"in o&&n(2,t=o.data)},[r,_,t]}class he extends U{constructor(e){super(),F(this,e,oe,le,z,{data:2})}}export{he as component,_e as universal};
