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
		client: {"start":"_app/immutable/entry/start.D6KfXYHG.js","app":"_app/immutable/entry/app.BNHDUFsQ.js","imports":["_app/immutable/entry/start.D6KfXYHG.js","_app/immutable/chunks/entry.DqVaRFZD.js","_app/immutable/chunks/scheduler.Cq83xzs3.js","_app/immutable/chunks/index.vO8MfW_0.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BNHDUFsQ.js","_app/immutable/chunks/scheduler.Cq83xzs3.js","_app/immutable/chunks/index.D4SZ9pX_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Dq3oC2lX.js')),
			__memo(() => import('./chunks/1-DQkmWLMZ.js')),
			__memo(() => import('./chunks/2-CqpqibVM.js')),
			__memo(() => import('./chunks/3-DEnSd0fn.js')),
			__memo(() => import('./chunks/4-C20zN587.js')),
			__memo(() => import('./chunks/5-B-kBfMA5.js')),
			__memo(() => import('./chunks/6-xrYeadaY.js')),
			__memo(() => import('./chunks/7-BhqYplHY.js')),
			__memo(() => import('./chunks/8-_fbLYYHL.js')),
			__memo(() => import('./chunks/9-BRSmV2Xm.js')),
			__memo(() => import('./chunks/10-cuFjyLXl.js')),
			__memo(() => import('./chunks/11-B-KTGXVA.js')),
			__memo(() => import('./chunks/12-d05q9zMW.js')),
			__memo(() => import('./chunks/13-Hxwn8o1z.js')),
			__memo(() => import('./chunks/14-C6UNwIaj.js')),
			__memo(() => import('./chunks/15-D50Krzks.js')),
			__memo(() => import('./chunks/16-Cf9jYFV-.js')),
			__memo(() => import('./chunks/17-D6ofV0TF.js'))
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
				id: "/modules/Limits and Differentiation",
				pattern: /^\/modules\/Limits and Differentiation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/modules/Relativity",
				pattern: /^\/modules\/Relativity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/modules/Trigonometry",
				pattern: /^\/modules\/Trigonometry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/modules/Wave",
				pattern: /^\/modules\/Wave\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
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
