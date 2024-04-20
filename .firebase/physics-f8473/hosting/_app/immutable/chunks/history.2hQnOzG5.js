const p = () => typeof window < 'u' && 'document' in window && 'location' in window,
	l = (t) => ({
		...t.location,
		state: t.history.state,
		key: (t.history.state && t.history.state.key) || 'initial'
	}),
	h = (t) => {
		const n = [];
		let i = l(t);
		return {
			get location() {
				return i;
			},
			listen(a) {
				n.push(a);
				const e = () => {
					(i = l(t)), a({ location: i, action: 'POP' });
				};
				return (
					t.addEventListener('popstate', e),
					() => {
						t.removeEventListener('popstate', e);
						const s = n.indexOf(a);
						n.splice(s, 1);
					}
				);
			},
			navigate(
				a,
				{ state: e, replace: s = !1, preserveScroll: r = !1, blurActiveElement: c = !0 } = {}
			) {
				e = { ...e, key: Date.now() + '' };
				try {
					s ? t.history.replaceState(e, '', a) : t.history.pushState(e, '', a);
				} catch {
					t.location[s ? 'replace' : 'assign'](a);
				}
				(i = l(t)),
					n.forEach((o) => o({ location: i, action: 'PUSH', preserveScroll: r })),
					c && document.activeElement.blur();
			}
		};
	},
	d = (t = '/') => {
		let n = 0;
		const i = [{ pathname: t, search: '' }],
			a = [];
		return {
			get location() {
				return i[n];
			},
			addEventListener(e, s) {},
			removeEventListener(e, s) {},
			history: {
				get entries() {
					return i;
				},
				get index() {
					return n;
				},
				get state() {
					return a[n];
				},
				pushState(e, s, r) {
					const [c, o = ''] = r.split('?');
					n++, i.push({ pathname: c, search: o }), a.push(e);
				},
				replaceState(e, s, r) {
					const [c, o = ''] = r.split('?');
					(i[n] = { pathname: c, search: o }), (a[n] = e);
				}
			}
		};
	},
	y = h(p() ? window : d()),
	{ navigate: m } = y;
export { m as n };
