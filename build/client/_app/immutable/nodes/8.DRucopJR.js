import{t as U}from"../chunks/topics.VANNo9jr.js";import{s as W,e as _,t as S,a as V,c as v,b as p,d as x,f as d,g as A,m as c,i as F,h as n,j as X,n as B,y as Y,z as H}from"../chunks/scheduler.C4QHo95F.js";import{e as J,q as K}from"../chunks/questions.DMgMepBo.js";import{S as Z,i as ee}from"../chunks/index.BWtduQC3.js";function te({params:o}){return{topic:U[o.topic].topic}}const ce=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function L(o,t,e){const s=o.slice();return s[2]=t[e],s}function Q(o){let t,e,s=o[2].id+"",r,u;return{c(){t=_("div"),e=_("a"),r=S(s),u=V(),this.h()},l(h){t=v(h,"DIV",{class:!0});var m=p(t);e=v(m,"A",{href:!0,class:!0});var b=p(e);r=x(b,s),b.forEach(d),u=A(m),m.forEach(d),this.h()},h(){c(e,"href",`/questions/${o[2].id}`),c(e,"class","svelte-xbo7w3"),c(t,"class","question svelte-xbo7w3")},m(h,m){F(h,t,m),n(t,e),n(e,r),n(t,u)},d(h){h&&d(t)}}}function R(o){let t,e=o[2].topic===o[0].topic&&Q(o);return{c(){e&&e.c(),t=H()},l(s){e&&e.l(s),t=H()},m(s,r){e&&e.m(s,r),F(s,t,r)},p(s,r){s[2].topic===s[0].topic?e||(e=Q(s),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(s){s&&d(t),e&&e.d(s)}}}function se(o){let t,e,s,r,u,h,m,b,g,C,y,j,E,w,k=o[0].topic+"",D,I,G,$=J(K),i=[];for(let l=0;l<$.length;l+=1)i[l]=R(L(o,$,l));return{c(){t=_("div"),e=_("div"),s=_("div"),r=_("a"),u=S("Study Guide"),m=V(),b=_("div"),g=_("a"),C=S("Flash Cards"),j=V(),E=_("div"),w=_("a"),D=S(k),G=V();for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){t=v(l,"DIV",{class:!0});var f=p(t);e=v(f,"DIV",{class:!0});var a=p(e);s=v(a,"DIV",{class:!0});var q=p(s);r=v(q,"A",{href:!0,class:!0});var O=p(r);u=x(O,"Study Guide"),O.forEach(d),q.forEach(d),m=A(a),b=v(a,"DIV",{class:!0});var P=p(b);g=v(P,"A",{href:!0,class:!0});var M=p(g);C=x(M,"Flash Cards"),M.forEach(d),P.forEach(d),j=A(a),E=v(a,"DIV",{class:!0});var N=p(E);w=v(N,"A",{href:!0,class:!0});var T=p(w);D=x(T,k),T.forEach(d),N.forEach(d),a.forEach(d),G=A(f);for(let z=0;z<i.length;z+=1)i[z].l(f);f.forEach(d),this.h()},h(){c(r,"href",h=`/modules/${o[0].topic}`),c(r,"class","svelte-xbo7w3"),c(s,"class","one svelte-xbo7w3"),c(g,"href",y=`/modules/${o[0].topic}`),c(g,"class","svelte-xbo7w3"),c(b,"class","two svelte-xbo7w3"),c(w,"href",I=`/modules/${o[0].topic}`),c(w,"class","svelte-xbo7w3"),c(E,"class","three svelte-xbo7w3"),c(e,"class","topGrid svelte-xbo7w3"),c(t,"class","questionContainer svelte-xbo7w3")},m(l,f){F(l,t,f),n(t,e),n(e,s),n(s,r),n(r,u),n(e,m),n(e,b),n(b,g),n(g,C),n(e,j),n(e,E),n(E,w),n(w,D),n(t,G);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(t,null)},p(l,[f]){if(f&1&&h!==(h=`/modules/${l[0].topic}`)&&c(r,"href",h),f&1&&y!==(y=`/modules/${l[0].topic}`)&&c(g,"href",y),f&1&&k!==(k=l[0].topic+"")&&X(D,k),f&1&&I!==(I=`/modules/${l[0].topic}`)&&c(w,"href",I),f&1){$=J(K);let a;for(a=0;a<$.length;a+=1){const q=L(l,$,a);i[a]?i[a].p(q,f):(i[a]=R(q),i[a].c(),i[a].m(t,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=$.length}},i:B,o:B,d(l){l&&d(t),Y(i,l)}}}function ae(o,t,e){let{data:r}=t;return o.$$set=u=>{"data"in u&&e(0,r=u.data)},[r,!1]}class ne extends Z{constructor(t){super(),ee(this,t,ae,se,W,{prerender:1,data:0})}get prerender(){return this.$$.ctx[1]}}export{ne as component,ce as universal};
