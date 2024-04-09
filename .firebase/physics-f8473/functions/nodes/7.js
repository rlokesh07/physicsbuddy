import * as universal from '../entries/pages/_topic_list_/_page.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_topic_list_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[topic=list]/+page.ts";
export const imports = ["_app/immutable/nodes/7.BdqzsvMa.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.CcEjp5hG.js","_app/immutable/chunks/questions.CWLU9xGN.js","_app/immutable/chunks/index.76i6c7WO.js"];
export const stylesheets = [];
export const fonts = [];
