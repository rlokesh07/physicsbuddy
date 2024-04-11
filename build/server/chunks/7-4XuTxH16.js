function load({ params }) {
  const question = params.id;
  const answer = params.option;
  return {
    id: question,
    answer
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-B1Chexws.js')).default;
const universal_id = "src/routes/questions/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/7.DAH7KN-C.js","_app/immutable/chunks/scheduler.C4QHo95F.js","_app/immutable/chunks/index.BWtduQC3.js","_app/immutable/chunks/questions.DMgMepBo.js","_app/immutable/chunks/AnswerPage.svelte_svelte_type_style_lang.Cu2kLdRO.js"];
const stylesheets = ["_app/immutable/assets/7.DUkFZc0Y.css","_app/immutable/assets/AnswerPage.A_PMf_Wf.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=7-4XuTxH16.js.map
