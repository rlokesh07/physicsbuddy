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

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-vbXvpr47.js')).default;
const universal_id = "src/routes/[subject=list]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/12.D-s7JIfA.js","_app/immutable/chunks/scheduler.TjysJePw.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.Do5D9Rr6.js","_app/immutable/chunks/store.OXLHCObS.js","_app/immutable/chunks/index.esm2017.DYQTqBOc.js","_app/immutable/chunks/index.Dft8GlP2.js"];
const stylesheets = ["_app/immutable/assets/12.BPQOGhL6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=12-BTA8tOHj.js.map
