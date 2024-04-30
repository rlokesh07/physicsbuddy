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

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Dsp-6cgP.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/9.Dja90WPZ.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.IejQtBaF.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.Dsvwl-ZD.js","_app/immutable/chunks/index.esm2017.DYQTqBOc.js","_app/immutable/chunks/index.C3g5pe3j.js"];
const stylesheets = ["_app/immutable/assets/9.C7-QZQeE.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=9-C4zQ3IY4.js.map
