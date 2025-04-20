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
		client: {"start":"_app/immutable/entry/start.DHgFFT2D.js","app":"_app/immutable/entry/app.BrgGDXdi.js","imports":["_app/immutable/entry/start.DHgFFT2D.js","_app/immutable/chunks/entry.Bky_Z9RX.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.LM1wCILa.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BrgGDXdi.js","_app/immutable/chunks/scheduler.DoGGijXl.js","_app/immutable/chunks/index.D__1xBxx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-qiGjjnsx.js')),
			__memo(() => import('./chunks/1-Dztdtlva.js')),
			__memo(() => import('./chunks/2-B04qpbj1.js')),
			__memo(() => import('./chunks/3-D-7Ee9Pe.js')),
			__memo(() => import('./chunks/4-Dc53o73f.js')),
			__memo(() => import('./chunks/5-DyOqWRPY.js')),
			__memo(() => import('./chunks/6-DTXPwDqC.js')),
			__memo(() => import('./chunks/7-U5ZFvpYo.js')),
			__memo(() => import('./chunks/8-nTFrnfHB.js')),
			__memo(() => import('./chunks/9-CRAVkMT3.js')),
			__memo(() => import('./chunks/10-jMhYbFLW.js')),
			__memo(() => import('./chunks/11-BDrCjK_S.js')),
			__memo(() => import('./chunks/12-C8ymb-N5.js')),
			__memo(() => import('./chunks/13-CJ8YDZZS.js')),
			__memo(() => import('./chunks/14-BksFs8An.js')),
			__memo(() => import('./chunks/15-Do0SzFi1.js')),
			__memo(() => import('./chunks/16-DNiU7kTD.js')),
			__memo(() => import('./chunks/17-l1lSgx4C.js')),
			__memo(() => import('./chunks/18-DKF5T-3C.js')),
			__memo(() => import('./chunks/19-Dbzdg6Zg.js')),
			__memo(() => import('./chunks/20-B5xfPAH0.js')),
			__memo(() => import('./chunks/21-BtHGKQSF.js')),
			__memo(() => import('./chunks/22-BT6lBvZt.js')),
			__memo(() => import('./chunks/23-DuKNevQn.js')),
			__memo(() => import('./chunks/24-CWeg7d0m.js'))
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
				id: "/modules/Nuclear and Atomic Physics",
				pattern: /^\/modules\/Nuclear and Atomic Physics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/modules/Relativity",
				pattern: /^\/modules\/Relativity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/modules/Simple Harmonic Motion",
				pattern: /^\/modules\/Simple Harmonic Motion\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/modules/Thermo",
				pattern: /^\/modules\/Thermo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/modules/Torque",
				pattern: /^\/modules\/Torque\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/modules/Trigonometry",
				pattern: /^\/modules\/Trigonometry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/modules/Universal Gravitation",
				pattern: /^\/modules\/Universal Gravitation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/modules/Waves",
				pattern: /^\/modules\/Waves\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/questions/[subject]/[id]/[option]",
				pattern: /^\/questions\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false},{"name":"option","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/[subject=list]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/[subject=list]/[topic]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"subject","matcher":"list","optional":false,"rest":false,"chained":false},{"name":"topic","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
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
