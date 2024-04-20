function load({ params }) {
	const question = params.id;
	const answer = params.option;
	return {
		id: question,
		answer
	};
}

var _page_ts = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	load: load
});

const index = 7;
let component_cache;
const component = async () =>
	(component_cache ??= (await import('./_page.svelte-B4PZ6b7M.js')).default);
const universal_id = 'src/routes/questions/[id]/[option]/+page.ts';
const imports = [
	'_app/immutable/nodes/7.Cy-gB6qX.js',
	'_app/immutable/chunks/scheduler.C8hMGX5Y.js',
	'_app/immutable/chunks/index.BW63jDgk.js',
	'_app/immutable/chunks/each.D6YF6ztN.js',
	'_app/immutable/chunks/KaTeX.DDaMeVYv.js',
	'_app/immutable/chunks/store.1S1T_c8D.js',
	'_app/immutable/chunks/index.C6r_ZE0-.js'
];
const stylesheets = ['_app/immutable/assets/7.DoMQ3I_F.css'];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=7-CLEOTYqB.js.map
