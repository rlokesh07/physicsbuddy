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
const component = async () => component_cache ??= (await import('./_page.svelte-BQrfp9lw.js')).default;
const universal_id = "src/routes/flashcards/[subject]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/4.BXJ7gcQK.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.D__1xBxx.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.Dtiak5n4.js","_app/immutable/chunks/index.esm2017.D_845-bC.js","_app/immutable/chunks/index.LM1wCILa.js"];
const stylesheets = ["_app/immutable/assets/4.Be5nF-BW.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-Dc53o73f.js.map
