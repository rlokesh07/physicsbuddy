import {
	s as he,
	e as f,
	t as H,
	a as y,
	b as p,
	l as g,
	m as z,
	k as m,
	d as E,
	g as q,
	f as h,
	i as N,
	p as n,
	x as V,
	y as D,
	q as ve,
	n as F,
	z as le
} from '../chunks/scheduler.CcEjp5hG.js';
import {
	S as _e,
	i as me,
	c as be,
	b as we,
	m as ge,
	t as Ce,
	a as ke,
	d as ye
} from '../chunks/index.76i6c7WO.js';
import { e as fe } from '../chunks/store.CCDulWC7.js';
function pe(r) {
	let e,
		t = 'The information you have entered is not correct';
	return {
		c() {
			(e = f('p')), (e.textContent = t), this.h();
		},
		l(l) {
			(e = p(l, 'P', { class: !0, 'data-svelte-h': !0 })),
				q(e) !== 'svelte-1gb6nx' && (e.textContent = t),
				this.h();
		},
		h() {
			h(e, 'class', 'error');
		},
		m(l, o) {
			N(l, e, o);
		},
		d(l) {
			l && m(e);
		}
	};
}
function de(r) {
	let e, t, l, o, s, c, d, _;
	return {
		c() {
			(e = f('label')),
				(t = f('p')),
				(l = H('Confirm Password')),
				(s = y()),
				(c = f('input')),
				this.h();
		},
		l(a) {
			e = p(a, 'LABEL', {});
			var i = g(e);
			t = p(i, 'P', { class: !0 });
			var I = g(t);
			(l = z(I, 'Confirm Password')),
				I.forEach(m),
				(s = E(i)),
				(c = p(i, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				i.forEach(m),
				this.h();
		},
		h() {
			h(t, 'class', (o = r[2] ? ' above' : ' center')),
				h(c, 'type', 'password'),
				h(c, 'placeholder', 'Confirm Password'),
				h(c, 'class', 'svelte-72w0xh');
		},
		m(a, i) {
			N(a, e, i),
				n(e, t),
				n(t, l),
				n(e, s),
				n(e, c),
				V(c, r[2]),
				d || ((_ = D(c, 'input', r[10])), (d = !0));
		},
		p(a, i) {
			i & 4 && o !== (o = a[2] ? ' above' : ' center') && h(t, 'class', o),
				i & 4 && c.value !== a[2] && V(c, a[2]);
		},
		d(a) {
			a && m(e), (d = !1), _();
		}
	};
}
function Ee(r) {
	let e;
	return {
		c() {
			e = H('Submit');
		},
		l(t) {
			e = z(t, 'Submit');
		},
		m(t, l) {
			N(t, e, l);
		},
		d(t) {
			t && m(e);
		}
	};
}
function Pe(r) {
	let e;
	return {
		c() {
			(e = f('i')), this.h();
		},
		l(t) {
			(e = p(t, 'I', { class: !0 })), g(e).forEach(m), this.h();
		},
		h() {
			h(e, 'class', 'fa-solid fa-spinner loadingSpinner');
		},
		m(t, l) {
			N(t, e, l);
		},
		d(t) {
			t && m(e);
		}
	};
}
function Le(r) {
	let e,
		t,
		l = "Don't have an account?",
		o,
		s,
		c = 'Register',
		d,
		_;
	return {
		c() {
			(e = f('div')),
				(t = f('p')),
				(t.textContent = l),
				(o = y()),
				(s = f('p')),
				(s.textContent = c);
		},
		l(a) {
			e = p(a, 'DIV', {});
			var i = g(e);
			(t = p(i, 'P', { 'data-svelte-h': !0 })),
				q(t) !== 'svelte-qd51yb' && (t.textContent = l),
				(o = E(i)),
				(s = p(i, 'P', { 'data-svelte-h': !0 })),
				q(s) !== 'svelte-1ndb079' && (s.textContent = c),
				i.forEach(m);
		},
		m(a, i) {
			N(a, e, i),
				n(e, t),
				n(e, o),
				n(e, s),
				d || ((_ = [D(s, 'click', r[7]), D(s, 'keydown', Be)]), (d = !0));
		},
		p: F,
		d(a) {
			a && m(e), (d = !1), le(_);
		}
	};
}
function Ie(r) {
	let e,
		t,
		l = 'Already have an account?',
		o,
		s,
		c = 'Login',
		d,
		_;
	return {
		c() {
			(e = f('div')),
				(t = f('p')),
				(t.textContent = l),
				(o = y()),
				(s = f('p')),
				(s.textContent = c);
		},
		l(a) {
			e = p(a, 'DIV', {});
			var i = g(e);
			(t = p(i, 'P', { 'data-svelte-h': !0 })),
				q(t) !== 'svelte-1l9vmhp' && (t.textContent = l),
				(o = E(i)),
				(s = p(i, 'P', { 'data-svelte-h': !0 })),
				q(s) !== 'svelte-6xulyb' && (s.textContent = c),
				i.forEach(m);
		},
		m(a, i) {
			N(a, e, i),
				n(e, t),
				n(e, o),
				n(e, s),
				d || ((_ = [D(s, 'click', r[7]), D(s, 'keydown', Ae)]), (d = !0));
		},
		p: F,
		d(a) {
			a && m(e), (d = !1), le(_);
		}
	};
}
function Te(r) {
	let e,
		t,
		l,
		o = r[4] ? 'Register' : 'Login',
		s,
		c,
		d,
		_,
		a,
		i,
		I,
		O,
		C,
		x,
		R,
		S,
		X,
		M,
		Y,
		L,
		Z,
		j,
		T,
		$,
		A,
		U,
		ne = 'Or',
		ee,
		te,
		se,
		w = r[3] && pe(),
		v = r[4] && de(r);
	function ae(u, b) {
		return u[5] ? Pe : Ee;
	}
	let G = ae(r),
		B = G(r);
	function re(u, b) {
		return u[4] ? Ie : Le;
	}
	let J = re(r),
		P = J(r);
	return {
		c() {
			(e = f('div')),
				(t = f('form')),
				(l = f('h1')),
				(s = H(o)),
				(c = y()),
				w && w.c(),
				(d = y()),
				(_ = f('label')),
				(a = f('p')),
				(i = H('Email')),
				(O = y()),
				(C = f('input')),
				(x = y()),
				(R = f('label')),
				(S = f('p')),
				(X = H('Password')),
				(Y = y()),
				(L = f('input')),
				(Z = y()),
				v && v.c(),
				(j = y()),
				(T = f('button')),
				B.c(),
				($ = y()),
				(A = f('div')),
				(U = f('p')),
				(U.textContent = ne),
				(ee = y()),
				P.c(),
				this.h();
		},
		l(u) {
			e = p(u, 'DIV', { class: !0 });
			var b = g(e);
			t = p(b, 'FORM', { class: !0 });
			var k = g(t);
			l = p(k, 'H1', {});
			var oe = g(l);
			(s = z(oe, o)), oe.forEach(m), (c = E(k)), w && w.l(k), (d = E(k)), (_ = p(k, 'LABEL', {}));
			var K = g(_);
			a = p(K, 'P', { class: !0 });
			var ie = g(a);
			(i = z(ie, 'Email')),
				ie.forEach(m),
				(O = E(K)),
				(C = p(K, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				K.forEach(m),
				(x = E(k)),
				(R = p(k, 'LABEL', {}));
			var Q = g(R);
			S = p(Q, 'P', { class: !0 });
			var ue = g(S);
			(X = z(ue, 'Password')),
				ue.forEach(m),
				(Y = E(Q)),
				(L = p(Q, 'INPUT', { type: !0, placeholder: !0, class: !0 })),
				Q.forEach(m),
				(Z = E(k)),
				v && v.l(k),
				(j = E(k)),
				(T = p(k, 'BUTTON', { type: !0, class: !0 }));
			var ce = g(T);
			B.l(ce), ce.forEach(m), k.forEach(m), ($ = E(b)), (A = p(b, 'DIV', { class: !0 }));
			var W = g(A);
			(U = p(W, 'P', { 'data-svelte-h': !0 })),
				q(U) !== 'svelte-93986n' && (U.textContent = ne),
				(ee = E(W)),
				P.l(W),
				W.forEach(m),
				b.forEach(m),
				this.h();
		},
		h() {
			h(a, 'class', (I = r[0] ? ' above' : ' center')),
				h(C, 'type', 'email'),
				h(C, 'placeholder', 'Email'),
				h(C, 'class', 'svelte-72w0xh'),
				h(S, 'class', (M = r[1] ? ' above' : ' center')),
				h(L, 'type', 'password'),
				h(L, 'placeholder', 'Password'),
				h(L, 'class', 'svelte-72w0xh'),
				h(T, 'type', 'button'),
				h(T, 'class', 'submitBtn'),
				h(t, 'class', 'svelte-72w0xh'),
				h(A, 'class', 'options'),
				h(e, 'class', 'authContainer svelte-72w0xh');
		},
		m(u, b) {
			N(u, e, b),
				n(e, t),
				n(t, l),
				n(l, s),
				n(t, c),
				w && w.m(t, null),
				n(t, d),
				n(t, _),
				n(_, a),
				n(a, i),
				n(_, O),
				n(_, C),
				V(C, r[0]),
				n(t, x),
				n(t, R),
				n(R, S),
				n(S, X),
				n(R, Y),
				n(R, L),
				V(L, r[1]),
				n(t, Z),
				v && v.m(t, null),
				n(t, j),
				n(t, T),
				B.m(T, null),
				n(e, $),
				n(e, A),
				n(A, U),
				n(A, ee),
				P.m(A, null),
				te || ((se = [D(C, 'input', r[8]), D(L, 'input', r[9]), D(T, 'click', r[6])]), (te = !0));
		},
		p(u, [b]) {
			b & 16 && o !== (o = u[4] ? 'Register' : 'Login') && ve(s, o),
				u[3] ? w || ((w = pe()), w.c(), w.m(t, d)) : w && (w.d(1), (w = null)),
				b & 1 && I !== (I = u[0] ? ' above' : ' center') && h(a, 'class', I),
				b & 1 && C.value !== u[0] && V(C, u[0]),
				b & 2 && M !== (M = u[1] ? ' above' : ' center') && h(S, 'class', M),
				b & 2 && L.value !== u[1] && V(L, u[1]),
				u[4] ? (v ? v.p(u, b) : ((v = de(u)), v.c(), v.m(t, j))) : v && (v.d(1), (v = null)),
				G !== (G = ae(u)) && (B.d(1), (B = G(u)), B && (B.c(), B.m(T, null))),
				J === (J = re(u)) && P ? P.p(u, b) : (P.d(1), (P = J(u)), P && (P.c(), P.m(A, null)));
		},
		i: F,
		o: F,
		d(u) {
			u && m(e), w && w.d(), v && v.d(), B.d(), P.d(), (te = !1), le(se);
		}
	};
}
const Ae = () => {},
	Be = () => {};
function De(r, e, t) {
	let l = '',
		o = '',
		s = '',
		c = !1,
		d = !1,
		_ = !1;
	async function a() {
		if (!_) {
			if (!l || !o || (d && !s)) {
				t(3, (c = !0));
				return;
			}
			t(5, (_ = !0));
			try {
				d
					? (await fe.signup(l, o), (window.location.href = '/'))
					: (await fe.login(l, o), (window.location.href = '/'));
			} catch (x) {
				console.log('There was an auth error', x), t(3, (c = !0)), t(5, (_ = !1));
			}
		}
	}
	function i() {
		t(4, (d = !d));
	}
	function I() {
		(l = this.value), t(0, l);
	}
	function O() {
		(o = this.value), t(1, o);
	}
	function C() {
		(s = this.value), t(2, s);
	}
	return [l, o, s, c, d, _, a, i, I, O, C];
}
class Re extends _e {
	constructor(e) {
		super(), me(this, e, De, Te, he, {});
	}
}
function Se(r) {
	let e, t;
	return (
		(e = new Re({})),
		{
			c() {
				be(e.$$.fragment);
			},
			l(l) {
				we(e.$$.fragment, l);
			},
			m(l, o) {
				ge(e, l, o), (t = !0);
			},
			p: F,
			i(l) {
				t || (Ce(e.$$.fragment, l), (t = !0));
			},
			o(l) {
				ke(e.$$.fragment, l), (t = !1);
			},
			d(l) {
				ye(e, l);
			}
		}
	);
}
class qe extends _e {
	constructor(e) {
		super(), me(this, e, null, Se, he, {});
	}
}
export { qe as component };
