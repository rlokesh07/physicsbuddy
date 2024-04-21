function load({ params }) {
  const question = params.id;
  const answer = params.option;
  const subject = params.subject;
  return {
    id: question,
    answer,
    subject
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BN1kUDpy.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/8.DfSX5MKa.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.IejQtBaF.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.Dvg3_2Jk.js","_app/immutable/chunks/index.C3g5pe3j.js"];
const stylesheets = ["_app/immutable/assets/8.CfT4V4vF.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=8-DlszV1xX.js.map
