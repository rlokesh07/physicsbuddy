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
		client: {"start":"_app/immutable/entry/start.C8h4JVSQ.js","app":"_app/immutable/entry/app.X3TvBuJk.js","imports":["_app/immutable/entry/start.C8h4JVSQ.js","_app/immutable/chunks/entry.BB-Y5jq6.js","_app/immutable/chunks/scheduler.C8hMGX5Y.js","_app/immutable/chunks/index.C6r_ZE0-.js","_app/immutable/entry/app.X3TvBuJk.js","_app/immutable/chunks/topics.C65Q6Rrx.js","_app/immutable/chunks/scheduler.C8hMGX5Y.js","_app/immutable/chunks/index.BW63jDgk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BLa8tSOq.js')),
			__memo(() => import('./chunks/1-Dle5dptE.js')),
			__memo(() => import('./chunks/2-Cj6pAylI.js')),
			__memo(() => import('./chunks/3-C-mKsR28.js')),
			__memo(() => import('./chunks/4-Ry-cRW6R.js')),
			__memo(() => import('./chunks/5-QZotyGWa.js')),
			__memo(() => import('./chunks/6-CsvOVTFy.js')),
			__memo(() => import('./chunks/7-CLEOTYqB.js')),
			__memo(() => import('./chunks/8-IEANAUYl.js'))
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
				id: "/account",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/modules/Harmonic Motion",
				pattern: /^\/modules\/Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/questions/[id]",
				pattern: /^\/questions\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/questions/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[topic=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"topic","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: list } = await import ('./chunks/list-Czco6162.js');
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
