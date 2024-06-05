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

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CIuVj8tu.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/11.CdmGyiWb.js","_app/immutable/chunks/scheduler.Cy5--3XE.js","_app/immutable/chunks/index.ChWjTNHc.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.4E4JvqvL.js","_app/immutable/chunks/index.esm2017.D_845-bC.js","_app/immutable/chunks/index.7Qq_5lIc.js"];
const stylesheets = ["_app/immutable/assets/11.DvynAe45.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=11-BKD2Ayv8.js.map
