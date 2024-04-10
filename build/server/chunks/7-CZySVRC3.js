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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-VY4kOL.js')).default;
const universal_id = "src/routes/[topic=list]/+page.ts";
const imports = ["_app/immutable/nodes/7.BdqzsvMa.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.CcEjp5hG.js","_app/immutable/chunks/questions.CWLU9xGN.js","_app/immutable/chunks/index.76i6c7WO.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=7-CZySVRC3.js.map
