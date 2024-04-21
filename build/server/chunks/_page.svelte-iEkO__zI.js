import { c as create_ssr_component, e as escape } from './ssr-L4uK7k91.js';
import { a as authHandlers } from './store-CElMOH4N.js';
import './firebase-CgE8lsAl.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index-BCD5SKTV.js';

const css = {
  code: "div.svelte-1ea8enf{display:flex;justify-content:center;align-items:center}h1.svelte-1ea8enf{font-size:50px;text-shadow:4px 4px 4px 4px hsla(204, 41%, 20%, 1)}h2.svelte-1ea8enf{color:black}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="welcomeSign svelte-1ea8enf" data-svelte-h="svelte-1ad5rhe"><h1 class="svelte-1ea8enf">Welcome to Study Sign!</h1></div> <div class="svelte-1ea8enf"><h2 class="svelte-1ea8enf">Hello ${escape(authHandlers.getEmail())}!</h2> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-iEkO__zI.js.map
