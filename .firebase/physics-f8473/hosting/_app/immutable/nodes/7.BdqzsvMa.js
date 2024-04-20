import { t as w } from '../chunks/topics.VANNo9jr.js';
import {
	s as z,
	e as m,
	t as A,
	a as N,
	v as u,
	b as v,
	l as b,
	m as O,
	k as h,
	d as P,
	f as g,
	i as p,
	p as d,
	q as C,
	n as q,
	w as D
} from '../chunks/scheduler.CcEjp5hG.js';
import { e as y, q as $ } from '../chunks/questions.CWLU9xGN.js';
import { S as I, i as M } from '../chunks/index.76i6c7WO.js';
function T({ params: r }) {
	return { topic: w[r.topic].topic };
}
const K = Object.freeze(
	Object.defineProperty({ __proto__: null, load: T }, Symbol.toStringTag, { value: 'Module' })
);
function S(r, t, e) {
	const i = r.slice();
	return (i[2] = t[e]), i;
}
function E(r) {
	let t,
		e,
		i = r[2].id + '',
		n,
		_;
	return {
		c() {
			(t = m('div')), (e = m('a')), (n = A(i)), (_ = N()), this.h();
		},
		l(s) {
			t = v(s, 'DIV', {});
			var c = b(t);
			e = v(c, 'A', { href: !0 });
			var o = b(e);
			(n = O(o, i)), o.forEach(h), (_ = P(c)), c.forEach(h), this.h();
		},
		h() {
			g(e, 'href', `/questions/${r[2].id}`);
		},
		m(s, c) {
			p(s, t, c), d(t, e), d(e, n), d(t, _);
		},
		d(s) {
			s && h(t);
		}
	};
}
function j(r) {
	let t,
		e = r[2].topic === r[0].topic && E(r);
	return {
		c() {
			e && e.c(), (t = u());
		},
		l(i) {
			e && e.l(i), (t = u());
		},
		m(i, n) {
			e && e.m(i, n), p(i, t, n);
		},
		p(i, n) {
			i[2].topic === i[0].topic
				? e || ((e = E(i)), e.c(), e.m(t.parentNode, t))
				: e && (e.d(1), (e = null));
		},
		d(i) {
			i && h(t), e && e.d(i);
		}
	};
}
function V(r) {
	let t,
		e = r[0].topic + '',
		i,
		n,
		_,
		s,
		c = y($),
		o = [];
	for (let a = 0; a < c.length; a += 1) o[a] = j(S(r, c, a));
	return {
		c() {
			(t = m('a')), (i = A(e)), (_ = N());
			for (let a = 0; a < o.length; a += 1) o[a].c();
			(s = u()), this.h();
		},
		l(a) {
			t = v(a, 'A', { href: !0 });
			var f = b(t);
			(i = O(f, e)), f.forEach(h), (_ = P(a));
			for (let l = 0; l < o.length; l += 1) o[l].l(a);
			(s = u()), this.h();
		},
		h() {
			g(t, 'href', (n = `/modules/${r[0].topic}`));
		},
		m(a, f) {
			p(a, t, f), d(t, i), p(a, _, f);
			for (let l = 0; l < o.length; l += 1) o[l] && o[l].m(a, f);
			p(a, s, f);
		},
		p(a, [f]) {
			if (
				(f & 1 && e !== (e = a[0].topic + '') && C(i, e),
				f & 1 && n !== (n = `/modules/${a[0].topic}`) && g(t, 'href', n),
				f & 1)
			) {
				c = y($);
				let l;
				for (l = 0; l < c.length; l += 1) {
					const k = S(a, c, l);
					o[l] ? o[l].p(k, f) : ((o[l] = j(k)), o[l].c(), o[l].m(s.parentNode, s));
				}
				for (; l < o.length; l += 1) o[l].d(1);
				o.length = c.length;
			}
		},
		i: q,
		o: q,
		d(a) {
			a && (h(t), h(_), h(s)), D(o, a);
		}
	};
}
function B(r, t, e) {
	let { data: n } = t;
	return (
		(r.$$set = (_) => {
			'data' in _ && e(0, (n = _.data));
		}),
		[n, !1]
	);
}
class L extends I {
	constructor(t) {
		super(), M(this, t, B, V, z, { prerender: 1, data: 0 });
	}
	get prerender() {
		return this.$$.ctx[1];
	}
}
export { L as component, K as universal };
