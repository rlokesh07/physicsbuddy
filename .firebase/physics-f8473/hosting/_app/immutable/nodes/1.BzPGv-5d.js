import {
	s as S,
	e as _,
	t as d,
	a as q,
	b as f,
	l as g,
	m as h,
	k as l,
	d as x,
	i as m,
	p as v,
	q as $,
	n as E,
	r as k
} from '../chunks/scheduler.CcEjp5hG.js';
import { S as y, i as C } from '../chunks/index.76i6c7WO.js';
import { s as H } from '../chunks/entry.DTspv8Bb.js';
const P = () => {
		const s = H;
		return {
			page: { subscribe: s.page.subscribe },
			navigating: { subscribe: s.navigating.subscribe },
			updated: s.updated
		};
	},
	j = {
		subscribe(s) {
			return P().page.subscribe(s);
		}
	};
function w(s) {
	var b;
	let t,
		r = s[0].status + '',
		o,
		n,
		i,
		p = ((b = s[0].error) == null ? void 0 : b.message) + '',
		u;
	return {
		c() {
			(t = _('h1')), (o = d(r)), (n = q()), (i = _('p')), (u = d(p));
		},
		l(e) {
			t = f(e, 'H1', {});
			var a = g(t);
			(o = h(a, r)), a.forEach(l), (n = x(e)), (i = f(e, 'P', {}));
			var c = g(i);
			(u = h(c, p)), c.forEach(l);
		},
		m(e, a) {
			m(e, t, a), v(t, o), m(e, n, a), m(e, i, a), v(i, u);
		},
		p(e, [a]) {
			var c;
			a & 1 && r !== (r = e[0].status + '') && $(o, r),
				a & 1 && p !== (p = ((c = e[0].error) == null ? void 0 : c.message) + '') && $(u, p);
		},
		i: E,
		o: E,
		d(e) {
			e && (l(t), l(n), l(i));
		}
	};
}
function z(s, t, r) {
	let o;
	return k(s, j, (n) => r(0, (o = n))), [o];
}
let F = class extends y {
	constructor(t) {
		super(), C(this, t, z, w, S, {});
	}
};
export { F as component };
