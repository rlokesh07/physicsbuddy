import { c as create_ssr_component } from './ssr-L4uK7k91.js';
import './firebase-BZD7hgW_.js';
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
  return `<head data-svelte-h="svelte-1xduah5"><title>To Teach a Monkey (beta)</title></head> <nav class="navbar navbar-expand-md bg-body py-3" data-svelte-h="svelte-1q08tgl"><div class="container-fluid"><a class="navbar-brand d-flex align-items-center" href="/"><span>To Teach a Monkey (beta)</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-3"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse" id="navcol-3" style="padding-right: 55px;"><ul class="navbar-nav mx-auto"><li class="nav-item"><a class="nav-link active" href="/Physics">Physics</a></li> </ul><span class="navbar-text" style="padding-right: 0px;padding-left: 0px;margin-left: 125px;">Account</span></div></div></nav> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-BQtitqti.js.map
