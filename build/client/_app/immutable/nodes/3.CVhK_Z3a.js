import{s as S,e as b,t as u,a as j,c as g,b as w,f as h,d as m,h as v,o as E,i as P,j as p,k as U,n as x,w as y}from"../chunks/scheduler.DoGGijXl.js";import{S as B,i as H}from"../chunks/index.D__1xBxx.js";import{f as I,u as R}from"../chunks/store.Dtiak5n4.js";import{f as d}from"../chunks/index.esm2017.D_845-bC.js";import{R as k}from"../chunks/control.CYgJF_JY.js";function q(r,t){throw new k(r,t.toString())}new TextEncoder;function C(r){let t,i,n,l,e,c,f;return{c(){t=b("h1"),i=u("Banana Points: "),n=u(r[0]),l=j(),e=b("h1"),c=u("Most Point: "),f=u(r[1]),this.h()},l(s){t=g(s,"H1",{class:!0});var a=w(t);i=h(a,"Banana Points: "),n=h(a,r[0]),a.forEach(m),l=v(s),e=g(s,"H1",{class:!0});var o=w(e);c=h(o,"Most Point: "),f=h(o,r[1]),o.forEach(m),this.h()},h(){E(t,"class","svelte-19w4sal"),E(e,"class","svelte-19w4sal")},m(s,a){P(s,t,a),p(t,i),p(t,n),P(s,l,a),P(s,e,a),p(e,c),p(e,f)},p(s,[a]){a&1&&U(n,s[0]),a&2&&U(f,s[1])},i:x,o:x,d(s){s&&(m(t),m(l),m(e))}}}function L(r,t,i){let n=[],l,e,c;return y(async()=>{var s;await I(),console.log("jfc"),R.subscribe(a=>{var o;if(n=a.users,console.log(n[0]),a.loading,(o=d.currentUser)!=null&&o.email)n.findIndex(M=>{var _;return M.email===((_=d.currentUser)==null?void 0:_.email)});else throw q(300,"/login")}),i(0,l=n.findIndex(a=>{var o;return a.email===((o=d.currentUser)==null?void 0:o.email)})),console.log((s=d.currentUser)==null?void 0:s.email),e=n[0],n.forEach(f);function f(a){a.bananaPoints&&e.bananaPoints?a.bananaPoints>e.bananaPoints&&(e=a,i(1,c=a.email)):a.bananaPoints&&(e=a,i(1,c=a.email))}}),[l,c]}class G extends B{constructor(t){super(),H(this,t,L,C,S,{})}}export{G as component};
