var q = Object.defineProperty;
var B = (t, n, e) =>
	n in t ? q(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (t[n] = e);
var f = (t, n, e) => (B(t, typeof n != 'symbol' ? n + '' : n, e), e);
function D() {}
function O(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function G(t) {
	return t();
}
function it() {
	return Object.create(null);
}
function I(t) {
	t.forEach(G);
}
function lt(t) {
	return typeof t == 'function';
}
function rt(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
let m;
function ct(t, n) {
	return t === n ? !0 : (m || (m = document.createElement('a')), (m.href = n), t === m.href);
}
function st(t) {
	return Object.keys(t).length === 0;
}
function z(t, ...n) {
	if (t == null) {
		for (const i of n) i(void 0);
		return D;
	}
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function ot(t, n, e) {
	t.$$.on_destroy.push(z(n, e));
}
function ut(t, n, e, i) {
	if (t) {
		const l = H(t, n, e, i);
		return t[0](l);
	}
}
function H(t, n, e, i) {
	return t[1] && i ? O(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function at(t, n, e, i) {
	if (t[2] && i) {
		const l = t[2](i(e));
		if (n.dirty === void 0) return l;
		if (typeof l == 'object') {
			const s = [],
				r = Math.max(n.dirty.length, l.length);
			for (let o = 0; o < r; o += 1) s[o] = n.dirty[o] | l[o];
			return s;
		}
		return n.dirty | l;
	}
	return n.dirty;
}
function ft(t, n, e, i, l, s) {
	if (l) {
		const r = H(n, e, i, s);
		t.p(r, l);
	}
}
function _t(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
let y = !1;
function dt() {
	y = !0;
}
function ht() {
	y = !1;
}
function F(t, n, e, i) {
	for (; t < n; ) {
		const l = t + ((n - t) >> 1);
		e(l) <= i ? (t = l + 1) : (n = l);
	}
	return t;
}
function R(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const c = [];
		for (let u = 0; u < n.length; u++) {
			const a = n[u];
			a.claim_order !== void 0 && c.push(a);
		}
		n = c;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let l = 0;
	for (let c = 0; c < n.length; c++) {
		const u = n[c].claim_order,
			a = (l > 0 && n[e[l]].claim_order <= u ? l + 1 : F(1, l, (C) => n[e[C]].claim_order, u)) - 1;
		i[c] = e[a] + 1;
		const N = a + 1;
		(e[N] = c), (l = Math.max(N, l));
	}
	const s = [],
		r = [];
	let o = n.length - 1;
	for (let c = e[l] + 1; c != 0; c = i[c - 1]) {
		for (s.push(n[c - 1]); o >= c; o--) r.push(n[o]);
		o--;
	}
	for (; o >= 0; o--) r.push(n[o]);
	s.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
	for (let c = 0, u = 0; c < r.length; c++) {
		for (; u < s.length && r[c].claim_order >= s[u].claim_order; ) u++;
		const a = u < s.length ? s[u] : null;
		t.insertBefore(r[c], a);
	}
}
function U(t, n) {
	if (y) {
		for (
			R(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentNode !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function W(t, n, e) {
	t.insertBefore(n, e || null);
}
function J(t, n, e) {
	y && !e ? U(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function v(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function mt(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function L(t) {
	return document.createElement(t);
}
function K(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function w(t) {
	return document.createTextNode(t);
}
function pt() {
	return w(' ');
}
function yt() {
	return w('');
}
function bt(t, n, e, i) {
	return t.addEventListener(n, e, i), () => t.removeEventListener(n, e, i);
}
function gt(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function xt(t) {
	return t.dataset.svelteH;
}
function Et(t) {
	return Array.from(t.childNodes);
}
function j(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function P(t, n, e, i, l = !1) {
	j(t);
	const s = (() => {
		for (let r = t.claim_info.last_index; r < t.length; r++) {
			const o = t[r];
			if (n(o)) {
				const c = e(o);
				return c === void 0 ? t.splice(r, 1) : (t[r] = c), l || (t.claim_info.last_index = r), o;
			}
		}
		for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
			const o = t[r];
			if (n(o)) {
				const c = e(o);
				return (
					c === void 0 ? t.splice(r, 1) : (t[r] = c),
					l ? c === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = r),
					o
				);
			}
		}
		return i();
	})();
	return (s.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), s;
}
function Q(t, n, e, i) {
	return P(
		t,
		(l) => l.nodeName === n,
		(l) => {
			const s = [];
			for (let r = 0; r < l.attributes.length; r++) {
				const o = l.attributes[r];
				e[o.name] || s.push(o.name);
			}
			s.forEach((r) => l.removeAttribute(r));
		},
		() => i(n)
	);
}
function vt(t, n, e) {
	return Q(t, n, e, L);
}
function V(t, n) {
	return P(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => w(n),
		!0
	);
}
function Tt(t) {
	return V(t, ' ');
}
function A(t, n, e) {
	for (let i = e; i < t.length; i += 1) {
		const l = t[i];
		if (l.nodeType === 8 && l.textContent.trim() === n) return i;
	}
	return -1;
}
function wt(t, n) {
	const e = A(t, 'HTML_TAG_START', 0),
		i = A(t, 'HTML_TAG_END', e + 1);
	if (e === -1 || i === -1) return new g(n);
	j(t);
	const l = t.splice(e, i - e + 1);
	v(l[0]), v(l[l.length - 1]);
	const s = l.slice(1, l.length - 1);
	if (s.length === 0) return new g(n);
	for (const r of s)
		(r.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1);
	return new g(n, s);
}
function Nt(t, n) {
	(n = '' + n), t.data !== n && (t.data = n);
}
function At(t, n) {
	t.value = n ?? '';
}
function kt(t, n, e, i) {
	e == null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
function X(t, n, { bubbles: e = !1, cancelable: i = !1 } = {}) {
	return new CustomEvent(t, { detail: n, bubbles: e, cancelable: i });
}
class Y {
	constructor(n = !1) {
		f(this, 'is_svg', !1);
		f(this, 'e');
		f(this, 'n');
		f(this, 't');
		f(this, 'a');
		(this.is_svg = n), (this.e = this.n = null);
	}
	c(n) {
		this.h(n);
	}
	m(n, e, i = null) {
		this.e ||
			(this.is_svg
				? (this.e = K(e.nodeName))
				: (this.e = L(e.nodeType === 11 ? 'TEMPLATE' : e.nodeName)),
			(this.t = e.tagName !== 'TEMPLATE' ? e : e.content),
			this.c(n)),
			this.i(i);
	}
	h(n) {
		(this.e.innerHTML = n),
			(this.n = Array.from(
				this.e.nodeName === 'TEMPLATE' ? this.e.content.childNodes : this.e.childNodes
			));
	}
	i(n) {
		for (let e = 0; e < this.n.length; e += 1) W(this.t, this.n[e], n);
	}
	p(n) {
		this.d(), this.h(n), this.i(this.a);
	}
	d() {
		this.n.forEach(v);
	}
}
class g extends Y {
	constructor(e = !1, i) {
		super(e);
		f(this, 'l');
		(this.e = this.n = null), (this.l = i);
	}
	c(e) {
		this.l ? (this.n = this.l) : super.c(e);
	}
	i(e) {
		for (let i = 0; i < this.n.length; i += 1) J(this.t, this.n[i], e);
	}
}
function Mt(t, n) {
	return new t(n);
}
let p;
function x(t) {
	p = t;
}
function b() {
	if (!p) throw new Error('Function called outside component initialization');
	return p;
}
function Ht(t) {
	b().$$.on_mount.push(t);
}
function Lt(t) {
	b().$$.after_update.push(t);
}
function jt(t) {
	b().$$.on_destroy.push(t);
}
function Pt() {
	const t = b();
	return (n, e, { cancelable: i = !1 } = {}) => {
		const l = t.$$.callbacks[n];
		if (l) {
			const s = X(n, e, { cancelable: i });
			return (
				l.slice().forEach((r) => {
					r.call(t, s);
				}),
				!s.defaultPrevented
			);
		}
		return !0;
	};
}
const h = [],
	k = [];
let d = [];
const M = [],
	S = Promise.resolve();
let T = !1;
function Z() {
	T || ((T = !0), S.then(tt));
}
function St() {
	return Z(), S;
}
function $(t) {
	d.push(t);
}
const E = new Set();
let _ = 0;
function tt() {
	if (_ !== 0) return;
	const t = p;
	do {
		try {
			for (; _ < h.length; ) {
				const n = h[_];
				_++, x(n), nt(n.$$);
			}
		} catch (n) {
			throw ((h.length = 0), (_ = 0), n);
		}
		for (x(null), h.length = 0, _ = 0; k.length; ) k.pop()();
		for (let n = 0; n < d.length; n += 1) {
			const e = d[n];
			E.has(e) || (E.add(e), e());
		}
		d.length = 0;
	} while (h.length);
	for (; M.length; ) M.pop()();
	(T = !1), E.clear(), x(t);
}
function nt(t) {
	if (t.fragment !== null) {
		t.update(), I(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach($);
	}
}
function Ct(t) {
	const n = [],
		e = [];
	d.forEach((i) => (t.indexOf(i) === -1 ? n.push(i) : e.push(i))), e.forEach((i) => i()), (d = n);
}
export {
	it as A,
	tt as B,
	lt as C,
	st as D,
	$ as E,
	Ct as F,
	p as G,
	x as H,
	G as I,
	h as J,
	Z as K,
	dt as L,
	ht as M,
	Lt as N,
	kt as O,
	k as P,
	Mt as Q,
	St as R,
	g as S,
	wt as T,
	jt as U,
	Pt as V,
	ct as W,
	pt as a,
	Et as b,
	vt as c,
	V as d,
	L as e,
	v as f,
	Tt as g,
	U as h,
	J as i,
	Nt as j,
	ot as k,
	xt as l,
	gt as m,
	D as n,
	ut as o,
	_t as p,
	at as q,
	Ht as r,
	rt as s,
	w as t,
	ft as u,
	At as v,
	bt as w,
	I as x,
	mt as y,
	yt as z
};
