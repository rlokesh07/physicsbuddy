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
		client: {"start":"_app/immutable/entry/start.CFUlZJbx.js","app":"_app/immutable/entry/app.B5bF8j94.js","imports":["_app/immutable/entry/start.CFUlZJbx.js","_app/immutable/chunks/entry.zgnK7Oan.js","_app/immutable/chunks/scheduler.TjysJePw.js","_app/immutable/chunks/index.Dft8GlP2.js","_app/immutable/entry/app.B5bF8j94.js","_app/immutable/chunks/scheduler.TjysJePw.js","_app/immutable/chunks/index.Do5D9Rr6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-BFxGMx6w.js')),
			__memo(() => import('./chunks/1-C4f1hqUz.js')),
			__memo(() => import('./chunks/2-w5JI-V6h.js')),
			__memo(() => import('./chunks/3-1U1vudTP.js')),
			__memo(() => import('./chunks/4-DJIen-U7.js')),
			__memo(() => import('./chunks/5-BL3SpdzG.js')),
			__memo(() => import('./chunks/6-BGmmGINt.js')),
			__memo(() => import('./chunks/7-Dg-Zg9s4.js')),
			__memo(() => import('./chunks/8-CD0YBgQA.js')),
			__memo(() => import('./chunks/9-eaMbsgr7.js')),
			__memo(() => import('./chunks/10-BoRT2GoM.js')),
			__memo(() => import('./chunks/11-CYJOAkCV.js')),
			__memo(() => import('./chunks/12-BTA8tOHj.js'))
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
				id: "/modules/Waves",
				pattern: /^\/modules\/Waves\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
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
