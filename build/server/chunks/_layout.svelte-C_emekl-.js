import { c as create_ssr_component } from './ssr-BBztw5b5.js';
import './firebase-CgE8lsAl.js';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: "nav.svelte-rcwho1{display:flex;width:100% - 40px;height:3rem;align-items:center;justify-content:space-between;background:hsla(204, 41%, 25%, 1);border:#656565 solid 3px;padding:10px}a.svelte-rcwho1{font-family:system-ui;font-weight:bold;font-size:25px;color:white;text-decoration:none;text-shadow:2px 2px hsla(80, 0%, 50%, 1)}a.svelte-rcwho1:hover{text-decoration:underline;text-decoration-thickness:5px;text-decoration-skip-ink:none}.modes.svelte-rcwho1{display:flex;gap:1em}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-rcwho1" data-svelte-h="svelte-hkhftu"><a href="/" class="svelte-rcwho1">Study Sign</a> <div class="modes svelte-rcwho1"><a href="/HarmonicMotion" class="svelte-rcwho1">Harmonic Motion</a></div> <a href="/account" class="svelte-rcwho1">Account</a></nav> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-C_emekl-.js.map
