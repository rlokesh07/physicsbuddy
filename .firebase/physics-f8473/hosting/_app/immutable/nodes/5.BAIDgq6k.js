import {
	s as R,
	e as b,
	t as L,
	a as S,
	H as U,
	b as q,
	l as $,
	m as N,
	k as p,
	d as k,
	A as j,
	f as g,
	i as y,
	p as v,
	q as V,
	n as E,
	B as G,
	C as O,
	g as Q,
	y as W,
	w as J
} from '../chunks/scheduler.CcEjp5hG.js';
import {
	S as z,
	i as A,
	c as K,
	b as X,
	m as Y,
	t as Z,
	a as x,
	d as ee
} from '../chunks/index.76i6c7WO.js';
import { e as T, q as F } from '../chunks/questions.CWLU9xGN.js';
import '../chunks/katex.Dfyhscvt.js';
import { r as w } from '../chunks/AnswerPage.svelte_svelte_type_style_lang.EHqJQi4U.js';
import { n as te } from '../chunks/history.2hQnOzG5.js';
function M(i, e, n) {
	const t = i.slice();
	return (t[4] = e[n]), (t[6] = n), t;
}
function B(i) {
	let e, n;
	return {
		c() {
			(e = b('img')), this.h();
		},
		l(t) {
			(e = q(t, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
		},
		h() {
			O(e.src, (n = i[0].image)) || g(e, 'src', n),
				g(e, 'alt', ' Image'),
				g(e, 'class', 'svelte-1yeoynr');
		},
		m(t, r) {
			y(t, e, r);
		},
		p(t, r) {
			r & 1 && !O(e.src, (n = t[0].image)) && g(e, 'src', n);
		},
		d(t) {
			t && p(e);
		}
	};
}
function H(i) {
	var m;
	let e,
		n,
		t,
		r = 'Submit',
		_,
		o,
		u = T((m = i[0]) == null ? void 0 : m.options),
		a = [];
	for (let c = 0; c < u.length; c += 1) a[c] = P(M(i, u, c));
	return {
		c() {
			e = b('form');
			for (let c = 0; c < a.length; c += 1) a[c].c();
			(n = S()), (t = b('button')), (t.textContent = r), this.h();
		},
		l(c) {
			e = q(c, 'FORM', {});
			var d = $(e);
			for (let l = 0; l < a.length; l += 1) a[l].l(d);
			(n = k(d)),
				(t = q(d, 'BUTTON', { type: !0, 'data-svelte-h': !0 })),
				Q(t) !== 'svelte-1ou7dtz' && (t.textContent = r),
				d.forEach(p),
				this.h();
		},
		h() {
			g(t, 'type', 'submit');
		},
		m(c, d) {
			y(c, e, d);
			for (let l = 0; l < a.length; l += 1) a[l] && a[l].m(e, null);
			v(e, n), v(e, t), _ || ((o = W(e, 'submit', i[1])), (_ = !0));
		},
		p(c, d) {
			var l;
			if (d & 1) {
				u = T((l = c[0]) == null ? void 0 : l.options);
				let s;
				for (s = 0; s < u.length; s += 1) {
					const f = M(c, u, s);
					a[s] ? a[s].p(f, d) : ((a[s] = P(f)), a[s].c(), a[s].m(e, n));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = u.length;
			}
		},
		d(c) {
			c && p(e), J(a, c), (_ = !1), o();
		}
	};
}
function P(i) {
	let e,
		n,
		t,
		r,
		_ = w(i[4]) + '',
		o,
		u;
	return {
		c() {
			(e = b('label')),
				(n = b('input')),
				(t = S()),
				(r = new U(!1)),
				(o = S()),
				(u = b('br')),
				this.h();
		},
		l(a) {
			e = q(a, 'LABEL', { class: !0 });
			var m = $(e);
			(n = q(m, 'INPUT', { type: !0, name: !0 })),
				(t = k(m)),
				(r = j(m, !1)),
				(o = k(m)),
				m.forEach(p),
				(u = q(a, 'BR', {})),
				this.h();
		},
		h() {
			g(n, 'type', 'radio'),
				g(n, 'name', 'option'),
				(n.value = i[6]),
				(n.required = !0),
				(r.a = o),
				g(e, 'class', 'radio');
		},
		m(a, m) {
			y(a, e, m), v(e, n), v(e, t), r.m(_, e), v(e, o), y(a, u, m);
		},
		p(a, m) {
			m & 1 && _ !== (_ = w(a[4]) + '') && r.p(_);
		},
		d(a) {
			a && (p(e), p(u));
		}
	};
}
function ne(i) {
	let e,
		n,
		t = i[0].topic + '',
		r,
		_,
		o,
		u,
		a = w(i[0].question) + '',
		m,
		c,
		d,
		l = i[0].image && B(i),
		s = i[0].options && H(i);
	return {
		c() {
			(e = b('div')),
				(n = b('h1')),
				(r = L(t)),
				(_ = S()),
				(o = b('p')),
				(u = new U(!1)),
				(m = S()),
				l && l.c(),
				(c = S()),
				(d = b('div')),
				s && s.c(),
				this.h();
		},
		l(f) {
			e = q(f, 'DIV', { class: !0 });
			var h = $(e);
			n = q(h, 'H1', { class: !0 });
			var I = $(n);
			(r = N(I, t)), I.forEach(p), (_ = k(h)), (o = q(h, 'P', { class: !0 }));
			var C = $(o);
			(u = j(C, !1)),
				C.forEach(p),
				(m = k(h)),
				l && l.l(h),
				h.forEach(p),
				(c = k(f)),
				(d = q(f, 'DIV', { class: !0 }));
			var D = $(d);
			s && s.l(D), D.forEach(p), this.h();
		},
		h() {
			g(n, 'class', 'svelte-1yeoynr'),
				(u.a = null),
				g(o, 'class', 'svelte-1yeoynr'),
				g(e, 'class', 'question svelte-1yeoynr'),
				g(d, 'class', 'answer');
		},
		m(f, h) {
			y(f, e, h),
				v(e, n),
				v(n, r),
				v(e, _),
				v(e, o),
				u.m(a, o),
				v(e, m),
				l && l.m(e, null),
				y(f, c, h),
				y(f, d, h),
				s && s.m(d, null);
		},
		p(f, [h]) {
			h & 1 && t !== (t = f[0].topic + '') && V(r, t),
				h & 1 && a !== (a = w(f[0].question) + '') && u.p(a),
				f[0].image
					? l
						? l.p(f, h)
						: ((l = B(f)), l.c(), l.m(e, null))
					: l && (l.d(1), (l = null)),
				f[0].options
					? s
						? s.p(f, h)
						: ((s = H(f)), s.c(), s.m(d, null))
					: s && (s.d(1), (s = null));
		},
		i: E,
		o: E,
		d(f) {
			f && (p(e), p(c), p(d)), l && l.d(), s && s.d();
		}
	};
}
function ae(i, e, n) {
	let { question: t } = e;
	const r = G();
	function _(o) {
		const u = o.target,
			m = new FormData(u).get('option');
		r('formSubmitted', { question: t, selectedOption: m });
	}
	return (
		(i.$$set = (o) => {
			'question' in o && n(0, (t = o.question));
		}),
		[t, _]
	);
}
class se extends z {
	constructor(e) {
		super(), A(this, e, ae, ne, R, { question: 0 });
	}
}
function ie({ params: i }) {
	return { id: i.id };
}
const _e = Object.freeze(
	Object.defineProperty({ __proto__: null, load: ie }, Symbol.toStringTag, { value: 'Module' })
);
function le(i) {
	let e, n;
	return (
		(e = new se({ props: { question: F[i[0]] } })),
		e.$on('formSubmitted', i[1]),
		{
			c() {
				K(e.$$.fragment);
			},
			l(t) {
				X(e.$$.fragment, t);
			},
			m(t, r) {
				Y(e, t, r), (n = !0);
			},
			p: E,
			i(t) {
				n || (Z(e.$$.fragment, t), (n = !0));
			},
			o(t) {
				x(e.$$.fragment, t), (n = !1);
			},
			d(t) {
				ee(e, t);
			}
		}
	);
}
function oe(i, e, n) {
	let { data: t } = e;
	var r = F.findIndex(function (o, u) {
		return o.id === t.id;
	});
	const _ = async (o) => {
		const { question: u, selectedOption: a } = o.detail;
		console.log(u.id + a), te(`/questions/${u.id}/${encodeURIComponent(a)}`);
	};
	return (
		(i.$$set = (o) => {
			'data' in o && n(2, (t = o.data));
		}),
		[r, _, t]
	);
}
class he extends z {
	constructor(e) {
		super(), A(this, e, oe, le, R, { data: 2 });
	}
}
export { he as component, _e as universal };
