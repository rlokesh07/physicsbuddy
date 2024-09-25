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
		client: {"start":"_app/immutable/entry/start.Bh3SQ5IX.js","app":"_app/immutable/entry/app.CrVHcVTZ.js","imports":["_app/immutable/entry/start.Bh3SQ5IX.js","_app/immutable/chunks/entry.DFOA26m_.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.LM1wCILa.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CrVHcVTZ.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.D__1xBxx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-T0N0GUhx.js')),
			__memo(() => import('./chunks/1-CxMcavUF.js')),
			__memo(() => import('./chunks/2-D7sEwD4U.js')),
			__memo(() => import('./chunks/3-BbKC5iIz.js')),
			__memo(() => import('./chunks/4-C7Qtz1qN.js')),
			__memo(() => import('./chunks/5-BXCL-fYx.js')),
			__memo(() => import('./chunks/6-BUjCK5gn.js')),
			__memo(() => import('./chunks/7-DjlHAqqK.js')),
			__memo(() => import('./chunks/8-CvbgBm-1.js')),
			__memo(() => import('./chunks/9-BQ_Ggr_P.js')),
			__memo(() => import('./chunks/10-2MeM2xII.js')),
			__memo(() => import('./chunks/11-C8zn9Dcw.js')),
			__memo(() => import('./chunks/12-BFl5jQSm.js')),
			__memo(() => import('./chunks/13-6mThvFLi.js')),
			__memo(() => import('./chunks/14-DKdJqkDP.js')),
			__memo(() => import('./chunks/15-B1SCgdbJ.js')),
			__memo(() => import('./chunks/16-DrlgqkuP.js')),
			__memo(() => import('./chunks/17-CY8TOro-.js')),
			__memo(() => import('./chunks/18-Jgw1xajt.js')),
			__memo(() => import('./chunks/19-Bw0EEZLF.js')),
			__memo(() => import('./chunks/20-COly73Ow.js')),
			__memo(() => import('./chunks/21-DuwJKm6B.js'))
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
				id: "/history",
				pattern: /^\/history\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/modules/Applications of Derivatives",
				pattern: /^\/modules\/Applications of Derivatives\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/modules/Complex Numbers",
				pattern: /^\/modules\/Complex Numbers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/modules/Harmonic Motion",
				pattern: /^\/modules\/Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/modules/Light and Diffraction",
				pattern: /^\/modules\/Light and Diffraction\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/modules/Limits and Differentiation",
				pattern: /^\/modules\/Limits and Differentiation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/modules/Mechanics",
				pattern: /^\/modules\/Mechanics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/modules/Relativity",
				pattern: /^\/modules\/Relativity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/modules/Simple Harmonic Motion",
				pattern: /^\/modules\/Simple Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/modules/Trigonometry",
				pattern: /^\/modules\/Trigonometry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/modules/Universal Gravitation",
				pattern: /^\/modules\/Universal Gravitation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/modules/Waves",
				pattern: /^\/modules\/Waves\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
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
