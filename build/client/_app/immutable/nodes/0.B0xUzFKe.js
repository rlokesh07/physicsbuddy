import{s as w,r as T,e as g,a as h,c as v,m as b,g as _,l as M,i as u,u as $,v as S,w as A,f as m,o as D}from"../chunks/scheduler.Cy5--3XE.js";import{S as H,i as L,t as k,a as C}from"../chunks/index.ChWjTNHc.js";import{f as P,a as x,d as y,h as R,j}from"../chunks/index.esm2017.D_845-bC.js";import{a as q}from"../chunks/store.4E4JvqvL.js";function E(o){let s,d="<title>To Teach a Monkey (beta)</title>",c,n,p='<div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><span><img width="110" height="132" src="https://cdn.discordapp.com/attachments/744944331542233173/1248029795099607100/logo.png?ex=66622dd2&amp;is=6660dc52&amp;hm=2082f192ff44d335cb20b7c3d8a21f97862902dcaf667647dffe5852aed9df18&amp;" style="padding-left: 0px;margin-top: -24px;margin-right: -14px;margin-bottom: -26px;padding-right: 3px;margin-left: -12px;padding-bottom: 0px;"/></span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-3"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navcol-3" style="padding-right: 0px; padding-left: 85px"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="/Physics">Physics</a></li> <li class="nav-item"><a class="nav-link active" href="/Math">Math</a></li> </ul><a class="nav-link active" style="padding-right: 0px;padding-left: 0px;margin-left: 125px;" href="/account">Account</a></div></div>',l,e;const r=o[1].default,t=T(r,o,o[0],null);return{c(){s=g("head"),s.innerHTML=d,c=h(),n=g("nav"),n.innerHTML=p,l=h(),t&&t.c(),this.h()},l(a){s=v(a,"HEAD",{"data-svelte-h":!0}),b(s)!=="svelte-1xduah5"&&(s.innerHTML=d),c=_(a),n=v(a,"NAV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-10gg6mv"&&(n.innerHTML=p),l=_(a),t&&t.l(a),this.h()},h(){M(n,"class","navbar navbar-expand-md bg-body py-3")},m(a,i){u(a,s,i),u(a,c,i),u(a,n,i),u(a,l,i),t&&t.m(a,i),e=!0},p(a,[i]){t&&t.p&&(!e||i&1)&&$(t,r,a,a[0],e?A(r,a[0],i,null):S(a[0]),null)},i(a){e||(k(t,a),e=!0)},o(a){C(t,a),e=!1},d(a){a&&(m(s),m(c),m(n),m(l)),t&&t.d(a)}}}function N(o,s,d){let{$$slots:c={},$$scope:n}=s;const p=["/login","/modules/Trigonometry"];return D(()=>{console.log("Mounting");const l=P.onAuthStateChanged(async e=>{const r=window.location.pathname;if(!e&&!p.includes(r)){window.location.href="/login";return}if(e&&r=="/login"){window.location.href="/";return}if(e){let t;const a=x(y,"users",e.uid),i=await R(a);if(i.exists())t=i.data();else{const f=x(y,"users",e.uid);t={email:e.email},await j(f,t,{merge:!0})}q.update(f=>({...f,user:e,data:t,loading:!1}))}return l()})}),o.$$set=l=>{"$$scope"in l&&d(0,n=l.$$scope)},[n,c]}class G extends H{constructor(s){super(),L(this,s,N,E,w,{})}}export{G as component};