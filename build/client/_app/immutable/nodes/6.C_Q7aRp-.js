import {
	s as B,
	e as b,
	t as z,
	a as w,
	S as R,
	c as q,
	b as j,
	d as G,
	f as v,
	g as E,
	T as A,
	m as h,
	i as $,
	h as _,
	j as Q,
	n as T,
	r as J,
	V as K,
	W as X,
	l as F,
	w as Y,
	y as Z
} from '../chunks/scheduler.C8hMGX5Y.js';
import {
	S as N,
	i as W,
	c as ee,
	b as te,
	m as ne,
	t as se,
	a as ae,
	d as ie
} from '../chunks/index.BW63jDgk.js';
import { e as O } from '../chunks/each.D6YF6ztN.js';
import { r as L } from '../chunks/KaTeX.DDaMeVYv.js';
import { q as oe } from '../chunks/store.1S1T_c8D.js';
function le({ params: i }) {
	return { id: i.id };
}
const Se = Object.freeze(
	Object.defineProperty({ __proto__: null, load: le }, Symbol.toStringTag, { value: 'Module' })
);
function P(i, e, n) {
	const t = i.slice();
	return (t[3] = e[n]), (t[5] = n), t;
}
function V(i) {
	let e, n;
	return {
		c() {
			(e = b('img')), this.h();
		},
		l(t) {
			(e = q(t, 'IMG', { class: !0, src: !0, alt: !0 })), this.h();
		},
		h() {
			h(e, 'class', 'questionImage svelte-jfdexj'),
				X(e.src, (n = '/src/lib/images/HM0003.png')) || h(e, 'src', n),
				h(e, 'alt', ' Image');
		},
		m(t, s) {
			$(t, e, s);
		},
		d(t) {
			t && v(e);
		}
	};
}
function C(i) {
	var m;
	let e,
		n,
		t,
		s = '<button type="submit" class="submit-button svelte-jfdexj">Submit</button>',
		c,
		a,
		l = O((m = i[0]) == null ? void 0 : m.options),
		o = [];
	for (let r = 0; r < l.length; r += 1) o[r] = U(P(i, l, r));
	return {
		c() {
			e = b('form');
			for (let r = 0; r < o.length; r += 1) o[r].c();
			(n = w()), (t = b('div')), (t.innerHTML = s), this.h();
		},
		l(r) {
			e = q(r, 'FORM', {});
			var u = j(e);
			for (let g = 0; g < o.length; g += 1) o[g].l(u);
			(n = E(u)),
				(t = q(u, 'DIV', { class: !0, 'data-svelte-h': !0 })),
				F(t) !== 'svelte-kk7jo9' && (t.innerHTML = s),
				u.forEach(v),
				this.h();
		},
		h() {
			h(t, 'class', 'submit-button-container svelte-jfdexj');
		},
		m(r, u) {
			$(r, e, u);
			for (let g = 0; g < o.length; g += 1) o[g] && o[g].m(e, null);
			_(e, n), _(e, t), c || ((a = Y(e, 'submit', i[1])), (c = !0));
		},
		p(r, u) {
			var g;
			if (u & 1) {
				l = O((g = r[0]) == null ? void 0 : g.options);
				let f;
				for (f = 0; f < l.length; f += 1) {
					const d = P(r, l, f);
					o[f] ? o[f].p(d, u) : ((o[f] = U(d)), o[f].c(), o[f].m(e, n));
				}
				for (; f < o.length; f += 1) o[f].d(1);
				o.length = l.length;
			}
		},
		d(r) {
			r && v(e), Z(o, r), (c = !1), a();
		}
	};
}
function U(i) {
	let e,
		n,
		t,
		s,
		c,
		a,
		l = L(i[3]) + '',
		o,
		m;
	return {
		c() {
			(e = b('label')),
				(n = b('input')),
				(t = w()),
				(s = b('span')),
				(c = w()),
				(a = new R(!1)),
				(o = w()),
				(m = b('br')),
				this.h();
		},
		l(r) {
			e = q(r, 'LABEL', { class: !0, for: !0 });
			var u = j(e);
			(n = q(u, 'INPUT', { type: !0, id: !0, name: !0 })),
				(t = E(u)),
				(s = q(u, 'SPAN', { class: !0 })),
				j(s).forEach(v),
				(c = E(u)),
				(a = A(u, !1)),
				(o = E(u)),
				u.forEach(v),
				(m = q(r, 'BR', {})),
				this.h();
		},
		h() {
			h(n, 'type', 'radio'),
				h(n, 'id', `option${i[5]}`),
				h(n, 'name', 'option'),
				(n.value = i[5]),
				(n.required = !0),
				h(s, 'class', 'radio-custom'),
				(a.a = o),
				h(e, 'class', 'radio'),
				h(e, 'for', `option${i[5]}`);
		},
		m(r, u) {
			$(r, e, u), _(e, n), _(e, t), _(e, s), _(e, c), a.m(l, e), _(e, o), $(r, m, u);
		},
		p(r, u) {
			u & 1 && l !== (l = L(r[3]) + '') && a.p(l);
		},
		d(r) {
			r && (v(e), v(m));
		}
	};
}
function re(i) {
	let e,
		n,
		t,
		s,
		c = i[0].topic + '',
		a,
		l,
		o,
		m,
		r = L(i[0].question) + '',
		u,
		g,
		f,
		d = i[0].image && V(),
		p = i[0].options && C(i);
	return {
		c() {
			(e = b('div')),
				(n = b('div')),
				(t = b('div')),
				(s = b('h1')),
				(a = z(c)),
				(l = w()),
				(o = b('p')),
				(m = new R(!1)),
				(u = w()),
				d && d.c(),
				(g = w()),
				(f = b('div')),
				p && p.c(),
				this.h();
		},
		l(y) {
			e = q(y, 'DIV', { class: !0 });
			var S = j(e);
			n = q(S, 'DIV', { class: !0 });
			var I = j(n);
			t = q(I, 'DIV', { class: !0 });
			var k = j(t);
			s = q(k, 'H1', { class: !0 });
			var D = j(s);
			(a = G(D, c)), D.forEach(v), (l = E(k)), (o = q(k, 'P', { class: !0 }));
			var H = j(o);
			(m = A(H, !1)),
				H.forEach(v),
				(u = E(k)),
				d && d.l(k),
				k.forEach(v),
				(g = E(I)),
				(f = q(I, 'DIV', { class: !0 }));
			var x = j(f);
			p && p.l(x), x.forEach(v), I.forEach(v), S.forEach(v), this.h();
		},
		h() {
			h(s, 'class', 'svelte-jfdexj'),
				(m.a = null),
				h(o, 'class', 'svelte-jfdexj'),
				h(t, 'class', 'question svelte-jfdexj'),
				h(f, 'class', 'answer svelte-jfdexj'),
				h(n, 'class', 'questionBox svelte-jfdexj'),
				h(e, 'class', 'fullContainer svelte-jfdexj');
		},
		m(y, S) {
			$(y, e, S),
				_(e, n),
				_(n, t),
				_(t, s),
				_(s, a),
				_(t, l),
				_(t, o),
				m.m(r, o),
				_(t, u),
				d && d.m(t, null),
				_(n, g),
				_(n, f),
				p && p.m(f, null);
		},
		p(y, [S]) {
			S & 1 && c !== (c = y[0].topic + '') && Q(a, c),
				S & 1 && r !== (r = L(y[0].question) + '') && m.p(r),
				y[0].image ? d || ((d = V()), d.c(), d.m(t, null)) : d && (d.d(1), (d = null)),
				y[0].options
					? p
						? p.p(y, S)
						: ((p = C(y)), p.c(), p.m(f, null))
					: p && (p.d(1), (p = null));
		},
		i: T,
		o: T,
		d(y) {
			y && v(e), d && d.d(), p && p.d();
		}
	};
}
function ce(i, e, n) {
	let { question: t } = e;
	J(() => {
		const a = document.querySelector('.questionImage');
		t.image && (a.src = `${t.image}`);
	});
	const s = K();
	function c(a) {
		const l = a.target,
			m = new FormData(l).get('option');
		s('formSubmitted', { question: t, selectedOption: m });
	}
	return (
		(i.$$set = (a) => {
			'question' in a && n(0, (t = a.question));
		}),
		[t, c]
	);
}
class ue extends N {
	constructor(e) {
		super(), W(this, e, ce, re, B, { question: 0 });
	}
}
const fe = () => typeof window < 'u' && 'document' in window && 'location' in window,
	M = (i) => ({
		...i.location,
		state: i.history.state,
		key: (i.history.state && i.history.state.key) || 'initial'
	}),
	de = (i) => {
		const e = [];
		let n = M(i);
		return {
			get location() {
				return n;
			},
			listen(t) {
				e.push(t);
				const s = () => {
					(n = M(i)), t({ location: n, action: 'POP' });
				};
				return (
					i.addEventListener('popstate', s),
					() => {
						i.removeEventListener('popstate', s);
						const c = e.indexOf(t);
						e.splice(c, 1);
					}
				);
			},
			navigate(
				t,
				{ state: s, replace: c = !1, preserveScroll: a = !1, blurActiveElement: l = !0 } = {}
			) {
				s = { ...s, key: Date.now() + '' };
				try {
					c ? i.history.replaceState(s, '', t) : i.history.pushState(s, '', t);
				} catch {
					i.location[c ? 'replace' : 'assign'](t);
				}
				(n = M(i)),
					e.forEach((o) => o({ location: n, action: 'PUSH', preserveScroll: a })),
					l && document.activeElement.blur();
			}
		};
	},
	me = (i = '/') => {
		let e = 0;
		const n = [{ pathname: i, search: '' }],
			t = [];
		return {
			get location() {
				return n[e];
			},
			addEventListener(s, c) {},
			removeEventListener(s, c) {},
			history: {
				get entries() {
					return n;
				},
				get index() {
					return e;
				},
				get state() {
					return t[e];
				},
				pushState(s, c, a) {
					const [l, o = ''] = a.split('?');
					e++, n.push({ pathname: l, search: o }), t.push(s);
				},
				replaceState(s, c, a) {
					const [l, o = ''] = a.split('?');
					(n[e] = { pathname: l, search: o }), (t[e] = s);
				}
			}
		};
	},
	he = de(fe() ? window : me()),
	{ navigate: pe } = he;
