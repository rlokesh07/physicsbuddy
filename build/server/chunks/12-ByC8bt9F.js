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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-emgtVAcg.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/12.6neREbGn.js","_app/immutable/chunks/scheduler.d1WlTCxD.js","_app/immutable/chunks/index.BJj5xwse.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.Doz246Dj.js","_app/immutable/chunks/index.esm2017.DtQqRWLZ.js","_app/immutable/chunks/index.BxyTzVf8.js"];
const stylesheets = ["_app/immutable/assets/12.DvynAe45.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-ByC8bt9F.js.map
