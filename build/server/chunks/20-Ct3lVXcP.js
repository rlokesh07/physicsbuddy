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

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BzWem-ss.js')).default;
const universal_id = "src/routes/questions/[subject]/[id]/[option]/+page.ts";
const imports = ["_app/immutable/nodes/20.CA22G16t.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.D__1xBxx.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/KaTeX.DDaMeVYv.js","_app/immutable/chunks/store.Dtiak5n4.js","_app/immutable/chunks/index.esm2017.D_845-bC.js","_app/immutable/chunks/index.LM1wCILa.js"];
const stylesheets = ["_app/immutable/assets/20.C200O244.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=20-Ct3lVXcP.js.map
