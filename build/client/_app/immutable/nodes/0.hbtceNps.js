import {
	s as g,
	o as v,
	e as w,
	a as S,
	c as $,
	l as M,
	g as b,
	m as y,
	i as d,
	u as A,
	p as D,
	q as H,
	f as h,
	r as T
} from '../chunks/scheduler.C8hMGX5Y.js';
import { S as C, i as L, t as R, a as q } from '../chunks/index.BW63jDgk.js';
import { a as k, d as m, b as _, g as N, s as P, c as V } from '../chunks/store.1S1T_c8D.js';
function j(n) {
	let a,
		c =
			'<a href="/" class="svelte-rcwho1">Study Sign</a> <div class="modes svelte-rcwho1"><a href="/HarmonicMotion" class="svelte-rcwho1">Harmonic Motion</a></div> <a href="/account" class="svelte-rcwho1">Account</a>',
		i,
		s;
	const l = n[1].default,
		e = v(l, n, n[0], null);
	return {
		c() {
			(a = w('nav')), (a.innerHTML = c), (i = S()), e && e.c(), this.h();
		},
		l(t) {
			(a = $(t, 'NAV', { class: !0, 'data-svelte-h': !0 })),
				M(a) !== 'svelte-hkhftu' && (a.innerHTML = c),
				(i = b(t)),
				e && e.l(t),
				this.h();
		},
		h() {
			y(a, 'class', 'svelte-rcwho1');
		},
		m(t, o) {
			d(t, a, o), d(t, i, o), e && e.m(t, o), (s = !0);
		},
		p(t, [o]) {
			e && e.p && (!s || o & 1) && A(e, l, t, t[0], s ? H(l, t[0], o, null) : D(t[0]), null);
		},
		i(t) {
			s || (R(e, t), (s = !0));
		},
		o(t) {
			q(e, t), (s = !1);
		},
		d(t) {
			t && (h(a), h(i)), e && e.d(t);
		}
	};
}
function z(n, a, c) {
	let { $$slots: i = {}, $$scope: s } = a;
	const l = ['/login'];
	return (
		T(() => {
			console.log('Mounting');
			const e = k.onAuthStateChanged(async (t) => {
				const o = window.location.pathname;
				if (!t && !l.includes(o)) {
					window.location.href = '/login';
					return;
				}
				if (t && o == '/login') {
					window.location.href = '/';
					return;
				}
				if (t) {
					let r;
					const p = m(_, 'users', t.uid),
						f = await N(p);
					if (f.exists()) r = f.data();
					else {
						const u = m(_, 'users', t.uid);
						(r = { email: t.email }), await P(u, r, { merge: !0 });
					}
					V.update((u) => ({ ...u, user: t, data: r, loading: !1 }));
				}
				return e();
			});
		}),
		(n.$$set = (e) => {
			'$$scope' in e && c(0, (s = e.$$scope));
		}),
		[s, i]
	);
}
class G extends C {
	constructor(a) {
		super(), L(this, a, z, j, g, {});
	}
}
export { G as component };
