import { c as create_ssr_component } from './ssr-L4uK7k91.js';
import './firebase-Dys_eMen.js';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: "@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<head data-svelte-h="svelte-1xduah5"><title>To Teach a Monkey (beta)</title></head> <nav class="navbar navbar-expand-md bg-body py-3" data-svelte-h="svelte-10gg6mv"><div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><span><img width="110" height="132" src="https://cdn.discordapp.com/attachments/744944331542233173/1248029795099607100/logo.png?ex=66622dd2&is=6660dc52&hm=2082f192ff44d335cb20b7c3d8a21f97862902dcaf667647dffe5852aed9df18&" style="padding-left: 0px;margin-top: -24px;margin-right: -14px;margin-bottom: -26px;padding-right: 3px;margin-left: -12px;padding-bottom: 0px;"></span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-3"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navcol-3" style="padding-right: 0px; padding-left: 85px"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="/Physics">Physics</a></li> <li class="nav-item"><a class="nav-link active" href="/Math">Math</a></li> </ul><a class="nav-link active" style="padding-right: 0px;padding-left: 0px;margin-left: 125px;" href="/account">Account</a></div></div></nav> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DLeoXltd.js.map
