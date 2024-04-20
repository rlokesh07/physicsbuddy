import * as universal from '../entries/pages/questions/_id_/_option_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/questions/_id_/_option_/_page.svelte.js'))
		.default);
export { universal };
export const universal_id = 'src/routes/questions/[id]/[option]/+page.ts';
export const imports = [
	'_app/immutable/nodes/6.Cyy0cfTA.js',
	'_app/immutable/chunks/scheduler.CcEjp5hG.js',
	'_app/immutable/chunks/index.76i6c7WO.js',
	'_app/immutable/chunks/questions.CWLU9xGN.js',
	'_app/immutable/chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js',
	'_app/immutable/chunks/katex.Dfyhscvt.js'
];
export const stylesheets = [
	'_app/immutable/assets/6.DUkFZc0Y.css',
	'_app/immutable/assets/AnswerPage.A_PMf_Wf.css'
];
export const fonts = [];
