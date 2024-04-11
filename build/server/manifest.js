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
		client: {"start":"_app/immutable/entry/start.BS723KqX.js","app":"_app/immutable/entry/app.B3QcfuEd.js","imports":["_app/immutable/entry/start.BS723KqX.js","_app/immutable/chunks/entry.D3O7tIDd.js","_app/immutable/chunks/scheduler.C4QHo95F.js","_app/immutable/chunks/index.tk3Xn2pF.js","_app/immutable/entry/app.B3QcfuEd.js","_app/immutable/chunks/topics.VANNo9jr.js","_app/immutable/chunks/scheduler.C4QHo95F.js","_app/immutable/chunks/index.BWtduQC3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CYztZZvs.js')),
			__memo(() => import('./chunks/1-BeUY87xr.js')),
			__memo(() => import('./chunks/2-DXJpaF71.js')),
			__memo(() => import('./chunks/3-DiZq4GHr.js')),
			__memo(() => import('./chunks/4-BfnolkvB.js')),
			__memo(() => import('./chunks/5-DDtQHoMH.js')),
			__memo(() => import('./chunks/6-D2LFpZqn.js')),
			__memo(() => import('./chunks/7-4XuTxH16.js')),
			__memo(() => import('./chunks/8-B_Kv-RES.js'))
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
