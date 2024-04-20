import { w as Oc } from './index.C6r_ZE0-.js';
var Zo = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lc = function (n) {
		const e = [];
		let t = 0;
		for (let r = 0; r < n.length; r++) {
			let i = n.charCodeAt(r);
			i < 128
				? (e[t++] = i)
				: i < 2048
					? ((e[t++] = (i >> 6) | 192), (e[t++] = (i & 63) | 128))
					: (i & 64512) === 55296 && r + 1 < n.length && (n.charCodeAt(r + 1) & 64512) === 56320
						? ((i = 65536 + ((i & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
							(e[t++] = (i >> 18) | 240),
							(e[t++] = ((i >> 12) & 63) | 128),
							(e[t++] = ((i >> 6) & 63) | 128),
							(e[t++] = (i & 63) | 128))
						: ((e[t++] = (i >> 12) | 224),
							(e[t++] = ((i >> 6) & 63) | 128),
							(e[t++] = (i & 63) | 128));
		}
		return e;
	},
	yd = function (n) {
		const e = [];
		let t = 0,
			r = 0;
		for (; t < n.length; ) {
			const i = n[t++];
			if (i < 128) e[r++] = String.fromCharCode(i);
			else if (i > 191 && i < 224) {
				const s = n[t++];
				e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
			} else if (i > 239 && i < 365) {
				const s = n[t++],
					o = n[t++],
					a = n[t++],
					c = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) - 65536;
				(e[r++] = String.fromCharCode(55296 + (c >> 10))),
					(e[r++] = String.fromCharCode(56320 + (c & 1023)));
			} else {
				const s = n[t++],
					o = n[t++];
				e[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63));
			}
		}
		return e.join('');
	},
	Mc = {
		byteToCharMap_: null,
		charToByteMap_: null,
		byteToCharMapWebSafe_: null,
		charToByteMapWebSafe_: null,
		ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
		get ENCODED_VALS() {
			return this.ENCODED_VALS_BASE + '+/=';
		},
		get ENCODED_VALS_WEBSAFE() {
			return this.ENCODED_VALS_BASE + '-_.';
		},
		HAS_NATIVE_SUPPORT: typeof atob == 'function',
		encodeByteArray(n, e) {
			if (!Array.isArray(n)) throw Error('encodeByteArray takes an array as a parameter');
			this.init_();
			const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
				r = [];
			for (let i = 0; i < n.length; i += 3) {
				const s = n[i],
					o = i + 1 < n.length,
					a = o ? n[i + 1] : 0,
					c = i + 2 < n.length,
					u = c ? n[i + 2] : 0,
					l = s >> 2,
					h = ((s & 3) << 4) | (a >> 4);
				let d = ((a & 15) << 2) | (u >> 6),
					g = u & 63;
				c || ((g = 64), o || (d = 64)), r.push(t[l], t[h], t[d], t[g]);
			}
			return r.join('');
		},
		encodeString(n, e) {
			return this.HAS_NATIVE_SUPPORT && !e ? btoa(n) : this.encodeByteArray(Lc(n), e);
		},
		decodeString(n, e) {
			return this.HAS_NATIVE_SUPPORT && !e ? atob(n) : yd(this.decodeStringToByteArray(n, e));
		},
		decodeStringToByteArray(n, e) {
			this.init_();
			const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
				r = [];
			for (let i = 0; i < n.length; ) {
				const s = t[n.charAt(i++)],
					a = i < n.length ? t[n.charAt(i)] : 0;
				++i;
				const u = i < n.length ? t[n.charAt(i)] : 64;
				++i;
				const h = i < n.length ? t[n.charAt(i)] : 64;
				if ((++i, s == null || a == null || u == null || h == null)) throw new vd();
				const d = (s << 2) | (a >> 4);
				if ((r.push(d), u !== 64)) {
					const g = ((a << 4) & 240) | (u >> 2);
					if ((r.push(g), h !== 64)) {
						const S = ((u << 6) & 192) | h;
						r.push(S);
					}
				}
			}
			return r;
		},
		init_() {
			if (!this.byteToCharMap_) {
				(this.byteToCharMap_ = {}),
					(this.charToByteMap_ = {}),
					(this.byteToCharMapWebSafe_ = {}),
					(this.charToByteMapWebSafe_ = {});
				for (let n = 0; n < this.ENCODED_VALS.length; n++)
					(this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
						(this.charToByteMap_[this.byteToCharMap_[n]] = n),
						(this.byteToCharMapWebSafe_[n] = this.ENCODED_VALS_WEBSAFE.charAt(n)),
						(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
						n >= this.ENCODED_VALS_BASE.length &&
							((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
							(this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
			}
		}
	};
class vd extends Error {
	constructor() {
		super(...arguments), (this.name = 'DecodeBase64StringError');
	}
}
const Ed = function (n) {
		const e = Lc(n);
		return Mc.encodeByteArray(e, !0);
	},
	Cr = function (n) {
		return Ed(n).replace(/\./g, '');
	},
	xc = function (n) {
		try {
			return Mc.decodeString(n, !0);
		} catch (e) {
			console.error('base64Decode failed: ', e);
		}
		return null;
	};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Id() {
	if (typeof self < 'u') return self;
	if (typeof window < 'u') return window;
	if (typeof global < 'u') return global;
	throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Td = () => Id().__FIREBASE_DEFAULTS__,
	wd = () => {
		if (typeof process > 'u' || typeof Zo > 'u') return;
		const n = Zo.__FIREBASE_DEFAULTS__;
		if (n) return JSON.parse(n);
	},
	Ad = () => {
		if (typeof document > 'u') return;
		let n;
		try {
			n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
		} catch {
			return;
		}
		const e = n && xc(n[1]);
		return e && JSON.parse(e);
	},
	Jr = () => {
		try {
			return Td() || wd() || Ad();
		} catch (n) {
			console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
			return;
		}
	},
	Fc = (n) => {
		var e, t;
		return (t = (e = Jr()) === null || e === void 0 ? void 0 : e.emulatorHosts) === null ||
			t === void 0
			? void 0
			: t[n];
	},
	Rd = (n) => {
		const e = Fc(n);
		if (!e) return;
		const t = e.lastIndexOf(':');
		if (t <= 0 || t + 1 === e.length)
			throw new Error(`Invalid host ${e} with no separate hostname and port!`);
		const r = parseInt(e.substring(t + 1), 10);
		return e[0] === '[' ? [e.substring(1, t - 1), r] : [e.substring(0, t), r];
	},
	Uc = () => {
		var n;
		return (n = Jr()) === null || n === void 0 ? void 0 : n.config;
	},
	Bc = (n) => {
		var e;
		return (e = Jr()) === null || e === void 0 ? void 0 : e[`_${n}`];
	};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Sd {
	constructor() {
		(this.reject = () => {}),
			(this.resolve = () => {}),
			(this.promise = new Promise((e, t) => {
				(this.resolve = e), (this.reject = t);
			}));
	}
	wrapCallback(e) {
		return (t, r) => {
			t ? this.reject(t) : this.resolve(r),
				typeof e == 'function' && (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, r));
		};
	}
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pd(n, e) {
	if (n.uid)
		throw new Error(
			'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
		);
	const t = { alg: 'none', type: 'JWT' },
		r = e || 'demo-project',
		i = n.iat || 0,
		s = n.sub || n.user_id;
	if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
	const o = Object.assign(
		{
			iss: `https://securetoken.google.com/${r}`,
			aud: r,
			iat: i,
			exp: i + 3600,
			auth_time: i,
			sub: s,
			user_id: s,
			firebase: { sign_in_provider: 'custom', identities: {} }
		},
		n
	);
	return [Cr(JSON.stringify(t)), Cr(JSON.stringify(o)), ''].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q() {
	return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
		? navigator.userAgent
		: '';
}
function Cd() {
	return (
		typeof window < 'u' &&
		!!(window.cordova || window.phonegap || window.PhoneGap) &&
		/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())
	);
}
function bd() {
	var n;
	const e = (n = Jr()) === null || n === void 0 ? void 0 : n.forceEnvironment;
	if (e === 'node') return !0;
	if (e === 'browser') return !1;
	try {
		return Object.prototype.toString.call(global.process) === '[object process]';
	} catch {
		return !1;
	}
}
function jc() {
	const n =
		typeof chrome == 'object'
			? chrome.runtime
			: typeof browser == 'object'
				? browser.runtime
				: void 0;
	return typeof n == 'object' && n.id !== void 0;
}
function kd() {
	return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function Dd() {
	const n = q();
	return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function Vd() {
	return (
		!bd() &&
		!!navigator.userAgent &&
		navigator.userAgent.includes('Safari') &&
		!navigator.userAgent.includes('Chrome')
	);
}
function xs() {
	try {
		return typeof indexedDB == 'object';
	} catch {
		return !1;
	}
}
function qc() {
	return new Promise((n, e) => {
		try {
			let t = !0;
			const r = 'validate-browser-context-for-indexeddb-analytics-module',
				i = self.indexedDB.open(r);
			(i.onsuccess = () => {
				i.result.close(), t || self.indexedDB.deleteDatabase(r), n(!0);
			}),
				(i.onupgradeneeded = () => {
					t = !1;
				}),
				(i.onerror = () => {
					var s;
					e(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '');
				});
		} catch (t) {
			e(t);
		}
	});
}
function Nd() {
	return !(typeof navigator > 'u' || !navigator.cookieEnabled);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Od = 'FirebaseError';
class Ee extends Error {
	constructor(e, t, r) {
		super(t),
			(this.code = e),
			(this.customData = r),
			(this.name = Od),
			Object.setPrototypeOf(this, Ee.prototype),
			Error.captureStackTrace && Error.captureStackTrace(this, St.prototype.create);
	}
}
class St {
	constructor(e, t, r) {
		(this.service = e), (this.serviceName = t), (this.errors = r);
	}
	create(e, ...t) {
		const r = t[0] || {},
			i = `${this.service}/${e}`,
			s = this.errors[e],
			o = s ? Ld(s, r) : 'Error',
			a = `${this.serviceName}: ${o} (${i}).`;
		return new Ee(i, a, r);
	}
}
function Ld(n, e) {
	return n.replace(Md, (t, r) => {
		const i = e[r];
		return i != null ? String(i) : `<${r}?>`;
	});
}
const Md = /\{\$([^}]+)}/g;
function xd(n) {
	for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
	return !0;
}
function br(n, e) {
	if (n === e) return !0;
	const t = Object.keys(n),
		r = Object.keys(e);
	for (const i of t) {
		if (!r.includes(i)) return !1;
		const s = n[i],
			o = e[i];
		if (ea(s) && ea(o)) {
			if (!br(s, o)) return !1;
		} else if (s !== o) return !1;
	}
	for (const i of r) if (!t.includes(i)) return !1;
	return !0;
}
function ea(n) {
	return n !== null && typeof n == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $n(n) {
	const e = [];
	for (const [t, r] of Object.entries(n))
		Array.isArray(r)
			? r.forEach((i) => {
					e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
				})
			: e.push(encodeURIComponent(t) + '=' + encodeURIComponent(r));
	return e.length ? '&' + e.join('&') : '';
}
function hn(n) {
	const e = {};
	return (
		n
			.replace(/^\?/, '')
			.split('&')
			.forEach((r) => {
				if (r) {
					const [i, s] = r.split('=');
					e[decodeURIComponent(i)] = decodeURIComponent(s);
				}
			}),
		e
	);
}
function dn(n) {
	const e = n.indexOf('?');
	if (!e) return '';
	const t = n.indexOf('#', e);
	return n.substring(e, t > 0 ? t : void 0);
}
function Fd(n, e) {
	const t = new Ud(n, e);
	return t.subscribe.bind(t);
}
class Ud {
	constructor(e, t) {
		(this.observers = []),
			(this.unsubscribes = []),
			(this.observerCount = 0),
			(this.task = Promise.resolve()),
			(this.finalized = !1),
			(this.onNoObservers = t),
			this.task
				.then(() => {
					e(this);
				})
				.catch((r) => {
					this.error(r);
				});
	}
	next(e) {
		this.forEachObserver((t) => {
			t.next(e);
		});
	}
	error(e) {
		this.forEachObserver((t) => {
			t.error(e);
		}),
			this.close(e);
	}
	complete() {
		this.forEachObserver((e) => {
			e.complete();
		}),
			this.close();
	}
	subscribe(e, t, r) {
		let i;
		if (e === void 0 && t === void 0 && r === void 0) throw new Error('Missing Observer.');
		Bd(e, ['next', 'error', 'complete']) ? (i = e) : (i = { next: e, error: t, complete: r }),
			i.next === void 0 && (i.next = Ni),
			i.error === void 0 && (i.error = Ni),
			i.complete === void 0 && (i.complete = Ni);
		const s = this.unsubscribeOne.bind(this, this.observers.length);
		return (
			this.finalized &&
				this.task.then(() => {
					try {
						this.finalError ? i.error(this.finalError) : i.complete();
					} catch {}
				}),
			this.observers.push(i),
			s
		);
	}
	unsubscribeOne(e) {
		this.observers === void 0 ||
			this.observers[e] === void 0 ||
			(delete this.observers[e],
			(this.observerCount -= 1),
			this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
	}
	forEachObserver(e) {
		if (!this.finalized) for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
	}
	sendOne(e, t) {
		this.task.then(() => {
			if (this.observers !== void 0 && this.observers[e] !== void 0)
				try {
					t(this.observers[e]);
				} catch (r) {
					typeof console < 'u' && console.error && console.error(r);
				}
		});
	}
	close(e) {
		this.finalized ||
			((this.finalized = !0),
			e !== void 0 && (this.finalError = e),
			this.task.then(() => {
				(this.observers = void 0), (this.onNoObservers = void 0);
			}));
	}
}
function Bd(n, e) {
	if (typeof n != 'object' || n === null) return !1;
	for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
	return !1;
}
function Ni() {}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jd = 1e3,
	qd = 2,
	$d = 4 * 60 * 60 * 1e3,
	zd = 0.5;
function ta(n, e = jd, t = qd) {
	const r = e * Math.pow(t, n),
		i = Math.round(zd * r * (Math.random() - 0.5) * 2);
	return Math.min($d, r + i);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ce(n) {
	return n && n._delegate ? n._delegate : n;
}
class _e {
	constructor(e, t, r) {
		(this.name = e),
			(this.instanceFactory = t),
			(this.type = r),
			(this.multipleInstances = !1),
			(this.serviceProps = {}),
			(this.instantiationMode = 'LAZY'),
			(this.onInstanceCreated = null);
	}
	setInstantiationMode(e) {
		return (this.instantiationMode = e), this;
	}
	setMultipleInstances(e) {
		return (this.multipleInstances = e), this;
	}
	setServiceProps(e) {
		return (this.serviceProps = e), this;
	}
	setInstanceCreatedCallback(e) {
		return (this.onInstanceCreated = e), this;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ct = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hd {
	constructor(e, t) {
		(this.name = e),
			(this.container = t),
			(this.component = null),
			(this.instances = new Map()),
			(this.instancesDeferred = new Map()),
			(this.instancesOptions = new Map()),
			(this.onInitCallbacks = new Map());
	}
	get(e) {
		const t = this.normalizeInstanceIdentifier(e);
		if (!this.instancesDeferred.has(t)) {
			const r = new Sd();
			if ((this.instancesDeferred.set(t, r), this.isInitialized(t) || this.shouldAutoInitialize()))
				try {
					const i = this.getOrInitializeService({ instanceIdentifier: t });
					i && r.resolve(i);
				} catch {}
		}
		return this.instancesDeferred.get(t).promise;
	}
	getImmediate(e) {
		var t;
		const r = this.normalizeInstanceIdentifier(e == null ? void 0 : e.identifier),
			i = (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
		if (this.isInitialized(r) || this.shouldAutoInitialize())
			try {
				return this.getOrInitializeService({ instanceIdentifier: r });
			} catch (s) {
				if (i) return null;
				throw s;
			}
		else {
			if (i) return null;
			throw Error(`Service ${this.name} is not available`);
		}
	}
	getComponent() {
		return this.component;
	}
	setComponent(e) {
		if (e.name !== this.name)
			throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
		if (this.component) throw Error(`Component for ${this.name} has already been provided`);
		if (((this.component = e), !!this.shouldAutoInitialize())) {
			if (Kd(e))
				try {
					this.getOrInitializeService({ instanceIdentifier: ct });
				} catch {}
			for (const [t, r] of this.instancesDeferred.entries()) {
				const i = this.normalizeInstanceIdentifier(t);
				try {
					const s = this.getOrInitializeService({ instanceIdentifier: i });
					r.resolve(s);
				} catch {}
			}
		}
	}
	clearInstance(e = ct) {
		this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e);
	}
	async delete() {
		const e = Array.from(this.instances.values());
		await Promise.all([
			...e.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
			...e.filter((t) => '_delete' in t).map((t) => t._delete())
		]);
	}
	isComponentSet() {
		return this.component != null;
	}
	isInitialized(e = ct) {
		return this.instances.has(e);
	}
	getOptions(e = ct) {
		return this.instancesOptions.get(e) || {};
	}
	initialize(e = {}) {
		const { options: t = {} } = e,
			r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
		if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
		if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
		const i = this.getOrInitializeService({ instanceIdentifier: r, options: t });
		for (const [s, o] of this.instancesDeferred.entries()) {
			const a = this.normalizeInstanceIdentifier(s);
			r === a && o.resolve(i);
		}
		return i;
	}
	onInit(e, t) {
		var r;
		const i = this.normalizeInstanceIdentifier(t),
			s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set();
		s.add(e), this.onInitCallbacks.set(i, s);
		const o = this.instances.get(i);
		return (
			o && e(o, i),
			() => {
				s.delete(e);
			}
		);
	}
	invokeOnInitCallbacks(e, t) {
		const r = this.onInitCallbacks.get(t);
		if (r)
			for (const i of r)
				try {
					i(e, t);
				} catch {}
	}
	getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
		let r = this.instances.get(e);
		if (
			!r &&
			this.component &&
			((r = this.component.instanceFactory(this.container, {
				instanceIdentifier: Wd(e),
				options: t
			})),
			this.instances.set(e, r),
			this.instancesOptions.set(e, t),
			this.invokeOnInitCallbacks(r, e),
			this.component.onInstanceCreated)
		)
			try {
				this.component.onInstanceCreated(this.container, e, r);
			} catch {}
		return r || null;
	}
	normalizeInstanceIdentifier(e = ct) {
		return this.component ? (this.component.multipleInstances ? e : ct) : e;
	}
	shouldAutoInitialize() {
		return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
	}
}
function Wd(n) {
	return n === ct ? void 0 : n;
}
function Kd(n) {
	return n.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gd {
	constructor(e) {
		(this.name = e), (this.providers = new Map());
	}
	addComponent(e) {
		const t = this.getProvider(e.name);
		if (t.isComponentSet())
			throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
		t.setComponent(e);
	}
	addOrOverwriteComponent(e) {
		this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
			this.addComponent(e);
	}
	getProvider(e) {
		if (this.providers.has(e)) return this.providers.get(e);
		const t = new Hd(e, this);
		return this.providers.set(e, t), t;
	}
	getProviders() {
		return Array.from(this.providers.values());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var b;
(function (n) {
	(n[(n.DEBUG = 0)] = 'DEBUG'),
		(n[(n.VERBOSE = 1)] = 'VERBOSE'),
		(n[(n.INFO = 2)] = 'INFO'),
		(n[(n.WARN = 3)] = 'WARN'),
		(n[(n.ERROR = 4)] = 'ERROR'),
		(n[(n.SILENT = 5)] = 'SILENT');
})(b || (b = {}));
const Qd = {
		debug: b.DEBUG,
		verbose: b.VERBOSE,
		info: b.INFO,
		warn: b.WARN,
		error: b.ERROR,
		silent: b.SILENT
	},
	Jd = b.INFO,
	Yd = {
		[b.DEBUG]: 'log',
		[b.VERBOSE]: 'log',
		[b.INFO]: 'info',
		[b.WARN]: 'warn',
		[b.ERROR]: 'error'
	},
	Xd = (n, e, ...t) => {
		if (e < n.logLevel) return;
		const r = new Date().toISOString(),
			i = Yd[e];
		if (i) console[i](`[${r}]  ${n.name}:`, ...t);
		else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
	};
class Yr {
	constructor(e) {
		(this.name = e), (this._logLevel = Jd), (this._logHandler = Xd), (this._userLogHandler = null);
	}
	get logLevel() {
		return this._logLevel;
	}
	set logLevel(e) {
		if (!(e in b)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
		this._logLevel = e;
	}
	setLogLevel(e) {
		this._logLevel = typeof e == 'string' ? Qd[e] : e;
	}
	get logHandler() {
		return this._logHandler;
	}
	set logHandler(e) {
		if (typeof e != 'function')
			throw new TypeError('Value assigned to `logHandler` must be a function');
		this._logHandler = e;
	}
	get userLogHandler() {
		return this._userLogHandler;
	}
	set userLogHandler(e) {
		this._userLogHandler = e;
	}
	debug(...e) {
		this._userLogHandler && this._userLogHandler(this, b.DEBUG, ...e),
			this._logHandler(this, b.DEBUG, ...e);
	}
	log(...e) {
		this._userLogHandler && this._userLogHandler(this, b.VERBOSE, ...e),
			this._logHandler(this, b.VERBOSE, ...e);
	}
	info(...e) {
		this._userLogHandler && this._userLogHandler(this, b.INFO, ...e),
			this._logHandler(this, b.INFO, ...e);
	}
	warn(...e) {
		this._userLogHandler && this._userLogHandler(this, b.WARN, ...e),
			this._logHandler(this, b.WARN, ...e);
	}
	error(...e) {
		this._userLogHandler && this._userLogHandler(this, b.ERROR, ...e),
			this._logHandler(this, b.ERROR, ...e);
	}
}
const Zd = (n, e) => e.some((t) => n instanceof t);
let na, ra;
function ef() {
	return na || (na = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function tf() {
	return (
		ra ||
		(ra = [
			IDBCursor.prototype.advance,
			IDBCursor.prototype.continue,
			IDBCursor.prototype.continuePrimaryKey
		])
	);
}
const $c = new WeakMap(),
	ts = new WeakMap(),
	zc = new WeakMap(),
	Oi = new WeakMap(),
	Fs = new WeakMap();
function nf(n) {
	const e = new Promise((t, r) => {
		const i = () => {
				n.removeEventListener('success', s), n.removeEventListener('error', o);
			},
			s = () => {
				t(Je(n.result)), i();
			},
			o = () => {
				r(n.error), i();
			};
		n.addEventListener('success', s), n.addEventListener('error', o);
	});
	return (
		e
			.then((t) => {
				t instanceof IDBCursor && $c.set(t, n);
			})
			.catch(() => {}),
		Fs.set(e, n),
		e
	);
}
function rf(n) {
	if (ts.has(n)) return;
	const e = new Promise((t, r) => {
		const i = () => {
				n.removeEventListener('complete', s),
					n.removeEventListener('error', o),
					n.removeEventListener('abort', o);
			},
			s = () => {
				t(), i();
			},
			o = () => {
				r(n.error || new DOMException('AbortError', 'AbortError')), i();
			};
		n.addEventListener('complete', s),
			n.addEventListener('error', o),
			n.addEventListener('abort', o);
	});
	ts.set(n, e);
}
let ns = {
	get(n, e, t) {
		if (n instanceof IDBTransaction) {
			if (e === 'done') return ts.get(n);
			if (e === 'objectStoreNames') return n.objectStoreNames || zc.get(n);
			if (e === 'store')
				return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
		}
		return Je(n[e]);
	},
	set(n, e, t) {
		return (n[e] = t), !0;
	},
	has(n, e) {
		return n instanceof IDBTransaction && (e === 'done' || e === 'store') ? !0 : e in n;
	}
};
function sf(n) {
	ns = n(ns);
}
function of(n) {
	return n === IDBDatabase.prototype.transaction &&
		!('objectStoreNames' in IDBTransaction.prototype)
		? function (e, ...t) {
				const r = n.call(Li(this), e, ...t);
				return zc.set(r, e.sort ? e.sort() : [e]), Je(r);
			}
		: tf().includes(n)
			? function (...e) {
					return n.apply(Li(this), e), Je($c.get(this));
				}
			: function (...e) {
					return Je(n.apply(Li(this), e));
				};
}
function af(n) {
	return typeof n == 'function'
		? of(n)
		: (n instanceof IDBTransaction && rf(n), Zd(n, ef()) ? new Proxy(n, ns) : n);
}
function Je(n) {
	if (n instanceof IDBRequest) return nf(n);
	if (Oi.has(n)) return Oi.get(n);
	const e = af(n);
	return e !== n && (Oi.set(n, e), Fs.set(e, n)), e;
}
const Li = (n) => Fs.get(n);
function Hc(n, e, { blocked: t, upgrade: r, blocking: i, terminated: s } = {}) {
	const o = indexedDB.open(n, e),
		a = Je(o);
	return (
		r &&
			o.addEventListener('upgradeneeded', (c) => {
				r(Je(o.result), c.oldVersion, c.newVersion, Je(o.transaction), c);
			}),
		t && o.addEventListener('blocked', (c) => t(c.oldVersion, c.newVersion, c)),
		a
			.then((c) => {
				s && c.addEventListener('close', () => s()),
					i && c.addEventListener('versionchange', (u) => i(u.oldVersion, u.newVersion, u));
			})
			.catch(() => {}),
		a
	);
}
const cf = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
	uf = ['put', 'add', 'delete', 'clear'],
	Mi = new Map();
function ia(n, e) {
	if (!(n instanceof IDBDatabase && !(e in n) && typeof e == 'string')) return;
	if (Mi.get(e)) return Mi.get(e);
	const t = e.replace(/FromIndex$/, ''),
		r = e !== t,
		i = uf.includes(t);
	if (!(t in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || cf.includes(t))) return;
	const s = async function (o, ...a) {
		const c = this.transaction(o, i ? 'readwrite' : 'readonly');
		let u = c.store;
		return r && (u = u.index(a.shift())), (await Promise.all([u[t](...a), i && c.done]))[0];
	};
	return Mi.set(e, s), s;
}
sf((n) => ({
	...n,
	get: (e, t, r) => ia(e, t) || n.get(e, t, r),
	has: (e, t) => !!ia(e, t) || n.has(e, t)
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lf {
	constructor(e) {
		this.container = e;
	}
	getPlatformInfoString() {
		return this.container
			.getProviders()
			.map((t) => {
				if (hf(t)) {
					const r = t.getImmediate();
					return `${r.library}/${r.version}`;
				} else return null;
			})
			.filter((t) => t)
			.join(' ');
	}
}
function hf(n) {
	const e = n.getComponent();
	return (e == null ? void 0 : e.type) === 'VERSION';
}
const rs = '@firebase/app',
	sa = '0.10.0';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mt = new Yr('@firebase/app'),
	df = '@firebase/app-compat',
	ff = '@firebase/analytics-compat',
	pf = '@firebase/analytics',
	gf = '@firebase/app-check-compat',
	mf = '@firebase/app-check',
	_f = '@firebase/auth',
	yf = '@firebase/auth-compat',
	vf = '@firebase/database',
	Ef = '@firebase/database-compat',
	If = '@firebase/functions',
	Tf = '@firebase/functions-compat',
	wf = '@firebase/installations',
	Af = '@firebase/installations-compat',
	Rf = '@firebase/messaging',
	Sf = '@firebase/messaging-compat',
	Pf = '@firebase/performance',
	Cf = '@firebase/performance-compat',
	bf = '@firebase/remote-config',
	kf = '@firebase/remote-config-compat',
	Df = '@firebase/storage',
	Vf = '@firebase/storage-compat',
	Nf = '@firebase/firestore',
	Of = '@firebase/firestore-compat',
	Lf = 'firebase',
	Mf = '10.10.0';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const is = '[DEFAULT]',
	xf = {
		[rs]: 'fire-core',
		[df]: 'fire-core-compat',
		[pf]: 'fire-analytics',
		[ff]: 'fire-analytics-compat',
		[mf]: 'fire-app-check',
		[gf]: 'fire-app-check-compat',
		[_f]: 'fire-auth',
		[yf]: 'fire-auth-compat',
		[vf]: 'fire-rtdb',
		[Ef]: 'fire-rtdb-compat',
		[If]: 'fire-fn',
		[Tf]: 'fire-fn-compat',
		[wf]: 'fire-iid',
		[Af]: 'fire-iid-compat',
		[Rf]: 'fire-fcm',
		[Sf]: 'fire-fcm-compat',
		[Pf]: 'fire-perf',
		[Cf]: 'fire-perf-compat',
		[bf]: 'fire-rc',
		[kf]: 'fire-rc-compat',
		[Df]: 'fire-gcs',
		[Vf]: 'fire-gcs-compat',
		[Nf]: 'fire-fst',
		[Of]: 'fire-fst-compat',
		'fire-js': 'fire-js',
		[Lf]: 'fire-js-all'
	};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _t = new Map(),
	ss = new Map(),
	os = new Map();
function oa(n, e) {
	try {
		n.container.addComponent(e);
	} catch (t) {
		mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`, t);
	}
}
function De(n) {
	const e = n.name;
	if (os.has(e)) return mt.debug(`There were multiple attempts to register component ${e}.`), !1;
	os.set(e, n);
	for (const t of _t.values()) oa(t, n);
	for (const t of ss.values()) oa(t, n);
	return !0;
}
function zn(n, e) {
	const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
	return t && t.triggerHeartbeat(), n.container.getProvider(e);
}
function we(n) {
	return n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ff = {
		'no-app': "No Firebase App '{$appName}' has been created - call initializeApp() first",
		'bad-app-name': "Illegal App name: '{$appName}'",
		'duplicate-app':
			"Firebase App named '{$appName}' already exists with different options or config",
		'app-deleted': "Firebase App named '{$appName}' already deleted",
		'server-app-deleted': 'Firebase Server App has been deleted',
		'no-options': 'Need to provide options, when not being deployed to hosting via source.',
		'invalid-app-argument':
			'firebase.{$appName}() takes either no argument or a Firebase App instance.',
		'invalid-log-argument': 'First argument to `onLog` must be null or a function.',
		'idb-open': 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-get': 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-set': 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
		'idb-delete':
			'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
		'finalization-registry-not-supported':
			'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
		'invalid-server-app-environment': 'FirebaseServerApp is not for use in browser environments.'
	},
	Ye = new St('app', 'Firebase', Ff);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uf {
	constructor(e, t, r) {
		(this._isDeleted = !1),
			(this._options = Object.assign({}, e)),
			(this._config = Object.assign({}, t)),
			(this._name = t.name),
			(this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
			(this._container = r),
			this.container.addComponent(new _e('app', () => this, 'PUBLIC'));
	}
	get automaticDataCollectionEnabled() {
		return this.checkDestroyed(), this._automaticDataCollectionEnabled;
	}
	set automaticDataCollectionEnabled(e) {
		this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
	}
	get name() {
		return this.checkDestroyed(), this._name;
	}
	get options() {
		return this.checkDestroyed(), this._options;
	}
	get config() {
		return this.checkDestroyed(), this._config;
	}
	get container() {
		return this._container;
	}
	get isDeleted() {
		return this._isDeleted;
	}
	set isDeleted(e) {
		this._isDeleted = e;
	}
	checkDestroyed() {
		if (this.isDeleted) throw Ye.create('app-deleted', { appName: this._name });
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xt = Mf;
function as(n, e = {}) {
	let t = n;
	typeof e != 'object' && (e = { name: e });
	const r = Object.assign({ name: is, automaticDataCollectionEnabled: !1 }, e),
		i = r.name;
	if (typeof i != 'string' || !i) throw Ye.create('bad-app-name', { appName: String(i) });
	if ((t || (t = Uc()), !t)) throw Ye.create('no-options');
	const s = _t.get(i);
	if (s) {
		if (br(t, s.options) && br(r, s.config)) return s;
		throw Ye.create('duplicate-app', { appName: i });
	}
	const o = new Gd(i);
	for (const c of os.values()) o.addComponent(c);
	const a = new Uf(t, r, o);
	return _t.set(i, a), a;
}
function Us(n = is) {
	const e = _t.get(n);
	if (!e && n === is && Uc()) return as();
	if (!e) throw Ye.create('no-app', { appName: n });
	return e;
}
function Bf() {
	return Array.from(_t.values());
}
async function jf(n) {
	let e = !1;
	const t = n.name;
	_t.has(t)
		? ((e = !0), _t.delete(t))
		: ss.has(t) && n.decRefCount() <= 0 && (ss.delete(t), (e = !0)),
		e && (await Promise.all(n.container.getProviders().map((r) => r.delete())), (n.isDeleted = !0));
}
function pe(n, e, t) {
	var r;
	let i = (r = xf[n]) !== null && r !== void 0 ? r : n;
	t && (i += `-${t}`);
	const s = i.match(/\s|\//),
		o = e.match(/\s|\//);
	if (s || o) {
		const a = [`Unable to register library "${i}" with version "${e}":`];
		s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
			s && o && a.push('and'),
			o && a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
			mt.warn(a.join(' '));
		return;
	}
	De(new _e(`${i}-version`, () => ({ library: i, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qf = 'firebase-heartbeat-database',
	$f = 1,
	Sn = 'firebase-heartbeat-store';
let xi = null;
function Wc() {
	return (
		xi ||
			(xi = Hc(qf, $f, {
				upgrade: (n, e) => {
					switch (e) {
						case 0:
							try {
								n.createObjectStore(Sn);
							} catch (t) {
								console.warn(t);
							}
					}
				}
			}).catch((n) => {
				throw Ye.create('idb-open', { originalErrorMessage: n.message });
			})),
		xi
	);
}
async function zf(n) {
	try {
		const t = (await Wc()).transaction(Sn),
			r = await t.objectStore(Sn).get(Kc(n));
		return await t.done, r;
	} catch (e) {
		if (e instanceof Ee) mt.warn(e.message);
		else {
			const t = Ye.create('idb-get', { originalErrorMessage: e == null ? void 0 : e.message });
			mt.warn(t.message);
		}
	}
}
async function aa(n, e) {
	try {
		const r = (await Wc()).transaction(Sn, 'readwrite');
		await r.objectStore(Sn).put(e, Kc(n)), await r.done;
	} catch (t) {
		if (t instanceof Ee) mt.warn(t.message);
		else {
			const r = Ye.create('idb-set', { originalErrorMessage: t == null ? void 0 : t.message });
			mt.warn(r.message);
		}
	}
}
function Kc(n) {
	return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hf = 1024,
	Wf = 30 * 24 * 60 * 60 * 1e3;
class Kf {
	constructor(e) {
		(this.container = e), (this._heartbeatsCache = null);
		const t = this.container.getProvider('app').getImmediate();
		(this._storage = new Qf(t)),
			(this._heartbeatsCachePromise = this._storage
				.read()
				.then((r) => ((this._heartbeatsCache = r), r)));
	}
	async triggerHeartbeat() {
		var e, t;
		const i = this.container.getProvider('platform-logger').getImmediate().getPlatformInfoString(),
			s = ca();
		if (
			!(
				((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null &&
				((this._heartbeatsCache = await this._heartbeatsCachePromise),
				((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null)
			) &&
			!(
				this._heartbeatsCache.lastSentHeartbeatDate === s ||
				this._heartbeatsCache.heartbeats.some((o) => o.date === s)
			)
		)
			return (
				this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
				(this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((o) => {
					const a = new Date(o.date).valueOf();
					return Date.now() - a <= Wf;
				})),
				this._storage.overwrite(this._heartbeatsCache)
			);
	}
	async getHeartbeatsHeader() {
		var e;
		if (
			(this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
			((e = this._heartbeatsCache) === null || e === void 0 ? void 0 : e.heartbeats) == null ||
				this._heartbeatsCache.heartbeats.length === 0)
		)
			return '';
		const t = ca(),
			{ heartbeatsToSend: r, unsentEntries: i } = Gf(this._heartbeatsCache.heartbeats),
			s = Cr(JSON.stringify({ version: 2, heartbeats: r }));
		return (
			(this._heartbeatsCache.lastSentHeartbeatDate = t),
			i.length > 0
				? ((this._heartbeatsCache.heartbeats = i),
					await this._storage.overwrite(this._heartbeatsCache))
				: ((this._heartbeatsCache.heartbeats = []), this._storage.overwrite(this._heartbeatsCache)),
			s
		);
	}
}
function ca() {
	return new Date().toISOString().substring(0, 10);
}
function Gf(n, e = Hf) {
	const t = [];
	let r = n.slice();
	for (const i of n) {
		const s = t.find((o) => o.agent === i.agent);
		if (s) {
			if ((s.dates.push(i.date), ua(t) > e)) {
				s.dates.pop();
				break;
			}
		} else if ((t.push({ agent: i.agent, dates: [i.date] }), ua(t) > e)) {
			t.pop();
			break;
		}
		r = r.slice(1);
	}
	return { heartbeatsToSend: t, unsentEntries: r };
}
class Qf {
	constructor(e) {
		(this.app = e), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
	}
	async runIndexedDBEnvironmentCheck() {
		return xs()
			? qc()
					.then(() => !0)
					.catch(() => !1)
			: !1;
	}
	async read() {
		if (await this._canUseIndexedDBPromise) {
			const t = await zf(this.app);
			return t != null && t.heartbeats ? t : { heartbeats: [] };
		} else return { heartbeats: [] };
	}
	async overwrite(e) {
		var t;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return aa(this.app, {
				lastSentHeartbeatDate:
					(t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
				heartbeats: e.heartbeats
			});
		} else return;
	}
	async add(e) {
		var t;
		if (await this._canUseIndexedDBPromise) {
			const i = await this.read();
			return aa(this.app, {
				lastSentHeartbeatDate:
					(t = e.lastSentHeartbeatDate) !== null && t !== void 0 ? t : i.lastSentHeartbeatDate,
				heartbeats: [...i.heartbeats, ...e.heartbeats]
			});
		} else return;
	}
}
function ua(n) {
	return Cr(JSON.stringify({ version: 2, heartbeats: n })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jf(n) {
	De(new _e('platform-logger', (e) => new lf(e), 'PRIVATE')),
		De(new _e('heartbeat', (e) => new Kf(e), 'PRIVATE')),
		pe(rs, sa, n),
		pe(rs, sa, 'esm2017'),
		pe('fire-js', '');
}
Jf('');
var Yf = 'firebase',
	Xf = '10.10.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ pe(Yf, Xf, 'app');
const Gc = '@firebase/installations',
	Bs = '0.6.6';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qc = 1e4,
	Jc = `w:${Bs}`,
	Yc = 'FIS_v2',
	Zf = 'https://firebaseinstallations.googleapis.com/v1',
	ep = 60 * 60 * 1e3,
	tp = 'installations',
	np = 'Installations';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rp = {
		'missing-app-config-values': 'Missing App configuration value: "{$valueName}"',
		'not-registered': 'Firebase Installation is not registered.',
		'installation-not-found': 'Firebase Installation not found.',
		'request-failed':
			'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
		'app-offline': 'Could not process request. Application offline.',
		'delete-pending-registration':
			"Can't delete installation while there is a pending registration request."
	},
	yt = new St(tp, np, rp);
function Xc(n) {
	return n instanceof Ee && n.code.includes('request-failed');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zc({ projectId: n }) {
	return `${Zf}/projects/${n}/installations`;
}
function eu(n) {
	return { token: n.token, requestStatus: 2, expiresIn: sp(n.expiresIn), creationTime: Date.now() };
}
async function tu(n, e) {
	const r = (await e.json()).error;
	return yt.create('request-failed', {
		requestName: n,
		serverCode: r.code,
		serverMessage: r.message,
		serverStatus: r.status
	});
}
function nu({ apiKey: n }) {
	return new Headers({
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'x-goog-api-key': n
	});
}
function ip(n, { refreshToken: e }) {
	const t = nu(n);
	return t.append('Authorization', op(e)), t;
}
async function ru(n) {
	const e = await n();
	return e.status >= 500 && e.status < 600 ? n() : e;
}
function sp(n) {
	return Number(n.replace('s', '000'));
}
function op(n) {
	return `${Yc} ${n}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ap({ appConfig: n, heartbeatServiceProvider: e }, { fid: t }) {
	const r = Zc(n),
		i = nu(n),
		s = e.getImmediate({ optional: !0 });
	if (s) {
		const u = await s.getHeartbeatsHeader();
		u && i.append('x-firebase-client', u);
	}
	const o = { fid: t, authVersion: Yc, appId: n.appId, sdkVersion: Jc },
		a = { method: 'POST', headers: i, body: JSON.stringify(o) },
		c = await ru(() => fetch(r, a));
	if (c.ok) {
		const u = await c.json();
		return {
			fid: u.fid || t,
			registrationStatus: 2,
			refreshToken: u.refreshToken,
			authToken: eu(u.authToken)
		};
	} else throw await tu('Create Installation', c);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iu(n) {
	return new Promise((e) => {
		setTimeout(e, n);
	});
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cp(n) {
	return btoa(String.fromCharCode(...n))
		.replace(/\+/g, '-')
		.replace(/\//g, '_');
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const up = /^[cdef][\w-]{21}$/,
	cs = '';
function lp() {
	try {
		const n = new Uint8Array(17);
		(self.crypto || self.msCrypto).getRandomValues(n), (n[0] = 112 + (n[0] % 16));
		const t = hp(n);
		return up.test(t) ? t : cs;
	} catch {
		return cs;
	}
}
function hp(n) {
	return cp(n).substr(0, 22);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Xr(n) {
	return `${n.appName}!${n.appId}`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const su = new Map();
function ou(n, e) {
	const t = Xr(n);
	au(t, e), dp(t, e);
}
function au(n, e) {
	const t = su.get(n);
	if (t) for (const r of t) r(e);
}
function dp(n, e) {
	const t = fp();
	t && t.postMessage({ key: n, fid: e }), pp();
}
let lt = null;
function fp() {
	return (
		!lt &&
			'BroadcastChannel' in self &&
			((lt = new BroadcastChannel('[Firebase] FID Change')),
			(lt.onmessage = (n) => {
				au(n.data.key, n.data.fid);
			})),
		lt
	);
}
function pp() {
	su.size === 0 && lt && (lt.close(), (lt = null));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gp = 'firebase-installations-database',
	mp = 1,
	vt = 'firebase-installations-store';
let Fi = null;
function js() {
	return (
		Fi ||
			(Fi = Hc(gp, mp, {
				upgrade: (n, e) => {
					switch (e) {
						case 0:
							n.createObjectStore(vt);
					}
				}
			})),
		Fi
	);
}
async function kr(n, e) {
	const t = Xr(n),
		i = (await js()).transaction(vt, 'readwrite'),
		s = i.objectStore(vt),
		o = await s.get(t);
	return await s.put(e, t), await i.done, (!o || o.fid !== e.fid) && ou(n, e.fid), e;
}
async function cu(n) {
	const e = Xr(n),
		r = (await js()).transaction(vt, 'readwrite');
	await r.objectStore(vt).delete(e), await r.done;
}
async function Zr(n, e) {
	const t = Xr(n),
		i = (await js()).transaction(vt, 'readwrite'),
		s = i.objectStore(vt),
		o = await s.get(t),
		a = e(o);
	return (
		a === void 0 ? await s.delete(t) : await s.put(a, t),
		await i.done,
		a && (!o || o.fid !== a.fid) && ou(n, a.fid),
		a
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qs(n) {
	let e;
	const t = await Zr(n.appConfig, (r) => {
		const i = _p(r),
			s = yp(n, i);
		return (e = s.registrationPromise), s.installationEntry;
	});
	return t.fid === cs
		? { installationEntry: await e }
		: { installationEntry: t, registrationPromise: e };
}
function _p(n) {
	const e = n || { fid: lp(), registrationStatus: 0 };
	return uu(e);
}
function yp(n, e) {
	if (e.registrationStatus === 0) {
		if (!navigator.onLine) {
			const i = Promise.reject(yt.create('app-offline'));
			return { installationEntry: e, registrationPromise: i };
		}
		const t = { fid: e.fid, registrationStatus: 1, registrationTime: Date.now() },
			r = vp(n, t);
		return { installationEntry: t, registrationPromise: r };
	} else
		return e.registrationStatus === 1
			? { installationEntry: e, registrationPromise: Ep(n) }
			: { installationEntry: e };
}
async function vp(n, e) {
	try {
		const t = await ap(n, e);
		return kr(n.appConfig, t);
	} catch (t) {
		throw (
			(Xc(t) && t.customData.serverCode === 409
				? await cu(n.appConfig)
				: await kr(n.appConfig, { fid: e.fid, registrationStatus: 0 }),
			t)
		);
	}
}
async function Ep(n) {
	let e = await la(n.appConfig);
	for (; e.registrationStatus === 1; ) await iu(100), (e = await la(n.appConfig));
	if (e.registrationStatus === 0) {
		const { installationEntry: t, registrationPromise: r } = await qs(n);
		return r || t;
	}
	return e;
}
function la(n) {
	return Zr(n, (e) => {
		if (!e) throw yt.create('installation-not-found');
		return uu(e);
	});
}
function uu(n) {
	return Ip(n) ? { fid: n.fid, registrationStatus: 0 } : n;
}
function Ip(n) {
	return n.registrationStatus === 1 && n.registrationTime + Qc < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Tp({ appConfig: n, heartbeatServiceProvider: e }, t) {
	const r = wp(n, t),
		i = ip(n, t),
		s = e.getImmediate({ optional: !0 });
	if (s) {
		const u = await s.getHeartbeatsHeader();
		u && i.append('x-firebase-client', u);
	}
	const o = { installation: { sdkVersion: Jc, appId: n.appId } },
		a = { method: 'POST', headers: i, body: JSON.stringify(o) },
		c = await ru(() => fetch(r, a));
	if (c.ok) {
		const u = await c.json();
		return eu(u);
	} else throw await tu('Generate Auth Token', c);
}
function wp(n, { fid: e }) {
	return `${Zc(n)}/${e}/authTokens:generate`;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $s(n, e = !1) {
	let t;
	const r = await Zr(n.appConfig, (s) => {
		if (!lu(s)) throw yt.create('not-registered');
		const o = s.authToken;
		if (!e && Sp(o)) return s;
		if (o.requestStatus === 1) return (t = Ap(n, e)), s;
		{
			if (!navigator.onLine) throw yt.create('app-offline');
			const a = Cp(s);
			return (t = Rp(n, a)), a;
		}
	});
	return t ? await t : r.authToken;
}
async function Ap(n, e) {
	let t = await ha(n.appConfig);
	for (; t.authToken.requestStatus === 1; ) await iu(100), (t = await ha(n.appConfig));
	const r = t.authToken;
	return r.requestStatus === 0 ? $s(n, e) : r;
}
function ha(n) {
	return Zr(n, (e) => {
		if (!lu(e)) throw yt.create('not-registered');
		const t = e.authToken;
		return bp(t) ? Object.assign(Object.assign({}, e), { authToken: { requestStatus: 0 } }) : e;
	});
}
async function Rp(n, e) {
	try {
		const t = await Tp(n, e),
			r = Object.assign(Object.assign({}, e), { authToken: t });
		return await kr(n.appConfig, r), t;
	} catch (t) {
		if (Xc(t) && (t.customData.serverCode === 401 || t.customData.serverCode === 404))
			await cu(n.appConfig);
		else {
			const r = Object.assign(Object.assign({}, e), { authToken: { requestStatus: 0 } });
			await kr(n.appConfig, r);
		}
		throw t;
	}
}
function lu(n) {
	return n !== void 0 && n.registrationStatus === 2;
}
function Sp(n) {
	return n.requestStatus === 2 && !Pp(n);
}
function Pp(n) {
	const e = Date.now();
	return e < n.creationTime || n.creationTime + n.expiresIn < e + ep;
}
function Cp(n) {
	const e = { requestStatus: 1, requestTime: Date.now() };
	return Object.assign(Object.assign({}, n), { authToken: e });
}
function bp(n) {
	return n.requestStatus === 1 && n.requestTime + Qc < Date.now();
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function kp(n) {
	const e = n,
		{ installationEntry: t, registrationPromise: r } = await qs(e);
	return r ? r.catch(console.error) : $s(e).catch(console.error), t.fid;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Dp(n, e = !1) {
	const t = n;
	return await Vp(t), (await $s(t, e)).token;
}
async function Vp(n) {
	const { registrationPromise: e } = await qs(n);
	e && (await e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Np(n) {
	if (!n || !n.options) throw Ui('App Configuration');
	if (!n.name) throw Ui('App Name');
	const e = ['projectId', 'apiKey', 'appId'];
	for (const t of e) if (!n.options[t]) throw Ui(t);
	return {
		appName: n.name,
		projectId: n.options.projectId,
		apiKey: n.options.apiKey,
		appId: n.options.appId
	};
}
function Ui(n) {
	return yt.create('missing-app-config-values', { valueName: n });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const hu = 'installations',
	Op = 'installations-internal',
	Lp = (n) => {
		const e = n.getProvider('app').getImmediate(),
			t = Np(e),
			r = zn(e, 'heartbeat');
		return { app: e, appConfig: t, heartbeatServiceProvider: r, _delete: () => Promise.resolve() };
	},
	Mp = (n) => {
		const e = n.getProvider('app').getImmediate(),
			t = zn(e, hu).getImmediate();
		return { getId: () => kp(t), getToken: (i) => Dp(t, i) };
	};
function xp() {
	De(new _e(hu, Lp, 'PUBLIC')), De(new _e(Op, Mp, 'PRIVATE'));
}
xp();
pe(Gc, Bs);
pe(Gc, Bs, 'esm2017');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const da = 'analytics',
	Fp = 'firebase_id',
	Up = 'origin',
	Bp = 60 * 1e3,
	jp = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig',
	zs = 'https://www.googletagmanager.com/gtag/js';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ae = new Yr('@firebase/analytics');
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qp = {
		'already-exists':
			'A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.',
		'already-initialized':
			'initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.',
		'already-initialized-settings':
			'Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.',
		'interop-component-reg-failed':
			'Firebase Analytics Interop Component failed to instantiate: {$reason}',
		'invalid-analytics-context':
			'Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}',
		'indexeddb-unavailable':
			'IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}',
		'fetch-throttle':
			'The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
		'config-fetch-failed': 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
		'no-api-key':
			'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
		'no-app-id':
			'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
		'no-client-id': 'The "client_id" field is empty.',
		'invalid-gtag-resource': 'Trusted Types detected an invalid gtag resource: {$gtagURL}.'
	},
	ge = new St('analytics', 'Analytics', qp);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $p(n) {
	if (!n.startsWith(zs)) {
		const e = ge.create('invalid-gtag-resource', { gtagURL: n });
		return ae.warn(e.message), '';
	}
	return n;
}
function du(n) {
	return Promise.all(n.map((e) => e.catch((t) => t)));
}
function zp(n, e) {
	let t;
	return window.trustedTypes && (t = window.trustedTypes.createPolicy(n, e)), t;
}
function Hp(n, e) {
	const t = zp('firebase-js-sdk-policy', { createScriptURL: $p }),
		r = document.createElement('script'),
		i = `${zs}?l=${n}&id=${e}`;
	(r.src = t ? (t == null ? void 0 : t.createScriptURL(i)) : i),
		(r.async = !0),
		document.head.appendChild(r);
}
function Wp(n) {
	let e = [];
	return Array.isArray(window[n]) ? (e = window[n]) : (window[n] = e), e;
}
async function Kp(n, e, t, r, i, s) {
	const o = r[i];
	try {
		if (o) await e[o];
		else {
			const c = (await du(t)).find((u) => u.measurementId === i);
			c && (await e[c.appId]);
		}
	} catch (a) {
		ae.error(a);
	}
	n('config', i, s);
}
async function Gp(n, e, t, r, i) {
	try {
		let s = [];
		if (i && i.send_to) {
			let o = i.send_to;
			Array.isArray(o) || (o = [o]);
			const a = await du(t);
			for (const c of o) {
				const u = a.find((h) => h.measurementId === c),
					l = u && e[u.appId];
				if (l) s.push(l);
				else {
					s = [];
					break;
				}
			}
		}
		s.length === 0 && (s = Object.values(e)), await Promise.all(s), n('event', r, i || {});
	} catch (s) {
		ae.error(s);
	}
}
function Qp(n, e, t, r) {
	async function i(s, ...o) {
		try {
			if (s === 'event') {
				const [a, c] = o;
				await Gp(n, e, t, a, c);
			} else if (s === 'config') {
				const [a, c] = o;
				await Kp(n, e, t, r, a, c);
			} else if (s === 'consent') {
				const [a] = o;
				n('consent', 'update', a);
			} else if (s === 'get') {
				const [a, c, u] = o;
				n('get', a, c, u);
			} else if (s === 'set') {
				const [a] = o;
				n('set', a);
			} else n(s, ...o);
		} catch (a) {
			ae.error(a);
		}
	}
	return i;
}
function Jp(n, e, t, r, i) {
	let s = function (...o) {
		window[r].push(arguments);
	};
	return (
		window[i] && typeof window[i] == 'function' && (s = window[i]),
		(window[i] = Qp(s, n, e, t)),
		{ gtagCore: s, wrappedGtag: window[i] }
	);
}
function Yp(n) {
	const e = window.document.getElementsByTagName('script');
	for (const t of Object.values(e)) if (t.src && t.src.includes(zs) && t.src.includes(n)) return t;
	return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xp = 30,
	Zp = 1e3;
class eg {
	constructor(e = {}, t = Zp) {
		(this.throttleMetadata = e), (this.intervalMillis = t);
	}
	getThrottleMetadata(e) {
		return this.throttleMetadata[e];
	}
	setThrottleMetadata(e, t) {
		this.throttleMetadata[e] = t;
	}
	deleteThrottleMetadata(e) {
		delete this.throttleMetadata[e];
	}
}
const fu = new eg();
function tg(n) {
	return new Headers({ Accept: 'application/json', 'x-goog-api-key': n });
}
async function ng(n) {
	var e;
	const { appId: t, apiKey: r } = n,
		i = { method: 'GET', headers: tg(r) },
		s = jp.replace('{app-id}', t),
		o = await fetch(s, i);
	if (o.status !== 200 && o.status !== 304) {
		let a = '';
		try {
			const c = await o.json();
			!((e = c.error) === null || e === void 0) && e.message && (a = c.error.message);
		} catch {}
		throw ge.create('config-fetch-failed', { httpStatus: o.status, responseMessage: a });
	}
	return o.json();
}
async function rg(n, e = fu, t) {
	const { appId: r, apiKey: i, measurementId: s } = n.options;
	if (!r) throw ge.create('no-app-id');
	if (!i) {
		if (s) return { measurementId: s, appId: r };
		throw ge.create('no-api-key');
	}
	const o = e.getThrottleMetadata(r) || { backoffCount: 0, throttleEndTimeMillis: Date.now() },
		a = new og();
	return (
		setTimeout(
			async () => {
				a.abort();
			},
			t !== void 0 ? t : Bp
		),
		pu({ appId: r, apiKey: i, measurementId: s }, o, a, e)
	);
}
async function pu(n, { throttleEndTimeMillis: e, backoffCount: t }, r, i = fu) {
	var s;
	const { appId: o, measurementId: a } = n;
	try {
		await ig(r, e);
	} catch (c) {
		if (a)
			return (
				ae.warn(
					`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c == null ? void 0 : c.message}]`
				),
				{ appId: o, measurementId: a }
			);
		throw c;
	}
	try {
		const c = await ng(n);
		return i.deleteThrottleMetadata(o), c;
	} catch (c) {
		const u = c;
		if (!sg(u)) {
			if ((i.deleteThrottleMetadata(o), a))
				return (
					ae.warn(
						`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u == null ? void 0 : u.message}]`
					),
					{ appId: o, measurementId: a }
				);
			throw c;
		}
		const l =
				Number(
					(s = u == null ? void 0 : u.customData) === null || s === void 0 ? void 0 : s.httpStatus
				) === 503
					? ta(t, i.intervalMillis, Xp)
					: ta(t, i.intervalMillis),
			h = { throttleEndTimeMillis: Date.now() + l, backoffCount: t + 1 };
		return (
			i.setThrottleMetadata(o, h),
			ae.debug(`Calling attemptFetch again in ${l} millis`),
			pu(n, h, r, i)
		);
	}
}
function ig(n, e) {
	return new Promise((t, r) => {
		const i = Math.max(e - Date.now(), 0),
			s = setTimeout(t, i);
		n.addEventListener(() => {
			clearTimeout(s), r(ge.create('fetch-throttle', { throttleEndTimeMillis: e }));
		});
	});
}
function sg(n) {
	if (!(n instanceof Ee) || !n.customData) return !1;
	const e = Number(n.customData.httpStatus);
	return e === 429 || e === 500 || e === 503 || e === 504;
}
class og {
	constructor() {
		this.listeners = [];
	}
	addEventListener(e) {
		this.listeners.push(e);
	}
	abort() {
		this.listeners.forEach((e) => e());
	}
}
async function ag(n, e, t, r, i) {
	if (i && i.global) {
		n('event', t, r);
		return;
	} else {
		const s = await e,
			o = Object.assign(Object.assign({}, r), { send_to: s });
		n('event', t, o);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function cg() {
	if (xs())
		try {
			await qc();
		} catch (n) {
			return (
				ae.warn(
					ge.create('indexeddb-unavailable', { errorInfo: n == null ? void 0 : n.toString() })
						.message
				),
				!1
			);
		}
	else
		return (
			ae.warn(
				ge.create('indexeddb-unavailable', {
					errorInfo: 'IndexedDB is not available in this environment.'
				}).message
			),
			!1
		);
	return !0;
}
async function ug(n, e, t, r, i, s, o) {
	var a;
	const c = rg(n);
	c
		.then((g) => {
			(t[g.measurementId] = g.appId),
				n.options.measurementId &&
					g.measurementId !== n.options.measurementId &&
					ae.warn(
						`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`
					);
		})
		.catch((g) => ae.error(g)),
		e.push(c);
	const u = cg().then((g) => {
			if (g) return r.getId();
		}),
		[l, h] = await Promise.all([c, u]);
	Yp(s) || Hp(s, l.measurementId), i('js', new Date());
	const d = (a = o == null ? void 0 : o.config) !== null && a !== void 0 ? a : {};
	return (
		(d[Up] = 'firebase'),
		(d.update = !0),
		h != null && (d[Fp] = h),
		i('config', l.measurementId, d),
		l.measurementId
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lg {
	constructor(e) {
		this.app = e;
	}
	_delete() {
		return delete yn[this.app.options.appId], Promise.resolve();
	}
}
let yn = {},
	fa = [];
const pa = {};
let Bi = 'dataLayer',
	hg = 'gtag',
	ga,
	gu,
	ma = !1;
function dg() {
	const n = [];
	if (
		(jc() && n.push('This is a browser extension environment.'),
		Nd() || n.push('Cookies are not available.'),
		n.length > 0)
	) {
		const e = n.map((r, i) => `(${i + 1}) ${r}`).join(' '),
			t = ge.create('invalid-analytics-context', { errorInfo: e });
		ae.warn(t.message);
	}
}
function fg(n, e, t) {
	dg();
	const r = n.options.appId;
	if (!r) throw ge.create('no-app-id');
	if (!n.options.apiKey)
		if (n.options.measurementId)
			ae.warn(
				`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`
			);
		else throw ge.create('no-api-key');
	if (yn[r] != null) throw ge.create('already-exists', { id: r });
	if (!ma) {
		Wp(Bi);
		const { wrappedGtag: s, gtagCore: o } = Jp(yn, fa, pa, Bi, hg);
		(gu = s), (ga = o), (ma = !0);
	}
	return (yn[r] = ug(n, fa, pa, e, ga, Bi, t)), new lg(n);
}
function pg(n, e, t, r) {
	(n = ce(n)), ag(gu, yn[n.app.options.appId], e, t, r).catch((i) => ae.error(i));
}
const _a = '@firebase/analytics',
	ya = '0.10.2';
function gg() {
	De(
		new _e(
			da,
			(e, { options: t }) => {
				const r = e.getProvider('app').getImmediate(),
					i = e.getProvider('installations-internal').getImmediate();
				return fg(r, i, t);
			},
			'PUBLIC'
		)
	),
		De(new _e('analytics-internal', n, 'PRIVATE')),
		pe(_a, ya),
		pe(_a, ya, 'esm2017');
	function n(e) {
		try {
			const t = e.getProvider(da).getImmediate();
			return { logEvent: (r, i, s) => pg(t, r, i, s) };
		} catch (t) {
			throw ge.create('interop-component-reg-failed', { reason: t });
		}
	}
}
gg();
var mg =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	_,
	Hs = Hs || {},
	w = mg || self;
function ei(n) {
	var e = typeof n;
	return (
		(e = e != 'object' ? e : n ? (Array.isArray(n) ? 'array' : e) : 'null'),
		e == 'array' || (e == 'object' && typeof n.length == 'number')
	);
}
function Hn(n) {
	var e = typeof n;
	return (e == 'object' && n != null) || e == 'function';
}
function _g(n) {
	return (Object.prototype.hasOwnProperty.call(n, ji) && n[ji]) || (n[ji] = ++yg);
}
var ji = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
	yg = 0;
function vg(n, e, t) {
	return n.call.apply(n.bind, arguments);
}
function Eg(n, e, t) {
	if (!n) throw Error();
	if (2 < arguments.length) {
		var r = Array.prototype.slice.call(arguments, 2);
		return function () {
			var i = Array.prototype.slice.call(arguments);
			return Array.prototype.unshift.apply(i, r), n.apply(e, i);
		};
	}
	return function () {
		return n.apply(e, arguments);
	};
}
function re(n, e, t) {
	return (
		Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1
			? (re = vg)
			: (re = Eg),
		re.apply(null, arguments)
	);
}
function lr(n, e) {
	var t = Array.prototype.slice.call(arguments, 1);
	return function () {
		var r = t.slice();
		return r.push.apply(r, arguments), n.apply(this, r);
	};
}
function K(n, e) {
	function t() {}
	(t.prototype = e.prototype),
		(n.$ = e.prototype),
		(n.prototype = new t()),
		(n.prototype.constructor = n),
		(n.ac = function (r, i, s) {
			for (var o = Array(arguments.length - 2), a = 2; a < arguments.length; a++)
				o[a - 2] = arguments[a];
			return e.prototype[i].apply(r, o);
		});
}
function nt() {
	(this.s = this.s), (this.o = this.o);
}
var Ig = 0;
nt.prototype.s = !1;
nt.prototype.sa = function () {
	!this.s && ((this.s = !0), this.N(), Ig != 0) && _g(this);
};
nt.prototype.N = function () {
	if (this.o) for (; this.o.length; ) this.o.shift()();
};
const mu = Array.prototype.indexOf
	? function (n, e) {
			return Array.prototype.indexOf.call(n, e, void 0);
		}
	: function (n, e) {
			if (typeof n == 'string') return typeof e != 'string' || e.length != 1 ? -1 : n.indexOf(e, 0);
			for (let t = 0; t < n.length; t++) if (t in n && n[t] === e) return t;
			return -1;
		};
function Ws(n) {
	const e = n.length;
	if (0 < e) {
		const t = Array(e);
		for (let r = 0; r < e; r++) t[r] = n[r];
		return t;
	}
	return [];
}
function va(n, e) {
	for (let t = 1; t < arguments.length; t++) {
		const r = arguments[t];
		if (ei(r)) {
			const i = n.length || 0,
				s = r.length || 0;
			n.length = i + s;
			for (let o = 0; o < s; o++) n[i + o] = r[o];
		} else n.push(r);
	}
}
function ie(n, e) {
	(this.type = n), (this.g = this.target = e), (this.defaultPrevented = !1);
}
ie.prototype.h = function () {
	this.defaultPrevented = !0;
};
var Tg = (function () {
	if (!w.addEventListener || !Object.defineProperty) return !1;
	var n = !1,
		e = Object.defineProperty({}, 'passive', {
			get: function () {
				n = !0;
			}
		});
	try {
		const t = () => {};
		w.addEventListener('test', t, e), w.removeEventListener('test', t, e);
	} catch {}
	return n;
})();
function Pn(n) {
	return /^[\s\xa0]*$/.test(n);
}
function ti() {
	var n = w.navigator;
	return n && (n = n.userAgent) ? n : '';
}
function Te(n) {
	return ti().indexOf(n) != -1;
}
function Ks(n) {
	return Ks[' '](n), n;
}
Ks[' '] = function () {};
function wg(n, e) {
	var t = gm;
	return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : (t[n] = e(n));
}
var Ag = Te('Opera'),
	zt = Te('Trident') || Te('MSIE'),
	_u = Te('Edge'),
	us = _u || zt,
	yu =
		Te('Gecko') &&
		!(ti().toLowerCase().indexOf('webkit') != -1 && !Te('Edge')) &&
		!(Te('Trident') || Te('MSIE')) &&
		!Te('Edge'),
	Rg = ti().toLowerCase().indexOf('webkit') != -1 && !Te('Edge');
function vu() {
	var n = w.document;
	return n ? n.documentMode : void 0;
}
var ls;
e: {
	var qi = '',
		$i = (function () {
			var n = ti();
			if (yu) return /rv:([^\);]+)(\)|;)/.exec(n);
			if (_u) return /Edge\/([\d\.]+)/.exec(n);
			if (zt) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);
			if (Rg) return /WebKit\/(\S+)/.exec(n);
			if (Ag) return /(?:Version)[ \/]?(\S+)/.exec(n);
		})();
	if (($i && (qi = $i ? $i[1] : ''), zt)) {
		var zi = vu();
		if (zi != null && zi > parseFloat(qi)) {
			ls = String(zi);
			break e;
		}
	}
	ls = qi;
}
var hs;
if (w.document && zt) {
	var Ea = vu();
	hs = Ea || parseInt(ls, 10) || void 0;
} else hs = void 0;
var Sg = hs;
function Cn(n, e) {
	if (
		(ie.call(this, n ? n.type : ''),
		(this.relatedTarget = this.g = this.target = null),
		(this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
		(this.key = ''),
		(this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
		(this.state = null),
		(this.pointerId = 0),
		(this.pointerType = ''),
		(this.i = null),
		n)
	) {
		var t = (this.type = n.type),
			r = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : null;
		if (((this.target = n.target || n.srcElement), (this.g = e), (e = n.relatedTarget))) {
			if (yu) {
				e: {
					try {
						Ks(e.nodeName);
						var i = !0;
						break e;
					} catch {}
					i = !1;
				}
				i || (e = null);
			}
		} else t == 'mouseover' ? (e = n.fromElement) : t == 'mouseout' && (e = n.toElement);
		(this.relatedTarget = e),
			r
				? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
					(this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
					(this.screenX = r.screenX || 0),
					(this.screenY = r.screenY || 0))
				: ((this.clientX = n.clientX !== void 0 ? n.clientX : n.pageX),
					(this.clientY = n.clientY !== void 0 ? n.clientY : n.pageY),
					(this.screenX = n.screenX || 0),
					(this.screenY = n.screenY || 0)),
			(this.button = n.button),
			(this.key = n.key || ''),
			(this.ctrlKey = n.ctrlKey),
			(this.altKey = n.altKey),
			(this.shiftKey = n.shiftKey),
			(this.metaKey = n.metaKey),
			(this.pointerId = n.pointerId || 0),
			(this.pointerType =
				typeof n.pointerType == 'string' ? n.pointerType : Pg[n.pointerType] || ''),
			(this.state = n.state),
			(this.i = n),
			n.defaultPrevented && Cn.$.h.call(this);
	}
}
K(Cn, ie);
var Pg = { 2: 'touch', 3: 'pen', 4: 'mouse' };
Cn.prototype.h = function () {
	Cn.$.h.call(this);
	var n = this.i;
	n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
};
var Wn = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
	Cg = 0;
function bg(n, e, t, r, i) {
	(this.listener = n),
		(this.proxy = null),
		(this.src = e),
		(this.type = t),
		(this.capture = !!r),
		(this.la = i),
		(this.key = ++Cg),
		(this.fa = this.ia = !1);
}
function ni(n) {
	(n.fa = !0), (n.listener = null), (n.proxy = null), (n.src = null), (n.la = null);
}
function Gs(n, e, t) {
	for (const r in n) e.call(t, n[r], r, n);
}
function kg(n, e) {
	for (const t in n) e.call(void 0, n[t], t, n);
}
function Eu(n) {
	const e = {};
	for (const t in n) e[t] = n[t];
	return e;
}
const Ia =
	'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
		' '
	);
function Iu(n, e) {
	let t, r;
	for (let i = 1; i < arguments.length; i++) {
		r = arguments[i];
		for (t in r) n[t] = r[t];
		for (let s = 0; s < Ia.length; s++)
			(t = Ia[s]), Object.prototype.hasOwnProperty.call(r, t) && (n[t] = r[t]);
	}
}
function ri(n) {
	(this.src = n), (this.g = {}), (this.h = 0);
}
ri.prototype.add = function (n, e, t, r, i) {
	var s = n.toString();
	(n = this.g[s]), n || ((n = this.g[s] = []), this.h++);
	var o = fs(n, e, r, i);
	return (
		-1 < o
			? ((e = n[o]), t || (e.ia = !1))
			: ((e = new bg(e, this.src, s, !!r, i)), (e.ia = t), n.push(e)),
		e
	);
};
function ds(n, e) {
	var t = e.type;
	if (t in n.g) {
		var r = n.g[t],
			i = mu(r, e),
			s;
		(s = 0 <= i) && Array.prototype.splice.call(r, i, 1),
			s && (ni(e), n.g[t].length == 0 && (delete n.g[t], n.h--));
	}
}
function fs(n, e, t, r) {
	for (var i = 0; i < n.length; ++i) {
		var s = n[i];
		if (!s.fa && s.listener == e && s.capture == !!t && s.la == r) return i;
	}
	return -1;
}
var Qs = 'closure_lm_' + ((1e6 * Math.random()) | 0),
	Hi = {};
function Tu(n, e, t, r, i) {
	if (r && r.once) return Au(n, e, t, r, i);
	if (Array.isArray(e)) {
		for (var s = 0; s < e.length; s++) Tu(n, e[s], t, r, i);
		return null;
	}
	return (t = Xs(t)), n && n[Wn] ? n.O(e, t, Hn(r) ? !!r.capture : !!r, i) : wu(n, e, t, !1, r, i);
}
function wu(n, e, t, r, i, s) {
	if (!e) throw Error('Invalid event type');
	var o = Hn(i) ? !!i.capture : !!i,
		a = Ys(n);
	if ((a || (n[Qs] = a = new ri(n)), (t = a.add(e, t, r, o, s)), t.proxy)) return t;
	if (((r = Dg()), (t.proxy = r), (r.src = n), (r.listener = t), n.addEventListener))
		Tg || (i = o), i === void 0 && (i = !1), n.addEventListener(e.toString(), r, i);
	else if (n.attachEvent) n.attachEvent(Su(e.toString()), r);
	else if (n.addListener && n.removeListener) n.addListener(r);
	else throw Error('addEventListener and attachEvent are unavailable.');
	return t;
}
function Dg() {
	function n(t) {
		return e.call(n.src, n.listener, t);
	}
	const e = Vg;
	return n;
}
function Au(n, e, t, r, i) {
	if (Array.isArray(e)) {
		for (var s = 0; s < e.length; s++) Au(n, e[s], t, r, i);
		return null;
	}
	return (t = Xs(t)), n && n[Wn] ? n.P(e, t, Hn(r) ? !!r.capture : !!r, i) : wu(n, e, t, !0, r, i);
}
function Ru(n, e, t, r, i) {
	if (Array.isArray(e)) for (var s = 0; s < e.length; s++) Ru(n, e[s], t, r, i);
	else
		(r = Hn(r) ? !!r.capture : !!r),
			(t = Xs(t)),
			n && n[Wn]
				? ((n = n.i),
					(e = String(e).toString()),
					e in n.g &&
						((s = n.g[e]),
						(t = fs(s, t, r, i)),
						-1 < t &&
							(ni(s[t]),
							Array.prototype.splice.call(s, t, 1),
							s.length == 0 && (delete n.g[e], n.h--))))
				: n &&
					(n = Ys(n)) &&
					((e = n.g[e.toString()]),
					(n = -1),
					e && (n = fs(e, t, r, i)),
					(t = -1 < n ? e[n] : null) && Js(t));
}
function Js(n) {
	if (typeof n != 'number' && n && !n.fa) {
		var e = n.src;
		if (e && e[Wn]) ds(e.i, n);
		else {
			var t = n.type,
				r = n.proxy;
			e.removeEventListener
				? e.removeEventListener(t, r, n.capture)
				: e.detachEvent
					? e.detachEvent(Su(t), r)
					: e.addListener && e.removeListener && e.removeListener(r),
				(t = Ys(e)) ? (ds(t, n), t.h == 0 && ((t.src = null), (e[Qs] = null))) : ni(n);
		}
	}
}
function Su(n) {
	return n in Hi ? Hi[n] : (Hi[n] = 'on' + n);
}
function Vg(n, e) {
	if (n.fa) n = !0;
	else {
		e = new Cn(e, this);
		var t = n.listener,
			r = n.la || n.src;
		n.ia && Js(n), (n = t.call(r, e));
	}
	return n;
}
function Ys(n) {
	return (n = n[Qs]), n instanceof ri ? n : null;
}
var Wi = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
function Xs(n) {
	return typeof n == 'function'
		? n
		: (n[Wi] ||
				(n[Wi] = function (e) {
					return n.handleEvent(e);
				}),
			n[Wi]);
}
function W() {
	nt.call(this), (this.i = new ri(this)), (this.S = this), (this.J = null);
}
K(W, nt);
W.prototype[Wn] = !0;
W.prototype.removeEventListener = function (n, e, t, r) {
	Ru(this, n, e, t, r);
};
function X(n, e) {
	var t,
		r = n.J;
	if (r) for (t = []; r; r = r.J) t.push(r);
	if (((n = n.S), (r = e.type || e), typeof e == 'string')) e = new ie(e, n);
	else if (e instanceof ie) e.target = e.target || n;
	else {
		var i = e;
		(e = new ie(r, n)), Iu(e, i);
	}
	if (((i = !0), t))
		for (var s = t.length - 1; 0 <= s; s--) {
			var o = (e.g = t[s]);
			i = hr(o, r, !0, e) && i;
		}
	if (((o = e.g = n), (i = hr(o, r, !0, e) && i), (i = hr(o, r, !1, e) && i), t))
		for (s = 0; s < t.length; s++) (o = e.g = t[s]), (i = hr(o, r, !1, e) && i);
}
W.prototype.N = function () {
	if ((W.$.N.call(this), this.i)) {
		var n = this.i,
			e;
		for (e in n.g) {
			for (var t = n.g[e], r = 0; r < t.length; r++) ni(t[r]);
			delete n.g[e], n.h--;
		}
	}
	this.J = null;
};
W.prototype.O = function (n, e, t, r) {
	return this.i.add(String(n), e, !1, t, r);
};
W.prototype.P = function (n, e, t, r) {
	return this.i.add(String(n), e, !0, t, r);
};
function hr(n, e, t, r) {
	if (((e = n.i.g[String(e)]), !e)) return !0;
	e = e.concat();
	for (var i = !0, s = 0; s < e.length; ++s) {
		var o = e[s];
		if (o && !o.fa && o.capture == t) {
			var a = o.listener,
				c = o.la || o.src;
			o.ia && ds(n.i, o), (i = a.call(c, r) !== !1 && i);
		}
	}
	return i && !r.defaultPrevented;
}
var Zs = w.JSON.stringify;
class Ng {
	constructor(e, t) {
		(this.i = e), (this.j = t), (this.h = 0), (this.g = null);
	}
	get() {
		let e;
		return (
			0 < this.h ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null)) : (e = this.i()), e
		);
	}
}
function Og() {
	var n = eo;
	let e = null;
	return n.g && ((e = n.g), (n.g = n.g.next), n.g || (n.h = null), (e.next = null)), e;
}
class Lg {
	constructor() {
		this.h = this.g = null;
	}
	add(e, t) {
		const r = Pu.get();
		r.set(e, t), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
	}
}
var Pu = new Ng(
	() => new Mg(),
	(n) => n.reset()
);
class Mg {
	constructor() {
		this.next = this.g = this.h = null;
	}
	set(e, t) {
		(this.h = e), (this.g = t), (this.next = null);
	}
	reset() {
		this.next = this.g = this.h = null;
	}
}
function xg(n) {
	var e = 1;
	n = n.split(':');
	const t = [];
	for (; 0 < e && n.length; ) t.push(n.shift()), e--;
	return n.length && t.push(n.join(':')), t;
}
function Fg(n) {
	w.setTimeout(() => {
		throw n;
	}, 0);
}
let bn,
	kn = !1,
	eo = new Lg(),
	Cu = () => {
		const n = w.Promise.resolve(void 0);
		bn = () => {
			n.then(Ug);
		};
	};
var Ug = () => {
	for (var n; (n = Og()); ) {
		try {
			n.h.call(n.g);
		} catch (t) {
			Fg(t);
		}
		var e = Pu;
		e.j(n), 100 > e.h && (e.h++, (n.next = e.g), (e.g = n));
	}
	kn = !1;
};
function ii(n, e) {
	W.call(this),
		(this.h = n || 1),
		(this.g = e || w),
		(this.j = re(this.qb, this)),
		(this.l = Date.now());
}
K(ii, W);
_ = ii.prototype;
_.ga = !1;
_.T = null;
_.qb = function () {
	if (this.ga) {
		var n = Date.now() - this.l;
		0 < n && n < 0.8 * this.h
			? (this.T = this.g.setTimeout(this.j, this.h - n))
			: (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
				X(this, 'tick'),
				this.ga && (to(this), this.start()));
	}
};
_.start = function () {
	(this.ga = !0), this.T || ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function to(n) {
	(n.ga = !1), n.T && (n.g.clearTimeout(n.T), (n.T = null));
}
_.N = function () {
	ii.$.N.call(this), to(this), delete this.g;
};
function no(n, e, t) {
	if (typeof n == 'function') t && (n = re(n, t));
	else if (n && typeof n.handleEvent == 'function') n = re(n.handleEvent, n);
	else throw Error('Invalid listener argument');
	return 2147483647 < Number(e) ? -1 : w.setTimeout(n, e || 0);
}
function bu(n) {
	n.g = no(() => {
		(n.g = null), n.i && ((n.i = !1), bu(n));
	}, n.j);
	const e = n.h;
	(n.h = null), n.m.apply(null, e);
}
class Bg extends nt {
	constructor(e, t) {
		super(), (this.m = e), (this.j = t), (this.h = null), (this.i = !1), (this.g = null);
	}
	l(e) {
		(this.h = arguments), this.g ? (this.i = !0) : bu(this);
	}
	N() {
		super.N(), this.g && (w.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
	}
}
function Dn(n) {
	nt.call(this), (this.h = n), (this.g = {});
}
K(Dn, nt);
var Ta = [];
function ku(n, e, t, r) {
	Array.isArray(t) || (t && (Ta[0] = t.toString()), (t = Ta));
	for (var i = 0; i < t.length; i++) {
		var s = Tu(e, t[i], r || n.handleEvent, !1, n.h || n);
		if (!s) break;
		n.g[s.key] = s;
	}
}
function Du(n) {
	Gs(
		n.g,
		function (e, t) {
			this.g.hasOwnProperty(t) && Js(e);
		},
		n
	),
		(n.g = {});
}
Dn.prototype.N = function () {
	Dn.$.N.call(this), Du(this);
};
Dn.prototype.handleEvent = function () {
	throw Error('EventHandler.handleEvent not implemented');
};
function si() {
	this.g = !0;
}
si.prototype.Ea = function () {
	this.g = !1;
};
function jg(n, e, t, r, i, s) {
	n.info(function () {
		if (n.g)
			if (s)
				for (var o = '', a = s.split('&'), c = 0; c < a.length; c++) {
					var u = a[c].split('=');
					if (1 < u.length) {
						var l = u[0];
						u = u[1];
						var h = l.split('_');
						o = 2 <= h.length && h[1] == 'type' ? o + (l + '=' + u + '&') : o + (l + '=redacted&');
					}
				}
			else o = null;
		else o = s;
		return (
			'XMLHTTP REQ (' +
			r +
			') [attempt ' +
			i +
			']: ' +
			e +
			`
` +
			t +
			`
` +
			o
		);
	});
}
function qg(n, e, t, r, i, s, o) {
	n.info(function () {
		return (
			'XMLHTTP RESP (' +
			r +
			') [ attempt ' +
			i +
			']: ' +
			e +
			`
` +
			t +
			`
` +
			s +
			' ' +
			o
		);
	});
}
function Lt(n, e, t, r) {
	n.info(function () {
		return 'XMLHTTP TEXT (' + e + '): ' + zg(n, t) + (r ? ' ' + r : '');
	});
}
function $g(n, e) {
	n.info(function () {
		return 'TIMEOUT: ' + e;
	});
}
si.prototype.info = function () {};
function zg(n, e) {
	if (!n.g) return e;
	if (!e) return null;
	try {
		var t = JSON.parse(e);
		if (t) {
			for (n = 0; n < t.length; n++)
				if (Array.isArray(t[n])) {
					var r = t[n];
					if (!(2 > r.length)) {
						var i = r[1];
						if (Array.isArray(i) && !(1 > i.length)) {
							var s = i[0];
							if (s != 'noop' && s != 'stop' && s != 'close')
								for (var o = 1; o < i.length; o++) i[o] = '';
						}
					}
				}
		}
		return Zs(t);
	} catch {
		return e;
	}
}
var Pt = {},
	wa = null;
function oi() {
	return (wa = wa || new W());
}
Pt.Ta = 'serverreachability';
function Vu(n) {
	ie.call(this, Pt.Ta, n);
}
K(Vu, ie);
function Vn(n) {
	const e = oi();
	X(e, new Vu(e));
}
Pt.STAT_EVENT = 'statevent';
function Nu(n, e) {
	ie.call(this, Pt.STAT_EVENT, n), (this.stat = e);
}
K(Nu, ie);
function oe(n) {
	const e = oi();
	X(e, new Nu(e, n));
}
Pt.Ua = 'timingevent';
function Ou(n, e) {
	ie.call(this, Pt.Ua, n), (this.size = e);
}
K(Ou, ie);
function Kn(n, e) {
	if (typeof n != 'function') throw Error('Fn must not be null and must be a function');
	return w.setTimeout(function () {
		n();
	}, e);
}
var ai = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 },
	Lu = {
		wb: 'complete',
		Sb: 'success',
		Ra: 'error',
		Qa: 'abort',
		Kb: 'ready',
		Lb: 'readystatechange',
		TIMEOUT: 'timeout',
		Gb: 'incrementaldata',
		Jb: 'progress',
		zb: 'downloadprogress',
		$b: 'uploadprogress'
	};
function ro() {}
ro.prototype.h = null;
function Aa(n) {
	return n.h || (n.h = n.i());
}
function Mu() {}
var Gn = { OPEN: 'a', vb: 'b', Ra: 'c', Hb: 'd' };
function io() {
	ie.call(this, 'd');
}
K(io, ie);
function so() {
	ie.call(this, 'c');
}
K(so, ie);
var ps;
function ci() {}
K(ci, ro);
ci.prototype.g = function () {
	return new XMLHttpRequest();
};
ci.prototype.i = function () {
	return {};
};
ps = new ci();
function Qn(n, e, t, r) {
	(this.l = n),
		(this.j = e),
		(this.m = t),
		(this.W = r || 1),
		(this.U = new Dn(this)),
		(this.P = Hg),
		(n = us ? 125 : void 0),
		(this.V = new ii(n)),
		(this.I = null),
		(this.i = !1),
		(this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
		(this.F = []),
		(this.g = null),
		(this.o = 0),
		(this.s = this.v = null),
		(this.ca = -1),
		(this.J = !1),
		(this.O = 0),
		(this.M = null),
		(this.ba = this.K = this.aa = this.S = !1),
		(this.h = new xu());
}
function xu() {
	(this.i = null), (this.g = ''), (this.h = !1);
}
var Hg = 45e3,
	Fu = {},
	gs = {};
_ = Qn.prototype;
_.setTimeout = function (n) {
	this.P = n;
};
function ms(n, e, t) {
	(n.L = 1), (n.A = li(je(e))), (n.u = t), (n.S = !0), Uu(n, null);
}
function Uu(n, e) {
	(n.G = Date.now()), Jn(n), (n.B = je(n.A));
	var t = n.B,
		r = n.W;
	Array.isArray(r) || (r = [String(r)]),
		Ku(t.i, 't', r),
		(n.o = 0),
		(t = n.l.J),
		(n.h = new xu()),
		(n.g = pl(n.l, t ? e : null, !n.u)),
		0 < n.O && (n.M = new Bg(re(n.Pa, n, n.g), n.O)),
		ku(n.U, n.g, 'readystatechange', n.nb),
		(e = n.I ? Eu(n.I) : {}),
		n.u
			? (n.v || (n.v = 'POST'),
				(e['Content-Type'] = 'application/x-www-form-urlencoded'),
				n.g.ha(n.B, n.v, n.u, e))
			: ((n.v = 'GET'), n.g.ha(n.B, n.v, null, e)),
		Vn(),
		jg(n.j, n.v, n.B, n.m, n.W, n.u);
}
_.nb = function (n) {
	n = n.target;
	const e = this.M;
	e && Ae(n) == 3 ? e.l() : this.Pa(n);
};
_.Pa = function (n) {
	try {
		if (n == this.g)
			e: {
				const l = Ae(this.g);
				var e = this.g.Ia();
				const h = this.g.da();
				if (!(3 > l) && (l != 3 || us || (this.g && (this.h.h || this.g.ja() || Ca(this.g))))) {
					this.J || l != 4 || e == 7 || (e == 8 || 0 >= h ? Vn(3) : Vn(2)), ui(this);
					var t = this.g.da();
					this.ca = t;
					t: if (Bu(this)) {
						var r = Ca(this.g);
						n = '';
						var i = r.length,
							s = Ae(this.g) == 4;
						if (!this.h.i) {
							if (typeof TextDecoder > 'u') {
								ht(this), vn(this);
								var o = '';
								break t;
							}
							this.h.i = new w.TextDecoder();
						}
						for (e = 0; e < i; e++)
							(this.h.h = !0), (n += this.h.i.decode(r[e], { stream: s && e == i - 1 }));
						(r.length = 0), (this.h.g += n), (this.o = 0), (o = this.h.g);
					} else o = this.g.ja();
					if (((this.i = t == 200), qg(this.j, this.v, this.B, this.m, this.W, l, t), this.i)) {
						if (this.aa && !this.K) {
							t: {
								if (this.g) {
									var a,
										c = this.g;
									if (
										(a = c.g ? c.g.getResponseHeader('X-HTTP-Initial-Response') : null) &&
										!Pn(a)
									) {
										var u = a;
										break t;
									}
								}
								u = null;
							}
							if ((t = u))
								Lt(this.j, this.m, t, 'Initial handshake response via X-HTTP-Initial-Response'),
									(this.K = !0),
									_s(this, t);
							else {
								(this.i = !1), (this.s = 3), oe(12), ht(this), vn(this);
								break e;
							}
						}
						this.S
							? (ju(this, l, o),
								us && this.i && l == 3 && (ku(this.U, this.V, 'tick', this.mb), this.V.start()))
							: (Lt(this.j, this.m, o, null), _s(this, o)),
							l == 4 && ht(this),
							this.i && !this.J && (l == 4 ? ll(this.l, this) : ((this.i = !1), Jn(this)));
					} else
						dm(this.g),
							t == 400 && 0 < o.indexOf('Unknown SID')
								? ((this.s = 3), oe(12))
								: ((this.s = 0), oe(13)),
							ht(this),
							vn(this);
				}
			}
	} catch {
	} finally {
	}
};
function Bu(n) {
	return n.g ? n.v == 'GET' && n.L != 2 && n.l.Ha : !1;
}
function ju(n, e, t) {
	let r = !0,
		i;
	for (; !n.J && n.o < t.length; )
		if (((i = Wg(n, t)), i == gs)) {
			e == 4 && ((n.s = 4), oe(14), (r = !1)), Lt(n.j, n.m, null, '[Incomplete Response]');
			break;
		} else if (i == Fu) {
			(n.s = 4), oe(15), Lt(n.j, n.m, t, '[Invalid Chunk]'), (r = !1);
			break;
		} else Lt(n.j, n.m, i, null), _s(n, i);
	Bu(n) && n.o != 0 && ((n.h.g = n.h.g.slice(n.o)), (n.o = 0)),
		e != 4 || t.length != 0 || n.h.h || ((n.s = 1), oe(16), (r = !1)),
		(n.i = n.i && r),
		r
			? 0 < t.length &&
				!n.ba &&
				((n.ba = !0),
				(e = n.l),
				e.g == n &&
					e.ca &&
					!e.M &&
					(e.l.info('Great, no buffering proxy detected. Bytes received: ' + t.length),
					ho(e),
					(e.M = !0),
					oe(11)))
			: (Lt(n.j, n.m, t, '[Invalid Chunked Response]'), ht(n), vn(n));
}
_.mb = function () {
	if (this.g) {
		var n = Ae(this.g),
			e = this.g.ja();
		this.o < e.length && (ui(this), ju(this, n, e), this.i && n != 4 && Jn(this));
	}
};
function Wg(n, e) {
	var t = n.o,
		r = e.indexOf(
			`
`,
			t
		);
	return r == -1
		? gs
		: ((t = Number(e.substring(t, r))),
			isNaN(t)
				? Fu
				: ((r += 1), r + t > e.length ? gs : ((e = e.slice(r, r + t)), (n.o = r + t), e)));
}
_.cancel = function () {
	(this.J = !0), ht(this);
};
function Jn(n) {
	(n.Y = Date.now() + n.P), qu(n, n.P);
}
function qu(n, e) {
	if (n.C != null) throw Error('WatchDog timer not null');
	n.C = Kn(re(n.lb, n), e);
}
function ui(n) {
	n.C && (w.clearTimeout(n.C), (n.C = null));
}
_.lb = function () {
	this.C = null;
	const n = Date.now();
	0 <= n - this.Y
		? ($g(this.j, this.B), this.L != 2 && (Vn(), oe(17)), ht(this), (this.s = 2), vn(this))
		: qu(this, this.Y - n);
};
function vn(n) {
	n.l.H == 0 || n.J || ll(n.l, n);
}
function ht(n) {
	ui(n);
	var e = n.M;
	e && typeof e.sa == 'function' && e.sa(),
		(n.M = null),
		to(n.V),
		Du(n.U),
		n.g && ((e = n.g), (n.g = null), e.abort(), e.sa());
}
function _s(n, e) {
	try {
		var t = n.l;
		if (t.H != 0 && (t.g == n || ys(t.i, n))) {
			if (!n.K && ys(t.i, n) && t.H == 3) {
				try {
					var r = t.Ja.g.parse(e);
				} catch {
					r = null;
				}
				if (Array.isArray(r) && r.length == 3) {
					var i = r;
					if (i[0] == 0) {
						e: if (!t.u) {
							if (t.g)
								if (t.g.G + 3e3 < n.G) Nr(t), pi(t);
								else break e;
							lo(t), oe(18);
						}
					} else
						(t.Fa = i[1]),
							0 < t.Fa - t.V &&
								37500 > i[2] &&
								t.G &&
								t.A == 0 &&
								!t.v &&
								(t.v = Kn(re(t.ib, t), 6e3));
					if (1 >= Ju(t.i) && t.oa) {
						try {
							t.oa();
						} catch {}
						t.oa = void 0;
					}
				} else dt(t, 11);
			} else if (((n.K || t.g == n) && Nr(t), !Pn(e)))
				for (i = t.Ja.g.parse(e), e = 0; e < i.length; e++) {
					let u = i[e];
					if (((t.V = u[0]), (u = u[1]), t.H == 2))
						if (u[0] == 'c') {
							(t.K = u[1]), (t.pa = u[2]);
							const l = u[3];
							l != null && ((t.ra = l), t.l.info('VER=' + t.ra));
							const h = u[4];
							h != null && ((t.Ga = h), t.l.info('SVER=' + t.Ga));
							const d = u[5];
							d != null &&
								typeof d == 'number' &&
								0 < d &&
								((r = 1.5 * d), (t.L = r), t.l.info('backChannelRequestTimeoutMs_=' + r)),
								(r = t);
							const g = n.g;
							if (g) {
								const S = g.g ? g.g.getResponseHeader('X-Client-Wire-Protocol') : null;
								if (S) {
									var s = r.i;
									s.g ||
										(S.indexOf('spdy') == -1 && S.indexOf('quic') == -1 && S.indexOf('h2') == -1) ||
										((s.j = s.l), (s.g = new Set()), s.h && (oo(s, s.h), (s.h = null)));
								}
								if (r.F) {
									const P = g.g ? g.g.getResponseHeader('X-HTTP-Session-Id') : null;
									P && ((r.Da = P), O(r.I, r.F, P));
								}
							}
							(t.H = 3),
								t.h && t.h.Ba(),
								t.ca && ((t.S = Date.now() - n.G), t.l.info('Handshake RTT: ' + t.S + 'ms')),
								(r = t);
							var o = n;
							if (((r.wa = fl(r, r.J ? r.pa : null, r.Y)), o.K)) {
								Yu(r.i, o);
								var a = o,
									c = r.L;
								c && a.setTimeout(c), a.C && (ui(a), Jn(a)), (r.g = o);
							} else cl(r);
							0 < t.j.length && gi(t);
						} else (u[0] != 'stop' && u[0] != 'close') || dt(t, 7);
					else
						t.H == 3 &&
							(u[0] == 'stop' || u[0] == 'close'
								? u[0] == 'stop'
									? dt(t, 7)
									: uo(t)
								: u[0] != 'noop' && t.h && t.h.Aa(u),
							(t.A = 0));
				}
		}
		Vn(4);
	} catch {}
}
function Kg(n) {
	if (n.Z && typeof n.Z == 'function') return n.Z();
	if ((typeof Map < 'u' && n instanceof Map) || (typeof Set < 'u' && n instanceof Set))
		return Array.from(n.values());
	if (typeof n == 'string') return n.split('');
	if (ei(n)) {
		for (var e = [], t = n.length, r = 0; r < t; r++) e.push(n[r]);
		return e;
	}
	(e = []), (t = 0);
	for (r in n) e[t++] = n[r];
	return e;
}
function Gg(n) {
	if (n.ta && typeof n.ta == 'function') return n.ta();
	if (!n.Z || typeof n.Z != 'function') {
		if (typeof Map < 'u' && n instanceof Map) return Array.from(n.keys());
		if (!(typeof Set < 'u' && n instanceof Set)) {
			if (ei(n) || typeof n == 'string') {
				var e = [];
				n = n.length;
				for (var t = 0; t < n; t++) e.push(t);
				return e;
			}
			(e = []), (t = 0);
			for (const r in n) e[t++] = r;
			return e;
		}
	}
}
function $u(n, e) {
	if (n.forEach && typeof n.forEach == 'function') n.forEach(e, void 0);
	else if (ei(n) || typeof n == 'string') Array.prototype.forEach.call(n, e, void 0);
	else
		for (var t = Gg(n), r = Kg(n), i = r.length, s = 0; s < i; s++)
			e.call(void 0, r[s], t && t[s], n);
}
var zu = RegExp(
	'^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
);
function Qg(n, e) {
	if (n) {
		n = n.split('&');
		for (var t = 0; t < n.length; t++) {
			var r = n[t].indexOf('='),
				i = null;
			if (0 <= r) {
				var s = n[t].substring(0, r);
				i = n[t].substring(r + 1);
			} else s = n[t];
			e(s, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
		}
	}
}
function gt(n) {
	if (
		((this.g = this.s = this.j = ''),
		(this.m = null),
		(this.o = this.l = ''),
		(this.h = !1),
		n instanceof gt)
	) {
		(this.h = n.h), Dr(this, n.j), (this.s = n.s), (this.g = n.g), Vr(this, n.m), (this.l = n.l);
		var e = n.i,
			t = new Nn();
		(t.i = e.i), e.g && ((t.g = new Map(e.g)), (t.h = e.h)), Ra(this, t), (this.o = n.o);
	} else
		n && (e = String(n).match(zu))
			? ((this.h = !1),
				Dr(this, e[1] || '', !0),
				(this.s = fn(e[2] || '')),
				(this.g = fn(e[3] || '', !0)),
				Vr(this, e[4]),
				(this.l = fn(e[5] || '', !0)),
				Ra(this, e[6] || '', !0),
				(this.o = fn(e[7] || '')))
			: ((this.h = !1), (this.i = new Nn(null, this.h)));
}
gt.prototype.toString = function () {
	var n = [],
		e = this.j;
	e && n.push(pn(e, Sa, !0), ':');
	var t = this.g;
	return (
		(t || e == 'file') &&
			(n.push('//'),
			(e = this.s) && n.push(pn(e, Sa, !0), '@'),
			n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
			(t = this.m),
			t != null && n.push(':', String(t))),
		(t = this.l) &&
			(this.g && t.charAt(0) != '/' && n.push('/'),
			n.push(pn(t, t.charAt(0) == '/' ? Xg : Yg, !0))),
		(t = this.i.toString()) && n.push('?', t),
		(t = this.o) && n.push('#', pn(t, em)),
		n.join('')
	);
};
function je(n) {
	return new gt(n);
}
function Dr(n, e, t) {
	(n.j = t ? fn(e, !0) : e), n.j && (n.j = n.j.replace(/:$/, ''));
}
function Vr(n, e) {
	if (e) {
		if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
		n.m = e;
	} else n.m = null;
}
function Ra(n, e, t) {
	e instanceof Nn ? ((n.i = e), tm(n.i, n.h)) : (t || (e = pn(e, Zg)), (n.i = new Nn(e, n.h)));
}
function O(n, e, t) {
	n.i.set(e, t);
}
function li(n) {
	return (
		O(
			n,
			'zx',
			Math.floor(2147483648 * Math.random()).toString(36) +
				Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
		),
		n
	);
}
function fn(n, e) {
	return n ? (e ? decodeURI(n.replace(/%25/g, '%2525')) : decodeURIComponent(n)) : '';
}
function pn(n, e, t) {
	return typeof n == 'string'
		? ((n = encodeURI(n).replace(e, Jg)), t && (n = n.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), n)
		: null;
}
function Jg(n) {
	return (n = n.charCodeAt(0)), '%' + ((n >> 4) & 15).toString(16) + (n & 15).toString(16);
}
var Sa = /[#\/\?@]/g,
	Yg = /[#\?:]/g,
	Xg = /[#\?]/g,
	Zg = /[#\?@]/g,
	em = /#/g;
function Nn(n, e) {
	(this.h = this.g = null), (this.i = n || null), (this.j = !!e);
}
function rt(n) {
	n.g ||
		((n.g = new Map()),
		(n.h = 0),
		n.i &&
			Qg(n.i, function (e, t) {
				n.add(decodeURIComponent(e.replace(/\+/g, ' ')), t);
			}));
}
_ = Nn.prototype;
_.add = function (n, e) {
	rt(this), (this.i = null), (n = Zt(this, n));
	var t = this.g.get(n);
	return t || this.g.set(n, (t = [])), t.push(e), (this.h += 1), this;
};
function Hu(n, e) {
	rt(n), (e = Zt(n, e)), n.g.has(e) && ((n.i = null), (n.h -= n.g.get(e).length), n.g.delete(e));
}
function Wu(n, e) {
	return rt(n), (e = Zt(n, e)), n.g.has(e);
}
_.forEach = function (n, e) {
	rt(this),
		this.g.forEach(function (t, r) {
			t.forEach(function (i) {
				n.call(e, i, r, this);
			}, this);
		}, this);
};
_.ta = function () {
	rt(this);
	const n = Array.from(this.g.values()),
		e = Array.from(this.g.keys()),
		t = [];
	for (let r = 0; r < e.length; r++) {
		const i = n[r];
		for (let s = 0; s < i.length; s++) t.push(e[r]);
	}
	return t;
};
_.Z = function (n) {
	rt(this);
	let e = [];
	if (typeof n == 'string') Wu(this, n) && (e = e.concat(this.g.get(Zt(this, n))));
	else {
		n = Array.from(this.g.values());
		for (let t = 0; t < n.length; t++) e = e.concat(n[t]);
	}
	return e;
};
_.set = function (n, e) {
	return (
		rt(this),
		(this.i = null),
		(n = Zt(this, n)),
		Wu(this, n) && (this.h -= this.g.get(n).length),
		this.g.set(n, [e]),
		(this.h += 1),
		this
	);
};
_.get = function (n, e) {
	return n ? ((n = this.Z(n)), 0 < n.length ? String(n[0]) : e) : e;
};
function Ku(n, e, t) {
	Hu(n, e), 0 < t.length && ((n.i = null), n.g.set(Zt(n, e), Ws(t)), (n.h += t.length));
}
_.toString = function () {
	if (this.i) return this.i;
	if (!this.g) return '';
	const n = [],
		e = Array.from(this.g.keys());
	for (var t = 0; t < e.length; t++) {
		var r = e[t];
		const s = encodeURIComponent(String(r)),
			o = this.Z(r);
		for (r = 0; r < o.length; r++) {
			var i = s;
			o[r] !== '' && (i += '=' + encodeURIComponent(String(o[r]))), n.push(i);
		}
	}
	return (this.i = n.join('&'));
};
function Zt(n, e) {
	return (e = String(e)), n.j && (e = e.toLowerCase()), e;
}
function tm(n, e) {
	e &&
		!n.j &&
		(rt(n),
		(n.i = null),
		n.g.forEach(function (t, r) {
			var i = r.toLowerCase();
			r != i && (Hu(this, r), Ku(this, i, t));
		}, n)),
		(n.j = e);
}
var nm = class {
	constructor(n, e) {
		(this.g = n), (this.map = e);
	}
};
function Gu(n) {
	(this.l = n || rm),
		w.PerformanceNavigationTiming
			? ((n = w.performance.getEntriesByType('navigation')),
				(n = 0 < n.length && (n[0].nextHopProtocol == 'hq' || n[0].nextHopProtocol == 'h2')))
			: (n = !!(w.g && w.g.Ka && w.g.Ka() && w.g.Ka().dc)),
		(this.j = n ? this.l : 1),
		(this.g = null),
		1 < this.j && (this.g = new Set()),
		(this.h = null),
		(this.i = []);
}
var rm = 10;
function Qu(n) {
	return n.h ? !0 : n.g ? n.g.size >= n.j : !1;
}
function Ju(n) {
	return n.h ? 1 : n.g ? n.g.size : 0;
}
function ys(n, e) {
	return n.h ? n.h == e : n.g ? n.g.has(e) : !1;
}
function oo(n, e) {
	n.g ? n.g.add(e) : (n.h = e);
}
function Yu(n, e) {
	n.h && n.h == e ? (n.h = null) : n.g && n.g.has(e) && n.g.delete(e);
}
Gu.prototype.cancel = function () {
	if (((this.i = Xu(this)), this.h)) this.h.cancel(), (this.h = null);
	else if (this.g && this.g.size !== 0) {
		for (const n of this.g.values()) n.cancel();
		this.g.clear();
	}
};
function Xu(n) {
	if (n.h != null) return n.i.concat(n.h.F);
	if (n.g != null && n.g.size !== 0) {
		let e = n.i;
		for (const t of n.g.values()) e = e.concat(t.F);
		return e;
	}
	return Ws(n.i);
}
var im = class {
	stringify(n) {
		return w.JSON.stringify(n, void 0);
	}
	parse(n) {
		return w.JSON.parse(n, void 0);
	}
};
function sm() {
	this.g = new im();
}
function om(n, e, t) {
	const r = t || '';
	try {
		$u(n, function (i, s) {
			let o = i;
			Hn(i) && (o = Zs(i)), e.push(r + s + '=' + encodeURIComponent(o));
		});
	} catch (i) {
		throw (e.push(r + 'type=' + encodeURIComponent('_badmap')), i);
	}
}
function am(n, e) {
	const t = new si();
	if (w.Image) {
		const r = new Image();
		(r.onload = lr(dr, t, r, 'TestLoadImage: loaded', !0, e)),
			(r.onerror = lr(dr, t, r, 'TestLoadImage: error', !1, e)),
			(r.onabort = lr(dr, t, r, 'TestLoadImage: abort', !1, e)),
			(r.ontimeout = lr(dr, t, r, 'TestLoadImage: timeout', !1, e)),
			w.setTimeout(function () {
				r.ontimeout && r.ontimeout();
			}, 1e4),
			(r.src = n);
	} else e(!1);
}
function dr(n, e, t, r, i) {
	try {
		(e.onload = null), (e.onerror = null), (e.onabort = null), (e.ontimeout = null), i(r);
	} catch {}
}
function hi(n) {
	(this.l = n.ec || null), (this.j = n.ob || !1);
}
K(hi, ro);
hi.prototype.g = function () {
	return new di(this.l, this.j);
};
hi.prototype.i = (function (n) {
	return function () {
		return n;
	};
})({});
function di(n, e) {
	W.call(this),
		(this.F = n),
		(this.u = e),
		(this.m = void 0),
		(this.readyState = ao),
		(this.status = 0),
		(this.responseType = this.responseText = this.response = this.statusText = ''),
		(this.onreadystatechange = null),
		(this.v = new Headers()),
		(this.h = null),
		(this.C = 'GET'),
		(this.B = ''),
		(this.g = !1),
		(this.A = this.j = this.l = null);
}
K(di, W);
var ao = 0;
_ = di.prototype;
_.open = function (n, e) {
	if (this.readyState != ao) throw (this.abort(), Error('Error reopening a connection'));
	(this.C = n), (this.B = e), (this.readyState = 1), On(this);
};
_.send = function (n) {
	if (this.readyState != 1) throw (this.abort(), Error('need to call open() first. '));
	this.g = !0;
	const e = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
	n && (e.body = n),
		(this.F || w).fetch(new Request(this.B, e)).then(this.$a.bind(this), this.ka.bind(this));
};
_.abort = function () {
	(this.response = this.responseText = ''),
		(this.v = new Headers()),
		(this.status = 0),
		this.j && this.j.cancel('Request was aborted.').catch(() => {}),
		1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), Yn(this)),
		(this.readyState = ao);
};
_.$a = function (n) {
	if (
		this.g &&
		((this.l = n),
		this.h ||
			((this.status = this.l.status),
			(this.statusText = this.l.statusText),
			(this.h = n.headers),
			(this.readyState = 2),
			On(this)),
		this.g && ((this.readyState = 3), On(this), this.g))
	)
		if (this.responseType === 'arraybuffer')
			n.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
		else if (typeof w.ReadableStream < 'u' && 'body' in n) {
			if (((this.j = n.body.getReader()), this.u)) {
				if (this.responseType)
					throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
				this.response = [];
			} else (this.response = this.responseText = ''), (this.A = new TextDecoder());
			Zu(this);
		} else n.text().then(this.Za.bind(this), this.ka.bind(this));
};
function Zu(n) {
	n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n));
}
_.Xa = function (n) {
	if (this.g) {
		if (this.u && n.value) this.response.push(n.value);
		else if (!this.u) {
			var e = n.value ? n.value : new Uint8Array(0);
			(e = this.A.decode(e, { stream: !n.done })) && (this.response = this.responseText += e);
		}
		n.done ? Yn(this) : On(this), this.readyState == 3 && Zu(this);
	}
};
_.Za = function (n) {
	this.g && ((this.response = this.responseText = n), Yn(this));
};
_.Ya = function (n) {
	this.g && ((this.response = n), Yn(this));
};
_.ka = function () {
	this.g && Yn(this);
};
function Yn(n) {
	(n.readyState = 4), (n.l = null), (n.j = null), (n.A = null), On(n);
}
_.setRequestHeader = function (n, e) {
	this.v.append(n, e);
};
_.getResponseHeader = function (n) {
	return (this.h && this.h.get(n.toLowerCase())) || '';
};
_.getAllResponseHeaders = function () {
	if (!this.h) return '';
	const n = [],
		e = this.h.entries();
	for (var t = e.next(); !t.done; ) (t = t.value), n.push(t[0] + ': ' + t[1]), (t = e.next());
	return n.join(`\r
`);
};
function On(n) {
	n.onreadystatechange && n.onreadystatechange.call(n);
}
Object.defineProperty(di.prototype, 'withCredentials', {
	get: function () {
		return this.m === 'include';
	},
	set: function (n) {
		this.m = n ? 'include' : 'same-origin';
	}
});
var cm = w.JSON.parse;
function F(n) {
	W.call(this),
		(this.headers = new Map()),
		(this.u = n || null),
		(this.h = !1),
		(this.C = this.g = null),
		(this.I = ''),
		(this.m = 0),
		(this.j = ''),
		(this.l = this.G = this.v = this.F = !1),
		(this.B = 0),
		(this.A = null),
		(this.K = el),
		(this.L = this.M = !1);
}
K(F, W);
var el = '',
	um = /^https?$/i,
	lm = ['POST', 'PUT'];
_ = F.prototype;
_.Oa = function (n) {
	this.M = n;
};
_.ha = function (n, e, t, r) {
	if (this.g)
		throw Error(
			'[goog.net.XhrIo] Object is active with another request=' + this.I + '; newUri=' + n
		);
	(e = e ? e.toUpperCase() : 'GET'),
		(this.I = n),
		(this.j = ''),
		(this.m = 0),
		(this.F = !1),
		(this.h = !0),
		(this.g = this.u ? this.u.g() : ps.g()),
		(this.C = this.u ? Aa(this.u) : Aa(ps)),
		(this.g.onreadystatechange = re(this.La, this));
	try {
		(this.G = !0), this.g.open(e, String(n), !0), (this.G = !1);
	} catch (s) {
		Pa(this, s);
		return;
	}
	if (((n = t || ''), (t = new Map(this.headers)), r))
		if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) t.set(i, r[i]);
		else if (typeof r.keys == 'function' && typeof r.get == 'function')
			for (const s of r.keys()) t.set(s, r.get(s));
		else throw Error('Unknown input type for opt_headers: ' + String(r));
	(r = Array.from(t.keys()).find((s) => s.toLowerCase() == 'content-type')),
		(i = w.FormData && n instanceof w.FormData),
		!(0 <= mu(lm, e)) ||
			r ||
			i ||
			t.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
	for (const [s, o] of t) this.g.setRequestHeader(s, o);
	this.K && (this.g.responseType = this.K),
		'withCredentials' in this.g &&
			this.g.withCredentials !== this.M &&
			(this.g.withCredentials = this.M);
	try {
		rl(this),
			0 < this.B &&
				((this.L = hm(this.g))
					? ((this.g.timeout = this.B), (this.g.ontimeout = re(this.ua, this)))
					: (this.A = no(this.ua, this.B, this))),
			(this.v = !0),
			this.g.send(n),
			(this.v = !1);
	} catch (s) {
		Pa(this, s);
	}
};
function hm(n) {
	return zt && typeof n.timeout == 'number' && n.ontimeout !== void 0;
}
_.ua = function () {
	typeof Hs < 'u' &&
		this.g &&
		((this.j = 'Timed out after ' + this.B + 'ms, aborting'),
		(this.m = 8),
		X(this, 'timeout'),
		this.abort(8));
};
function Pa(n, e) {
	(n.h = !1), n.g && ((n.l = !0), n.g.abort(), (n.l = !1)), (n.j = e), (n.m = 5), tl(n), fi(n);
}
function tl(n) {
	n.F || ((n.F = !0), X(n, 'complete'), X(n, 'error'));
}
_.abort = function (n) {
	this.g &&
		this.h &&
		((this.h = !1),
		(this.l = !0),
		this.g.abort(),
		(this.l = !1),
		(this.m = n || 7),
		X(this, 'complete'),
		X(this, 'abort'),
		fi(this));
};
_.N = function () {
	this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), fi(this, !0)),
		F.$.N.call(this);
};
_.La = function () {
	this.s || (this.G || this.v || this.l ? nl(this) : this.kb());
};
_.kb = function () {
	nl(this);
};
function nl(n) {
	if (n.h && typeof Hs < 'u' && (!n.C[1] || Ae(n) != 4 || n.da() != 2)) {
		if (n.v && Ae(n) == 4) no(n.La, 0, n);
		else if ((X(n, 'readystatechange'), Ae(n) == 4)) {
			n.h = !1;
			try {
				const o = n.da();
				e: switch (o) {
					case 200:
					case 201:
					case 202:
					case 204:
					case 206:
					case 304:
					case 1223:
						var e = !0;
						break e;
					default:
						e = !1;
				}
				var t;
				if (!(t = e)) {
					var r;
					if ((r = o === 0)) {
						var i = String(n.I).match(zu)[1] || null;
						!i && w.self && w.self.location && (i = w.self.location.protocol.slice(0, -1)),
							(r = !um.test(i ? i.toLowerCase() : ''));
					}
					t = r;
				}
				if (t) X(n, 'complete'), X(n, 'success');
				else {
					n.m = 6;
					try {
						var s = 2 < Ae(n) ? n.g.statusText : '';
					} catch {
						s = '';
					}
					(n.j = s + ' [' + n.da() + ']'), tl(n);
				}
			} finally {
				fi(n);
			}
		}
	}
}
function fi(n, e) {
	if (n.g) {
		rl(n);
		const t = n.g,
			r = n.C[0] ? () => {} : null;
		(n.g = null), (n.C = null), e || X(n, 'ready');
		try {
			t.onreadystatechange = r;
		} catch {}
	}
}
function rl(n) {
	n.g && n.L && (n.g.ontimeout = null), n.A && (w.clearTimeout(n.A), (n.A = null));
}
_.isActive = function () {
	return !!this.g;
};
function Ae(n) {
	return n.g ? n.g.readyState : 0;
}
_.da = function () {
	try {
		return 2 < Ae(this) ? this.g.status : -1;
	} catch {
		return -1;
	}
};
_.ja = function () {
	try {
		return this.g ? this.g.responseText : '';
	} catch {
		return '';
	}
};
_.Wa = function (n) {
	if (this.g) {
		var e = this.g.responseText;
		return n && e.indexOf(n) == 0 && (e = e.substring(n.length)), cm(e);
	}
};
function Ca(n) {
	try {
		if (!n.g) return null;
		if ('response' in n.g) return n.g.response;
		switch (n.K) {
			case el:
			case 'text':
				return n.g.responseText;
			case 'arraybuffer':
				if ('mozResponseArrayBuffer' in n.g) return n.g.mozResponseArrayBuffer;
		}
		return null;
	} catch {
		return null;
	}
}
function dm(n) {
	const e = {};
	n = ((n.g && 2 <= Ae(n) && n.g.getAllResponseHeaders()) || '').split(`\r
`);
	for (let r = 0; r < n.length; r++) {
		if (Pn(n[r])) continue;
		var t = xg(n[r]);
		const i = t[0];
		if (((t = t[1]), typeof t != 'string')) continue;
		t = t.trim();
		const s = e[i] || [];
		(e[i] = s), s.push(t);
	}
	kg(e, function (r) {
		return r.join(', ');
	});
}
_.Ia = function () {
	return this.m;
};
_.Sa = function () {
	return typeof this.j == 'string' ? this.j : String(this.j);
};
function il(n) {
	let e = '';
	return (
		Gs(n, function (t, r) {
			(e += r),
				(e += ':'),
				(e += t),
				(e += `\r
`);
		}),
		e
	);
}
function co(n, e, t) {
	e: {
		for (r in t) {
			var r = !1;
			break e;
		}
		r = !0;
	}
	r ||
		((t = il(t)), typeof n == 'string' ? t != null && encodeURIComponent(String(t)) : O(n, e, t));
}
function cn(n, e, t) {
	return (t && t.internalChannelParams && t.internalChannelParams[n]) || e;
}
function sl(n) {
	(this.Ga = 0),
		(this.j = []),
		(this.l = new si()),
		(this.pa =
			this.wa =
			this.I =
			this.Y =
			this.g =
			this.Da =
			this.F =
			this.na =
			this.o =
			this.U =
			this.s =
				null),
		(this.fb = this.W = 0),
		(this.cb = cn('failFast', !1, n)),
		(this.G = this.v = this.u = this.m = this.h = null),
		(this.aa = !0),
		(this.Fa = this.V = -1),
		(this.ba = this.A = this.C = 0),
		(this.ab = cn('baseRetryDelayMs', 5e3, n)),
		(this.hb = cn('retryDelaySeedMs', 1e4, n)),
		(this.eb = cn('forwardChannelMaxRetries', 2, n)),
		(this.xa = cn('forwardChannelRequestTimeoutMs', 2e4, n)),
		(this.va = (n && n.xmlHttpFactory) || void 0),
		(this.Ha = (n && n.useFetchStreams) || !1),
		(this.L = void 0),
		(this.J = (n && n.supportsCrossDomainXhr) || !1),
		(this.K = ''),
		(this.i = new Gu(n && n.concurrentRequestLimit)),
		(this.Ja = new sm()),
		(this.P = (n && n.fastHandshake) || !1),
		(this.O = (n && n.encodeInitMessageHeaders) || !1),
		this.P && this.O && (this.O = !1),
		(this.bb = (n && n.bc) || !1),
		n && n.Ea && this.l.Ea(),
		n && n.forceLongPolling && (this.aa = !1),
		(this.ca = (!this.P && this.aa && n && n.detectBufferingProxy) || !1),
		(this.qa = void 0),
		n && n.longPollingTimeout && 0 < n.longPollingTimeout && (this.qa = n.longPollingTimeout),
		(this.oa = void 0),
		(this.S = 0),
		(this.M = !1),
		(this.ma = this.B = null);
}
_ = sl.prototype;
_.ra = 8;
_.H = 1;
function uo(n) {
	if ((ol(n), n.H == 3)) {
		var e = n.W++,
			t = je(n.I);
		if (
			(O(t, 'SID', n.K),
			O(t, 'RID', e),
			O(t, 'TYPE', 'terminate'),
			Xn(n, t),
			(e = new Qn(n, n.l, e)),
			(e.L = 2),
			(e.A = li(je(t))),
			(t = !1),
			w.navigator && w.navigator.sendBeacon)
		)
			try {
				t = w.navigator.sendBeacon(e.A.toString(), '');
			} catch {}
		!t && w.Image && ((new Image().src = e.A), (t = !0)),
			t || ((e.g = pl(e.l, null)), e.g.ha(e.A)),
			(e.G = Date.now()),
			Jn(e);
	}
	dl(n);
}
function pi(n) {
	n.g && (ho(n), n.g.cancel(), (n.g = null));
}
function ol(n) {
	pi(n),
		n.u && (w.clearTimeout(n.u), (n.u = null)),
		Nr(n),
		n.i.cancel(),
		n.m && (typeof n.m == 'number' && w.clearTimeout(n.m), (n.m = null));
}
function gi(n) {
	if (!Qu(n.i) && !n.m) {
		n.m = !0;
		var e = n.Na;
		bn || Cu(), kn || (bn(), (kn = !0)), eo.add(e, n), (n.C = 0);
	}
}
function fm(n, e) {
	return Ju(n.i) >= n.i.j - (n.m ? 1 : 0)
		? !1
		: n.m
			? ((n.j = e.F.concat(n.j)), !0)
			: n.H == 1 || n.H == 2 || n.C >= (n.cb ? 0 : n.eb)
				? !1
				: ((n.m = Kn(re(n.Na, n, e), hl(n, n.C))), n.C++, !0);
}
_.Na = function (n) {
	if (this.m)
		if (((this.m = null), this.H == 1)) {
			if (!n) {
				(this.W = Math.floor(1e5 * Math.random())), (n = this.W++);
				const i = new Qn(this, this.l, n);
				let s = this.s;
				if (
					(this.U && (s ? ((s = Eu(s)), Iu(s, this.U)) : (s = this.U)),
					this.o !== null || this.O || ((i.I = s), (s = null)),
					this.P)
				)
					e: {
						for (var e = 0, t = 0; t < this.j.length; t++) {
							t: {
								var r = this.j[t];
								if ('__data__' in r.map && ((r = r.map.__data__), typeof r == 'string')) {
									r = r.length;
									break t;
								}
								r = void 0;
							}
							if (r === void 0) break;
							if (((e += r), 4096 < e)) {
								e = t;
								break e;
							}
							if (e === 4096 || t === this.j.length - 1) {
								e = t + 1;
								break e;
							}
						}
						e = 1e3;
					}
				else e = 1e3;
				(e = al(this, i, e)),
					(t = je(this.I)),
					O(t, 'RID', n),
					O(t, 'CVER', 22),
					this.F && O(t, 'X-HTTP-Session-Id', this.F),
					Xn(this, t),
					s &&
						(this.O
							? (e = 'headers=' + encodeURIComponent(String(il(s))) + '&' + e)
							: this.o && co(t, this.o, s)),
					oo(this.i, i),
					this.bb && O(t, 'TYPE', 'init'),
					this.P
						? (O(t, '$req', e), O(t, 'SID', 'null'), (i.aa = !0), ms(i, t, null))
						: ms(i, t, e),
					(this.H = 2);
			}
		} else this.H == 3 && (n ? ba(this, n) : this.j.length == 0 || Qu(this.i) || ba(this));
};
function ba(n, e) {
	var t;
	e ? (t = e.m) : (t = n.W++);
	const r = je(n.I);
	O(r, 'SID', n.K),
		O(r, 'RID', t),
		O(r, 'AID', n.V),
		Xn(n, r),
		n.o && n.s && co(r, n.o, n.s),
		(t = new Qn(n, n.l, t, n.C + 1)),
		n.o === null && (t.I = n.s),
		e && (n.j = e.F.concat(n.j)),
		(e = al(n, t, 1e3)),
		t.setTimeout(Math.round(0.5 * n.xa) + Math.round(0.5 * n.xa * Math.random())),
		oo(n.i, t),
		ms(t, r, e);
}
function Xn(n, e) {
	n.na &&
		Gs(n.na, function (t, r) {
			O(e, r, t);
		}),
		n.h &&
			$u({}, function (t, r) {
				O(e, r, t);
			});
}
function al(n, e, t) {
	t = Math.min(n.j.length, t);
	var r = n.h ? re(n.h.Va, n.h, n) : null;
	e: {
		var i = n.j;
		let s = -1;
		for (;;) {
			const o = ['count=' + t];
			s == -1 ? (0 < t ? ((s = i[0].g), o.push('ofs=' + s)) : (s = 0)) : o.push('ofs=' + s);
			let a = !0;
			for (let c = 0; c < t; c++) {
				let u = i[c].g;
				const l = i[c].map;
				if (((u -= s), 0 > u)) (s = Math.max(0, i[c].g - 100)), (a = !1);
				else
					try {
						om(l, o, 'req' + u + '_');
					} catch {
						r && r(l);
					}
			}
			if (a) {
				r = o.join('&');
				break e;
			}
		}
	}
	return (n = n.j.splice(0, t)), (e.F = n), r;
}
function cl(n) {
	if (!n.g && !n.u) {
		n.ba = 1;
		var e = n.Ma;
		bn || Cu(), kn || (bn(), (kn = !0)), eo.add(e, n), (n.A = 0);
	}
}
function lo(n) {
	return n.g || n.u || 3 <= n.A ? !1 : (n.ba++, (n.u = Kn(re(n.Ma, n), hl(n, n.A))), n.A++, !0);
}
_.Ma = function () {
	if (((this.u = null), ul(this), this.ca && !(this.M || this.g == null || 0 >= this.S))) {
		var n = 2 * this.S;
		this.l.info('BP detection timer enabled: ' + n), (this.B = Kn(re(this.jb, this), n));
	}
};
_.jb = function () {
	this.B &&
		((this.B = null),
		this.l.info('BP detection timeout reached.'),
		this.l.info('Buffering proxy detected and switch to long-polling!'),
		(this.G = !1),
		(this.M = !0),
		oe(10),
		pi(this),
		ul(this));
};
function ho(n) {
	n.B != null && (w.clearTimeout(n.B), (n.B = null));
}
function ul(n) {
	(n.g = new Qn(n, n.l, 'rpc', n.ba)), n.o === null && (n.g.I = n.s), (n.g.O = 0);
	var e = je(n.wa);
	O(e, 'RID', 'rpc'),
		O(e, 'SID', n.K),
		O(e, 'AID', n.V),
		O(e, 'CI', n.G ? '0' : '1'),
		!n.G && n.qa && O(e, 'TO', n.qa),
		O(e, 'TYPE', 'xmlhttp'),
		Xn(n, e),
		n.o && n.s && co(e, n.o, n.s),
		n.L && n.g.setTimeout(n.L);
	var t = n.g;
	(n = n.pa), (t.L = 1), (t.A = li(je(e))), (t.u = null), (t.S = !0), Uu(t, n);
}
_.ib = function () {
	this.v != null && ((this.v = null), pi(this), lo(this), oe(19));
};
function Nr(n) {
	n.v != null && (w.clearTimeout(n.v), (n.v = null));
}
function ll(n, e) {
	var t = null;
	if (n.g == e) {
		Nr(n), ho(n), (n.g = null);
		var r = 2;
	} else if (ys(n.i, e)) (t = e.F), Yu(n.i, e), (r = 1);
	else return;
	if (n.H != 0) {
		if (e.i)
			if (r == 1) {
				(t = e.u ? e.u.length : 0), (e = Date.now() - e.G);
				var i = n.C;
				(r = oi()), X(r, new Ou(r, t)), gi(n);
			} else cl(n);
		else if (
			((i = e.s), i == 3 || (i == 0 && 0 < e.ca) || !((r == 1 && fm(n, e)) || (r == 2 && lo(n))))
		)
			switch ((t && 0 < t.length && ((e = n.i), (e.i = e.i.concat(t))), i)) {
				case 1:
					dt(n, 5);
					break;
				case 4:
					dt(n, 10);
					break;
				case 3:
					dt(n, 6);
					break;
				default:
					dt(n, 2);
			}
	}
}
function hl(n, e) {
	let t = n.ab + Math.floor(Math.random() * n.hb);
	return n.isActive() || (t *= 2), t * e;
}
function dt(n, e) {
	if ((n.l.info('Error code ' + e), e == 2)) {
		var t = null;
		n.h && (t = null);
		var r = re(n.pb, n);
		t ||
			((t = new gt('//www.google.com/images/cleardot.gif')),
			(w.location && w.location.protocol == 'http') || Dr(t, 'https'),
			li(t)),
			am(t.toString(), r);
	} else oe(2);
	(n.H = 0), n.h && n.h.za(e), dl(n), ol(n);
}
_.pb = function (n) {
	n
		? (this.l.info('Successfully pinged google.com'), oe(2))
		: (this.l.info('Failed to ping google.com'), oe(1));
};
function dl(n) {
	if (((n.H = 0), (n.ma = []), n.h)) {
		const e = Xu(n.i);
		(e.length != 0 || n.j.length != 0) &&
			(va(n.ma, e), va(n.ma, n.j), (n.i.i.length = 0), Ws(n.j), (n.j.length = 0)),
			n.h.ya();
	}
}
function fl(n, e, t) {
	var r = t instanceof gt ? je(t) : new gt(t);
	if (r.g != '') e && (r.g = e + '.' + r.g), Vr(r, r.m);
	else {
		var i = w.location;
		(r = i.protocol), (e = e ? e + '.' + i.hostname : i.hostname), (i = +i.port);
		var s = new gt(null);
		r && Dr(s, r), e && (s.g = e), i && Vr(s, i), t && (s.l = t), (r = s);
	}
	return (t = n.F), (e = n.Da), t && e && O(r, t, e), O(r, 'VER', n.ra), Xn(n, r), r;
}
function pl(n, e, t) {
	if (e && !n.J) throw Error("Can't create secondary domain capable XhrIo object.");
	return (e = n.Ha && !n.va ? new F(new hi({ ob: t })) : new F(n.va)), e.Oa(n.J), e;
}
_.isActive = function () {
	return !!this.h && this.h.isActive(this);
};
function gl() {}
_ = gl.prototype;
_.Ba = function () {};
_.Aa = function () {};
_.za = function () {};
_.ya = function () {};
_.isActive = function () {
	return !0;
};
_.Va = function () {};
function Or() {
	if (zt && !(10 <= Number(Sg))) throw Error('Environmental error: no available transport.');
}
Or.prototype.g = function (n, e) {
	return new le(n, e);
};
function le(n, e) {
	W.call(this),
		(this.g = new sl(e)),
		(this.l = n),
		(this.h = (e && e.messageUrlParams) || null),
		(n = (e && e.messageHeaders) || null),
		e &&
			e.clientProtocolHeaderRequired &&
			(n ? (n['X-Client-Protocol'] = 'webchannel') : (n = { 'X-Client-Protocol': 'webchannel' })),
		(this.g.s = n),
		(n = (e && e.initMessageHeaders) || null),
		e &&
			e.messageContentType &&
			(n
				? (n['X-WebChannel-Content-Type'] = e.messageContentType)
				: (n = { 'X-WebChannel-Content-Type': e.messageContentType })),
		e &&
			e.Ca &&
			(n
				? (n['X-WebChannel-Client-Profile'] = e.Ca)
				: (n = { 'X-WebChannel-Client-Profile': e.Ca })),
		(this.g.U = n),
		(n = e && e.cc) && !Pn(n) && (this.g.o = n),
		(this.A = (e && e.supportsCrossDomainXhr) || !1),
		(this.v = (e && e.sendRawJson) || !1),
		(e = e && e.httpSessionIdParam) &&
			!Pn(e) &&
			((this.g.F = e), (n = this.h), n !== null && e in n && ((n = this.h), e in n && delete n[e])),
		(this.j = new en(this));
}
K(le, W);
le.prototype.m = function () {
	(this.g.h = this.j), this.A && (this.g.J = !0);
	var n = this.g,
		e = this.l,
		t = this.h || void 0;
	oe(0), (n.Y = e), (n.na = t || {}), (n.G = n.aa), (n.I = fl(n, null, n.Y)), gi(n);
};
le.prototype.close = function () {
	uo(this.g);
};
le.prototype.u = function (n) {
	var e = this.g;
	if (typeof n == 'string') {
		var t = {};
		(t.__data__ = n), (n = t);
	} else this.v && ((t = {}), (t.__data__ = Zs(n)), (n = t));
	e.j.push(new nm(e.fb++, n)), e.H == 3 && gi(e);
};
le.prototype.N = function () {
	(this.g.h = null), delete this.j, uo(this.g), delete this.g, le.$.N.call(this);
};
function ml(n) {
	io.call(this),
		n.__headers__ &&
			((this.headers = n.__headers__),
			(this.statusCode = n.__status__),
			delete n.__headers__,
			delete n.__status__);
	var e = n.__sm__;
	if (e) {
		e: {
			for (const t in e) {
				n = t;
				break e;
			}
			n = void 0;
		}
		(this.i = n) && ((n = this.i), (e = e !== null && n in e ? e[n] : void 0)), (this.data = e);
	} else this.data = n;
}
K(ml, io);
function _l() {
	so.call(this), (this.status = 1);
}
K(_l, so);
function en(n) {
	this.g = n;
}
K(en, gl);
en.prototype.Ba = function () {
	X(this.g, 'a');
};
en.prototype.Aa = function (n) {
	X(this.g, new ml(n));
};
en.prototype.za = function (n) {
	X(this.g, new _l());
};
en.prototype.ya = function () {
	X(this.g, 'b');
};
function pm() {
	this.blockSize = -1;
}
function ye() {
	(this.blockSize = -1),
		(this.blockSize = 64),
		(this.g = Array(4)),
		(this.m = Array(this.blockSize)),
		(this.i = this.h = 0),
		this.reset();
}
K(ye, pm);
ye.prototype.reset = function () {
	(this.g[0] = 1732584193),
		(this.g[1] = 4023233417),
		(this.g[2] = 2562383102),
		(this.g[3] = 271733878),
		(this.i = this.h = 0);
};
function Ki(n, e, t) {
	t || (t = 0);
	var r = Array(16);
	if (typeof e == 'string')
		for (var i = 0; 16 > i; ++i)
			r[i] =
				e.charCodeAt(t++) |
				(e.charCodeAt(t++) << 8) |
				(e.charCodeAt(t++) << 16) |
				(e.charCodeAt(t++) << 24);
	else for (i = 0; 16 > i; ++i) r[i] = e[t++] | (e[t++] << 8) | (e[t++] << 16) | (e[t++] << 24);
	(e = n.g[0]), (t = n.g[1]), (i = n.g[2]);
	var s = n.g[3],
		o = (e + (s ^ (t & (i ^ s))) + r[0] + 3614090360) & 4294967295;
	(e = t + (((o << 7) & 4294967295) | (o >>> 25))),
		(o = (s + (i ^ (e & (t ^ i))) + r[1] + 3905402710) & 4294967295),
		(s = e + (((o << 12) & 4294967295) | (o >>> 20))),
		(o = (i + (t ^ (s & (e ^ t))) + r[2] + 606105819) & 4294967295),
		(i = s + (((o << 17) & 4294967295) | (o >>> 15))),
		(o = (t + (e ^ (i & (s ^ e))) + r[3] + 3250441966) & 4294967295),
		(t = i + (((o << 22) & 4294967295) | (o >>> 10))),
		(o = (e + (s ^ (t & (i ^ s))) + r[4] + 4118548399) & 4294967295),
		(e = t + (((o << 7) & 4294967295) | (o >>> 25))),
		(o = (s + (i ^ (e & (t ^ i))) + r[5] + 1200080426) & 4294967295),
		(s = e + (((o << 12) & 4294967295) | (o >>> 20))),
		(o = (i + (t ^ (s & (e ^ t))) + r[6] + 2821735955) & 4294967295),
		(i = s + (((o << 17) & 4294967295) | (o >>> 15))),
		(o = (t + (e ^ (i & (s ^ e))) + r[7] + 4249261313) & 4294967295),
		(t = i + (((o << 22) & 4294967295) | (o >>> 10))),
		(o = (e + (s ^ (t & (i ^ s))) + r[8] + 1770035416) & 4294967295),
		(e = t + (((o << 7) & 4294967295) | (o >>> 25))),
		(o = (s + (i ^ (e & (t ^ i))) + r[9] + 2336552879) & 4294967295),
		(s = e + (((o << 12) & 4294967295) | (o >>> 20))),
		(o = (i + (t ^ (s & (e ^ t))) + r[10] + 4294925233) & 4294967295),
		(i = s + (((o << 17) & 4294967295) | (o >>> 15))),
		(o = (t + (e ^ (i & (s ^ e))) + r[11] + 2304563134) & 4294967295),
		(t = i + (((o << 22) & 4294967295) | (o >>> 10))),
		(o = (e + (s ^ (t & (i ^ s))) + r[12] + 1804603682) & 4294967295),
		(e = t + (((o << 7) & 4294967295) | (o >>> 25))),
		(o = (s + (i ^ (e & (t ^ i))) + r[13] + 4254626195) & 4294967295),
		(s = e + (((o << 12) & 4294967295) | (o >>> 20))),
		(o = (i + (t ^ (s & (e ^ t))) + r[14] + 2792965006) & 4294967295),
		(i = s + (((o << 17) & 4294967295) | (o >>> 15))),
		(o = (t + (e ^ (i & (s ^ e))) + r[15] + 1236535329) & 4294967295),
		(t = i + (((o << 22) & 4294967295) | (o >>> 10))),
		(o = (e + (i ^ (s & (t ^ i))) + r[1] + 4129170786) & 4294967295),
		(e = t + (((o << 5) & 4294967295) | (o >>> 27))),
		(o = (s + (t ^ (i & (e ^ t))) + r[6] + 3225465664) & 4294967295),
		(s = e + (((o << 9) & 4294967295) | (o >>> 23))),
		(o = (i + (e ^ (t & (s ^ e))) + r[11] + 643717713) & 4294967295),
		(i = s + (((o << 14) & 4294967295) | (o >>> 18))),
		(o = (t + (s ^ (e & (i ^ s))) + r[0] + 3921069994) & 4294967295),
		(t = i + (((o << 20) & 4294967295) | (o >>> 12))),
		(o = (e + (i ^ (s & (t ^ i))) + r[5] + 3593408605) & 4294967295),
		(e = t + (((o << 5) & 4294967295) | (o >>> 27))),
		(o = (s + (t ^ (i & (e ^ t))) + r[10] + 38016083) & 4294967295),
		(s = e + (((o << 9) & 4294967295) | (o >>> 23))),
		(o = (i + (e ^ (t & (s ^ e))) + r[15] + 3634488961) & 4294967295),
		(i = s + (((o << 14) & 4294967295) | (o >>> 18))),
		(o = (t + (s ^ (e & (i ^ s))) + r[4] + 3889429448) & 4294967295),
		(t = i + (((o << 20) & 4294967295) | (o >>> 12))),
		(o = (e + (i ^ (s & (t ^ i))) + r[9] + 568446438) & 4294967295),
		(e = t + (((o << 5) & 4294967295) | (o >>> 27))),
		(o = (s + (t ^ (i & (e ^ t))) + r[14] + 3275163606) & 4294967295),
		(s = e + (((o << 9) & 4294967295) | (o >>> 23))),
		(o = (i + (e ^ (t & (s ^ e))) + r[3] + 4107603335) & 4294967295),
		(i = s + (((o << 14) & 4294967295) | (o >>> 18))),
		(o = (t + (s ^ (e & (i ^ s))) + r[8] + 1163531501) & 4294967295),
		(t = i + (((o << 20) & 4294967295) | (o >>> 12))),
		(o = (e + (i ^ (s & (t ^ i))) + r[13] + 2850285829) & 4294967295),
		(e = t + (((o << 5) & 4294967295) | (o >>> 27))),
		(o = (s + (t ^ (i & (e ^ t))) + r[2] + 4243563512) & 4294967295),
		(s = e + (((o << 9) & 4294967295) | (o >>> 23))),
		(o = (i + (e ^ (t & (s ^ e))) + r[7] + 1735328473) & 4294967295),
		(i = s + (((o << 14) & 4294967295) | (o >>> 18))),
		(o = (t + (s ^ (e & (i ^ s))) + r[12] + 2368359562) & 4294967295),
		(t = i + (((o << 20) & 4294967295) | (o >>> 12))),
		(o = (e + (t ^ i ^ s) + r[5] + 4294588738) & 4294967295),
		(e = t + (((o << 4) & 4294967295) | (o >>> 28))),
		(o = (s + (e ^ t ^ i) + r[8] + 2272392833) & 4294967295),
		(s = e + (((o << 11) & 4294967295) | (o >>> 21))),
		(o = (i + (s ^ e ^ t) + r[11] + 1839030562) & 4294967295),
		(i = s + (((o << 16) & 4294967295) | (o >>> 16))),
		(o = (t + (i ^ s ^ e) + r[14] + 4259657740) & 4294967295),
		(t = i + (((o << 23) & 4294967295) | (o >>> 9))),
		(o = (e + (t ^ i ^ s) + r[1] + 2763975236) & 4294967295),
		(e = t + (((o << 4) & 4294967295) | (o >>> 28))),
		(o = (s + (e ^ t ^ i) + r[4] + 1272893353) & 4294967295),
		(s = e + (((o << 11) & 4294967295) | (o >>> 21))),
		(o = (i + (s ^ e ^ t) + r[7] + 4139469664) & 4294967295),
		(i = s + (((o << 16) & 4294967295) | (o >>> 16))),
		(o = (t + (i ^ s ^ e) + r[10] + 3200236656) & 4294967295),
		(t = i + (((o << 23) & 4294967295) | (o >>> 9))),
		(o = (e + (t ^ i ^ s) + r[13] + 681279174) & 4294967295),
		(e = t + (((o << 4) & 4294967295) | (o >>> 28))),
		(o = (s + (e ^ t ^ i) + r[0] + 3936430074) & 4294967295),
		(s = e + (((o << 11) & 4294967295) | (o >>> 21))),
		(o = (i + (s ^ e ^ t) + r[3] + 3572445317) & 4294967295),
		(i = s + (((o << 16) & 4294967295) | (o >>> 16))),
		(o = (t + (i ^ s ^ e) + r[6] + 76029189) & 4294967295),
		(t = i + (((o << 23) & 4294967295) | (o >>> 9))),
		(o = (e + (t ^ i ^ s) + r[9] + 3654602809) & 4294967295),
		(e = t + (((o << 4) & 4294967295) | (o >>> 28))),
		(o = (s + (e ^ t ^ i) + r[12] + 3873151461) & 4294967295),
		(s = e + (((o << 11) & 4294967295) | (o >>> 21))),
		(o = (i + (s ^ e ^ t) + r[15] + 530742520) & 4294967295),
		(i = s + (((o << 16) & 4294967295) | (o >>> 16))),
		(o = (t + (i ^ s ^ e) + r[2] + 3299628645) & 4294967295),
		(t = i + (((o << 23) & 4294967295) | (o >>> 9))),
		(o = (e + (i ^ (t | ~s)) + r[0] + 4096336452) & 4294967295),
		(e = t + (((o << 6) & 4294967295) | (o >>> 26))),
		(o = (s + (t ^ (e | ~i)) + r[7] + 1126891415) & 4294967295),
		(s = e + (((o << 10) & 4294967295) | (o >>> 22))),
		(o = (i + (e ^ (s | ~t)) + r[14] + 2878612391) & 4294967295),
		(i = s + (((o << 15) & 4294967295) | (o >>> 17))),
		(o = (t + (s ^ (i | ~e)) + r[5] + 4237533241) & 4294967295),
		(t = i + (((o << 21) & 4294967295) | (o >>> 11))),
		(o = (e + (i ^ (t | ~s)) + r[12] + 1700485571) & 4294967295),
		(e = t + (((o << 6) & 4294967295) | (o >>> 26))),
		(o = (s + (t ^ (e | ~i)) + r[3] + 2399980690) & 4294967295),
		(s = e + (((o << 10) & 4294967295) | (o >>> 22))),
		(o = (i + (e ^ (s | ~t)) + r[10] + 4293915773) & 4294967295),
		(i = s + (((o << 15) & 4294967295) | (o >>> 17))),
		(o = (t + (s ^ (i | ~e)) + r[1] + 2240044497) & 4294967295),
		(t = i + (((o << 21) & 4294967295) | (o >>> 11))),
		(o = (e + (i ^ (t | ~s)) + r[8] + 1873313359) & 4294967295),
		(e = t + (((o << 6) & 4294967295) | (o >>> 26))),
		(o = (s + (t ^ (e | ~i)) + r[15] + 4264355552) & 4294967295),
		(s = e + (((o << 10) & 4294967295) | (o >>> 22))),
		(o = (i + (e ^ (s | ~t)) + r[6] + 2734768916) & 4294967295),
		(i = s + (((o << 15) & 4294967295) | (o >>> 17))),
		(o = (t + (s ^ (i | ~e)) + r[13] + 1309151649) & 4294967295),
		(t = i + (((o << 21) & 4294967295) | (o >>> 11))),
		(o = (e + (i ^ (t | ~s)) + r[4] + 4149444226) & 4294967295),
		(e = t + (((o << 6) & 4294967295) | (o >>> 26))),
		(o = (s + (t ^ (e | ~i)) + r[11] + 3174756917) & 4294967295),
		(s = e + (((o << 10) & 4294967295) | (o >>> 22))),
		(o = (i + (e ^ (s | ~t)) + r[2] + 718787259) & 4294967295),
		(i = s + (((o << 15) & 4294967295) | (o >>> 17))),
		(o = (t + (s ^ (i | ~e)) + r[9] + 3951481745) & 4294967295),
		(n.g[0] = (n.g[0] + e) & 4294967295),
		(n.g[1] = (n.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
		(n.g[2] = (n.g[2] + i) & 4294967295),
		(n.g[3] = (n.g[3] + s) & 4294967295);
}
ye.prototype.j = function (n, e) {
	e === void 0 && (e = n.length);
	for (var t = e - this.blockSize, r = this.m, i = this.h, s = 0; s < e; ) {
		if (i == 0) for (; s <= t; ) Ki(this, n, s), (s += this.blockSize);
		if (typeof n == 'string') {
			for (; s < e; )
				if (((r[i++] = n.charCodeAt(s++)), i == this.blockSize)) {
					Ki(this, r), (i = 0);
					break;
				}
		} else
			for (; s < e; )
				if (((r[i++] = n[s++]), i == this.blockSize)) {
					Ki(this, r), (i = 0);
					break;
				}
	}
	(this.h = i), (this.i += e);
};
ye.prototype.l = function () {
	var n = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
	n[0] = 128;
	for (var e = 1; e < n.length - 8; ++e) n[e] = 0;
	var t = 8 * this.i;
	for (e = n.length - 8; e < n.length; ++e) (n[e] = t & 255), (t /= 256);
	for (this.j(n), n = Array(16), e = t = 0; 4 > e; ++e)
		for (var r = 0; 32 > r; r += 8) n[t++] = (this.g[e] >>> r) & 255;
	return n;
};
function V(n, e) {
	this.h = e;
	for (var t = [], r = !0, i = n.length - 1; 0 <= i; i--) {
		var s = n[i] | 0;
		(r && s == e) || ((t[i] = s), (r = !1));
	}
	this.g = t;
}
var gm = {};
function fo(n) {
	return -128 <= n && 128 > n
		? wg(n, function (e) {
				return new V([e | 0], 0 > e ? -1 : 0);
			})
		: new V([n | 0], 0 > n ? -1 : 0);
}
function Re(n) {
	if (isNaN(n) || !isFinite(n)) return Ft;
	if (0 > n) return J(Re(-n));
	for (var e = [], t = 1, r = 0; n >= t; r++) (e[r] = (n / t) | 0), (t *= vs);
	return new V(e, 0);
}
function yl(n, e) {
	if (n.length == 0) throw Error('number format error: empty string');
	if (((e = e || 10), 2 > e || 36 < e)) throw Error('radix out of range: ' + e);
	if (n.charAt(0) == '-') return J(yl(n.substring(1), e));
	if (0 <= n.indexOf('-')) throw Error('number format error: interior "-" character');
	for (var t = Re(Math.pow(e, 8)), r = Ft, i = 0; i < n.length; i += 8) {
		var s = Math.min(8, n.length - i),
			o = parseInt(n.substring(i, i + s), e);
		8 > s
			? ((s = Re(Math.pow(e, s))), (r = r.R(s).add(Re(o))))
			: ((r = r.R(t)), (r = r.add(Re(o))));
	}
	return r;
}
var vs = 4294967296,
	Ft = fo(0),
	Es = fo(1),
	ka = fo(16777216);
_ = V.prototype;
_.ea = function () {
	if (de(this)) return -J(this).ea();
	for (var n = 0, e = 1, t = 0; t < this.g.length; t++) {
		var r = this.D(t);
		(n += (0 <= r ? r : vs + r) * e), (e *= vs);
	}
	return n;
};
_.toString = function (n) {
	if (((n = n || 10), 2 > n || 36 < n)) throw Error('radix out of range: ' + n);
	if (Le(this)) return '0';
	if (de(this)) return '-' + J(this).toString(n);
	for (var e = Re(Math.pow(n, 6)), t = this, r = ''; ; ) {
		var i = Mr(t, e).g;
		t = Lr(t, i.R(e));
		var s = ((0 < t.g.length ? t.g[0] : t.h) >>> 0).toString(n);
		if (((t = i), Le(t))) return s + r;
		for (; 6 > s.length; ) s = '0' + s;
		r = s + r;
	}
};
_.D = function (n) {
	return 0 > n ? 0 : n < this.g.length ? this.g[n] : this.h;
};
function Le(n) {
	if (n.h != 0) return !1;
	for (var e = 0; e < n.g.length; e++) if (n.g[e] != 0) return !1;
	return !0;
}
function de(n) {
	return n.h == -1;
}
_.X = function (n) {
	return (n = Lr(this, n)), de(n) ? -1 : Le(n) ? 0 : 1;
};
function J(n) {
	for (var e = n.g.length, t = [], r = 0; r < e; r++) t[r] = ~n.g[r];
	return new V(t, ~n.h).add(Es);
}
_.abs = function () {
	return de(this) ? J(this) : this;
};
_.add = function (n) {
	for (var e = Math.max(this.g.length, n.g.length), t = [], r = 0, i = 0; i <= e; i++) {
		var s = r + (this.D(i) & 65535) + (n.D(i) & 65535),
			o = (s >>> 16) + (this.D(i) >>> 16) + (n.D(i) >>> 16);
		(r = o >>> 16), (s &= 65535), (o &= 65535), (t[i] = (o << 16) | s);
	}
	return new V(t, t[t.length - 1] & -2147483648 ? -1 : 0);
};
function Lr(n, e) {
	return n.add(J(e));
}
_.R = function (n) {
	if (Le(this) || Le(n)) return Ft;
	if (de(this)) return de(n) ? J(this).R(J(n)) : J(J(this).R(n));
	if (de(n)) return J(this.R(J(n)));
	if (0 > this.X(ka) && 0 > n.X(ka)) return Re(this.ea() * n.ea());
	for (var e = this.g.length + n.g.length, t = [], r = 0; r < 2 * e; r++) t[r] = 0;
	for (r = 0; r < this.g.length; r++)
		for (var i = 0; i < n.g.length; i++) {
			var s = this.D(r) >>> 16,
				o = this.D(r) & 65535,
				a = n.D(i) >>> 16,
				c = n.D(i) & 65535;
			(t[2 * r + 2 * i] += o * c),
				fr(t, 2 * r + 2 * i),
				(t[2 * r + 2 * i + 1] += s * c),
				fr(t, 2 * r + 2 * i + 1),
				(t[2 * r + 2 * i + 1] += o * a),
				fr(t, 2 * r + 2 * i + 1),
				(t[2 * r + 2 * i + 2] += s * a),
				fr(t, 2 * r + 2 * i + 2);
		}
	for (r = 0; r < e; r++) t[r] = (t[2 * r + 1] << 16) | t[2 * r];
	for (r = e; r < 2 * e; r++) t[r] = 0;
	return new V(t, 0);
};
function fr(n, e) {
	for (; (n[e] & 65535) != n[e]; ) (n[e + 1] += n[e] >>> 16), (n[e] &= 65535), e++;
}
function un(n, e) {
	(this.g = n), (this.h = e);
}
function Mr(n, e) {
	if (Le(e)) throw Error('division by zero');
	if (Le(n)) return new un(Ft, Ft);
	if (de(n)) return (e = Mr(J(n), e)), new un(J(e.g), J(e.h));
	if (de(e)) return (e = Mr(n, J(e))), new un(J(e.g), e.h);
	if (30 < n.g.length) {
		if (de(n) || de(e)) throw Error('slowDivide_ only works with positive integers.');
		for (var t = Es, r = e; 0 >= r.X(n); ) (t = Da(t)), (r = Da(r));
		var i = Dt(t, 1),
			s = Dt(r, 1);
		for (r = Dt(r, 2), t = Dt(t, 2); !Le(r); ) {
			var o = s.add(r);
			0 >= o.X(n) && ((i = i.add(t)), (s = o)), (r = Dt(r, 1)), (t = Dt(t, 1));
		}
		return (e = Lr(n, i.R(e))), new un(i, e);
	}
	for (i = Ft; 0 <= n.X(e); ) {
		for (
			t = Math.max(1, Math.floor(n.ea() / e.ea())),
				r = Math.ceil(Math.log(t) / Math.LN2),
				r = 48 >= r ? 1 : Math.pow(2, r - 48),
				s = Re(t),
				o = s.R(e);
			de(o) || 0 < o.X(n);

		)
			(t -= r), (s = Re(t)), (o = s.R(e));
		Le(s) && (s = Es), (i = i.add(s)), (n = Lr(n, o));
	}
	return new un(i, n);
}
_.gb = function (n) {
	return Mr(this, n).h;
};
_.and = function (n) {
	for (var e = Math.max(this.g.length, n.g.length), t = [], r = 0; r < e; r++)
		t[r] = this.D(r) & n.D(r);
	return new V(t, this.h & n.h);
};
_.or = function (n) {
	for (var e = Math.max(this.g.length, n.g.length), t = [], r = 0; r < e; r++)
		t[r] = this.D(r) | n.D(r);
	return new V(t, this.h | n.h);
};
_.xor = function (n) {
	for (var e = Math.max(this.g.length, n.g.length), t = [], r = 0; r < e; r++)
		t[r] = this.D(r) ^ n.D(r);
	return new V(t, this.h ^ n.h);
};
function Da(n) {
	for (var e = n.g.length + 1, t = [], r = 0; r < e; r++)
		t[r] = (n.D(r) << 1) | (n.D(r - 1) >>> 31);
	return new V(t, n.h);
}
function Dt(n, e) {
	var t = e >> 5;
	e %= 32;
	for (var r = n.g.length - t, i = [], s = 0; s < r; s++)
		i[s] = 0 < e ? (n.D(s + t) >>> e) | (n.D(s + t + 1) << (32 - e)) : n.D(s + t);
	return new V(i, n.h);
}
Or.prototype.createWebChannel = Or.prototype.g;
le.prototype.send = le.prototype.u;
le.prototype.open = le.prototype.m;
le.prototype.close = le.prototype.close;
ai.NO_ERROR = 0;
ai.TIMEOUT = 8;
ai.HTTP_ERROR = 6;
Lu.COMPLETE = 'complete';
Mu.EventType = Gn;
Gn.OPEN = 'a';
Gn.CLOSE = 'b';
Gn.ERROR = 'c';
Gn.MESSAGE = 'd';
W.prototype.listen = W.prototype.O;
F.prototype.listenOnce = F.prototype.P;
F.prototype.getLastError = F.prototype.Sa;
F.prototype.getLastErrorCode = F.prototype.Ia;
F.prototype.getStatus = F.prototype.da;
F.prototype.getResponseJson = F.prototype.Wa;
F.prototype.getResponseText = F.prototype.ja;
F.prototype.send = F.prototype.ha;
F.prototype.setWithCredentials = F.prototype.Oa;
ye.prototype.digest = ye.prototype.l;
ye.prototype.reset = ye.prototype.reset;
ye.prototype.update = ye.prototype.j;
V.prototype.add = V.prototype.add;
V.prototype.multiply = V.prototype.R;
V.prototype.modulo = V.prototype.gb;
V.prototype.compare = V.prototype.X;
V.prototype.toNumber = V.prototype.ea;
V.prototype.toString = V.prototype.toString;
V.prototype.getBits = V.prototype.D;
V.fromNumber = Re;
V.fromString = yl;
var mm = function () {
		return new Or();
	},
	_m = function () {
		return oi();
	},
	Gi = ai,
	ym = Lu,
	vm = Pt,
	Va = {
		xb: 0,
		Ab: 1,
		Bb: 2,
		Ub: 3,
		Zb: 4,
		Wb: 5,
		Xb: 6,
		Vb: 7,
		Tb: 8,
		Yb: 9,
		PROXY: 10,
		NOPROXY: 11,
		Rb: 12,
		Nb: 13,
		Ob: 14,
		Mb: 15,
		Pb: 16,
		Qb: 17,
		tb: 18,
		sb: 19,
		ub: 20
	},
	pr = Mu,
	Em = F,
	Im = ye,
	Ut = V;
const Na = '@firebase/firestore';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class te {
	constructor(e) {
		this.uid = e;
	}
	isAuthenticated() {
		return this.uid != null;
	}
	toKey() {
		return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
	}
	isEqual(e) {
		return e.uid === this.uid;
	}
}
(te.UNAUTHENTICATED = new te(null)),
	(te.GOOGLE_CREDENTIALS = new te('google-credentials-uid')),
	(te.FIRST_PARTY = new te('first-party-uid')),
	(te.MOCK_USER = new te('mock-user'));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tn = '10.10.0';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Et = new Yr('@firebase/firestore');
function ln() {
	return Et.logLevel;
}
function m(n, ...e) {
	if (Et.logLevel <= b.DEBUG) {
		const t = e.map(po);
		Et.debug(`Firestore (${tn}): ${n}`, ...t);
	}
}
function Ve(n, ...e) {
	if (Et.logLevel <= b.ERROR) {
		const t = e.map(po);
		Et.error(`Firestore (${tn}): ${n}`, ...t);
	}
}
function Ht(n, ...e) {
	if (Et.logLevel <= b.WARN) {
		const t = e.map(po);
		Et.warn(`Firestore (${tn}): ${n}`, ...t);
	}
}
function po(n) {
	if (typeof n == 'string') return n;
	try {
		/**
		 * @license
		 * Copyright 2020 Google LLC
		 *
		 * Licensed under the Apache License, Version 2.0 (the "License");
		 * you may not use this file except in compliance with the License.
		 * You may obtain a copy of the License at
		 *
		 *   http://www.apache.org/licenses/LICENSE-2.0
		 *
		 * Unless required by applicable law or agreed to in writing, software
		 * distributed under the License is distributed on an "AS IS" BASIS,
		 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
		 * See the License for the specific language governing permissions and
		 * limitations under the License.
		 */ return (function (t) {
			return JSON.stringify(t);
		})(n);
	} catch {
		return n;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function T(n = 'Unexpected state') {
	const e = `FIRESTORE (${tn}) INTERNAL ASSERTION FAILED: ` + n;
	throw (Ve(e), new Error(e));
}
function N(n, e) {
	n || T();
}
function R(n, e) {
	return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const p = {
	OK: 'ok',
	CANCELLED: 'cancelled',
	UNKNOWN: 'unknown',
	INVALID_ARGUMENT: 'invalid-argument',
	DEADLINE_EXCEEDED: 'deadline-exceeded',
	NOT_FOUND: 'not-found',
	ALREADY_EXISTS: 'already-exists',
	PERMISSION_DENIED: 'permission-denied',
	UNAUTHENTICATED: 'unauthenticated',
	RESOURCE_EXHAUSTED: 'resource-exhausted',
	FAILED_PRECONDITION: 'failed-precondition',
	ABORTED: 'aborted',
	OUT_OF_RANGE: 'out-of-range',
	UNIMPLEMENTED: 'unimplemented',
	INTERNAL: 'internal',
	UNAVAILABLE: 'unavailable',
	DATA_LOSS: 'data-loss'
};
class y extends Ee {
	constructor(e, t) {
		super(e, t),
			(this.code = e),
			(this.message = t),
			(this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Se {
	constructor() {
		this.promise = new Promise((e, t) => {
			(this.resolve = e), (this.reject = t);
		});
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vl {
	constructor(e, t) {
		(this.user = t),
			(this.type = 'OAuth'),
			(this.headers = new Map()),
			this.headers.set('Authorization', `Bearer ${e}`);
	}
}
class Tm {
	getToken() {
		return Promise.resolve(null);
	}
	invalidateToken() {}
	start(e, t) {
		e.enqueueRetryable(() => t(te.UNAUTHENTICATED));
	}
	shutdown() {}
}
class wm {
	constructor(e) {
		(this.token = e), (this.changeListener = null);
	}
	getToken() {
		return Promise.resolve(this.token);
	}
	invalidateToken() {}
	start(e, t) {
		(this.changeListener = t), e.enqueueRetryable(() => t(this.token.user));
	}
	shutdown() {
		this.changeListener = null;
	}
}
class Am {
	constructor(e) {
		(this.t = e),
			(this.currentUser = te.UNAUTHENTICATED),
			(this.i = 0),
			(this.forceRefresh = !1),
			(this.auth = null);
	}
	start(e, t) {
		let r = this.i;
		const i = (c) => (this.i !== r ? ((r = this.i), t(c)) : Promise.resolve());
		let s = new Se();
		this.o = () => {
			this.i++,
				(this.currentUser = this.u()),
				s.resolve(),
				(s = new Se()),
				e.enqueueRetryable(() => i(this.currentUser));
		};
		const o = () => {
				const c = s;
				e.enqueueRetryable(async () => {
					await c.promise, await i(this.currentUser);
				});
			},
			a = (c) => {
				m('FirebaseAuthCredentialsProvider', 'Auth detected'),
					(this.auth = c),
					this.auth.addAuthTokenListener(this.o),
					o();
			};
		this.t.onInit((c) => a(c)),
			setTimeout(() => {
				if (!this.auth) {
					const c = this.t.getImmediate({ optional: !0 });
					c
						? a(c)
						: (m('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
							s.resolve(),
							(s = new Se()));
				}
			}, 0),
			o();
	}
	getToken() {
		const e = this.i,
			t = this.forceRefresh;
		return (
			(this.forceRefresh = !1),
			this.auth
				? this.auth
						.getToken(t)
						.then((r) =>
							this.i !== e
								? (m('FirebaseAuthCredentialsProvider', 'getToken aborted due to token change.'),
									this.getToken())
								: r
									? (N(typeof r.accessToken == 'string'), new vl(r.accessToken, this.currentUser))
									: null
						)
				: Promise.resolve(null)
		);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.auth && this.auth.removeAuthTokenListener(this.o);
	}
	u() {
		const e = this.auth && this.auth.getUid();
		return N(e === null || typeof e == 'string'), new te(e);
	}
}
class Rm {
	constructor(e, t, r) {
		(this.l = e),
			(this.h = t),
			(this.P = r),
			(this.type = 'FirstParty'),
			(this.user = te.FIRST_PARTY),
			(this.I = new Map());
	}
	T() {
		return this.P ? this.P() : null;
	}
	get headers() {
		this.I.set('X-Goog-AuthUser', this.l);
		const e = this.T();
		return (
			e && this.I.set('Authorization', e),
			this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
			this.I
		);
	}
}
class Sm {
	constructor(e, t, r) {
		(this.l = e), (this.h = t), (this.P = r);
	}
	getToken() {
		return Promise.resolve(new Rm(this.l, this.h, this.P));
	}
	start(e, t) {
		e.enqueueRetryable(() => t(te.FIRST_PARTY));
	}
	shutdown() {}
	invalidateToken() {}
}
class Pm {
	constructor(e) {
		(this.value = e),
			(this.type = 'AppCheck'),
			(this.headers = new Map()),
			e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value);
	}
}
class Cm {
	constructor(e) {
		(this.A = e), (this.forceRefresh = !1), (this.appCheck = null), (this.R = null);
	}
	start(e, t) {
		const r = (s) => {
			s.error != null &&
				m(
					'FirebaseAppCheckTokenProvider',
					`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
				);
			const o = s.token !== this.R;
			return (
				(this.R = s.token),
				m('FirebaseAppCheckTokenProvider', `Received ${o ? 'new' : 'existing'} token.`),
				o ? t(s.token) : Promise.resolve()
			);
		};
		this.o = (s) => {
			e.enqueueRetryable(() => r(s));
		};
		const i = (s) => {
			m('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
				(this.appCheck = s),
				this.appCheck.addTokenListener(this.o);
		};
		this.A.onInit((s) => i(s)),
			setTimeout(() => {
				if (!this.appCheck) {
					const s = this.A.getImmediate({ optional: !0 });
					s ? i(s) : m('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
				}
			}, 0);
	}
	getToken() {
		const e = this.forceRefresh;
		return (
			(this.forceRefresh = !1),
			this.appCheck
				? this.appCheck
						.getToken(e)
						.then((t) =>
							t ? (N(typeof t.token == 'string'), (this.R = t.token), new Pm(t.token)) : null
						)
				: Promise.resolve(null)
		);
	}
	invalidateToken() {
		this.forceRefresh = !0;
	}
	shutdown() {
		this.appCheck && this.appCheck.removeTokenListener(this.o);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bm(n) {
	const e = typeof self < 'u' && (self.crypto || self.msCrypto),
		t = new Uint8Array(n);
	if (e && typeof e.getRandomValues == 'function') e.getRandomValues(t);
	else for (let r = 0; r < n; r++) t[r] = Math.floor(256 * Math.random());
	return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class El {
	static newId() {
		const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
			t = Math.floor(256 / e.length) * e.length;
		let r = '';
		for (; r.length < 20; ) {
			const i = bm(40);
			for (let s = 0; s < i.length; ++s)
				r.length < 20 && i[s] < t && (r += e.charAt(i[s] % e.length));
		}
		return r;
	}
}
function D(n, e) {
	return n < e ? -1 : n > e ? 1 : 0;
}
function Wt(n, e, t) {
	return n.length === e.length && n.every((r, i) => t(r, e[i]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z {
	constructor(e, t) {
		if (((this.seconds = e), (this.nanoseconds = t), t < 0))
			throw new y(p.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + t);
		if (t >= 1e9) throw new y(p.INVALID_ARGUMENT, 'Timestamp nanoseconds out of range: ' + t);
		if (e < -62135596800) throw new y(p.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
		if (e >= 253402300800) throw new y(p.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
	}
	static now() {
		return z.fromMillis(Date.now());
	}
	static fromDate(e) {
		return z.fromMillis(e.getTime());
	}
	static fromMillis(e) {
		const t = Math.floor(e / 1e3),
			r = Math.floor(1e6 * (e - 1e3 * t));
		return new z(t, r);
	}
	toDate() {
		return new Date(this.toMillis());
	}
	toMillis() {
		return 1e3 * this.seconds + this.nanoseconds / 1e6;
	}
	_compareTo(e) {
		return this.seconds === e.seconds
			? D(this.nanoseconds, e.nanoseconds)
			: D(this.seconds, e.seconds);
	}
	isEqual(e) {
		return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
	}
	toString() {
		return 'Timestamp(seconds=' + this.seconds + ', nanoseconds=' + this.nanoseconds + ')';
	}
	toJSON() {
		return { seconds: this.seconds, nanoseconds: this.nanoseconds };
	}
	valueOf() {
		const e = this.seconds - -62135596800;
		return String(e).padStart(12, '0') + '.' + String(this.nanoseconds).padStart(9, '0');
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class A {
	constructor(e) {
		this.timestamp = e;
	}
	static fromTimestamp(e) {
		return new A(e);
	}
	static min() {
		return new A(new z(0, 0));
	}
	static max() {
		return new A(new z(253402300799, 999999999));
	}
	compareTo(e) {
		return this.timestamp._compareTo(e.timestamp);
	}
	isEqual(e) {
		return this.timestamp.isEqual(e.timestamp);
	}
	toMicroseconds() {
		return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
	}
	toString() {
		return 'SnapshotVersion(' + this.timestamp.toString() + ')';
	}
	toTimestamp() {
		return this.timestamp;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ln {
	constructor(e, t, r) {
		t === void 0 ? (t = 0) : t > e.length && T(),
			r === void 0 ? (r = e.length - t) : r > e.length - t && T(),
			(this.segments = e),
			(this.offset = t),
			(this.len = r);
	}
	get length() {
		return this.len;
	}
	isEqual(e) {
		return Ln.comparator(this, e) === 0;
	}
	child(e) {
		const t = this.segments.slice(this.offset, this.limit());
		return (
			e instanceof Ln
				? e.forEach((r) => {
						t.push(r);
					})
				: t.push(e),
			this.construct(t)
		);
	}
	limit() {
		return this.offset + this.length;
	}
	popFirst(e) {
		return (
			(e = e === void 0 ? 1 : e), this.construct(this.segments, this.offset + e, this.length - e)
		);
	}
	popLast() {
		return this.construct(this.segments, this.offset, this.length - 1);
	}
	firstSegment() {
		return this.segments[this.offset];
	}
	lastSegment() {
		return this.get(this.length - 1);
	}
	get(e) {
		return this.segments[this.offset + e];
	}
	isEmpty() {
		return this.length === 0;
	}
	isPrefixOf(e) {
		if (e.length < this.length) return !1;
		for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
		return !0;
	}
	isImmediateParentOf(e) {
		if (this.length + 1 !== e.length) return !1;
		for (let t = 0; t < this.length; t++) if (this.get(t) !== e.get(t)) return !1;
		return !0;
	}
	forEach(e) {
		for (let t = this.offset, r = this.limit(); t < r; t++) e(this.segments[t]);
	}
	toArray() {
		return this.segments.slice(this.offset, this.limit());
	}
	static comparator(e, t) {
		const r = Math.min(e.length, t.length);
		for (let i = 0; i < r; i++) {
			const s = e.get(i),
				o = t.get(i);
			if (s < o) return -1;
			if (s > o) return 1;
		}
		return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
	}
}
class M extends Ln {
	construct(e, t, r) {
		return new M(e, t, r);
	}
	canonicalString() {
		return this.toArray().join('/');
	}
	toString() {
		return this.canonicalString();
	}
	toUriEncodedString() {
		return this.toArray().map(encodeURIComponent).join('/');
	}
	static fromString(...e) {
		const t = [];
		for (const r of e) {
			if (r.indexOf('//') >= 0)
				throw new y(
					p.INVALID_ARGUMENT,
					`Invalid segment (${r}). Paths must not contain // in them.`
				);
			t.push(...r.split('/').filter((i) => i.length > 0));
		}
		return new M(t);
	}
	static emptyPath() {
		return new M([]);
	}
}
const km = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Y extends Ln {
	construct(e, t, r) {
		return new Y(e, t, r);
	}
	static isValidIdentifier(e) {
		return km.test(e);
	}
	canonicalString() {
		return this.toArray()
			.map(
				(e) => (
					(e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
					Y.isValidIdentifier(e) || (e = '`' + e + '`'),
					e
				)
			)
			.join('.');
	}
	toString() {
		return this.canonicalString();
	}
	isKeyField() {
		return this.length === 1 && this.get(0) === '__name__';
	}
	static keyField() {
		return new Y(['__name__']);
	}
	static fromServerFormat(e) {
		const t = [];
		let r = '',
			i = 0;
		const s = () => {
			if (r.length === 0)
				throw new y(
					p.INVALID_ARGUMENT,
					`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
				);
			t.push(r), (r = '');
		};
		let o = !1;
		for (; i < e.length; ) {
			const a = e[i];
			if (a === '\\') {
				if (i + 1 === e.length)
					throw new y(p.INVALID_ARGUMENT, 'Path has trailing escape character: ' + e);
				const c = e[i + 1];
				if (c !== '\\' && c !== '.' && c !== '`')
					throw new y(p.INVALID_ARGUMENT, 'Path has invalid escape sequence: ' + e);
				(r += c), (i += 2);
			} else a === '`' ? ((o = !o), i++) : a !== '.' || o ? ((r += a), i++) : (s(), i++);
		}
		if ((s(), o)) throw new y(p.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
		return new Y(t);
	}
	static emptyPath() {
		return new Y([]);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v {
	constructor(e) {
		this.path = e;
	}
	static fromPath(e) {
		return new v(M.fromString(e));
	}
	static fromName(e) {
		return new v(M.fromString(e).popFirst(5));
	}
	static empty() {
		return new v(M.emptyPath());
	}
	get collectionGroup() {
		return this.path.popLast().lastSegment();
	}
	hasCollectionId(e) {
		return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
	}
	getCollectionGroup() {
		return this.path.get(this.path.length - 2);
	}
	getCollectionPath() {
		return this.path.popLast();
	}
	isEqual(e) {
		return e !== null && M.comparator(this.path, e.path) === 0;
	}
	toString() {
		return this.path.toString();
	}
	static comparator(e, t) {
		return M.comparator(e.path, t.path);
	}
	static isDocumentKey(e) {
		return e.length % 2 == 0;
	}
	static fromSegments(e) {
		return new v(new M(e.slice()));
	}
}
function Dm(n, e) {
	const t = n.toTimestamp().seconds,
		r = n.toTimestamp().nanoseconds + 1,
		i = A.fromTimestamp(r === 1e9 ? new z(t + 1, 0) : new z(t, r));
	return new Ze(i, v.empty(), e);
}
function Vm(n) {
	return new Ze(n.readTime, n.key, -1);
}
class Ze {
	constructor(e, t, r) {
		(this.readTime = e), (this.documentKey = t), (this.largestBatchId = r);
	}
	static min() {
		return new Ze(A.min(), v.empty(), -1);
	}
	static max() {
		return new Ze(A.max(), v.empty(), -1);
	}
}
function Nm(n, e) {
	let t = n.readTime.compareTo(e.readTime);
	return t !== 0
		? t
		: ((t = v.comparator(n.documentKey, e.documentKey)),
			t !== 0 ? t : D(n.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Om =
	'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class Lm {
	constructor() {
		this.onCommittedListeners = [];
	}
	addOnCommittedListener(e) {
		this.onCommittedListeners.push(e);
	}
	raiseOnCommittedEvent() {
		this.onCommittedListeners.forEach((e) => e());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Zn(n) {
	if (n.code !== p.FAILED_PRECONDITION || n.message !== Om) throw n;
	m('LocalStore', 'Unexpectedly lost primary lease');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class f {
	constructor(e) {
		(this.nextCallback = null),
			(this.catchCallback = null),
			(this.result = void 0),
			(this.error = void 0),
			(this.isDone = !1),
			(this.callbackAttached = !1),
			e(
				(t) => {
					(this.isDone = !0), (this.result = t), this.nextCallback && this.nextCallback(t);
				},
				(t) => {
					(this.isDone = !0), (this.error = t), this.catchCallback && this.catchCallback(t);
				}
			);
	}
	catch(e) {
		return this.next(void 0, e);
	}
	next(e, t) {
		return (
			this.callbackAttached && T(),
			(this.callbackAttached = !0),
			this.isDone
				? this.error
					? this.wrapFailure(t, this.error)
					: this.wrapSuccess(e, this.result)
				: new f((r, i) => {
						(this.nextCallback = (s) => {
							this.wrapSuccess(e, s).next(r, i);
						}),
							(this.catchCallback = (s) => {
								this.wrapFailure(t, s).next(r, i);
							});
					})
		);
	}
	toPromise() {
		return new Promise((e, t) => {
			this.next(e, t);
		});
	}
	wrapUserFunction(e) {
		try {
			const t = e();
			return t instanceof f ? t : f.resolve(t);
		} catch (t) {
			return f.reject(t);
		}
	}
	wrapSuccess(e, t) {
		return e ? this.wrapUserFunction(() => e(t)) : f.resolve(t);
	}
	wrapFailure(e, t) {
		return e ? this.wrapUserFunction(() => e(t)) : f.reject(t);
	}
	static resolve(e) {
		return new f((t, r) => {
			t(e);
		});
	}
	static reject(e) {
		return new f((t, r) => {
			r(e);
		});
	}
	static waitFor(e) {
		return new f((t, r) => {
			let i = 0,
				s = 0,
				o = !1;
			e.forEach((a) => {
				++i,
					a.next(
						() => {
							++s, o && s === i && t();
						},
						(c) => r(c)
					);
			}),
				(o = !0),
				s === i && t();
		});
	}
	static or(e) {
		let t = f.resolve(!1);
		for (const r of e) t = t.next((i) => (i ? f.resolve(i) : r()));
		return t;
	}
	static forEach(e, t) {
		const r = [];
		return (
			e.forEach((i, s) => {
				r.push(t.call(this, i, s));
			}),
			this.waitFor(r)
		);
	}
	static mapArray(e, t) {
		return new f((r, i) => {
			const s = e.length,
				o = new Array(s);
			let a = 0;
			for (let c = 0; c < s; c++) {
				const u = c;
				t(e[u]).next(
					(l) => {
						(o[u] = l), ++a, a === s && r(o);
					},
					(l) => i(l)
				);
			}
		});
	}
	static doWhile(e, t) {
		return new f((r, i) => {
			const s = () => {
				e() === !0
					? t().next(() => {
							s();
						}, i)
					: r();
			};
			s();
		});
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class go {
	constructor(e, t) {
		(this.action = e),
			(this.transaction = t),
			(this.aborted = !1),
			(this.V = new Se()),
			(this.transaction.oncomplete = () => {
				this.V.resolve();
			}),
			(this.transaction.onabort = () => {
				t.error ? this.V.reject(new En(e, t.error)) : this.V.resolve();
			}),
			(this.transaction.onerror = (r) => {
				const i = mo(r.target.error);
				this.V.reject(new En(e, i));
			});
	}
	static open(e, t, r, i) {
		try {
			return new go(t, e.transaction(i, r));
		} catch (s) {
			throw new En(t, s);
		}
	}
	get m() {
		return this.V.promise;
	}
	abort(e) {
		e && this.V.reject(e),
			this.aborted ||
				(m('SimpleDb', 'Aborting transaction:', e ? e.message : 'Client-initiated abort'),
				(this.aborted = !0),
				this.transaction.abort());
	}
	g() {
		const e = this.transaction;
		this.aborted || typeof e.commit != 'function' || e.commit();
	}
	store(e) {
		const t = this.transaction.objectStore(e);
		return new xm(t);
	}
}
class ft {
	constructor(e, t, r) {
		(this.name = e),
			(this.version = t),
			(this.p = r),
			ft.S(q()) === 12.2 &&
				Ve(
					'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
				);
	}
	static delete(e) {
		return (
			m('SimpleDb', 'Removing database:', e), ut(window.indexedDB.deleteDatabase(e)).toPromise()
		);
	}
	static D() {
		if (!xs()) return !1;
		if (ft.C()) return !0;
		const e = q(),
			t = ft.S(e),
			r = 0 < t && t < 10,
			i = ft.v(e),
			s = 0 < i && i < 4.5;
		return !(
			e.indexOf('MSIE ') > 0 ||
			e.indexOf('Trident/') > 0 ||
			e.indexOf('Edge/') > 0 ||
			r ||
			s
		);
	}
	static C() {
		var e;
		return (
			typeof process < 'u' &&
			((e = process.__PRIVATE_env) === null || e === void 0 ? void 0 : e.F) === 'YES'
		);
	}
	static M(e, t) {
		return e.store(t);
	}
	static S(e) {
		const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
			r = t ? t[1].split('_').slice(0, 2).join('.') : '-1';
		return Number(r);
	}
	static v(e) {
		const t = e.match(/Android ([\d.]+)/i),
			r = t ? t[1].split('.').slice(0, 2).join('.') : '-1';
		return Number(r);
	}
	async O(e) {
		return (
			this.db ||
				(m('SimpleDb', 'Opening database:', this.name),
				(this.db = await new Promise((t, r) => {
					const i = indexedDB.open(this.name, this.version);
					(i.onsuccess = (s) => {
						const o = s.target.result;
						t(o);
					}),
						(i.onblocked = () => {
							r(
								new En(
									e,
									'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
								)
							);
						}),
						(i.onerror = (s) => {
							const o = s.target.error;
							o.name === 'VersionError'
								? r(
										new y(
											p.FAILED_PRECONDITION,
											'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
										)
									)
								: o.name === 'InvalidStateError'
									? r(
											new y(
												p.FAILED_PRECONDITION,
												'Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: ' +
													o
											)
										)
									: r(new En(e, o));
						}),
						(i.onupgradeneeded = (s) => {
							m(
								'SimpleDb',
								'Database "' + this.name + '" requires upgrade from version:',
								s.oldVersion
							);
							const o = s.target.result;
							this.p.N(o, i.transaction, s.oldVersion, this.version).next(() => {
								m('SimpleDb', 'Database upgrade to version ' + this.version + ' complete');
							});
						});
				}))),
			this.L && (this.db.onversionchange = (t) => this.L(t)),
			this.db
		);
	}
	B(e) {
		(this.L = e), this.db && (this.db.onversionchange = (t) => e(t));
	}
	async runTransaction(e, t, r, i) {
		const s = t === 'readonly';
		let o = 0;
		for (;;) {
			++o;
			try {
				this.db = await this.O(e);
				const a = go.open(this.db, e, s ? 'readonly' : 'readwrite', r),
					c = i(a)
						.next((u) => (a.g(), u))
						.catch((u) => (a.abort(u), f.reject(u)))
						.toPromise();
				return c.catch(() => {}), await a.m, c;
			} catch (a) {
				const c = a,
					u = c.name !== 'FirebaseError' && o < 3;
				if (
					(m('SimpleDb', 'Transaction failed with error:', c.message, 'Retrying:', u),
					this.close(),
					!u)
				)
					return Promise.reject(c);
			}
		}
	}
	close() {
		this.db && this.db.close(), (this.db = void 0);
	}
}
class Mm {
	constructor(e) {
		(this.k = e), (this.q = !1), (this.K = null);
	}
	get isDone() {
		return this.q;
	}
	get $() {
		return this.K;
	}
	set cursor(e) {
		this.k = e;
	}
	done() {
		this.q = !0;
	}
	U(e) {
		this.K = e;
	}
	delete() {
		return ut(this.k.delete());
	}
}
class En extends y {
	constructor(e, t) {
		super(p.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`),
			(this.name = 'IndexedDbTransactionError');
	}
}
function er(n) {
	return n.name === 'IndexedDbTransactionError';
}
class xm {
	constructor(e) {
		this.store = e;
	}
	put(e, t) {
		let r;
		return (
			t !== void 0
				? (m('SimpleDb', 'PUT', this.store.name, e, t), (r = this.store.put(t, e)))
				: (m('SimpleDb', 'PUT', this.store.name, '<auto-key>', e), (r = this.store.put(e))),
			ut(r)
		);
	}
	add(e) {
		return m('SimpleDb', 'ADD', this.store.name, e, e), ut(this.store.add(e));
	}
	get(e) {
		return ut(this.store.get(e)).next(
			(t) => (t === void 0 && (t = null), m('SimpleDb', 'GET', this.store.name, e, t), t)
		);
	}
	delete(e) {
		return m('SimpleDb', 'DELETE', this.store.name, e), ut(this.store.delete(e));
	}
	count() {
		return m('SimpleDb', 'COUNT', this.store.name), ut(this.store.count());
	}
	W(e, t) {
		const r = this.options(e, t),
			i = r.index ? this.store.index(r.index) : this.store;
		if (typeof i.getAll == 'function') {
			const s = i.getAll(r.range);
			return new f((o, a) => {
				(s.onerror = (c) => {
					a(c.target.error);
				}),
					(s.onsuccess = (c) => {
						o(c.target.result);
					});
			});
		}
		{
			const s = this.cursor(r),
				o = [];
			return this.G(s, (a, c) => {
				o.push(c);
			}).next(() => o);
		}
	}
	j(e, t) {
		const r = this.store.getAll(e, t === null ? void 0 : t);
		return new f((i, s) => {
			(r.onerror = (o) => {
				s(o.target.error);
			}),
				(r.onsuccess = (o) => {
					i(o.target.result);
				});
		});
	}
	H(e, t) {
		m('SimpleDb', 'DELETE ALL', this.store.name);
		const r = this.options(e, t);
		r.J = !1;
		const i = this.cursor(r);
		return this.G(i, (s, o, a) => a.delete());
	}
	Y(e, t) {
		let r;
		t ? (r = e) : ((r = {}), (t = e));
		const i = this.cursor(r);
		return this.G(i, t);
	}
	Z(e) {
		const t = this.cursor({});
		return new f((r, i) => {
			(t.onerror = (s) => {
				const o = mo(s.target.error);
				i(o);
			}),
				(t.onsuccess = (s) => {
					const o = s.target.result;
					o
						? e(o.primaryKey, o.value).next((a) => {
								a ? o.continue() : r();
							})
						: r();
				});
		});
	}
	G(e, t) {
		const r = [];
		return new f((i, s) => {
			(e.onerror = (o) => {
				s(o.target.error);
			}),
				(e.onsuccess = (o) => {
					const a = o.target.result;
					if (!a) return void i();
					const c = new Mm(a),
						u = t(a.primaryKey, a.value, c);
					if (u instanceof f) {
						const l = u.catch((h) => (c.done(), f.reject(h)));
						r.push(l);
					}
					c.isDone ? i() : c.$ === null ? a.continue() : a.continue(c.$);
				});
		}).next(() => f.waitFor(r));
	}
	options(e, t) {
		let r;
		return e !== void 0 && (typeof e == 'string' ? (r = e) : (t = e)), { index: r, range: t };
	}
	cursor(e) {
		let t = 'next';
		if ((e.reverse && (t = 'prev'), e.index)) {
			const r = this.store.index(e.index);
			return e.J ? r.openKeyCursor(e.range, t) : r.openCursor(e.range, t);
		}
		return this.store.openCursor(e.range, t);
	}
}
function ut(n) {
	return new f((e, t) => {
		(n.onsuccess = (r) => {
			const i = r.target.result;
			e(i);
		}),
			(n.onerror = (r) => {
				const i = mo(r.target.error);
				t(i);
			});
	});
}
let Oa = !1;
function mo(n) {
	const e = ft.S(q());
	if (e >= 12.2 && e < 13) {
		const t = 'An internal error was encountered in the Indexed Database server';
		if (n.message.indexOf(t) >= 0) {
			const r = new y(
				'internal',
				`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`
			);
			return (
				Oa ||
					((Oa = !0),
					setTimeout(() => {
						throw r;
					}, 0)),
				r
			);
		}
	}
	return n;
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _o {
	constructor(e, t) {
		(this.previousValue = e),
			t &&
				((t.sequenceNumberHandler = (r) => this.se(r)),
				(this.oe = (r) => t.writeSequenceNumber(r)));
	}
	se(e) {
		return (this.previousValue = Math.max(e, this.previousValue)), this.previousValue;
	}
	next() {
		const e = ++this.previousValue;
		return this.oe && this.oe(e), e;
	}
}
_o._e = -1;
function mi(n) {
	return n == null;
}
function xr(n) {
	return n === 0 && 1 / n == -1 / 0;
}
function Fm(n) {
	return (
		typeof n == 'number' &&
		Number.isInteger(n) &&
		!xr(n) &&
		n <= Number.MAX_SAFE_INTEGER &&
		n >= Number.MIN_SAFE_INTEGER
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function La(n) {
	let e = 0;
	for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e++;
	return e;
}
function nn(n, e) {
	for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e(t, n[t]);
}
function Il(n) {
	for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
	return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class x {
	constructor(e, t) {
		(this.comparator = e), (this.root = t || Q.EMPTY);
	}
	insert(e, t) {
		return new x(
			this.comparator,
			this.root.insert(e, t, this.comparator).copy(null, null, Q.BLACK, null, null)
		);
	}
	remove(e) {
		return new x(
			this.comparator,
			this.root.remove(e, this.comparator).copy(null, null, Q.BLACK, null, null)
		);
	}
	get(e) {
		let t = this.root;
		for (; !t.isEmpty(); ) {
			const r = this.comparator(e, t.key);
			if (r === 0) return t.value;
			r < 0 ? (t = t.left) : r > 0 && (t = t.right);
		}
		return null;
	}
	indexOf(e) {
		let t = 0,
			r = this.root;
		for (; !r.isEmpty(); ) {
			const i = this.comparator(e, r.key);
			if (i === 0) return t + r.left.size;
			i < 0 ? (r = r.left) : ((t += r.left.size + 1), (r = r.right));
		}
		return -1;
	}
	isEmpty() {
		return this.root.isEmpty();
	}
	get size() {
		return this.root.size;
	}
	minKey() {
		return this.root.minKey();
	}
	maxKey() {
		return this.root.maxKey();
	}
	inorderTraversal(e) {
		return this.root.inorderTraversal(e);
	}
	forEach(e) {
		this.inorderTraversal((t, r) => (e(t, r), !1));
	}
	toString() {
		const e = [];
		return this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)), `{${e.join(', ')}}`;
	}
	reverseTraversal(e) {
		return this.root.reverseTraversal(e);
	}
	getIterator() {
		return new gr(this.root, null, this.comparator, !1);
	}
	getIteratorFrom(e) {
		return new gr(this.root, e, this.comparator, !1);
	}
	getReverseIterator() {
		return new gr(this.root, null, this.comparator, !0);
	}
	getReverseIteratorFrom(e) {
		return new gr(this.root, e, this.comparator, !0);
	}
}
class gr {
	constructor(e, t, r, i) {
		(this.isReverse = i), (this.nodeStack = []);
		let s = 1;
		for (; !e.isEmpty(); )
			if (((s = t ? r(e.key, t) : 1), t && i && (s *= -1), s < 0))
				e = this.isReverse ? e.left : e.right;
			else {
				if (s === 0) {
					this.nodeStack.push(e);
					break;
				}
				this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
			}
	}
	getNext() {
		let e = this.nodeStack.pop();
		const t = { key: e.key, value: e.value };
		if (this.isReverse) for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
		else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
		return t;
	}
	hasNext() {
		return this.nodeStack.length > 0;
	}
	peek() {
		if (this.nodeStack.length === 0) return null;
		const e = this.nodeStack[this.nodeStack.length - 1];
		return { key: e.key, value: e.value };
	}
}
class Q {
	constructor(e, t, r, i, s) {
		(this.key = e),
			(this.value = t),
			(this.color = r ?? Q.RED),
			(this.left = i ?? Q.EMPTY),
			(this.right = s ?? Q.EMPTY),
			(this.size = this.left.size + 1 + this.right.size);
	}
	copy(e, t, r, i, s) {
		return new Q(e ?? this.key, t ?? this.value, r ?? this.color, i ?? this.left, s ?? this.right);
	}
	isEmpty() {
		return !1;
	}
	inorderTraversal(e) {
		return (
			this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
		);
	}
	reverseTraversal(e) {
		return (
			this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
		);
	}
	min() {
		return this.left.isEmpty() ? this : this.left.min();
	}
	minKey() {
		return this.min().key;
	}
	maxKey() {
		return this.right.isEmpty() ? this.key : this.right.maxKey();
	}
	insert(e, t, r) {
		let i = this;
		const s = r(e, i.key);
		return (
			(i =
				s < 0
					? i.copy(null, null, null, i.left.insert(e, t, r), null)
					: s === 0
						? i.copy(null, t, null, null, null)
						: i.copy(null, null, null, null, i.right.insert(e, t, r))),
			i.fixUp()
		);
	}
	removeMin() {
		if (this.left.isEmpty()) return Q.EMPTY;
		let e = this;
		return (
			e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
			(e = e.copy(null, null, null, e.left.removeMin(), null)),
			e.fixUp()
		);
	}
	remove(e, t) {
		let r,
			i = this;
		if (t(e, i.key) < 0)
			i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()),
				(i = i.copy(null, null, null, i.left.remove(e, t), null));
		else {
			if (
				(i.left.isRed() && (i = i.rotateRight()),
				i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()),
				t(e, i.key) === 0)
			) {
				if (i.right.isEmpty()) return Q.EMPTY;
				(r = i.right.min()), (i = i.copy(r.key, r.value, null, null, i.right.removeMin()));
			}
			i = i.copy(null, null, null, null, i.right.remove(e, t));
		}
		return i.fixUp();
	}
	isRed() {
		return this.color;
	}
	fixUp() {
		let e = this;
		return (
			e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
			e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
			e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
			e
		);
	}
	moveRedLeft() {
		let e = this.colorFlip();
		return (
			e.right.left.isRed() &&
				((e = e.copy(null, null, null, null, e.right.rotateRight())),
				(e = e.rotateLeft()),
				(e = e.colorFlip())),
			e
		);
	}
	moveRedRight() {
		let e = this.colorFlip();
		return e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e;
	}
	rotateLeft() {
		const e = this.copy(null, null, Q.RED, null, this.right.left);
		return this.right.copy(null, null, this.color, e, null);
	}
	rotateRight() {
		const e = this.copy(null, null, Q.RED, this.left.right, null);
		return this.left.copy(null, null, this.color, null, e);
	}
	colorFlip() {
		const e = this.left.copy(null, null, !this.left.color, null, null),
			t = this.right.copy(null, null, !this.right.color, null, null);
		return this.copy(null, null, !this.color, e, t);
	}
	checkMaxDepth() {
		const e = this.check();
		return Math.pow(2, e) <= this.size + 1;
	}
	check() {
		if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw T();
		const e = this.left.check();
		if (e !== this.right.check()) throw T();
		return e + (this.isRed() ? 0 : 1);
	}
}
(Q.EMPTY = null), (Q.RED = !0), (Q.BLACK = !1);
Q.EMPTY = new (class {
	constructor() {
		this.size = 0;
	}
	get key() {
		throw T();
	}
	get value() {
		throw T();
	}
	get color() {
		throw T();
	}
	get left() {
		throw T();
	}
	get right() {
		throw T();
	}
	copy(e, t, r, i, s) {
		return this;
	}
	insert(e, t, r) {
		return new Q(e, t);
	}
	remove(e, t) {
		return this;
	}
	isEmpty() {
		return !0;
	}
	inorderTraversal(e) {
		return !1;
	}
	reverseTraversal(e) {
		return !1;
	}
	minKey() {
		return null;
	}
	maxKey() {
		return null;
	}
	isRed() {
		return !1;
	}
	checkMaxDepth() {
		return !0;
	}
	check() {
		return 0;
	}
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z {
	constructor(e) {
		(this.comparator = e), (this.data = new x(this.comparator));
	}
	has(e) {
		return this.data.get(e) !== null;
	}
	first() {
		return this.data.minKey();
	}
	last() {
		return this.data.maxKey();
	}
	get size() {
		return this.data.size;
	}
	indexOf(e) {
		return this.data.indexOf(e);
	}
	forEach(e) {
		this.data.inorderTraversal((t, r) => (e(t), !1));
	}
	forEachInRange(e, t) {
		const r = this.data.getIteratorFrom(e[0]);
		for (; r.hasNext(); ) {
			const i = r.getNext();
			if (this.comparator(i.key, e[1]) >= 0) return;
			t(i.key);
		}
	}
	forEachWhile(e, t) {
		let r;
		for (r = t !== void 0 ? this.data.getIteratorFrom(t) : this.data.getIterator(); r.hasNext(); )
			if (!e(r.getNext().key)) return;
	}
	firstAfterOrEqual(e) {
		const t = this.data.getIteratorFrom(e);
		return t.hasNext() ? t.getNext().key : null;
	}
	getIterator() {
		return new Ma(this.data.getIterator());
	}
	getIteratorFrom(e) {
		return new Ma(this.data.getIteratorFrom(e));
	}
	add(e) {
		return this.copy(this.data.remove(e).insert(e, !0));
	}
	delete(e) {
		return this.has(e) ? this.copy(this.data.remove(e)) : this;
	}
	isEmpty() {
		return this.data.isEmpty();
	}
	unionWith(e) {
		let t = this;
		return (
			t.size < e.size && ((t = e), (e = this)),
			e.forEach((r) => {
				t = t.add(r);
			}),
			t
		);
	}
	isEqual(e) {
		if (!(e instanceof Z) || this.size !== e.size) return !1;
		const t = this.data.getIterator(),
			r = e.data.getIterator();
		for (; t.hasNext(); ) {
			const i = t.getNext().key,
				s = r.getNext().key;
			if (this.comparator(i, s) !== 0) return !1;
		}
		return !0;
	}
	toArray() {
		const e = [];
		return (
			this.forEach((t) => {
				e.push(t);
			}),
			e
		);
	}
	toString() {
		const e = [];
		return this.forEach((t) => e.push(t)), 'SortedSet(' + e.toString() + ')';
	}
	copy(e) {
		const t = new Z(this.comparator);
		return (t.data = e), t;
	}
}
class Ma {
	constructor(e) {
		this.iter = e;
	}
	getNext() {
		return this.iter.getNext().key;
	}
	hasNext() {
		return this.iter.hasNext();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class me {
	constructor(e) {
		(this.fields = e), e.sort(Y.comparator);
	}
	static empty() {
		return new me([]);
	}
	unionWith(e) {
		let t = new Z(Y.comparator);
		for (const r of this.fields) t = t.add(r);
		for (const r of e) t = t.add(r);
		return new me(t.toArray());
	}
	covers(e) {
		for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
		return !1;
	}
	isEqual(e) {
		return Wt(this.fields, e.fields, (t, r) => t.isEqual(r));
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tl extends Error {
	constructor() {
		super(...arguments), (this.name = 'Base64DecodeError');
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class se {
	constructor(e) {
		this.binaryString = e;
	}
	static fromBase64String(e) {
		const t = (function (i) {
			try {
				return atob(i);
			} catch (s) {
				throw typeof DOMException < 'u' && s instanceof DOMException
					? new Tl('Invalid base64 string: ' + s)
					: s;
			}
		})(e);
		return new se(t);
	}
	static fromUint8Array(e) {
		const t = (function (i) {
			let s = '';
			for (let o = 0; o < i.length; ++o) s += String.fromCharCode(i[o]);
			return s;
		})(e);
		return new se(t);
	}
	[Symbol.iterator]() {
		let e = 0;
		return {
			next: () =>
				e < this.binaryString.length
					? { value: this.binaryString.charCodeAt(e++), done: !1 }
					: { value: void 0, done: !0 }
		};
	}
	toBase64() {
		return (function (t) {
			return btoa(t);
		})(this.binaryString);
	}
	toUint8Array() {
		return (function (t) {
			const r = new Uint8Array(t.length);
			for (let i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
			return r;
		})(this.binaryString);
	}
	approximateByteSize() {
		return 2 * this.binaryString.length;
	}
	compareTo(e) {
		return D(this.binaryString, e.binaryString);
	}
	isEqual(e) {
		return this.binaryString === e.binaryString;
	}
}
se.EMPTY_BYTE_STRING = new se('');
const Um = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function et(n) {
	if ((N(!!n), typeof n == 'string')) {
		let e = 0;
		const t = Um.exec(n);
		if ((N(!!t), t[1])) {
			let i = t[1];
			(i = (i + '000000000').substr(0, 9)), (e = Number(i));
		}
		const r = new Date(n);
		return { seconds: Math.floor(r.getTime() / 1e3), nanos: e };
	}
	return { seconds: j(n.seconds), nanos: j(n.nanos) };
}
function j(n) {
	return typeof n == 'number' ? n : typeof n == 'string' ? Number(n) : 0;
}
function It(n) {
	return typeof n == 'string' ? se.fromBase64String(n) : se.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yo(n) {
	var e, t;
	return (
		((t = (
			((e = n == null ? void 0 : n.mapValue) === null || e === void 0 ? void 0 : e.fields) || {}
		).__type__) === null || t === void 0
			? void 0
			: t.stringValue) === 'server_timestamp'
	);
}
function vo(n) {
	const e = n.mapValue.fields.__previous_value__;
	return yo(e) ? vo(e) : e;
}
function Mn(n) {
	const e = et(n.mapValue.fields.__local_write_time__.timestampValue);
	return new z(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bm {
	constructor(e, t, r, i, s, o, a, c, u) {
		(this.databaseId = e),
			(this.appId = t),
			(this.persistenceKey = r),
			(this.host = i),
			(this.ssl = s),
			(this.forceLongPolling = o),
			(this.autoDetectLongPolling = a),
			(this.longPollingOptions = c),
			(this.useFetchStreams = u);
	}
}
class xn {
	constructor(e, t) {
		(this.projectId = e), (this.database = t || '(default)');
	}
	static empty() {
		return new xn('', '');
	}
	get isDefaultDatabase() {
		return this.database === '(default)';
	}
	isEqual(e) {
		return e instanceof xn && e.projectId === this.projectId && e.database === this.database;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mr = { mapValue: { fields: { __type__: { stringValue: '__max__' } } } };
function Tt(n) {
	return 'nullValue' in n
		? 0
		: 'booleanValue' in n
			? 1
			: 'integerValue' in n || 'doubleValue' in n
				? 2
				: 'timestampValue' in n
					? 3
					: 'stringValue' in n
						? 5
						: 'bytesValue' in n
							? 6
							: 'referenceValue' in n
								? 7
								: 'geoPointValue' in n
									? 8
									: 'arrayValue' in n
										? 9
										: 'mapValue' in n
											? yo(n)
												? 4
												: jm(n)
													? 9007199254740991
													: 10
											: T();
}
function Ne(n, e) {
	if (n === e) return !0;
	const t = Tt(n);
	if (t !== Tt(e)) return !1;
	switch (t) {
		case 0:
		case 9007199254740991:
			return !0;
		case 1:
			return n.booleanValue === e.booleanValue;
		case 4:
			return Mn(n).isEqual(Mn(e));
		case 3:
			return (function (i, s) {
				if (
					typeof i.timestampValue == 'string' &&
					typeof s.timestampValue == 'string' &&
					i.timestampValue.length === s.timestampValue.length
				)
					return i.timestampValue === s.timestampValue;
				const o = et(i.timestampValue),
					a = et(s.timestampValue);
				return o.seconds === a.seconds && o.nanos === a.nanos;
			})(n, e);
		case 5:
			return n.stringValue === e.stringValue;
		case 6:
			return (function (i, s) {
				return It(i.bytesValue).isEqual(It(s.bytesValue));
			})(n, e);
		case 7:
			return n.referenceValue === e.referenceValue;
		case 8:
			return (function (i, s) {
				return (
					j(i.geoPointValue.latitude) === j(s.geoPointValue.latitude) &&
					j(i.geoPointValue.longitude) === j(s.geoPointValue.longitude)
				);
			})(n, e);
		case 2:
			return (function (i, s) {
				if ('integerValue' in i && 'integerValue' in s)
					return j(i.integerValue) === j(s.integerValue);
				if ('doubleValue' in i && 'doubleValue' in s) {
					const o = j(i.doubleValue),
						a = j(s.doubleValue);
					return o === a ? xr(o) === xr(a) : isNaN(o) && isNaN(a);
				}
				return !1;
			})(n, e);
		case 9:
			return Wt(n.arrayValue.values || [], e.arrayValue.values || [], Ne);
		case 10:
			return (function (i, s) {
				const o = i.mapValue.fields || {},
					a = s.mapValue.fields || {};
				if (La(o) !== La(a)) return !1;
				for (const c in o)
					if (o.hasOwnProperty(c) && (a[c] === void 0 || !Ne(o[c], a[c]))) return !1;
				return !0;
			})(n, e);
		default:
			return T();
	}
}
function Fn(n, e) {
	return (n.values || []).find((t) => Ne(t, e)) !== void 0;
}
function Kt(n, e) {
	if (n === e) return 0;
	const t = Tt(n),
		r = Tt(e);
	if (t !== r) return D(t, r);
	switch (t) {
		case 0:
		case 9007199254740991:
			return 0;
		case 1:
			return D(n.booleanValue, e.booleanValue);
		case 2:
			return (function (s, o) {
				const a = j(s.integerValue || s.doubleValue),
					c = j(o.integerValue || o.doubleValue);
				return a < c ? -1 : a > c ? 1 : a === c ? 0 : isNaN(a) ? (isNaN(c) ? 0 : -1) : 1;
			})(n, e);
		case 3:
			return xa(n.timestampValue, e.timestampValue);
		case 4:
			return xa(Mn(n), Mn(e));
		case 5:
			return D(n.stringValue, e.stringValue);
		case 6:
			return (function (s, o) {
				const a = It(s),
					c = It(o);
				return a.compareTo(c);
			})(n.bytesValue, e.bytesValue);
		case 7:
			return (function (s, o) {
				const a = s.split('/'),
					c = o.split('/');
				for (let u = 0; u < a.length && u < c.length; u++) {
					const l = D(a[u], c[u]);
					if (l !== 0) return l;
				}
				return D(a.length, c.length);
			})(n.referenceValue, e.referenceValue);
		case 8:
			return (function (s, o) {
				const a = D(j(s.latitude), j(o.latitude));
				return a !== 0 ? a : D(j(s.longitude), j(o.longitude));
			})(n.geoPointValue, e.geoPointValue);
		case 9:
			return (function (s, o) {
				const a = s.values || [],
					c = o.values || [];
				for (let u = 0; u < a.length && u < c.length; ++u) {
					const l = Kt(a[u], c[u]);
					if (l) return l;
				}
				return D(a.length, c.length);
			})(n.arrayValue, e.arrayValue);
		case 10:
			return (function (s, o) {
				if (s === mr.mapValue && o === mr.mapValue) return 0;
				if (s === mr.mapValue) return 1;
				if (o === mr.mapValue) return -1;
				const a = s.fields || {},
					c = Object.keys(a),
					u = o.fields || {},
					l = Object.keys(u);
				c.sort(), l.sort();
				for (let h = 0; h < c.length && h < l.length; ++h) {
					const d = D(c[h], l[h]);
					if (d !== 0) return d;
					const g = Kt(a[c[h]], u[l[h]]);
					if (g !== 0) return g;
				}
				return D(c.length, l.length);
			})(n.mapValue, e.mapValue);
		default:
			throw T();
	}
}
function xa(n, e) {
	if (typeof n == 'string' && typeof e == 'string' && n.length === e.length) return D(n, e);
	const t = et(n),
		r = et(e),
		i = D(t.seconds, r.seconds);
	return i !== 0 ? i : D(t.nanos, r.nanos);
}
function Gt(n) {
	return Is(n);
}
function Is(n) {
	return 'nullValue' in n
		? 'null'
		: 'booleanValue' in n
			? '' + n.booleanValue
			: 'integerValue' in n
				? '' + n.integerValue
				: 'doubleValue' in n
					? '' + n.doubleValue
					: 'timestampValue' in n
						? (function (t) {
								const r = et(t);
								return `time(${r.seconds},${r.nanos})`;
							})(n.timestampValue)
						: 'stringValue' in n
							? n.stringValue
							: 'bytesValue' in n
								? (function (t) {
										return It(t).toBase64();
									})(n.bytesValue)
								: 'referenceValue' in n
									? (function (t) {
											return v.fromName(t).toString();
										})(n.referenceValue)
									: 'geoPointValue' in n
										? (function (t) {
												return `geo(${t.latitude},${t.longitude})`;
											})(n.geoPointValue)
										: 'arrayValue' in n
											? (function (t) {
													let r = '[',
														i = !0;
													for (const s of t.values || []) i ? (i = !1) : (r += ','), (r += Is(s));
													return r + ']';
												})(n.arrayValue)
											: 'mapValue' in n
												? (function (t) {
														const r = Object.keys(t.fields || {}).sort();
														let i = '{',
															s = !0;
														for (const o of r)
															s ? (s = !1) : (i += ','), (i += `${o}:${Is(t.fields[o])}`);
														return i + '}';
													})(n.mapValue)
												: T();
}
function Ts(n) {
	return !!n && 'integerValue' in n;
}
function Eo(n) {
	return !!n && 'arrayValue' in n;
}
function Fa(n) {
	return !!n && 'nullValue' in n;
}
function Ua(n) {
	return !!n && 'doubleValue' in n && isNaN(Number(n.doubleValue));
}
function Er(n) {
	return !!n && 'mapValue' in n;
}
function In(n) {
	if (n.geoPointValue) return { geoPointValue: Object.assign({}, n.geoPointValue) };
	if (n.timestampValue && typeof n.timestampValue == 'object')
		return { timestampValue: Object.assign({}, n.timestampValue) };
	if (n.mapValue) {
		const e = { mapValue: { fields: {} } };
		return nn(n.mapValue.fields, (t, r) => (e.mapValue.fields[t] = In(r))), e;
	}
	if (n.arrayValue) {
		const e = { arrayValue: { values: [] } };
		for (let t = 0; t < (n.arrayValue.values || []).length; ++t)
			e.arrayValue.values[t] = In(n.arrayValue.values[t]);
		return e;
	}
	return Object.assign({}, n);
}
function jm(n) {
	return (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fe {
	constructor(e) {
		this.value = e;
	}
	static empty() {
		return new fe({ mapValue: {} });
	}
	field(e) {
		if (e.isEmpty()) return this.value;
		{
			let t = this.value;
			for (let r = 0; r < e.length - 1; ++r)
				if (((t = (t.mapValue.fields || {})[e.get(r)]), !Er(t))) return null;
			return (t = (t.mapValue.fields || {})[e.lastSegment()]), t || null;
		}
	}
	set(e, t) {
		this.getFieldsMap(e.popLast())[e.lastSegment()] = In(t);
	}
	setAll(e) {
		let t = Y.emptyPath(),
			r = {},
			i = [];
		e.forEach((o, a) => {
			if (!t.isImmediateParentOf(a)) {
				const c = this.getFieldsMap(t);
				this.applyChanges(c, r, i), (r = {}), (i = []), (t = a.popLast());
			}
			o ? (r[a.lastSegment()] = In(o)) : i.push(a.lastSegment());
		});
		const s = this.getFieldsMap(t);
		this.applyChanges(s, r, i);
	}
	delete(e) {
		const t = this.field(e.popLast());
		Er(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
	}
	isEqual(e) {
		return Ne(this.value, e.value);
	}
	getFieldsMap(e) {
		let t = this.value;
		t.mapValue.fields || (t.mapValue = { fields: {} });
		for (let r = 0; r < e.length; ++r) {
			let i = t.mapValue.fields[e.get(r)];
			(Er(i) && i.mapValue.fields) ||
				((i = { mapValue: { fields: {} } }), (t.mapValue.fields[e.get(r)] = i)),
				(t = i);
		}
		return t.mapValue.fields;
	}
	applyChanges(e, t, r) {
		nn(t, (i, s) => (e[i] = s));
		for (const i of r) delete e[i];
	}
	clone() {
		return new fe(In(this.value));
	}
}
function wl(n) {
	const e = [];
	return (
		nn(n.fields, (t, r) => {
			const i = new Y([t]);
			if (Er(r)) {
				const s = wl(r.mapValue).fields;
				if (s.length === 0) e.push(i);
				else for (const o of s) e.push(i.child(o));
			} else e.push(i);
		}),
		new me(e)
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ne {
	constructor(e, t, r, i, s, o, a) {
		(this.key = e),
			(this.documentType = t),
			(this.version = r),
			(this.readTime = i),
			(this.createTime = s),
			(this.data = o),
			(this.documentState = a);
	}
	static newInvalidDocument(e) {
		return new ne(e, 0, A.min(), A.min(), A.min(), fe.empty(), 0);
	}
	static newFoundDocument(e, t, r, i) {
		return new ne(e, 1, t, A.min(), r, i, 0);
	}
	static newNoDocument(e, t) {
		return new ne(e, 2, t, A.min(), A.min(), fe.empty(), 0);
	}
	static newUnknownDocument(e, t) {
		return new ne(e, 3, t, A.min(), A.min(), fe.empty(), 2);
	}
	convertToFoundDocument(e, t) {
		return (
			!this.createTime.isEqual(A.min()) ||
				(this.documentType !== 2 && this.documentType !== 0) ||
				(this.createTime = e),
			(this.version = e),
			(this.documentType = 1),
			(this.data = t),
			(this.documentState = 0),
			this
		);
	}
	convertToNoDocument(e) {
		return (
			(this.version = e),
			(this.documentType = 2),
			(this.data = fe.empty()),
			(this.documentState = 0),
			this
		);
	}
	convertToUnknownDocument(e) {
		return (
			(this.version = e),
			(this.documentType = 3),
			(this.data = fe.empty()),
			(this.documentState = 2),
			this
		);
	}
	setHasCommittedMutations() {
		return (this.documentState = 2), this;
	}
	setHasLocalMutations() {
		return (this.documentState = 1), (this.version = A.min()), this;
	}
	setReadTime(e) {
		return (this.readTime = e), this;
	}
	get hasLocalMutations() {
		return this.documentState === 1;
	}
	get hasCommittedMutations() {
		return this.documentState === 2;
	}
	get hasPendingWrites() {
		return this.hasLocalMutations || this.hasCommittedMutations;
	}
	isValidDocument() {
		return this.documentType !== 0;
	}
	isFoundDocument() {
		return this.documentType === 1;
	}
	isNoDocument() {
		return this.documentType === 2;
	}
	isUnknownDocument() {
		return this.documentType === 3;
	}
	isEqual(e) {
		return (
			e instanceof ne &&
			this.key.isEqual(e.key) &&
			this.version.isEqual(e.version) &&
			this.documentType === e.documentType &&
			this.documentState === e.documentState &&
			this.data.isEqual(e.data)
		);
	}
	mutableCopy() {
		return new ne(
			this.key,
			this.documentType,
			this.version,
			this.readTime,
			this.createTime,
			this.data.clone(),
			this.documentState
		);
	}
	toString() {
		return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fr {
	constructor(e, t) {
		(this.position = e), (this.inclusive = t);
	}
}
function Ba(n, e, t) {
	let r = 0;
	for (let i = 0; i < n.position.length; i++) {
		const s = e[i],
			o = n.position[i];
		if (
			(s.field.isKeyField()
				? (r = v.comparator(v.fromName(o.referenceValue), t.key))
				: (r = Kt(o, t.data.field(s.field))),
			s.dir === 'desc' && (r *= -1),
			r !== 0)
		)
			break;
	}
	return r;
}
function ja(n, e) {
	if (n === null) return e === null;
	if (e === null || n.inclusive !== e.inclusive || n.position.length !== e.position.length)
		return !1;
	for (let t = 0; t < n.position.length; t++) if (!Ne(n.position[t], e.position[t])) return !1;
	return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ur {
	constructor(e, t = 'asc') {
		(this.field = e), (this.dir = t);
	}
}
function qm(n, e) {
	return n.dir === e.dir && n.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Al {}
class $ extends Al {
	constructor(e, t, r) {
		super(), (this.field = e), (this.op = t), (this.value = r);
	}
	static create(e, t, r) {
		return e.isKeyField()
			? t === 'in' || t === 'not-in'
				? this.createKeyFieldInFilter(e, t, r)
				: new zm(e, t, r)
			: t === 'array-contains'
				? new Km(e, r)
				: t === 'in'
					? new Gm(e, r)
					: t === 'not-in'
						? new Qm(e, r)
						: t === 'array-contains-any'
							? new Jm(e, r)
							: new $(e, t, r);
	}
	static createKeyFieldInFilter(e, t, r) {
		return t === 'in' ? new Hm(e, r) : new Wm(e, r);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return this.op === '!='
			? t !== null && this.matchesComparison(Kt(t, this.value))
			: t !== null && Tt(this.value) === Tt(t) && this.matchesComparison(Kt(t, this.value));
	}
	matchesComparison(e) {
		switch (this.op) {
			case '<':
				return e < 0;
			case '<=':
				return e <= 0;
			case '==':
				return e === 0;
			case '!=':
				return e !== 0;
			case '>':
				return e > 0;
			case '>=':
				return e >= 0;
			default:
				return T();
		}
	}
	isInequality() {
		return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
	}
	getFlattenedFilters() {
		return [this];
	}
	getFilters() {
		return [this];
	}
}
class Oe extends Al {
	constructor(e, t) {
		super(), (this.filters = e), (this.op = t), (this.ue = null);
	}
	static create(e, t) {
		return new Oe(e, t);
	}
	matches(e) {
		return Rl(this)
			? this.filters.find((t) => !t.matches(e)) === void 0
			: this.filters.find((t) => t.matches(e)) !== void 0;
	}
	getFlattenedFilters() {
		return (
			this.ue !== null ||
				(this.ue = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])),
			this.ue
		);
	}
	getFilters() {
		return Object.assign([], this.filters);
	}
}
function Rl(n) {
	return n.op === 'and';
}
function Sl(n) {
	return $m(n) && Rl(n);
}
function $m(n) {
	for (const e of n.filters) if (e instanceof Oe) return !1;
	return !0;
}
function ws(n) {
	if (n instanceof $) return n.field.canonicalString() + n.op.toString() + Gt(n.value);
	if (Sl(n)) return n.filters.map((e) => ws(e)).join(',');
	{
		const e = n.filters.map((t) => ws(t)).join(',');
		return `${n.op}(${e})`;
	}
}
function Pl(n, e) {
	return n instanceof $
		? (function (r, i) {
				return i instanceof $ && r.op === i.op && r.field.isEqual(i.field) && Ne(r.value, i.value);
			})(n, e)
		: n instanceof Oe
			? (function (r, i) {
					return i instanceof Oe && r.op === i.op && r.filters.length === i.filters.length
						? r.filters.reduce((s, o, a) => s && Pl(o, i.filters[a]), !0)
						: !1;
				})(n, e)
			: void T();
}
function Cl(n) {
	return n instanceof $
		? (function (t) {
				return `${t.field.canonicalString()} ${t.op} ${Gt(t.value)}`;
			})(n)
		: n instanceof Oe
			? (function (t) {
					return t.op.toString() + ' {' + t.getFilters().map(Cl).join(' ,') + '}';
				})(n)
			: 'Filter';
}
class zm extends $ {
	constructor(e, t, r) {
		super(e, t, r), (this.key = v.fromName(r.referenceValue));
	}
	matches(e) {
		const t = v.comparator(e.key, this.key);
		return this.matchesComparison(t);
	}
}
class Hm extends $ {
	constructor(e, t) {
		super(e, 'in', t), (this.keys = bl('in', t));
	}
	matches(e) {
		return this.keys.some((t) => t.isEqual(e.key));
	}
}
class Wm extends $ {
	constructor(e, t) {
		super(e, 'not-in', t), (this.keys = bl('not-in', t));
	}
	matches(e) {
		return !this.keys.some((t) => t.isEqual(e.key));
	}
}
function bl(n, e) {
	var t;
	return (((t = e.arrayValue) === null || t === void 0 ? void 0 : t.values) || []).map((r) =>
		v.fromName(r.referenceValue)
	);
}
class Km extends $ {
	constructor(e, t) {
		super(e, 'array-contains', t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return Eo(t) && Fn(t.arrayValue, this.value);
	}
}
class Gm extends $ {
	constructor(e, t) {
		super(e, 'in', t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return t !== null && Fn(this.value.arrayValue, t);
	}
}
class Qm extends $ {
	constructor(e, t) {
		super(e, 'not-in', t);
	}
	matches(e) {
		if (Fn(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
		const t = e.data.field(this.field);
		return t !== null && !Fn(this.value.arrayValue, t);
	}
}
class Jm extends $ {
	constructor(e, t) {
		super(e, 'array-contains-any', t);
	}
	matches(e) {
		const t = e.data.field(this.field);
		return (
			!(!Eo(t) || !t.arrayValue.values) &&
			t.arrayValue.values.some((r) => Fn(this.value.arrayValue, r))
		);
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ym {
	constructor(e, t = null, r = [], i = [], s = null, o = null, a = null) {
		(this.path = e),
			(this.collectionGroup = t),
			(this.orderBy = r),
			(this.filters = i),
			(this.limit = s),
			(this.startAt = o),
			(this.endAt = a),
			(this.ce = null);
	}
}
function qa(n, e = null, t = [], r = [], i = null, s = null, o = null) {
	return new Ym(n, e, t, r, i, s, o);
}
function Io(n) {
	const e = R(n);
	if (e.ce === null) {
		let t = e.path.canonicalString();
		e.collectionGroup !== null && (t += '|cg:' + e.collectionGroup),
			(t += '|f:'),
			(t += e.filters.map((r) => ws(r)).join(',')),
			(t += '|ob:'),
			(t += e.orderBy
				.map((r) =>
					(function (s) {
						return s.field.canonicalString() + s.dir;
					})(r)
				)
				.join(',')),
			mi(e.limit) || ((t += '|l:'), (t += e.limit)),
			e.startAt &&
				((t += '|lb:'),
				(t += e.startAt.inclusive ? 'b:' : 'a:'),
				(t += e.startAt.position.map((r) => Gt(r)).join(','))),
			e.endAt &&
				((t += '|ub:'),
				(t += e.endAt.inclusive ? 'a:' : 'b:'),
				(t += e.endAt.position.map((r) => Gt(r)).join(','))),
			(e.ce = t);
	}
	return e.ce;
}
function To(n, e) {
	if (n.limit !== e.limit || n.orderBy.length !== e.orderBy.length) return !1;
	for (let t = 0; t < n.orderBy.length; t++) if (!qm(n.orderBy[t], e.orderBy[t])) return !1;
	if (n.filters.length !== e.filters.length) return !1;
	for (let t = 0; t < n.filters.length; t++) if (!Pl(n.filters[t], e.filters[t])) return !1;
	return (
		n.collectionGroup === e.collectionGroup &&
		!!n.path.isEqual(e.path) &&
		!!ja(n.startAt, e.startAt) &&
		ja(n.endAt, e.endAt)
	);
}
function As(n) {
	return v.isDocumentKey(n.path) && n.collectionGroup === null && n.filters.length === 0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _i {
	constructor(e, t = null, r = [], i = [], s = null, o = 'F', a = null, c = null) {
		(this.path = e),
			(this.collectionGroup = t),
			(this.explicitOrderBy = r),
			(this.filters = i),
			(this.limit = s),
			(this.limitType = o),
			(this.startAt = a),
			(this.endAt = c),
			(this.le = null),
			(this.he = null),
			(this.Pe = null),
			this.startAt,
			this.endAt;
	}
}
function Xm(n, e, t, r, i, s, o, a) {
	return new _i(n, e, t, r, i, s, o, a);
}
function wo(n) {
	return new _i(n);
}
function $a(n) {
	return (
		n.filters.length === 0 &&
		n.limit === null &&
		n.startAt == null &&
		n.endAt == null &&
		(n.explicitOrderBy.length === 0 ||
			(n.explicitOrderBy.length === 1 && n.explicitOrderBy[0].field.isKeyField()))
	);
}
function Zm(n) {
	return n.collectionGroup !== null;
}
function Tn(n) {
	const e = R(n);
	if (e.le === null) {
		e.le = [];
		const t = new Set();
		for (const s of e.explicitOrderBy) e.le.push(s), t.add(s.field.canonicalString());
		const r =
			e.explicitOrderBy.length > 0 ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir : 'asc';
		(function (o) {
			let a = new Z(Y.comparator);
			return (
				o.filters.forEach((c) => {
					c.getFlattenedFilters().forEach((u) => {
						u.isInequality() && (a = a.add(u.field));
					});
				}),
				a
			);
		})(e).forEach((s) => {
			t.has(s.canonicalString()) || s.isKeyField() || e.le.push(new Ur(s, r));
		}),
			t.has(Y.keyField().canonicalString()) || e.le.push(new Ur(Y.keyField(), r));
	}
	return e.le;
}
function Pe(n) {
	const e = R(n);
	return e.he || (e.he = e_(e, Tn(n))), e.he;
}
function e_(n, e) {
	if (n.limitType === 'F')
		return qa(n.path, n.collectionGroup, e, n.filters, n.limit, n.startAt, n.endAt);
	{
		e = e.map((i) => {
			const s = i.dir === 'desc' ? 'asc' : 'desc';
			return new Ur(i.field, s);
		});
		const t = n.endAt ? new Fr(n.endAt.position, n.endAt.inclusive) : null,
			r = n.startAt ? new Fr(n.startAt.position, n.startAt.inclusive) : null;
		return qa(n.path, n.collectionGroup, e, n.filters, n.limit, t, r);
	}
}
function Rs(n, e, t) {
	return new _i(
		n.path,
		n.collectionGroup,
		n.explicitOrderBy.slice(),
		n.filters.slice(),
		e,
		t,
		n.startAt,
		n.endAt
	);
}
function yi(n, e) {
	return To(Pe(n), Pe(e)) && n.limitType === e.limitType;
}
function kl(n) {
	return `${Io(Pe(n))}|lt:${n.limitType}`;
}
function Vt(n) {
	return `Query(target=${(function (t) {
		let r = t.path.canonicalString();
		return (
			t.collectionGroup !== null && (r += ' collectionGroup=' + t.collectionGroup),
			t.filters.length > 0 && (r += `, filters: [${t.filters.map((i) => Cl(i)).join(', ')}]`),
			mi(t.limit) || (r += ', limit: ' + t.limit),
			t.orderBy.length > 0 &&
				(r += `, orderBy: [${t.orderBy
					.map((i) =>
						(function (o) {
							return `${o.field.canonicalString()} (${o.dir})`;
						})(i)
					)
					.join(', ')}]`),
			t.startAt &&
				((r += ', startAt: '),
				(r += t.startAt.inclusive ? 'b:' : 'a:'),
				(r += t.startAt.position.map((i) => Gt(i)).join(','))),
			t.endAt &&
				((r += ', endAt: '),
				(r += t.endAt.inclusive ? 'a:' : 'b:'),
				(r += t.endAt.position.map((i) => Gt(i)).join(','))),
			`Target(${r})`
		);
	})(Pe(n))}; limitType=${n.limitType})`;
}
function vi(n, e) {
	return (
		e.isFoundDocument() &&
		(function (r, i) {
			const s = i.key.path;
			return r.collectionGroup !== null
				? i.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(s)
				: v.isDocumentKey(r.path)
					? r.path.isEqual(s)
					: r.path.isImmediateParentOf(s);
		})(n, e) &&
		(function (r, i) {
			for (const s of Tn(r)) if (!s.field.isKeyField() && i.data.field(s.field) === null) return !1;
			return !0;
		})(n, e) &&
		(function (r, i) {
			for (const s of r.filters) if (!s.matches(i)) return !1;
			return !0;
		})(n, e) &&
		(function (r, i) {
			return !(
				(r.startAt &&
					!(function (o, a, c) {
						const u = Ba(o, a, c);
						return o.inclusive ? u <= 0 : u < 0;
					})(r.startAt, Tn(r), i)) ||
				(r.endAt &&
					!(function (o, a, c) {
						const u = Ba(o, a, c);
						return o.inclusive ? u >= 0 : u > 0;
					})(r.endAt, Tn(r), i))
			);
		})(n, e)
	);
}
function t_(n) {
	return (
		n.collectionGroup ||
		(n.path.length % 2 == 1 ? n.path.lastSegment() : n.path.get(n.path.length - 2))
	);
}
function Dl(n) {
	return (e, t) => {
		let r = !1;
		for (const i of Tn(n)) {
			const s = n_(i, e, t);
			if (s !== 0) return s;
			r = r || i.field.isKeyField();
		}
		return 0;
	};
}
function n_(n, e, t) {
	const r = n.field.isKeyField()
		? v.comparator(e.key, t.key)
		: (function (s, o, a) {
				const c = o.data.field(s),
					u = a.data.field(s);
				return c !== null && u !== null ? Kt(c, u) : T();
			})(n.field, e, t);
	switch (n.dir) {
		case 'asc':
			return r;
		case 'desc':
			return -1 * r;
		default:
			return T();
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn {
	constructor(e, t) {
		(this.mapKeyFn = e), (this.equalsFn = t), (this.inner = {}), (this.innerSize = 0);
	}
	get(e) {
		const t = this.mapKeyFn(e),
			r = this.inner[t];
		if (r !== void 0) {
			for (const [i, s] of r) if (this.equalsFn(i, e)) return s;
		}
	}
	has(e) {
		return this.get(e) !== void 0;
	}
	set(e, t) {
		const r = this.mapKeyFn(e),
			i = this.inner[r];
		if (i === void 0) return (this.inner[r] = [[e, t]]), void this.innerSize++;
		for (let s = 0; s < i.length; s++) if (this.equalsFn(i[s][0], e)) return void (i[s] = [e, t]);
		i.push([e, t]), this.innerSize++;
	}
	delete(e) {
		const t = this.mapKeyFn(e),
			r = this.inner[t];
		if (r === void 0) return !1;
		for (let i = 0; i < r.length; i++)
			if (this.equalsFn(r[i][0], e))
				return r.length === 1 ? delete this.inner[t] : r.splice(i, 1), this.innerSize--, !0;
		return !1;
	}
	forEach(e) {
		nn(this.inner, (t, r) => {
			for (const [i, s] of r) e(i, s);
		});
	}
	isEmpty() {
		return Il(this.inner);
	}
	size() {
		return this.innerSize;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const r_ = new x(v.comparator);
function qe() {
	return r_;
}
const Vl = new x(v.comparator);
function gn(...n) {
	let e = Vl;
	for (const t of n) e = e.insert(t.key, t);
	return e;
}
function Nl(n) {
	let e = Vl;
	return n.forEach((t, r) => (e = e.insert(t, r.overlayedDocument))), e;
}
function pt() {
	return wn();
}
function Ol() {
	return wn();
}
function wn() {
	return new rn(
		(n) => n.toString(),
		(n, e) => n.isEqual(e)
	);
}
const i_ = new x(v.comparator),
	s_ = new Z(v.comparator);
function C(...n) {
	let e = s_;
	for (const t of n) e = e.add(t);
	return e;
}
const o_ = new Z(D);
function a_() {
	return o_;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ll(n, e) {
	if (n.useProto3Json) {
		if (isNaN(e)) return { doubleValue: 'NaN' };
		if (e === 1 / 0) return { doubleValue: 'Infinity' };
		if (e === -1 / 0) return { doubleValue: '-Infinity' };
	}
	return { doubleValue: xr(e) ? '-0' : e };
}
function Ml(n) {
	return { integerValue: '' + n };
}
function c_(n, e) {
	return Fm(e) ? Ml(e) : Ll(n, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ei {
	constructor() {
		this._ = void 0;
	}
}
function u_(n, e, t) {
	return n instanceof Br
		? (function (i, s) {
				const o = {
					fields: {
						__type__: { stringValue: 'server_timestamp' },
						__local_write_time__: { timestampValue: { seconds: i.seconds, nanos: i.nanoseconds } }
					}
				};
				return s && yo(s) && (s = vo(s)), s && (o.fields.__previous_value__ = s), { mapValue: o };
			})(t, e)
		: n instanceof Un
			? Fl(n, e)
			: n instanceof Bn
				? Ul(n, e)
				: (function (i, s) {
						const o = xl(i, s),
							a = za(o) + za(i.Ie);
						return Ts(o) && Ts(i.Ie) ? Ml(a) : Ll(i.serializer, a);
					})(n, e);
}
function l_(n, e, t) {
	return n instanceof Un ? Fl(n, e) : n instanceof Bn ? Ul(n, e) : t;
}
function xl(n, e) {
	return n instanceof jr
		? (function (r) {
				return (
					Ts(r) ||
					(function (s) {
						return !!s && 'doubleValue' in s;
					})(r)
				);
			})(e)
			? e
			: { integerValue: 0 }
		: null;
}
class Br extends Ei {}
class Un extends Ei {
	constructor(e) {
		super(), (this.elements = e);
	}
}
function Fl(n, e) {
	const t = Bl(e);
	for (const r of n.elements) t.some((i) => Ne(i, r)) || t.push(r);
	return { arrayValue: { values: t } };
}
class Bn extends Ei {
	constructor(e) {
		super(), (this.elements = e);
	}
}
function Ul(n, e) {
	let t = Bl(e);
	for (const r of n.elements) t = t.filter((i) => !Ne(i, r));
	return { arrayValue: { values: t } };
}
class jr extends Ei {
	constructor(e, t) {
		super(), (this.serializer = e), (this.Ie = t);
	}
}
function za(n) {
	return j(n.integerValue || n.doubleValue);
}
function Bl(n) {
	return Eo(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function h_(n, e) {
	return (
		n.field.isEqual(e.field) &&
		(function (r, i) {
			return (r instanceof Un && i instanceof Un) || (r instanceof Bn && i instanceof Bn)
				? Wt(r.elements, i.elements, Ne)
				: r instanceof jr && i instanceof jr
					? Ne(r.Ie, i.Ie)
					: r instanceof Br && i instanceof Br;
		})(n.transform, e.transform)
	);
}
class d_ {
	constructor(e, t) {
		(this.version = e), (this.transformResults = t);
	}
}
class Ue {
	constructor(e, t) {
		(this.updateTime = e), (this.exists = t);
	}
	static none() {
		return new Ue();
	}
	static exists(e) {
		return new Ue(void 0, e);
	}
	static updateTime(e) {
		return new Ue(e);
	}
	get isNone() {
		return this.updateTime === void 0 && this.exists === void 0;
	}
	isEqual(e) {
		return (
			this.exists === e.exists &&
			(this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
		);
	}
}
function Ir(n, e) {
	return n.updateTime !== void 0
		? e.isFoundDocument() && e.version.isEqual(n.updateTime)
		: n.exists === void 0 || n.exists === e.isFoundDocument();
}
class Ii {}
function jl(n, e) {
	if (!n.hasLocalMutations || (e && e.fields.length === 0)) return null;
	if (e === null)
		return n.isNoDocument() ? new $l(n.key, Ue.none()) : new tr(n.key, n.data, Ue.none());
	{
		const t = n.data,
			r = fe.empty();
		let i = new Z(Y.comparator);
		for (let s of e.fields)
			if (!i.has(s)) {
				let o = t.field(s);
				o === null && s.length > 1 && ((s = s.popLast()), (o = t.field(s))),
					o === null ? r.delete(s) : r.set(s, o),
					(i = i.add(s));
			}
		return new Ct(n.key, r, new me(i.toArray()), Ue.none());
	}
}
function f_(n, e, t) {
	n instanceof tr
		? (function (i, s, o) {
				const a = i.value.clone(),
					c = Wa(i.fieldTransforms, s, o.transformResults);
				a.setAll(c), s.convertToFoundDocument(o.version, a).setHasCommittedMutations();
			})(n, e, t)
		: n instanceof Ct
			? (function (i, s, o) {
					if (!Ir(i.precondition, s)) return void s.convertToUnknownDocument(o.version);
					const a = Wa(i.fieldTransforms, s, o.transformResults),
						c = s.data;
					c.setAll(ql(i)),
						c.setAll(a),
						s.convertToFoundDocument(o.version, c).setHasCommittedMutations();
				})(n, e, t)
			: (function (i, s, o) {
					s.convertToNoDocument(o.version).setHasCommittedMutations();
				})(0, e, t);
}
function An(n, e, t, r) {
	return n instanceof tr
		? (function (s, o, a, c) {
				if (!Ir(s.precondition, o)) return a;
				const u = s.value.clone(),
					l = Ka(s.fieldTransforms, c, o);
				return u.setAll(l), o.convertToFoundDocument(o.version, u).setHasLocalMutations(), null;
			})(n, e, t, r)
		: n instanceof Ct
			? (function (s, o, a, c) {
					if (!Ir(s.precondition, o)) return a;
					const u = Ka(s.fieldTransforms, c, o),
						l = o.data;
					return (
						l.setAll(ql(s)),
						l.setAll(u),
						o.convertToFoundDocument(o.version, l).setHasLocalMutations(),
						a === null
							? null
							: a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((h) => h.field))
					);
				})(n, e, t, r)
			: (function (s, o, a) {
					return Ir(s.precondition, o)
						? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
						: a;
				})(n, e, t);
}
function p_(n, e) {
	let t = null;
	for (const r of n.fieldTransforms) {
		const i = e.data.field(r.field),
			s = xl(r.transform, i || null);
		s != null && (t === null && (t = fe.empty()), t.set(r.field, s));
	}
	return t || null;
}
function Ha(n, e) {
	return (
		n.type === e.type &&
		!!n.key.isEqual(e.key) &&
		!!n.precondition.isEqual(e.precondition) &&
		!!(function (r, i) {
			return (r === void 0 && i === void 0) || (!(!r || !i) && Wt(r, i, (s, o) => h_(s, o)));
		})(n.fieldTransforms, e.fieldTransforms) &&
		(n.type === 0
			? n.value.isEqual(e.value)
			: n.type !== 1 || (n.data.isEqual(e.data) && n.fieldMask.isEqual(e.fieldMask)))
	);
}
class tr extends Ii {
	constructor(e, t, r, i = []) {
		super(),
			(this.key = e),
			(this.value = t),
			(this.precondition = r),
			(this.fieldTransforms = i),
			(this.type = 0);
	}
	getFieldMask() {
		return null;
	}
}
class Ct extends Ii {
	constructor(e, t, r, i, s = []) {
		super(),
			(this.key = e),
			(this.data = t),
			(this.fieldMask = r),
			(this.precondition = i),
			(this.fieldTransforms = s),
			(this.type = 1);
	}
	getFieldMask() {
		return this.fieldMask;
	}
}
function ql(n) {
	const e = new Map();
	return (
		n.fieldMask.fields.forEach((t) => {
			if (!t.isEmpty()) {
				const r = n.data.field(t);
				e.set(t, r);
			}
		}),
		e
	);
}
function Wa(n, e, t) {
	const r = new Map();
	N(n.length === t.length);
	for (let i = 0; i < t.length; i++) {
		const s = n[i],
			o = s.transform,
			a = e.data.field(s.field);
		r.set(s.field, l_(o, a, t[i]));
	}
	return r;
}
function Ka(n, e, t) {
	const r = new Map();
	for (const i of n) {
		const s = i.transform,
			o = t.data.field(i.field);
		r.set(i.field, u_(s, o, e));
	}
	return r;
}
class $l extends Ii {
	constructor(e, t) {
		super(), (this.key = e), (this.precondition = t), (this.type = 2), (this.fieldTransforms = []);
	}
	getFieldMask() {
		return null;
	}
}
class g_ extends Ii {
	constructor(e, t) {
		super(), (this.key = e), (this.precondition = t), (this.type = 3), (this.fieldTransforms = []);
	}
	getFieldMask() {
		return null;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class m_ {
	constructor(e, t, r, i) {
		(this.batchId = e), (this.localWriteTime = t), (this.baseMutations = r), (this.mutations = i);
	}
	applyToRemoteDocument(e, t) {
		const r = t.mutationResults;
		for (let i = 0; i < this.mutations.length; i++) {
			const s = this.mutations[i];
			s.key.isEqual(e.key) && f_(s, e, r[i]);
		}
	}
	applyToLocalView(e, t) {
		for (const r of this.baseMutations)
			r.key.isEqual(e.key) && (t = An(r, e, t, this.localWriteTime));
		for (const r of this.mutations) r.key.isEqual(e.key) && (t = An(r, e, t, this.localWriteTime));
		return t;
	}
	applyToLocalDocumentSet(e, t) {
		const r = Ol();
		return (
			this.mutations.forEach((i) => {
				const s = e.get(i.key),
					o = s.overlayedDocument;
				let a = this.applyToLocalView(o, s.mutatedFields);
				a = t.has(i.key) ? null : a;
				const c = jl(o, a);
				c !== null && r.set(i.key, c), o.isValidDocument() || o.convertToNoDocument(A.min());
			}),
			r
		);
	}
	keys() {
		return this.mutations.reduce((e, t) => e.add(t.key), C());
	}
	isEqual(e) {
		return (
			this.batchId === e.batchId &&
			Wt(this.mutations, e.mutations, (t, r) => Ha(t, r)) &&
			Wt(this.baseMutations, e.baseMutations, (t, r) => Ha(t, r))
		);
	}
}
class Ao {
	constructor(e, t, r, i) {
		(this.batch = e), (this.commitVersion = t), (this.mutationResults = r), (this.docVersions = i);
	}
	static from(e, t, r) {
		N(e.mutations.length === r.length);
		let i = (function () {
			return i_;
		})();
		const s = e.mutations;
		for (let o = 0; o < s.length; o++) i = i.insert(s[o].key, r[o].version);
		return new Ao(e, t, r, i);
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class __ {
	constructor(e, t) {
		(this.largestBatchId = e), (this.mutation = t);
	}
	getKey() {
		return this.mutation.key;
	}
	isEqual(e) {
		return e !== null && this.mutation === e.mutation;
	}
	toString() {
		return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class y_ {
	constructor(e, t) {
		(this.count = e), (this.unchangedNames = t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var B, k;
function v_(n) {
	switch (n) {
		default:
			return T();
		case p.CANCELLED:
		case p.UNKNOWN:
		case p.DEADLINE_EXCEEDED:
		case p.RESOURCE_EXHAUSTED:
		case p.INTERNAL:
		case p.UNAVAILABLE:
		case p.UNAUTHENTICATED:
			return !1;
		case p.INVALID_ARGUMENT:
		case p.NOT_FOUND:
		case p.ALREADY_EXISTS:
		case p.PERMISSION_DENIED:
		case p.FAILED_PRECONDITION:
		case p.ABORTED:
		case p.OUT_OF_RANGE:
		case p.UNIMPLEMENTED:
		case p.DATA_LOSS:
			return !0;
	}
}
function zl(n) {
	if (n === void 0) return Ve('GRPC error has no .code'), p.UNKNOWN;
	switch (n) {
		case B.OK:
			return p.OK;
		case B.CANCELLED:
			return p.CANCELLED;
		case B.UNKNOWN:
			return p.UNKNOWN;
		case B.DEADLINE_EXCEEDED:
			return p.DEADLINE_EXCEEDED;
		case B.RESOURCE_EXHAUSTED:
			return p.RESOURCE_EXHAUSTED;
		case B.INTERNAL:
			return p.INTERNAL;
		case B.UNAVAILABLE:
			return p.UNAVAILABLE;
		case B.UNAUTHENTICATED:
			return p.UNAUTHENTICATED;
		case B.INVALID_ARGUMENT:
			return p.INVALID_ARGUMENT;
		case B.NOT_FOUND:
			return p.NOT_FOUND;
		case B.ALREADY_EXISTS:
			return p.ALREADY_EXISTS;
		case B.PERMISSION_DENIED:
			return p.PERMISSION_DENIED;
		case B.FAILED_PRECONDITION:
			return p.FAILED_PRECONDITION;
		case B.ABORTED:
			return p.ABORTED;
		case B.OUT_OF_RANGE:
			return p.OUT_OF_RANGE;
		case B.UNIMPLEMENTED:
			return p.UNIMPLEMENTED;
		case B.DATA_LOSS:
			return p.DATA_LOSS;
		default:
			return T();
	}
}
((k = B || (B = {}))[(k.OK = 0)] = 'OK'),
	(k[(k.CANCELLED = 1)] = 'CANCELLED'),
	(k[(k.UNKNOWN = 2)] = 'UNKNOWN'),
	(k[(k.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
	(k[(k.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
	(k[(k.NOT_FOUND = 5)] = 'NOT_FOUND'),
	(k[(k.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
	(k[(k.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
	(k[(k.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
	(k[(k.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
	(k[(k.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
	(k[(k.ABORTED = 10)] = 'ABORTED'),
	(k[(k.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
	(k[(k.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
	(k[(k.INTERNAL = 13)] = 'INTERNAL'),
	(k[(k.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
	(k[(k.DATA_LOSS = 15)] = 'DATA_LOSS');
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E_() {
	return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const I_ = new Ut([4294967295, 4294967295], 0);
function Ga(n) {
	const e = E_().encode(n),
		t = new Im();
	return t.update(e), new Uint8Array(t.digest());
}
function Qa(n) {
	const e = new DataView(n.buffer),
		t = e.getUint32(0, !0),
		r = e.getUint32(4, !0),
		i = e.getUint32(8, !0),
		s = e.getUint32(12, !0);
	return [new Ut([t, r], 0), new Ut([i, s], 0)];
}
class Ro {
	constructor(e, t, r) {
		if (((this.bitmap = e), (this.padding = t), (this.hashCount = r), t < 0 || t >= 8))
			throw new mn(`Invalid padding: ${t}`);
		if (r < 0) throw new mn(`Invalid hash count: ${r}`);
		if (e.length > 0 && this.hashCount === 0) throw new mn(`Invalid hash count: ${r}`);
		if (e.length === 0 && t !== 0) throw new mn(`Invalid padding when bitmap length is 0: ${t}`);
		(this.Te = 8 * e.length - t), (this.Ee = Ut.fromNumber(this.Te));
	}
	de(e, t, r) {
		let i = e.add(t.multiply(Ut.fromNumber(r)));
		return (
			i.compare(I_) === 1 && (i = new Ut([i.getBits(0), i.getBits(1)], 0)),
			i.modulo(this.Ee).toNumber()
		);
	}
	Ae(e) {
		return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0;
	}
	mightContain(e) {
		if (this.Te === 0) return !1;
		const t = Ga(e),
			[r, i] = Qa(t);
		for (let s = 0; s < this.hashCount; s++) {
			const o = this.de(r, i, s);
			if (!this.Ae(o)) return !1;
		}
		return !0;
	}
	static create(e, t, r) {
		const i = e % 8 == 0 ? 0 : 8 - (e % 8),
			s = new Uint8Array(Math.ceil(e / 8)),
			o = new Ro(s, i, t);
		return r.forEach((a) => o.insert(a)), o;
	}
	insert(e) {
		if (this.Te === 0) return;
		const t = Ga(e),
			[r, i] = Qa(t);
		for (let s = 0; s < this.hashCount; s++) {
			const o = this.de(r, i, s);
			this.Re(o);
		}
	}
	Re(e) {
		const t = Math.floor(e / 8),
			r = e % 8;
		this.bitmap[t] |= 1 << r;
	}
}
class mn extends Error {
	constructor() {
		super(...arguments), (this.name = 'BloomFilterError');
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ti {
	constructor(e, t, r, i, s) {
		(this.snapshotVersion = e),
			(this.targetChanges = t),
			(this.targetMismatches = r),
			(this.documentUpdates = i),
			(this.resolvedLimboDocuments = s);
	}
	static createSynthesizedRemoteEventForCurrentChange(e, t, r) {
		const i = new Map();
		return (
			i.set(e, nr.createSynthesizedTargetChangeForCurrentChange(e, t, r)),
			new Ti(A.min(), i, new x(D), qe(), C())
		);
	}
}
class nr {
	constructor(e, t, r, i, s) {
		(this.resumeToken = e),
			(this.current = t),
			(this.addedDocuments = r),
			(this.modifiedDocuments = i),
			(this.removedDocuments = s);
	}
	static createSynthesizedTargetChangeForCurrentChange(e, t, r) {
		return new nr(r, t, C(), C(), C());
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tr {
	constructor(e, t, r, i) {
		(this.Ve = e), (this.removedTargetIds = t), (this.key = r), (this.me = i);
	}
}
class Hl {
	constructor(e, t) {
		(this.targetId = e), (this.fe = t);
	}
}
class Wl {
	constructor(e, t, r = se.EMPTY_BYTE_STRING, i = null) {
		(this.state = e), (this.targetIds = t), (this.resumeToken = r), (this.cause = i);
	}
}
class Ja {
	constructor() {
		(this.ge = 0),
			(this.pe = Xa()),
			(this.ye = se.EMPTY_BYTE_STRING),
			(this.we = !1),
			(this.Se = !0);
	}
	get current() {
		return this.we;
	}
	get resumeToken() {
		return this.ye;
	}
	get be() {
		return this.ge !== 0;
	}
	get De() {
		return this.Se;
	}
	Ce(e) {
		e.approximateByteSize() > 0 && ((this.Se = !0), (this.ye = e));
	}
	ve() {
		let e = C(),
			t = C(),
			r = C();
		return (
			this.pe.forEach((i, s) => {
				switch (s) {
					case 0:
						e = e.add(i);
						break;
					case 2:
						t = t.add(i);
						break;
					case 1:
						r = r.add(i);
						break;
					default:
						T();
				}
			}),
			new nr(this.ye, this.we, e, t, r)
		);
	}
	Fe() {
		(this.Se = !1), (this.pe = Xa());
	}
	Me(e, t) {
		(this.Se = !0), (this.pe = this.pe.insert(e, t));
	}
	xe(e) {
		(this.Se = !0), (this.pe = this.pe.remove(e));
	}
	Oe() {
		this.ge += 1;
	}
	Ne() {
		(this.ge -= 1), N(this.ge >= 0);
	}
	Le() {
		(this.Se = !0), (this.we = !0);
	}
}
class T_ {
	constructor(e) {
		(this.Be = e), (this.ke = new Map()), (this.qe = qe()), (this.Qe = Ya()), (this.Ke = new x(D));
	}
	$e(e) {
		for (const t of e.Ve)
			e.me && e.me.isFoundDocument() ? this.Ue(t, e.me) : this.We(t, e.key, e.me);
		for (const t of e.removedTargetIds) this.We(t, e.key, e.me);
	}
	Ge(e) {
		this.forEachTarget(e, (t) => {
			const r = this.ze(t);
			switch (e.state) {
				case 0:
					this.je(t) && r.Ce(e.resumeToken);
					break;
				case 1:
					r.Ne(), r.be || r.Fe(), r.Ce(e.resumeToken);
					break;
				case 2:
					r.Ne(), r.be || this.removeTarget(t);
					break;
				case 3:
					this.je(t) && (r.Le(), r.Ce(e.resumeToken));
					break;
				case 4:
					this.je(t) && (this.He(t), r.Ce(e.resumeToken));
					break;
				default:
					T();
			}
		});
	}
	forEachTarget(e, t) {
		e.targetIds.length > 0
			? e.targetIds.forEach(t)
			: this.ke.forEach((r, i) => {
					this.je(i) && t(i);
				});
	}
	Je(e) {
		const t = e.targetId,
			r = e.fe.count,
			i = this.Ye(t);
		if (i) {
			const s = i.target;
			if (As(s))
				if (r === 0) {
					const o = new v(s.path);
					this.We(t, o, ne.newNoDocument(o, A.min()));
				} else N(r === 1);
			else {
				const o = this.Ze(t);
				if (o !== r) {
					const a = this.Xe(e),
						c = a ? this.et(a, e, o) : 1;
					if (c !== 0) {
						this.He(t);
						const u =
							c === 2
								? 'TargetPurposeExistenceFilterMismatchBloom'
								: 'TargetPurposeExistenceFilterMismatch';
						this.Ke = this.Ke.insert(t, u);
					}
				}
			}
		}
	}
	Xe(e) {
		const t = e.fe.unchangedNames;
		if (!t || !t.bits) return null;
		const {
			bits: { bitmap: r = '', padding: i = 0 },
			hashCount: s = 0
		} = t;
		let o, a;
		try {
			o = It(r).toUint8Array();
		} catch (c) {
			if (c instanceof Tl)
				return (
					Ht(
						'Decoding the base64 bloom filter in existence filter failed (' +
							c.message +
							'); ignoring the bloom filter and falling back to full re-query.'
					),
					null
				);
			throw c;
		}
		try {
			a = new Ro(o, i, s);
		} catch (c) {
			return (
				Ht(c instanceof mn ? 'BloomFilter error: ' : 'Applying bloom filter failed: ', c), null
			);
		}
		return a.Te === 0 ? null : a;
	}
	et(e, t, r) {
		return t.fe.count === r - this.rt(e, t.targetId) ? 0 : 2;
	}
	rt(e, t) {
		const r = this.Be.getRemoteKeysForTarget(t);
		let i = 0;
		return (
			r.forEach((s) => {
				const o = this.Be.nt(),
					a = `projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;
				e.mightContain(a) || (this.We(t, s, null), i++);
			}),
			i
		);
	}
	it(e) {
		const t = new Map();
		this.ke.forEach((s, o) => {
			const a = this.Ye(o);
			if (a) {
				if (s.current && As(a.target)) {
					const c = new v(a.target.path);
					this.qe.get(c) !== null || this.st(o, c) || this.We(o, c, ne.newNoDocument(c, e));
				}
				s.De && (t.set(o, s.ve()), s.Fe());
			}
		});
		let r = C();
		this.Qe.forEach((s, o) => {
			let a = !0;
			o.forEachWhile((c) => {
				const u = this.Ye(c);
				return !u || u.purpose === 'TargetPurposeLimboResolution' || ((a = !1), !1);
			}),
				a && (r = r.add(s));
		}),
			this.qe.forEach((s, o) => o.setReadTime(e));
		const i = new Ti(e, t, this.Ke, this.qe, r);
		return (this.qe = qe()), (this.Qe = Ya()), (this.Ke = new x(D)), i;
	}
	Ue(e, t) {
		if (!this.je(e)) return;
		const r = this.st(e, t.key) ? 2 : 0;
		this.ze(e).Me(t.key, r),
			(this.qe = this.qe.insert(t.key, t)),
			(this.Qe = this.Qe.insert(t.key, this.ot(t.key).add(e)));
	}
	We(e, t, r) {
		if (!this.je(e)) return;
		const i = this.ze(e);
		this.st(e, t) ? i.Me(t, 1) : i.xe(t),
			(this.Qe = this.Qe.insert(t, this.ot(t).delete(e))),
			r && (this.qe = this.qe.insert(t, r));
	}
	removeTarget(e) {
		this.ke.delete(e);
	}
	Ze(e) {
		const t = this.ze(e).ve();
		return this.Be.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size;
	}
	Oe(e) {
		this.ze(e).Oe();
	}
	ze(e) {
		let t = this.ke.get(e);
		return t || ((t = new Ja()), this.ke.set(e, t)), t;
	}
	ot(e) {
		let t = this.Qe.get(e);
		return t || ((t = new Z(D)), (this.Qe = this.Qe.insert(e, t))), t;
	}
	je(e) {
		const t = this.Ye(e) !== null;
		return t || m('WatchChangeAggregator', 'Detected inactive target', e), t;
	}
	Ye(e) {
		const t = this.ke.get(e);
		return t && t.be ? null : this.Be._t(e);
	}
	He(e) {
		this.ke.set(e, new Ja()),
			this.Be.getRemoteKeysForTarget(e).forEach((t) => {
				this.We(e, t, null);
			});
	}
	st(e, t) {
		return this.Be.getRemoteKeysForTarget(e).has(t);
	}
}
function Ya() {
	return new x(v.comparator);
}
function Xa() {
	return new x(v.comparator);
}
const w_ = { asc: 'ASCENDING', desc: 'DESCENDING' },
	A_ = {
		'<': 'LESS_THAN',
		'<=': 'LESS_THAN_OR_EQUAL',
		'>': 'GREATER_THAN',
		'>=': 'GREATER_THAN_OR_EQUAL',
		'==': 'EQUAL',
		'!=': 'NOT_EQUAL',
		'array-contains': 'ARRAY_CONTAINS',
		in: 'IN',
		'not-in': 'NOT_IN',
		'array-contains-any': 'ARRAY_CONTAINS_ANY'
	},
	R_ = { and: 'AND', or: 'OR' };
class S_ {
	constructor(e, t) {
		(this.databaseId = e), (this.useProto3Json = t);
	}
}
function Ss(n, e) {
	return n.useProto3Json || mi(e) ? e : { value: e };
}
function qr(n, e) {
	return n.useProto3Json
		? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
		: { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function Kl(n, e) {
	return n.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function P_(n, e) {
	return qr(n, e.toTimestamp());
}
function Ce(n) {
	return (
		N(!!n),
		A.fromTimestamp(
			(function (t) {
				const r = et(t);
				return new z(r.seconds, r.nanos);
			})(n)
		)
	);
}
function So(n, e) {
	return Ps(n, e).canonicalString();
}
function Ps(n, e) {
	const t = (function (i) {
		return new M(['projects', i.projectId, 'databases', i.database]);
	})(n).child('documents');
	return e === void 0 ? t : t.child(e);
}
function Gl(n) {
	const e = M.fromString(n);
	return N(Zl(e)), e;
}
function Cs(n, e) {
	return So(n.databaseId, e.path);
}
function Qi(n, e) {
	const t = Gl(e);
	if (t.get(1) !== n.databaseId.projectId)
		throw new y(
			p.INVALID_ARGUMENT,
			'Tried to deserialize key from different project: ' +
				t.get(1) +
				' vs ' +
				n.databaseId.projectId
		);
	if (t.get(3) !== n.databaseId.database)
		throw new y(
			p.INVALID_ARGUMENT,
			'Tried to deserialize key from different database: ' +
				t.get(3) +
				' vs ' +
				n.databaseId.database
		);
	return new v(Jl(t));
}
function Ql(n, e) {
	return So(n.databaseId, e);
}
function C_(n) {
	const e = Gl(n);
	return e.length === 4 ? M.emptyPath() : Jl(e);
}
function bs(n) {
	return new M([
		'projects',
		n.databaseId.projectId,
		'databases',
		n.databaseId.database
	]).canonicalString();
}
function Jl(n) {
	return N(n.length > 4 && n.get(4) === 'documents'), n.popFirst(5);
}
function Za(n, e, t) {
	return { name: Cs(n, e), fields: t.value.mapValue.fields };
}
function b_(n, e) {
	let t;
	if ('targetChange' in e) {
		e.targetChange;
		const r = (function (u) {
				return u === 'NO_CHANGE'
					? 0
					: u === 'ADD'
						? 1
						: u === 'REMOVE'
							? 2
							: u === 'CURRENT'
								? 3
								: u === 'RESET'
									? 4
									: T();
			})(e.targetChange.targetChangeType || 'NO_CHANGE'),
			i = e.targetChange.targetIds || [],
			s = (function (u, l) {
				return u.useProto3Json
					? (N(l === void 0 || typeof l == 'string'), se.fromBase64String(l || ''))
					: (N(l === void 0 || l instanceof Uint8Array), se.fromUint8Array(l || new Uint8Array()));
			})(n, e.targetChange.resumeToken),
			o = e.targetChange.cause,
			a =
				o &&
				(function (u) {
					const l = u.code === void 0 ? p.UNKNOWN : zl(u.code);
					return new y(l, u.message || '');
				})(o);
		t = new Wl(r, i, s, a || null);
	} else if ('documentChange' in e) {
		e.documentChange;
		const r = e.documentChange;
		r.document, r.document.name, r.document.updateTime;
		const i = Qi(n, r.document.name),
			s = Ce(r.document.updateTime),
			o = r.document.createTime ? Ce(r.document.createTime) : A.min(),
			a = new fe({ mapValue: { fields: r.document.fields } }),
			c = ne.newFoundDocument(i, s, o, a),
			u = r.targetIds || [],
			l = r.removedTargetIds || [];
		t = new Tr(u, l, c.key, c);
	} else if ('documentDelete' in e) {
		e.documentDelete;
		const r = e.documentDelete;
		r.document;
		const i = Qi(n, r.document),
			s = r.readTime ? Ce(r.readTime) : A.min(),
			o = ne.newNoDocument(i, s),
			a = r.removedTargetIds || [];
		t = new Tr([], a, o.key, o);
	} else if ('documentRemove' in e) {
		e.documentRemove;
		const r = e.documentRemove;
		r.document;
		const i = Qi(n, r.document),
			s = r.removedTargetIds || [];
		t = new Tr([], s, i, null);
	} else {
		if (!('filter' in e)) return T();
		{
			e.filter;
			const r = e.filter;
			r.targetId;
			const { count: i = 0, unchangedNames: s } = r,
				o = new y_(i, s),
				a = r.targetId;
			t = new Hl(a, o);
		}
	}
	return t;
}
function k_(n, e) {
	let t;
	if (e instanceof tr) t = { update: Za(n, e.key, e.value) };
	else if (e instanceof $l) t = { delete: Cs(n, e.key) };
	else if (e instanceof Ct) t = { update: Za(n, e.key, e.data), updateMask: U_(e.fieldMask) };
	else {
		if (!(e instanceof g_)) return T();
		t = { verify: Cs(n, e.key) };
	}
	return (
		e.fieldTransforms.length > 0 &&
			(t.updateTransforms = e.fieldTransforms.map((r) =>
				(function (s, o) {
					const a = o.transform;
					if (a instanceof Br)
						return { fieldPath: o.field.canonicalString(), setToServerValue: 'REQUEST_TIME' };
					if (a instanceof Un)
						return {
							fieldPath: o.field.canonicalString(),
							appendMissingElements: { values: a.elements }
						};
					if (a instanceof Bn)
						return {
							fieldPath: o.field.canonicalString(),
							removeAllFromArray: { values: a.elements }
						};
					if (a instanceof jr) return { fieldPath: o.field.canonicalString(), increment: a.Ie };
					throw T();
				})(0, r)
			)),
		e.precondition.isNone ||
			(t.currentDocument = (function (i, s) {
				return s.updateTime !== void 0
					? { updateTime: P_(i, s.updateTime) }
					: s.exists !== void 0
						? { exists: s.exists }
						: T();
			})(n, e.precondition)),
		t
	);
}
function D_(n, e) {
	return n && n.length > 0
		? (N(e !== void 0),
			n.map((t) =>
				(function (i, s) {
					let o = i.updateTime ? Ce(i.updateTime) : Ce(s);
					return o.isEqual(A.min()) && (o = Ce(s)), new d_(o, i.transformResults || []);
				})(t, e)
			))
		: [];
}
function V_(n, e) {
	return { documents: [Ql(n, e.path)] };
}
function N_(n, e) {
	const t = { structuredQuery: {} },
		r = e.path;
	let i;
	e.collectionGroup !== null
		? ((i = r),
			(t.structuredQuery.from = [{ collectionId: e.collectionGroup, allDescendants: !0 }]))
		: ((i = r.popLast()), (t.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
		(t.parent = Ql(n, i));
	const s = (function (u) {
		if (u.length !== 0) return Xl(Oe.create(u, 'and'));
	})(e.filters);
	s && (t.structuredQuery.where = s);
	const o = (function (u) {
		if (u.length !== 0)
			return u.map((l) =>
				(function (d) {
					return { field: Nt(d.field), direction: M_(d.dir) };
				})(l)
			);
	})(e.orderBy);
	o && (t.structuredQuery.orderBy = o);
	const a = Ss(n, e.limit);
	return (
		a !== null && (t.structuredQuery.limit = a),
		e.startAt &&
			(t.structuredQuery.startAt = (function (u) {
				return { before: u.inclusive, values: u.position };
			})(e.startAt)),
		e.endAt &&
			(t.structuredQuery.endAt = (function (u) {
				return { before: !u.inclusive, values: u.position };
			})(e.endAt)),
		{ ut: t, parent: i }
	);
}
function O_(n) {
	let e = C_(n.parent);
	const t = n.structuredQuery,
		r = t.from ? t.from.length : 0;
	let i = null;
	if (r > 0) {
		N(r === 1);
		const l = t.from[0];
		l.allDescendants ? (i = l.collectionId) : (e = e.child(l.collectionId));
	}
	let s = [];
	t.where &&
		(s = (function (h) {
			const d = Yl(h);
			return d instanceof Oe && Sl(d) ? d.getFilters() : [d];
		})(t.where));
	let o = [];
	t.orderBy &&
		(o = (function (h) {
			return h.map((d) =>
				(function (S) {
					return new Ur(
						Ot(S.field),
						(function (E) {
							switch (E) {
								case 'ASCENDING':
									return 'asc';
								case 'DESCENDING':
									return 'desc';
								default:
									return;
							}
						})(S.direction)
					);
				})(d)
			);
		})(t.orderBy));
	let a = null;
	t.limit &&
		(a = (function (h) {
			let d;
			return (d = typeof h == 'object' ? h.value : h), mi(d) ? null : d;
		})(t.limit));
	let c = null;
	t.startAt &&
		(c = (function (h) {
			const d = !!h.before,
				g = h.values || [];
			return new Fr(g, d);
		})(t.startAt));
	let u = null;
	return (
		t.endAt &&
			(u = (function (h) {
				const d = !h.before,
					g = h.values || [];
				return new Fr(g, d);
			})(t.endAt)),
		Xm(e, i, o, s, a, 'F', c, u)
	);
}
function L_(n, e) {
	const t = (function (i) {
		switch (i) {
			case 'TargetPurposeListen':
				return null;
			case 'TargetPurposeExistenceFilterMismatch':
				return 'existence-filter-mismatch';
			case 'TargetPurposeExistenceFilterMismatchBloom':
				return 'existence-filter-mismatch-bloom';
			case 'TargetPurposeLimboResolution':
				return 'limbo-document';
			default:
				return T();
		}
	})(e.purpose);
	return t == null ? null : { 'goog-listen-tags': t };
}
function Yl(n) {
	return n.unaryFilter !== void 0
		? (function (t) {
				switch (t.unaryFilter.op) {
					case 'IS_NAN':
						const r = Ot(t.unaryFilter.field);
						return $.create(r, '==', { doubleValue: NaN });
					case 'IS_NULL':
						const i = Ot(t.unaryFilter.field);
						return $.create(i, '==', { nullValue: 'NULL_VALUE' });
					case 'IS_NOT_NAN':
						const s = Ot(t.unaryFilter.field);
						return $.create(s, '!=', { doubleValue: NaN });
					case 'IS_NOT_NULL':
						const o = Ot(t.unaryFilter.field);
						return $.create(o, '!=', { nullValue: 'NULL_VALUE' });
					default:
						return T();
				}
			})(n)
		: n.fieldFilter !== void 0
			? (function (t) {
					return $.create(
						Ot(t.fieldFilter.field),
						(function (i) {
							switch (i) {
								case 'EQUAL':
									return '==';
								case 'NOT_EQUAL':
									return '!=';
								case 'GREATER_THAN':
									return '>';
								case 'GREATER_THAN_OR_EQUAL':
									return '>=';
								case 'LESS_THAN':
									return '<';
								case 'LESS_THAN_OR_EQUAL':
									return '<=';
								case 'ARRAY_CONTAINS':
									return 'array-contains';
								case 'IN':
									return 'in';
								case 'NOT_IN':
									return 'not-in';
								case 'ARRAY_CONTAINS_ANY':
									return 'array-contains-any';
								default:
									return T();
							}
						})(t.fieldFilter.op),
						t.fieldFilter.value
					);
				})(n)
			: n.compositeFilter !== void 0
				? (function (t) {
						return Oe.create(
							t.compositeFilter.filters.map((r) => Yl(r)),
							(function (i) {
								switch (i) {
									case 'AND':
										return 'and';
									case 'OR':
										return 'or';
									default:
										return T();
								}
							})(t.compositeFilter.op)
						);
					})(n)
				: T();
}
function M_(n) {
	return w_[n];
}
function x_(n) {
	return A_[n];
}
function F_(n) {
	return R_[n];
}
function Nt(n) {
	return { fieldPath: n.canonicalString() };
}
function Ot(n) {
	return Y.fromServerFormat(n.fieldPath);
}
function Xl(n) {
	return n instanceof $
		? (function (t) {
				if (t.op === '==') {
					if (Ua(t.value)) return { unaryFilter: { field: Nt(t.field), op: 'IS_NAN' } };
					if (Fa(t.value)) return { unaryFilter: { field: Nt(t.field), op: 'IS_NULL' } };
				} else if (t.op === '!=') {
					if (Ua(t.value)) return { unaryFilter: { field: Nt(t.field), op: 'IS_NOT_NAN' } };
					if (Fa(t.value)) return { unaryFilter: { field: Nt(t.field), op: 'IS_NOT_NULL' } };
				}
				return { fieldFilter: { field: Nt(t.field), op: x_(t.op), value: t.value } };
			})(n)
		: n instanceof Oe
			? (function (t) {
					const r = t.getFilters().map((i) => Xl(i));
					return r.length === 1 ? r[0] : { compositeFilter: { op: F_(t.op), filters: r } };
				})(n)
			: T();
}
function U_(n) {
	const e = [];
	return n.fields.forEach((t) => e.push(t.canonicalString())), { fieldPaths: e };
}
function Zl(n) {
	return n.length >= 4 && n.get(0) === 'projects' && n.get(2) === 'databases';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qe {
	constructor(e, t, r, i, s = A.min(), o = A.min(), a = se.EMPTY_BYTE_STRING, c = null) {
		(this.target = e),
			(this.targetId = t),
			(this.purpose = r),
			(this.sequenceNumber = i),
			(this.snapshotVersion = s),
			(this.lastLimboFreeSnapshotVersion = o),
			(this.resumeToken = a),
			(this.expectedCount = c);
	}
	withSequenceNumber(e) {
		return new Qe(
			this.target,
			this.targetId,
			this.purpose,
			e,
			this.snapshotVersion,
			this.lastLimboFreeSnapshotVersion,
			this.resumeToken,
			this.expectedCount
		);
	}
	withResumeToken(e, t) {
		return new Qe(
			this.target,
			this.targetId,
			this.purpose,
			this.sequenceNumber,
			t,
			this.lastLimboFreeSnapshotVersion,
			e,
			null
		);
	}
	withExpectedCount(e) {
		return new Qe(
			this.target,
			this.targetId,
			this.purpose,
			this.sequenceNumber,
			this.snapshotVersion,
			this.lastLimboFreeSnapshotVersion,
			this.resumeToken,
			e
		);
	}
	withLastLimboFreeSnapshotVersion(e) {
		return new Qe(
			this.target,
			this.targetId,
			this.purpose,
			this.sequenceNumber,
			this.snapshotVersion,
			e,
			this.resumeToken,
			this.expectedCount
		);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B_ {
	constructor(e) {
		this.ct = e;
	}
}
function j_(n) {
	const e = O_({ parent: n.parent, structuredQuery: n.structuredQuery });
	return n.limitType === 'LAST' ? Rs(e, e.limit, 'L') : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class q_ {
	constructor() {
		this._n = new $_();
	}
	addToCollectionParentIndex(e, t) {
		return this._n.add(t), f.resolve();
	}
	getCollectionParents(e, t) {
		return f.resolve(this._n.getEntries(t));
	}
	addFieldIndex(e, t) {
		return f.resolve();
	}
	deleteFieldIndex(e, t) {
		return f.resolve();
	}
	deleteAllFieldIndexes(e) {
		return f.resolve();
	}
	createTargetIndexes(e, t) {
		return f.resolve();
	}
	getDocumentsMatchingTarget(e, t) {
		return f.resolve(null);
	}
	getIndexType(e, t) {
		return f.resolve(0);
	}
	getFieldIndexes(e, t) {
		return f.resolve([]);
	}
	getNextCollectionGroupToUpdate(e) {
		return f.resolve(null);
	}
	getMinOffset(e, t) {
		return f.resolve(Ze.min());
	}
	getMinOffsetFromCollectionGroup(e, t) {
		return f.resolve(Ze.min());
	}
	updateCollectionGroup(e, t, r) {
		return f.resolve();
	}
	updateIndexEntries(e, t) {
		return f.resolve();
	}
}
class $_ {
	constructor() {
		this.index = {};
	}
	add(e) {
		const t = e.lastSegment(),
			r = e.popLast(),
			i = this.index[t] || new Z(M.comparator),
			s = !i.has(r);
		return (this.index[t] = i.add(r)), s;
	}
	has(e) {
		const t = e.lastSegment(),
			r = e.popLast(),
			i = this.index[t];
		return i && i.has(r);
	}
	getEntries(e) {
		return (this.index[e] || new Z(M.comparator)).toArray();
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qt {
	constructor(e) {
		this.On = e;
	}
	next() {
		return (this.On += 2), this.On;
	}
	static Nn() {
		return new Qt(0);
	}
	static Ln() {
		return new Qt(-1);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z_ {
	constructor() {
		(this.changes = new rn(
			(e) => e.toString(),
			(e, t) => e.isEqual(t)
		)),
			(this.changesApplied = !1);
	}
	addEntry(e) {
		this.assertNotApplied(), this.changes.set(e.key, e);
	}
	removeEntry(e, t) {
		this.assertNotApplied(), this.changes.set(e, ne.newInvalidDocument(e).setReadTime(t));
	}
	getEntry(e, t) {
		this.assertNotApplied();
		const r = this.changes.get(t);
		return r !== void 0 ? f.resolve(r) : this.getFromCache(e, t);
	}
	getEntries(e, t) {
		return this.getAllFromCache(e, t);
	}
	apply(e) {
		return this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e);
	}
	assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class H_ {
	constructor(e, t) {
		(this.overlayedDocument = e), (this.mutatedFields = t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W_ {
	constructor(e, t, r, i) {
		(this.remoteDocumentCache = e),
			(this.mutationQueue = t),
			(this.documentOverlayCache = r),
			(this.indexManager = i);
	}
	getDocument(e, t) {
		let r = null;
		return this.documentOverlayCache
			.getOverlay(e, t)
			.next((i) => ((r = i), this.remoteDocumentCache.getEntry(e, t)))
			.next((i) => (r !== null && An(r.mutation, i, me.empty(), z.now()), i));
	}
	getDocuments(e, t) {
		return this.remoteDocumentCache
			.getEntries(e, t)
			.next((r) => this.getLocalViewOfDocuments(e, r, C()).next(() => r));
	}
	getLocalViewOfDocuments(e, t, r = C()) {
		const i = pt();
		return this.populateOverlays(e, i, t).next(() =>
			this.computeViews(e, t, i, r).next((s) => {
				let o = gn();
				return (
					s.forEach((a, c) => {
						o = o.insert(a, c.overlayedDocument);
					}),
					o
				);
			})
		);
	}
	getOverlayedDocuments(e, t) {
		const r = pt();
		return this.populateOverlays(e, r, t).next(() => this.computeViews(e, t, r, C()));
	}
	populateOverlays(e, t, r) {
		const i = [];
		return (
			r.forEach((s) => {
				t.has(s) || i.push(s);
			}),
			this.documentOverlayCache.getOverlays(e, i).next((s) => {
				s.forEach((o, a) => {
					t.set(o, a);
				});
			})
		);
	}
	computeViews(e, t, r, i) {
		let s = qe();
		const o = wn(),
			a = (function () {
				return wn();
			})();
		return (
			t.forEach((c, u) => {
				const l = r.get(u.key);
				i.has(u.key) && (l === void 0 || l.mutation instanceof Ct)
					? (s = s.insert(u.key, u))
					: l !== void 0
						? (o.set(u.key, l.mutation.getFieldMask()),
							An(l.mutation, u, l.mutation.getFieldMask(), z.now()))
						: o.set(u.key, me.empty());
			}),
			this.recalculateAndSaveOverlays(e, s).next(
				(c) => (
					c.forEach((u, l) => o.set(u, l)),
					t.forEach((u, l) => {
						var h;
						return a.set(u, new H_(l, (h = o.get(u)) !== null && h !== void 0 ? h : null));
					}),
					a
				)
			)
		);
	}
	recalculateAndSaveOverlays(e, t) {
		const r = wn();
		let i = new x((o, a) => o - a),
			s = C();
		return this.mutationQueue
			.getAllMutationBatchesAffectingDocumentKeys(e, t)
			.next((o) => {
				for (const a of o)
					a.keys().forEach((c) => {
						const u = t.get(c);
						if (u === null) return;
						let l = r.get(c) || me.empty();
						(l = a.applyToLocalView(u, l)), r.set(c, l);
						const h = (i.get(a.batchId) || C()).add(c);
						i = i.insert(a.batchId, h);
					});
			})
			.next(() => {
				const o = [],
					a = i.getReverseIterator();
				for (; a.hasNext(); ) {
					const c = a.getNext(),
						u = c.key,
						l = c.value,
						h = Ol();
					l.forEach((d) => {
						if (!s.has(d)) {
							const g = jl(t.get(d), r.get(d));
							g !== null && h.set(d, g), (s = s.add(d));
						}
					}),
						o.push(this.documentOverlayCache.saveOverlays(e, u, h));
				}
				return f.waitFor(o);
			})
			.next(() => r);
	}
	recalculateAndSaveOverlaysForDocumentKeys(e, t) {
		return this.remoteDocumentCache
			.getEntries(e, t)
			.next((r) => this.recalculateAndSaveOverlays(e, r));
	}
	getDocumentsMatchingQuery(e, t, r, i) {
		return (function (o) {
			return v.isDocumentKey(o.path) && o.collectionGroup === null && o.filters.length === 0;
		})(t)
			? this.getDocumentsMatchingDocumentQuery(e, t.path)
			: Zm(t)
				? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, i)
				: this.getDocumentsMatchingCollectionQuery(e, t, r, i);
	}
	getNextDocuments(e, t, r, i) {
		return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, r, i).next((s) => {
			const o =
				i - s.size > 0
					? this.documentOverlayCache.getOverlaysForCollectionGroup(
							e,
							t,
							r.largestBatchId,
							i - s.size
						)
					: f.resolve(pt());
			let a = -1,
				c = s;
			return o.next((u) =>
				f
					.forEach(
						u,
						(l, h) => (
							a < h.largestBatchId && (a = h.largestBatchId),
							s.get(l)
								? f.resolve()
								: this.remoteDocumentCache.getEntry(e, l).next((d) => {
										c = c.insert(l, d);
									})
						)
					)
					.next(() => this.populateOverlays(e, u, s))
					.next(() => this.computeViews(e, c, u, C()))
					.next((l) => ({ batchId: a, changes: Nl(l) }))
			);
		});
	}
	getDocumentsMatchingDocumentQuery(e, t) {
		return this.getDocument(e, new v(t)).next((r) => {
			let i = gn();
			return r.isFoundDocument() && (i = i.insert(r.key, r)), i;
		});
	}
	getDocumentsMatchingCollectionGroupQuery(e, t, r, i) {
		const s = t.collectionGroup;
		let o = gn();
		return this.indexManager.getCollectionParents(e, s).next((a) =>
			f
				.forEach(a, (c) => {
					const u = (function (h, d) {
						return new _i(
							d,
							null,
							h.explicitOrderBy.slice(),
							h.filters.slice(),
							h.limit,
							h.limitType,
							h.startAt,
							h.endAt
						);
					})(t, c.child(s));
					return this.getDocumentsMatchingCollectionQuery(e, u, r, i).next((l) => {
						l.forEach((h, d) => {
							o = o.insert(h, d);
						});
					});
				})
				.next(() => o)
		);
	}
	getDocumentsMatchingCollectionQuery(e, t, r, i) {
		let s;
		return this.documentOverlayCache
			.getOverlaysForCollection(e, t.path, r.largestBatchId)
			.next((o) => ((s = o), this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, r, s, i)))
			.next((o) => {
				s.forEach((c, u) => {
					const l = u.getKey();
					o.get(l) === null && (o = o.insert(l, ne.newInvalidDocument(l)));
				});
				let a = gn();
				return (
					o.forEach((c, u) => {
						const l = s.get(c);
						l !== void 0 && An(l.mutation, u, me.empty(), z.now()),
							vi(t, u) && (a = a.insert(c, u));
					}),
					a
				);
			});
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class K_ {
	constructor(e) {
		(this.serializer = e), (this.cr = new Map()), (this.lr = new Map());
	}
	getBundleMetadata(e, t) {
		return f.resolve(this.cr.get(t));
	}
	saveBundleMetadata(e, t) {
		return (
			this.cr.set(
				t.id,
				(function (i) {
					return { id: i.id, version: i.version, createTime: Ce(i.createTime) };
				})(t)
			),
			f.resolve()
		);
	}
	getNamedQuery(e, t) {
		return f.resolve(this.lr.get(t));
	}
	saveNamedQuery(e, t) {
		return (
			this.lr.set(
				t.name,
				(function (i) {
					return { name: i.name, query: j_(i.bundledQuery), readTime: Ce(i.readTime) };
				})(t)
			),
			f.resolve()
		);
	}
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class G_ {
	constructor() {
		(this.overlays = new x(v.comparator)), (this.hr = new Map());
	}
	getOverlay(e, t) {
		return f.resolve(this.overlays.get(t));
	}
	getOverlays(e, t) {
		const r = pt();
		return f
			.forEach(t, (i) =>
				this.getOverlay(e, i).next((s) => {
					s !== null && r.set(i, s);
				})
			)
			.next(() => r);
	}
	saveOverlays(e, t, r) {
		return (
			r.forEach((i, s) => {
				this.ht(e, t, s);
			}),
			f.resolve()
		);
	}
	removeOverlaysForBatchId(e, t, r) {
		const i = this.hr.get(r);
		return (
			i !== void 0 &&
				(i.forEach((s) => (this.overlays = this.overlays.remove(s))), this.hr.delete(r)),
			f.resolve()
		);
	}
	getOverlaysForCollection(e, t, r) {
		const i = pt(),
			s = t.length + 1,
			o = new v(t.child('')),
			a = this.overlays.getIteratorFrom(o);
		for (; a.hasNext(); ) {
			const c = a.getNext().value,
				u = c.getKey();
			if (!t.isPrefixOf(u.path)) break;
			u.path.length === s && c.largestBatchId > r && i.set(c.getKey(), c);
		}
		return f.resolve(i);
	}
	getOverlaysForCollectionGroup(e, t, r, i) {
		let s = new x((u, l) => u - l);
		const o = this.overlays.getIterator();
		for (; o.hasNext(); ) {
			const u = o.getNext().value;
			if (u.getKey().getCollectionGroup() === t && u.largestBatchId > r) {
				let l = s.get(u.largestBatchId);
				l === null && ((l = pt()), (s = s.insert(u.largestBatchId, l))), l.set(u.getKey(), u);
			}
		}
		const a = pt(),
			c = s.getIterator();
		for (; c.hasNext() && (c.getNext().value.forEach((u, l) => a.set(u, l)), !(a.size() >= i)); );
		return f.resolve(a);
	}
	ht(e, t, r) {
		const i = this.overlays.get(r.key);
		if (i !== null) {
			const o = this.hr.get(i.largestBatchId).delete(r.key);
			this.hr.set(i.largestBatchId, o);
		}
		this.overlays = this.overlays.insert(r.key, new __(t, r));
		let s = this.hr.get(t);
		s === void 0 && ((s = C()), this.hr.set(t, s)), this.hr.set(t, s.add(r.key));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Po {
	constructor() {
		(this.Pr = new Z(H.Ir)), (this.Tr = new Z(H.Er));
	}
	isEmpty() {
		return this.Pr.isEmpty();
	}
	addReference(e, t) {
		const r = new H(e, t);
		(this.Pr = this.Pr.add(r)), (this.Tr = this.Tr.add(r));
	}
	dr(e, t) {
		e.forEach((r) => this.addReference(r, t));
	}
	removeReference(e, t) {
		this.Ar(new H(e, t));
	}
	Rr(e, t) {
		e.forEach((r) => this.removeReference(r, t));
	}
	Vr(e) {
		const t = new v(new M([])),
			r = new H(t, e),
			i = new H(t, e + 1),
			s = [];
		return (
			this.Tr.forEachInRange([r, i], (o) => {
				this.Ar(o), s.push(o.key);
			}),
			s
		);
	}
	mr() {
		this.Pr.forEach((e) => this.Ar(e));
	}
	Ar(e) {
		(this.Pr = this.Pr.delete(e)), (this.Tr = this.Tr.delete(e));
	}
	gr(e) {
		const t = new v(new M([])),
			r = new H(t, e),
			i = new H(t, e + 1);
		let s = C();
		return (
			this.Tr.forEachInRange([r, i], (o) => {
				s = s.add(o.key);
			}),
			s
		);
	}
	containsKey(e) {
		const t = new H(e, 0),
			r = this.Pr.firstAfterOrEqual(t);
		return r !== null && e.isEqual(r.key);
	}
}
class H {
	constructor(e, t) {
		(this.key = e), (this.pr = t);
	}
	static Ir(e, t) {
		return v.comparator(e.key, t.key) || D(e.pr, t.pr);
	}
	static Er(e, t) {
		return D(e.pr, t.pr) || v.comparator(e.key, t.key);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q_ {
	constructor(e, t) {
		(this.indexManager = e),
			(this.referenceDelegate = t),
			(this.mutationQueue = []),
			(this.yr = 1),
			(this.wr = new Z(H.Ir));
	}
	checkEmpty(e) {
		return f.resolve(this.mutationQueue.length === 0);
	}
	addMutationBatch(e, t, r, i) {
		const s = this.yr;
		this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
		const o = new m_(s, t, r, i);
		this.mutationQueue.push(o);
		for (const a of i)
			(this.wr = this.wr.add(new H(a.key, s))),
				this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
		return f.resolve(o);
	}
	lookupMutationBatch(e, t) {
		return f.resolve(this.Sr(t));
	}
	getNextMutationBatchAfterBatchId(e, t) {
		const r = t + 1,
			i = this.br(r),
			s = i < 0 ? 0 : i;
		return f.resolve(this.mutationQueue.length > s ? this.mutationQueue[s] : null);
	}
	getHighestUnacknowledgedBatchId() {
		return f.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1);
	}
	getAllMutationBatches(e) {
		return f.resolve(this.mutationQueue.slice());
	}
	getAllMutationBatchesAffectingDocumentKey(e, t) {
		const r = new H(t, 0),
			i = new H(t, Number.POSITIVE_INFINITY),
			s = [];
		return (
			this.wr.forEachInRange([r, i], (o) => {
				const a = this.Sr(o.pr);
				s.push(a);
			}),
			f.resolve(s)
		);
	}
	getAllMutationBatchesAffectingDocumentKeys(e, t) {
		let r = new Z(D);
		return (
			t.forEach((i) => {
				const s = new H(i, 0),
					o = new H(i, Number.POSITIVE_INFINITY);
				this.wr.forEachInRange([s, o], (a) => {
					r = r.add(a.pr);
				});
			}),
			f.resolve(this.Dr(r))
		);
	}
	getAllMutationBatchesAffectingQuery(e, t) {
		const r = t.path,
			i = r.length + 1;
		let s = r;
		v.isDocumentKey(s) || (s = s.child(''));
		const o = new H(new v(s), 0);
		let a = new Z(D);
		return (
			this.wr.forEachWhile((c) => {
				const u = c.key.path;
				return !!r.isPrefixOf(u) && (u.length === i && (a = a.add(c.pr)), !0);
			}, o),
			f.resolve(this.Dr(a))
		);
	}
	Dr(e) {
		const t = [];
		return (
			e.forEach((r) => {
				const i = this.Sr(r);
				i !== null && t.push(i);
			}),
			t
		);
	}
	removeMutationBatch(e, t) {
		N(this.Cr(t.batchId, 'removed') === 0), this.mutationQueue.shift();
		let r = this.wr;
		return f
			.forEach(t.mutations, (i) => {
				const s = new H(i.key, t.batchId);
				return (r = r.delete(s)), this.referenceDelegate.markPotentiallyOrphaned(e, i.key);
			})
			.next(() => {
				this.wr = r;
			});
	}
	Mn(e) {}
	containsKey(e, t) {
		const r = new H(t, 0),
			i = this.wr.firstAfterOrEqual(r);
		return f.resolve(t.isEqual(i && i.key));
	}
	performConsistencyCheck(e) {
		return this.mutationQueue.length, f.resolve();
	}
	Cr(e, t) {
		return this.br(e);
	}
	br(e) {
		return this.mutationQueue.length === 0 ? 0 : e - this.mutationQueue[0].batchId;
	}
	Sr(e) {
		const t = this.br(e);
		return t < 0 || t >= this.mutationQueue.length ? null : this.mutationQueue[t];
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class J_ {
	constructor(e) {
		(this.vr = e),
			(this.docs = (function () {
				return new x(v.comparator);
			})()),
			(this.size = 0);
	}
	setIndexManager(e) {
		this.indexManager = e;
	}
	addEntry(e, t) {
		const r = t.key,
			i = this.docs.get(r),
			s = i ? i.size : 0,
			o = this.vr(t);
		return (
			(this.docs = this.docs.insert(r, { document: t.mutableCopy(), size: o })),
			(this.size += o - s),
			this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
		);
	}
	removeEntry(e) {
		const t = this.docs.get(e);
		t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
	}
	getEntry(e, t) {
		const r = this.docs.get(t);
		return f.resolve(r ? r.document.mutableCopy() : ne.newInvalidDocument(t));
	}
	getEntries(e, t) {
		let r = qe();
		return (
			t.forEach((i) => {
				const s = this.docs.get(i);
				r = r.insert(i, s ? s.document.mutableCopy() : ne.newInvalidDocument(i));
			}),
			f.resolve(r)
		);
	}
	getDocumentsMatchingQuery(e, t, r, i) {
		let s = qe();
		const o = t.path,
			a = new v(o.child('')),
			c = this.docs.getIteratorFrom(a);
		for (; c.hasNext(); ) {
			const {
				key: u,
				value: { document: l }
			} = c.getNext();
			if (!o.isPrefixOf(u.path)) break;
			u.path.length > o.length + 1 ||
				Nm(Vm(l), r) <= 0 ||
				((i.has(l.key) || vi(t, l)) && (s = s.insert(l.key, l.mutableCopy())));
		}
		return f.resolve(s);
	}
	getAllFromCollectionGroup(e, t, r, i) {
		T();
	}
	Fr(e, t) {
		return f.forEach(this.docs, (r) => t(r));
	}
	newChangeBuffer(e) {
		return new Y_(this);
	}
	getSize(e) {
		return f.resolve(this.size);
	}
}
class Y_ extends z_ {
	constructor(e) {
		super(), (this.ar = e);
	}
	applyChanges(e) {
		const t = [];
		return (
			this.changes.forEach((r, i) => {
				i.isValidDocument() ? t.push(this.ar.addEntry(e, i)) : this.ar.removeEntry(r);
			}),
			f.waitFor(t)
		);
	}
	getFromCache(e, t) {
		return this.ar.getEntry(e, t);
	}
	getAllFromCache(e, t) {
		return this.ar.getEntries(e, t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X_ {
	constructor(e) {
		(this.persistence = e),
			(this.Mr = new rn((t) => Io(t), To)),
			(this.lastRemoteSnapshotVersion = A.min()),
			(this.highestTargetId = 0),
			(this.Or = 0),
			(this.Nr = new Po()),
			(this.targetCount = 0),
			(this.Lr = Qt.Nn());
	}
	forEachTarget(e, t) {
		return this.Mr.forEach((r, i) => t(i)), f.resolve();
	}
	getLastRemoteSnapshotVersion(e) {
		return f.resolve(this.lastRemoteSnapshotVersion);
	}
	getHighestSequenceNumber(e) {
		return f.resolve(this.Or);
	}
	allocateTargetId(e) {
		return (this.highestTargetId = this.Lr.next()), f.resolve(this.highestTargetId);
	}
	setTargetsMetadata(e, t, r) {
		return r && (this.lastRemoteSnapshotVersion = r), t > this.Or && (this.Or = t), f.resolve();
	}
	qn(e) {
		this.Mr.set(e.target, e);
		const t = e.targetId;
		t > this.highestTargetId && ((this.Lr = new Qt(t)), (this.highestTargetId = t)),
			e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber);
	}
	addTargetData(e, t) {
		return this.qn(t), (this.targetCount += 1), f.resolve();
	}
	updateTargetData(e, t) {
		return this.qn(t), f.resolve();
	}
	removeTargetData(e, t) {
		return this.Mr.delete(t.target), this.Nr.Vr(t.targetId), (this.targetCount -= 1), f.resolve();
	}
	removeTargets(e, t, r) {
		let i = 0;
		const s = [];
		return (
			this.Mr.forEach((o, a) => {
				a.sequenceNumber <= t &&
					r.get(a.targetId) === null &&
					(this.Mr.delete(o), s.push(this.removeMatchingKeysForTargetId(e, a.targetId)), i++);
			}),
			f.waitFor(s).next(() => i)
		);
	}
	getTargetCount(e) {
		return f.resolve(this.targetCount);
	}
	getTargetData(e, t) {
		const r = this.Mr.get(t) || null;
		return f.resolve(r);
	}
	addMatchingKeys(e, t, r) {
		return this.Nr.dr(t, r), f.resolve();
	}
	removeMatchingKeys(e, t, r) {
		this.Nr.Rr(t, r);
		const i = this.persistence.referenceDelegate,
			s = [];
		return (
			i &&
				t.forEach((o) => {
					s.push(i.markPotentiallyOrphaned(e, o));
				}),
			f.waitFor(s)
		);
	}
	removeMatchingKeysForTargetId(e, t) {
		return this.Nr.Vr(t), f.resolve();
	}
	getMatchingKeysForTargetId(e, t) {
		const r = this.Nr.gr(t);
		return f.resolve(r);
	}
	containsKey(e, t) {
		return f.resolve(this.Nr.containsKey(t));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Z_ {
	constructor(e, t) {
		(this.Br = {}),
			(this.overlays = {}),
			(this.kr = new _o(0)),
			(this.qr = !1),
			(this.qr = !0),
			(this.referenceDelegate = e(this)),
			(this.Qr = new X_(this)),
			(this.indexManager = new q_()),
			(this.remoteDocumentCache = (function (i) {
				return new J_(i);
			})((r) => this.referenceDelegate.Kr(r))),
			(this.serializer = new B_(t)),
			(this.$r = new K_(this.serializer));
	}
	start() {
		return Promise.resolve();
	}
	shutdown() {
		return (this.qr = !1), Promise.resolve();
	}
	get started() {
		return this.qr;
	}
	setDatabaseDeletedListener() {}
	setNetworkEnabled() {}
	getIndexManager(e) {
		return this.indexManager;
	}
	getDocumentOverlayCache(e) {
		let t = this.overlays[e.toKey()];
		return t || ((t = new G_()), (this.overlays[e.toKey()] = t)), t;
	}
	getMutationQueue(e, t) {
		let r = this.Br[e.toKey()];
		return r || ((r = new Q_(t, this.referenceDelegate)), (this.Br[e.toKey()] = r)), r;
	}
	getTargetCache() {
		return this.Qr;
	}
	getRemoteDocumentCache() {
		return this.remoteDocumentCache;
	}
	getBundleCache() {
		return this.$r;
	}
	runTransaction(e, t, r) {
		m('MemoryPersistence', 'Starting transaction:', e);
		const i = new ey(this.kr.next());
		return (
			this.referenceDelegate.Ur(),
			r(i)
				.next((s) => this.referenceDelegate.Wr(i).next(() => s))
				.toPromise()
				.then((s) => (i.raiseOnCommittedEvent(), s))
		);
	}
	Gr(e, t) {
		return f.or(Object.values(this.Br).map((r) => () => r.containsKey(e, t)));
	}
}
class ey extends Lm {
	constructor(e) {
		super(), (this.currentSequenceNumber = e);
	}
}
class Co {
	constructor(e) {
		(this.persistence = e), (this.zr = new Po()), (this.jr = null);
	}
	static Hr(e) {
		return new Co(e);
	}
	get Jr() {
		if (this.jr) return this.jr;
		throw T();
	}
	addReference(e, t, r) {
		return this.zr.addReference(r, t), this.Jr.delete(r.toString()), f.resolve();
	}
	removeReference(e, t, r) {
		return this.zr.removeReference(r, t), this.Jr.add(r.toString()), f.resolve();
	}
	markPotentiallyOrphaned(e, t) {
		return this.Jr.add(t.toString()), f.resolve();
	}
	removeTarget(e, t) {
		this.zr.Vr(t.targetId).forEach((i) => this.Jr.add(i.toString()));
		const r = this.persistence.getTargetCache();
		return r
			.getMatchingKeysForTargetId(e, t.targetId)
			.next((i) => {
				i.forEach((s) => this.Jr.add(s.toString()));
			})
			.next(() => r.removeTargetData(e, t));
	}
	Ur() {
		this.jr = new Set();
	}
	Wr(e) {
		const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
		return f
			.forEach(this.Jr, (r) => {
				const i = v.fromPath(r);
				return this.Yr(e, i).next((s) => {
					s || t.removeEntry(i, A.min());
				});
			})
			.next(() => ((this.jr = null), t.apply(e)));
	}
	updateLimboDocument(e, t) {
		return this.Yr(e, t).next((r) => {
			r ? this.Jr.delete(t.toString()) : this.Jr.add(t.toString());
		});
	}
	Kr(e) {
		return 0;
	}
	Yr(e, t) {
		return f.or([
			() => f.resolve(this.zr.containsKey(t)),
			() => this.persistence.getTargetCache().containsKey(e, t),
			() => this.persistence.Gr(e, t)
		]);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bo {
	constructor(e, t, r, i) {
		(this.targetId = e), (this.fromCache = t), (this.qi = r), (this.Qi = i);
	}
	static Ki(e, t) {
		let r = C(),
			i = C();
		for (const s of t.docChanges)
			switch (s.type) {
				case 0:
					r = r.add(s.doc.key);
					break;
				case 1:
					i = i.add(s.doc.key);
			}
		return new bo(e, t.fromCache, r, i);
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ty {
	constructor() {
		this._documentReadCount = 0;
	}
	get documentReadCount() {
		return this._documentReadCount;
	}
	incrementDocumentReadCount(e) {
		this._documentReadCount += e;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ny {
	constructor() {
		(this.$i = !1),
			(this.Ui = !1),
			(this.Wi = 100),
			(this.Gi = (function () {
				return Vd() ? 8 : ft.v(q()) > 0 ? 6 : 4;
			})());
	}
	initialize(e, t) {
		(this.zi = e), (this.indexManager = t), (this.$i = !0);
	}
	getDocumentsMatchingQuery(e, t, r, i) {
		const s = { result: null };
		return this.ji(e, t)
			.next((o) => {
				s.result = o;
			})
			.next(() => {
				if (!s.result)
					return this.Hi(e, t, i, r).next((o) => {
						s.result = o;
					});
			})
			.next(() => {
				if (s.result) return;
				const o = new ty();
				return this.Ji(e, t, o).next((a) => {
					if (((s.result = a), this.Ui)) return this.Yi(e, t, o, a.size);
				});
			})
			.next(() => s.result);
	}
	Yi(e, t, r, i) {
		return r.documentReadCount < this.Wi
			? (ln() <= b.DEBUG &&
					m(
						'QueryEngine',
						'SDK will not create cache indexes for query:',
						Vt(t),
						'since it only creates cache indexes for collection contains',
						'more than or equal to',
						this.Wi,
						'documents'
					),
				f.resolve())
			: (ln() <= b.DEBUG &&
					m(
						'QueryEngine',
						'Query:',
						Vt(t),
						'scans',
						r.documentReadCount,
						'local documents and returns',
						i,
						'documents as results.'
					),
				r.documentReadCount > this.Gi * i
					? (ln() <= b.DEBUG &&
							m(
								'QueryEngine',
								'The SDK decides to create cache indexes for query:',
								Vt(t),
								'as using cache indexes may help improve performance.'
							),
						this.indexManager.createTargetIndexes(e, Pe(t)))
					: f.resolve());
	}
	ji(e, t) {
		if ($a(t)) return f.resolve(null);
		let r = Pe(t);
		return this.indexManager.getIndexType(e, r).next((i) =>
			i === 0
				? null
				: (t.limit !== null && i === 1 && ((t = Rs(t, null, 'F')), (r = Pe(t))),
					this.indexManager.getDocumentsMatchingTarget(e, r).next((s) => {
						const o = C(...s);
						return this.zi.getDocuments(e, o).next((a) =>
							this.indexManager.getMinOffset(e, r).next((c) => {
								const u = this.Zi(t, a);
								return this.Xi(t, u, o, c.readTime)
									? this.ji(e, Rs(t, null, 'F'))
									: this.es(e, u, t, c);
							})
						);
					}))
		);
	}
	Hi(e, t, r, i) {
		return $a(t) || i.isEqual(A.min())
			? f.resolve(null)
			: this.zi.getDocuments(e, r).next((s) => {
					const o = this.Zi(t, s);
					return this.Xi(t, o, r, i)
						? f.resolve(null)
						: (ln() <= b.DEBUG &&
								m(
									'QueryEngine',
									'Re-using previous result from %s to execute query: %s',
									i.toString(),
									Vt(t)
								),
							this.es(e, o, t, Dm(i, -1)).next((a) => a));
				});
	}
	Zi(e, t) {
		let r = new Z(Dl(e));
		return (
			t.forEach((i, s) => {
				vi(e, s) && (r = r.add(s));
			}),
			r
		);
	}
	Xi(e, t, r, i) {
		if (e.limit === null) return !1;
		if (r.size !== t.size) return !0;
		const s = e.limitType === 'F' ? t.last() : t.first();
		return !!s && (s.hasPendingWrites || s.version.compareTo(i) > 0);
	}
	Ji(e, t, r) {
		return (
			ln() <= b.DEBUG && m('QueryEngine', 'Using full collection scan to execute query:', Vt(t)),
			this.zi.getDocumentsMatchingQuery(e, t, Ze.min(), r)
		);
	}
	es(e, t, r, i) {
		return this.zi.getDocumentsMatchingQuery(e, r, i).next(
			(s) => (
				t.forEach((o) => {
					s = s.insert(o.key, o);
				}),
				s
			)
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ry {
	constructor(e, t, r, i) {
		(this.persistence = e),
			(this.ts = t),
			(this.serializer = i),
			(this.ns = new x(D)),
			(this.rs = new rn((s) => Io(s), To)),
			(this.ss = new Map()),
			(this.os = e.getRemoteDocumentCache()),
			(this.Qr = e.getTargetCache()),
			(this.$r = e.getBundleCache()),
			this._s(r);
	}
	_s(e) {
		(this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
			(this.indexManager = this.persistence.getIndexManager(e)),
			(this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager)),
			(this.localDocuments = new W_(
				this.os,
				this.mutationQueue,
				this.documentOverlayCache,
				this.indexManager
			)),
			this.os.setIndexManager(this.indexManager),
			this.ts.initialize(this.localDocuments, this.indexManager);
	}
	collectGarbage(e) {
		return this.persistence.runTransaction('Collect garbage', 'readwrite-primary', (t) =>
			e.collect(t, this.ns)
		);
	}
}
function iy(n, e, t, r) {
	return new ry(n, e, t, r);
}
async function eh(n, e) {
	const t = R(n);
	return await t.persistence.runTransaction('Handle user change', 'readonly', (r) => {
		let i;
		return t.mutationQueue
			.getAllMutationBatches(r)
			.next((s) => ((i = s), t._s(e), t.mutationQueue.getAllMutationBatches(r)))
			.next((s) => {
				const o = [],
					a = [];
				let c = C();
				for (const u of i) {
					o.push(u.batchId);
					for (const l of u.mutations) c = c.add(l.key);
				}
				for (const u of s) {
					a.push(u.batchId);
					for (const l of u.mutations) c = c.add(l.key);
				}
				return t.localDocuments
					.getDocuments(r, c)
					.next((u) => ({ us: u, removedBatchIds: o, addedBatchIds: a }));
			});
	});
}
function sy(n, e) {
	const t = R(n);
	return t.persistence.runTransaction('Acknowledge batch', 'readwrite-primary', (r) => {
		const i = e.batch.keys(),
			s = t.os.newChangeBuffer({ trackRemovals: !0 });
		return (function (a, c, u, l) {
			const h = u.batch,
				d = h.keys();
			let g = f.resolve();
			return (
				d.forEach((S) => {
					g = g
						.next(() => l.getEntry(c, S))
						.next((P) => {
							const E = u.docVersions.get(S);
							N(E !== null),
								P.version.compareTo(E) < 0 &&
									(h.applyToRemoteDocument(P, u),
									P.isValidDocument() && (P.setReadTime(u.commitVersion), l.addEntry(P)));
						});
				}),
				g.next(() => a.mutationQueue.removeMutationBatch(c, h))
			);
		})(t, r, e, s)
			.next(() => s.apply(r))
			.next(() => t.mutationQueue.performConsistencyCheck(r))
			.next(() => t.documentOverlayCache.removeOverlaysForBatchId(r, i, e.batch.batchId))
			.next(() =>
				t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
					r,
					(function (a) {
						let c = C();
						for (let u = 0; u < a.mutationResults.length; ++u)
							a.mutationResults[u].transformResults.length > 0 &&
								(c = c.add(a.batch.mutations[u].key));
						return c;
					})(e)
				)
			)
			.next(() => t.localDocuments.getDocuments(r, i));
	});
}
function th(n) {
	const e = R(n);
	return e.persistence.runTransaction('Get last remote snapshot version', 'readonly', (t) =>
		e.Qr.getLastRemoteSnapshotVersion(t)
	);
}
function oy(n, e) {
	const t = R(n),
		r = e.snapshotVersion;
	let i = t.ns;
	return t.persistence
		.runTransaction('Apply remote event', 'readwrite-primary', (s) => {
			const o = t.os.newChangeBuffer({ trackRemovals: !0 });
			i = t.ns;
			const a = [];
			e.targetChanges.forEach((l, h) => {
				const d = i.get(h);
				if (!d) return;
				a.push(
					t.Qr.removeMatchingKeys(s, l.removedDocuments, h).next(() =>
						t.Qr.addMatchingKeys(s, l.addedDocuments, h)
					)
				);
				let g = d.withSequenceNumber(s.currentSequenceNumber);
				e.targetMismatches.get(h) !== null
					? (g = g
							.withResumeToken(se.EMPTY_BYTE_STRING, A.min())
							.withLastLimboFreeSnapshotVersion(A.min()))
					: l.resumeToken.approximateByteSize() > 0 && (g = g.withResumeToken(l.resumeToken, r)),
					(i = i.insert(h, g)),
					(function (P, E, L) {
						return P.resumeToken.approximateByteSize() === 0 ||
							E.snapshotVersion.toMicroseconds() - P.snapshotVersion.toMicroseconds() >= 3e8
							? !0
							: L.addedDocuments.size + L.modifiedDocuments.size + L.removedDocuments.size > 0;
					})(d, g, l) && a.push(t.Qr.updateTargetData(s, g));
			});
			let c = qe(),
				u = C();
			if (
				(e.documentUpdates.forEach((l) => {
					e.resolvedLimboDocuments.has(l) &&
						a.push(t.persistence.referenceDelegate.updateLimboDocument(s, l));
				}),
				a.push(
					ay(s, o, e.documentUpdates).next((l) => {
						(c = l.cs), (u = l.ls);
					})
				),
				!r.isEqual(A.min()))
			) {
				const l = t.Qr.getLastRemoteSnapshotVersion(s).next((h) =>
					t.Qr.setTargetsMetadata(s, s.currentSequenceNumber, r)
				);
				a.push(l);
			}
			return f
				.waitFor(a)
				.next(() => o.apply(s))
				.next(() => t.localDocuments.getLocalViewOfDocuments(s, c, u))
				.next(() => c);
		})
		.then((s) => ((t.ns = i), s));
}
function ay(n, e, t) {
	let r = C(),
		i = C();
	return (
		t.forEach((s) => (r = r.add(s))),
		e.getEntries(n, r).next((s) => {
			let o = qe();
			return (
				t.forEach((a, c) => {
					const u = s.get(a);
					c.isFoundDocument() !== u.isFoundDocument() && (i = i.add(a)),
						c.isNoDocument() && c.version.isEqual(A.min())
							? (e.removeEntry(a, c.readTime), (o = o.insert(a, c)))
							: !u.isValidDocument() ||
								  c.version.compareTo(u.version) > 0 ||
								  (c.version.compareTo(u.version) === 0 && u.hasPendingWrites)
								? (e.addEntry(c), (o = o.insert(a, c)))
								: m(
										'LocalStore',
										'Ignoring outdated watch update for ',
										a,
										'. Current version:',
										u.version,
										' Watch version:',
										c.version
									);
				}),
				{ cs: o, ls: i }
			);
		})
	);
}
function cy(n, e) {
	const t = R(n);
	return t.persistence.runTransaction(
		'Get next mutation batch',
		'readonly',
		(r) => (e === void 0 && (e = -1), t.mutationQueue.getNextMutationBatchAfterBatchId(r, e))
	);
}
function uy(n, e) {
	const t = R(n);
	return t.persistence
		.runTransaction('Allocate target', 'readwrite', (r) => {
			let i;
			return t.Qr.getTargetData(r, e).next((s) =>
				s
					? ((i = s), f.resolve(i))
					: t.Qr.allocateTargetId(r).next(
							(o) => (
								(i = new Qe(e, o, 'TargetPurposeListen', r.currentSequenceNumber)),
								t.Qr.addTargetData(r, i).next(() => i)
							)
						)
			);
		})
		.then((r) => {
			const i = t.ns.get(r.targetId);
			return (
				(i === null || r.snapshotVersion.compareTo(i.snapshotVersion) > 0) &&
					((t.ns = t.ns.insert(r.targetId, r)), t.rs.set(e, r.targetId)),
				r
			);
		});
}
async function ks(n, e, t) {
	const r = R(n),
		i = r.ns.get(e),
		s = t ? 'readwrite' : 'readwrite-primary';
	try {
		t ||
			(await r.persistence.runTransaction('Release target', s, (o) =>
				r.persistence.referenceDelegate.removeTarget(o, i)
			));
	} catch (o) {
		if (!er(o)) throw o;
		m('LocalStore', `Failed to update sequence numbers for target ${e}: ${o}`);
	}
	(r.ns = r.ns.remove(e)), r.rs.delete(i.target);
}
function ec(n, e, t) {
	const r = R(n);
	let i = A.min(),
		s = C();
	return r.persistence.runTransaction('Execute query', 'readwrite', (o) =>
		(function (c, u, l) {
			const h = R(c),
				d = h.rs.get(l);
			return d !== void 0 ? f.resolve(h.ns.get(d)) : h.Qr.getTargetData(u, l);
		})(r, o, Pe(e))
			.next((a) => {
				if (a)
					return (
						(i = a.lastLimboFreeSnapshotVersion),
						r.Qr.getMatchingKeysForTargetId(o, a.targetId).next((c) => {
							s = c;
						})
					);
			})
			.next(() => r.ts.getDocumentsMatchingQuery(o, e, t ? i : A.min(), t ? s : C()))
			.next((a) => (ly(r, t_(e), a), { documents: a, hs: s }))
	);
}
function ly(n, e, t) {
	let r = n.ss.get(e) || A.min();
	t.forEach((i, s) => {
		s.readTime.compareTo(r) > 0 && (r = s.readTime);
	}),
		n.ss.set(e, r);
}
class tc {
	constructor() {
		this.activeTargetIds = a_();
	}
	As(e) {
		this.activeTargetIds = this.activeTargetIds.add(e);
	}
	Rs(e) {
		this.activeTargetIds = this.activeTargetIds.delete(e);
	}
	ds() {
		const e = { activeTargetIds: this.activeTargetIds.toArray(), updateTimeMs: Date.now() };
		return JSON.stringify(e);
	}
}
class hy {
	constructor() {
		(this.no = new tc()),
			(this.ro = {}),
			(this.onlineStateHandler = null),
			(this.sequenceNumberHandler = null);
	}
	addPendingMutation(e) {}
	updateMutationState(e, t, r) {}
	addLocalQueryTarget(e) {
		return this.no.As(e), this.ro[e] || 'not-current';
	}
	updateQueryState(e, t, r) {
		this.ro[e] = t;
	}
	removeLocalQueryTarget(e) {
		this.no.Rs(e);
	}
	isLocalQueryTarget(e) {
		return this.no.activeTargetIds.has(e);
	}
	clearQueryState(e) {
		delete this.ro[e];
	}
	getAllActiveQueryTargets() {
		return this.no.activeTargetIds;
	}
	isActiveQueryTarget(e) {
		return this.no.activeTargetIds.has(e);
	}
	start() {
		return (this.no = new tc()), Promise.resolve();
	}
	handleUserChange(e, t, r) {}
	setOnlineState(e) {}
	shutdown() {}
	writeSequenceNumber(e) {}
	notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dy {
	io(e) {}
	shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nc {
	constructor() {
		(this.so = () => this.oo()), (this._o = () => this.ao()), (this.uo = []), this.co();
	}
	io(e) {
		this.uo.push(e);
	}
	shutdown() {
		window.removeEventListener('online', this.so), window.removeEventListener('offline', this._o);
	}
	co() {
		window.addEventListener('online', this.so), window.addEventListener('offline', this._o);
	}
	oo() {
		m('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
		for (const e of this.uo) e(0);
	}
	ao() {
		m('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
		for (const e of this.uo) e(1);
	}
	static D() {
		return (
			typeof window < 'u' &&
			window.addEventListener !== void 0 &&
			window.removeEventListener !== void 0
		);
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let _r = null;
function Ji() {
	return (
		_r === null
			? (_r = (function () {
					return 268435456 + Math.round(2147483648 * Math.random());
				})())
			: _r++,
		'0x' + _r.toString(16)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fy = {
	BatchGetDocuments: 'batchGet',
	Commit: 'commit',
	RunQuery: 'runQuery',
	RunAggregationQuery: 'runAggregationQuery'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class py {
	constructor(e) {
		(this.lo = e.lo), (this.ho = e.ho);
	}
	Po(e) {
		this.Io = e;
	}
	To(e) {
		this.Eo = e;
	}
	onMessage(e) {
		this.Ao = e;
	}
	close() {
		this.ho();
	}
	send(e) {
		this.lo(e);
	}
	Ro() {
		this.Io();
	}
	Vo(e) {
		this.Eo(e);
	}
	mo(e) {
		this.Ao(e);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ee = 'WebChannelConnection';
class gy extends class {
	constructor(t) {
		(this.databaseInfo = t), (this.databaseId = t.databaseId);
		const r = t.ssl ? 'https' : 'http',
			i = encodeURIComponent(this.databaseId.projectId),
			s = encodeURIComponent(this.databaseId.database);
		(this.fo = r + '://' + t.host),
			(this.po = `projects/${i}/databases/${s}`),
			(this.yo =
				this.databaseId.database === '(default)'
					? `project_id=${i}`
					: `project_id=${i}&database_id=${s}`);
	}
	get wo() {
		return !1;
	}
	So(t, r, i, s, o) {
		const a = Ji(),
			c = this.bo(t, r.toUriEncodedString());
		m('RestConnection', `Sending RPC '${t}' ${a}:`, c, i);
		const u = { 'google-cloud-resource-prefix': this.po, 'x-goog-request-params': this.yo };
		return (
			this.Do(u, s, o),
			this.Co(t, c, u, i).then(
				(l) => (m('RestConnection', `Received RPC '${t}' ${a}: `, l), l),
				(l) => {
					throw (
						(Ht(
							'RestConnection',
							`RPC '${t}' ${a} failed with error: `,
							l,
							'url: ',
							c,
							'request:',
							i
						),
						l)
					);
				}
			)
		);
	}
	vo(t, r, i, s, o, a) {
		return this.So(t, r, i, s, o);
	}
	Do(t, r, i) {
		(t['X-Goog-Api-Client'] = (function () {
			return 'gl-js/ fire/' + tn;
		})()),
			(t['Content-Type'] = 'text/plain'),
			this.databaseInfo.appId && (t['X-Firebase-GMPID'] = this.databaseInfo.appId),
			r && r.headers.forEach((s, o) => (t[o] = s)),
			i && i.headers.forEach((s, o) => (t[o] = s));
	}
	bo(t, r) {
		const i = fy[t];
		return `${this.fo}/v1/${r}:${i}`;
	}
	terminate() {}
} {
	constructor(e) {
		super(e),
			(this.forceLongPolling = e.forceLongPolling),
			(this.autoDetectLongPolling = e.autoDetectLongPolling),
			(this.useFetchStreams = e.useFetchStreams),
			(this.longPollingOptions = e.longPollingOptions);
	}
	Co(e, t, r, i) {
		const s = Ji();
		return new Promise((o, a) => {
			const c = new Em();
			c.setWithCredentials(!0),
				c.listenOnce(ym.COMPLETE, () => {
					try {
						switch (c.getLastErrorCode()) {
							case Gi.NO_ERROR:
								const l = c.getResponseJson();
								m(ee, `XHR for RPC '${e}' ${s} received:`, JSON.stringify(l)), o(l);
								break;
							case Gi.TIMEOUT:
								m(ee, `RPC '${e}' ${s} timed out`),
									a(new y(p.DEADLINE_EXCEEDED, 'Request time out'));
								break;
							case Gi.HTTP_ERROR:
								const h = c.getStatus();
								if (
									(m(
										ee,
										`RPC '${e}' ${s} failed with status:`,
										h,
										'response text:',
										c.getResponseText()
									),
									h > 0)
								) {
									let d = c.getResponseJson();
									Array.isArray(d) && (d = d[0]);
									const g = d == null ? void 0 : d.error;
									if (g && g.status && g.message) {
										const S = (function (E) {
											const L = E.toLowerCase().replace(/_/g, '-');
											return Object.values(p).indexOf(L) >= 0 ? L : p.UNKNOWN;
										})(g.status);
										a(new y(S, g.message));
									} else a(new y(p.UNKNOWN, 'Server responded with status ' + c.getStatus()));
								} else a(new y(p.UNAVAILABLE, 'Connection failed.'));
								break;
							default:
								T();
						}
					} finally {
						m(ee, `RPC '${e}' ${s} completed.`);
					}
				});
			const u = JSON.stringify(i);
			m(ee, `RPC '${e}' ${s} sending request:`, i), c.send(t, 'POST', u, r, 15);
		});
	}
	Fo(e, t, r) {
		const i = Ji(),
			s = [this.fo, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
			o = mm(),
			a = _m(),
			c = {
				httpSessionIdParam: 'gsessionid',
				initMessageHeaders: {},
				messageUrlParams: {
					database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
				},
				sendRawJson: !0,
				supportsCrossDomainXhr: !0,
				internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
				forceLongPolling: this.forceLongPolling,
				detectBufferingProxy: this.autoDetectLongPolling
			},
			u = this.longPollingOptions.timeoutSeconds;
		u !== void 0 && (c.longPollingTimeout = Math.round(1e3 * u)),
			this.useFetchStreams && (c.useFetchStreams = !0),
			this.Do(c.initMessageHeaders, t, r),
			(c.encodeInitMessageHeaders = !0);
		const l = s.join('');
		m(ee, `Creating RPC '${e}' stream ${i}: ${l}`, c);
		const h = o.createWebChannel(l, c);
		let d = !1,
			g = !1;
		const S = new py({
				lo: (E) => {
					g
						? m(ee, `Not sending because RPC '${e}' stream ${i} is closed:`, E)
						: (d || (m(ee, `Opening RPC '${e}' stream ${i} transport.`), h.open(), (d = !0)),
							m(ee, `RPC '${e}' stream ${i} sending:`, E),
							h.send(E));
				},
				ho: () => h.close()
			}),
			P = (E, L, U) => {
				E.listen(L, (G) => {
					try {
						U(G);
					} catch (he) {
						setTimeout(() => {
							throw he;
						}, 0);
					}
				});
			};
		return (
			P(h, pr.EventType.OPEN, () => {
				g || m(ee, `RPC '${e}' stream ${i} transport opened.`);
			}),
			P(h, pr.EventType.CLOSE, () => {
				g || ((g = !0), m(ee, `RPC '${e}' stream ${i} transport closed`), S.Vo());
			}),
			P(h, pr.EventType.ERROR, (E) => {
				g ||
					((g = !0),
					Ht(ee, `RPC '${e}' stream ${i} transport errored:`, E),
					S.Vo(new y(p.UNAVAILABLE, 'The operation could not be completed')));
			}),
			P(h, pr.EventType.MESSAGE, (E) => {
				var L;
				if (!g) {
					const U = E.data[0];
					N(!!U);
					const G = U,
						he = G.error || ((L = G[0]) === null || L === void 0 ? void 0 : L.error);
					if (he) {
						m(ee, `RPC '${e}' stream ${i} received error:`, he);
						const ot = he.status;
						let Ie = (function (an) {
								const ur = B[an];
								if (ur !== void 0) return zl(ur);
							})(ot),
							at = he.message;
						Ie === void 0 &&
							((Ie = p.INTERNAL),
							(at = 'Unknown error status: ' + ot + ' with message ' + he.message)),
							(g = !0),
							S.Vo(new y(Ie, at)),
							h.close();
					} else m(ee, `RPC '${e}' stream ${i} received:`, U), S.mo(U);
				}
			}),
			P(a, vm.STAT_EVENT, (E) => {
				E.stat === Va.PROXY
					? m(ee, `RPC '${e}' stream ${i} detected buffering proxy`)
					: E.stat === Va.NOPROXY && m(ee, `RPC '${e}' stream ${i} detected no buffering proxy`);
			}),
			setTimeout(() => {
				S.Ro();
			}, 0),
			S
		);
	}
}
function Yi() {
	return typeof document < 'u' ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wi(n) {
	return new S_(n, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nh {
	constructor(e, t, r = 1e3, i = 1.5, s = 6e4) {
		(this.oi = e),
			(this.timerId = t),
			(this.Mo = r),
			(this.xo = i),
			(this.Oo = s),
			(this.No = 0),
			(this.Lo = null),
			(this.Bo = Date.now()),
			this.reset();
	}
	reset() {
		this.No = 0;
	}
	ko() {
		this.No = this.Oo;
	}
	qo(e) {
		this.cancel();
		const t = Math.floor(this.No + this.Qo()),
			r = Math.max(0, Date.now() - this.Bo),
			i = Math.max(0, t - r);
		i > 0 &&
			m(
				'ExponentialBackoff',
				`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`
			),
			(this.Lo = this.oi.enqueueAfterDelay(this.timerId, i, () => ((this.Bo = Date.now()), e()))),
			(this.No *= this.xo),
			this.No < this.Mo && (this.No = this.Mo),
			this.No > this.Oo && (this.No = this.Oo);
	}
	Ko() {
		this.Lo !== null && (this.Lo.skipDelay(), (this.Lo = null));
	}
	cancel() {
		this.Lo !== null && (this.Lo.cancel(), (this.Lo = null));
	}
	Qo() {
		return (Math.random() - 0.5) * this.No;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rh {
	constructor(e, t, r, i, s, o, a, c) {
		(this.oi = e),
			(this.$o = r),
			(this.Uo = i),
			(this.connection = s),
			(this.authCredentialsProvider = o),
			(this.appCheckCredentialsProvider = a),
			(this.listener = c),
			(this.state = 0),
			(this.Wo = 0),
			(this.Go = null),
			(this.zo = null),
			(this.stream = null),
			(this.jo = new nh(e, t));
	}
	Ho() {
		return this.state === 1 || this.state === 5 || this.Jo();
	}
	Jo() {
		return this.state === 2 || this.state === 3;
	}
	start() {
		this.state !== 4 ? this.auth() : this.Yo();
	}
	async stop() {
		this.Ho() && (await this.close(0));
	}
	Zo() {
		(this.state = 0), this.jo.reset();
	}
	Xo() {
		this.Jo() &&
			this.Go === null &&
			(this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
	}
	t_(e) {
		this.n_(), this.stream.send(e);
	}
	async e_() {
		if (this.Jo()) return this.close(0);
	}
	n_() {
		this.Go && (this.Go.cancel(), (this.Go = null));
	}
	r_() {
		this.zo && (this.zo.cancel(), (this.zo = null));
	}
	async close(e, t) {
		this.n_(),
			this.r_(),
			this.jo.cancel(),
			this.Wo++,
			e !== 4
				? this.jo.reset()
				: t && t.code === p.RESOURCE_EXHAUSTED
					? (Ve(t.toString()),
						Ve('Using maximum backoff delay to prevent overloading the backend.'),
						this.jo.ko())
					: t &&
						t.code === p.UNAUTHENTICATED &&
						this.state !== 3 &&
						(this.authCredentialsProvider.invalidateToken(),
						this.appCheckCredentialsProvider.invalidateToken()),
			this.stream !== null && (this.i_(), this.stream.close(), (this.stream = null)),
			(this.state = e),
			await this.listener.To(t);
	}
	i_() {}
	auth() {
		this.state = 1;
		const e = this.s_(this.Wo),
			t = this.Wo;
		Promise.all([
			this.authCredentialsProvider.getToken(),
			this.appCheckCredentialsProvider.getToken()
		]).then(
			([r, i]) => {
				this.Wo === t && this.o_(r, i);
			},
			(r) => {
				e(() => {
					const i = new y(p.UNKNOWN, 'Fetching auth token failed: ' + r.message);
					return this.__(i);
				});
			}
		);
	}
	o_(e, t) {
		const r = this.s_(this.Wo);
		(this.stream = this.a_(e, t)),
			this.stream.Po(() => {
				r(
					() => (
						(this.state = 2),
						(this.zo = this.oi.enqueueAfterDelay(
							this.Uo,
							1e4,
							() => (this.Jo() && (this.state = 3), Promise.resolve())
						)),
						this.listener.Po()
					)
				);
			}),
			this.stream.To((i) => {
				r(() => this.__(i));
			}),
			this.stream.onMessage((i) => {
				r(() => this.onMessage(i));
			});
	}
	Yo() {
		(this.state = 5),
			this.jo.qo(async () => {
				(this.state = 0), this.start();
			});
	}
	__(e) {
		return m('PersistentStream', `close with error: ${e}`), (this.stream = null), this.close(4, e);
	}
	s_(e) {
		return (t) => {
			this.oi.enqueueAndForget(() =>
				this.Wo === e
					? t()
					: (m('PersistentStream', 'stream callback skipped by getCloseGuardedDispatcher.'),
						Promise.resolve())
			);
		};
	}
}
class my extends rh {
	constructor(e, t, r, i, s, o) {
		super(
			e,
			'listen_stream_connection_backoff',
			'listen_stream_idle',
			'health_check_timeout',
			t,
			r,
			i,
			o
		),
			(this.serializer = s);
	}
	a_(e, t) {
		return this.connection.Fo('Listen', e, t);
	}
	onMessage(e) {
		this.jo.reset();
		const t = b_(this.serializer, e),
			r = (function (s) {
				if (!('targetChange' in s)) return A.min();
				const o = s.targetChange;
				return o.targetIds && o.targetIds.length ? A.min() : o.readTime ? Ce(o.readTime) : A.min();
			})(e);
		return this.listener.u_(t, r);
	}
	c_(e) {
		const t = {};
		(t.database = bs(this.serializer)),
			(t.addTarget = (function (s, o) {
				let a;
				const c = o.target;
				if (
					((a = As(c) ? { documents: V_(s, c) } : { query: N_(s, c).ut }),
					(a.targetId = o.targetId),
					o.resumeToken.approximateByteSize() > 0)
				) {
					a.resumeToken = Kl(s, o.resumeToken);
					const u = Ss(s, o.expectedCount);
					u !== null && (a.expectedCount = u);
				} else if (o.snapshotVersion.compareTo(A.min()) > 0) {
					a.readTime = qr(s, o.snapshotVersion.toTimestamp());
					const u = Ss(s, o.expectedCount);
					u !== null && (a.expectedCount = u);
				}
				return a;
			})(this.serializer, e));
		const r = L_(this.serializer, e);
		r && (t.labels = r), this.t_(t);
	}
	l_(e) {
		const t = {};
		(t.database = bs(this.serializer)), (t.removeTarget = e), this.t_(t);
	}
}
class _y extends rh {
	constructor(e, t, r, i, s, o) {
		super(
			e,
			'write_stream_connection_backoff',
			'write_stream_idle',
			'health_check_timeout',
			t,
			r,
			i,
			o
		),
			(this.serializer = s),
			(this.h_ = !1);
	}
	get P_() {
		return this.h_;
	}
	start() {
		(this.h_ = !1), (this.lastStreamToken = void 0), super.start();
	}
	i_() {
		this.h_ && this.I_([]);
	}
	a_(e, t) {
		return this.connection.Fo('Write', e, t);
	}
	onMessage(e) {
		if ((N(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.h_)) {
			this.jo.reset();
			const t = D_(e.writeResults, e.commitTime),
				r = Ce(e.commitTime);
			return this.listener.T_(r, t);
		}
		return N(!e.writeResults || e.writeResults.length === 0), (this.h_ = !0), this.listener.E_();
	}
	d_() {
		const e = {};
		(e.database = bs(this.serializer)), this.t_(e);
	}
	I_(e) {
		const t = { streamToken: this.lastStreamToken, writes: e.map((r) => k_(this.serializer, r)) };
		this.t_(t);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yy extends class {} {
	constructor(e, t, r, i) {
		super(),
			(this.authCredentials = e),
			(this.appCheckCredentials = t),
			(this.connection = r),
			(this.serializer = i),
			(this.A_ = !1);
	}
	R_() {
		if (this.A_) throw new y(p.FAILED_PRECONDITION, 'The client has already been terminated.');
	}
	So(e, t, r, i) {
		return (
			this.R_(),
			Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
				.then(([s, o]) => this.connection.So(e, Ps(t, r), i, s, o))
				.catch((s) => {
					throw s.name === 'FirebaseError'
						? (s.code === p.UNAUTHENTICATED &&
								(this.authCredentials.invalidateToken(),
								this.appCheckCredentials.invalidateToken()),
							s)
						: new y(p.UNKNOWN, s.toString());
				})
		);
	}
	vo(e, t, r, i, s) {
		return (
			this.R_(),
			Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()])
				.then(([o, a]) => this.connection.vo(e, Ps(t, r), i, o, a, s))
				.catch((o) => {
					throw o.name === 'FirebaseError'
						? (o.code === p.UNAUTHENTICATED &&
								(this.authCredentials.invalidateToken(),
								this.appCheckCredentials.invalidateToken()),
							o)
						: new y(p.UNKNOWN, o.toString());
				})
		);
	}
	terminate() {
		(this.A_ = !0), this.connection.terminate();
	}
}
class vy {
	constructor(e, t) {
		(this.asyncQueue = e),
			(this.onlineStateHandler = t),
			(this.state = 'Unknown'),
			(this.m_ = 0),
			(this.f_ = null),
			(this.g_ = !0);
	}
	p_() {
		this.m_ === 0 &&
			(this.y_('Unknown'),
			(this.f_ = this.asyncQueue.enqueueAfterDelay(
				'online_state_timeout',
				1e4,
				() => (
					(this.f_ = null),
					this.w_("Backend didn't respond within 10 seconds."),
					this.y_('Offline'),
					Promise.resolve()
				)
			)));
	}
	S_(e) {
		this.state === 'Online'
			? this.y_('Unknown')
			: (this.m_++,
				this.m_ >= 1 &&
					(this.b_(),
					this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),
					this.y_('Offline')));
	}
	set(e) {
		this.b_(), (this.m_ = 0), e === 'Online' && (this.g_ = !1), this.y_(e);
	}
	y_(e) {
		e !== this.state && ((this.state = e), this.onlineStateHandler(e));
	}
	w_(e) {
		const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
		this.g_ ? (Ve(t), (this.g_ = !1)) : m('OnlineStateTracker', t);
	}
	b_() {
		this.f_ !== null && (this.f_.cancel(), (this.f_ = null));
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ey {
	constructor(e, t, r, i, s) {
		(this.localStore = e),
			(this.datastore = t),
			(this.asyncQueue = r),
			(this.remoteSyncer = {}),
			(this.D_ = []),
			(this.C_ = new Map()),
			(this.v_ = new Set()),
			(this.F_ = []),
			(this.M_ = s),
			this.M_.io((o) => {
				r.enqueueAndForget(async () => {
					bt(this) &&
						(m('RemoteStore', 'Restarting streams for network reachability change.'),
						await (async function (c) {
							const u = R(c);
							u.v_.add(4), await rr(u), u.x_.set('Unknown'), u.v_.delete(4), await Ai(u);
						})(this));
				});
			}),
			(this.x_ = new vy(r, i));
	}
}
async function Ai(n) {
	if (bt(n)) for (const e of n.F_) await e(!0);
}
async function rr(n) {
	for (const e of n.F_) await e(!1);
}
function ih(n, e) {
	const t = R(n);
	t.C_.has(e.targetId) || (t.C_.set(e.targetId, e), No(t) ? Vo(t) : sn(t).Jo() && Do(t, e));
}
function ko(n, e) {
	const t = R(n),
		r = sn(t);
	t.C_.delete(e),
		r.Jo() && sh(t, e),
		t.C_.size === 0 && (r.Jo() ? r.Xo() : bt(t) && t.x_.set('Unknown'));
}
function Do(n, e) {
	if (
		(n.O_.Oe(e.targetId),
		e.resumeToken.approximateByteSize() > 0 || e.snapshotVersion.compareTo(A.min()) > 0)
	) {
		const t = n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
		e = e.withExpectedCount(t);
	}
	sn(n).c_(e);
}
function sh(n, e) {
	n.O_.Oe(e), sn(n).l_(e);
}
function Vo(n) {
	(n.O_ = new T_({
		getRemoteKeysForTarget: (e) => n.remoteSyncer.getRemoteKeysForTarget(e),
		_t: (e) => n.C_.get(e) || null,
		nt: () => n.datastore.serializer.databaseId
	})),
		sn(n).start(),
		n.x_.p_();
}
function No(n) {
	return bt(n) && !sn(n).Ho() && n.C_.size > 0;
}
function bt(n) {
	return R(n).v_.size === 0;
}
function oh(n) {
	n.O_ = void 0;
}
async function Iy(n) {
	n.C_.forEach((e, t) => {
		Do(n, e);
	});
}
async function Ty(n, e) {
	oh(n), No(n) ? (n.x_.S_(e), Vo(n)) : n.x_.set('Unknown');
}
async function wy(n, e, t) {
	if ((n.x_.set('Online'), e instanceof Wl && e.state === 2 && e.cause))
		try {
			await (async function (i, s) {
				const o = s.cause;
				for (const a of s.targetIds)
					i.C_.has(a) &&
						(await i.remoteSyncer.rejectListen(a, o), i.C_.delete(a), i.O_.removeTarget(a));
			})(n, e);
		} catch (r) {
			m('RemoteStore', 'Failed to remove targets %s: %s ', e.targetIds.join(','), r),
				await $r(n, r);
		}
	else if (
		(e instanceof Tr ? n.O_.$e(e) : e instanceof Hl ? n.O_.Je(e) : n.O_.Ge(e), !t.isEqual(A.min()))
	)
		try {
			const r = await th(n.localStore);
			t.compareTo(r) >= 0 &&
				(await (function (s, o) {
					const a = s.O_.it(o);
					return (
						a.targetChanges.forEach((c, u) => {
							if (c.resumeToken.approximateByteSize() > 0) {
								const l = s.C_.get(u);
								l && s.C_.set(u, l.withResumeToken(c.resumeToken, o));
							}
						}),
						a.targetMismatches.forEach((c, u) => {
							const l = s.C_.get(c);
							if (!l) return;
							s.C_.set(c, l.withResumeToken(se.EMPTY_BYTE_STRING, l.snapshotVersion)), sh(s, c);
							const h = new Qe(l.target, c, u, l.sequenceNumber);
							Do(s, h);
						}),
						s.remoteSyncer.applyRemoteEvent(a)
					);
				})(n, t));
		} catch (r) {
			m('RemoteStore', 'Failed to raise snapshot:', r), await $r(n, r);
		}
}
async function $r(n, e, t) {
	if (!er(e)) throw e;
	n.v_.add(1),
		await rr(n),
		n.x_.set('Offline'),
		t || (t = () => th(n.localStore)),
		n.asyncQueue.enqueueRetryable(async () => {
			m('RemoteStore', 'Retrying IndexedDB access'), await t(), n.v_.delete(1), await Ai(n);
		});
}
function ah(n, e) {
	return e().catch((t) => $r(n, t, e));
}
async function Ri(n) {
	const e = R(n),
		t = tt(e);
	let r = e.D_.length > 0 ? e.D_[e.D_.length - 1].batchId : -1;
	for (; Ay(e); )
		try {
			const i = await cy(e.localStore, r);
			if (i === null) {
				e.D_.length === 0 && t.Xo();
				break;
			}
			(r = i.batchId), Ry(e, i);
		} catch (i) {
			await $r(e, i);
		}
	ch(e) && uh(e);
}
function Ay(n) {
	return bt(n) && n.D_.length < 10;
}
function Ry(n, e) {
	n.D_.push(e);
	const t = tt(n);
	t.Jo() && t.P_ && t.I_(e.mutations);
}
function ch(n) {
	return bt(n) && !tt(n).Ho() && n.D_.length > 0;
}
function uh(n) {
	tt(n).start();
}
async function Sy(n) {
	tt(n).d_();
}
async function Py(n) {
	const e = tt(n);
	for (const t of n.D_) e.I_(t.mutations);
}
async function Cy(n, e, t) {
	const r = n.D_.shift(),
		i = Ao.from(r, e, t);
	await ah(n, () => n.remoteSyncer.applySuccessfulWrite(i)), await Ri(n);
}
async function by(n, e) {
	e &&
		tt(n).P_ &&
		(await (async function (r, i) {
			if (
				(function (o) {
					return v_(o) && o !== p.ABORTED;
				})(i.code)
			) {
				const s = r.D_.shift();
				tt(r).Zo(), await ah(r, () => r.remoteSyncer.rejectFailedWrite(s.batchId, i)), await Ri(r);
			}
		})(n, e)),
		ch(n) && uh(n);
}
async function rc(n, e) {
	const t = R(n);
	t.asyncQueue.verifyOperationInProgress(),
		m('RemoteStore', 'RemoteStore received new credentials');
	const r = bt(t);
	t.v_.add(3),
		await rr(t),
		r && t.x_.set('Unknown'),
		await t.remoteSyncer.handleCredentialChange(e),
		t.v_.delete(3),
		await Ai(t);
}
async function ky(n, e) {
	const t = R(n);
	e ? (t.v_.delete(2), await Ai(t)) : e || (t.v_.add(2), await rr(t), t.x_.set('Unknown'));
}
function sn(n) {
	return (
		n.N_ ||
			((n.N_ = (function (t, r, i) {
				const s = R(t);
				return (
					s.R_(), new my(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i)
				);
			})(n.datastore, n.asyncQueue, {
				Po: Iy.bind(null, n),
				To: Ty.bind(null, n),
				u_: wy.bind(null, n)
			})),
			n.F_.push(async (e) => {
				e ? (n.N_.Zo(), No(n) ? Vo(n) : n.x_.set('Unknown')) : (await n.N_.stop(), oh(n));
			})),
		n.N_
	);
}
function tt(n) {
	return (
		n.L_ ||
			((n.L_ = (function (t, r, i) {
				const s = R(t);
				return (
					s.R_(), new _y(r, s.connection, s.authCredentials, s.appCheckCredentials, s.serializer, i)
				);
			})(n.datastore, n.asyncQueue, {
				Po: Sy.bind(null, n),
				To: by.bind(null, n),
				E_: Py.bind(null, n),
				T_: Cy.bind(null, n)
			})),
			n.F_.push(async (e) => {
				e
					? (n.L_.Zo(), await Ri(n))
					: (await n.L_.stop(),
						n.D_.length > 0 &&
							(m('RemoteStore', `Stopping write stream with ${n.D_.length} pending writes`),
							(n.D_ = [])));
			})),
		n.L_
	);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oo {
	constructor(e, t, r, i, s) {
		(this.asyncQueue = e),
			(this.timerId = t),
			(this.targetTimeMs = r),
			(this.op = i),
			(this.removalCallback = s),
			(this.deferred = new Se()),
			(this.then = this.deferred.promise.then.bind(this.deferred.promise)),
			this.deferred.promise.catch((o) => {});
	}
	get promise() {
		return this.deferred.promise;
	}
	static createAndSchedule(e, t, r, i, s) {
		const o = Date.now() + r,
			a = new Oo(e, t, o, i, s);
		return a.start(r), a;
	}
	start(e) {
		this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
	}
	skipDelay() {
		return this.handleDelayElapsed();
	}
	cancel(e) {
		this.timerHandle !== null &&
			(this.clearTimeout(),
			this.deferred.reject(new y(p.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))));
	}
	handleDelayElapsed() {
		this.asyncQueue.enqueueAndForget(() =>
			this.timerHandle !== null
				? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
				: Promise.resolve()
		);
	}
	clearTimeout() {
		this.timerHandle !== null &&
			(this.removalCallback(this), clearTimeout(this.timerHandle), (this.timerHandle = null));
	}
}
function Lo(n, e) {
	if ((Ve('AsyncQueue', `${e}: ${n}`), er(n))) return new y(p.UNAVAILABLE, `${e}: ${n}`);
	throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bt {
	constructor(e) {
		(this.comparator = e
			? (t, r) => e(t, r) || v.comparator(t.key, r.key)
			: (t, r) => v.comparator(t.key, r.key)),
			(this.keyedMap = gn()),
			(this.sortedSet = new x(this.comparator));
	}
	static emptySet(e) {
		return new Bt(e.comparator);
	}
	has(e) {
		return this.keyedMap.get(e) != null;
	}
	get(e) {
		return this.keyedMap.get(e);
	}
	first() {
		return this.sortedSet.minKey();
	}
	last() {
		return this.sortedSet.maxKey();
	}
	isEmpty() {
		return this.sortedSet.isEmpty();
	}
	indexOf(e) {
		const t = this.keyedMap.get(e);
		return t ? this.sortedSet.indexOf(t) : -1;
	}
	get size() {
		return this.sortedSet.size;
	}
	forEach(e) {
		this.sortedSet.inorderTraversal((t, r) => (e(t), !1));
	}
	add(e) {
		const t = this.delete(e.key);
		return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
	}
	delete(e) {
		const t = this.get(e);
		return t ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t)) : this;
	}
	isEqual(e) {
		if (!(e instanceof Bt) || this.size !== e.size) return !1;
		const t = this.sortedSet.getIterator(),
			r = e.sortedSet.getIterator();
		for (; t.hasNext(); ) {
			const i = t.getNext().key,
				s = r.getNext().key;
			if (!i.isEqual(s)) return !1;
		}
		return !0;
	}
	toString() {
		const e = [];
		return (
			this.forEach((t) => {
				e.push(t.toString());
			}),
			e.length === 0
				? 'DocumentSet ()'
				: `DocumentSet (
  ` +
					e.join(`  
`) +
					`
)`
		);
	}
	copy(e, t) {
		const r = new Bt();
		return (r.comparator = this.comparator), (r.keyedMap = e), (r.sortedSet = t), r;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ic {
	constructor() {
		this.B_ = new x(v.comparator);
	}
	track(e) {
		const t = e.doc.key,
			r = this.B_.get(t);
		r
			? e.type !== 0 && r.type === 3
				? (this.B_ = this.B_.insert(t, e))
				: e.type === 3 && r.type !== 1
					? (this.B_ = this.B_.insert(t, { type: r.type, doc: e.doc }))
					: e.type === 2 && r.type === 2
						? (this.B_ = this.B_.insert(t, { type: 2, doc: e.doc }))
						: e.type === 2 && r.type === 0
							? (this.B_ = this.B_.insert(t, { type: 0, doc: e.doc }))
							: e.type === 1 && r.type === 0
								? (this.B_ = this.B_.remove(t))
								: e.type === 1 && r.type === 2
									? (this.B_ = this.B_.insert(t, { type: 1, doc: r.doc }))
									: e.type === 0 && r.type === 1
										? (this.B_ = this.B_.insert(t, { type: 2, doc: e.doc }))
										: T()
			: (this.B_ = this.B_.insert(t, e));
	}
	k_() {
		const e = [];
		return (
			this.B_.inorderTraversal((t, r) => {
				e.push(r);
			}),
			e
		);
	}
}
class Jt {
	constructor(e, t, r, i, s, o, a, c, u) {
		(this.query = e),
			(this.docs = t),
			(this.oldDocs = r),
			(this.docChanges = i),
			(this.mutatedKeys = s),
			(this.fromCache = o),
			(this.syncStateChanged = a),
			(this.excludesMetadataChanges = c),
			(this.hasCachedResults = u);
	}
	static fromInitialDocuments(e, t, r, i, s) {
		const o = [];
		return (
			t.forEach((a) => {
				o.push({ type: 0, doc: a });
			}),
			new Jt(e, t, Bt.emptySet(t), o, r, i, !0, !1, s)
		);
	}
	get hasPendingWrites() {
		return !this.mutatedKeys.isEmpty();
	}
	isEqual(e) {
		if (
			!(
				this.fromCache === e.fromCache &&
				this.hasCachedResults === e.hasCachedResults &&
				this.syncStateChanged === e.syncStateChanged &&
				this.mutatedKeys.isEqual(e.mutatedKeys) &&
				yi(this.query, e.query) &&
				this.docs.isEqual(e.docs) &&
				this.oldDocs.isEqual(e.oldDocs)
			)
		)
			return !1;
		const t = this.docChanges,
			r = e.docChanges;
		if (t.length !== r.length) return !1;
		for (let i = 0; i < t.length; i++)
			if (t[i].type !== r[i].type || !t[i].doc.isEqual(r[i].doc)) return !1;
		return !0;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dy {
	constructor() {
		(this.q_ = void 0), (this.Q_ = []);
	}
	K_() {
		return this.Q_.some((e) => e.U_());
	}
}
class Vy {
	constructor() {
		(this.queries = new rn((e) => kl(e), yi)),
			(this.onlineState = 'Unknown'),
			(this.W_ = new Set());
	}
}
async function lh(n, e) {
	const t = R(n);
	let r = 3;
	const i = e.query;
	let s = t.queries.get(i);
	s ? !s.K_() && e.U_() && (r = 2) : ((s = new Dy()), (r = e.U_() ? 0 : 1));
	try {
		switch (r) {
			case 0:
				s.q_ = await t.onListen(i, !0);
				break;
			case 1:
				s.q_ = await t.onListen(i, !1);
				break;
			case 2:
				await t.onFirstRemoteStoreListen(i);
		}
	} catch (o) {
		const a = Lo(o, `Initialization of query '${Vt(e.query)}' failed`);
		return void e.onError(a);
	}
	t.queries.set(i, s), s.Q_.push(e), e.G_(t.onlineState), s.q_ && e.z_(s.q_) && Mo(t);
}
async function hh(n, e) {
	const t = R(n),
		r = e.query;
	let i = 3;
	const s = t.queries.get(r);
	if (s) {
		const o = s.Q_.indexOf(e);
		o >= 0 &&
			(s.Q_.splice(o, 1), s.Q_.length === 0 ? (i = e.U_() ? 0 : 1) : !s.K_() && e.U_() && (i = 2));
	}
	switch (i) {
		case 0:
			return t.queries.delete(r), t.onUnlisten(r, !0);
		case 1:
			return t.queries.delete(r), t.onUnlisten(r, !1);
		case 2:
			return t.onLastRemoteStoreUnlisten(r);
		default:
			return;
	}
}
function Ny(n, e) {
	const t = R(n);
	let r = !1;
	for (const i of e) {
		const s = i.query,
			o = t.queries.get(s);
		if (o) {
			for (const a of o.Q_) a.z_(i) && (r = !0);
			o.q_ = i;
		}
	}
	r && Mo(t);
}
function Oy(n, e, t) {
	const r = R(n),
		i = r.queries.get(e);
	if (i) for (const s of i.Q_) s.onError(t);
	r.queries.delete(e);
}
function Mo(n) {
	n.W_.forEach((e) => {
		e.next();
	});
}
var Ds, sc;
((sc = Ds || (Ds = {})).j_ = 'default'), (sc.Cache = 'cache');
class dh {
	constructor(e, t, r) {
		(this.query = e),
			(this.H_ = t),
			(this.J_ = !1),
			(this.Y_ = null),
			(this.onlineState = 'Unknown'),
			(this.options = r || {});
	}
	z_(e) {
		if (!this.options.includeMetadataChanges) {
			const r = [];
			for (const i of e.docChanges) i.type !== 3 && r.push(i);
			e = new Jt(
				e.query,
				e.docs,
				e.oldDocs,
				r,
				e.mutatedKeys,
				e.fromCache,
				e.syncStateChanged,
				!0,
				e.hasCachedResults
			);
		}
		let t = !1;
		return (
			this.J_
				? this.Z_(e) && (this.H_.next(e), (t = !0))
				: this.X_(e, this.onlineState) && (this.ea(e), (t = !0)),
			(this.Y_ = e),
			t
		);
	}
	onError(e) {
		this.H_.error(e);
	}
	G_(e) {
		this.onlineState = e;
		let t = !1;
		return this.Y_ && !this.J_ && this.X_(this.Y_, e) && (this.ea(this.Y_), (t = !0)), t;
	}
	X_(e, t) {
		if (!e.fromCache || !this.U_()) return !0;
		const r = t !== 'Offline';
		return (!this.options.ta || !r) && (!e.docs.isEmpty() || e.hasCachedResults || t === 'Offline');
	}
	Z_(e) {
		if (e.docChanges.length > 0) return !0;
		const t = this.Y_ && this.Y_.hasPendingWrites !== e.hasPendingWrites;
		return !(!e.syncStateChanged && !t) && this.options.includeMetadataChanges === !0;
	}
	ea(e) {
		(e = Jt.fromInitialDocuments(e.query, e.docs, e.mutatedKeys, e.fromCache, e.hasCachedResults)),
			(this.J_ = !0),
			this.H_.next(e);
	}
	U_() {
		return this.options.source !== Ds.Cache;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fh {
	constructor(e) {
		this.key = e;
	}
}
class ph {
	constructor(e) {
		this.key = e;
	}
}
class Ly {
	constructor(e, t) {
		(this.query = e),
			(this.ua = t),
			(this.ca = null),
			(this.hasCachedResults = !1),
			(this.current = !1),
			(this.la = C()),
			(this.mutatedKeys = C()),
			(this.ha = Dl(e)),
			(this.Pa = new Bt(this.ha));
	}
	get Ia() {
		return this.ua;
	}
	Ta(e, t) {
		const r = t ? t.Ea : new ic(),
			i = t ? t.Pa : this.Pa;
		let s = t ? t.mutatedKeys : this.mutatedKeys,
			o = i,
			a = !1;
		const c = this.query.limitType === 'F' && i.size === this.query.limit ? i.last() : null,
			u = this.query.limitType === 'L' && i.size === this.query.limit ? i.first() : null;
		if (
			(e.inorderTraversal((l, h) => {
				const d = i.get(l),
					g = vi(this.query, h) ? h : null,
					S = !!d && this.mutatedKeys.has(d.key),
					P =
						!!g &&
						(g.hasLocalMutations || (this.mutatedKeys.has(g.key) && g.hasCommittedMutations));
				let E = !1;
				d && g
					? d.data.isEqual(g.data)
						? S !== P && (r.track({ type: 3, doc: g }), (E = !0))
						: this.da(d, g) ||
							(r.track({ type: 2, doc: g }),
							(E = !0),
							((c && this.ha(g, c) > 0) || (u && this.ha(g, u) < 0)) && (a = !0))
					: !d && g
						? (r.track({ type: 0, doc: g }), (E = !0))
						: d && !g && (r.track({ type: 1, doc: d }), (E = !0), (c || u) && (a = !0)),
					E &&
						(g
							? ((o = o.add(g)), (s = P ? s.add(l) : s.delete(l)))
							: ((o = o.delete(l)), (s = s.delete(l))));
			}),
			this.query.limit !== null)
		)
			for (; o.size > this.query.limit; ) {
				const l = this.query.limitType === 'F' ? o.last() : o.first();
				(o = o.delete(l.key)), (s = s.delete(l.key)), r.track({ type: 1, doc: l });
			}
		return { Pa: o, Ea: r, Xi: a, mutatedKeys: s };
	}
	da(e, t) {
		return e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations;
	}
	applyChanges(e, t, r, i) {
		const s = this.Pa;
		(this.Pa = e.Pa), (this.mutatedKeys = e.mutatedKeys);
		const o = e.Ea.k_();
		o.sort(
			(l, h) =>
				(function (g, S) {
					const P = (E) => {
						switch (E) {
							case 0:
								return 1;
							case 2:
							case 3:
								return 2;
							case 1:
								return 0;
							default:
								return T();
						}
					};
					return P(g) - P(S);
				})(l.type, h.type) || this.ha(l.doc, h.doc)
		),
			this.Aa(r),
			(i = i != null && i);
		const a = t && !i ? this.Ra() : [],
			c = this.la.size === 0 && this.current && !i ? 1 : 0,
			u = c !== this.ca;
		return (
			(this.ca = c),
			o.length !== 0 || u
				? {
						snapshot: new Jt(
							this.query,
							e.Pa,
							s,
							o,
							e.mutatedKeys,
							c === 0,
							u,
							!1,
							!!r && r.resumeToken.approximateByteSize() > 0
						),
						Va: a
					}
				: { Va: a }
		);
	}
	G_(e) {
		return this.current && e === 'Offline'
			? ((this.current = !1),
				this.applyChanges({ Pa: this.Pa, Ea: new ic(), mutatedKeys: this.mutatedKeys, Xi: !1 }, !1))
			: { Va: [] };
	}
	ma(e) {
		return !this.ua.has(e) && !!this.Pa.has(e) && !this.Pa.get(e).hasLocalMutations;
	}
	Aa(e) {
		e &&
			(e.addedDocuments.forEach((t) => (this.ua = this.ua.add(t))),
			e.modifiedDocuments.forEach((t) => {}),
			e.removedDocuments.forEach((t) => (this.ua = this.ua.delete(t))),
			(this.current = e.current));
	}
	Ra() {
		if (!this.current) return [];
		const e = this.la;
		(this.la = C()),
			this.Pa.forEach((r) => {
				this.ma(r.key) && (this.la = this.la.add(r.key));
			});
		const t = [];
		return (
			e.forEach((r) => {
				this.la.has(r) || t.push(new ph(r));
			}),
			this.la.forEach((r) => {
				e.has(r) || t.push(new fh(r));
			}),
			t
		);
	}
	fa(e) {
		(this.ua = e.hs), (this.la = C());
		const t = this.Ta(e.documents);
		return this.applyChanges(t, !0);
	}
	ga() {
		return Jt.fromInitialDocuments(
			this.query,
			this.Pa,
			this.mutatedKeys,
			this.ca === 0,
			this.hasCachedResults
		);
	}
}
class My {
	constructor(e, t, r) {
		(this.query = e), (this.targetId = t), (this.view = r);
	}
}
class xy {
	constructor(e) {
		(this.key = e), (this.pa = !1);
	}
}
class Fy {
	constructor(e, t, r, i, s, o) {
		(this.localStore = e),
			(this.remoteStore = t),
			(this.eventManager = r),
			(this.sharedClientState = i),
			(this.currentUser = s),
			(this.maxConcurrentLimboResolutions = o),
			(this.ya = {}),
			(this.wa = new rn((a) => kl(a), yi)),
			(this.Sa = new Map()),
			(this.ba = new Set()),
			(this.Da = new x(v.comparator)),
			(this.Ca = new Map()),
			(this.va = new Po()),
			(this.Fa = {}),
			(this.Ma = new Map()),
			(this.xa = Qt.Ln()),
			(this.onlineState = 'Unknown'),
			(this.Oa = void 0);
	}
	get isPrimaryClient() {
		return this.Oa === !0;
	}
}
async function Uy(n, e, t = !0) {
	const r = Eh(n);
	let i;
	const s = r.wa.get(e);
	return (
		s
			? (r.sharedClientState.addLocalQueryTarget(s.targetId), (i = s.view.ga()))
			: (i = await gh(r, e, t, !0)),
		i
	);
}
async function By(n, e) {
	const t = Eh(n);
	await gh(t, e, !0, !1);
}
async function gh(n, e, t, r) {
	const i = await uy(n.localStore, Pe(e)),
		s = i.targetId,
		o = t ? n.sharedClientState.addLocalQueryTarget(s) : 'not-current';
	let a;
	return (
		r && (a = await jy(n, e, s, o === 'current', i.resumeToken)),
		n.isPrimaryClient && t && ih(n.remoteStore, i),
		a
	);
}
async function jy(n, e, t, r, i) {
	n.Na = (h, d, g) =>
		(async function (P, E, L, U) {
			let G = E.view.Ta(L);
			G.Xi &&
				(G = await ec(P.localStore, E.query, !1).then(({ documents: at }) => E.view.Ta(at, G)));
			const he = U && U.targetChanges.get(E.targetId),
				ot = U && U.targetMismatches.get(E.targetId) != null,
				Ie = E.view.applyChanges(G, P.isPrimaryClient, he, ot);
			return ac(P, E.targetId, Ie.Va), Ie.snapshot;
		})(n, h, d, g);
	const s = await ec(n.localStore, e, !0),
		o = new Ly(e, s.hs),
		a = o.Ta(s.documents),
		c = nr.createSynthesizedTargetChangeForCurrentChange(t, r && n.onlineState !== 'Offline', i),
		u = o.applyChanges(a, n.isPrimaryClient, c);
	ac(n, t, u.Va);
	const l = new My(e, t, o);
	return n.wa.set(e, l), n.Sa.has(t) ? n.Sa.get(t).push(e) : n.Sa.set(t, [e]), u.snapshot;
}
async function qy(n, e, t) {
	const r = R(n),
		i = r.wa.get(e),
		s = r.Sa.get(i.targetId);
	if (s.length > 1)
		return (
			r.Sa.set(
				i.targetId,
				s.filter((o) => !yi(o, e))
			),
			void r.wa.delete(e)
		);
	r.isPrimaryClient
		? (r.sharedClientState.removeLocalQueryTarget(i.targetId),
			r.sharedClientState.isActiveQueryTarget(i.targetId) ||
				(await ks(r.localStore, i.targetId, !1)
					.then(() => {
						r.sharedClientState.clearQueryState(i.targetId),
							t && ko(r.remoteStore, i.targetId),
							Vs(r, i.targetId);
					})
					.catch(Zn)))
		: (Vs(r, i.targetId), await ks(r.localStore, i.targetId, !0));
}
async function $y(n, e) {
	const t = R(n),
		r = t.wa.get(e),
		i = t.Sa.get(r.targetId);
	t.isPrimaryClient &&
		i.length === 1 &&
		(t.sharedClientState.removeLocalQueryTarget(r.targetId), ko(t.remoteStore, r.targetId));
}
async function zy(n, e, t) {
	const r = Yy(n);
	try {
		const i = await (function (o, a) {
			const c = R(o),
				u = z.now(),
				l = a.reduce((g, S) => g.add(S.key), C());
			let h, d;
			return c.persistence
				.runTransaction('Locally write mutations', 'readwrite', (g) => {
					let S = qe(),
						P = C();
					return c.os
						.getEntries(g, l)
						.next((E) => {
							(S = E),
								S.forEach((L, U) => {
									U.isValidDocument() || (P = P.add(L));
								});
						})
						.next(() => c.localDocuments.getOverlayedDocuments(g, S))
						.next((E) => {
							h = E;
							const L = [];
							for (const U of a) {
								const G = p_(U, h.get(U.key).overlayedDocument);
								G != null && L.push(new Ct(U.key, G, wl(G.value.mapValue), Ue.exists(!0)));
							}
							return c.mutationQueue.addMutationBatch(g, u, L, a);
						})
						.next((E) => {
							d = E;
							const L = E.applyToLocalDocumentSet(h, P);
							return c.documentOverlayCache.saveOverlays(g, E.batchId, L);
						});
				})
				.then(() => ({ batchId: d.batchId, changes: Nl(h) }));
		})(r.localStore, e);
		r.sharedClientState.addPendingMutation(i.batchId),
			(function (o, a, c) {
				let u = o.Fa[o.currentUser.toKey()];
				u || (u = new x(D)), (u = u.insert(a, c)), (o.Fa[o.currentUser.toKey()] = u);
			})(r, i.batchId, t),
			await ir(r, i.changes),
			await Ri(r.remoteStore);
	} catch (i) {
		const s = Lo(i, 'Failed to persist write');
		t.reject(s);
	}
}
async function mh(n, e) {
	const t = R(n);
	try {
		const r = await oy(t.localStore, e);
		e.targetChanges.forEach((i, s) => {
			const o = t.Ca.get(s);
			o &&
				(N(i.addedDocuments.size + i.modifiedDocuments.size + i.removedDocuments.size <= 1),
				i.addedDocuments.size > 0
					? (o.pa = !0)
					: i.modifiedDocuments.size > 0
						? N(o.pa)
						: i.removedDocuments.size > 0 && (N(o.pa), (o.pa = !1)));
		}),
			await ir(t, r, e);
	} catch (r) {
		await Zn(r);
	}
}
function oc(n, e, t) {
	const r = R(n);
	if ((r.isPrimaryClient && t === 0) || (!r.isPrimaryClient && t === 1)) {
		const i = [];
		r.wa.forEach((s, o) => {
			const a = o.view.G_(e);
			a.snapshot && i.push(a.snapshot);
		}),
			(function (o, a) {
				const c = R(o);
				c.onlineState = a;
				let u = !1;
				c.queries.forEach((l, h) => {
					for (const d of h.Q_) d.G_(a) && (u = !0);
				}),
					u && Mo(c);
			})(r.eventManager, e),
			i.length && r.ya.u_(i),
			(r.onlineState = e),
			r.isPrimaryClient && r.sharedClientState.setOnlineState(e);
	}
}
async function Hy(n, e, t) {
	const r = R(n);
	r.sharedClientState.updateQueryState(e, 'rejected', t);
	const i = r.Ca.get(e),
		s = i && i.key;
	if (s) {
		let o = new x(v.comparator);
		o = o.insert(s, ne.newNoDocument(s, A.min()));
		const a = C().add(s),
			c = new Ti(A.min(), new Map(), new x(D), o, a);
		await mh(r, c), (r.Da = r.Da.remove(s)), r.Ca.delete(e), xo(r);
	} else
		await ks(r.localStore, e, !1)
			.then(() => Vs(r, e, t))
			.catch(Zn);
}
async function Wy(n, e) {
	const t = R(n),
		r = e.batch.batchId;
	try {
		const i = await sy(t.localStore, e);
		yh(t, r, null),
			_h(t, r),
			t.sharedClientState.updateMutationState(r, 'acknowledged'),
			await ir(t, i);
	} catch (i) {
		await Zn(i);
	}
}
async function Ky(n, e, t) {
	const r = R(n);
	try {
		const i = await (function (o, a) {
			const c = R(o);
			return c.persistence.runTransaction('Reject batch', 'readwrite-primary', (u) => {
				let l;
				return c.mutationQueue
					.lookupMutationBatch(u, a)
					.next((h) => (N(h !== null), (l = h.keys()), c.mutationQueue.removeMutationBatch(u, h)))
					.next(() => c.mutationQueue.performConsistencyCheck(u))
					.next(() => c.documentOverlayCache.removeOverlaysForBatchId(u, l, a))
					.next(() => c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u, l))
					.next(() => c.localDocuments.getDocuments(u, l));
			});
		})(r.localStore, e);
		yh(r, e, t),
			_h(r, e),
			r.sharedClientState.updateMutationState(e, 'rejected', t),
			await ir(r, i);
	} catch (i) {
		await Zn(i);
	}
}
function _h(n, e) {
	(n.Ma.get(e) || []).forEach((t) => {
		t.resolve();
	}),
		n.Ma.delete(e);
}
function yh(n, e, t) {
	const r = R(n);
	let i = r.Fa[r.currentUser.toKey()];
	if (i) {
		const s = i.get(e);
		s && (t ? s.reject(t) : s.resolve(), (i = i.remove(e))), (r.Fa[r.currentUser.toKey()] = i);
	}
}
function Vs(n, e, t = null) {
	n.sharedClientState.removeLocalQueryTarget(e);
	for (const r of n.Sa.get(e)) n.wa.delete(r), t && n.ya.La(r, t);
	n.Sa.delete(e),
		n.isPrimaryClient &&
			n.va.Vr(e).forEach((r) => {
				n.va.containsKey(r) || vh(n, r);
			});
}
function vh(n, e) {
	n.ba.delete(e.path.canonicalString());
	const t = n.Da.get(e);
	t !== null && (ko(n.remoteStore, t), (n.Da = n.Da.remove(e)), n.Ca.delete(t), xo(n));
}
function ac(n, e, t) {
	for (const r of t)
		r instanceof fh
			? (n.va.addReference(r.key, e), Gy(n, r))
			: r instanceof ph
				? (m('SyncEngine', 'Document no longer in limbo: ' + r.key),
					n.va.removeReference(r.key, e),
					n.va.containsKey(r.key) || vh(n, r.key))
				: T();
}
function Gy(n, e) {
	const t = e.key,
		r = t.path.canonicalString();
	n.Da.get(t) ||
		n.ba.has(r) ||
		(m('SyncEngine', 'New document in limbo: ' + t), n.ba.add(r), xo(n));
}
function xo(n) {
	for (; n.ba.size > 0 && n.Da.size < n.maxConcurrentLimboResolutions; ) {
		const e = n.ba.values().next().value;
		n.ba.delete(e);
		const t = new v(M.fromString(e)),
			r = n.xa.next();
		n.Ca.set(r, new xy(t)),
			(n.Da = n.Da.insert(t, r)),
			ih(n.remoteStore, new Qe(Pe(wo(t.path)), r, 'TargetPurposeLimboResolution', _o._e));
	}
}
async function ir(n, e, t) {
	const r = R(n),
		i = [],
		s = [],
		o = [];
	r.wa.isEmpty() ||
		(r.wa.forEach((a, c) => {
			o.push(
				r.Na(c, e, t).then((u) => {
					if (
						((u || t) &&
							r.isPrimaryClient &&
							r.sharedClientState.updateQueryState(
								c.targetId,
								u != null && u.fromCache ? 'not-current' : 'current'
							),
						u)
					) {
						i.push(u);
						const l = bo.Ki(c.targetId, u);
						s.push(l);
					}
				})
			);
		}),
		await Promise.all(o),
		r.ya.u_(i),
		await (async function (c, u) {
			const l = R(c);
			try {
				await l.persistence.runTransaction('notifyLocalViewChanges', 'readwrite', (h) =>
					f.forEach(u, (d) =>
						f
							.forEach(d.qi, (g) => l.persistence.referenceDelegate.addReference(h, d.targetId, g))
							.next(() =>
								f.forEach(d.Qi, (g) =>
									l.persistence.referenceDelegate.removeReference(h, d.targetId, g)
								)
							)
					)
				);
			} catch (h) {
				if (!er(h)) throw h;
				m('LocalStore', 'Failed to update sequence numbers: ' + h);
			}
			for (const h of u) {
				const d = h.targetId;
				if (!h.fromCache) {
					const g = l.ns.get(d),
						S = g.snapshotVersion,
						P = g.withLastLimboFreeSnapshotVersion(S);
					l.ns = l.ns.insert(d, P);
				}
			}
		})(r.localStore, s));
}
async function Qy(n, e) {
	const t = R(n);
	if (!t.currentUser.isEqual(e)) {
		m('SyncEngine', 'User change. New user:', e.toKey());
		const r = await eh(t.localStore, e);
		(t.currentUser = e),
			(function (s, o) {
				s.Ma.forEach((a) => {
					a.forEach((c) => {
						c.reject(new y(p.CANCELLED, o));
					});
				}),
					s.Ma.clear();
			})(t, "'waitForPendingWrites' promise is rejected due to a user change."),
			t.sharedClientState.handleUserChange(e, r.removedBatchIds, r.addedBatchIds),
			await ir(t, r.us);
	}
}
function Jy(n, e) {
	const t = R(n),
		r = t.Ca.get(e);
	if (r && r.pa) return C().add(r.key);
	{
		let i = C();
		const s = t.Sa.get(e);
		if (!s) return i;
		for (const o of s) {
			const a = t.wa.get(o);
			i = i.unionWith(a.view.Ia);
		}
		return i;
	}
}
function Eh(n) {
	const e = R(n);
	return (
		(e.remoteStore.remoteSyncer.applyRemoteEvent = mh.bind(null, e)),
		(e.remoteStore.remoteSyncer.getRemoteKeysForTarget = Jy.bind(null, e)),
		(e.remoteStore.remoteSyncer.rejectListen = Hy.bind(null, e)),
		(e.ya.u_ = Ny.bind(null, e.eventManager)),
		(e.ya.La = Oy.bind(null, e.eventManager)),
		e
	);
}
function Yy(n) {
	const e = R(n);
	return (
		(e.remoteStore.remoteSyncer.applySuccessfulWrite = Wy.bind(null, e)),
		(e.remoteStore.remoteSyncer.rejectFailedWrite = Ky.bind(null, e)),
		e
	);
}
class cc {
	constructor() {
		this.synchronizeTabs = !1;
	}
	async initialize(e) {
		(this.serializer = wi(e.databaseInfo.databaseId)),
			(this.sharedClientState = this.createSharedClientState(e)),
			(this.persistence = this.createPersistence(e)),
			await this.persistence.start(),
			(this.localStore = this.createLocalStore(e)),
			(this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore)),
			(this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore));
	}
	createGarbageCollectionScheduler(e, t) {
		return null;
	}
	createIndexBackfillerScheduler(e, t) {
		return null;
	}
	createLocalStore(e) {
		return iy(this.persistence, new ny(), e.initialUser, this.serializer);
	}
	createPersistence(e) {
		return new Z_(Co.Hr, this.serializer);
	}
	createSharedClientState(e) {
		return new hy();
	}
	async terminate() {
		var e, t;
		(e = this.gcScheduler) === null || e === void 0 || e.stop(),
			(t = this.indexBackfillerScheduler) === null || t === void 0 || t.stop(),
			this.sharedClientState.shutdown(),
			await this.persistence.shutdown();
	}
}
class Xy {
	async initialize(e, t) {
		this.localStore ||
			((this.localStore = e.localStore),
			(this.sharedClientState = e.sharedClientState),
			(this.datastore = this.createDatastore(t)),
			(this.remoteStore = this.createRemoteStore(t)),
			(this.eventManager = this.createEventManager(t)),
			(this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
			(this.sharedClientState.onlineStateHandler = (r) => oc(this.syncEngine, r, 1)),
			(this.remoteStore.remoteSyncer.handleCredentialChange = Qy.bind(null, this.syncEngine)),
			await ky(this.remoteStore, this.syncEngine.isPrimaryClient));
	}
	createEventManager(e) {
		return (function () {
			return new Vy();
		})();
	}
	createDatastore(e) {
		const t = wi(e.databaseInfo.databaseId),
			r = (function (s) {
				return new gy(s);
			})(e.databaseInfo);
		return (function (s, o, a, c) {
			return new yy(s, o, a, c);
		})(e.authCredentials, e.appCheckCredentials, r, t);
	}
	createRemoteStore(e) {
		return (function (r, i, s, o, a) {
			return new Ey(r, i, s, o, a);
		})(
			this.localStore,
			this.datastore,
			e.asyncQueue,
			(t) => oc(this.syncEngine, t, 0),
			(function () {
				return nc.D() ? new nc() : new dy();
			})()
		);
	}
	createSyncEngine(e, t) {
		return (function (i, s, o, a, c, u, l) {
			const h = new Fy(i, s, o, a, c, u);
			return l && (h.Oa = !0), h;
		})(
			this.localStore,
			this.remoteStore,
			this.eventManager,
			this.sharedClientState,
			e.initialUser,
			e.maxConcurrentLimboResolutions,
			t
		);
	}
	async terminate() {
		var e;
		await (async function (r) {
			const i = R(r);
			m('RemoteStore', 'RemoteStore shutting down.'),
				i.v_.add(5),
				await rr(i),
				i.M_.shutdown(),
				i.x_.set('Unknown');
		})(this.remoteStore),
			(e = this.datastore) === null || e === void 0 || e.terminate();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ih {
	constructor(e) {
		(this.observer = e), (this.muted = !1);
	}
	next(e) {
		this.observer.next && this.qa(this.observer.next, e);
	}
	error(e) {
		this.observer.error
			? this.qa(this.observer.error, e)
			: Ve('Uncaught Error in snapshot listener:', e.toString());
	}
	Qa() {
		this.muted = !0;
	}
	qa(e, t) {
		this.muted ||
			setTimeout(() => {
				this.muted || e(t);
			}, 0);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zy {
	constructor(e, t, r, i) {
		(this.authCredentials = e),
			(this.appCheckCredentials = t),
			(this.asyncQueue = r),
			(this.databaseInfo = i),
			(this.user = te.UNAUTHENTICATED),
			(this.clientId = El.newId()),
			(this.authCredentialListener = () => Promise.resolve()),
			(this.appCheckCredentialListener = () => Promise.resolve()),
			this.authCredentials.start(r, async (s) => {
				m('FirestoreClient', 'Received user=', s.uid),
					await this.authCredentialListener(s),
					(this.user = s);
			}),
			this.appCheckCredentials.start(
				r,
				(s) => (
					m('FirestoreClient', 'Received new app check token=', s),
					this.appCheckCredentialListener(s, this.user)
				)
			);
	}
	get configuration() {
		return {
			asyncQueue: this.asyncQueue,
			databaseInfo: this.databaseInfo,
			clientId: this.clientId,
			authCredentials: this.authCredentials,
			appCheckCredentials: this.appCheckCredentials,
			initialUser: this.user,
			maxConcurrentLimboResolutions: 100
		};
	}
	setCredentialChangeListener(e) {
		this.authCredentialListener = e;
	}
	setAppCheckTokenChangeListener(e) {
		this.appCheckCredentialListener = e;
	}
	verifyNotTerminated() {
		if (this.asyncQueue.isShuttingDown)
			throw new y(p.FAILED_PRECONDITION, 'The client has already been terminated.');
	}
	terminate() {
		this.asyncQueue.enterRestrictedMode();
		const e = new Se();
		return (
			this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
				try {
					this._onlineComponents && (await this._onlineComponents.terminate()),
						this._offlineComponents && (await this._offlineComponents.terminate()),
						this.authCredentials.shutdown(),
						this.appCheckCredentials.shutdown(),
						e.resolve();
				} catch (t) {
					const r = Lo(t, 'Failed to shutdown persistence');
					e.reject(r);
				}
			}),
			e.promise
		);
	}
}
async function Xi(n, e) {
	n.asyncQueue.verifyOperationInProgress(),
		m('FirestoreClient', 'Initializing OfflineComponentProvider');
	const t = n.configuration;
	await e.initialize(t);
	let r = t.initialUser;
	n.setCredentialChangeListener(async (i) => {
		r.isEqual(i) || (await eh(e.localStore, i), (r = i));
	}),
		e.persistence.setDatabaseDeletedListener(() => n.terminate()),
		(n._offlineComponents = e);
}
async function uc(n, e) {
	n.asyncQueue.verifyOperationInProgress();
	const t = await tv(n);
	m('FirestoreClient', 'Initializing OnlineComponentProvider'),
		await e.initialize(t, n.configuration),
		n.setCredentialChangeListener((r) => rc(e.remoteStore, r)),
		n.setAppCheckTokenChangeListener((r, i) => rc(e.remoteStore, i)),
		(n._onlineComponents = e);
}
function ev(n) {
	return n.name === 'FirebaseError'
		? n.code === p.FAILED_PRECONDITION || n.code === p.UNIMPLEMENTED
		: !(typeof DOMException < 'u' && n instanceof DOMException) ||
				n.code === 22 ||
				n.code === 20 ||
				n.code === 11;
}
async function tv(n) {
	if (!n._offlineComponents)
		if (n._uninitializedComponentsProvider) {
			m('FirestoreClient', 'Using user provided OfflineComponentProvider');
			try {
				await Xi(n, n._uninitializedComponentsProvider._offline);
			} catch (e) {
				const t = e;
				if (!ev(t)) throw t;
				Ht('Error using user provided cache. Falling back to memory cache: ' + t),
					await Xi(n, new cc());
			}
		} else m('FirestoreClient', 'Using default OfflineComponentProvider'), await Xi(n, new cc());
	return n._offlineComponents;
}
async function Th(n) {
	return (
		n._onlineComponents ||
			(n._uninitializedComponentsProvider
				? (m('FirestoreClient', 'Using user provided OnlineComponentProvider'),
					await uc(n, n._uninitializedComponentsProvider._online))
				: (m('FirestoreClient', 'Using default OnlineComponentProvider'), await uc(n, new Xy()))),
		n._onlineComponents
	);
}
function nv(n) {
	return Th(n).then((e) => e.syncEngine);
}
async function wh(n) {
	const e = await Th(n),
		t = e.eventManager;
	return (
		(t.onListen = Uy.bind(null, e.syncEngine)),
		(t.onUnlisten = qy.bind(null, e.syncEngine)),
		(t.onFirstRemoteStoreListen = By.bind(null, e.syncEngine)),
		(t.onLastRemoteStoreUnlisten = $y.bind(null, e.syncEngine)),
		t
	);
}
function rv(n, e, t = {}) {
	const r = new Se();
	return (
		n.asyncQueue.enqueueAndForget(async () =>
			(function (s, o, a, c, u) {
				const l = new Ih({
						next: (d) => {
							o.enqueueAndForget(() => hh(s, h));
							const g = d.docs.has(a);
							!g && d.fromCache
								? u.reject(
										new y(p.UNAVAILABLE, 'Failed to get document because the client is offline.')
									)
								: g && d.fromCache && c && c.source === 'server'
									? u.reject(
											new y(
												p.UNAVAILABLE,
												'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
											)
										)
									: u.resolve(d);
						},
						error: (d) => u.reject(d)
					}),
					h = new dh(wo(a.path), l, { includeMetadataChanges: !0, ta: !0 });
				return lh(s, h);
			})(await wh(n), n.asyncQueue, e, t, r)
		),
		r.promise
	);
}
function iv(n, e, t = {}) {
	const r = new Se();
	return (
		n.asyncQueue.enqueueAndForget(async () =>
			(function (s, o, a, c, u) {
				const l = new Ih({
						next: (d) => {
							o.enqueueAndForget(() => hh(s, h)),
								d.fromCache && c.source === 'server'
									? u.reject(
											new y(
												p.UNAVAILABLE,
												'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
											)
										)
									: u.resolve(d);
						},
						error: (d) => u.reject(d)
					}),
					h = new dh(a, l, { includeMetadataChanges: !0, ta: !0 });
				return lh(s, h);
			})(await wh(n), n.asyncQueue, e, t, r)
		),
		r.promise
	);
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ah(n) {
	const e = {};
	return n.timeoutSeconds !== void 0 && (e.timeoutSeconds = n.timeoutSeconds), e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lc = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rh(n, e, t) {
	if (!t) throw new y(p.INVALID_ARGUMENT, `Function ${n}() cannot be called with an empty ${e}.`);
}
function sv(n, e, t, r) {
	if (e === !0 && r === !0)
		throw new y(p.INVALID_ARGUMENT, `${n} and ${t} cannot be used together.`);
}
function hc(n) {
	if (!v.isDocumentKey(n))
		throw new y(
			p.INVALID_ARGUMENT,
			`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`
		);
}
function dc(n) {
	if (v.isDocumentKey(n))
		throw new y(
			p.INVALID_ARGUMENT,
			`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`
		);
}
function Fo(n) {
	if (n === void 0) return 'undefined';
	if (n === null) return 'null';
	if (typeof n == 'string')
		return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
	if (typeof n == 'number' || typeof n == 'boolean') return '' + n;
	if (typeof n == 'object') {
		if (n instanceof Array) return 'an array';
		{
			const e = (function (r) {
				return r.constructor ? r.constructor.name : null;
			})(n);
			return e ? `a custom ${e} object` : 'an object';
		}
	}
	return typeof n == 'function' ? 'a function' : T();
}
function wt(n, e) {
	if (('_delegate' in n && (n = n._delegate), !(n instanceof e))) {
		if (e.name === n.constructor.name)
			throw new y(
				p.INVALID_ARGUMENT,
				'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
			);
		{
			const t = Fo(n);
			throw new y(p.INVALID_ARGUMENT, `Expected type '${e.name}', but it was: ${t}`);
		}
	}
	return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fc {
	constructor(e) {
		var t, r;
		if (e.host === void 0) {
			if (e.ssl !== void 0)
				throw new y(p.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
			(this.host = 'firestore.googleapis.com'), (this.ssl = !0);
		} else (this.host = e.host), (this.ssl = (t = e.ssl) === null || t === void 0 || t);
		if (
			((this.credentials = e.credentials),
			(this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
			(this.localCache = e.localCache),
			e.cacheSizeBytes === void 0)
		)
			this.cacheSizeBytes = 41943040;
		else {
			if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
				throw new y(p.INVALID_ARGUMENT, 'cacheSizeBytes must be at least 1048576');
			this.cacheSizeBytes = e.cacheSizeBytes;
		}
		sv(
			'experimentalForceLongPolling',
			e.experimentalForceLongPolling,
			'experimentalAutoDetectLongPolling',
			e.experimentalAutoDetectLongPolling
		),
			(this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
			this.experimentalForceLongPolling
				? (this.experimentalAutoDetectLongPolling = !1)
				: e.experimentalAutoDetectLongPolling === void 0
					? (this.experimentalAutoDetectLongPolling = !0)
					: (this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling),
			(this.experimentalLongPollingOptions = Ah(
				(r = e.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
			)),
			(function (s) {
				if (s.timeoutSeconds !== void 0) {
					if (isNaN(s.timeoutSeconds))
						throw new y(
							p.INVALID_ARGUMENT,
							`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`
						);
					if (s.timeoutSeconds < 5)
						throw new y(
							p.INVALID_ARGUMENT,
							`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
						);
					if (s.timeoutSeconds > 30)
						throw new y(
							p.INVALID_ARGUMENT,
							`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
						);
				}
			})(this.experimentalLongPollingOptions),
			(this.useFetchStreams = !!e.useFetchStreams);
	}
	isEqual(e) {
		return (
			this.host === e.host &&
			this.ssl === e.ssl &&
			this.credentials === e.credentials &&
			this.cacheSizeBytes === e.cacheSizeBytes &&
			this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
			this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling &&
			(function (r, i) {
				return r.timeoutSeconds === i.timeoutSeconds;
			})(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) &&
			this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
			this.useFetchStreams === e.useFetchStreams
		);
	}
}
class Si {
	constructor(e, t, r, i) {
		(this._authCredentials = e),
			(this._appCheckCredentials = t),
			(this._databaseId = r),
			(this._app = i),
			(this.type = 'firestore-lite'),
			(this._persistenceKey = '(lite)'),
			(this._settings = new fc({})),
			(this._settingsFrozen = !1);
	}
	get app() {
		if (!this._app)
			throw new y(
				p.FAILED_PRECONDITION,
				"Firestore was not initialized using the Firebase SDK. 'app' is not available"
			);
		return this._app;
	}
	get _initialized() {
		return this._settingsFrozen;
	}
	get _terminated() {
		return this._terminateTask !== void 0;
	}
	_setSettings(e) {
		if (this._settingsFrozen)
			throw new y(
				p.FAILED_PRECONDITION,
				'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
			);
		(this._settings = new fc(e)),
			e.credentials !== void 0 &&
				(this._authCredentials = (function (r) {
					if (!r) return new Tm();
					switch (r.type) {
						case 'firstParty':
							return new Sm(r.sessionIndex || '0', r.iamToken || null, r.authTokenFactory || null);
						case 'provider':
							return r.client;
						default:
							throw new y(
								p.INVALID_ARGUMENT,
								'makeAuthCredentialsProvider failed due to invalid credential type'
							);
					}
				})(e.credentials));
	}
	_getSettings() {
		return this._settings;
	}
	_freezeSettings() {
		return (this._settingsFrozen = !0), this._settings;
	}
	_delete() {
		return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
	}
	toJSON() {
		return { app: this._app, databaseId: this._databaseId, settings: this._settings };
	}
	_terminate() {
		return (
			(function (t) {
				const r = lc.get(t);
				r && (m('ComponentProvider', 'Removing Datastore'), lc.delete(t), r.terminate());
			})(this),
			Promise.resolve()
		);
	}
}
function ov(n, e, t, r = {}) {
	var i;
	const s = (n = wt(n, Si))._getSettings(),
		o = `${e}:${t}`;
	if (
		(s.host !== 'firestore.googleapis.com' &&
			s.host !== o &&
			Ht(
				'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
			),
		n._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
		r.mockUserToken)
	) {
		let a, c;
		if (typeof r.mockUserToken == 'string') (a = r.mockUserToken), (c = te.MOCK_USER);
		else {
			a = Pd(r.mockUserToken, (i = n._app) === null || i === void 0 ? void 0 : i.options.projectId);
			const u = r.mockUserToken.sub || r.mockUserToken.user_id;
			if (!u)
				throw new y(p.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
			c = new te(u);
		}
		n._authCredentials = new wm(new vl(a, c));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pi {
	constructor(e, t, r) {
		(this.converter = t), (this._query = r), (this.type = 'query'), (this.firestore = e);
	}
	withConverter(e) {
		return new Pi(this.firestore, e, this._query);
	}
}
class ue {
	constructor(e, t, r) {
		(this.converter = t), (this._key = r), (this.type = 'document'), (this.firestore = e);
	}
	get _path() {
		return this._key.path;
	}
	get id() {
		return this._key.path.lastSegment();
	}
	get path() {
		return this._key.path.canonicalString();
	}
	get parent() {
		return new Xe(this.firestore, this.converter, this._key.path.popLast());
	}
	withConverter(e) {
		return new ue(this.firestore, e, this._key);
	}
}
class Xe extends Pi {
	constructor(e, t, r) {
		super(e, t, wo(r)), (this._path = r), (this.type = 'collection');
	}
	get id() {
		return this._query.path.lastSegment();
	}
	get path() {
		return this._query.path.canonicalString();
	}
	get parent() {
		const e = this._path.popLast();
		return e.isEmpty() ? null : new ue(this.firestore, null, new v(e));
	}
	withConverter(e) {
		return new Xe(this.firestore, e, this._path);
	}
}
function av(n, e, ...t) {
	if (((n = ce(n)), Rh('collection', 'path', e), n instanceof Si)) {
		const r = M.fromString(e, ...t);
		return dc(r), new Xe(n, null, r);
	}
	{
		if (!(n instanceof ue || n instanceof Xe))
			throw new y(
				p.INVALID_ARGUMENT,
				'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
			);
		const r = n._path.child(M.fromString(e, ...t));
		return dc(r), new Xe(n.firestore, null, r);
	}
}
function WI(n, e, ...t) {
	if (
		((n = ce(n)), arguments.length === 1 && (e = El.newId()), Rh('doc', 'path', e), n instanceof Si)
	) {
		const r = M.fromString(e, ...t);
		return hc(r), new ue(n, null, new v(r));
	}
	{
		if (!(n instanceof ue || n instanceof Xe))
			throw new y(
				p.INVALID_ARGUMENT,
				'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
			);
		const r = n._path.child(M.fromString(e, ...t));
		return hc(r), new ue(n.firestore, n instanceof Xe ? n.converter : null, new v(r));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cv {
	constructor() {
		(this.nu = Promise.resolve()),
			(this.ru = []),
			(this.iu = !1),
			(this.su = []),
			(this.ou = null),
			(this._u = !1),
			(this.au = !1),
			(this.uu = []),
			(this.jo = new nh(this, 'async_queue_retry')),
			(this.cu = () => {
				const t = Yi();
				t && m('AsyncQueue', 'Visibility state changed to ' + t.visibilityState), this.jo.Ko();
			});
		const e = Yi();
		e && typeof e.addEventListener == 'function' && e.addEventListener('visibilitychange', this.cu);
	}
	get isShuttingDown() {
		return this.iu;
	}
	enqueueAndForget(e) {
		this.enqueue(e);
	}
	enqueueAndForgetEvenWhileRestricted(e) {
		this.lu(), this.hu(e);
	}
	enterRestrictedMode(e) {
		if (!this.iu) {
			(this.iu = !0), (this.au = e || !1);
			const t = Yi();
			t &&
				typeof t.removeEventListener == 'function' &&
				t.removeEventListener('visibilitychange', this.cu);
		}
	}
	enqueue(e) {
		if ((this.lu(), this.iu)) return new Promise(() => {});
		const t = new Se();
		return this.hu(() =>
			this.iu && this.au ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)
		).then(() => t.promise);
	}
	enqueueRetryable(e) {
		this.enqueueAndForget(() => (this.ru.push(e), this.Pu()));
	}
	async Pu() {
		if (this.ru.length !== 0) {
			try {
				await this.ru[0](), this.ru.shift(), this.jo.reset();
			} catch (e) {
				if (!er(e)) throw e;
				m('AsyncQueue', 'Operation failed with retryable error: ' + e);
			}
			this.ru.length > 0 && this.jo.qo(() => this.Pu());
		}
	}
	hu(e) {
		const t = this.nu.then(
			() => (
				(this._u = !0),
				e()
					.catch((r) => {
						(this.ou = r), (this._u = !1);
						const i = (function (o) {
							let a = o.message || '';
							return (
								o.stack &&
									(a = o.stack.includes(o.message)
										? o.stack
										: o.message +
											`
` +
											o.stack),
								a
							);
						})(r);
						throw (Ve('INTERNAL UNHANDLED ERROR: ', i), r);
					})
					.then((r) => ((this._u = !1), r))
			)
		);
		return (this.nu = t), t;
	}
	enqueueAfterDelay(e, t, r) {
		this.lu(), this.uu.indexOf(e) > -1 && (t = 0);
		const i = Oo.createAndSchedule(this, e, t, r, (s) => this.Iu(s));
		return this.su.push(i), i;
	}
	lu() {
		this.ou && T();
	}
	verifyOperationInProgress() {}
	async Tu() {
		let e;
		do (e = this.nu), await e;
		while (e !== this.nu);
	}
	Eu(e) {
		for (const t of this.su) if (t.timerId === e) return !0;
		return !1;
	}
	du(e) {
		return this.Tu().then(() => {
			this.su.sort((t, r) => t.targetTimeMs - r.targetTimeMs);
			for (const t of this.su) if ((t.skipDelay(), e !== 'all' && t.timerId === e)) break;
			return this.Tu();
		});
	}
	Au(e) {
		this.uu.push(e);
	}
	Iu(e) {
		const t = this.su.indexOf(e);
		this.su.splice(t, 1);
	}
}
class Ci extends Si {
	constructor(e, t, r, i) {
		super(e, t, r, i),
			(this.type = 'firestore'),
			(this._queue = (function () {
				return new cv();
			})()),
			(this._persistenceKey = (i == null ? void 0 : i.name) || '[DEFAULT]');
	}
	_terminate() {
		return this._firestoreClient || Sh(this), this._firestoreClient.terminate();
	}
}
function uv(n, e) {
	const t = typeof n == 'object' ? n : Us(),
		r = typeof n == 'string' ? n : e || '(default)',
		i = zn(t, 'firestore').getImmediate({ identifier: r });
	if (!i._initialized) {
		const s = Rd('firestore');
		s && ov(i, ...s);
	}
	return i;
}
function Uo(n) {
	return n._firestoreClient || Sh(n), n._firestoreClient.verifyNotTerminated(), n._firestoreClient;
}
function Sh(n) {
	var e, t, r;
	const i = n._freezeSettings(),
		s = (function (a, c, u, l) {
			return new Bm(
				a,
				c,
				u,
				l.host,
				l.ssl,
				l.experimentalForceLongPolling,
				l.experimentalAutoDetectLongPolling,
				Ah(l.experimentalLongPollingOptions),
				l.useFetchStreams
			);
		})(
			n._databaseId,
			((e = n._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
			n._persistenceKey,
			i
		);
	(n._firestoreClient = new Zy(n._authCredentials, n._appCheckCredentials, n._queue, s)),
		!((t = i.localCache) === null || t === void 0) &&
			t._offlineComponentProvider &&
			!((r = i.localCache) === null || r === void 0) &&
			r._onlineComponentProvider &&
			(n._firestoreClient._uninitializedComponentsProvider = {
				_offlineKind: i.localCache.kind,
				_offline: i.localCache._offlineComponentProvider,
				_online: i.localCache._onlineComponentProvider
			});
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yt {
	constructor(e) {
		this._byteString = e;
	}
	static fromBase64String(e) {
		try {
			return new Yt(se.fromBase64String(e));
		} catch (t) {
			throw new y(p.INVALID_ARGUMENT, 'Failed to construct data from Base64 string: ' + t);
		}
	}
	static fromUint8Array(e) {
		return new Yt(se.fromUint8Array(e));
	}
	toBase64() {
		return this._byteString.toBase64();
	}
	toUint8Array() {
		return this._byteString.toUint8Array();
	}
	toString() {
		return 'Bytes(base64: ' + this.toBase64() + ')';
	}
	isEqual(e) {
		return this._byteString.isEqual(e._byteString);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bo {
	constructor(...e) {
		for (let t = 0; t < e.length; ++t)
			if (e[t].length === 0)
				throw new y(
					p.INVALID_ARGUMENT,
					'Invalid field name at argument $(i + 1). Field names must not be empty.'
				);
		this._internalPath = new Y(e);
	}
	isEqual(e) {
		return this._internalPath.isEqual(e._internalPath);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ph {
	constructor(e) {
		this._methodName = e;
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jo {
	constructor(e, t) {
		if (!isFinite(e) || e < -90 || e > 90)
			throw new y(
				p.INVALID_ARGUMENT,
				'Latitude must be a number between -90 and 90, but was: ' + e
			);
		if (!isFinite(t) || t < -180 || t > 180)
			throw new y(
				p.INVALID_ARGUMENT,
				'Longitude must be a number between -180 and 180, but was: ' + t
			);
		(this._lat = e), (this._long = t);
	}
	get latitude() {
		return this._lat;
	}
	get longitude() {
		return this._long;
	}
	isEqual(e) {
		return this._lat === e._lat && this._long === e._long;
	}
	toJSON() {
		return { latitude: this._lat, longitude: this._long };
	}
	_compareTo(e) {
		return D(this._lat, e._lat) || D(this._long, e._long);
	}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lv = /^__.*__$/;
class hv {
	constructor(e, t, r) {
		(this.data = e), (this.fieldMask = t), (this.fieldTransforms = r);
	}
	toMutation(e, t) {
		return this.fieldMask !== null
			? new Ct(e, this.data, this.fieldMask, t, this.fieldTransforms)
			: new tr(e, this.data, t, this.fieldTransforms);
	}
}
function Ch(n) {
	switch (n) {
		case 0:
		case 2:
		case 1:
			return !0;
		case 3:
		case 4:
			return !1;
		default:
			throw T();
	}
}
class qo {
	constructor(e, t, r, i, s, o) {
		(this.settings = e),
			(this.databaseId = t),
			(this.serializer = r),
			(this.ignoreUndefinedProperties = i),
			s === void 0 && this.Ru(),
			(this.fieldTransforms = s || []),
			(this.fieldMask = o || []);
	}
	get path() {
		return this.settings.path;
	}
	get Vu() {
		return this.settings.Vu;
	}
	mu(e) {
		return new qo(
			Object.assign(Object.assign({}, this.settings), e),
			this.databaseId,
			this.serializer,
			this.ignoreUndefinedProperties,
			this.fieldTransforms,
			this.fieldMask
		);
	}
	fu(e) {
		var t;
		const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e),
			i = this.mu({ path: r, gu: !1 });
		return i.pu(e), i;
	}
	yu(e) {
		var t;
		const r = (t = this.path) === null || t === void 0 ? void 0 : t.child(e),
			i = this.mu({ path: r, gu: !1 });
		return i.Ru(), i;
	}
	wu(e) {
		return this.mu({ path: void 0, gu: !0 });
	}
	Su(e) {
		return zr(e, this.settings.methodName, this.settings.bu || !1, this.path, this.settings.Du);
	}
	contains(e) {
		return (
			this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 ||
			this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0
		);
	}
	Ru() {
		if (this.path) for (let e = 0; e < this.path.length; e++) this.pu(this.path.get(e));
	}
	pu(e) {
		if (e.length === 0) throw this.Su('Document fields must not be empty');
		if (Ch(this.Vu) && lv.test(e)) throw this.Su('Document fields cannot begin and end with "__"');
	}
}
class dv {
	constructor(e, t, r) {
		(this.databaseId = e), (this.ignoreUndefinedProperties = t), (this.serializer = r || wi(e));
	}
	Cu(e, t, r, i = !1) {
		return new qo(
			{ Vu: e, methodName: t, Du: r, path: Y.emptyPath(), gu: !1, bu: i },
			this.databaseId,
			this.serializer,
			this.ignoreUndefinedProperties
		);
	}
}
function fv(n) {
	const e = n._freezeSettings(),
		t = wi(n._databaseId);
	return new dv(n._databaseId, !!e.ignoreUndefinedProperties, t);
}
function pv(n, e, t, r, i, s = {}) {
	const o = n.Cu(s.merge || s.mergeFields ? 2 : 0, e, t, i);
	Vh('Data must be an object, but it was:', o, r);
	const a = kh(r, o);
	let c, u;
	if (s.merge) (c = new me(o.fieldMask)), (u = o.fieldTransforms);
	else if (s.mergeFields) {
		const l = [];
		for (const h of s.mergeFields) {
			const d = gv(e, h, t);
			if (!o.contains(d))
				throw new y(
					p.INVALID_ARGUMENT,
					`Field '${d}' is specified in your field mask but missing from your input data.`
				);
			_v(l, d) || l.push(d);
		}
		(c = new me(l)), (u = o.fieldTransforms.filter((h) => c.covers(h.field)));
	} else (c = null), (u = o.fieldTransforms);
	return new hv(new fe(a), c, u);
}
function bh(n, e) {
	if (Dh((n = ce(n)))) return Vh('Unsupported field value:', e, n), kh(n, e);
	if (n instanceof Ph)
		return (
			(function (r, i) {
				if (!Ch(i.Vu)) throw i.Su(`${r._methodName}() can only be used with update() and set()`);
				if (!i.path) throw i.Su(`${r._methodName}() is not currently supported inside arrays`);
				const s = r._toFieldTransform(i);
				s && i.fieldTransforms.push(s);
			})(n, e),
			null
		);
	if (n === void 0 && e.ignoreUndefinedProperties) return null;
	if ((e.path && e.fieldMask.push(e.path), n instanceof Array)) {
		if (e.settings.gu && e.Vu !== 4) throw e.Su('Nested arrays are not supported');
		return (function (r, i) {
			const s = [];
			let o = 0;
			for (const a of r) {
				let c = bh(a, i.wu(o));
				c == null && (c = { nullValue: 'NULL_VALUE' }), s.push(c), o++;
			}
			return { arrayValue: { values: s } };
		})(n, e);
	}
	return (function (r, i) {
		if ((r = ce(r)) === null) return { nullValue: 'NULL_VALUE' };
		if (typeof r == 'number') return c_(i.serializer, r);
		if (typeof r == 'boolean') return { booleanValue: r };
		if (typeof r == 'string') return { stringValue: r };
		if (r instanceof Date) {
			const s = z.fromDate(r);
			return { timestampValue: qr(i.serializer, s) };
		}
		if (r instanceof z) {
			const s = new z(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
			return { timestampValue: qr(i.serializer, s) };
		}
		if (r instanceof jo) return { geoPointValue: { latitude: r.latitude, longitude: r.longitude } };
		if (r instanceof Yt) return { bytesValue: Kl(i.serializer, r._byteString) };
		if (r instanceof ue) {
			const s = i.databaseId,
				o = r.firestore._databaseId;
			if (!o.isEqual(s))
				throw i.Su(
					`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`
				);
			return { referenceValue: So(r.firestore._databaseId || i.databaseId, r._key.path) };
		}
		throw i.Su(`Unsupported field value: ${Fo(r)}`);
	})(n, e);
}
function kh(n, e) {
	const t = {};
	return (
		Il(n)
			? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
			: nn(n, (r, i) => {
					const s = bh(i, e.fu(r));
					s != null && (t[r] = s);
				}),
		{ mapValue: { fields: t } }
	);
}
function Dh(n) {
	return !(
		typeof n != 'object' ||
		n === null ||
		n instanceof Array ||
		n instanceof Date ||
		n instanceof z ||
		n instanceof jo ||
		n instanceof Yt ||
		n instanceof ue ||
		n instanceof Ph
	);
}
function Vh(n, e, t) {
	if (
		!Dh(t) ||
		!(function (i) {
			return (
				typeof i == 'object' &&
				i !== null &&
				(Object.getPrototypeOf(i) === Object.prototype || Object.getPrototypeOf(i) === null)
			);
		})(t)
	) {
		const r = Fo(t);
		throw r === 'an object' ? e.Su(n + ' a custom object') : e.Su(n + ' ' + r);
	}
}
function gv(n, e, t) {
	if ((e = ce(e)) instanceof Bo) return e._internalPath;
	if (typeof e == 'string') return Nh(n, e);
	throw zr('Field path arguments must be of type string or ', n, !1, void 0, t);
}
const mv = new RegExp('[~\\*/\\[\\]]');
function Nh(n, e, t) {
	if (e.search(mv) >= 0)
		throw zr(
			`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
			n,
			!1,
			void 0,
			t
		);
	try {
		return new Bo(...e.split('.'))._internalPath;
	} catch {
		throw zr(
			`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
			n,
			!1,
			void 0,
			t
		);
	}
}
function zr(n, e, t, r, i) {
	const s = r && !r.isEmpty(),
		o = i !== void 0;
	let a = `Function ${e}() called with invalid data`;
	t && (a += ' (via `toFirestore()`)'), (a += '. ');
	let c = '';
	return (
		(s || o) &&
			((c += ' (found'), s && (c += ` in field ${r}`), o && (c += ` in document ${i}`), (c += ')')),
		new y(p.INVALID_ARGUMENT, a + n + c)
	);
}
function _v(n, e) {
	return n.some((t) => t.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oh {
	constructor(e, t, r, i, s) {
		(this._firestore = e),
			(this._userDataWriter = t),
			(this._key = r),
			(this._document = i),
			(this._converter = s);
	}
	get id() {
		return this._key.path.lastSegment();
	}
	get ref() {
		return new ue(this._firestore, this._converter, this._key);
	}
	exists() {
		return this._document !== null;
	}
	data() {
		if (this._document) {
			if (this._converter) {
				const e = new yv(this._firestore, this._userDataWriter, this._key, this._document, null);
				return this._converter.fromFirestore(e);
			}
			return this._userDataWriter.convertValue(this._document.data.value);
		}
	}
	get(e) {
		if (this._document) {
			const t = this._document.data.field(Lh('DocumentSnapshot.get', e));
			if (t !== null) return this._userDataWriter.convertValue(t);
		}
	}
}
class yv extends Oh {
	data() {
		return super.data();
	}
}
function Lh(n, e) {
	return typeof e == 'string'
		? Nh(n, e)
		: e instanceof Bo
			? e._internalPath
			: e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vv(n) {
	if (n.limitType === 'L' && n.explicitOrderBy.length === 0)
		throw new y(
			p.UNIMPLEMENTED,
			'limitToLast() queries require specifying at least one orderBy() clause'
		);
}
class Ev {
	convertValue(e, t = 'none') {
		switch (Tt(e)) {
			case 0:
				return null;
			case 1:
				return e.booleanValue;
			case 2:
				return j(e.integerValue || e.doubleValue);
			case 3:
				return this.convertTimestamp(e.timestampValue);
			case 4:
				return this.convertServerTimestamp(e, t);
			case 5:
				return e.stringValue;
			case 6:
				return this.convertBytes(It(e.bytesValue));
			case 7:
				return this.convertReference(e.referenceValue);
			case 8:
				return this.convertGeoPoint(e.geoPointValue);
			case 9:
				return this.convertArray(e.arrayValue, t);
			case 10:
				return this.convertObject(e.mapValue, t);
			default:
				throw T();
		}
	}
	convertObject(e, t) {
		return this.convertObjectMap(e.fields, t);
	}
	convertObjectMap(e, t = 'none') {
		const r = {};
		return (
			nn(e, (i, s) => {
				r[i] = this.convertValue(s, t);
			}),
			r
		);
	}
	convertGeoPoint(e) {
		return new jo(j(e.latitude), j(e.longitude));
	}
	convertArray(e, t) {
		return (e.values || []).map((r) => this.convertValue(r, t));
	}
	convertServerTimestamp(e, t) {
		switch (t) {
			case 'previous':
				const r = vo(e);
				return r == null ? null : this.convertValue(r, t);
			case 'estimate':
				return this.convertTimestamp(Mn(e));
			default:
				return null;
		}
	}
	convertTimestamp(e) {
		const t = et(e);
		return new z(t.seconds, t.nanos);
	}
	convertDocumentKey(e, t) {
		const r = M.fromString(e);
		N(Zl(r));
		const i = new xn(r.get(1), r.get(3)),
			s = new v(r.popFirst(5));
		return (
			i.isEqual(t) ||
				Ve(
					`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
				),
			s
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Iv(n, e, t) {
	let r;
	return (
		(r = n ? (t && (t.merge || t.mergeFields) ? n.toFirestore(e, t) : n.toFirestore(e)) : e), r
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _n {
	constructor(e, t) {
		(this.hasPendingWrites = e), (this.fromCache = t);
	}
	isEqual(e) {
		return this.hasPendingWrites === e.hasPendingWrites && this.fromCache === e.fromCache;
	}
}
class Mh extends Oh {
	constructor(e, t, r, i, s, o) {
		super(e, t, r, i, o), (this._firestore = e), (this._firestoreImpl = e), (this.metadata = s);
	}
	exists() {
		return super.exists();
	}
	data(e = {}) {
		if (this._document) {
			if (this._converter) {
				const t = new wr(
					this._firestore,
					this._userDataWriter,
					this._key,
					this._document,
					this.metadata,
					null
				);
				return this._converter.fromFirestore(t, e);
			}
			return this._userDataWriter.convertValue(this._document.data.value, e.serverTimestamps);
		}
	}
	get(e, t = {}) {
		if (this._document) {
			const r = this._document.data.field(Lh('DocumentSnapshot.get', e));
			if (r !== null) return this._userDataWriter.convertValue(r, t.serverTimestamps);
		}
	}
}
class wr extends Mh {
	data(e = {}) {
		return super.data(e);
	}
}
class Tv {
	constructor(e, t, r, i) {
		(this._firestore = e),
			(this._userDataWriter = t),
			(this._snapshot = i),
			(this.metadata = new _n(i.hasPendingWrites, i.fromCache)),
			(this.query = r);
	}
	get docs() {
		const e = [];
		return this.forEach((t) => e.push(t)), e;
	}
	get size() {
		return this._snapshot.docs.size;
	}
	get empty() {
		return this.size === 0;
	}
	forEach(e, t) {
		this._snapshot.docs.forEach((r) => {
			e.call(
				t,
				new wr(
					this._firestore,
					this._userDataWriter,
					r.key,
					r,
					new _n(this._snapshot.mutatedKeys.has(r.key), this._snapshot.fromCache),
					this.query.converter
				)
			);
		});
	}
	docChanges(e = {}) {
		const t = !!e.includeMetadataChanges;
		if (t && this._snapshot.excludesMetadataChanges)
			throw new y(
				p.INVALID_ARGUMENT,
				'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
			);
		return (
			(this._cachedChanges && this._cachedChangesIncludeMetadataChanges === t) ||
				((this._cachedChanges = (function (i, s) {
					if (i._snapshot.oldDocs.isEmpty()) {
						let o = 0;
						return i._snapshot.docChanges.map((a) => {
							const c = new wr(
								i._firestore,
								i._userDataWriter,
								a.doc.key,
								a.doc,
								new _n(i._snapshot.mutatedKeys.has(a.doc.key), i._snapshot.fromCache),
								i.query.converter
							);
							return a.doc, { type: 'added', doc: c, oldIndex: -1, newIndex: o++ };
						});
					}
					{
						let o = i._snapshot.oldDocs;
						return i._snapshot.docChanges
							.filter((a) => s || a.type !== 3)
							.map((a) => {
								const c = new wr(
									i._firestore,
									i._userDataWriter,
									a.doc.key,
									a.doc,
									new _n(i._snapshot.mutatedKeys.has(a.doc.key), i._snapshot.fromCache),
									i.query.converter
								);
								let u = -1,
									l = -1;
								return (
									a.type !== 0 && ((u = o.indexOf(a.doc.key)), (o = o.delete(a.doc.key))),
									a.type !== 1 && ((o = o.add(a.doc)), (l = o.indexOf(a.doc.key))),
									{ type: wv(a.type), doc: c, oldIndex: u, newIndex: l }
								);
							});
					}
				})(this, t)),
				(this._cachedChangesIncludeMetadataChanges = t)),
			this._cachedChanges
		);
	}
}
function wv(n) {
	switch (n) {
		case 0:
			return 'added';
		case 2:
		case 3:
			return 'modified';
		case 1:
			return 'removed';
		default:
			return T();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function KI(n) {
	n = wt(n, ue);
	const e = wt(n.firestore, Ci);
	return rv(Uo(e), n._key).then((t) => Sv(e, n, t));
}
class xh extends Ev {
	constructor(e) {
		super(), (this.firestore = e);
	}
	convertBytes(e) {
		return new Yt(e);
	}
	convertReference(e) {
		const t = this.convertDocumentKey(e, this.firestore._databaseId);
		return new ue(this.firestore, null, t);
	}
}
function Av(n) {
	n = wt(n, Pi);
	const e = wt(n.firestore, Ci),
		t = Uo(e),
		r = new xh(e);
	return vv(n._query), iv(t, n._query).then((i) => new Tv(e, r, n, i));
}
function GI(n, e, t) {
	n = wt(n, ue);
	const r = wt(n.firestore, Ci),
		i = Iv(n.converter, e, t);
	return Rv(r, [
		pv(fv(r), 'setDoc', n._key, i, n.converter !== null, t).toMutation(n._key, Ue.none())
	]);
}
function Rv(n, e) {
	return (function (r, i) {
		const s = new Se();
		return r.asyncQueue.enqueueAndForget(async () => zy(await nv(r), i, s)), s.promise;
	})(Uo(n), e);
}
function Sv(n, e, t) {
	const r = t.docs.get(e._key),
		i = new xh(n);
	return new Mh(n, i, e._key, r, new _n(t.hasPendingWrites, t.fromCache), e.converter);
}
(function (e, t = !0) {
	(function (i) {
		tn = i;
	})(Xt),
		De(
			new _e(
				'firestore',
				(r, { instanceIdentifier: i, options: s }) => {
					const o = r.getProvider('app').getImmediate(),
						a = new Ci(
							new Am(r.getProvider('auth-internal')),
							new Cm(r.getProvider('app-check-internal')),
							(function (u, l) {
								if (!Object.prototype.hasOwnProperty.apply(u.options, ['projectId']))
									throw new y(
										p.INVALID_ARGUMENT,
										'"projectId" not provided in firebase.initializeApp.'
									);
								return new xn(u.options.projectId, l);
							})(o, i),
							o
						);
					return (s = Object.assign({ useFetchStreams: t }, s)), a._setSettings(s), a;
				},
				'PUBLIC'
			).setMultipleInstances(!0)
		),
		pe(Na, '4.5.1', e),
		pe(Na, '4.5.1', 'esm2017');
})();
function $o(n, e) {
	var t = {};
	for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
	if (n != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
			e.indexOf(r[i]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(n, r[i]) &&
				(t[r[i]] = n[r[i]]);
	return t;
}
function Fh() {
	return {
		'dependent-sdk-initialized-before-auth':
			'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.'
	};
}
const Pv = Fh,
	Uh = new St('auth', 'Firebase', Fh());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hr = new Yr('@firebase/auth');
function Cv(n, ...e) {
	Hr.logLevel <= b.WARN && Hr.warn(`Auth (${Xt}): ${n}`, ...e);
}
function Ar(n, ...e) {
	Hr.logLevel <= b.ERROR && Hr.error(`Auth (${Xt}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ve(n, ...e) {
	throw zo(n, ...e);
}
function be(n, ...e) {
	return zo(n, ...e);
}
function Bh(n, e, t) {
	const r = Object.assign(Object.assign({}, Pv()), { [e]: t });
	return new St('auth', 'Firebase', r).create(e, { appName: n.name });
}
function Be(n) {
	return Bh(
		n,
		'operation-not-supported-in-this-environment',
		'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
	);
}
function zo(n, ...e) {
	if (typeof n != 'string') {
		const t = e[0],
			r = [...e.slice(1)];
		return r[0] && (r[0].appName = n.name), n._errorFactory.create(t, ...r);
	}
	return Uh.create(n, ...e);
}
function I(n, e, ...t) {
	if (!n) throw zo(e, ...t);
}
function Me(n) {
	const e = 'INTERNAL ASSERTION FAILED: ' + n;
	throw (Ar(e), new Error(e));
}
function $e(n, e) {
	n || Me(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ns() {
	var n;
	return (
		(typeof self < 'u' && ((n = self.location) === null || n === void 0 ? void 0 : n.href)) || ''
	);
}
function bv() {
	return pc() === 'http:' || pc() === 'https:';
}
function pc() {
	var n;
	return (
		(typeof self < 'u' && ((n = self.location) === null || n === void 0 ? void 0 : n.protocol)) ||
		null
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kv() {
	return typeof navigator < 'u' &&
		navigator &&
		'onLine' in navigator &&
		typeof navigator.onLine == 'boolean' &&
		(bv() || jc() || 'connection' in navigator)
		? navigator.onLine
		: !0;
}
function Dv() {
	if (typeof navigator > 'u') return null;
	const n = navigator;
	return (n.languages && n.languages[0]) || n.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sr {
	constructor(e, t) {
		(this.shortDelay = e),
			(this.longDelay = t),
			$e(t > e, 'Short delay should be less than long delay!'),
			(this.isMobile = Cd() || kd());
	}
	get() {
		return kv()
			? this.isMobile
				? this.longDelay
				: this.shortDelay
			: Math.min(5e3, this.shortDelay);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ho(n, e) {
	$e(n.emulator, 'Emulator should always be set here');
	const { url: t } = n.emulator;
	return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jh {
	static initialize(e, t, r) {
		(this.fetchImpl = e), t && (this.headersImpl = t), r && (this.responseImpl = r);
	}
	static fetch() {
		if (this.fetchImpl) return this.fetchImpl;
		if (typeof self < 'u' && 'fetch' in self) return self.fetch;
		if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
		if (typeof fetch < 'u') return fetch;
		Me(
			'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
		);
	}
	static headers() {
		if (this.headersImpl) return this.headersImpl;
		if (typeof self < 'u' && 'Headers' in self) return self.Headers;
		if (typeof globalThis < 'u' && globalThis.Headers) return globalThis.Headers;
		if (typeof Headers < 'u') return Headers;
		Me(
			'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
		);
	}
	static response() {
		if (this.responseImpl) return this.responseImpl;
		if (typeof self < 'u' && 'Response' in self) return self.Response;
		if (typeof globalThis < 'u' && globalThis.Response) return globalThis.Response;
		if (typeof Response < 'u') return Response;
		Me(
			'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
		);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vv = {
	CREDENTIAL_MISMATCH: 'custom-token-mismatch',
	MISSING_CUSTOM_TOKEN: 'internal-error',
	INVALID_IDENTIFIER: 'invalid-email',
	MISSING_CONTINUE_URI: 'internal-error',
	INVALID_PASSWORD: 'wrong-password',
	MISSING_PASSWORD: 'missing-password',
	INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
	EMAIL_EXISTS: 'email-already-in-use',
	PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
	INVALID_IDP_RESPONSE: 'invalid-credential',
	INVALID_PENDING_TOKEN: 'invalid-credential',
	FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
	MISSING_REQ_TYPE: 'internal-error',
	EMAIL_NOT_FOUND: 'user-not-found',
	RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
	EXPIRED_OOB_CODE: 'expired-action-code',
	INVALID_OOB_CODE: 'invalid-action-code',
	MISSING_OOB_CODE: 'internal-error',
	CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
	INVALID_ID_TOKEN: 'invalid-user-token',
	TOKEN_EXPIRED: 'user-token-expired',
	USER_NOT_FOUND: 'user-token-expired',
	TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
	PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
	INVALID_CODE: 'invalid-verification-code',
	INVALID_SESSION_INFO: 'invalid-verification-id',
	INVALID_TEMPORARY_PROOF: 'invalid-credential',
	MISSING_SESSION_INFO: 'missing-verification-id',
	SESSION_EXPIRED: 'code-expired',
	MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
	UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
	INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
	ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
	INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
	MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
	MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
	MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
	SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
	SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
	BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
	RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
	MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
	INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
	INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
	MISSING_CLIENT_TYPE: 'missing-client-type',
	MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
	INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
	INVALID_REQ_TYPE: 'invalid-req-type'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nv = new sr(3e4, 6e4);
function it(n, e) {
	return n.tenantId && !e.tenantId
		? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
		: e;
}
async function st(n, e, t, r, i = {}) {
	return qh(n, i, async () => {
		let s = {},
			o = {};
		r && (e === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }));
		const a = $n(Object.assign({ key: n.config.apiKey }, o)).slice(1),
			c = await n._getAdditionalHeaders();
		return (
			(c['Content-Type'] = 'application/json'),
			n.languageCode && (c['X-Firebase-Locale'] = n.languageCode),
			jh.fetch()(
				$h(n, n.config.apiHost, t, a),
				Object.assign({ method: e, headers: c, referrerPolicy: 'no-referrer' }, s)
			)
		);
	});
}
async function qh(n, e, t) {
	n._canInitEmulator = !1;
	const r = Object.assign(Object.assign({}, Vv), e);
	try {
		const i = new Lv(n),
			s = await Promise.race([t(), i.promise]);
		i.clearNetworkTimeout();
		const o = await s.json();
		if ('needConfirmation' in o) throw yr(n, 'account-exists-with-different-credential', o);
		if (s.ok && !('errorMessage' in o)) return o;
		{
			const a = s.ok ? o.errorMessage : o.error.message,
				[c, u] = a.split(' : ');
			if (c === 'FEDERATED_USER_ID_ALREADY_LINKED') throw yr(n, 'credential-already-in-use', o);
			if (c === 'EMAIL_EXISTS') throw yr(n, 'email-already-in-use', o);
			if (c === 'USER_DISABLED') throw yr(n, 'user-disabled', o);
			const l = r[c] || c.toLowerCase().replace(/[_\s]+/g, '-');
			if (u) throw Bh(n, l, u);
			ve(n, l);
		}
	} catch (i) {
		if (i instanceof Ee) throw i;
		ve(n, 'network-request-failed', { message: String(i) });
	}
}
async function or(n, e, t, r, i = {}) {
	const s = await st(n, e, t, r, i);
	return (
		'mfaPendingCredential' in s && ve(n, 'multi-factor-auth-required', { _serverResponse: s }), s
	);
}
function $h(n, e, t, r) {
	const i = `${e}${t}?${r}`;
	return n.config.emulator ? Ho(n.config, i) : `${n.config.apiScheme}://${i}`;
}
function Ov(n) {
	switch (n) {
		case 'ENFORCE':
			return 'ENFORCE';
		case 'AUDIT':
			return 'AUDIT';
		case 'OFF':
			return 'OFF';
		default:
			return 'ENFORCEMENT_STATE_UNSPECIFIED';
	}
}
class Lv {
	constructor(e) {
		(this.auth = e),
			(this.timer = null),
			(this.promise = new Promise((t, r) => {
				this.timer = setTimeout(() => r(be(this.auth, 'network-request-failed')), Nv.get());
			}));
	}
	clearNetworkTimeout() {
		clearTimeout(this.timer);
	}
}
function yr(n, e, t) {
	const r = { appName: n.name };
	t.email && (r.email = t.email), t.phoneNumber && (r.phoneNumber = t.phoneNumber);
	const i = be(n, e, r);
	return (i.customData._tokenResponse = t), i;
}
function gc(n) {
	return n !== void 0 && n.enterprise !== void 0;
}
class Mv {
	constructor(e) {
		if (((this.siteKey = ''), (this.recaptchaEnforcementState = []), e.recaptchaKey === void 0))
			throw new Error('recaptchaKey undefined');
		(this.siteKey = e.recaptchaKey.split('/')[3]),
			(this.recaptchaEnforcementState = e.recaptchaEnforcementState);
	}
	getProviderEnforcementState(e) {
		if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
		for (const t of this.recaptchaEnforcementState)
			if (t.provider && t.provider === e) return Ov(t.enforcementState);
		return null;
	}
	isProviderEnabled(e) {
		return (
			this.getProviderEnforcementState(e) === 'ENFORCE' ||
			this.getProviderEnforcementState(e) === 'AUDIT'
		);
	}
}
async function xv(n, e) {
	return st(n, 'GET', '/v2/recaptchaConfig', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fv(n, e) {
	return st(n, 'POST', '/v1/accounts:delete', e);
}
async function zh(n, e) {
	return st(n, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rn(n) {
	if (n)
		try {
			const e = new Date(Number(n));
			if (!isNaN(e.getTime())) return e.toUTCString();
		} catch {}
}
async function Uv(n, e = !1) {
	const t = ce(n),
		r = await t.getIdToken(e),
		i = Wo(r);
	I(i && i.exp && i.auth_time && i.iat, t.auth, 'internal-error');
	const s = typeof i.firebase == 'object' ? i.firebase : void 0,
		o = s == null ? void 0 : s.sign_in_provider;
	return {
		claims: i,
		token: r,
		authTime: Rn(Zi(i.auth_time)),
		issuedAtTime: Rn(Zi(i.iat)),
		expirationTime: Rn(Zi(i.exp)),
		signInProvider: o || null,
		signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null
	};
}
function Zi(n) {
	return Number(n) * 1e3;
}
function Wo(n) {
	const [e, t, r] = n.split('.');
	if (e === void 0 || t === void 0 || r === void 0)
		return Ar('JWT malformed, contained fewer than 3 sections'), null;
	try {
		const i = xc(t);
		return i ? JSON.parse(i) : (Ar('Failed to decode base64 JWT payload'), null);
	} catch (i) {
		return Ar('Caught error parsing JWT payload as JSON', i == null ? void 0 : i.toString()), null;
	}
}
function mc(n) {
	const e = Wo(n);
	return (
		I(e, 'internal-error'),
		I(typeof e.exp < 'u', 'internal-error'),
		I(typeof e.iat < 'u', 'internal-error'),
		Number(e.exp) - Number(e.iat)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function jn(n, e, t = !1) {
	if (t) return e;
	try {
		return await e;
	} catch (r) {
		throw (r instanceof Ee && Bv(r) && n.auth.currentUser === n && (await n.auth.signOut()), r);
	}
}
function Bv({ code: n }) {
	return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jv {
	constructor(e) {
		(this.user = e), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
	}
	_start() {
		this.isRunning || ((this.isRunning = !0), this.schedule());
	}
	_stop() {
		this.isRunning && ((this.isRunning = !1), this.timerId !== null && clearTimeout(this.timerId));
	}
	getInterval(e) {
		var t;
		if (e) {
			const r = this.errorBackoff;
			return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
		} else {
			this.errorBackoff = 3e4;
			const i =
				((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0 ? t : 0) -
				Date.now() -
				3e5;
			return Math.max(0, i);
		}
	}
	schedule(e = !1) {
		if (!this.isRunning) return;
		const t = this.getInterval(e);
		this.timerId = setTimeout(async () => {
			await this.iteration();
		}, t);
	}
	async iteration() {
		try {
			await this.user.getIdToken(!0);
		} catch (e) {
			(e == null ? void 0 : e.code) === 'auth/network-request-failed' && this.schedule(!0);
			return;
		}
		this.schedule();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Os {
	constructor(e, t) {
		(this.createdAt = e), (this.lastLoginAt = t), this._initializeTime();
	}
	_initializeTime() {
		(this.lastSignInTime = Rn(this.lastLoginAt)), (this.creationTime = Rn(this.createdAt));
	}
	_copy(e) {
		(this.createdAt = e.createdAt), (this.lastLoginAt = e.lastLoginAt), this._initializeTime();
	}
	toJSON() {
		return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wr(n) {
	var e;
	const t = n.auth,
		r = await n.getIdToken(),
		i = await jn(n, zh(t, { idToken: r }));
	I(i == null ? void 0 : i.users.length, t, 'internal-error');
	const s = i.users[0];
	n._notifyReloadListener(s);
	const o =
			!((e = s.providerUserInfo) === null || e === void 0) && e.length
				? Hh(s.providerUserInfo)
				: [],
		a = $v(n.providerData, o),
		c = n.isAnonymous,
		u = !(n.email && s.passwordHash) && !(a != null && a.length),
		l = c ? u : !1,
		h = {
			uid: s.localId,
			displayName: s.displayName || null,
			photoURL: s.photoUrl || null,
			email: s.email || null,
			emailVerified: s.emailVerified || !1,
			phoneNumber: s.phoneNumber || null,
			tenantId: s.tenantId || null,
			providerData: a,
			metadata: new Os(s.createdAt, s.lastLoginAt),
			isAnonymous: l
		};
	Object.assign(n, h);
}
async function qv(n) {
	const e = ce(n);
	await Wr(e), await e.auth._persistUserIfCurrent(e), e.auth._notifyListenersIfCurrent(e);
}
function $v(n, e) {
	return [...n.filter((r) => !e.some((i) => i.providerId === r.providerId)), ...e];
}
function Hh(n) {
	return n.map((e) => {
		var { providerId: t } = e,
			r = $o(e, ['providerId']);
		return {
			providerId: t,
			uid: r.rawId || '',
			displayName: r.displayName || null,
			email: r.email || null,
			phoneNumber: r.phoneNumber || null,
			photoURL: r.photoUrl || null
		};
	});
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function zv(n, e) {
	const t = await qh(n, {}, async () => {
		const r = $n({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
			{ tokenApiHost: i, apiKey: s } = n.config,
			o = $h(n, i, '/v1/token', `key=${s}`),
			a = await n._getAdditionalHeaders();
		return (
			(a['Content-Type'] = 'application/x-www-form-urlencoded'),
			jh.fetch()(o, { method: 'POST', headers: a, body: r })
		);
	});
	return { accessToken: t.access_token, expiresIn: t.expires_in, refreshToken: t.refresh_token };
}
async function Hv(n, e) {
	return st(n, 'POST', '/v2/accounts:revokeToken', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jt {
	constructor() {
		(this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
	}
	get isExpired() {
		return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
	}
	updateFromServerResponse(e) {
		I(e.idToken, 'internal-error'),
			I(typeof e.idToken < 'u', 'internal-error'),
			I(typeof e.refreshToken < 'u', 'internal-error');
		const t = 'expiresIn' in e && typeof e.expiresIn < 'u' ? Number(e.expiresIn) : mc(e.idToken);
		this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
	}
	updateFromIdToken(e) {
		I(e.length !== 0, 'internal-error');
		const t = mc(e);
		this.updateTokensAndExpiration(e, null, t);
	}
	async getToken(e, t = !1) {
		return !t && this.accessToken && !this.isExpired
			? this.accessToken
			: (I(this.refreshToken, e, 'user-token-expired'),
				this.refreshToken ? (await this.refresh(e, this.refreshToken), this.accessToken) : null);
	}
	clearRefreshToken() {
		this.refreshToken = null;
	}
	async refresh(e, t) {
		const { accessToken: r, refreshToken: i, expiresIn: s } = await zv(e, t);
		this.updateTokensAndExpiration(r, i, Number(s));
	}
	updateTokensAndExpiration(e, t, r) {
		(this.refreshToken = t || null),
			(this.accessToken = e || null),
			(this.expirationTime = Date.now() + r * 1e3);
	}
	static fromJSON(e, t) {
		const { refreshToken: r, accessToken: i, expirationTime: s } = t,
			o = new jt();
		return (
			r && (I(typeof r == 'string', 'internal-error', { appName: e }), (o.refreshToken = r)),
			i && (I(typeof i == 'string', 'internal-error', { appName: e }), (o.accessToken = i)),
			s && (I(typeof s == 'number', 'internal-error', { appName: e }), (o.expirationTime = s)),
			o
		);
	}
	toJSON() {
		return {
			refreshToken: this.refreshToken,
			accessToken: this.accessToken,
			expirationTime: this.expirationTime
		};
	}
	_assign(e) {
		(this.accessToken = e.accessToken),
			(this.refreshToken = e.refreshToken),
			(this.expirationTime = e.expirationTime);
	}
	_clone() {
		return Object.assign(new jt(), this.toJSON());
	}
	_performRefresh() {
		return Me('not implemented');
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ze(n, e) {
	I(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class xe {
	constructor(e) {
		var { uid: t, auth: r, stsTokenManager: i } = e,
			s = $o(e, ['uid', 'auth', 'stsTokenManager']);
		(this.providerId = 'firebase'),
			(this.proactiveRefresh = new jv(this)),
			(this.reloadUserInfo = null),
			(this.reloadListener = null),
			(this.uid = t),
			(this.auth = r),
			(this.stsTokenManager = i),
			(this.accessToken = i.accessToken),
			(this.displayName = s.displayName || null),
			(this.email = s.email || null),
			(this.emailVerified = s.emailVerified || !1),
			(this.phoneNumber = s.phoneNumber || null),
			(this.photoURL = s.photoURL || null),
			(this.isAnonymous = s.isAnonymous || !1),
			(this.tenantId = s.tenantId || null),
			(this.providerData = s.providerData ? [...s.providerData] : []),
			(this.metadata = new Os(s.createdAt || void 0, s.lastLoginAt || void 0));
	}
	async getIdToken(e) {
		const t = await jn(this, this.stsTokenManager.getToken(this.auth, e));
		return (
			I(t, this.auth, 'internal-error'),
			this.accessToken !== t &&
				((this.accessToken = t),
				await this.auth._persistUserIfCurrent(this),
				this.auth._notifyListenersIfCurrent(this)),
			t
		);
	}
	getIdTokenResult(e) {
		return Uv(this, e);
	}
	reload() {
		return qv(this);
	}
	_assign(e) {
		this !== e &&
			(I(this.uid === e.uid, this.auth, 'internal-error'),
			(this.displayName = e.displayName),
			(this.photoURL = e.photoURL),
			(this.email = e.email),
			(this.emailVerified = e.emailVerified),
			(this.phoneNumber = e.phoneNumber),
			(this.isAnonymous = e.isAnonymous),
			(this.tenantId = e.tenantId),
			(this.providerData = e.providerData.map((t) => Object.assign({}, t))),
			this.metadata._copy(e.metadata),
			this.stsTokenManager._assign(e.stsTokenManager));
	}
	_clone(e) {
		const t = new xe(
			Object.assign(Object.assign({}, this), {
				auth: e,
				stsTokenManager: this.stsTokenManager._clone()
			})
		);
		return t.metadata._copy(this.metadata), t;
	}
	_onReload(e) {
		I(!this.reloadListener, this.auth, 'internal-error'),
			(this.reloadListener = e),
			this.reloadUserInfo &&
				(this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null));
	}
	_notifyReloadListener(e) {
		this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
	}
	_startProactiveRefresh() {
		this.proactiveRefresh._start();
	}
	_stopProactiveRefresh() {
		this.proactiveRefresh._stop();
	}
	async _updateTokensIfNecessary(e, t = !1) {
		let r = !1;
		e.idToken &&
			e.idToken !== this.stsTokenManager.accessToken &&
			(this.stsTokenManager.updateFromServerResponse(e), (r = !0)),
			t && (await Wr(this)),
			await this.auth._persistUserIfCurrent(this),
			r && this.auth._notifyListenersIfCurrent(this);
	}
	async delete() {
		if (we(this.auth.app)) return Promise.reject(Be(this.auth));
		const e = await this.getIdToken();
		return (
			await jn(this, Fv(this.auth, { idToken: e })),
			this.stsTokenManager.clearRefreshToken(),
			this.auth.signOut()
		);
	}
	toJSON() {
		return Object.assign(
			Object.assign(
				{
					uid: this.uid,
					email: this.email || void 0,
					emailVerified: this.emailVerified,
					displayName: this.displayName || void 0,
					isAnonymous: this.isAnonymous,
					photoURL: this.photoURL || void 0,
					phoneNumber: this.phoneNumber || void 0,
					tenantId: this.tenantId || void 0,
					providerData: this.providerData.map((e) => Object.assign({}, e)),
					stsTokenManager: this.stsTokenManager.toJSON(),
					_redirectEventId: this._redirectEventId
				},
				this.metadata.toJSON()
			),
			{ apiKey: this.auth.config.apiKey, appName: this.auth.name }
		);
	}
	get refreshToken() {
		return this.stsTokenManager.refreshToken || '';
	}
	static _fromJSON(e, t) {
		var r, i, s, o, a, c, u, l;
		const h = (r = t.displayName) !== null && r !== void 0 ? r : void 0,
			d = (i = t.email) !== null && i !== void 0 ? i : void 0,
			g = (s = t.phoneNumber) !== null && s !== void 0 ? s : void 0,
			S = (o = t.photoURL) !== null && o !== void 0 ? o : void 0,
			P = (a = t.tenantId) !== null && a !== void 0 ? a : void 0,
			E = (c = t._redirectEventId) !== null && c !== void 0 ? c : void 0,
			L = (u = t.createdAt) !== null && u !== void 0 ? u : void 0,
			U = (l = t.lastLoginAt) !== null && l !== void 0 ? l : void 0,
			{ uid: G, emailVerified: he, isAnonymous: ot, providerData: Ie, stsTokenManager: at } = t;
		I(G && at, e, 'internal-error');
		const Xo = jt.fromJSON(this.name, at);
		I(typeof G == 'string', e, 'internal-error'),
			ze(h, e.name),
			ze(d, e.name),
			I(typeof he == 'boolean', e, 'internal-error'),
			I(typeof ot == 'boolean', e, 'internal-error'),
			ze(g, e.name),
			ze(S, e.name),
			ze(P, e.name),
			ze(E, e.name),
			ze(L, e.name),
			ze(U, e.name);
		const an = new xe({
			uid: G,
			auth: e,
			email: d,
			emailVerified: he,
			displayName: h,
			isAnonymous: ot,
			photoURL: S,
			phoneNumber: g,
			tenantId: P,
			stsTokenManager: Xo,
			createdAt: L,
			lastLoginAt: U
		});
		return (
			Ie && Array.isArray(Ie) && (an.providerData = Ie.map((ur) => Object.assign({}, ur))),
			E && (an._redirectEventId = E),
			an
		);
	}
	static async _fromIdTokenResponse(e, t, r = !1) {
		const i = new jt();
		i.updateFromServerResponse(t);
		const s = new xe({ uid: t.localId, auth: e, stsTokenManager: i, isAnonymous: r });
		return await Wr(s), s;
	}
	static async _fromGetAccountInfoResponse(e, t, r) {
		const i = t.users[0];
		I(i.localId !== void 0, 'internal-error');
		const s = i.providerUserInfo !== void 0 ? Hh(i.providerUserInfo) : [],
			o = !(i.email && i.passwordHash) && !(s != null && s.length),
			a = new jt();
		a.updateFromIdToken(r);
		const c = new xe({ uid: i.localId, auth: e, stsTokenManager: a, isAnonymous: o }),
			u = {
				uid: i.localId,
				displayName: i.displayName || null,
				photoURL: i.photoUrl || null,
				email: i.email || null,
				emailVerified: i.emailVerified || !1,
				phoneNumber: i.phoneNumber || null,
				tenantId: i.tenantId || null,
				providerData: s,
				metadata: new Os(i.createdAt, i.lastLoginAt),
				isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length)
			};
		return Object.assign(c, u), c;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _c = new Map();
function Fe(n) {
	$e(n instanceof Function, 'Expected a class definition');
	let e = _c.get(n);
	return e
		? ($e(e instanceof n, 'Instance stored in cache mismatched with class'), e)
		: ((e = new n()), _c.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Wh {
	constructor() {
		(this.type = 'NONE'), (this.storage = {});
	}
	async _isAvailable() {
		return !0;
	}
	async _set(e, t) {
		this.storage[e] = t;
	}
	async _get(e) {
		const t = this.storage[e];
		return t === void 0 ? null : t;
	}
	async _remove(e) {
		delete this.storage[e];
	}
	_addListener(e, t) {}
	_removeListener(e, t) {}
}
Wh.type = 'NONE';
const yc = Wh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rr(n, e, t) {
	return `firebase:${n}:${e}:${t}`;
}
class qt {
	constructor(e, t, r) {
		(this.persistence = e), (this.auth = t), (this.userKey = r);
		const { config: i, name: s } = this.auth;
		(this.fullUserKey = Rr(this.userKey, i.apiKey, s)),
			(this.fullPersistenceKey = Rr('persistence', i.apiKey, s)),
			(this.boundEventHandler = t._onStorageEvent.bind(t)),
			this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
	}
	setCurrentUser(e) {
		return this.persistence._set(this.fullUserKey, e.toJSON());
	}
	async getCurrentUser() {
		const e = await this.persistence._get(this.fullUserKey);
		return e ? xe._fromJSON(this.auth, e) : null;
	}
	removeCurrentUser() {
		return this.persistence._remove(this.fullUserKey);
	}
	savePersistenceForRedirect() {
		return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
	}
	async setPersistence(e) {
		if (this.persistence === e) return;
		const t = await this.getCurrentUser();
		if ((await this.removeCurrentUser(), (this.persistence = e), t)) return this.setCurrentUser(t);
	}
	delete() {
		this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
	}
	static async create(e, t, r = 'authUser') {
		if (!t.length) return new qt(Fe(yc), e, r);
		const i = (
			await Promise.all(
				t.map(async (u) => {
					if (await u._isAvailable()) return u;
				})
			)
		).filter((u) => u);
		let s = i[0] || Fe(yc);
		const o = Rr(r, e.config.apiKey, e.name);
		let a = null;
		for (const u of t)
			try {
				const l = await u._get(o);
				if (l) {
					const h = xe._fromJSON(e, l);
					u !== s && (a = h), (s = u);
					break;
				}
			} catch {}
		const c = i.filter((u) => u._shouldAllowMigration);
		return !s._shouldAllowMigration || !c.length
			? new qt(s, e, r)
			: ((s = c[0]),
				a && (await s._set(o, a.toJSON())),
				await Promise.all(
					t.map(async (u) => {
						if (u !== s)
							try {
								await u._remove(o);
							} catch {}
					})
				),
				new qt(s, e, r));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vc(n) {
	const e = n.toLowerCase();
	if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/')) return 'Opera';
	if (Qh(e)) return 'IEMobile';
	if (e.includes('msie') || e.includes('trident/')) return 'IE';
	if (e.includes('edge/')) return 'Edge';
	if (Kh(e)) return 'Firefox';
	if (e.includes('silk/')) return 'Silk';
	if (Yh(e)) return 'Blackberry';
	if (Xh(e)) return 'Webos';
	if (Ko(e)) return 'Safari';
	if ((e.includes('chrome/') || Gh(e)) && !e.includes('edge/')) return 'Chrome';
	if (Jh(e)) return 'Android';
	{
		const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
			r = n.match(t);
		if ((r == null ? void 0 : r.length) === 2) return r[1];
	}
	return 'Other';
}
function Kh(n = q()) {
	return /firefox\//i.test(n);
}
function Ko(n = q()) {
	const e = n.toLowerCase();
	return (
		e.includes('safari/') &&
		!e.includes('chrome/') &&
		!e.includes('crios/') &&
		!e.includes('android')
	);
}
function Gh(n = q()) {
	return /crios\//i.test(n);
}
function Qh(n = q()) {
	return /iemobile/i.test(n);
}
function Jh(n = q()) {
	return /android/i.test(n);
}
function Yh(n = q()) {
	return /blackberry/i.test(n);
}
function Xh(n = q()) {
	return /webos/i.test(n);
}
function bi(n = q()) {
	return /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n));
}
function Wv(n = q()) {
	var e;
	return bi(n) && !!(!((e = window.navigator) === null || e === void 0) && e.standalone);
}
function Kv() {
	return Dd() && document.documentMode === 10;
}
function Zh(n = q()) {
	return bi(n) || Jh(n) || Xh(n) || Yh(n) || /windows phone/i.test(n) || Qh(n);
}
function Gv() {
	try {
		return !!(window && window !== window.top);
	} catch {
		return !1;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ed(n, e = []) {
	let t;
	switch (n) {
		case 'Browser':
			t = vc(q());
			break;
		case 'Worker':
			t = `${vc(q())}-${n}`;
			break;
		default:
			t = n;
	}
	const r = e.length ? e.join(',') : 'FirebaseCore-web';
	return `${t}/JsCore/${Xt}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qv {
	constructor(e) {
		(this.auth = e), (this.queue = []);
	}
	pushCallback(e, t) {
		const r = (s) =>
			new Promise((o, a) => {
				try {
					const c = e(s);
					o(c);
				} catch (c) {
					a(c);
				}
			});
		(r.onAbort = t), this.queue.push(r);
		const i = this.queue.length - 1;
		return () => {
			this.queue[i] = () => Promise.resolve();
		};
	}
	async runMiddleware(e) {
		if (this.auth.currentUser === e) return;
		const t = [];
		try {
			for (const r of this.queue) await r(e), r.onAbort && t.push(r.onAbort);
		} catch (r) {
			t.reverse();
			for (const i of t)
				try {
					i();
				} catch {}
			throw this.auth._errorFactory.create('login-blocked', {
				originalMessage: r == null ? void 0 : r.message
			});
		}
	}
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Jv(n, e = {}) {
	return st(n, 'GET', '/v2/passwordPolicy', it(n, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yv = 6;
class Xv {
	constructor(e) {
		var t, r, i, s;
		const o = e.customStrengthOptions;
		(this.customStrengthOptions = {}),
			(this.customStrengthOptions.minPasswordLength =
				(t = o.minPasswordLength) !== null && t !== void 0 ? t : Yv),
			o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
			o.containsLowercaseCharacter !== void 0 &&
				(this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter),
			o.containsUppercaseCharacter !== void 0 &&
				(this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter),
			o.containsNumericCharacter !== void 0 &&
				(this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter),
			o.containsNonAlphanumericCharacter !== void 0 &&
				(this.customStrengthOptions.containsNonAlphanumericCharacter =
					o.containsNonAlphanumericCharacter),
			(this.enforcementState = e.enforcementState),
			this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' && (this.enforcementState = 'OFF'),
			(this.allowedNonAlphanumericCharacters =
				(i =
					(r = e.allowedNonAlphanumericCharacters) === null || r === void 0
						? void 0
						: r.join('')) !== null && i !== void 0
					? i
					: ''),
			(this.forceUpgradeOnSignin = (s = e.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
			(this.schemaVersion = e.schemaVersion);
	}
	validatePassword(e) {
		var t, r, i, s, o, a;
		const c = { isValid: !0, passwordPolicy: this };
		return (
			this.validatePasswordLengthOptions(e, c),
			this.validatePasswordCharacterOptions(e, c),
			c.isValid && (c.isValid = (t = c.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0),
			c.isValid && (c.isValid = (r = c.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
			c.isValid && (c.isValid = (i = c.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
			c.isValid && (c.isValid = (s = c.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
			c.isValid && (c.isValid = (o = c.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
			c.isValid &&
				(c.isValid = (a = c.containsNonAlphanumericCharacter) !== null && a !== void 0 ? a : !0),
			c
		);
	}
	validatePasswordLengthOptions(e, t) {
		const r = this.customStrengthOptions.minPasswordLength,
			i = this.customStrengthOptions.maxPasswordLength;
		r && (t.meetsMinPasswordLength = e.length >= r),
			i && (t.meetsMaxPasswordLength = e.length <= i);
	}
	validatePasswordCharacterOptions(e, t) {
		this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
		let r;
		for (let i = 0; i < e.length; i++)
			(r = e.charAt(i)),
				this.updatePasswordCharacterOptionsStatuses(
					t,
					r >= 'a' && r <= 'z',
					r >= 'A' && r <= 'Z',
					r >= '0' && r <= '9',
					this.allowedNonAlphanumericCharacters.includes(r)
				);
	}
	updatePasswordCharacterOptionsStatuses(e, t, r, i, s) {
		this.customStrengthOptions.containsLowercaseLetter &&
			(e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
			this.customStrengthOptions.containsUppercaseLetter &&
				(e.containsUppercaseLetter || (e.containsUppercaseLetter = r)),
			this.customStrengthOptions.containsNumericCharacter &&
				(e.containsNumericCharacter || (e.containsNumericCharacter = i)),
			this.customStrengthOptions.containsNonAlphanumericCharacter &&
				(e.containsNonAlphanumericCharacter || (e.containsNonAlphanumericCharacter = s));
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zv {
	constructor(e, t, r, i) {
		(this.app = e),
			(this.heartbeatServiceProvider = t),
			(this.appCheckServiceProvider = r),
			(this.config = i),
			(this.currentUser = null),
			(this.emulatorConfig = null),
			(this.operations = Promise.resolve()),
			(this.authStateSubscription = new Ec(this)),
			(this.idTokenSubscription = new Ec(this)),
			(this.beforeStateQueue = new Qv(this)),
			(this.redirectUser = null),
			(this.isProactiveRefreshEnabled = !1),
			(this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
			(this._canInitEmulator = !0),
			(this._isInitialized = !1),
			(this._deleted = !1),
			(this._initializationPromise = null),
			(this._popupRedirectResolver = null),
			(this._errorFactory = Uh),
			(this._agentRecaptchaConfig = null),
			(this._tenantRecaptchaConfigs = {}),
			(this._projectPasswordPolicy = null),
			(this._tenantPasswordPolicies = {}),
			(this.lastNotifiedUid = void 0),
			(this.languageCode = null),
			(this.tenantId = null),
			(this.settings = { appVerificationDisabledForTesting: !1 }),
			(this.frameworks = []),
			(this.name = e.name),
			(this.clientVersion = i.sdkClientVersion);
	}
	_initializeWithPersistence(e, t) {
		return (
			t && (this._popupRedirectResolver = Fe(t)),
			(this._initializationPromise = this.queue(async () => {
				var r, i;
				if (
					!this._deleted &&
					((this.persistenceManager = await qt.create(this, e)), !this._deleted)
				) {
					if (
						!((r = this._popupRedirectResolver) === null || r === void 0) &&
						r._shouldInitProactively
					)
						try {
							await this._popupRedirectResolver._initialize(this);
						} catch {}
					await this.initializeCurrentUser(t),
						(this.lastNotifiedUid =
							((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null),
						!this._deleted && (this._isInitialized = !0);
				}
			})),
			this._initializationPromise
		);
	}
	async _onStorageEvent() {
		if (this._deleted) return;
		const e = await this.assertedPersistence.getCurrentUser();
		if (!(!this.currentUser && !e)) {
			if (this.currentUser && e && this.currentUser.uid === e.uid) {
				this._currentUser._assign(e), await this.currentUser.getIdToken();
				return;
			}
			await this._updateCurrentUser(e, !0);
		}
	}
	async initializeCurrentUserFromIdToken(e) {
		try {
			const t = await zh(this, { idToken: e }),
				r = await xe._fromGetAccountInfoResponse(this, t, e);
			await this.directlySetCurrentUser(r);
		} catch (t) {
			console.warn('FirebaseServerApp could not login user with provided authIdToken: ', t),
				await this.directlySetCurrentUser(null);
		}
	}
	async initializeCurrentUser(e) {
		var t;
		if (we(this.app)) {
			const o = this.app.settings.authIdToken;
			return o
				? new Promise((a) => {
						setTimeout(() => this.initializeCurrentUserFromIdToken(o).then(a, a));
					})
				: this.directlySetCurrentUser(null);
		}
		const r = await this.assertedPersistence.getCurrentUser();
		let i = r,
			s = !1;
		if (e && this.config.authDomain) {
			await this.getOrInitRedirectPersistenceManager();
			const o = (t = this.redirectUser) === null || t === void 0 ? void 0 : t._redirectEventId,
				a = i == null ? void 0 : i._redirectEventId,
				c = await this.tryRedirectSignIn(e);
			(!o || o === a) && c != null && c.user && ((i = c.user), (s = !0));
		}
		if (!i) return this.directlySetCurrentUser(null);
		if (!i._redirectEventId) {
			if (s)
				try {
					await this.beforeStateQueue.runMiddleware(i);
				} catch (o) {
					(i = r),
						this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
				}
			return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
		}
		return (
			I(this._popupRedirectResolver, this, 'argument-error'),
			await this.getOrInitRedirectPersistenceManager(),
			this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
				? this.directlySetCurrentUser(i)
				: this.reloadAndSetCurrentUserOrClear(i)
		);
	}
	async tryRedirectSignIn(e) {
		let t = null;
		try {
			t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
		} catch {
			await this._setRedirectUser(null);
		}
		return t;
	}
	async reloadAndSetCurrentUserOrClear(e) {
		try {
			await Wr(e);
		} catch (t) {
			if ((t == null ? void 0 : t.code) !== 'auth/network-request-failed')
				return this.directlySetCurrentUser(null);
		}
		return this.directlySetCurrentUser(e);
	}
	useDeviceLanguage() {
		this.languageCode = Dv();
	}
	async _delete() {
		this._deleted = !0;
	}
	async updateCurrentUser(e) {
		if (we(this.app)) return Promise.reject(Be(this));
		const t = e ? ce(e) : null;
		return (
			t && I(t.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
			this._updateCurrentUser(t && t._clone(this))
		);
	}
	async _updateCurrentUser(e, t = !1) {
		if (!this._deleted)
			return (
				e && I(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
				t || (await this.beforeStateQueue.runMiddleware(e)),
				this.queue(async () => {
					await this.directlySetCurrentUser(e), this.notifyAuthListeners();
				})
			);
	}
	async signOut() {
		return we(this.app)
			? Promise.reject(Be(this))
			: (await this.beforeStateQueue.runMiddleware(null),
				(this.redirectPersistenceManager || this._popupRedirectResolver) &&
					(await this._setRedirectUser(null)),
				this._updateCurrentUser(null, !0));
	}
	setPersistence(e) {
		return we(this.app)
			? Promise.reject(Be(this))
			: this.queue(async () => {
					await this.assertedPersistence.setPersistence(Fe(e));
				});
	}
	_getRecaptchaConfig() {
		return this.tenantId == null
			? this._agentRecaptchaConfig
			: this._tenantRecaptchaConfigs[this.tenantId];
	}
	async validatePassword(e) {
		this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
		const t = this._getPasswordPolicyInternal();
		return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
			? Promise.reject(this._errorFactory.create('unsupported-password-policy-schema-version', {}))
			: t.validatePassword(e);
	}
	_getPasswordPolicyInternal() {
		return this.tenantId === null
			? this._projectPasswordPolicy
			: this._tenantPasswordPolicies[this.tenantId];
	}
	async _updatePasswordPolicy() {
		const e = await Jv(this),
			t = new Xv(e);
		this.tenantId === null
			? (this._projectPasswordPolicy = t)
			: (this._tenantPasswordPolicies[this.tenantId] = t);
	}
	_getPersistence() {
		return this.assertedPersistence.persistence.type;
	}
	_updateErrorMap(e) {
		this._errorFactory = new St('auth', 'Firebase', e());
	}
	onAuthStateChanged(e, t, r) {
		return this.registerStateListener(this.authStateSubscription, e, t, r);
	}
	beforeAuthStateChanged(e, t) {
		return this.beforeStateQueue.pushCallback(e, t);
	}
	onIdTokenChanged(e, t, r) {
		return this.registerStateListener(this.idTokenSubscription, e, t, r);
	}
	authStateReady() {
		return new Promise((e, t) => {
			if (this.currentUser) e();
			else {
				const r = this.onAuthStateChanged(() => {
					r(), e();
				}, t);
			}
		});
	}
	async revokeAccessToken(e) {
		if (this.currentUser) {
			const t = await this.currentUser.getIdToken(),
				r = { providerId: 'apple.com', tokenType: 'ACCESS_TOKEN', token: e, idToken: t };
			this.tenantId != null && (r.tenantId = this.tenantId), await Hv(this, r);
		}
	}
	toJSON() {
		var e;
		return {
			apiKey: this.config.apiKey,
			authDomain: this.config.authDomain,
			appName: this.name,
			currentUser: (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON()
		};
	}
	async _setRedirectUser(e, t) {
		const r = await this.getOrInitRedirectPersistenceManager(t);
		return e === null ? r.removeCurrentUser() : r.setCurrentUser(e);
	}
	async getOrInitRedirectPersistenceManager(e) {
		if (!this.redirectPersistenceManager) {
			const t = (e && Fe(e)) || this._popupRedirectResolver;
			I(t, this, 'argument-error'),
				(this.redirectPersistenceManager = await qt.create(
					this,
					[Fe(t._redirectPersistence)],
					'redirectUser'
				)),
				(this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
		}
		return this.redirectPersistenceManager;
	}
	async _redirectUserForId(e) {
		var t, r;
		return (
			this._isInitialized && (await this.queue(async () => {})),
			((t = this._currentUser) === null || t === void 0 ? void 0 : t._redirectEventId) === e
				? this._currentUser
				: ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === e
					? this.redirectUser
					: null
		);
	}
	async _persistUserIfCurrent(e) {
		if (e === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(e));
	}
	_notifyListenersIfCurrent(e) {
		e === this.currentUser && this.notifyAuthListeners();
	}
	_key() {
		return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
	}
	_startProactiveRefresh() {
		(this.isProactiveRefreshEnabled = !0),
			this.currentUser && this._currentUser._startProactiveRefresh();
	}
	_stopProactiveRefresh() {
		(this.isProactiveRefreshEnabled = !1),
			this.currentUser && this._currentUser._stopProactiveRefresh();
	}
	get _currentUser() {
		return this.currentUser;
	}
	notifyAuthListeners() {
		var e, t;
		if (!this._isInitialized) return;
		this.idTokenSubscription.next(this.currentUser);
		const r =
			(t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !== null &&
			t !== void 0
				? t
				: null;
		this.lastNotifiedUid !== r &&
			((this.lastNotifiedUid = r), this.authStateSubscription.next(this.currentUser));
	}
	registerStateListener(e, t, r, i) {
		if (this._deleted) return () => {};
		const s = typeof t == 'function' ? t : t.next.bind(t);
		let o = !1;
		const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
		if (
			(I(a, this, 'internal-error'),
			a.then(() => {
				o || s(this.currentUser);
			}),
			typeof t == 'function')
		) {
			const c = e.addObserver(t, r, i);
			return () => {
				(o = !0), c();
			};
		} else {
			const c = e.addObserver(t);
			return () => {
				(o = !0), c();
			};
		}
	}
	async directlySetCurrentUser(e) {
		this.currentUser && this.currentUser !== e && this._currentUser._stopProactiveRefresh(),
			e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
			(this.currentUser = e),
			e
				? await this.assertedPersistence.setCurrentUser(e)
				: await this.assertedPersistence.removeCurrentUser();
	}
	queue(e) {
		return (this.operations = this.operations.then(e, e)), this.operations;
	}
	get assertedPersistence() {
		return I(this.persistenceManager, this, 'internal-error'), this.persistenceManager;
	}
	_logFramework(e) {
		!e ||
			this.frameworks.includes(e) ||
			(this.frameworks.push(e),
			this.frameworks.sort(),
			(this.clientVersion = ed(this.config.clientPlatform, this._getFrameworks())));
	}
	_getFrameworks() {
		return this.frameworks;
	}
	async _getAdditionalHeaders() {
		var e;
		const t = { 'X-Client-Version': this.clientVersion };
		this.app.options.appId && (t['X-Firebase-gmpid'] = this.app.options.appId);
		const r = await ((e = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) === null ||
		e === void 0
			? void 0
			: e.getHeartbeatsHeader());
		r && (t['X-Firebase-Client'] = r);
		const i = await this._getAppCheckToken();
		return i && (t['X-Firebase-AppCheck'] = i), t;
	}
	async _getAppCheckToken() {
		var e;
		const t = await ((e = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null ||
		e === void 0
			? void 0
			: e.getToken());
		return (
			t != null && t.error && Cv(`Error while retrieving App Check token: ${t.error}`),
			t == null ? void 0 : t.token
		);
	}
}
function kt(n) {
	return ce(n);
}
class Ec {
	constructor(e) {
		(this.auth = e), (this.observer = null), (this.addObserver = Fd((t) => (this.observer = t)));
	}
	get next() {
		return I(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ki = {
	async loadJS() {
		throw new Error('Unable to load external scripts');
	},
	recaptchaV2Script: '',
	recaptchaEnterpriseScript: '',
	gapiScript: ''
};
function eE(n) {
	ki = n;
}
function td(n) {
	return ki.loadJS(n);
}
function tE() {
	return ki.recaptchaEnterpriseScript;
}
function nE() {
	return ki.gapiScript;
}
function rE(n) {
	return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const iE = 'recaptcha-enterprise',
	sE = 'NO_RECAPTCHA';
class oE {
	constructor(e) {
		(this.type = iE), (this.auth = kt(e));
	}
	async verify(e = 'verify', t = !1) {
		async function r(s) {
			if (!t) {
				if (s.tenantId == null && s._agentRecaptchaConfig != null)
					return s._agentRecaptchaConfig.siteKey;
				if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
					return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
			}
			return new Promise(async (o, a) => {
				xv(s, { clientType: 'CLIENT_TYPE_WEB', version: 'RECAPTCHA_ENTERPRISE' })
					.then((c) => {
						if (c.recaptchaKey === void 0) a(new Error('recaptcha Enterprise site key undefined'));
						else {
							const u = new Mv(c);
							return (
								s.tenantId == null
									? (s._agentRecaptchaConfig = u)
									: (s._tenantRecaptchaConfigs[s.tenantId] = u),
								o(u.siteKey)
							);
						}
					})
					.catch((c) => {
						a(c);
					});
			});
		}
		function i(s, o, a) {
			const c = window.grecaptcha;
			gc(c)
				? c.enterprise.ready(() => {
						c.enterprise
							.execute(s, { action: e })
							.then((u) => {
								o(u);
							})
							.catch(() => {
								o(sE);
							});
					})
				: a(Error('No reCAPTCHA enterprise script loaded.'));
		}
		return new Promise((s, o) => {
			r(this.auth)
				.then((a) => {
					if (!t && gc(window.grecaptcha)) i(a, s, o);
					else {
						if (typeof window > 'u') {
							o(new Error('RecaptchaVerifier is only supported in browser'));
							return;
						}
						let c = tE();
						c.length !== 0 && (c += a),
							td(c)
								.then(() => {
									i(a, s, o);
								})
								.catch((u) => {
									o(u);
								});
					}
				})
				.catch((a) => {
					o(a);
				});
		});
	}
}
async function Ic(n, e, t, r = !1) {
	const i = new oE(n);
	let s;
	try {
		s = await i.verify(t);
	} catch {
		s = await i.verify(t, !0);
	}
	const o = Object.assign({}, e);
	return (
		r ? Object.assign(o, { captchaResp: s }) : Object.assign(o, { captchaResponse: s }),
		Object.assign(o, { clientType: 'CLIENT_TYPE_WEB' }),
		Object.assign(o, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
		o
	);
}
async function Ls(n, e, t, r) {
	var i;
	if (
		!((i = n._getRecaptchaConfig()) === null || i === void 0) &&
		i.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
	) {
		const s = await Ic(n, e, t, t === 'getOobCode');
		return r(n, s);
	} else
		return r(n, e).catch(async (s) => {
			if (s.code === 'auth/missing-recaptcha-token') {
				console.log(
					`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
				);
				const o = await Ic(n, e, t, t === 'getOobCode');
				return r(n, o);
			} else return Promise.reject(s);
		});
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aE(n, e) {
	const t = zn(n, 'auth');
	if (t.isInitialized()) {
		const i = t.getImmediate(),
			s = t.getOptions();
		if (br(s, e ?? {})) return i;
		ve(i, 'already-initialized');
	}
	return t.initialize({ options: e });
}
function cE(n, e) {
	const t = (e == null ? void 0 : e.persistence) || [],
		r = (Array.isArray(t) ? t : [t]).map(Fe);
	e != null && e.errorMap && n._updateErrorMap(e.errorMap),
		n._initializeWithPersistence(r, e == null ? void 0 : e.popupRedirectResolver);
}
function uE(n, e, t) {
	const r = kt(n);
	I(r._canInitEmulator, r, 'emulator-config-failed'),
		I(/^https?:\/\//.test(e), r, 'invalid-emulator-scheme');
	const i = !!(t != null && t.disableWarnings),
		s = nd(e),
		{ host: o, port: a } = lE(e),
		c = a === null ? '' : `:${a}`;
	(r.config.emulator = { url: `${s}//${o}${c}/` }),
		(r.settings.appVerificationDisabledForTesting = !0),
		(r.emulatorConfig = Object.freeze({
			host: o,
			port: a,
			protocol: s.replace(':', ''),
			options: Object.freeze({ disableWarnings: i })
		})),
		i || hE();
}
function nd(n) {
	const e = n.indexOf(':');
	return e < 0 ? '' : n.substr(0, e + 1);
}
function lE(n) {
	const e = nd(n),
		t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
	if (!t) return { host: '', port: null };
	const r = t[2].split('@').pop() || '',
		i = /^(\[[^\]]+\])(:|$)/.exec(r);
	if (i) {
		const s = i[1];
		return { host: s, port: Tc(r.substr(s.length + 1)) };
	} else {
		const [s, o] = r.split(':');
		return { host: s, port: Tc(o) };
	}
}
function Tc(n) {
	if (!n) return null;
	const e = Number(n);
	return isNaN(e) ? null : e;
}
function hE() {
	function n() {
		const e = document.createElement('p'),
			t = e.style;
		(e.innerText = 'Running in emulator mode. Do not use with production credentials.'),
			(t.position = 'fixed'),
			(t.width = '100%'),
			(t.backgroundColor = '#ffffff'),
			(t.border = '.1em solid #000000'),
			(t.color = '#b50000'),
			(t.bottom = '0px'),
			(t.left = '0px'),
			(t.margin = '0px'),
			(t.zIndex = '10000'),
			(t.textAlign = 'center'),
			e.classList.add('firebase-emulator-warning'),
			document.body.appendChild(e);
	}
	typeof console < 'u' &&
		typeof console.info == 'function' &&
		console.info(
			'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
		),
		typeof window < 'u' &&
			typeof document < 'u' &&
			(document.readyState === 'loading' ? window.addEventListener('DOMContentLoaded', n) : n());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Go {
	constructor(e, t) {
		(this.providerId = e), (this.signInMethod = t);
	}
	toJSON() {
		return Me('not implemented');
	}
	_getIdTokenResponse(e) {
		return Me('not implemented');
	}
	_linkToIdToken(e, t) {
		return Me('not implemented');
	}
	_getReauthenticationResolver(e) {
		return Me('not implemented');
	}
}
async function dE(n, e) {
	return st(n, 'POST', '/v1/accounts:signUp', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fE(n, e) {
	return or(n, 'POST', '/v1/accounts:signInWithPassword', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function pE(n, e) {
	return or(n, 'POST', '/v1/accounts:signInWithEmailLink', it(n, e));
}
async function gE(n, e) {
	return or(n, 'POST', '/v1/accounts:signInWithEmailLink', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qn extends Go {
	constructor(e, t, r, i = null) {
		super('password', r), (this._email = e), (this._password = t), (this._tenantId = i);
	}
	static _fromEmailAndPassword(e, t) {
		return new qn(e, t, 'password');
	}
	static _fromEmailAndCode(e, t, r = null) {
		return new qn(e, t, 'emailLink', r);
	}
	toJSON() {
		return {
			email: this._email,
			password: this._password,
			signInMethod: this.signInMethod,
			tenantId: this._tenantId
		};
	}
	static fromJSON(e) {
		const t = typeof e == 'string' ? JSON.parse(e) : e;
		if (t != null && t.email && t != null && t.password) {
			if (t.signInMethod === 'password') return this._fromEmailAndPassword(t.email, t.password);
			if (t.signInMethod === 'emailLink')
				return this._fromEmailAndCode(t.email, t.password, t.tenantId);
		}
		return null;
	}
	async _getIdTokenResponse(e) {
		switch (this.signInMethod) {
			case 'password':
				const t = {
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: 'CLIENT_TYPE_WEB'
				};
				return Ls(e, t, 'signInWithPassword', fE);
			case 'emailLink':
				return pE(e, { email: this._email, oobCode: this._password });
			default:
				ve(e, 'internal-error');
		}
	}
	async _linkToIdToken(e, t) {
		switch (this.signInMethod) {
			case 'password':
				const r = {
					idToken: t,
					returnSecureToken: !0,
					email: this._email,
					password: this._password,
					clientType: 'CLIENT_TYPE_WEB'
				};
				return Ls(e, r, 'signUpPassword', dE);
			case 'emailLink':
				return gE(e, { idToken: t, email: this._email, oobCode: this._password });
			default:
				ve(e, 'internal-error');
		}
	}
	_getReauthenticationResolver(e) {
		return this._getIdTokenResponse(e);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $t(n, e) {
	return or(n, 'POST', '/v1/accounts:signInWithIdp', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mE = 'http://localhost';
class At extends Go {
	constructor() {
		super(...arguments), (this.pendingToken = null);
	}
	static _fromParams(e) {
		const t = new At(e.providerId, e.signInMethod);
		return (
			e.idToken || e.accessToken
				? (e.idToken && (t.idToken = e.idToken),
					e.accessToken && (t.accessToken = e.accessToken),
					e.nonce && !e.pendingToken && (t.nonce = e.nonce),
					e.pendingToken && (t.pendingToken = e.pendingToken))
				: e.oauthToken && e.oauthTokenSecret
					? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
					: ve('argument-error'),
			t
		);
	}
	toJSON() {
		return {
			idToken: this.idToken,
			accessToken: this.accessToken,
			secret: this.secret,
			nonce: this.nonce,
			pendingToken: this.pendingToken,
			providerId: this.providerId,
			signInMethod: this.signInMethod
		};
	}
	static fromJSON(e) {
		const t = typeof e == 'string' ? JSON.parse(e) : e,
			{ providerId: r, signInMethod: i } = t,
			s = $o(t, ['providerId', 'signInMethod']);
		if (!r || !i) return null;
		const o = new At(r, i);
		return (
			(o.idToken = s.idToken || void 0),
			(o.accessToken = s.accessToken || void 0),
			(o.secret = s.secret),
			(o.nonce = s.nonce),
			(o.pendingToken = s.pendingToken || null),
			o
		);
	}
	_getIdTokenResponse(e) {
		const t = this.buildRequest();
		return $t(e, t);
	}
	_linkToIdToken(e, t) {
		const r = this.buildRequest();
		return (r.idToken = t), $t(e, r);
	}
	_getReauthenticationResolver(e) {
		const t = this.buildRequest();
		return (t.autoCreate = !1), $t(e, t);
	}
	buildRequest() {
		const e = { requestUri: mE, returnSecureToken: !0 };
		if (this.pendingToken) e.pendingToken = this.pendingToken;
		else {
			const t = {};
			this.idToken && (t.id_token = this.idToken),
				this.accessToken && (t.access_token = this.accessToken),
				this.secret && (t.oauth_token_secret = this.secret),
				(t.providerId = this.providerId),
				this.nonce && !this.pendingToken && (t.nonce = this.nonce),
				(e.postBody = $n(t));
		}
		return e;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _E(n) {
	switch (n) {
		case 'recoverEmail':
			return 'RECOVER_EMAIL';
		case 'resetPassword':
			return 'PASSWORD_RESET';
		case 'signIn':
			return 'EMAIL_SIGNIN';
		case 'verifyEmail':
			return 'VERIFY_EMAIL';
		case 'verifyAndChangeEmail':
			return 'VERIFY_AND_CHANGE_EMAIL';
		case 'revertSecondFactorAddition':
			return 'REVERT_SECOND_FACTOR_ADDITION';
		default:
			return null;
	}
}
function yE(n) {
	const e = hn(dn(n)).link,
		t = e ? hn(dn(e)).deep_link_id : null,
		r = hn(dn(n)).deep_link_id;
	return (r ? hn(dn(r)).link : null) || r || t || e || n;
}
class Qo {
	constructor(e) {
		var t, r, i, s, o, a;
		const c = hn(dn(e)),
			u = (t = c.apiKey) !== null && t !== void 0 ? t : null,
			l = (r = c.oobCode) !== null && r !== void 0 ? r : null,
			h = _E((i = c.mode) !== null && i !== void 0 ? i : null);
		I(u && l && h, 'argument-error'),
			(this.apiKey = u),
			(this.operation = h),
			(this.code = l),
			(this.continueUrl = (s = c.continueUrl) !== null && s !== void 0 ? s : null),
			(this.languageCode = (o = c.languageCode) !== null && o !== void 0 ? o : null),
			(this.tenantId = (a = c.tenantId) !== null && a !== void 0 ? a : null);
	}
	static parseLink(e) {
		const t = yE(e);
		try {
			return new Qo(t);
		} catch {
			return null;
		}
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class on {
	constructor() {
		this.providerId = on.PROVIDER_ID;
	}
	static credential(e, t) {
		return qn._fromEmailAndPassword(e, t);
	}
	static credentialWithLink(e, t) {
		const r = Qo.parseLink(t);
		return I(r, 'argument-error'), qn._fromEmailAndCode(e, r.code, r.tenantId);
	}
}
on.PROVIDER_ID = 'password';
on.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
on.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rd {
	constructor(e) {
		(this.providerId = e), (this.defaultLanguageCode = null), (this.customParameters = {});
	}
	setDefaultLanguage(e) {
		this.defaultLanguageCode = e;
	}
	setCustomParameters(e) {
		return (this.customParameters = e), this;
	}
	getCustomParameters() {
		return this.customParameters;
	}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar extends rd {
	constructor() {
		super(...arguments), (this.scopes = []);
	}
	addScope(e) {
		return this.scopes.includes(e) || this.scopes.push(e), this;
	}
	getScopes() {
		return [...this.scopes];
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class He extends ar {
	constructor() {
		super('facebook.com');
	}
	static credential(e) {
		return At._fromParams({
			providerId: He.PROVIDER_ID,
			signInMethod: He.FACEBOOK_SIGN_IN_METHOD,
			accessToken: e
		});
	}
	static credentialFromResult(e) {
		return He.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return He.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
		try {
			return He.credential(e.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
He.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
He.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class We extends ar {
	constructor() {
		super('google.com'), this.addScope('profile');
	}
	static credential(e, t) {
		return At._fromParams({
			providerId: We.PROVIDER_ID,
			signInMethod: We.GOOGLE_SIGN_IN_METHOD,
			idToken: e,
			accessToken: t
		});
	}
	static credentialFromResult(e) {
		return We.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return We.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e) return null;
		const { oauthIdToken: t, oauthAccessToken: r } = e;
		if (!t && !r) return null;
		try {
			return We.credential(t, r);
		} catch {
			return null;
		}
	}
}
We.GOOGLE_SIGN_IN_METHOD = 'google.com';
We.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ke extends ar {
	constructor() {
		super('github.com');
	}
	static credential(e) {
		return At._fromParams({
			providerId: Ke.PROVIDER_ID,
			signInMethod: Ke.GITHUB_SIGN_IN_METHOD,
			accessToken: e
		});
	}
	static credentialFromResult(e) {
		return Ke.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return Ke.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
		try {
			return Ke.credential(e.oauthAccessToken);
		} catch {
			return null;
		}
	}
}
Ke.GITHUB_SIGN_IN_METHOD = 'github.com';
Ke.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ge extends ar {
	constructor() {
		super('twitter.com');
	}
	static credential(e, t) {
		return At._fromParams({
			providerId: Ge.PROVIDER_ID,
			signInMethod: Ge.TWITTER_SIGN_IN_METHOD,
			oauthToken: e,
			oauthTokenSecret: t
		});
	}
	static credentialFromResult(e) {
		return Ge.credentialFromTaggedObject(e);
	}
	static credentialFromError(e) {
		return Ge.credentialFromTaggedObject(e.customData || {});
	}
	static credentialFromTaggedObject({ _tokenResponse: e }) {
		if (!e) return null;
		const { oauthAccessToken: t, oauthTokenSecret: r } = e;
		if (!t || !r) return null;
		try {
			return Ge.credential(t, r);
		} catch {
			return null;
		}
	}
}
Ge.TWITTER_SIGN_IN_METHOD = 'twitter.com';
Ge.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function vE(n, e) {
	return or(n, 'POST', '/v1/accounts:signUp', it(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rt {
	constructor(e) {
		(this.user = e.user),
			(this.providerId = e.providerId),
			(this._tokenResponse = e._tokenResponse),
			(this.operationType = e.operationType);
	}
	static async _fromIdTokenResponse(e, t, r, i = !1) {
		const s = await xe._fromIdTokenResponse(e, r, i),
			o = wc(r);
		return new Rt({ user: s, providerId: o, _tokenResponse: r, operationType: t });
	}
	static async _forOperation(e, t, r) {
		await e._updateTokensIfNecessary(r, !0);
		const i = wc(r);
		return new Rt({ user: e, providerId: i, _tokenResponse: r, operationType: t });
	}
}
function wc(n) {
	return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kr extends Ee {
	constructor(e, t, r, i) {
		var s;
		super(t.code, t.message),
			(this.operationType = r),
			(this.user = i),
			Object.setPrototypeOf(this, Kr.prototype),
			(this.customData = {
				appName: e.name,
				tenantId: (s = e.tenantId) !== null && s !== void 0 ? s : void 0,
				_serverResponse: t.customData._serverResponse,
				operationType: r
			});
	}
	static _fromErrorAndOperation(e, t, r, i) {
		return new Kr(e, t, r, i);
	}
}
function id(n, e, t, r) {
	return (
		e === 'reauthenticate' ? t._getReauthenticationResolver(n) : t._getIdTokenResponse(n)
	).catch((s) => {
		throw s.code === 'auth/multi-factor-auth-required' ? Kr._fromErrorAndOperation(n, s, e, r) : s;
	});
}
async function EE(n, e, t = !1) {
	const r = await jn(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
	return Rt._forOperation(n, 'link', r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function IE(n, e, t = !1) {
	const { auth: r } = n;
	if (we(r.app)) return Promise.reject(Be(r));
	const i = 'reauthenticate';
	try {
		const s = await jn(n, id(r, i, e, n), t);
		I(s.idToken, r, 'internal-error');
		const o = Wo(s.idToken);
		I(o, r, 'internal-error');
		const { sub: a } = o;
		return I(n.uid === a, r, 'user-mismatch'), Rt._forOperation(n, i, s);
	} catch (s) {
		throw ((s == null ? void 0 : s.code) === 'auth/user-not-found' && ve(r, 'user-mismatch'), s);
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sd(n, e, t = !1) {
	if (we(n.app)) return Promise.reject(Be(n));
	const r = 'signIn',
		i = await id(n, r, e),
		s = await Rt._fromIdTokenResponse(n, r, i);
	return t || (await n._updateCurrentUser(s.user)), s;
}
async function TE(n, e) {
	return sd(kt(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function od(n) {
	const e = kt(n);
	e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function wE(n, e, t) {
	if (we(n.app)) return Promise.reject(Be(n));
	const r = kt(n),
		o = await Ls(
			r,
			{ returnSecureToken: !0, email: e, password: t, clientType: 'CLIENT_TYPE_WEB' },
			'signUpPassword',
			vE
		).catch((c) => {
			throw (c.code === 'auth/password-does-not-meet-requirements' && od(n), c);
		}),
		a = await Rt._fromIdTokenResponse(r, 'signIn', o);
	return await r._updateCurrentUser(a.user), a;
}
function AE(n, e, t) {
	return we(n.app)
		? Promise.reject(Be(n))
		: TE(ce(n), on.credential(e, t)).catch(async (r) => {
				throw (r.code === 'auth/password-does-not-meet-requirements' && od(n), r);
			});
}
function RE(n, e, t, r) {
	return ce(n).onIdTokenChanged(e, t, r);
}
function SE(n, e, t) {
	return ce(n).beforeAuthStateChanged(e, t);
}
function PE(n) {
	return ce(n).signOut();
}
const Gr = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ad {
	constructor(e, t) {
		(this.storageRetriever = e), (this.type = t);
	}
	_isAvailable() {
		try {
			return this.storage
				? (this.storage.setItem(Gr, '1'), this.storage.removeItem(Gr), Promise.resolve(!0))
				: Promise.resolve(!1);
		} catch {
			return Promise.resolve(!1);
		}
	}
	_set(e, t) {
		return this.storage.setItem(e, JSON.stringify(t)), Promise.resolve();
	}
	_get(e) {
		const t = this.storage.getItem(e);
		return Promise.resolve(t ? JSON.parse(t) : null);
	}
	_remove(e) {
		return this.storage.removeItem(e), Promise.resolve();
	}
	get storage() {
		return this.storageRetriever();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function CE() {
	const n = q();
	return Ko(n) || bi(n);
}
const bE = 1e3,
	kE = 10;
class cd extends ad {
	constructor() {
		super(() => window.localStorage, 'LOCAL'),
			(this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
			(this.listeners = {}),
			(this.localCache = {}),
			(this.pollTimer = null),
			(this.safariLocalStorageNotSynced = CE() && Gv()),
			(this.fallbackToPolling = Zh()),
			(this._shouldAllowMigration = !0);
	}
	forAllChangedKeys(e) {
		for (const t of Object.keys(this.listeners)) {
			const r = this.storage.getItem(t),
				i = this.localCache[t];
			r !== i && e(t, i, r);
		}
	}
	onStorageEvent(e, t = !1) {
		if (!e.key) {
			this.forAllChangedKeys((o, a, c) => {
				this.notifyListeners(o, c);
			});
			return;
		}
		const r = e.key;
		if ((t ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
			const o = this.storage.getItem(r);
			if (e.newValue !== o)
				e.newValue !== null ? this.storage.setItem(r, e.newValue) : this.storage.removeItem(r);
			else if (this.localCache[r] === e.newValue && !t) return;
		}
		const i = () => {
				const o = this.storage.getItem(r);
				(!t && this.localCache[r] === o) || this.notifyListeners(r, o);
			},
			s = this.storage.getItem(r);
		Kv() && s !== e.newValue && e.newValue !== e.oldValue ? setTimeout(i, kE) : i();
	}
	notifyListeners(e, t) {
		this.localCache[e] = t;
		const r = this.listeners[e];
		if (r) for (const i of Array.from(r)) i(t && JSON.parse(t));
	}
	startPolling() {
		this.stopPolling(),
			(this.pollTimer = setInterval(() => {
				this.forAllChangedKeys((e, t, r) => {
					this.onStorageEvent(
						new StorageEvent('storage', { key: e, oldValue: t, newValue: r }),
						!0
					);
				});
			}, bE));
	}
	stopPolling() {
		this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
	}
	attachListener() {
		window.addEventListener('storage', this.boundEventHandler);
	}
	detachListener() {
		window.removeEventListener('storage', this.boundEventHandler);
	}
	_addListener(e, t) {
		Object.keys(this.listeners).length === 0 &&
			(this.fallbackToPolling ? this.startPolling() : this.attachListener()),
			this.listeners[e] ||
				((this.listeners[e] = new Set()), (this.localCache[e] = this.storage.getItem(e))),
			this.listeners[e].add(t);
	}
	_removeListener(e, t) {
		this.listeners[e] &&
			(this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]),
			Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
	}
	async _set(e, t) {
		await super._set(e, t), (this.localCache[e] = JSON.stringify(t));
	}
	async _get(e) {
		const t = await super._get(e);
		return (this.localCache[e] = JSON.stringify(t)), t;
	}
	async _remove(e) {
		await super._remove(e), delete this.localCache[e];
	}
}
cd.type = 'LOCAL';
const DE = cd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ud extends ad {
	constructor() {
		super(() => window.sessionStorage, 'SESSION');
	}
	_addListener(e, t) {}
	_removeListener(e, t) {}
}
ud.type = 'SESSION';
const ld = ud;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function VE(n) {
	return Promise.all(
		n.map(async (e) => {
			try {
				return { fulfilled: !0, value: await e };
			} catch (t) {
				return { fulfilled: !1, reason: t };
			}
		})
	);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Di {
	constructor(e) {
		(this.eventTarget = e),
			(this.handlersMap = {}),
			(this.boundEventHandler = this.handleEvent.bind(this));
	}
	static _getInstance(e) {
		const t = this.receivers.find((i) => i.isListeningto(e));
		if (t) return t;
		const r = new Di(e);
		return this.receivers.push(r), r;
	}
	isListeningto(e) {
		return this.eventTarget === e;
	}
	async handleEvent(e) {
		const t = e,
			{ eventId: r, eventType: i, data: s } = t.data,
			o = this.handlersMap[i];
		if (!(o != null && o.size)) return;
		t.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i });
		const a = Array.from(o).map(async (u) => u(t.origin, s)),
			c = await VE(a);
		t.ports[0].postMessage({ status: 'done', eventId: r, eventType: i, response: c });
	}
	_subscribe(e, t) {
		Object.keys(this.handlersMap).length === 0 &&
			this.eventTarget.addEventListener('message', this.boundEventHandler),
			this.handlersMap[e] || (this.handlersMap[e] = new Set()),
			this.handlersMap[e].add(t);
	}
	_unsubscribe(e, t) {
		this.handlersMap[e] && t && this.handlersMap[e].delete(t),
			(!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
			Object.keys(this.handlersMap).length === 0 &&
				this.eventTarget.removeEventListener('message', this.boundEventHandler);
	}
}
Di.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jo(n = '', e = 10) {
	let t = '';
	for (let r = 0; r < e; r++) t += Math.floor(Math.random() * 10);
	return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NE {
	constructor(e) {
		(this.target = e), (this.handlers = new Set());
	}
	removeMessageHandler(e) {
		e.messageChannel &&
			(e.messageChannel.port1.removeEventListener('message', e.onMessage),
			e.messageChannel.port1.close()),
			this.handlers.delete(e);
	}
	async _send(e, t, r = 50) {
		const i = typeof MessageChannel < 'u' ? new MessageChannel() : null;
		if (!i) throw new Error('connection_unavailable');
		let s, o;
		return new Promise((a, c) => {
			const u = Jo('', 20);
			i.port1.start();
			const l = setTimeout(() => {
				c(new Error('unsupported_event'));
			}, r);
			(o = {
				messageChannel: i,
				onMessage(h) {
					const d = h;
					if (d.data.eventId === u)
						switch (d.data.status) {
							case 'ack':
								clearTimeout(l),
									(s = setTimeout(() => {
										c(new Error('timeout'));
									}, 3e3));
								break;
							case 'done':
								clearTimeout(s), a(d.data.response);
								break;
							default:
								clearTimeout(l), clearTimeout(s), c(new Error('invalid_response'));
								break;
						}
				}
			}),
				this.handlers.add(o),
				i.port1.addEventListener('message', o.onMessage),
				this.target.postMessage({ eventType: e, eventId: u, data: t }, [i.port2]);
		}).finally(() => {
			o && this.removeMessageHandler(o);
		});
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ke() {
	return window;
}
function OE(n) {
	ke().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hd() {
	return typeof ke().WorkerGlobalScope < 'u' && typeof ke().importScripts == 'function';
}
async function LE() {
	if (!(navigator != null && navigator.serviceWorker)) return null;
	try {
		return (await navigator.serviceWorker.ready).active;
	} catch {
		return null;
	}
}
function ME() {
	var n;
	return (
		((n = navigator == null ? void 0 : navigator.serviceWorker) === null || n === void 0
			? void 0
			: n.controller) || null
	);
}
function xE() {
	return hd() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dd = 'firebaseLocalStorageDb',
	FE = 1,
	Qr = 'firebaseLocalStorage',
	fd = 'fbase_key';
class cr {
	constructor(e) {
		this.request = e;
	}
	toPromise() {
		return new Promise((e, t) => {
			this.request.addEventListener('success', () => {
				e(this.request.result);
			}),
				this.request.addEventListener('error', () => {
					t(this.request.error);
				});
		});
	}
}
function Vi(n, e) {
	return n.transaction([Qr], e ? 'readwrite' : 'readonly').objectStore(Qr);
}
function UE() {
	const n = indexedDB.deleteDatabase(dd);
	return new cr(n).toPromise();
}
function Ms() {
	const n = indexedDB.open(dd, FE);
	return new Promise((e, t) => {
		n.addEventListener('error', () => {
			t(n.error);
		}),
			n.addEventListener('upgradeneeded', () => {
				const r = n.result;
				try {
					r.createObjectStore(Qr, { keyPath: fd });
				} catch (i) {
					t(i);
				}
			}),
			n.addEventListener('success', async () => {
				const r = n.result;
				r.objectStoreNames.contains(Qr) ? e(r) : (r.close(), await UE(), e(await Ms()));
			});
	});
}
async function Ac(n, e, t) {
	const r = Vi(n, !0).put({ [fd]: e, value: t });
	return new cr(r).toPromise();
}
async function BE(n, e) {
	const t = Vi(n, !1).get(e),
		r = await new cr(t).toPromise();
	return r === void 0 ? null : r.value;
}
function Rc(n, e) {
	const t = Vi(n, !0).delete(e);
	return new cr(t).toPromise();
}
const jE = 800,
	qE = 3;
class pd {
	constructor() {
		(this.type = 'LOCAL'),
			(this._shouldAllowMigration = !0),
			(this.listeners = {}),
			(this.localCache = {}),
			(this.pollTimer = null),
			(this.pendingWrites = 0),
			(this.receiver = null),
			(this.sender = null),
			(this.serviceWorkerReceiverAvailable = !1),
			(this.activeServiceWorker = null),
			(this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
				() => {},
				() => {}
			));
	}
	async _openDb() {
		return this.db ? this.db : ((this.db = await Ms()), this.db);
	}
	async _withRetries(e) {
		let t = 0;
		for (;;)
			try {
				const r = await this._openDb();
				return await e(r);
			} catch (r) {
				if (t++ > qE) throw r;
				this.db && (this.db.close(), (this.db = void 0));
			}
	}
	async initializeServiceWorkerMessaging() {
		return hd() ? this.initializeReceiver() : this.initializeSender();
	}
	async initializeReceiver() {
		(this.receiver = Di._getInstance(xE())),
			this.receiver._subscribe('keyChanged', async (e, t) => ({
				keyProcessed: (await this._poll()).includes(t.key)
			})),
			this.receiver._subscribe('ping', async (e, t) => ['keyChanged']);
	}
	async initializeSender() {
		var e, t;
		if (((this.activeServiceWorker = await LE()), !this.activeServiceWorker)) return;
		this.sender = new NE(this.activeServiceWorker);
		const r = await this.sender._send('ping', {}, 800);
		r &&
			!((e = r[0]) === null || e === void 0) &&
			e.fulfilled &&
			!((t = r[0]) === null || t === void 0) &&
			t.value.includes('keyChanged') &&
			(this.serviceWorkerReceiverAvailable = !0);
	}
	async notifyServiceWorker(e) {
		if (!(!this.sender || !this.activeServiceWorker || ME() !== this.activeServiceWorker))
			try {
				await this.sender._send(
					'keyChanged',
					{ key: e },
					this.serviceWorkerReceiverAvailable ? 800 : 50
				);
			} catch {}
	}
	async _isAvailable() {
		try {
			if (!indexedDB) return !1;
			const e = await Ms();
			return await Ac(e, Gr, '1'), await Rc(e, Gr), !0;
		} catch {}
		return !1;
	}
	async _withPendingWrite(e) {
		this.pendingWrites++;
		try {
			await e();
		} finally {
			this.pendingWrites--;
		}
	}
	async _set(e, t) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((r) => Ac(r, e, t)),
				(this.localCache[e] = t),
				this.notifyServiceWorker(e)
			)
		);
	}
	async _get(e) {
		const t = await this._withRetries((r) => BE(r, e));
		return (this.localCache[e] = t), t;
	}
	async _remove(e) {
		return this._withPendingWrite(
			async () => (
				await this._withRetries((t) => Rc(t, e)),
				delete this.localCache[e],
				this.notifyServiceWorker(e)
			)
		);
	}
	async _poll() {
		const e = await this._withRetries((i) => {
			const s = Vi(i, !1).getAll();
			return new cr(s).toPromise();
		});
		if (!e) return [];
		if (this.pendingWrites !== 0) return [];
		const t = [],
			r = new Set();
		if (e.length !== 0)
			for (const { fbase_key: i, value: s } of e)
				r.add(i),
					JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
						(this.notifyListeners(i, s), t.push(i));
		for (const i of Object.keys(this.localCache))
			this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), t.push(i));
		return t;
	}
	notifyListeners(e, t) {
		this.localCache[e] = t;
		const r = this.listeners[e];
		if (r) for (const i of Array.from(r)) i(t);
	}
	startPolling() {
		this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), jE));
	}
	stopPolling() {
		this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
	}
	_addListener(e, t) {
		Object.keys(this.listeners).length === 0 && this.startPolling(),
			this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
			this.listeners[e].add(t);
	}
	_removeListener(e, t) {
		this.listeners[e] &&
			(this.listeners[e].delete(t), this.listeners[e].size === 0 && delete this.listeners[e]),
			Object.keys(this.listeners).length === 0 && this.stopPolling();
	}
}
pd.type = 'LOCAL';
const $E = pd;
new sr(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function zE(n, e) {
	return e ? Fe(e) : (I(n._popupRedirectResolver, n, 'argument-error'), n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Yo extends Go {
	constructor(e) {
		super('custom', 'custom'), (this.params = e);
	}
	_getIdTokenResponse(e) {
		return $t(e, this._buildIdpRequest());
	}
	_linkToIdToken(e, t) {
		return $t(e, this._buildIdpRequest(t));
	}
	_getReauthenticationResolver(e) {
		return $t(e, this._buildIdpRequest());
	}
	_buildIdpRequest(e) {
		const t = {
			requestUri: this.params.requestUri,
			sessionId: this.params.sessionId,
			postBody: this.params.postBody,
			tenantId: this.params.tenantId,
			pendingToken: this.params.pendingToken,
			returnSecureToken: !0,
			returnIdpCredential: !0
		};
		return e && (t.idToken = e), t;
	}
}
function HE(n) {
	return sd(n.auth, new Yo(n), n.bypassAuthState);
}
function WE(n) {
	const { auth: e, user: t } = n;
	return I(t, e, 'internal-error'), IE(t, new Yo(n), n.bypassAuthState);
}
async function KE(n) {
	const { auth: e, user: t } = n;
	return I(t, e, 'internal-error'), EE(t, new Yo(n), n.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gd {
	constructor(e, t, r, i, s = !1) {
		(this.auth = e),
			(this.resolver = r),
			(this.user = i),
			(this.bypassAuthState = s),
			(this.pendingPromise = null),
			(this.eventManager = null),
			(this.filter = Array.isArray(t) ? t : [t]);
	}
	execute() {
		return new Promise(async (e, t) => {
			this.pendingPromise = { resolve: e, reject: t };
			try {
				(this.eventManager = await this.resolver._initialize(this.auth)),
					await this.onExecution(),
					this.eventManager.registerConsumer(this);
			} catch (r) {
				this.reject(r);
			}
		});
	}
	async onAuthEvent(e) {
		const { urlResponse: t, sessionId: r, postBody: i, tenantId: s, error: o, type: a } = e;
		if (o) {
			this.reject(o);
			return;
		}
		const c = {
			auth: this.auth,
			requestUri: t,
			sessionId: r,
			tenantId: s || void 0,
			postBody: i || void 0,
			user: this.user,
			bypassAuthState: this.bypassAuthState
		};
		try {
			this.resolve(await this.getIdpTask(a)(c));
		} catch (u) {
			this.reject(u);
		}
	}
	onError(e) {
		this.reject(e);
	}
	getIdpTask(e) {
		switch (e) {
			case 'signInViaPopup':
			case 'signInViaRedirect':
				return HE;
			case 'linkViaPopup':
			case 'linkViaRedirect':
				return KE;
			case 'reauthViaPopup':
			case 'reauthViaRedirect':
				return WE;
			default:
				ve(this.auth, 'internal-error');
		}
	}
	resolve(e) {
		$e(this.pendingPromise, 'Pending promise was never set'),
			this.pendingPromise.resolve(e),
			this.unregisterAndCleanUp();
	}
	reject(e) {
		$e(this.pendingPromise, 'Pending promise was never set'),
			this.pendingPromise.reject(e),
			this.unregisterAndCleanUp();
	}
	unregisterAndCleanUp() {
		this.eventManager && this.eventManager.unregisterConsumer(this),
			(this.pendingPromise = null),
			this.cleanUp();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const GE = new sr(2e3, 1e4);
class Mt extends gd {
	constructor(e, t, r, i, s) {
		super(e, t, i, s),
			(this.provider = r),
			(this.authWindow = null),
			(this.pollId = null),
			Mt.currentPopupAction && Mt.currentPopupAction.cancel(),
			(Mt.currentPopupAction = this);
	}
	async executeNotNull() {
		const e = await this.execute();
		return I(e, this.auth, 'internal-error'), e;
	}
	async onExecution() {
		$e(this.filter.length === 1, 'Popup operations only handle one event');
		const e = Jo();
		(this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], e)),
			(this.authWindow.associatedEvent = e),
			this.resolver._originValidation(this.auth).catch((t) => {
				this.reject(t);
			}),
			this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
				t || this.reject(be(this.auth, 'web-storage-unsupported'));
			}),
			this.pollUserCancellation();
	}
	get eventId() {
		var e;
		return ((e = this.authWindow) === null || e === void 0 ? void 0 : e.associatedEvent) || null;
	}
	cancel() {
		this.reject(be(this.auth, 'cancelled-popup-request'));
	}
	cleanUp() {
		this.authWindow && this.authWindow.close(),
			this.pollId && window.clearTimeout(this.pollId),
			(this.authWindow = null),
			(this.pollId = null),
			(Mt.currentPopupAction = null);
	}
	pollUserCancellation() {
		const e = () => {
			var t, r;
			if (
				!(
					(r = (t = this.authWindow) === null || t === void 0 ? void 0 : t.window) === null ||
					r === void 0
				) &&
				r.closed
			) {
				this.pollId = window.setTimeout(() => {
					(this.pollId = null), this.reject(be(this.auth, 'popup-closed-by-user'));
				}, 8e3);
				return;
			}
			this.pollId = window.setTimeout(e, GE.get());
		};
		e();
	}
}
Mt.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QE = 'pendingRedirect',
	Sr = new Map();
class JE extends gd {
	constructor(e, t, r = !1) {
		super(
			e,
			['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
			t,
			void 0,
			r
		),
			(this.eventId = null);
	}
	async execute() {
		let e = Sr.get(this.auth._key());
		if (!e) {
			try {
				const r = (await YE(this.resolver, this.auth)) ? await super.execute() : null;
				e = () => Promise.resolve(r);
			} catch (t) {
				e = () => Promise.reject(t);
			}
			Sr.set(this.auth._key(), e);
		}
		return this.bypassAuthState || Sr.set(this.auth._key(), () => Promise.resolve(null)), e();
	}
	async onAuthEvent(e) {
		if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
		if (e.type === 'unknown') {
			this.resolve(null);
			return;
		}
		if (e.eventId) {
			const t = await this.auth._redirectUserForId(e.eventId);
			if (t) return (this.user = t), super.onAuthEvent(e);
			this.resolve(null);
		}
	}
	async onExecution() {}
	cleanUp() {}
}
async function YE(n, e) {
	const t = eI(e),
		r = ZE(n);
	if (!(await r._isAvailable())) return !1;
	const i = (await r._get(t)) === 'true';
	return await r._remove(t), i;
}
function XE(n, e) {
	Sr.set(n._key(), e);
}
function ZE(n) {
	return Fe(n._redirectPersistence);
}
function eI(n) {
	return Rr(QE, n.config.apiKey, n.name);
}
async function tI(n, e, t = !1) {
	if (we(n.app)) return Promise.reject(Be(n));
	const r = kt(n),
		i = zE(r, e),
		o = await new JE(r, i, t).execute();
	return (
		o &&
			!t &&
			(delete o.user._redirectEventId,
			await r._persistUserIfCurrent(o.user),
			await r._setRedirectUser(null, e)),
		o
	);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nI = 10 * 60 * 1e3;
class rI {
	constructor(e) {
		(this.auth = e),
			(this.cachedEventUids = new Set()),
			(this.consumers = new Set()),
			(this.queuedRedirectEvent = null),
			(this.hasHandledPotentialRedirect = !1),
			(this.lastProcessedEventTime = Date.now());
	}
	registerConsumer(e) {
		this.consumers.add(e),
			this.queuedRedirectEvent &&
				this.isEventForConsumer(this.queuedRedirectEvent, e) &&
				(this.sendToConsumer(this.queuedRedirectEvent, e),
				this.saveEventToCache(this.queuedRedirectEvent),
				(this.queuedRedirectEvent = null));
	}
	unregisterConsumer(e) {
		this.consumers.delete(e);
	}
	onEvent(e) {
		if (this.hasEventBeenHandled(e)) return !1;
		let t = !1;
		return (
			this.consumers.forEach((r) => {
				this.isEventForConsumer(e, r) &&
					((t = !0), this.sendToConsumer(e, r), this.saveEventToCache(e));
			}),
			this.hasHandledPotentialRedirect ||
				!iI(e) ||
				((this.hasHandledPotentialRedirect = !0), t || ((this.queuedRedirectEvent = e), (t = !0))),
			t
		);
	}
	sendToConsumer(e, t) {
		var r;
		if (e.error && !md(e)) {
			const i =
				((r = e.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
				'internal-error';
			t.onError(be(this.auth, i));
		} else t.onAuthEvent(e);
	}
	isEventForConsumer(e, t) {
		const r = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
		return t.filter.includes(e.type) && r;
	}
	hasEventBeenHandled(e) {
		return (
			Date.now() - this.lastProcessedEventTime >= nI && this.cachedEventUids.clear(),
			this.cachedEventUids.has(Sc(e))
		);
	}
	saveEventToCache(e) {
		this.cachedEventUids.add(Sc(e)), (this.lastProcessedEventTime = Date.now());
	}
}
function Sc(n) {
	return [n.type, n.eventId, n.sessionId, n.tenantId].filter((e) => e).join('-');
}
function md({ type: n, error: e }) {
	return n === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event';
}
function iI(n) {
	switch (n.type) {
		case 'signInViaRedirect':
		case 'linkViaRedirect':
		case 'reauthViaRedirect':
			return !0;
		case 'unknown':
			return md(n);
		default:
			return !1;
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function sI(n, e = {}) {
	return st(n, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const oI = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
	aI = /^https?/;
async function cI(n) {
	if (n.config.emulator) return;
	const { authorizedDomains: e } = await sI(n);
	for (const t of e)
		try {
			if (uI(t)) return;
		} catch {}
	ve(n, 'unauthorized-domain');
}
function uI(n) {
	const e = Ns(),
		{ protocol: t, hostname: r } = new URL(e);
	if (n.startsWith('chrome-extension://')) {
		const o = new URL(n);
		return o.hostname === '' && r === ''
			? t === 'chrome-extension:' &&
					n.replace('chrome-extension://', '') === e.replace('chrome-extension://', '')
			: t === 'chrome-extension:' && o.hostname === r;
	}
	if (!aI.test(t)) return !1;
	if (oI.test(n)) return r === n;
	const i = n.replace(/\./g, '\\.');
	return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lI = new sr(3e4, 6e4);
function Pc() {
	const n = ke().___jsl;
	if (n != null && n.H) {
		for (const e of Object.keys(n.H))
			if (
				((n.H[e].r = n.H[e].r || []), (n.H[e].L = n.H[e].L || []), (n.H[e].r = [...n.H[e].L]), n.CP)
			)
				for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
	}
}
function hI(n) {
	return new Promise((e, t) => {
		var r, i, s;
		function o() {
			Pc(),
				gapi.load('gapi.iframes', {
					callback: () => {
						e(gapi.iframes.getContext());
					},
					ontimeout: () => {
						Pc(), t(be(n, 'network-request-failed'));
					},
					timeout: lI.get()
				});
		}
		if (
			!(
				(i = (r = ke().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0
			) &&
			i.Iframe
		)
			e(gapi.iframes.getContext());
		else if (!((s = ke().gapi) === null || s === void 0) && s.load) o();
		else {
			const a = rE('iframefcb');
			return (
				(ke()[a] = () => {
					gapi.load ? o() : t(be(n, 'network-request-failed'));
				}),
				td(`${nE()}?onload=${a}`).catch((c) => t(c))
			);
		}
	}).catch((e) => {
		throw ((Pr = null), e);
	});
}
let Pr = null;
function dI(n) {
	return (Pr = Pr || hI(n)), Pr;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fI = new sr(5e3, 15e3),
	pI = '__/auth/iframe',
	gI = 'emulator/auth/iframe',
	mI = {
		style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
		'aria-hidden': 'true',
		tabindex: '-1'
	},
	_I = new Map([
		['identitytoolkit.googleapis.com', 'p'],
		['staging-identitytoolkit.sandbox.googleapis.com', 's'],
		['test-identitytoolkit.sandbox.googleapis.com', 't']
	]);
function yI(n) {
	const e = n.config;
	I(e.authDomain, n, 'auth-domain-config-required');
	const t = e.emulator ? Ho(e, gI) : `https://${n.config.authDomain}/${pI}`,
		r = { apiKey: e.apiKey, appName: n.name, v: Xt },
		i = _I.get(n.config.apiHost);
	i && (r.eid = i);
	const s = n._getFrameworks();
	return s.length && (r.fw = s.join(',')), `${t}?${$n(r).slice(1)}`;
}
async function vI(n) {
	const e = await dI(n),
		t = ke().gapi;
	return (
		I(t, n, 'internal-error'),
		e.open(
			{
				where: document.body,
				url: yI(n),
				messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
				attributes: mI,
				dontclear: !0
			},
			(r) =>
				new Promise(async (i, s) => {
					await r.restyle({ setHideOnLeave: !1 });
					const o = be(n, 'network-request-failed'),
						a = ke().setTimeout(() => {
							s(o);
						}, fI.get());
					function c() {
						ke().clearTimeout(a), i(r);
					}
					r.ping(c).then(c, () => {
						s(o);
					});
				})
		)
	);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const EI = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
	II = 500,
	TI = 600,
	wI = '_blank',
	AI = 'http://localhost';
class Cc {
	constructor(e) {
		(this.window = e), (this.associatedEvent = null);
	}
	close() {
		if (this.window)
			try {
				this.window.close();
			} catch {}
	}
}
function RI(n, e, t, r = II, i = TI) {
	const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
		o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
	let a = '';
	const c = Object.assign(Object.assign({}, EI), {
			width: r.toString(),
			height: i.toString(),
			top: s,
			left: o
		}),
		u = q().toLowerCase();
	t && (a = Gh(u) ? wI : t), Kh(u) && ((e = e || AI), (c.scrollbars = 'yes'));
	const l = Object.entries(c).reduce((d, [g, S]) => `${d}${g}=${S},`, '');
	if (Wv(u) && a !== '_self') return SI(e || '', a), new Cc(null);
	const h = window.open(e || '', a, l);
	I(h, n, 'popup-blocked');
	try {
		h.focus();
	} catch {}
	return new Cc(h);
}
function SI(n, e) {
	const t = document.createElement('a');
	(t.href = n), (t.target = e);
	const r = document.createEvent('MouseEvent');
	r.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
		t.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const PI = '__/auth/handler',
	CI = 'emulator/auth/handler',
	bI = encodeURIComponent('fac');
async function bc(n, e, t, r, i, s) {
	I(n.config.authDomain, n, 'auth-domain-config-required'),
		I(n.config.apiKey, n, 'invalid-api-key');
	const o = {
		apiKey: n.config.apiKey,
		appName: n.name,
		authType: t,
		redirectUrl: r,
		v: Xt,
		eventId: i
	};
	if (e instanceof rd) {
		e.setDefaultLanguage(n.languageCode),
			(o.providerId = e.providerId || ''),
			xd(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
		for (const [l, h] of Object.entries(s || {})) o[l] = h;
	}
	if (e instanceof ar) {
		const l = e.getScopes().filter((h) => h !== '');
		l.length > 0 && (o.scopes = l.join(','));
	}
	n.tenantId && (o.tid = n.tenantId);
	const a = o;
	for (const l of Object.keys(a)) a[l] === void 0 && delete a[l];
	const c = await n._getAppCheckToken(),
		u = c ? `#${bI}=${encodeURIComponent(c)}` : '';
	return `${kI(n)}?${$n(a).slice(1)}${u}`;
}
function kI({ config: n }) {
	return n.emulator ? Ho(n, CI) : `https://${n.authDomain}/${PI}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const es = 'webStorageSupport';
class DI {
	constructor() {
		(this.eventManagers = {}),
			(this.iframes = {}),
			(this.originValidationPromises = {}),
			(this._redirectPersistence = ld),
			(this._completeRedirectFn = tI),
			(this._overrideRedirectResult = XE);
	}
	async _openPopup(e, t, r, i) {
		var s;
		$e(
			(s = this.eventManagers[e._key()]) === null || s === void 0 ? void 0 : s.manager,
			'_initialize() not called before _openPopup()'
		);
		const o = await bc(e, t, r, Ns(), i);
		return RI(e, o, Jo());
	}
	async _openRedirect(e, t, r, i) {
		await this._originValidation(e);
		const s = await bc(e, t, r, Ns(), i);
		return OE(s), new Promise(() => {});
	}
	_initialize(e) {
		const t = e._key();
		if (this.eventManagers[t]) {
			const { manager: i, promise: s } = this.eventManagers[t];
			return i ? Promise.resolve(i) : ($e(s, 'If manager is not set, promise should be'), s);
		}
		const r = this.initAndGetManager(e);
		return (
			(this.eventManagers[t] = { promise: r }),
			r.catch(() => {
				delete this.eventManagers[t];
			}),
			r
		);
	}
	async initAndGetManager(e) {
		const t = await vI(e),
			r = new rI(e);
		return (
			t.register(
				'authEvent',
				(i) => (
					I(i == null ? void 0 : i.authEvent, e, 'invalid-auth-event'),
					{ status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
				),
				gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
			),
			(this.eventManagers[e._key()] = { manager: r }),
			(this.iframes[e._key()] = t),
			r
		);
	}
	_isIframeWebStorageSupported(e, t) {
		this.iframes[e._key()].send(
			es,
			{ type: es },
			(i) => {
				var s;
				const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[es];
				o !== void 0 && t(!!o), ve(e, 'internal-error');
			},
			gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
		);
	}
	_originValidation(e) {
		const t = e._key();
		return (
			this.originValidationPromises[t] || (this.originValidationPromises[t] = cI(e)),
			this.originValidationPromises[t]
		);
	}
	get _shouldInitProactively() {
		return Zh() || Ko() || bi();
	}
}
const VI = DI;
var kc = '@firebase/auth',
	Dc = '1.7.0';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NI {
	constructor(e) {
		(this.auth = e), (this.internalListeners = new Map());
	}
	getUid() {
		var e;
		return (
			this.assertAuthConfigured(),
			((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) || null
		);
	}
	async getToken(e) {
		return (
			this.assertAuthConfigured(),
			await this.auth._initializationPromise,
			this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(e) } : null
		);
	}
	addAuthTokenListener(e) {
		if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
		const t = this.auth.onIdTokenChanged((r) => {
			e((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
		});
		this.internalListeners.set(e, t), this.updateProactiveRefresh();
	}
	removeAuthTokenListener(e) {
		this.assertAuthConfigured();
		const t = this.internalListeners.get(e);
		t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
	}
	assertAuthConfigured() {
		I(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth');
	}
	updateProactiveRefresh() {
		this.internalListeners.size > 0
			? this.auth._startProactiveRefresh()
			: this.auth._stopProactiveRefresh();
	}
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function OI(n) {
	switch (n) {
		case 'Node':
			return 'node';
		case 'ReactNative':
			return 'rn';
		case 'Worker':
			return 'webworker';
		case 'Cordova':
			return 'cordova';
		case 'WebExtension':
			return 'web-extension';
		default:
			return;
	}
}
function LI(n) {
	De(
		new _e(
			'auth',
			(e, { options: t }) => {
				const r = e.getProvider('app').getImmediate(),
					i = e.getProvider('heartbeat'),
					s = e.getProvider('app-check-internal'),
					{ apiKey: o, authDomain: a } = r.options;
				I(o && !o.includes(':'), 'invalid-api-key', { appName: r.name });
				const c = {
						apiKey: o,
						authDomain: a,
						clientPlatform: n,
						apiHost: 'identitytoolkit.googleapis.com',
						tokenApiHost: 'securetoken.googleapis.com',
						apiScheme: 'https',
						sdkClientVersion: ed(n)
					},
					u = new Zv(r, i, s, c);
				return cE(u, t), u;
			},
			'PUBLIC'
		)
			.setInstantiationMode('EXPLICIT')
			.setInstanceCreatedCallback((e, t, r) => {
				e.getProvider('auth-internal').initialize();
			})
	),
		De(
			new _e(
				'auth-internal',
				(e) => {
					const t = kt(e.getProvider('auth').getImmediate());
					return ((r) => new NI(r))(t);
				},
				'PRIVATE'
			).setInstantiationMode('EXPLICIT')
		),
		pe(kc, Dc, OI(n)),
		pe(kc, Dc, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const MI = 5 * 60,
	xI = Bc('authIdTokenMaxAge') || MI;
let Vc = null;
const FI = (n) => async (e) => {
	const t = e && (await e.getIdTokenResult()),
		r = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
	if (r && r > xI) return;
	const i = t == null ? void 0 : t.token;
	Vc !== i &&
		((Vc = i),
		await fetch(n, {
			method: i ? 'POST' : 'DELETE',
			headers: i ? { Authorization: `Bearer ${i}` } : {}
		}));
};
function UI(n = Us()) {
	const e = zn(n, 'auth');
	if (e.isInitialized()) return e.getImmediate();
	const t = aE(n, { popupRedirectResolver: VI, persistence: [$E, DE, ld] }),
		r = Bc('authTokenSyncURL');
	if (r && typeof isSecureContext == 'boolean' && isSecureContext) {
		const s = new URL(r, location.origin);
		if (location.origin === s.origin) {
			const o = FI(s.toString());
			SE(t, o, () => o(t.currentUser)), RE(t, (a) => o(a));
		}
	}
	const i = Fc('auth');
	return i && uE(t, `http://${i}`), t;
}
function BI() {
	var n, e;
	return (e =
		(n = document.getElementsByTagName('head')) === null || n === void 0 ? void 0 : n[0]) !==
		null && e !== void 0
		? e
		: document;
}
eE({
	loadJS(n) {
		return new Promise((e, t) => {
			const r = document.createElement('script');
			r.setAttribute('src', n),
				(r.onload = e),
				(r.onerror = (i) => {
					const s = be('internal-error');
					(s.customData = i), t(s);
				}),
				(r.type = 'text/javascript'),
				(r.charset = 'UTF-8'),
				BI().appendChild(r);
		});
	},
	gapiScript: 'https://apis.google.com/js/api.js',
	recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
	recaptchaEnterpriseScript: 'https://www.google.com/recaptcha/enterprise.js?render='
});
LI('Browser');
const Nc = {
	apiKey: 'AIzaSyAyX0y_pFrAS2uS6APjXsv6ibjLXlS6C10',
	authDomain: 'physics-f8473.firebaseapp.com',
	projectId: 'physics-f8473',
	storageBucket: 'physics-f8473.appspot.com',
	messagingSenderId: '409425797879',
	appId: '1:409425797879:web:d24494ddc54055654d69f2',
	measurementId: 'G-HMHJ8JGKZS'
};
let xt;
Bf().length && ((xt = Us()), jf(xt)), (xt = as(Nc));
const jI = uv(xt),
	vr = UI(xt),
	QI = Oc({ user: null, loading: !0, data: {} }),
	_d = Oc({ questions: [], loading: !0 }),
	JI = {
		signup: async (n, e) => {
			await wE(vr, n, e);
		},
		login: async (n, e) => {
			await AE(vr, n, e);
		},
		logout: async () => {
			await PE(vr);
		},
		getEmail: () => {
			const n = vr.currentUser;
			return n ? n.email : null;
		}
	};
function YI(n, e, t) {
	_d.update((r) => {
		const i = r.questions.map((s) => (s.id === n ? { ...s, attempted: e, correct: t } : s));
		return { ...r, questions: i };
	});
}
async function XI() {
	const n = av(jI, 'questions'),
		e = await Av(n),
		t = [];
	e.forEach((r) => {
		t.push({
			id: r.data().id,
			attempted: r.data().attempted,
			topic: r.data().topic,
			correct: r.data().correct,
			difficulty: r.data().difficulty,
			image: r.data().image,
			explanation: r.data().explanation,
			options: r.data().options,
			answer: r.data().answer,
			question: r.data().question,
			...r.data()
		});
	}),
		_d.set({ questions: t, loading: !1 });
}
export { vr as a, jI as b, QI as c, WI as d, JI as e, XI as f, KI as g, _d as q, GI as s, YI as u };
