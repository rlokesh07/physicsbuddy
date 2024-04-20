import {
	s as fe,
	e as h,
	t as H,
	a as y,
	c as d,
	b as g,
	d as O,
	f as v,
	g as P,
	m as u,
	i as N,
	h as a,
	v as U,
	w as B,
	j as de,
	n as q,
	x,
	l as z
} from '../chunks/scheduler.C8hMGX5Y.js';
import {
	S as pe,
	i as he,
	c as _e,
	b as ve,
	m as me,
	t as be,
	a as we,
	d as ge
} from '../chunks/index.BW63jDgk.js';
import { e as ie } from '../chunks/store.1S1T_c8D.js';
function ce(r) {
	let e,
		t = 'The information you have entered is not correct';
	return {
		c() {
			(e = h('p')), (e.textContent = t), this.h();
		},
		l(l) {
			(e = d(l, 'P', { class: !0, 'data-svelte-h': !0 })),
				z(e) !== 'svelte-1gb6nx' && (e.textContent = t),
				this.h();
		},
		h() {
			u(e, 'class', 'error');
		},
		m(l, o) {
			N(l, e, o);
		},
		d(l) {
			l && v(e);
		}
	};
}
function ue(r) {
	let e, t, l, o, s, f, p, _;
	return {
		c() {
			(e = h('label')),
				(t = h('p')),
				(l = H('Confirm Password')),
				(s = y()),
				(f = h('input')),
				this.h();
		},
		l(n) {
			e = d(n, 'LABEL', {});
			var i = g(e);
			t = d(i, 'P', { class: !0 });
			var I = g(t);
			(l = O(I, 'Confirm Password')),
				I.forEach(v),
				(s = P(i)),
				(f = d(i, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				i.forEach(v),
				this.h();
		},
		h() {
			u(t, 'class', (o = r[2] ? ' above' : ' center')),
				u(f, 'type', 'password'),
				u(f, 'placeholder', 'Confirm Password'),
				u(f, 'class', 'svelte-185vwe9');
		},
		m(n, i) {
			N(n, e, i),
				a(e, t),
				a(t, l),
				a(e, s),
				a(e, f),
				U(f, r[2]),
				p || ((_ = B(f, 'input', r[10])), (p = !0));
		},
		p(n, i) {
			i & 4 && o !== (o = n[2] ? ' above' : ' center') && u(t, 'class', o),
				i & 4 && f.value !== n[2] && U(f, n[2]);
		},
		d(n) {
			n && v(e), (p = !1), _();
		}
	};
}
function ke(r) {
	let e;
	return {
		c() {
			e = H('Submit');
		},
		l(t) {
			e = O(t, 'Submit');
		},
		m(t, l) {
			N(t, e, l);
		},
		d(t) {
			t && v(e);
		}
	};
}
function Ce(r) {
	let e;
	return {
		c() {
			(e = h('i')), this.h();
		},
		l(t) {
			(e = d(t, 'I', { class: !0 })), g(e).forEach(v), this.h();
		},
		h() {
			u(e, 'class', 'fa-solid fa-spinner loadingSpinner');
		},
		m(t, l) {
			N(t, e, l);
		},
		d(t) {
			t && v(e);
		}
	};
}
function Ee(r) {
	let e,
		t,
		l = "Don't have an account?",
		o,
		s,
		f = 'Register',
		p,
		_;
	return {
		c() {
			(e = h('div')),
				(t = h('p')),
				(t.textContent = l),
				(o = y()),
				(s = h('p')),
				(s.textContent = f),
				this.h();
		},
		l(n) {
			e = d(n, 'DIV', { class: !0 });
			var i = g(e);
			(t = d(i, 'P', { 'data-svelte-h': !0 })),
				z(t) !== 'svelte-1n3pyjz' && (t.textContent = l),
				(o = P(i)),
				(s = d(i, 'P', { class: !0, 'data-svelte-h': !0 })),
				z(s) !== 'svelte-mf02fv' && (s.textContent = f),
				i.forEach(v),
				this.h();
		},
		h() {
			u(s, 'class', 'clicker  svelte-185vwe9'), u(e, 'class', 'registerLogin svelte-185vwe9');
		},
		m(n, i) {
			N(n, e, i),
				a(e, t),
				a(e, o),
				a(e, s),
				p || ((_ = [B(s, 'click', r[7]), B(s, 'keydown', Ie)]), (p = !0));
		},
		p: q,
		d(n) {
			n && v(e), (p = !1), x(_);
		}
	};
}
function ye(r) {
	let e,
		t,
		l = 'Already have an account?',
		o,
		s,
		f = 'Login',
		p,
		_;
	return {
		c() {
			(e = h('div')),
				(t = h('p')),
				(t.textContent = l),
				(o = y()),
				(s = h('p')),
				(s.textContent = f),
				this.h();
		},
		l(n) {
			e = d(n, 'DIV', {});
			var i = g(e);
			(t = d(i, 'P', { 'data-svelte-h': !0 })),
				z(t) !== 'svelte-9afngp' && (t.textContent = l),
				(o = P(i)),
				(s = d(i, 'P', { class: !0, 'data-svelte-h': !0 })),
				z(s) !== 'svelte-1bfevkj' && (s.textContent = f),
				i.forEach(v),
				this.h();
		},
		h() {
			u(s, 'class', 'clicker svelte-185vwe9');
		},
		m(n, i) {
			N(n, e, i),
				a(e, t),
				a(e, o),
				a(e, s),
				p || ((_ = [B(s, 'click', r[7]), B(s, 'keydown', Le)]), (p = !0));
		},
		p: q,
		d(n) {
			n && v(e), (p = !1), x(_);
		}
	};
}
function Pe(r) {
	let e,
		t,
		l,
		o = r[4] ? 'Register' : 'Login',
		s,
		f,
		p,
		_,
		n,
		i,
		I,
		V,
		k,
		j,
		D,
		R,
		W,
		F,
		X,
		L,
		Y,
		M,
		T,
		Z,
		S,
		$,
		ee,
		w = r[3] && ce(),
		m = r[4] && ue(r);
	function te(c, b) {
		return c[5] ? Ce : ke;
	}
	let G = te(r),
		A = G(r);
	function le(c, b) {
		return c[4] ? ye : Ee;
	}
	let J = le(r),
		E = J(r);
	return {
		c() {
			(e = h('div')),
				(t = h('form')),
				(l = h('h1')),
				(s = H(o)),
				(f = y()),
				w && w.c(),
				(p = y()),
				(_ = h('label')),
				(n = h('p')),
				(i = H('Email')),
				(V = y()),
				(k = h('input')),
				(j = y()),
				(D = h('label')),
				(R = h('p')),
				(W = H('Password')),
				(X = y()),
				(L = h('input')),
				(Y = y()),
				m && m.c(),
				(M = y()),
				(T = h('button')),
				A.c(),
				(Z = y()),
				(S = h('div')),
				E.c(),
				this.h();
		},
		l(c) {
			e = d(c, 'DIV', { class: !0 });
			var b = g(e);
			t = d(b, 'FORM', { class: !0 });
			var C = g(t);
			l = d(C, 'H1', {});
			var se = g(l);
			(s = O(se, o)), se.forEach(v), (f = P(C)), w && w.l(C), (p = P(C)), (_ = d(C, 'LABEL', {}));
			var K = g(_);
			n = d(K, 'P', { class: !0 });
			var ne = g(n);
			(i = O(ne, 'Email')),
				ne.forEach(v),
				(V = P(K)),
				(k = d(K, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				K.forEach(v),
				(j = P(C)),
				(D = d(C, 'LABEL', {}));
			var Q = g(D);
			R = d(Q, 'P', { class: !0 });
			var ae = g(R);
			(W = O(ae, 'Password')),
				ae.forEach(v),
				(X = P(Q)),
				(L = d(Q, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				Q.forEach(v),
				(Y = P(C)),
				m && m.l(C),
				(M = P(C)),
				(T = d(C, 'BUTTON', { type: !0, class: !0 }));
			var re = g(T);
			A.l(re), re.forEach(v), C.forEach(v), (Z = P(b)), (S = d(b, 'DIV', { class: !0 }));
			var oe = g(S);
			E.l(oe), oe.forEach(v), b.forEach(v), this.h();
		},
		h() {
			u(n, 'class', (I = r[0] ? ' above' : ' center')),
				u(k, 'type', 'email'),
				u(k, 'placeholder', 'Email'),
				u(k, 'class', 'svelte-185vwe9'),
				u(R, 'class', (F = r[1] ? ' above' : ' center')),
				u(L, 'type', 'password'),
				u(L, 'placeholder', 'Password'),
				u(L, 'class', 'svelte-185vwe9'),
				u(T, 'type', 'button'),
				u(T, 'class', 'submitBtn svelte-185vwe9'),
				u(t, 'class', 'svelte-185vwe9'),
				u(S, 'class', 'options'),
				u(e, 'class', 'authContainer svelte-185vwe9');
		},
		m(c, b) {
			N(c, e, b),
				a(e, t),
				a(t, l),
				a(l, s),
				a(t, f),
				w && w.m(t, null),
				a(t, p),
				a(t, _),
				a(_, n),
				a(n, i),
				a(_, V),
				a(_, k),
				U(k, r[0]),
				a(t, j),
				a(t, D),
				a(D, R),
				a(R, W),
				a(D, X),
				a(D, L),
				U(L, r[1]),
				a(t, Y),
				m && m.m(t, null),
				a(t, M),
				a(t, T),
				A.m(T, null),
				a(e, Z),
				a(e, S),
				E.m(S, null),
				$ || ((ee = [B(k, 'input', r[8]), B(L, 'input', r[9]), B(T, 'click', r[6])]), ($ = !0));
		},
		p(c, [b]) {
			b & 16 && o !== (o = c[4] ? 'Register' : 'Login') && de(s, o),
				c[3] ? w || ((w = ce()), w.c(), w.m(t, p)) : w && (w.d(1), (w = null)),
				b & 1 && I !== (I = c[0] ? ' above' : ' center') && u(n, 'class', I),
				b & 1 && k.value !== c[0] && U(k, c[0]),
				b & 2 && F !== (F = c[1] ? ' above' : ' center') && u(R, 'class', F),
				b & 2 && L.value !== c[1] && U(L, c[1]),
				c[4] ? (m ? m.p(c, b) : ((m = ue(c)), m.c(), m.m(t, M))) : m && (m.d(1), (m = null)),
				G !== (G = te(c)) && (A.d(1), (A = G(c)), A && (A.c(), A.m(T, null))),
				J === (J = le(c)) && E ? E.p(c, b) : (E.d(1), (E = J(c)), E && (E.c(), E.m(S, null)));
		},
		i: q,
		o: q,
		d(c) {
			c && v(e), w && w.d(), m && m.d(), A.d(), E.d(), ($ = !1), x(ee);
		}
	};
}
const Le = () => {},
	Ie = () => {};
function Te(r, e, t) {
	let l = '',
		o = '',
		s = '',
		f = !1,
		p = !1,
		_ = !1;
	async function n() {
		if (!_) {
			if (!l || !o || (p && !s)) {
				t(3, (f = !0));
				return;
			}
			t(5, (_ = !0));
			try {
				p
					? (await ie.signup(l, o), (window.location.href = '/'))
					: (await ie.login(l, o), (window.location.href = '/'));
			} catch (j) {
				console.log('There was an auth error', j), t(3, (f = !0)), t(5, (_ = !1));
			}
		}
	}
	function i() {
		t(4, (p = !p));
	}
	function I() {
		(l = this.value), t(0, l);
	}
	function V() {
		(o = this.value), t(1, o);
	}
	function k() {
		(s = this.value), t(2, s);
	}
	return [l, o, s, f, p, _, n, i, I, V, k];
}
class Ae extends pe {
	constructor(e) {
		super(), he(this, e, Te, Pe, fe, {});
	}
}
function Be(r) {
	let e, t;
	return (
		(e = new Ae({})),
		{
			c() {
				_e(e.$$.fragment);
			},
			l(l) {
				ve(e.$$.fragment, l);
			},
			m(l, o) {
				me(e, l, o), (t = !0);
			},
			p: q,
			i(l) {
				t || (be(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				we(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ge(e, l);
			}
		}
	);
}
class Ne extends pe {
	constructor(e) {
		super(), he(this, e, null, Be, fe, {});
	}
}
export { Ne as component };
