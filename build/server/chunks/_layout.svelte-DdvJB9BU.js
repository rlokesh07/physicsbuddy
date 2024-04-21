import { c as create_ssr_component } from './ssr-L4uK7k91.js';
import './firebase-CgE8lsAl.js';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: "nav.svelte-1jaynz8{display:flex;width:100% - 40px;height:3rem;align-items:center;justify-content:space-between;background:hsla(204, 41%, 25%, 1);border:#656565 solid 3px;padding:10px}a.svelte-1jaynz8{font-family:system-ui;font-weight:bold;font-size:25px;color:white;text-decoration:none;text-shadow:2px 2px hsla(80, 0%, 50%, 1)}a.svelte-1jaynz8:hover{text-decoration:underline;text-decoration-thickness:5px;text-decoration-skip-ink:none}.modes.svelte-1jaynz8{display:flex;gap:3em}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="svelte-1jaynz8" data-svelte-h="svelte-15a2j9y"><a href="/" class="svelte-1jaynz8">Study Sign</a> <div class="modes svelte-1jaynz8"><a href="/Physics" class="svelte-1jaynz8">Physics</a> <a href="/Math" class="svelte-1jaynz8">Math</a> <a href="/Chemistry" class="svelte-1jaynz8">Chemistry</a></div> <a href="/account" class="svelte-1jaynz8">Account</a></nav> ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-DdvJB9BU.js.map
