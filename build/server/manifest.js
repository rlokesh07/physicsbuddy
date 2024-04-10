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
		client: {"start":"_app/immutable/entry/start.C-4x5V9c.js","app":"_app/immutable/entry/app.-bewGvRU.js","imports":["_app/immutable/entry/start.C-4x5V9c.js","_app/immutable/chunks/entry.ZzuS7UE5.js","_app/immutable/chunks/scheduler.CcEjp5hG.js","_app/immutable/chunks/index.Db54UoYm.js","_app/immutable/entry/app.-bewGvRU.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.CcEjp5hG.js","_app/immutable/chunks/index.76i6c7WO.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C6izpjAM.js')),
			__memo(() => import('./chunks/1-PC92m1aB.js')),
			__memo(() => import('./chunks/2-DrWDd6h3.js')),
			__memo(() => import('./chunks/3-ClCJUue1.js')),
			__memo(() => import('./chunks/4-CaGudFDp.js')),
			__memo(() => import('./chunks/5-CqxpS8v9.js')),
			__memo(() => import('./chunks/6-Dwl0WkM3.js')),
			__memo(() => import('./chunks/7-CZySVRC3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/modules/Harmonic Motion",
				pattern: /^\/modules\/Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/questions/[id]",
				pattern: /^\/questions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/questions/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[topic=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"topic","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
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
