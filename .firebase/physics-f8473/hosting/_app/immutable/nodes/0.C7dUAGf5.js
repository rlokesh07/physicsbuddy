import {
	s as g,
	c as v,
	e as b,
	a as w,
	b as $,
	g as S,
	d as k,
	f as q,
	i as d,
	u as M,
	h as y,
	j as A,
	k as m,
	o as D
} from '../chunks/scheduler.CcEjp5hG.js';
import { S as H, i as T, t as C, a as L } from '../chunks/index.76i6c7WO.js';
import { a as R, d as _, b as h, g as P, s as j, c as z } from '../chunks/store.CCDulWC7.js';
function B(n) {
	let a,
		c =
			'<a href="/" class="svelte-1bk11q5">Physics Buddy</a> <div class="modes svelte-1bk11q5"><a href="/HarmonicMotion" class="svelte-1bk11q5">Harmonic Motion</a></div> <a href="/account" class="svelte-1bk11q5">Account</a>',
		i,
		s;
	const l = n[1].default,
		e = v(l, n, n[0], null);
	return {
		c() {
			(a = b('nav')), (a.innerHTML = c), (i = w()), e && e.c(), this.h();
		},
		l(t) {
			(a = $(t, 'NAV', { class: !0, 'data-svelte-h': !0 })),
				S(a) !== 'svelte-1w2moz5' && (a.innerHTML = c),
				(i = k(t)),
				e && e.l(t),
				this.h();
		},
		h() {
			q(a, 'class', 'svelte-1bk11q5');
		},
		m(t, o) {
			d(t, a, o), d(t, i, o), e && e.m(t, o), (s = !0);
		},
		p(t, [o]) {
			e && e.p && (!s || o & 1) && M(e, l, t, t[0], s ? A(l, t[0], o, null) : y(t[0]), null);
		},
		i(t) {
			s || (C(e, t), (s = !0));
		},
		o(t) {
			L(e, t), (s = !1);
		},
		d(t) {
			t && (m(a), m(i)), e && e.d(t);
		}
	};
}
function N(n, a, c) {
	let { $$slots: i = {}, $$scope: s } = a;
	const l = ['/login'];
	return (
		D(() => {
			console.log('Mounting');
			const e = R.onAuthStateChanged(async (t) => {
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
					const p = _(h, 'users', t.uid),
						f = await P(p);
					if (f.exists()) r = f.data();
					else {
						const u = _(h, 'users', t.uid);
						(r = { email: t.email }), await j(u, r, { merge: !0 });
					}
					z.update((u) => ({ ...u, user: t, data: r, loading: !1 }));
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
class G extends H {
	constructor(a) {
		super(), T(this, a, N, B, g, {});
	}
}
export { G as component };
