import { t as topics } from './topics-UHvWnKW7.js';

function load({ params }) {
  return {
    topic: topics[params.topic].topic
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dbdviaam.js')).default;
const universal_id = "src/routes/[topic=list]/+page.ts";
const imports = ["_app/immutable/nodes/8.DRucopJR.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.C4QHo95F.js","_app/immutable/chunks/questions.DMgMepBo.js","_app/immutable/chunks/index.BWtduQC3.js"];
const stylesheets = ["_app/immutable/assets/8.DVG6nzhP.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-B_Kv-RES.js.map
