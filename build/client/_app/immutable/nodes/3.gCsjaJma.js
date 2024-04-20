import {
	s as l,
	e as i,
	c as r,
	l as c,
	m,
	i as h,
	n as s,
	f as u
} from '../chunks/scheduler.C8hMGX5Y.js';
import { S as f, i as p } from '../chunks/index.BW63jDgk.js';
function v(n) {
	let t,
		a = 'Coming soon!';
	return {
		c() {
			(t = i('h1')), (t.textContent = a), this.h();
		},
		l(e) {
			(t = r(e, 'H1', { class: !0, 'data-svelte-h': !0 })),
				c(t) !== 'svelte-b7evgt' && (t.textContent = a),
				this.h();
		},
		h() {
			m(t, 'class', 'svelte-v7q9uk');
		},
		m(e, o) {
			h(e, t, o);
		},
		p: s,
		i: s,
		o: s,
		d(e) {
			e && u(t);
		}
	};
}
class x extends f {
	constructor(t) {
		super(), p(this, t, null, v, l, {});
	}
}
export { x as component };
