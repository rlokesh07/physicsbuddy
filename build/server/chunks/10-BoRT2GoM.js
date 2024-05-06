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

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Jeo1UeQr.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/10.CUqxbrJF.js","_app/immutable/chunks/scheduler.TjysJePw.js","_app/immutable/chunks/index.Do5D9Rr6.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.OXLHCObS.js","_app/immutable/chunks/index.esm2017.DYQTqBOc.js","_app/immutable/chunks/index.Dft8GlP2.js"];
const stylesheets = ["_app/immutable/assets/10.DvynAe45.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=10-BoRT2GoM.js.map
