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
		client: {"start":"_app/immutable/entry/start.B685J3m8.js","app":"_app/immutable/entry/app.C5yc0ru_.js","imports":["_app/immutable/entry/start.B685J3m8.js","_app/immutable/chunks/entry.wntc-zjR.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.C3g5pe3j.js","_app/immutable/entry/app.C5yc0ru_.js","_app/immutable/chunks/scheduler.Bk5BCwgU.js","_app/immutable/chunks/index.IejQtBaF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Bpz681rQ.js')),
			__memo(() => import('./chunks/1-ClleCaku.js')),
			__memo(() => import('./chunks/2-doKz7xys.js')),
			__memo(() => import('./chunks/3-Sj4k80vI.js')),
			__memo(() => import('./chunks/4-BRH03x6x.js')),
			__memo(() => import('./chunks/5-BeN0MTsk.js')),
			__memo(() => import('./chunks/6-BgRSTgq4.js')),
			__memo(() => import('./chunks/7-DSO5squg.js')),
			__memo(() => import('./chunks/8-SrcO-LN1.js')),
			__memo(() => import('./chunks/9-C4zQ3IY4.js')),
			__memo(() => import('./chunks/10-DasyC2TF.js')),
			__memo(() => import('./chunks/11-BrbRrOO9.js'))
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
				id: "/modules/Applications of Derivatives",
				pattern: /^\/modules\/Applications of Derivatives\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/modules/Harmonic Motion",
				pattern: /^\/modules\/Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
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
