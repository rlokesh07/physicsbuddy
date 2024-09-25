function load({ params }) {
  return {
    topic: params.topic,
    subject: params.subject
  };
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C2reWden.js')).default;
const universal_id = "src/routes/flashcards/[subject]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/4.e5ZN833p.js","_app/immutable/chunks/scheduler.Cq83xzs3.js","_app/immutable/chunks/index.D4SZ9pX_.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.DjMyA2vN.js","_app/immutable/chunks/index.esm2017.D_845-bC.js","_app/immutable/chunks/index.vO8MfW_0.js"];
const stylesheets = ["_app/immutable/assets/4.Be5nF-BW.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-C20zN587.js.map
