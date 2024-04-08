import { r as redirect } from './index-DyoisQP2.js';

function load({ cookies, url }) {
  if (!cookies.get("logged_in")) {
    throw redirect(303, `/login?redirectTo=${url.pathname}`);
  }
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-b2tb_J9I.js')).default;
const server_id = "src/routes/(authed)/+layout.server.js";
const imports = ["_app/immutable/nodes/2.DxR8S96A.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/chunks/index.ClxJndvl.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=2-x7C-aif1.js.map
