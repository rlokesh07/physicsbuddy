function __vite__mapDeps(indexes) {
	if (!__vite__mapDeps.viteFileDeps) {
		__vite__mapDeps.viteFileDeps = [
			'../nodes/0.hbtceNps.js',
			'../chunks/scheduler.C8hMGX5Y.js',
			'../chunks/index.BW63jDgk.js',
			'../chunks/store.1S1T_c8D.js',
			'../chunks/index.C6r_ZE0-.js',
			'../assets/0.Bw4nhc5f.css',
			'../nodes/1.BQVVXtTo.js',
			'../chunks/entry.BB-Y5jq6.js',
			'../nodes/2.Dr-MFugA.js',
			'../assets/2.CeE7Wkf1.css',
			'../nodes/3.gCsjaJma.js',
			'../assets/3.9PV3BXm2.css',
			'../nodes/4.BfrQSW9q.js',
			'../assets/4.DQFtKEam.css',
			'../nodes/5.BC8RZhZg.js',
			'../assets/5.CO42PNUF.css',
			'../nodes/6.C_Q7aRp-.js',
			'../chunks/each.D6YF6ztN.js',
			'../chunks/KaTeX.DDaMeVYv.js',
			'../assets/6.DfCDV_Xg.css',
			'../nodes/7.Cy-gB6qX.js',
			'../assets/7.DoMQ3I_F.css',
			'../nodes/8.Di_pjF6M.js',
			'../chunks/topics.C65Q6Rrx.js',
			'../assets/8.BE1Vnz2A.css'
		];
	}
	return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import { t as C } from '../chunks/topics.C65Q6Rrx.js';
import {
	s as B,
	a as U,
	z as h,
	g as j,
	i as v,
	f as g,
	N as z,
	r as H,
	e as Q,
	c as W,
	b as F,
	m as D,
	O as p,
	t as G,
	d as J,
	j as K,
	P as I,
	Q as R,
	R as X
} from '../chunks/scheduler.C8hMGX5Y.js';
import {
	S as Y,
	i as Z,
	a as w,
	e as A,
	t as b,
	g as O,
	c as P,
	b as T,
	m as y,
	d as L
} from '../chunks/index.BW63jDgk.js';
const M = 'modulepreload',
	$ = function (a, e) {
		return new URL(a, e).href;
	},
	V = {},
	d = function (e, n, i) {
		let r = Promise.resolve();
		if (n && n.length > 0) {
			const _ = document.getElementsByTagName('link'),
				t = document.querySelector('meta[property=csp-nonce]'),
				s = (t == null ? void 0 : t.nonce) || (t == null ? void 0 : t.getAttribute('nonce'));
			r = Promise.all(
				n.map((o) => {
					if (((o = $(o, i)), o in V)) return;
					V[o] = !0;
					const c = o.endsWith('.css'),
						l = c ? '[rel="stylesheet"]' : '';
					if (!!i)
						for (let E = _.length - 1; E >= 0; E--) {
							const k = _[E];
							if (k.href === o && (!c || k.rel === 'stylesheet')) return;
						}
					else if (document.querySelector(`link[href="${o}"]${l}`)) return;
					const u = document.createElement('link');
					if (
						((u.rel = c ? 'stylesheet' : M),
						c || ((u.as = 'script'), (u.crossOrigin = '')),
						(u.href = o),
						s && u.setAttribute('nonce', s),
						document.head.appendChild(u),
						c)
					)
						return new Promise((E, k) => {
							u.addEventListener('load', E),
								u.addEventListener('error', () => k(new Error(`Unable to preload CSS for ${o}`)));
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
	return a in C;
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
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && y(e, t, s), v(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						O();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[12](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							y(e, n.parentNode, n))
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
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && y(e, t, s), v(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][0])) {
					if (e) {
						O();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[11](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							y(e, n.parentNode, n))
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
				e && P(e.$$.fragment), (n = h());
			},
			l(t) {
				e && T(e.$$.fragment, t), (n = h());
			},
			m(t, s) {
				e && y(e, t, s), v(t, n, s), (i = !0);
			},
			p(t, s) {
				if (s & 2 && r !== (r = t[1][1])) {
					if (e) {
						O();
						const o = e;
						w(o.$$.fragment, 1, 0, () => {
							L(o, 1);
						}),
							A();
					}
					r
						? ((e = R(r, _(t))),
							t[10](e),
							P(e.$$.fragment),
							b(e.$$.fragment, 1),
							y(e, n.parentNode, n))
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
			(e = Q('div')), n && n.c(), this.h();
		},
		l(i) {
			e = W(i, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, style: !0 });
			var r = F(e);
			n && n.l(r), r.forEach(g), this.h();
		},
		h() {
			D(e, 'id', 'svelte-announcer'),
				D(e, 'aria-live', 'assertive'),
				D(e, 'aria-atomic', 'true'),
				p(e, 'position', 'absolute'),
				p(e, 'left', '0'),
				p(e, 'top', '0'),
				p(e, 'clip', 'rect(0 0 0 0)'),
				p(e, 'clip-path', 'inset(50%)'),
				p(e, 'overflow', 'hidden'),
				p(e, 'white-space', 'nowrap'),
				p(e, 'width', '1px'),
				p(e, 'height', '1px');
		},
		m(i, r) {
			v(i, e, r), n && n.m(e, null);
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
			e = G(a[7]);
		},
		l(n) {
			e = J(n, a[7]);
		},
		m(n, i) {
			v(n, e, i);
		},
		p(n, i) {
			i & 128 && K(e, n[7]);
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
	let c = a[5] && S(a);
	return {
		c() {
			n.c(), (i = U()), c && c.c(), (r = h());
		},
		l(l) {
			n.l(l), (i = j(l)), c && c.l(l), (r = h());
		},
		m(l, m) {
			s[e].m(l, m), v(l, i, m), c && c.m(l, m), v(l, r, m), (_ = !0);
		},
		p(l, [m]) {
			let u = e;
			(e = o(l)),
				e === u
					? s[e].p(l, m)
					: (O(),
						w(s[u], 1, 1, () => {
							s[u] = null;
						}),
						A(),
						(n = s[e]),
						n ? n.p(l, m) : ((n = s[e] = t[e](l)), n.c()),
						b(n, 1),
						n.m(i.parentNode, i)),
				l[5]
					? c
						? c.p(l, m)
						: ((c = S(l)), c.c(), c.m(r.parentNode, r))
					: c && (c.d(1), (c = null));
		},
		i(l) {
			_ || (b(n), (_ = !0));
		},
		o(l) {
			w(n), (_ = !1);
		},
		d(l) {
			l && (g(i), g(r)), s[e].d(l), c && c.d(l);
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
		{ data_1: c = null } = e;
	z(i.page.notify);
	let l = !1,
		m = !1,
		u = null;
	H(() => {
		const f = i.page.subscribe(() => {
			l &&
				(n(6, (m = !0)),
				X().then(() => {
					n(7, (u = document.title || 'untitled page'));
				}));
		});
		return n(5, (l = !0)), f;
	});
	function E(f) {
		I[f ? 'unshift' : 'push'](() => {
			(t[1] = f), n(0, t);
		});
	}
	function k(f) {
		I[f ? 'unshift' : 'push'](() => {
			(t[0] = f), n(0, t);
		});
	}
	function N(f) {
		I[f ? 'unshift' : 'push'](() => {
			(t[0] = f), n(0, t);
		});
	}
	return (
		(a.$$set = (f) => {
			'stores' in f && n(8, (i = f.stores)),
				'page' in f && n(9, (r = f.page)),
				'constructors' in f && n(1, (_ = f.constructors)),
				'components' in f && n(0, (t = f.components)),
				'form' in f && n(2, (s = f.form)),
				'data_0' in f && n(3, (o = f.data_0)),
				'data_1' in f && n(4, (c = f.data_1));
		}),
		(a.$$.update = () => {
			a.$$.dirty & 768 && i.page.set(r);
		}),
		[t, _, s, o, c, l, m, u, i, r, E, k, N]
	);
}
class ce extends Y {
	constructor(e) {
		super(),
			Z(this, e, re, ie, B, {
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
const fe = [
		() =>
			d(
				() => import('../nodes/0.hbtceNps.js'),
				__vite__mapDeps([0, 1, 2, 3, 4, 5]),
				import.meta.url
			),
		() =>
			d(() => import('../nodes/1.BQVVXtTo.js'), __vite__mapDeps([6, 1, 2, 7, 4]), import.meta.url),
		() =>
			d(
				() => import('../nodes/2.Dr-MFugA.js'),
				__vite__mapDeps([8, 1, 2, 3, 4, 9]),
				import.meta.url
			),
		() =>
			d(() => import('../nodes/3.gCsjaJma.js'), __vite__mapDeps([10, 1, 2, 11]), import.meta.url),
		() =>
			d(
				() => import('../nodes/4.BfrQSW9q.js'),
				__vite__mapDeps([12, 1, 2, 3, 4, 13]),
				import.meta.url
			),
		() =>
			d(() => import('../nodes/5.BC8RZhZg.js'), __vite__mapDeps([14, 1, 2, 15]), import.meta.url),
		() =>
			d(
				() => import('../nodes/6.C_Q7aRp-.js'),
				__vite__mapDeps([16, 1, 2, 17, 18, 3, 4, 19]),
				import.meta.url
			),
		() =>
			d(
				() => import('../nodes/7.Cy-gB6qX.js'),
				__vite__mapDeps([20, 1, 2, 17, 18, 3, 4, 21]),
				import.meta.url
			),
		() =>
			d(
				() => import('../nodes/8.Di_pjF6M.js'),
				__vite__mapDeps([22, 23, 1, 17, 2, 3, 4, 24]),
				import.meta.url
			)
	],
	_e = [],
	ue = {
		'/': [2],
		'/account': [3],
		'/login': [4],
		'/modules/Harmonic Motion': [5],
		'/questions/[id]': [6],
		'/questions/[id]/[option]': [7],
		'/[topic=list]': [8]
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
	fe as nodes,
	ce as root,
	_e as server_loads
};