function _e(i) {
	let e,
		n = '',
		t,
		s,
		c;
	return (
		(s = new ue({ props: { question: i[0][i[1]] } })),
		s.$on('formSubmitted', i[2]),
		{
			c() {
				(e = b('div')), (e.innerHTML = n), (t = w()), ee(s.$$.fragment), this.h();
			},
			l(a) {
				(e = q(a, 'DIV', { class: !0, 'data-svelte-h': !0 })),
					F(e) !== 'svelte-12du6ng' && (e.innerHTML = n),
					(t = E(a)),
					te(s.$$.fragment, a),
					this.h();
			},
			h() {
				h(e, 'class', 'svelte-6fw5dc');
			},
			m(a, l) {
				$(a, e, l), $(a, t, l), ne(s, a, l), (c = !0);
			},
			p(a, [l]) {
				const o = {};
				l & 1 && (o.question = a[0][a[1]]), s.$set(o);
			},
			i(a) {
				c || (se(s.$$.fragment, a), (c = !0));
			},
			o(a) {
				ae(s.$$.fragment, a), (c = !1);
			},
			d(a) {
				a && (v(e), v(t)), ie(s, a);
			}
		}
	);
}
function ve(i, e, n) {
	let t = [];
	oe.subscribe((l) => {
		n(0, (t = l.questions)), l.loading;
	});
	let { data: s } = e;
	var c = t.findIndex(function (l, o) {
		return l.id === s.id;
	});
	const a = async (l) => {
		const { question: o, selectedOption: m } = l.detail;
		pe(`/questions/${o.id}/${encodeURIComponent(m)}`);
	};
	return (
		(i.$$set = (l) => {
			'data' in l && n(3, (s = l.data));
		}),
		[t, c, a, s]
	);
}
class we extends N {
	constructor(e) {
		super(), W(this, e, ve, _e, B, { data: 3 });
	}
}
export { we as component, Se as universal };