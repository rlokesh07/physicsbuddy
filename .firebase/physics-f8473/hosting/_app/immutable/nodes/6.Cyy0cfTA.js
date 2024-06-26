import {
	s as H,
	e as _,
	H as C,
	a as M,
	v as w,
	b as m,
	l as g,
	A as S,
	k as u,
	d as T,
	f as p,
	i as d,
	n as b,
	w as P,
	p as k,
	g as E
} from '../chunks/scheduler.CcEjp5hG.js';
import {
	S as I,
	i as D,
	c as V,
	b as j,
	m as A,
	t as L,
	a as O,
	d as z
} from '../chunks/index.76i6c7WO.js';
import { q as f, e as y } from '../chunks/questions.CWLU9xGN.js';
import { r as x } from '../chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js';
function $(r, e, n) {
	const t = r.slice();
	return (t[1] = e[n]), (t[0] = n), t;
}
function q(r) {
	let e,
		n,
		t = x(r[1]) + '';
	return {
		c() {
			(e = _('h2')), (n = new C(!1)), this.h();
		},
		l(s) {
			e = m(s, 'H2', { class: !0 });
			var o = g(e);
			(n = S(o, !1)), o.forEach(u), this.h();
		},
		h() {
			(n.a = null), p(e, 'class', 'svelte-sdutof');
		},
		m(s, o) {
			d(s, e, o), n.m(t, e);
		},
		p(s, o) {
			o & 1 && t !== (t = x(s[1]) + '') && n.p(t);
		},
		d(s) {
			s && u(e);
		}
	};
}
function F(r) {
	let e,
		n,
		t = x(f[r[0]].options[f[r[0]].answer]) + '',
		s,
		o,
		h = y(f[r[0]].explanation),
		c = [];
	for (let a = 0; a < h.length; a += 1) c[a] = q($(r, h, a));
	return {
		c() {
			(e = _('h1')), (n = new C(!1)), (s = M());
			for (let a = 0; a < c.length; a += 1) c[a].c();
			(o = w()), this.h();
		},
		l(a) {
			e = m(a, 'H1', { class: !0 });
			var i = g(e);
			(n = S(i, !1)), i.forEach(u), (s = T(a));
			for (let l = 0; l < c.length; l += 1) c[l].l(a);
			(o = w()), this.h();
		},
		h() {
			(n.a = null), p(e, 'class', 'svelte-sdutof');
		},
		m(a, i) {
			d(a, e, i), n.m(t, e), d(a, s, i);
			for (let l = 0; l < c.length; l += 1) c[l] && c[l].m(a, i);
			d(a, o, i);
		},
		p(a, [i]) {
			if ((i & 1 && t !== (t = x(f[a[0]].options[f[a[0]].answer]) + '') && n.p(t), i & 1)) {
				h = y(f[a[0]].explanation);
				let l;
				for (l = 0; l < h.length; l += 1) {
					const v = $(a, h, l);
					c[l] ? c[l].p(v, i) : ((c[l] = q(v)), c[l].c(), c[l].m(o.parentNode, o));
				}
				for (; l < c.length; l += 1) c[l].d(1);
				c.length = h.length;
			}
		},
		i: b,
		o: b,
		d(a) {
			a && (u(e), u(s), u(o)), P(c, a);
		}
	};
}
function N(r, e, n) {
	let { index: t } = e;
	return (
		(r.$$set = (s) => {
			'index' in s && n(0, (t = s.index));
		}),
		[t]
	);
}
class W extends I {
	constructor(e) {
		super(), D(this, e, N, F, H, { index: 0 });
	}
}
function B({ params: r }) {
	const e = r.id,
		n = r.option;
	return { id: e, answer: n };
}
const Z = Object.freeze(
	Object.defineProperty({ __proto__: null, load: B }, Symbol.toStringTag, { value: 'Module' })
);
function G(r) {
	let e,
		n = 'False';
	return {
		c() {
			(e = _('h1')), (e.textContent = n), this.h();
		},
		l(t) {
			(e = m(t, 'H1', { class: !0, 'data-svelte-h': !0 })),
				E(e) !== 'svelte-idc75r' && (e.textContent = n),
				this.h();
		},
		h() {
			p(e, 'class', 'svelte-1q2s9x4');
		},
		m(t, s) {
			d(t, e, s);
		},
		d(t) {
			t && u(e);
		}
	};
}
function J(r) {
	let e,
		n = '<h1 class="svelte-1q2s9x4">Correct!</h1>';
	return {
		c() {
			(e = _('div')), (e.innerHTML = n), this.h();
		},
		l(t) {
			(e = m(t, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				E(e) !== 'svelte-1k7uxv6' && (e.innerHTML = n),
				this.h();
		},
		h() {
			p(e, 'class', 'correct svelte-1q2s9x4');
		},
		m(t, s) {
			d(t, e, s);
		},
		d(t) {
			t && u(e);
		}
	};
}
function K(r) {
	let e, n, t, s, o;
	function h(i, l) {
		return i[1] ? J : G;
	}
	let a = h(r)(r);
	return (
		(s = new W({ props: { index: r[0] } })),
		{
			c() {
				(e = _('div')), (n = _('div')), a.c(), (t = M()), V(s.$$.fragment), this.h();
			},
			l(i) {
				e = m(i, 'DIV', { class: !0 });
				var l = g(e);
				n = m(l, 'DIV', { class: !0 });
				var v = g(n);
				a.l(v), v.forEach(u), (t = T(l)), j(s.$$.fragment, l), l.forEach(u), this.h();
			},
			h() {
				p(n, 'class', 'answerbackground svelte-1q2s9x4'), p(e, 'class', 'body svelte-1q2s9x4');
			},
			m(i, l) {
				d(i, e, l), k(e, n), a.m(n, null), k(e, t), A(s, e, null), (o = !0);
			},
			p: b,
			i(i) {
				o || (L(s.$$.fragment, i), (o = !0));
			},
			o(i) {
				O(s.$$.fragment, i), (o = !1);
			},
			d(i) {
				i && u(e), a.d(), z(s);
			}
		}
	);
}
function Q(r, e, n) {
	let { data: t } = e;
	var s = f.findIndex(function (h, c) {
		return h.id === t.id;
	});
	let o = f[s].answer.toString() === t.answer;
	return (
		console.log(s),
		(r.$$set = (h) => {
			'data' in h && n(2, (t = h.data));
		}),
		[s, o, t]
	);
}
class ee extends I {
	constructor(e) {
		super(), D(this, e, Q, K, H, { data: 2 });
	}
}
export { ee as component, Z as universal };
