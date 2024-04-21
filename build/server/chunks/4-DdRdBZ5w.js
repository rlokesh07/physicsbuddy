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
const component = async () => component_cache ??= (await import('./_page.svelte-DLSmtjfQ.js')).default;
const universal_id = "src/routes/flashcards/[subject]/[topic]/+page.ts";
const imports = ["_app/immutable/nodes/4.B0p5B25d.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.IejQtBaF.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/store.Dvg3_2Jk.js","_app/immutable/chunks/index.C3g5pe3j.js"];
const stylesheets = ["_app/immutable/assets/4.B2RvCv6T.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=4-DdRdBZ5w.js.map
