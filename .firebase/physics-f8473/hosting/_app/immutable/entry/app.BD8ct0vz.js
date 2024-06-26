function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			'../nodes/0.C7dUAGf5.js',
			'../chunks/scheduler.CcEjp5hG.js',
			'../chunks/index.76i6c7WO.js',
			'../chunks/store.CCDulWC7.js',
			'../chunks/index.Db54UoYm.js',
			'../assets/0.Cpqi_zwt.css',
			'../nodes/1.BzPGv-5d.js',
			'../chunks/entry.DTspv8Bb.js',
			'../nodes/2.BQMJJ1Y_.js',
			'../chunks/history.2hQnOzG5.js',
			'../assets/history.39R_7-dB.css',
			'../chunks/katex.Dfyhscvt.js',
			'../nodes/3.CEJSQb9y.js',
			'../assets/3.ce2xwRhz.css',
			'../nodes/4.2VP_RUW-.js',
			'../assets/4.BRlaMBs6.css',
			'../nodes/5.BAIDgq6k.js',
			'../chunks/questions.CWLU9xGN.js',
			'../chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js',
			'../assets/AnswerPage.A_PMf_Wf.css',
			'../nodes/6.Cyy0cfTA.js',
			'../assets/6.DUkFZc0Y.css',
			'../nodes/7.BdqzsvMa.js',
			'../chunks/topics.VANNo9jr.js'
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { t as N } from '../chunks/topics.VANNo9jr.js';
import {
	s as U,
	a as B,
	v as h,
	d as H,
	i as k,
	k as g,
	R as W,
	o as j,
	e as z,
	b as F,
	l as G,
	f as V,
	S as d,
	t as J,
	m as K,
	q as Q,
	T as D,
	U as R,
	V as X
} from '../chunks/scheduler.CcEjp5hG.js';
import {
	S as Y,
	i as Z,
	a as w,
	e as A,
	t as b,
	g as T,
	c as y,
	b as I,
	m as P,
	d as L
} from '../chunks/index.76i6c7WO.js';
const M = 'modulepreload',
	$ = function (a, e) {
		return new URL(a, e).href;
	},
	O = {},
	p = function (e, n, i) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const _ = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				s = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			r = Promise.all(
				n.map((o) => {
					if (((o = $(o, i)), o in O)) return;
					O[o] = !0;
					const f = o.endsWith('.css'),
						l = f ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let E = _.length - 1; E >= 0; E--) {
							const v = _[E];
							if (v.href === o && (!f || v.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${o}"]${l}`)) return;
					const u = document.createElement('link');
					if (
						((u.rel = f ? 'stylesheet' : M),
						f || ((u.as = 'script'), (u.crossOrigin = '')),
						(u.href = o),
						s && u.setAttribute('nonce', s),
						document.head.appendChild(u),
						f)
					)
						return new Promise((E, v) => {
							u.addEventListener('load', E),
								u.addEventListener('error', () => v(new Error(`Unable to preload CSS for ${o}`)));
						});
				})
			);
		}
		return r
			.then(() => e())
			.catch((_) => {
				const t = new Event('vite:preloadError', { cancelable: !0 });
				if (((t.payload = _), window.dispatchEvent(t), !t.defaultPrevented)) throw _;
			});
	};
