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

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Cmdmppyl.js')).default;
const universal_id = "src/routes/questions/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/8.C27c7k-n.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/chunks/index.ClxJndvl.js","_app/immutable/chunks/questions.B0eaTOqF.js","_app/immutable/chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js","_app/immutable/chunks/katex.Dfyhscvt.js"];
const stylesheets = ["_app/immutable/assets/8.DUkFZc0Y.css","_app/immutable/assets/AnswerPage.A_PMf_Wf.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-Dlcaails.js.map
