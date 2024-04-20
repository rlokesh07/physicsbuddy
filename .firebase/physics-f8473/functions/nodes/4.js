import * as universal from '../entries/pages/modules/Harmonic Motion/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () =>
	(component_cache ??= (await import('../entries/pages/modules/Harmonic Motion/_page.svelte.js'))
		.default);
export { universal };
export const universal_id = 'src/routes/modules/Harmonic Motion/+page.ts';
export const imports = [
	'_app/immutable/nodes/4.2VP_RUW-.js',
	'_app/immutable/chunks/scheduler.CcEjp5hG.js',
	'_app/immutable/chunks/index.76i6c7WO.js'
];
export const stylesheets = ['_app/immutable/assets/4.BRlaMBs6.css'];
export const fonts = [];
