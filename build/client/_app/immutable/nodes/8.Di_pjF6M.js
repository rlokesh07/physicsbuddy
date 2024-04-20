import { t as W } from '../chunks/topics.C65Q6Rrx.js';
import {
	s as X,
	e as g,
	t as q,
	a as P,
	c as w,
	b as E,
	d as y,
	f as _,
	g as j,
	m as c,
	i as M,
	h as i,
	j as z,
	n as B,
	y as Y,
	r as Z,
	z as H
} from '../chunks/scheduler.C8hMGX5Y.js';
import { e as J } from '../chunks/each.D6YF6ztN.js';
import { S as x, i as ee } from '../chunks/index.BW63jDgk.js';
import { q as te, f as ae } from '../chunks/store.1S1T_c8D.js';
function se({ params: o }) {
	return { topic: W[o.topic].topic };
}
const he = Object.freeze(
	Object.defineProperty({ __proto__: null, load: se }, Symbol.toStringTag, { value: 'Module' })
);
function K(o, t, e) {
	const l = o.slice();
	return (l[5] = t[e]), l;
}
function R(o) {
	let t,
		e,
		l,
		n = o[5].id + '',
		b,
		u,
		A,
		v,
		p,
		I = o[5].difficulty + '',
		$,
		V,
		d,
		m,
		D = (o[5].correct / o[5].attempted) * 100 + '',
		S,
		k,
		C;
	return {
		c() {
			(t = g('div')),
				(e = g('a')),
				(l = q('ID: ')),
				(b = q(n)),
				(A = P()),
				(v = g('p')),
				(p = q('Difficulty: ')),
				($ = q(I)),
				(V = P()),
				(d = g('p')),
				(m = q('Accuracy: ')),
				(S = q(D)),
				(k = q('%')),
				(C = P()),
				this.h();
		},
		l(f) {
			t = w(f, 'DIV', { class: !0 });
			var a = E(t);
			e = w(a, 'A', { href: !0, class: !0 });
			var r = E(e);
			(l = y(r, 'ID: ')), (b = y(r, n)), r.forEach(_), (A = j(a)), (v = w(a, 'P', { class: !0 }));
			var h = E(v);
			(p = y(h, 'Difficulty: ')),
				($ = y(h, I)),
				h.forEach(_),
				(V = j(a)),
				(d = w(a, 'P', { class: !0 }));
			var s = E(d);
			(m = y(s, 'Accuracy: ')),
				(S = y(s, D)),
				(k = y(s, '%')),
				s.forEach(_),
				(C = j(a)),
				a.forEach(_),
				this.h();
		},
		h() {
			c(e, 'href', (u = `/questions/${o[5].id}`)),
				c(e, 'class', 'svelte-1nw5ahe'),
				c(v, 'class', 'svelte-1nw5ahe'),
				c(d, 'class', 'svelte-1nw5ahe'),
				c(t, 'class', 'question svelte-1nw5ahe');
		},
		m(f, a) {
			M(f, t, a),
				i(t, e),
				i(e, l),
				i(e, b),
				i(t, A),
				i(t, v),
				i(v, p),
				i(v, $),
				i(t, V),
				i(t, d),
				i(d, m),
				i(d, S),
				i(d, k),
				i(t, C);
		},
		p(f, a) {
			a & 2 && n !== (n = f[5].id + '') && z(b, n),
				a & 2 && u !== (u = `/questions/${f[5].id}`) && c(e, 'href', u),
				a & 2 && I !== (I = f[5].difficulty + '') && z($, I),
				a & 2 && D !== (D = (f[5].correct / f[5].attempted) * 100 + '') && z(S, D);
		},
		d(f) {
			f && _(t);
		}
	};
}
function U(o) {
	let t,
		e = o[5].topic === o[0].topic && R(o);
	return {
		c() {
			e && e.c(), (t = H());
		},
		l(l) {
			e && e.l(l), (t = H());
		},
		m(l, n) {
			e && e.m(l, n), M(l, t, n);
		},
		p(l, n) {
			l[5].topic === l[0].topic
				? e
					? e.p(l, n)
					: ((e = R(l)), e.c(), e.m(t.parentNode, t))
				: e && (e.d(1), (e = null));
		},
		d(l) {
			l && _(t), e && e.d(l);
		}
	};
}
function le(o) {
	let t,
		e,
		l,
		n,
		b,
		u,
		A,
		v,
		p,
		I,
		$,
		V,
		d,
		m,
		D = o[0].topic + '',
		S,
		k,
		C,
		f = J(o[1]),
		a = [];
	for (let r = 0; r < f.length; r += 1) a[r] = U(K(o, f, r));
	return {
		c() {
			(t = g('div')),
				(e = g('div')),
				(l = g('div')),
				(n = g('a')),
				(b = q('Study Guide')),
				(A = P()),
				(v = g('div')),
				(p = g('a')),
				(I = q('Flash Cards')),
				(V = P()),
				(d = g('div')),
				(m = g('a')),
				(S = q(D)),
				(C = P());
			for (let r = 0; r < a.length; r += 1) a[r].c();
			this.h();
		},
		l(r) {
			t = w(r, 'DIV', { class: !0 });
			var h = E(t);
			e = w(h, 'DIV', { class: !0 });
			var s = E(e);
			l = w(s, 'DIV', { class: !0 });
			var G = E(l);
			n = w(G, 'A', { href: !0, class: !0 });
			var O = E(n);
			(b = y(O, 'Study Guide')),
				O.forEach(_),
				G.forEach(_),
				(A = j(s)),
				(v = w(s, 'DIV', { class: !0 }));
			var L = E(v);
			p = w(L, 'A', { href: !0, class: !0 });
			var N = E(p);
			(I = y(N, 'Flash Cards')),
				N.forEach(_),
				L.forEach(_),
				(V = j(s)),
				(d = w(s, 'DIV', { class: !0 }));
			var Q = E(d);
			m = w(Q, 'A', { href: !0, class: !0 });
			var T = E(m);
			(S = y(T, D)), T.forEach(_), Q.forEach(_), s.forEach(_), (C = j(h));
			for (let F = 0; F < a.length; F += 1) a[F].l(h);
			h.forEach(_), this.h();
		},
		h() {
			c(n, 'href', (u = `/modules/${o[0].topic}`)),
				c(n, 'class', 'svelte-1nw5ahe'),
				c(l, 'class', 'one svelte-1nw5ahe'),
				c(p, 'href', ($ = `/modules/${o[0].topic}`)),
				c(p, 'class', 'svelte-1nw5ahe'),
				c(v, 'class', 'two svelte-1nw5ahe'),
				c(m, 'href', (k = `/modules/${o[0].topic}`)),
				c(m, 'class', 'svelte-1nw5ahe'),
				c(d, 'class', 'three svelte-1nw5ahe'),
				c(e, 'class', 'topGrid svelte-1nw5ahe'),
				c(t, 'class', 'questionContainer svelte-1nw5ahe');
		},
		m(r, h) {
			M(r, t, h),
				i(t, e),
				i(e, l),
				i(l, n),
				i(n, b),
				i(e, A),
				i(e, v),
				i(v, p),
				i(p, I),
				i(e, V),
				i(e, d),
				i(d, m),
				i(m, S),
				i(t, C);
			for (let s = 0; s < a.length; s += 1) a[s] && a[s].m(t, null);
		},
		p(r, [h]) {
			if (
				(h & 1 && u !== (u = `/modules/${r[0].topic}`) && c(n, 'href', u),
				h & 1 && $ !== ($ = `/modules/${r[0].topic}`) && c(p, 'href', $),
				h & 1 && D !== (D = r[0].topic + '') && z(S, D),
				h & 1 && k !== (k = `/modules/${r[0].topic}`) && c(m, 'href', k),
				h & 3)
			) {
				f = J(r[1]);
				let s;
				for (s = 0; s < f.length; s += 1) {
					const G = K(r, f, s);
					a[s] ? a[s].p(G, h) : ((a[s] = U(G)), a[s].c(), a[s].m(t, null));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = f.length;
			}
		},
		i: B,
		o: B,
		d(r) {
			r && _(t), Y(a, r);
		}
	};
}
function re(o, t, e) {
	let n = [];
	te.subscribe((u) => {
		e(1, (n = u.questions)), u.loading;
	}),
		Z(async () => {
			await ae();
		});
	let { data: b } = t;
	return (
		(o.$$set = (u) => {
			'data' in u && e(0, (b = u.data));
		}),
		[b, n, !1]
	);
}
class ue extends x {
	constructor(t) {
		super(), ee(this, t, re, le, X, { prerender: 2, data: 0 });
	}
	get prerender() {
		return this.$$.ctx[2];
	}
}
export { ue as component, he as universal };
