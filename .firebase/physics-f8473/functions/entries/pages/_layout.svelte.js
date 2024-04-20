import { c as create_ssr_component } from '../../chunks/ssr.js';
import '../../chunks/firebase.js';
import 'firebase/firestore';
import 'firebase/auth';
const css = {
	code: 'nav.svelte-1bk11q5{display:flex;width:100%;height:3rem;align-items:center;justify-content:space-between}a.svelte-1bk11q5{font-family:system-ui;color:inherit;text-decoration:none;border:2px hidden #000;border-radius:3px;outline:2px solid grey;outline-offset:4px}.modes.svelte-1bk11q5{display:flex;gap:1em}',
	map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<nav class="svelte-1bk11q5" data-svelte-h="svelte-1w2moz5"><a href="/" class="svelte-1bk11q5">Physics Buddy</a> <div class="modes svelte-1bk11q5"><a href="/HarmonicMotion" class="svelte-1bk11q5">Harmonic Motion</a></div> <a href="/account" class="svelte-1bk11q5">Account</a></nav> ${slots.default ? slots.default({}) : ``}`;
});
export { Layout as default };