function x(a) {
	return a in N;
}
const le = { list: x };
function ee(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, s) {
		return { props: { data: t[3], form: t[2] } };
	}
	return (
		r && ((e = R(r, _(a))), a[12](e)),
		{
			c() {
				e && y(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && P(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						T();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[12](e),
							y(e.$$.fragment),
							b(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 8 && (o.data = t[3]), s & 4 && (o.form = t[2]), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[12](null), e && L(e, t);
			}
		}
	);
}
function te(a) {
	let e, n, i;
	var r = a[1][0];
	function _(t, s) {
		return { props: { data: t[3], $$slots: { default: [ne] }, $$scope: { ctx: t } } };
	}
	return (
		r && ((e = R(r, _(a))), a[11](e)),
		{
			c() {
				e && y(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && P(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						T();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[11](e),
							y(e.$$.fragment),
							b(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 8 && (o.data = t[3]), s & 8215 && (o.$$scope = { dirty: s, ctx: t }), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[11](null), e && L(e, t);
			}
		}
	);
}
function ne(a) {
	let e, n, i;
	var r = a[1][1];
	function _(t, s) {
		return { props: { data: t[4], form: t[2] } };
	}
	return (
		r && ((e = R(r, _(a))), a[10](e)),
		{
			c() {
				e && y(e.$$.fragment), (n = h());
			},
			l(t) {
				e && I(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && P(e, t, s), k(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][1])) {
					if (e) {
						T();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[10](e),
							y(e.$$.fragment),
							b(e.$$.fragment, 1),
							P(e, n.parentNode, n))
						: (e = null);
				} else if (r) {
					const o = {};
					s & 16 && (o.data = t[4]), s & 4 && (o.form = t[2]), e.$set(o);
				}
			},
			i(t) {
				i || (e && b(e.$$.fragment, t), (i = !0));
			},
			o(t) {
				e && w(e.$$.fragment, t), (i = !1);
			},
			d(t) {
				t && g(n), a[10](null), e && L(e, t);
			}
		}
	);
}
function S(a) {
	let e,
		n = a[6] && q(a);
	return {
		c() {
			(e = z('div')), n && n.c(), this.h();
		},
		l(i) {
			e = F(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = G(e);
			n && n.l(r), r.forEach(g), this.h();
		},
		h() {
			V(e, 'id', 'svelte-announcer'),
				V(e, 'aria-live', 'assertive'),
				V(e, 'aria-atomic', 'true'),
				d(e, 'position', 'absolute'),
				d(e, 'left', '0'),
				d(e, 'top', '0'),
				d(e, 'clip', 'rect(0 0 0 0)'),
				d(e, 'clip-path', 'inset(50%)'),
				d(e, 'overflow', 'hidden'),
				d(e, 'white-space', 'nowrap'),
				d(e, 'width', '1px'),
				d(e, 'height', '1px');
		},
		m(i, r) {
			k(i, e, r), n && n.m(e, null);
		},
		p(i, r) {
			i[6] ? (n ? n.p(i, r) : ((n = q(i)), n.c(), n.m(e, null))) : n && (n.d(1), (n = null));
		},
		d(i) {
			i && g(e), n && n.d();
		}
	};
}
function q(a) {
	let e;
	return {
		c() {
			e = J(a[7]);
		},
		l(n) {
			e = K(n, a[7]);
		},
		m(n, i) {
			k(n, e, i);
		},
		p(n, i) {
			i & 128 && Q(e, n[7]);
		},
		d(n) {
			n && g(e);
		}
	};
}
function ie(a) {
	let e, n, i, r, _;
	const t = [te, ee],
		s = [];
	function o(l, m) {
		return l[1][1] ? 0 : 1;
	}
	(e = o(a)), (n = s[e] = t[e](a));
	let f = a[5] && S(a);
	return {
		c() {
			n.c(), (i = B()), f && f.c(), (r = h());
		},
		l(l) {
			n.l(l), (i = H(l)), f && f.l(l), (r = h());
		},
		m(l, m) {
			s[e].m(l, m), k(l, i, m), f && f.m(l, m), k(l, r, m), (_ = !0);
		},
		p(l, [m]) {
			let u = e;
			(e = o(l)),
				e === u
					? s[e].p(l, m)
					: (T(),
						w(s[u], 1, 1, () => {
							s[u] = null;
						}),
						A(),
						(n = s[e]),
						n ? n.p(l, m) : ((n = s[e] = t[e](l)), n.c()),
						b(n, 1),
						n.m(i.parentNode, i)),
				l[5]
					? f
						? f.p(l, m)
						: ((f = S(l)), f.c(), f.m(r.parentNode, r))
					: f && (f.d(1), (f = null));
		},
		i(l) {
			_ || (b(n), (_ = !0));
		},
		o(l) {
			w(n), (_ = !1);
		},
		d(l) {
			l && (g(i), g(r)), s[e].d(l), f && f.d(l);
		}
	};
}
function re(a, e, n) {
	let { stores: i } = e,
		{ page: r } = e,
		{ constructors: _ } = e,
		{ components: t = [] } = e,
		{ form: s } = e,
		{ data_0: o = null } = e,
		{ data_1: f = null } = e;
	W(i.page.notify);
	let l = !1,
		m = !1,
		u = null;
	j(() => {
		const c = i.page.subscribe(() => {
			l &&
				(n(6, (m = !0)),
				X().then(() => {
					n(7, (u = document.title || 'untitled page'));
				}));
		});
		return n(5, (l = !0)), c;
	});
	function E(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[1] = c), n(0, t);
		});
	}
	function v(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	function C(c) {
		D[c ? 'unshift' : 'push'](() => {
			(t[0] = c), n(0, t);
		});
	}
	return (
		(a.$$set = (c) => {
			'stores' in c && n(8, (i = c.stores)),
				'page' in c && n(9, (r = c.page)),
				'constructors' in c && n(1, (_ = c.constructors)),
				'components' in c && n(0, (t = c.components)),
				'form' in c && n(2, (s = c.form)),
				'data_0' in c && n(3, (o = c.data_0)),
				'data_1' in c && n(4, (f = c.data_1));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[t, _, s, o, f, l, m, u, i, r, E, v, C]
	);
}
class fe extends Y {
	constructor(e) {
		super(),
			Z(this, e, re, ie, U, {
				stores: 8,
				page: 9,
				constructors: 1,
				components: 0,
				form: 2,
				data_0: 3,
				data_1: 4
			});
	}
}
const ce = [
		() =>
			p(
				() => import('../nodes/0.C7dUAGf5.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5]),
				import.meta.url
			),
		() =>
			p(() => import('../nodes/1.BzPGv-5d.js'), __vite__mapDeps([6, 1, 2, 7, 4]), import.meta.url),
		() =>
			p(
				() => import('../nodes/2.BQMJJ1Y_.js'),
				__vite__mapDeps([8, 1, 2, 9, 10, 11, 7, 4]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/3.CEJSQb9y.js'),
				__vite__mapDeps([12, 1, 2, 3, 4, 13]),
				import.meta.url
			),
		() =>
			p(() => import('../nodes/4.2VP_RUW-.js'), __vite__mapDeps([14, 1, 2, 15]), import.meta.url),
		() =>
			p(
				() => import('../nodes/5.BAIDgq6k.js'),
				__vite__mapDeps([16, 1, 2, 17, 11, 18, 19, 9, 10]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/6.Cyy0cfTA.js'),
				__vite__mapDeps([20, 1, 2, 17, 18, 11, 19, 21]),
				import.meta.url
			),
		() =>
			p(
				() => import('../nodes/7.BdqzsvMa.js'),
				__vite__mapDeps([22, 23, 1, 17, 2]),
				import.meta.url
			)
	],
	_e = [],
	ue = {
		'/': [2],
		'/login': [3],
		'/modules/Harmonic Motion': [4],
		'/questions/[id]': [5],
		'/questions/[id]/[option]': [6],
		'/[topic=list]': [7]
	},
	me = {
		handleError: ({ error: a }) => {
			console.error(a);
		},
		reroute: () => {}
	};
export {
	ue as dictionary,
	me as hooks,
	le as matchers,
	ce as nodes,
	fe as root,
	_e as server_loads
};
