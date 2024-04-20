import {
	s as H,
	e as _,
	S as M,
	a as T,
	z as b,
	c as m,
	b as g,
	T as S,
	f as h,
	g as C,
	m as p,
	i as d,
	n as y,
	y as E,
	h as x,
	r as V,
	U as P,
	l as L
} from '../chunks/scheduler.C8hMGX5Y.js';
import {
	S as D,
	i as I,
	c as j,
	b as z,
	m as A,
	t as O,
	a as F,
	d as N
} from '../chunks/index.BW63jDgk.js';
import { e as w } from '../chunks/each.D6YF6ztN.js';
import { r as v } from '../chunks/KaTeX.DDaMeVYv.js';
import { q as $, u as Q } from '../chunks/store.1S1T_c8D.js';
function U({ params: o }) {
	const e = o.id,
		s = o.option;
	return { id: e, answer: s };
}
const ne = Object.freeze(
	Object.defineProperty({ __proto__: null, load: U }, Symbol.toStringTag, { value: 'Module' })
);
function k(o, e, s) {
	const n = o.slice();
	return (n[4] = e[s]), (n[0] = s), n;
}
function q(o) {
	let e,
		s,
		n = v(o[4]) + '';
	return {
		c() {
			(e = _('h2')), (s = new M(!1)), this.h();
		},
		l(a) {
			e = m(a, 'H2', { class: !0 });
			var r = g(e);
			(s = S(r, !1)), r.forEach(h), this.h();
		},
		h() {
			(s.a = null), p(e, 'class', 'svelte-m1ac0l');
		},
		m(a, r) {
			d(a, e, r), s.m(n, e);
		},
		p(a, r) {
			r & 3 && n !== (n = v(a[4]) + '') && s.p(n);
		},
		d(a) {
			a && h(e);
		}
	};
}
function W(o) {
	let e,
		s,
		n = v(o[1][o[0]].options[o[1][o[0]].answer]) + '',
		a,
		r,
		u = w(o[1][o[0]].explanation),
		c = [];
	for (let t = 0; t < u.length; t += 1) c[t] = q(k(o, u, t));
	return {
		c() {
			(e = _('h1')), (s = new M(!1)), (a = T());
			for (let t = 0; t < c.length; t += 1) c[t].c();
			(r = b()), this.h();
		},
		l(t) {
			e = m(t, 'H1', { class: !0 });
			var l = g(e);
			(s = S(l, !1)), l.forEach(h), (a = C(t));
			for (let i = 0; i < c.length; i += 1) c[i].l(t);
			(r = b()), this.h();
		},
		h() {
			(s.a = null), p(e, 'class', 'svelte-m1ac0l');
		},
		m(t, l) {
			d(t, e, l), s.m(n, e), d(t, a, l);
			for (let i = 0; i < c.length; i += 1) c[i] && c[i].m(t, l);
			d(t, r, l);
		},
		p(t, [l]) {
			if ((l & 3 && n !== (n = v(t[1][t[0]].options[t[1][t[0]].answer]) + '') && s.p(n), l & 3)) {
				u = w(t[1][t[0]].explanation);
				let i;
				for (i = 0; i < u.length; i += 1) {
					const f = k(t, u, i);
					c[i] ? c[i].p(f, l) : ((c[i] = q(f)), c[i].c(), c[i].m(r.parentNode, r));
				}
				for (; i < c.length; i += 1) c[i].d(1);
				c.length = u.length;
			}
		},
		i: y,
		o: y,
		d(t) {
			t && (h(e), h(a), h(r)), E(c, t);
		}
	};
}
function B(o, e, s) {
	let n = [];
	$.subscribe((r) => {
		s(1, (n = r.questions)), r.loading;
	});
	let { index: a } = e;
	return (
		(o.$$set = (r) => {
			'index' in r && s(0, (a = r.index));
		}),
		[a, n]
	);
}
class G extends D {
	constructor(e) {
		super(), I(this, e, B, W, H, { index: 0 });
	}
}
function J(o) {
	let e,
		s = '<h1 class="svelte-16icxxy">False</h1>';
	return {
		c() {
			(e = _('div')), (e.innerHTML = s), this.h();
		},
		l(n) {
			(e = m(n, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				L(e) !== 'svelte-ai9k7t' && (e.innerHTML = s),
				this.h();
		},
		h() {
			p(e, 'class', 'false svelte-16icxxy');
		},
		m(n, a) {
			d(n, e, a);
		},
		d(n) {
			n && h(e);
		}
	};
}
function K(o) {
	let e,
		s = '<h1 class="svelte-16icxxy">Correct!</h1>';
	return {
		c() {
			(e = _('div')), (e.innerHTML = s), this.h();
		},
		l(n) {
			(e = m(n, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				L(e) !== 'svelte-1k7uxv6' && (e.innerHTML = s),
				this.h();
		},
		h() {
			p(e, 'class', 'correct svelte-16icxxy');
		},
		m(n, a) {
			d(n, e, a);
		},
		d(n) {
			n && h(e);
		}
	};
}
function R(o) {
	let e, s, n, a, r;
	function u(l, i) {
		return l[0] ? K : J;
	}
	let c = u(o),
		t = c(o);
	return (
		(a = new G({ props: { index: o[1] } })),
		{
			c() {
				(e = _('div')), (s = _('div')), t.c(), (n = T()), j(a.$$.fragment), this.h();
			},
			l(l) {
				e = m(l, 'DIV', { class: !0 });
				var i = g(e);
				s = m(i, 'DIV', { class: !0 });
				var f = g(s);
				t.l(f), f.forEach(h), (n = C(i)), z(a.$$.fragment, i), i.forEach(h), this.h();
			},
			h() {
				p(s, 'class', 'answerbackground svelte-16icxxy'), p(e, 'class', 'body svelte-16icxxy');
			},
			m(l, i) {
				d(l, e, i), x(e, s), t.m(s, null), x(e, n), A(a, e, null), (r = !0);
			},
			p(l, [i]) {
				c !== (c = u(l)) && (t.d(1), (t = c(l)), t && (t.c(), t.m(s, null)));
				const f = {};
				i & 2 && (f.index = l[1]), a.$set(f);
			},
			i(l) {
				r || (O(a.$$.fragment, l), (r = !0));
			},
			o(l) {
				F(a.$$.fragment, l), (r = !1);
			},
			d(l) {
				l && h(e), t.d(), N(a);
			}
		}
	);
}
function X(o, e, s) {
	let { data: n } = e,
		a = [],
		r = !1,
		u;
	const c = $.subscribe((t) => {
		(a = t.questions),
			t.loading,
			s(1, (u = a.findIndex((l) => l.id === n.id))),
			console.log(u),
			u !== -1 && s(0, (r = a[u].answer.toString() === n.answer));
	});
	return (
		V(() => {
			const t = a[u].attempted + 1,
				l = r ? a[u].correct + 1 : a[u].correct;
			console.log(l), console.log(t), Q(a[u].id, t, l);
		}),
		P(() => {
			c();
		}),
		(o.$$set = (t) => {
			'data' in t && s(2, (n = t.data));
		}),
		[r, u, n]
	);
}
class ae extends D {
	constructor(e) {
		super(), I(this, e, X, R, H, { data: 2 });
	}
}
export { ae as component, ne as universal };
