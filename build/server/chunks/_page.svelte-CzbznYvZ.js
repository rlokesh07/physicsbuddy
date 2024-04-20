import { c as create_ssr_component, e as escape } from './ssr-BBztw5b5.js';
import { a as authHandlers } from './store-BHt_OmOw.js';
import './firebase-CgE8lsAl.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import './index-BFKNpo2f.js';

const css = {
	code: 'div.svelte-1yd6a7e{display:flex;justify-content:center;align-items:center}h1.svelte-1yd6a7e{font-size:50px;text-shadow:4px 4px 4px 4px hsla(204, 41%, 20%, 1)}h2.svelte-1yd6a7e{color:black}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<div class="welcomeSign svelte-1yd6a7e" data-svelte-h="svelte-1biv1n9"><h1 class="svelte-1yd6a7e">Welcome to Study Sign!</h1></div> <div class="svelte-1yd6a7e"><h2 class="svelte-1yd6a7e">Hello ${escape(authHandlers.getEmail())}!</h2> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CzbznYvZ.js.map
