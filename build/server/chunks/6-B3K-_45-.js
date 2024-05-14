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

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DPjSsgKb.js')).default;
const universal_id = "src/routes/flashcards/[subject]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/6.Dub9vvji.js","_app/immutable/chunks/scheduler.d1WlTCxD.js","_app/immutable/chunks/index.BJj5xwse.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.Doz246Dj.js","_app/immutable/chunks/index.esm2017.DtQqRWLZ.js","_app/immutable/chunks/index.BxyTzVf8.js"];
const stylesheets = ["_app/immutable/assets/6.B2RvCv6T.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-B3K-_45-.js.map
