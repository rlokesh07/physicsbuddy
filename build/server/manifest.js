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
		client: {"start":"_app/immutable/entry/start.ChXqQQN7.js","app":"_app/immutable/entry/app.cXkwHXyV.js","imports":["_app/immutable/entry/start.ChXqQQN7.js","_app/immutable/chunks/entry.C94gmttt.js","_app/immutable/chunks/scheduler.Cy5--3XE.js","_app/immutable/chunks/index.7Qq_5lIc.js","_app/immutable/entry/app.cXkwHXyV.js","_app/immutable/chunks/scheduler.Cy5--3XE.js","_app/immutable/chunks/index.ChWjTNHc.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-B76ass0k.js')),
			__memo(() => import('./chunks/1-DZ_BdLN6.js')),
			__memo(() => import('./chunks/2-DyCAidNo.js')),
			__memo(() => import('./chunks/3-BWzM6CBI.js')),
			__memo(() => import('./chunks/4-CsIfy0EP.js')),
			__memo(() => import('./chunks/5-PPG_zuV_.js')),
			__memo(() => import('./chunks/6-BmMFYVRd.js')),
			__memo(() => import('./chunks/7-C1-DQyRA.js')),
			__memo(() => import('./chunks/8-BR4UAQJe.js')),
			__memo(() => import('./chunks/9-CapwGJwE.js')),
			__memo(() => import('./chunks/10-qX-xbS27.js')),
			__memo(() => import('./chunks/11-BKD2Ayv8.js')),
			__memo(() => import('./chunks/12-CEXXX7XS.js')),
			__memo(() => import('./chunks/13-s_ag_-_H.js'))
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
				id: "/modules/Trigonometry",
				pattern: /^\/modules\/Trigonometry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/modules/Wave",
				pattern: /^\/modules\/Wave\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
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
