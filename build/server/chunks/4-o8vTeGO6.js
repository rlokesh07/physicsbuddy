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
const component = async () => component_cache ??= (await import('./_page.svelte-B99U5UZJ.js')).default;
const universal_id = "src/routes/flashcards/[subject]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/4.BbqLZwmo.js","_app/immutable/chunks/scheduler.BX5N7TL5.js","_app/immutable/chunks/index.BZjeE8Gh.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.DgV87bNH.js","_app/immutable/chunks/index.esm2017.DYQTqBOc.js","_app/immutable/chunks/index.Dag0Uhrt.js"];
const stylesheets = ["_app/immutable/assets/4.B2RvCv6T.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-o8vTeGO6.js.map
