import {
	s as r,
	e as l,
	b as i,
	g as c,
	f as m,
	i as u,
	n as s,
	k as h
} from '../chunks/scheduler.CcEjp5hG.js';
import { S as _, i as f } from '../chunks/index.76i6c7WO.js';
async function p() {}
const x = Object.freeze(
	Object.defineProperty({ __proto__: null, load: p }, Symbol.toStringTag, { value: 'Module' })
);
function d(n) {
	let t,
		a = 'Harmonic Motion';
	return {
		c() {
			(t = l('h1')), (t.textContent = a), this.h();
		},
		l(e) {
			(t = i(e, 'H1', { class: !0, 'data-svelte-h': !0 })),
				c(t) !== 'svelte-1m0smjr' && (t.textContent = a),
				this.h();
		},
		h() {
			m(t, 'class', 'svelte-uwqhbo');
		},
		m(e, o) {
			u(e, t, o);
		},
		p: s,
		i: s,
		o: s,
		d(e) {
			e && h(t);
		}
	};
}
class b extends _ {
	constructor(t) {
		super(), f(this, t, null, d, r, {});
	}
}
export { b as component, x as universal };
