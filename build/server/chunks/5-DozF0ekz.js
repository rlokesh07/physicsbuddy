import { r as redirect } from './index-DyoisQP2.js';

const actions = {
  default: ({ cookies, url }) => {
    cookies.set("logged_in", "true", { path: "/" });
    throw redirect(303, url.searchParams.get("redirectTo") ?? "/");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DznKEjUv.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/5.B-k7xO75.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/chunks/index.ClxJndvl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-DozF0ekz.js.map
