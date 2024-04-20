import { c as create_ssr_component } from '../../../../chunks/ssr.js';
const css = {
	code: 'h1.svelte-uwqhbo{font-family:system-ui}',
	map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	$$result.css.add(css);
	return `<h1 class="svelte-uwqhbo" data-svelte-h="svelte-1m0smjr">Harmonic Motion</h1>`;
});
export { Page as default };
