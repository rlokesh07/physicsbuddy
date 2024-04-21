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
		client: {"start":"_app/immutable/entry/start.DVyzrNgr.js","app":"_app/immutable/entry/app.g0W5iZQN.js","imports":["_app/immutable/entry/start.DVyzrNgr.js","_app/immutable/chunks/entry.6uwx2wIw.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.C3g5pe3j.js","_app/immutable/entry/app.g0W5iZQN.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.IejQtBaF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Rg0yJ4_0.js')),
			__memo(() => import('./chunks/1-Dro5_uzN.js')),
			__memo(() => import('./chunks/2-DvsgCYN5.js')),
			__memo(() => import('./chunks/3-Sj4k80vI.js')),
			__memo(() => import('./chunks/4-DdRdBZ5w.js')),
			__memo(() => import('./chunks/5-Bs-opIIT.js')),
			__memo(() => import('./chunks/6-D6yKW4Cg.js')),
			__memo(() => import('./chunks/7-C0O50iIg.js')),
			__memo(() => import('./chunks/8-DlszV1xX.js')),
			__memo(() => import('./chunks/9-CHrUU0gz.js')),
			__memo(() => import('./chunks/10-DlOQ0hH9.js'))
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
				id: "/flashcards/[subject]/[topic]",
				pattern: /^\/flashcards\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: list } = await import ('./chunks/list-61fRqR0c.js');
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
