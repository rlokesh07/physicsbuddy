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
const component = async () => component_cache ??= (await import('./_page.svelte-In7Fhz7T.js')).default;
const universal_id = "src/routes/[subject=list]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/4.BNXaoYR0.js","_app/immutable/chunks/scheduler.d1WlTCxD.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BJj5xwse.js","_app/immutable/chunks/store.Doz246Dj.js","_app/immutable/chunks/index.esm2017.DtQqRWLZ.js","_app/immutable/chunks/index.BxyTzVf8.js"];
const stylesheets = ["_app/immutable/assets/4.BPQOGhL6.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-BGsCx5en.js.map
