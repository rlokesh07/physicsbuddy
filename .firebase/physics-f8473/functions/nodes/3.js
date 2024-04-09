

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CEJSQb9y.js","_app/immutable/chunks/scheduler.CcEjp5hG.js","_app/immutable/chunks/index.76i6c7WO.js","_app/immutable/chunks/store.CCDulWC7.js","_app/immutable/chunks/index.Db54UoYm.js"];
export const stylesheets = ["_app/immutable/assets/3.ce2xwRhz.css"];
export const fonts = [];
