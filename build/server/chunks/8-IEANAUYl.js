import { t as topics } from './topics-JYugbmOG.js';

function load({ params }) {
	return {
		topic: topics[params.topic].topic
	};
}

var _page_ts = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	load: load
});

const index = 8;
let component_cache;
const component = async () =>
	(component_cache ??= (await import('./_page.svelte-DjR7B8OO.js')).default);
const universal_id = 'src/routes/[topic]/+page.ts';
const imports = [
	'_app/immutable/nodes/8.Di_pjF6M.js',
	'_app/immutable/chunks/topics.C65Q6Rrx.js',
	'_app/immutable/chunks/scheduler.C8hMGX5Y.js',
	'_app/immutable/chunks/each.D6YF6ztN.js',
	'_app/immutable/chunks/index.BW63jDgk.js',
	'_app/immutable/chunks/store.1S1T_c8D.js',
	'_app/immutable/chunks/index.C6r_ZE0-.js'
];
const stylesheets = ['_app/immutable/assets/8.BE1Vnz2A.css'];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-IEANAUYl.js.map
