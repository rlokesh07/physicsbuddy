const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.tew00bYN.js","app":"_app/immutable/entry/app.BZKVhu7m.js","imports":["_app/immutable/entry/start.tew00bYN.js","_app/immutable/chunks/entry.DG7SxtS1.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/entry/app.BZKVhu7m.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.C8EdDL8M.js","_app/immutable/chunks/index.ClxJndvl.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CGAoXVSr.js')),
			__memo(() => import('./chunks/1-CH67Pa3-.js')),
			__memo(() => import('./chunks/2-x7C-aif1.js')),
			__memo(() => import('./chunks/3-B6VE0-sF.js')),
			__memo(() => import('./chunks/4-CeB8SZ8e.js')),
			__memo(() => import('./chunks/5-DozF0ekz.js')),
			__memo(() => import('./chunks/6-YCjaw5mB.js')),
			__memo(() => import('./chunks/7-BuQKZBnx.js')),
			__memo(() => import('./chunks/8-Dlcaails.js')),
			__memo(() => import('./chunks/9-Ck1WlqGr.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(authed)/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/modules/Harmonic Motion",
				pattern: /^\/modules\/Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/questions/[id]",
				pattern: /^\/questions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/questions/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[topic=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"topic","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: list } = await import ('./chunks/list-DORghR5w.js');
			return { list };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
