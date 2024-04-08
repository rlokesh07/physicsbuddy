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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CZPuL9Sk.js')).default;
const universal_id = "src/routes/[topic=list]/+page.ts";
const imports = ["_app/immutable/nodes/9.CnTXz_dE.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/chunks/questions.B0eaTOqF.js","_app/immutable/chunks/index.ClxJndvl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-Ck1WlqGr.js.map
