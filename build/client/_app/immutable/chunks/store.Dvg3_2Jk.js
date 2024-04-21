import{w as Tr}from"./index.C3g5pe3j.js";var Ml={};/**
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
 */const Yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const y=function(n,e){if(!n)throw Kn(e)},Kn=function(n){return new Error("Firebase Database ("+Yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Jh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Qm=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ha={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Jh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Ym;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ym extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xh=function(n){const e=Jh(n);return Ha.encodeByteArray(e,!0)},Hs=function(n){return Xh(n).replace(/\./g,"")},zs=function(n){try{return Ha.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jm(n){return Zh(void 0,n)}function Zh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Xm(t)||(n[t]=Zh(n[t],e[t]));return n}function Xm(n){return n!=="__proto__"}/**
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
 */function Zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const e_=()=>Zm().__FIREBASE_DEFAULTS__,t_=()=>{if(typeof process>"u"||typeof Ml>"u")return;const n=Ml.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},n_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zs(n[1]);return e&&JSON.parse(e)},wr=()=>{try{return e_()||t_()||n_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ed=n=>{var e,t;return(t=(e=wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},i_=n=>{const e=ed(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},td=()=>{var n;return(n=wr())===null||n===void 0?void 0:n.config},nd=n=>{var e;return(e=wr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class za{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function s_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Hs(JSON.stringify(t)),Hs(JSON.stringify(o)),""].join(".")}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ga(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function r_(){var n;const e=(n=wr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function id(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o_(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rd(){return Yh.NODE_ADMIN===!0}function a_(){return!r_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ka(){try{return typeof indexedDB=="object"}catch{return!1}}function od(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function c_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const l_="FirebaseError";class We extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=l_,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?u_(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new We(s,a,i)}}function u_(n,e){return n.replace(h_,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const h_=/\{\$([^}]+)}/g;/**
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
 */function Ni(n){return JSON.parse(n)}function le(n){return JSON.stringify(n)}/**
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
 */const ad=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Ni(zs(r[0])||""),t=Ni(zs(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},d_=function(n){const e=ad(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},f_=function(n){const e=ad(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function _t(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function xn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function zo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gs(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ks(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ll(r)&&Ll(o)){if(!Ks(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ll(n){return n!==null&&typeof n=="object"}/**
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
 */function Qn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function pi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class p_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):h<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+l+c+u+i[h]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function g_(n,e){const t=new m_(n,e);return t.subscribe.bind(t)}class m_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");__(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=mo),s.error===void 0&&(s.error=mo),s.complete===void 0&&(s.complete=mo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function __(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function mo(){}function y_(n,e){return`${n} failed: ${e} argument `}/**
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
 */const v_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ar=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const E_=1e3,I_=2,T_=4*60*60*1e3,w_=.5;function Vl(n,e=E_,t=I_){const i=e*Math.pow(t,n),s=Math.round(w_*i*(Math.random()-.5)*2);return Math.min(T_,i+s)}/**
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
 */function re(n){return n&&n._delegate?n._delegate:n}class Le{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class A_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new za;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R_(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:S_(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S_(n){return n===Bt?void 0:n}function R_(n){return n.instantiationMode==="EAGER"}/**
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
 */class C_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new A_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const P_={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},b_=b.INFO,k_={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},N_=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=k_[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xi{constructor(e){this.name=e,this._logLevel=b_,this._logHandler=N_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const D_=(n,e)=>e.some(t=>n instanceof t);let xl,Fl;function O_(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function M_(){return Fl||(Fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cd=new WeakMap,Go=new WeakMap,ld=new WeakMap,_o=new WeakMap,Qa=new WeakMap;function L_(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(At(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&cd.set(t,n)}).catch(()=>{}),Qa.set(e,n),e}function V_(n){if(Go.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Go.set(n,e)}let Ko={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ld.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return At(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function x_(n){Ko=n(Ko)}function F_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(yo(this),e,...t);return ld.set(i,e.sort?e.sort():[e]),At(i)}:M_().includes(n)?function(...e){return n.apply(yo(this),e),At(cd.get(this))}:function(...e){return At(n.apply(yo(this),e))}}function U_(n){return typeof n=="function"?F_(n):(n instanceof IDBTransaction&&V_(n),D_(n,O_())?new Proxy(n,Ko):n)}function At(n){if(n instanceof IDBRequest)return L_(n);if(_o.has(n))return _o.get(n);const e=U_(n);return e!==n&&(_o.set(n,e),Qa.set(e,n)),e}const yo=n=>Qa.get(n);function ud(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=At(o);return i&&o.addEventListener("upgradeneeded",c=>{i(At(o.result),c.oldVersion,c.newVersion,At(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const B_=["get","getKey","getAll","getAllKeys","count"],q_=["put","add","delete","clear"],vo=new Map;function Ul(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(vo.get(e))return vo.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=q_.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||B_.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return vo.set(e,r),r}x_(n=>({...n,get:(e,t,i)=>Ul(e,t)||n.get(e,t,i),has:(e,t)=>!!Ul(e,t)||n.has(e,t)}));/**
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
 */class j_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(W_(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function W_(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qo="@firebase/app",Bl="0.10.0";/**
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
 */const Jt=new Xi("@firebase/app"),$_="@firebase/app-compat",H_="@firebase/analytics-compat",z_="@firebase/analytics",G_="@firebase/app-check-compat",K_="@firebase/app-check",Q_="@firebase/auth",Y_="@firebase/auth-compat",J_="@firebase/database",X_="@firebase/database-compat",Z_="@firebase/functions",ey="@firebase/functions-compat",ty="@firebase/installations",ny="@firebase/installations-compat",iy="@firebase/messaging",sy="@firebase/messaging-compat",ry="@firebase/performance",oy="@firebase/performance-compat",ay="@firebase/remote-config",cy="@firebase/remote-config-compat",ly="@firebase/storage",uy="@firebase/storage-compat",hy="@firebase/firestore",dy="@firebase/firestore-compat",fy="firebase",py="10.10.0";/**
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
 */const Yo="[DEFAULT]",gy={[Qo]:"fire-core",[$_]:"fire-core-compat",[z_]:"fire-analytics",[H_]:"fire-analytics-compat",[K_]:"fire-app-check",[G_]:"fire-app-check-compat",[Q_]:"fire-auth",[Y_]:"fire-auth-compat",[J_]:"fire-rtdb",[X_]:"fire-rtdb-compat",[Z_]:"fire-fn",[ey]:"fire-fn-compat",[ty]:"fire-iid",[ny]:"fire-iid-compat",[iy]:"fire-fcm",[sy]:"fire-fcm-compat",[ry]:"fire-perf",[oy]:"fire-perf-compat",[ay]:"fire-rc",[cy]:"fire-rc-compat",[ly]:"fire-gcs",[uy]:"fire-gcs-compat",[hy]:"fire-fst",[dy]:"fire-fst-compat","fire-js":"fire-js",[fy]:"fire-js-all"};/**
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
 */const Xt=new Map,Jo=new Map,Xo=new Map;function ql(n,e){try{n.container.addComponent(e)}catch(t){Jt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Be(n){const e=n.name;if(Xo.has(e))return Jt.debug(`There were multiple attempts to register component ${e}.`),!1;Xo.set(e,n);for(const t of Xt.values())ql(t,n);for(const t of Jo.values())ql(t,n);return!0}function Zi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ze(n){return n.settings!==void 0}/**
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
 */const my={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},St=new hn("app","Firebase",my);/**
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
 */class _y{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=py;function Zo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Yo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(t||(t=td()),!t)throw St.create("no-options");const r=Xt.get(s);if(r){if(Ks(t,r.options)&&Ks(i,r.config))return r;throw St.create("duplicate-app",{appName:s})}const o=new C_(s);for(const c of Xo.values())o.addComponent(c);const a=new _y(t,i,o);return Xt.set(s,a),a}function Ya(n=Yo){const e=Xt.get(n);if(!e&&n===Yo&&td())return Zo();if(!e)throw St.create("no-app",{appName:n});return e}function yy(){return Array.from(Xt.values())}async function vy(n){let e=!1;const t=n.name;Xt.has(t)?(e=!0,Xt.delete(t)):Jo.has(t)&&n.decRefCount()<=0&&(Jo.delete(t),e=!0),e&&(await Promise.all(n.container.getProviders().map(i=>i.delete())),n.isDeleted=!0)}function Re(n,e,t){var i;let s=(i=gy[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jt.warn(a.join(" "));return}Be(new Le(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ey="firebase-heartbeat-database",Iy=1,Di="firebase-heartbeat-store";let Eo=null;function hd(){return Eo||(Eo=ud(Ey,Iy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Di)}catch(t){console.warn(t)}}}}).catch(n=>{throw St.create("idb-open",{originalErrorMessage:n.message})})),Eo}async function Ty(n){try{const t=(await hd()).transaction(Di),i=await t.objectStore(Di).get(dd(n));return await t.done,i}catch(e){if(e instanceof We)Jt.warn(e.message);else{const t=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jt.warn(t.message)}}}async function jl(n,e){try{const i=(await hd()).transaction(Di,"readwrite");await i.objectStore(Di).put(e,dd(n)),await i.done}catch(t){if(t instanceof We)Jt.warn(t.message);else{const i=St.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Jt.warn(i.message)}}}function dd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const wy=1024,Ay=30*24*60*60*1e3;class Sy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cy(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ay}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wl(),{heartbeatsToSend:i,unsentEntries:s}=Ry(this._heartbeatsCache.heartbeats),r=Hs(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wl(){return new Date().toISOString().substring(0,10)}function Ry(n,e=wy){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$l(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$l(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Cy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ka()?od().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ty(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return jl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $l(n){return Hs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Py(n){Be(new Le("platform-logger",e=>new j_(e),"PRIVATE")),Be(new Le("heartbeat",e=>new Sy(e),"PRIVATE")),Re(Qo,Bl,n),Re(Qo,Bl,"esm2017"),Re("fire-js","")}Py("");var by="firebase",ky="10.10.0";/**
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
 */Re(by,ky,"app");const fd="@firebase/installations",Ja="0.6.6";/**
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
 */const pd=1e4,gd=`w:${Ja}`,md="FIS_v2",Ny="https://firebaseinstallations.googleapis.com/v1",Dy=60*60*1e3,Oy="installations",My="Installations";/**
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
 */const Ly={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zt=new hn(Oy,My,Ly);function _d(n){return n instanceof We&&n.code.includes("request-failed")}/**
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
 */function yd({projectId:n}){return`${Ny}/projects/${n}/installations`}function vd(n){return{token:n.token,requestStatus:2,expiresIn:xy(n.expiresIn),creationTime:Date.now()}}async function Ed(n,e){const i=(await e.json()).error;return Zt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Id({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Vy(n,{refreshToken:e}){const t=Id(n);return t.append("Authorization",Fy(e)),t}async function Td(n){const e=await n();return e.status>=500&&e.status<600?n():e}function xy(n){return Number(n.replace("s","000"))}function Fy(n){return`${md} ${n}`}/**
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
 */async function Uy({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=yd(n),s=Id(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:t,authVersion:md,appId:n.appId,sdkVersion:gd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Td(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:vd(l.authToken)}}else throw await Ed("Create Installation",c)}/**
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
 */function wd(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function By(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const qy=/^[cdef][\w-]{21}$/,ea="";function jy(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Wy(n);return qy.test(t)?t:ea}catch{return ea}}function Wy(n){return By(n).substr(0,22)}/**
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
 */function Sr(n){return`${n.appName}!${n.appId}`}/**
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
 */const Ad=new Map;function Sd(n,e){const t=Sr(n);Rd(t,e),$y(t,e)}function Rd(n,e){const t=Ad.get(n);if(t)for(const i of t)i(e)}function $y(n,e){const t=Hy();t&&t.postMessage({key:n,fid:e}),zy()}let Wt=null;function Hy(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=n=>{Rd(n.data.key,n.data.fid)}),Wt}function zy(){Ad.size===0&&Wt&&(Wt.close(),Wt=null)}/**
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
 */const Gy="firebase-installations-database",Ky=1,en="firebase-installations-store";let Io=null;function Xa(){return Io||(Io=ud(Gy,Ky,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(en)}}})),Io}async function Qs(n,e){const t=Sr(n),s=(await Xa()).transaction(en,"readwrite"),r=s.objectStore(en),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Sd(n,e.fid),e}async function Cd(n){const e=Sr(n),i=(await Xa()).transaction(en,"readwrite");await i.objectStore(en).delete(e),await i.done}async function Rr(n,e){const t=Sr(n),s=(await Xa()).transaction(en,"readwrite"),r=s.objectStore(en),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Sd(n,a.fid),a}/**
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
 */async function Za(n){let e;const t=await Rr(n.appConfig,i=>{const s=Qy(i),r=Yy(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===ea?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Qy(n){const e=n||{fid:jy(),registrationStatus:0};return Pd(e)}function Yy(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Zt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Jy(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Xy(n)}:{installationEntry:e}}async function Jy(n,e){try{const t=await Uy(n,e);return Qs(n.appConfig,t)}catch(t){throw _d(t)&&t.customData.serverCode===409?await Cd(n.appConfig):await Qs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Xy(n){let e=await Hl(n.appConfig);for(;e.registrationStatus===1;)await wd(100),e=await Hl(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Za(n);return i||t}return e}function Hl(n){return Rr(n,e=>{if(!e)throw Zt.create("installation-not-found");return Pd(e)})}function Pd(n){return Zy(n)?{fid:n.fid,registrationStatus:0}:n}function Zy(n){return n.registrationStatus===1&&n.registrationTime+pd<Date.now()}/**
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
 */async function ev({appConfig:n,heartbeatServiceProvider:e},t){const i=tv(n,t),s=Vy(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:gd,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Td(()=>fetch(i,a));if(c.ok){const l=await c.json();return vd(l)}else throw await Ed("Generate Auth Token",c)}function tv(n,{fid:e}){return`${yd(n)}/${e}/authTokens:generate`}/**
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
 */async function ec(n,e=!1){let t;const i=await Rr(n.appConfig,r=>{if(!bd(r))throw Zt.create("not-registered");const o=r.authToken;if(!e&&sv(o))return r;if(o.requestStatus===1)return t=nv(n,e),r;{if(!navigator.onLine)throw Zt.create("app-offline");const a=ov(r);return t=iv(n,a),a}});return t?await t:i.authToken}async function nv(n,e){let t=await zl(n.appConfig);for(;t.authToken.requestStatus===1;)await wd(100),t=await zl(n.appConfig);const i=t.authToken;return i.requestStatus===0?ec(n,e):i}function zl(n){return Rr(n,e=>{if(!bd(e))throw Zt.create("not-registered");const t=e.authToken;return av(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function iv(n,e){try{const t=await ev(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Qs(n.appConfig,i),t}catch(t){if(_d(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Cd(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qs(n.appConfig,i)}throw t}}function bd(n){return n!==void 0&&n.registrationStatus===2}function sv(n){return n.requestStatus===2&&!rv(n)}function rv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Dy}function ov(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function av(n){return n.requestStatus===1&&n.requestTime+pd<Date.now()}/**
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
 */async function cv(n){const e=n,{installationEntry:t,registrationPromise:i}=await Za(e);return i?i.catch(console.error):ec(e).catch(console.error),t.fid}/**
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
 */async function lv(n,e=!1){const t=n;return await uv(t),(await ec(t,e)).token}async function uv(n){const{registrationPromise:e}=await Za(n);e&&await e}/**
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
 */function hv(n){if(!n||!n.options)throw To("App Configuration");if(!n.name)throw To("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw To(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function To(n){return Zt.create("missing-app-config-values",{valueName:n})}/**
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
 */const kd="installations",dv="installations-internal",fv=n=>{const e=n.getProvider("app").getImmediate(),t=hv(e),i=Zi(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},pv=n=>{const e=n.getProvider("app").getImmediate(),t=Zi(e,kd).getImmediate();return{getId:()=>cv(t),getToken:s=>lv(t,s)}};function gv(){Be(new Le(kd,fv,"PUBLIC")),Be(new Le(dv,pv,"PRIVATE"))}gv();Re(fd,Ja);Re(fd,Ja,"esm2017");/**
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
 */const Gl="analytics",mv="firebase_id",_v="origin",yv=60*1e3,vv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",tc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ce=new Xi("@firebase/analytics");/**
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
 */const Ev={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Me=new hn("analytics","Analytics",Ev);/**
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
 */function Iv(n){if(!n.startsWith(tc)){const e=Me.create("invalid-gtag-resource",{gtagURL:n});return Ce.warn(e.message),""}return n}function Nd(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Tv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function wv(n,e){const t=Tv("firebase-js-sdk-policy",{createScriptURL:Iv}),i=document.createElement("script"),s=`${tc}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Av(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Sv(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await Nd(t)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){Ce.error(a)}n("config",s,r)}async function Rv(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Nd(t);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)r.push(u);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){Ce.error(r)}}function Cv(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[a,c]=o;await Rv(n,e,t,a,c)}else if(r==="config"){const[a,c]=o;await Sv(n,e,t,i,a,c)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,c,l]=o;n("get",a,c,l)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){Ce.error(a)}}return s}function Pv(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Cv(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function bv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(tc)&&t.src.includes(n))return t;return null}/**
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
 */const kv=30,Nv=1e3;class Dv{constructor(e={},t=Nv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dd=new Dv;function Ov(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Mv(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Ov(i)},r=vv.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Lv(n,e=Dd,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw Me.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Me.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Fv;return setTimeout(async()=>{a.abort()},t!==void 0?t:yv),Od({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Od(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=Dd){var r;const{appId:o,measurementId:a}=n;try{await Vv(i,e)}catch(c){if(a)return Ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Mv(n);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!xv(l)){if(s.deleteThrottleMetadata(o),a)return Ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((r=l==null?void 0:l.customData)===null||r===void 0?void 0:r.httpStatus)===503?Vl(t,s.intervalMillis,kv):Vl(t,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return s.setThrottleMetadata(o,h),Ce.debug(`Calling attemptFetch again in ${u} millis`),Od(n,h,i,s)}}function Vv(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(Me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xv(n){if(!(n instanceof We)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Fv{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Uv(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
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
 */async function Bv(){if(Ka())try{await od()}catch(n){return Ce.warn(Me.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ce.warn(Me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qv(n,e,t,i,s,r,o){var a;const c=Lv(n);c.then(f=>{t[f.measurementId]=f.appId,n.options.measurementId&&f.measurementId!==n.options.measurementId&&Ce.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ce.error(f)),e.push(c);const l=Bv().then(f=>{if(f)return i.getId()}),[u,h]=await Promise.all([c,l]);bv(r)||wv(r,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[_v]="firebase",d.update=!0,h!=null&&(d[mv]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class jv{constructor(e){this.app=e}_delete(){return delete Ei[this.app.options.appId],Promise.resolve()}}let Ei={},Kl=[];const Ql={};let wo="dataLayer",Wv="gtag",Yl,Md,Jl=!1;function $v(){const n=[];if(id()&&n.push("This is a browser extension environment."),c_()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Me.create("invalid-analytics-context",{errorInfo:e});Ce.warn(t.message)}}function Hv(n,e,t){$v();const i=n.options.appId;if(!i)throw Me.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Me.create("no-api-key");if(Ei[i]!=null)throw Me.create("already-exists",{id:i});if(!Jl){Av(wo);const{wrappedGtag:r,gtagCore:o}=Pv(Ei,Kl,Ql,wo,Wv);Md=r,Yl=o,Jl=!0}return Ei[i]=qv(n,Kl,Ql,e,Yl,wo,t),new jv(n)}function zv(n,e,t,i){n=re(n),Uv(Md,Ei[n.app.options.appId],e,t,i).catch(s=>Ce.error(s))}const Xl="@firebase/analytics",Zl="0.10.2";function Gv(){Be(new Le(Gl,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Hv(i,s,t)},"PUBLIC")),Be(new Le("analytics-internal",n,"PRIVATE")),Re(Xl,Zl),Re(Xl,Zl,"esm2017");function n(e){try{const t=e.getProvider(Gl).getImmediate();return{logEvent:(i,s,r)=>zv(t,i,s,r)}}catch(t){throw Me.create("interop-component-reg-failed",{reason:t})}}}Gv();var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,nc=nc||{},R=Kv||self;function Cr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function es(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Qv(n){return Object.prototype.hasOwnProperty.call(n,Ao)&&n[Ao]||(n[Ao]=++Yv)}var Ao="closure_uid_"+(1e9*Math.random()>>>0),Yv=0;function Jv(n,e,t){return n.call.apply(n.bind,arguments)}function Xv(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ve(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ve=Jv:ve=Xv,ve.apply(null,arguments)}function Ss(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function ae(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function Ot(){this.s=this.s,this.o=this.o}var Zv=0;Ot.prototype.s=!1;Ot.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Zv!=0)&&Qv(this)};Ot.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ld=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ic(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function eu(n,e){for(let t=1;t<arguments.length;t++){const i=arguments[t];if(Cr(i)){const s=n.length||0,r=i.length||0;n.length=s+r;for(let o=0;o<r;o++)n[s+o]=i[o]}else n.push(i)}}function Ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var eE=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const t=()=>{};R.addEventListener("test",t,e),R.removeEventListener("test",t,e)}catch{}return n}();function Oi(n){return/^[\s\xa0]*$/.test(n)}function Pr(){var n=R.navigator;return n&&(n=n.userAgent)?n:""}function He(n){return Pr().indexOf(n)!=-1}function sc(n){return sc[" "](n),n}sc[" "]=function(){};function tE(n,e){var t=GE;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var nE=He("Opera"),Fn=He("Trident")||He("MSIE"),Vd=He("Edge"),ta=Vd||Fn,xd=He("Gecko")&&!(Pr().toLowerCase().indexOf("webkit")!=-1&&!He("Edge"))&&!(He("Trident")||He("MSIE"))&&!He("Edge"),iE=Pr().toLowerCase().indexOf("webkit")!=-1&&!He("Edge");function Fd(){var n=R.document;return n?n.documentMode:void 0}var na;e:{var So="",Ro=function(){var n=Pr();if(xd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Vd)return/Edge\/([\d\.]+)/.exec(n);if(Fn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(iE)return/WebKit\/(\S+)/.exec(n);if(nE)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ro&&(So=Ro?Ro[1]:""),Fn){var Co=Fd();if(Co!=null&&Co>parseFloat(So)){na=String(Co);break e}}na=So}var ia;if(R.document&&Fn){var tu=Fd();ia=tu||parseInt(na,10)||void 0}else ia=void 0;var sE=ia;function Mi(n,e){if(Ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(xd){e:{try{sc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:rE[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Mi.$.h.call(this)}}ae(Mi,Ee);var rE={2:"touch",3:"pen",4:"mouse"};Mi.prototype.h=function(){Mi.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ts="closure_listenable_"+(1e6*Math.random()|0),oE=0;function aE(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.la=s,this.key=++oE,this.fa=this.ia=!1}function br(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function rc(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function cE(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function Ud(n){const e={};for(const t in n)e[t]=n[t];return e}const nu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bd(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<nu.length;r++)t=nu[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function kr(n){this.src=n,this.g={},this.h=0}kr.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=ra(n,e,i,s);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new aE(e,this.src,r,!!i,s),e.ia=t,n.push(e)),e};function sa(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Ld(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(br(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ra(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.fa&&r.listener==e&&r.capture==!!t&&r.la==i)return s}return-1}var oc="closure_lm_"+(1e6*Math.random()|0),Po={};function qd(n,e,t,i,s){if(i&&i.once)return Wd(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qd(n,e[r],t,i,s);return null}return t=lc(t),n&&n[ts]?n.O(e,t,es(i)?!!i.capture:!!i,s):jd(n,e,t,!1,i,s)}function jd(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=es(s)?!!s.capture:!!s,a=cc(n);if(a||(n[oc]=a=new kr(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=lE(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)eE||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(Hd(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function lE(){function n(t){return e.call(n.src,n.listener,t)}const e=uE;return n}function Wd(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Wd(n,e[r],t,i,s);return null}return t=lc(t),n&&n[ts]?n.P(e,t,es(i)?!!i.capture:!!i,s):jd(n,e,t,!0,i,s)}function $d(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)$d(n,e[r],t,i,s);else i=es(i)?!!i.capture:!!i,t=lc(t),n&&n[ts]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=ra(r,t,i,s),-1<t&&(br(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=cc(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ra(e,t,i,s)),(t=-1<n?e[n]:null)&&ac(t))}function ac(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[ts])sa(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Hd(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=cc(e))?(sa(t,n),t.h==0&&(t.src=null,e[oc]=null)):br(n)}}}function Hd(n){return n in Po?Po[n]:Po[n]="on"+n}function uE(n,e){if(n.fa)n=!0;else{e=new Mi(e,this);var t=n.listener,i=n.la||n.src;n.ia&&ac(n),n=t.call(i,e)}return n}function cc(n){return n=n[oc],n instanceof kr?n:null}var bo="__closure_events_fn_"+(1e9*Math.random()>>>0);function lc(n){return typeof n=="function"?n:(n[bo]||(n[bo]=function(e){return n.handleEvent(e)}),n[bo])}function oe(){Ot.call(this),this.i=new kr(this),this.S=this,this.J=null}ae(oe,Ot);oe.prototype[ts]=!0;oe.prototype.removeEventListener=function(n,e,t,i){$d(this,n,e,t,i)};function he(n,e){var t,i=n.J;if(i)for(t=[];i;i=i.J)t.push(i);if(n=n.S,i=e.type||e,typeof e=="string")e=new Ee(e,n);else if(e instanceof Ee)e.target=e.target||n;else{var s=e;e=new Ee(i,n),Bd(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Rs(o,i,!0,e)&&s}if(o=e.g=n,s=Rs(o,i,!0,e)&&s,s=Rs(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Rs(o,i,!1,e)&&s}oe.prototype.N=function(){if(oe.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)br(t[i]);delete n.g[e],n.h--}}this.J=null};oe.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};oe.prototype.P=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Rs(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==t){var a=o.listener,c=o.la||o.src;o.ia&&sa(n.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var uc=R.JSON.stringify;class hE{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dE(){var n=hc;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class fE{constructor(){this.h=this.g=null}add(e,t){const i=zd.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var zd=new hE(()=>new pE,n=>n.reset());class pE{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function gE(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function mE(n){R.setTimeout(()=>{throw n},0)}let Li,Vi=!1,hc=new fE,Gd=()=>{const n=R.Promise.resolve(void 0);Li=()=>{n.then(_E)}};var _E=()=>{for(var n;n=dE();){try{n.h.call(n.g)}catch(t){mE(t)}var e=zd;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Vi=!1};function Nr(n,e){oe.call(this),this.h=n||1,this.g=e||R,this.j=ve(this.qb,this),this.l=Date.now()}ae(Nr,oe);v=Nr.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),he(this,"tick"),this.ga&&(dc(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dc(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){Nr.$.N.call(this),dc(this),delete this.g};function fc(n,e,t){if(typeof n=="function")t&&(n=ve(n,t));else if(n&&typeof n.handleEvent=="function")n=ve(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:R.setTimeout(n,e||0)}function Kd(n){n.g=fc(()=>{n.g=null,n.i&&(n.i=!1,Kd(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class yE extends Ot{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kd(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(n){Ot.call(this),this.h=n,this.g={}}ae(xi,Ot);var iu=[];function Qd(n,e,t,i){Array.isArray(t)||(t&&(iu[0]=t.toString()),t=iu);for(var s=0;s<t.length;s++){var r=qd(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Yd(n){rc(n.g,function(e,t){this.g.hasOwnProperty(t)&&ac(e)},n),n.g={}}xi.prototype.N=function(){xi.$.N.call(this),Yd(this)};xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Dr(){this.g=!0}Dr.prototype.Ea=function(){this.g=!1};function vE(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function EE(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function An(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+TE(n,t)+(i?" "+i:"")})}function IE(n,e){n.info(function(){return"TIMEOUT: "+e})}Dr.prototype.info=function(){};function TE(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return uc(t)}catch{return e}}var fn={},su=null;function Or(){return su=su||new oe}fn.Ta="serverreachability";function Jd(n){Ee.call(this,fn.Ta,n)}ae(Jd,Ee);function Fi(n){const e=Or();he(e,new Jd(e))}fn.STAT_EVENT="statevent";function Xd(n,e){Ee.call(this,fn.STAT_EVENT,n),this.stat=e}ae(Xd,Ee);function Te(n){const e=Or();he(e,new Xd(e,n))}fn.Ua="timingevent";function Zd(n,e){Ee.call(this,fn.Ua,n),this.size=e}ae(Zd,Ee);function ns(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){n()},e)}var Mr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ef={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pc(){}pc.prototype.h=null;function ru(n){return n.h||(n.h=n.i())}function tf(){}var is={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gc(){Ee.call(this,"d")}ae(gc,Ee);function mc(){Ee.call(this,"c")}ae(mc,Ee);var oa;function Lr(){}ae(Lr,pc);Lr.prototype.g=function(){return new XMLHttpRequest};Lr.prototype.i=function(){return{}};oa=new Lr;function ss(n,e,t,i){this.l=n,this.j=e,this.m=t,this.W=i||1,this.U=new xi(this),this.P=wE,n=ta?125:void 0,this.V=new Nr(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nf}function nf(){this.i=null,this.g="",this.h=!1}var wE=45e3,sf={},aa={};v=ss.prototype;v.setTimeout=function(n){this.P=n};function ca(n,e,t){n.L=1,n.A=xr(ft(e)),n.u=t,n.S=!0,rf(n,null)}function rf(n,e){n.G=Date.now(),rs(n),n.B=ft(n.A);var t=n.B,i=n.W;Array.isArray(i)||(i=[String(i)]),ff(t.i,"t",i),n.o=0,t=n.l.J,n.h=new nf,n.g=Mf(n.l,t?e:null,!n.u),0<n.O&&(n.M=new yE(ve(n.Pa,n,n.g),n.O)),Qd(n.U,n.g,"readystatechange",n.nb),e=n.I?Ud(n.I):{},n.u?(n.v||(n.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,e)):(n.v="GET",n.g.ha(n.B,n.v,null,e)),Fi(),vE(n.j,n.v,n.B,n.m,n.W,n.u)}v.nb=function(n){n=n.target;const e=this.M;e&&Ge(n)==3?e.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)e:{const u=Ge(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||ta||this.g&&(this.h.h||this.g.ja()||lu(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Fi(3):Fi(2)),Vr(this);var t=this.g.da();this.ca=t;t:if(of(this)){var i=lu(this.g);n="";var s=i.length,r=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Ii(this);var o="";break t}this.h.i=new R.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,EE(this.j,this.v,this.B,this.m,this.W,u,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oi(a)){var l=a;break t}}l=null}if(t=l)An(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,t);else{this.i=!1,this.s=3,Te(12),$t(this),Ii(this);break e}}this.S?(af(this,u,o),ta&&this.i&&u==3&&(Qd(this.U,this.V,"tick",this.mb),this.V.start())):(An(this.j,this.m,o,null),la(this,o)),u==4&&$t(this),this.i&&!this.J&&(u==4?kf(this.l,this):(this.i=!1,rs(this)))}else $E(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),$t(this),Ii(this)}}}catch{}finally{}};function of(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function af(n,e,t){let i=!0,s;for(;!n.J&&n.o<t.length;)if(s=AE(n,t),s==aa){e==4&&(n.s=4,Te(14),i=!1),An(n.j,n.m,null,"[Incomplete Response]");break}else if(s==sf){n.s=4,Te(15),An(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else An(n.j,n.m,s,null),la(n,s);of(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),e!=4||t.length!=0||n.h.h||(n.s=1,Te(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),Tc(e),e.M=!0,Te(11))):(An(n.j,n.m,t,"[Invalid Chunked Response]"),$t(n),Ii(n))}v.mb=function(){if(this.g){var n=Ge(this.g),e=this.g.ja();this.o<e.length&&(Vr(this),af(this,n,e),this.i&&n!=4&&rs(this))}};function AE(n,e){var t=n.o,i=e.indexOf(`
`,t);return i==-1?aa:(t=Number(e.substring(t,i)),isNaN(t)?sf:(i+=1,i+t>e.length?aa:(e=e.slice(i,i+t),n.o=i+t,e)))}v.cancel=function(){this.J=!0,$t(this)};function rs(n){n.Y=Date.now()+n.P,cf(n,n.P)}function cf(n,e){if(n.C!=null)throw Error("WatchDog timer not null");n.C=ns(ve(n.lb,n),e)}function Vr(n){n.C&&(R.clearTimeout(n.C),n.C=null)}v.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(IE(this.j,this.B),this.L!=2&&(Fi(),Te(17)),$t(this),this.s=2,Ii(this)):cf(this,this.Y-n)};function Ii(n){n.l.H==0||n.J||kf(n.l,n)}function $t(n){Vr(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,dc(n.V),Yd(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function la(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||ua(t.i,n))){if(!n.K&&ua(t.i,n)&&t.H==3){try{var i=t.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)Xs(t),qr(t);else break e;Ic(t),Te(18)}}else t.Fa=s[1],0<t.Fa-t.V&&37500>s[2]&&t.G&&t.A==0&&!t.v&&(t.v=ns(ve(t.ib,t),6e3));if(1>=mf(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Ht(t,11)}else if((n.K||t.g==n)&&Xs(t),!Oi(e))for(s=t.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(t.V=l[0],l=l[1],t.H==2)if(l[0]=="c"){t.K=l[1],t.pa=l[2];const u=l[3];u!=null&&(t.ra=u,t.l.info("VER="+t.ra));const h=l[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,t.L=i,t.l.info("backChannelRequestTimeoutMs_="+i)),i=t;const f=n.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=i.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_c(r,r.h),r.h=null))}if(i.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(i.Da=T,$(i.I,i.F,T))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),i=t;var o=n;if(i.wa=Of(i,i.J?i.pa:null,i.Y),o.K){_f(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.C&&(Vr(a),rs(a)),i.g=o}else Pf(i);0<t.j.length&&jr(t)}else l[0]!="stop"&&l[0]!="close"||Ht(t,7);else t.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ht(t,7):Ec(t):l[0]!="noop"&&t.h&&t.h.Aa(l),t.A=0)}}Fi(4)}catch{}}function SE(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Cr(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function RE(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Cr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const i in n)e[t++]=i;return e}}}function lf(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Cr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=RE(n),i=SE(n),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}var uf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function CE(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Qt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Qt){this.h=n.h,Ys(this,n.j),this.s=n.s,this.g=n.g,Js(this,n.m),this.l=n.l;var e=n.i,t=new Ui;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ou(this,t),this.o=n.o}else n&&(e=String(n).match(uf))?(this.h=!1,Ys(this,e[1]||"",!0),this.s=gi(e[2]||""),this.g=gi(e[3]||"",!0),Js(this,e[4]),this.l=gi(e[5]||"",!0),ou(this,e[6]||"",!0),this.o=gi(e[7]||"")):(this.h=!1,this.i=new Ui(null,this.h))}Qt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(mi(e,au,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(mi(e,au,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(mi(t,t.charAt(0)=="/"?kE:bE,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",mi(t,DE)),n.join("")};function ft(n){return new Qt(n)}function Ys(n,e,t){n.j=t?gi(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Js(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ou(n,e,t){e instanceof Ui?(n.i=e,OE(n.i,n.h)):(t||(e=mi(e,NE)),n.i=new Ui(e,n.h))}function $(n,e,t){n.i.set(e,t)}function xr(n){return $(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function gi(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function mi(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,PE),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function PE(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var au=/[#\/\?@]/g,bE=/[#\?:]/g,kE=/[#\?]/g,NE=/[#\?@]/g,DE=/#/g;function Ui(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Mt(n){n.g||(n.g=new Map,n.h=0,n.i&&CE(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}v=Ui.prototype;v.add=function(n,e){Mt(this),this.i=null,n=Yn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function hf(n,e){Mt(n),e=Yn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function df(n,e){return Mt(n),e=Yn(n,e),n.g.has(e)}v.forEach=function(n,e){Mt(this),this.g.forEach(function(t,i){t.forEach(function(s){n.call(e,s,i,this)},this)},this)};v.ta=function(){Mt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let i=0;i<e.length;i++){const s=n[i];for(let r=0;r<s.length;r++)t.push(e[i])}return t};v.Z=function(n){Mt(this);let e=[];if(typeof n=="string")df(this,n)&&(e=e.concat(this.g.get(Yn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};v.set=function(n,e){return Mt(this),this.i=null,n=Yn(this,n),df(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};v.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function ff(n,e,t){hf(n,e),0<t.length&&(n.i=null,n.g.set(Yn(n,e),ic(t)),n.h+=t.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var i=e[t];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),n.push(s)}}return this.i=n.join("&")};function Yn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function OE(n,e){e&&!n.j&&(Mt(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(hf(this,i),ff(this,s,t))},n)),n.j=e}var ME=class{constructor(n,e){this.g=n,this.map=e}};function pf(n){this.l=n||LE,R.PerformanceNavigationTiming?(n=R.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var LE=10;function gf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mf(n){return n.h?1:n.g?n.g.size:0}function ua(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function _c(n,e){n.g?n.g.add(e):n.h=e}function _f(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}pf.prototype.cancel=function(){if(this.i=yf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yf(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return ic(n.i)}var VE=class{stringify(n){return R.JSON.stringify(n,void 0)}parse(n){return R.JSON.parse(n,void 0)}};function xE(){this.g=new VE}function FE(n,e,t){const i=t||"";try{lf(n,function(s,r){let o=s;es(s)&&(o=uc(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function UE(n,e){const t=new Dr;if(R.Image){const i=new Image;i.onload=Ss(Cs,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Ss(Cs,t,i,"TestLoadImage: error",!1,e),i.onabort=Ss(Cs,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ss(Cs,t,i,"TestLoadImage: timeout",!1,e),R.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function Cs(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function Fr(n){this.l=n.ec||null,this.j=n.ob||!1}ae(Fr,pc);Fr.prototype.g=function(){return new Ur(this.l,this.j)};Fr.prototype.i=function(n){return function(){return n}}({});function Ur(n,e){oe.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=yc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ae(Ur,oe);var yc=0;v=Ur.prototype;v.open=function(n,e){if(this.readyState!=yc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Bi(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||R).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=yc};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function vf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?os(this):Bi(this),this.readyState==3&&vf(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,os(this))};v.Ya=function(n){this.g&&(this.response=n,os(this))};v.ka=function(){this.g&&os(this)};function os(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Bi(n)}v.setRequestHeader=function(n,e){this.v.append(n,e)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Bi(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ur.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var BE=R.JSON.parse;function G(n){oe.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ef,this.L=this.M=!1}ae(G,oe);var Ef="",qE=/^https?$/i,jE=["POST","PUT"];v=G.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():oa.g(),this.C=this.u?ru(this.u):ru(oa),this.g.onreadystatechange=ve(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(r){cu(this,r);return}if(n=t||"",t=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)t.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())t.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),s=R.FormData&&n instanceof R.FormData,!(0<=Ld(jE,e))||i||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of t)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{wf(this),0<this.B&&((this.L=WE(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ve(this.ua,this)):this.A=fc(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){cu(this,r)}};function WE(n){return Fn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof nc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,he(this,"timeout"),this.abort(8))};function cu(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,If(n),Br(n)}function If(n){n.F||(n.F=!0,he(n,"complete"),he(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,he(this,"complete"),he(this,"abort"),Br(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Br(this,!0)),G.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Tf(this):this.kb())};v.kb=function(){Tf(this)};function Tf(n){if(n.h&&typeof nc<"u"&&(!n.C[1]||Ge(n)!=4||n.da()!=2)){if(n.v&&Ge(n)==4)fc(n.La,0,n);else if(he(n,"readystatechange"),Ge(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=o===0){var s=String(n.I).match(uf)[1]||null;!s&&R.self&&R.self.location&&(s=R.self.location.protocol.slice(0,-1)),i=!qE.test(s?s.toLowerCase():"")}t=i}if(t)he(n,"complete"),he(n,"success");else{n.m=6;try{var r=2<Ge(n)?n.g.statusText:""}catch{r=""}n.j=r+" ["+n.da()+"]",If(n)}}finally{Br(n)}}}}function Br(n,e){if(n.g){wf(n);const t=n.g,i=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||he(n,"ready");try{t.onreadystatechange=i}catch{}}}function wf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(R.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function Ge(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),BE(e)}};function lu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Ef:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function $E(n){const e={};n=(n.g&&2<=Ge(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<n.length;i++){if(Oi(n[i]))continue;var t=gE(n[i]);const s=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const r=e[s]||[];e[s]=r,r.push(t)}cE(e,function(i){return i.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Af(n){let e="";return rc(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function vc(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=Af(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):$(n,e,t))}function oi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Sf(n){this.Ga=0,this.j=[],this.l=new Dr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,n),this.hb=oi("retryDelaySeedMs",1e4,n),this.eb=oi("forwardChannelMaxRetries",2,n),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new pf(n&&n.concurrentRequestLimit),this.Ja=new xE,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Sf.prototype;v.ra=8;v.H=1;function Ec(n){if(Rf(n),n.H==3){var e=n.W++,t=ft(n.I);if($(t,"SID",n.K),$(t,"RID",e),$(t,"TYPE","terminate"),as(n,t),e=new ss(n,n.l,e),e.L=2,e.A=xr(ft(t)),t=!1,R.navigator&&R.navigator.sendBeacon)try{t=R.navigator.sendBeacon(e.A.toString(),"")}catch{}!t&&R.Image&&(new Image().src=e.A,t=!0),t||(e.g=Mf(e.l,null),e.g.ha(e.A)),e.G=Date.now(),rs(e)}Df(n)}function qr(n){n.g&&(Tc(n),n.g.cancel(),n.g=null)}function Rf(n){qr(n),n.u&&(R.clearTimeout(n.u),n.u=null),Xs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&R.clearTimeout(n.m),n.m=null)}function jr(n){if(!gf(n.i)&&!n.m){n.m=!0;var e=n.Na;Li||Gd(),Vi||(Li(),Vi=!0),hc.add(e,n),n.C=0}}function HE(n,e){return mf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ns(ve(n.Na,n,e),Nf(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const s=new ss(this,this.l,n);let r=this.s;if(this.U&&(r?(r=Ud(r),Bd(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var i=this.j[t];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Cf(this,s,e),t=ft(this.I),$(t,"RID",n),$(t,"CVER",22),this.F&&$(t,"X-HTTP-Session-Id",this.F),as(this,t),r&&(this.O?e="headers="+encodeURIComponent(String(Af(r)))+"&"+e:this.o&&vc(t,this.o,r)),_c(this.i,s),this.bb&&$(t,"TYPE","init"),this.P?($(t,"$req",e),$(t,"SID","null"),s.aa=!0,ca(s,t,null)):ca(s,t,e),this.H=2}}else this.H==3&&(n?uu(this,n):this.j.length==0||gf(this.i)||uu(this))};function uu(n,e){var t;e?t=e.m:t=n.W++;const i=ft(n.I);$(i,"SID",n.K),$(i,"RID",t),$(i,"AID",n.V),as(n,i),n.o&&n.s&&vc(i,n.o,n.s),t=new ss(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Cf(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),_c(n.i,t),ca(t,i,e)}function as(n,e){n.na&&rc(n.na,function(t,i){$(e,i,t)}),n.h&&lf({},function(t,i){$(e,i,t)})}function Cf(n,e,t){t=Math.min(n.j.length,t);var i=n.h?ve(n.h.Va,n.h,n):null;e:{var s=n.j;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<t;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{FE(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,i}function Pf(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Li||Gd(),Vi||(Li(),Vi=!0),hc.add(e,n),n.A=0}}function Ic(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ns(ve(n.Ma,n),Nf(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,bf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ns(ve(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Te(10),qr(this),bf(this))};function Tc(n){n.B!=null&&(R.clearTimeout(n.B),n.B=null)}function bf(n){n.g=new ss(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ft(n.wa);$(e,"RID","rpc"),$(e,"SID",n.K),$(e,"AID",n.V),$(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&$(e,"TO",n.qa),$(e,"TYPE","xmlhttp"),as(n,e),n.o&&n.s&&vc(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.A=xr(ft(e)),t.u=null,t.S=!0,rf(t,n)}v.ib=function(){this.v!=null&&(this.v=null,qr(this),Ic(this),Te(19))};function Xs(n){n.v!=null&&(R.clearTimeout(n.v),n.v=null)}function kf(n,e){var t=null;if(n.g==e){Xs(n),Tc(n),n.g=null;var i=2}else if(ua(n.i,e))t=e.F,_f(n.i,e),i=1;else return;if(n.H!=0){if(e.i)if(i==1){t=e.u?e.u.length:0,e=Date.now()-e.G;var s=n.C;i=Or(),he(i,new Zd(i,t)),jr(n)}else Pf(n);else if(s=e.s,s==3||s==0&&0<e.ca||!(i==1&&HE(n,e)||i==2&&Ic(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Ht(n,5);break;case 4:Ht(n,10);break;case 3:Ht(n,6);break;default:Ht(n,2)}}}function Nf(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Ht(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var i=ve(n.pb,n);t||(t=new Qt("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Ys(t,"https"),xr(t)),UE(t.toString(),i)}else Te(2);n.H=0,n.h&&n.h.za(e),Df(n),Rf(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Te(2)):(this.l.info("Failed to ping google.com"),Te(1))};function Df(n){if(n.H=0,n.ma=[],n.h){const e=yf(n.i);(e.length!=0||n.j.length!=0)&&(eu(n.ma,e),eu(n.ma,n.j),n.i.i.length=0,ic(n.j),n.j.length=0),n.h.ya()}}function Of(n,e,t){var i=t instanceof Qt?ft(t):new Qt(t);if(i.g!="")e&&(i.g=e+"."+i.g),Js(i,i.m);else{var s=R.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Qt(null);i&&Ys(r,i),e&&(r.g=e),s&&Js(r,s),t&&(r.l=t),i=r}return t=n.F,e=n.Da,t&&e&&$(i,t,e),$(i,"VER",n.ra),as(n,i),i}function Mf(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n.Ha&&!n.va?new G(new Fr({ob:t})):new G(n.va),e.Oa(n.J),e}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Lf(){}v=Lf.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Zs(){if(Fn&&!(10<=Number(sE)))throw Error("Environmental error: no available transport.")}Zs.prototype.g=function(n,e){return new Ne(n,e)};function Ne(n,e){oe.call(this),this.g=new Sf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Oi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oi(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Jn(this)}ae(Ne,oe);Ne.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Te(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Of(n,null,n.Y),jr(n)};Ne.prototype.close=function(){Ec(this.g)};Ne.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=uc(n),n=t);e.j.push(new ME(e.fb++,n)),e.H==3&&jr(e)};Ne.prototype.N=function(){this.g.h=null,delete this.j,Ec(this.g),delete this.g,Ne.$.N.call(this)};function Vf(n){gc.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ae(Vf,gc);function xf(){mc.call(this),this.status=1}ae(xf,mc);function Jn(n){this.g=n}ae(Jn,Lf);Jn.prototype.Ba=function(){he(this.g,"a")};Jn.prototype.Aa=function(n){he(this.g,new Vf(n))};Jn.prototype.za=function(n){he(this.g,new xf)};Jn.prototype.ya=function(){he(this.g,"b")};function zE(){this.blockSize=-1}function qe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ae(qe,zE);qe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ko(n,e,t){t||(t=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(s=0;16>s;++s)i[s]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],s=n.g[2];var r=n.g[3],o=e+(r^t&(s^r))+i[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[3]+3250441966&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[7]+4249261313&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[11]+2304563134&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(r^t&(s^r))+i[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=r+(s^e&(t^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(t^r&(e^t))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=t+(e^s&(r^e))+i[15]+1236535329&4294967295,t=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(t^s))+i[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[0]+3921069994&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[4]+3889429448&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[8]+1163531501&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(t^s))+i[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=r+(t^s&(e^t))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^t&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=t+(r^e&(s^r))+i[12]+2368359562&4294967295,t=s+(o<<20&4294967295|o>>>12),o=e+(t^s^r)+i[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[14]+4259657740&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[10]+3200236656&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[6]+76029189&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(t^s^r)+i[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=r+(e^t^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^t)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=t+(s^r^e)+i[2]+3299628645&4294967295,t=s+(o<<23&4294967295|o>>>9),o=e+(s^(t|~r))+i[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[5]+4237533241&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[1]+2240044497&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[13]+1309151649&4294967295,t=s+(o<<21&4294967295|o>>>11),o=e+(s^(t|~r))+i[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=r+(t^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~t))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=t+(r^(s|~e))+i[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+s&4294967295,n.g[3]=n.g[3]+r&4294967295}qe.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=t;)ko(this,n,r),r+=this.blockSize;if(typeof n=="string"){for(;r<e;)if(i[s++]=n.charCodeAt(r++),s==this.blockSize){ko(this,i),s=0;break}}else for(;r<e;)if(i[s++]=n[r++],s==this.blockSize){ko(this,i),s=0;break}}this.h=s,this.i+=e};qe.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var i=0;32>i;i+=8)n[t++]=this.g[e]>>>i&255;return n};function x(n,e){this.h=e;for(var t=[],i=!0,s=n.length-1;0<=s;s--){var r=n[s]|0;i&&r==e||(t[s]=r,i=!1)}this.g=t}var GE={};function wc(n){return-128<=n&&128>n?tE(n,function(e){return new x([e|0],0>e?-1:0)}):new x([n|0],0>n?-1:0)}function Ke(n){if(isNaN(n)||!isFinite(n))return bn;if(0>n)return ce(Ke(-n));for(var e=[],t=1,i=0;n>=t;i++)e[i]=n/t|0,t*=ha;return new x(e,0)}function Ff(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return ce(Ff(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Ke(Math.pow(e,8)),i=bn,s=0;s<n.length;s+=8){var r=Math.min(8,n.length-s),o=parseInt(n.substring(s,s+r),e);8>r?(r=Ke(Math.pow(e,r)),i=i.R(r).add(Ke(o))):(i=i.R(t),i=i.add(Ke(o)))}return i}var ha=4294967296,bn=wc(0),da=wc(1),hu=wc(16777216);v=x.prototype;v.ea=function(){if(De(this))return-ce(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var i=this.D(t);n+=(0<=i?i:ha+i)*e,e*=ha}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(ot(this))return"0";if(De(this))return"-"+ce(this).toString(n);for(var e=Ke(Math.pow(n,6)),t=this,i="";;){var s=tr(t,e).g;t=er(t,s.R(e));var r=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=s,ot(t))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function ot(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function De(n){return n.h==-1}v.X=function(n){return n=er(this,n),De(n)?-1:ot(n)?0:1};function ce(n){for(var e=n.g.length,t=[],i=0;i<e;i++)t[i]=~n.g[i];return new x(t,~n.h).add(da)}v.abs=function(){return De(this)?ce(this):this};v.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(n.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(n.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,t[s]=o<<16|r}return new x(t,t[t.length-1]&-2147483648?-1:0)};function er(n,e){return n.add(ce(e))}v.R=function(n){if(ot(this)||ot(n))return bn;if(De(this))return De(n)?ce(this).R(ce(n)):ce(ce(this).R(n));if(De(n))return ce(this.R(ce(n)));if(0>this.X(hu)&&0>n.X(hu))return Ke(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],i=0;i<2*e;i++)t[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<n.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=n.D(s)>>>16,c=n.D(s)&65535;t[2*i+2*s]+=o*c,Ps(t,2*i+2*s),t[2*i+2*s+1]+=r*c,Ps(t,2*i+2*s+1),t[2*i+2*s+1]+=o*a,Ps(t,2*i+2*s+1),t[2*i+2*s+2]+=r*a,Ps(t,2*i+2*s+2)}for(i=0;i<e;i++)t[i]=t[2*i+1]<<16|t[2*i];for(i=e;i<2*e;i++)t[i]=0;return new x(t,0)};function Ps(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function ai(n,e){this.g=n,this.h=e}function tr(n,e){if(ot(e))throw Error("division by zero");if(ot(n))return new ai(bn,bn);if(De(n))return e=tr(ce(n),e),new ai(ce(e.g),ce(e.h));if(De(e))return e=tr(n,ce(e)),new ai(ce(e.g),e.h);if(30<n.g.length){if(De(n)||De(e))throw Error("slowDivide_ only works with positive integers.");for(var t=da,i=e;0>=i.X(n);)t=du(t),i=du(i);var s=vn(t,1),r=vn(i,1);for(i=vn(i,2),t=vn(t,2);!ot(i);){var o=r.add(i);0>=o.X(n)&&(s=s.add(t),r=o),i=vn(i,1),t=vn(t,1)}return e=er(n,s.R(e)),new ai(s,e)}for(s=bn;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),i=Math.ceil(Math.log(t)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ke(t),o=r.R(e);De(o)||0<o.X(n);)t-=i,r=Ke(t),o=r.R(e);ot(r)&&(r=da),s=s.add(r),n=er(n,o)}return new ai(s,n)}v.gb=function(n){return tr(this,n).h};v.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)&n.D(i);return new x(t,this.h&n.h)};v.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)|n.D(i);return new x(t,this.h|n.h)};v.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],i=0;i<e;i++)t[i]=this.D(i)^n.D(i);return new x(t,this.h^n.h)};function du(n){for(var e=n.g.length+1,t=[],i=0;i<e;i++)t[i]=n.D(i)<<1|n.D(i-1)>>>31;return new x(t,n.h)}function vn(n,e){var t=e>>5;e%=32;for(var i=n.g.length-t,s=[],r=0;r<i;r++)s[r]=0<e?n.D(r+t)>>>e|n.D(r+t+1)<<32-e:n.D(r+t);return new x(s,n.h)}Zs.prototype.createWebChannel=Zs.prototype.g;Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;Mr.NO_ERROR=0;Mr.TIMEOUT=8;Mr.HTTP_ERROR=6;ef.COMPLETE="complete";tf.EventType=is;is.OPEN="a";is.CLOSE="b";is.ERROR="c";is.MESSAGE="d";oe.prototype.listen=oe.prototype.O;G.prototype.listenOnce=G.prototype.P;G.prototype.getLastError=G.prototype.Sa;G.prototype.getLastErrorCode=G.prototype.Ia;G.prototype.getStatus=G.prototype.da;G.prototype.getResponseJson=G.prototype.Wa;G.prototype.getResponseText=G.prototype.ja;G.prototype.send=G.prototype.ha;G.prototype.setWithCredentials=G.prototype.Oa;qe.prototype.digest=qe.prototype.l;qe.prototype.reset=qe.prototype.reset;qe.prototype.update=qe.prototype.j;x.prototype.add=x.prototype.add;x.prototype.multiply=x.prototype.R;x.prototype.modulo=x.prototype.gb;x.prototype.compare=x.prototype.X;x.prototype.toNumber=x.prototype.ea;x.prototype.toString=x.prototype.toString;x.prototype.getBits=x.prototype.D;x.fromNumber=Ke;x.fromString=Ff;var KE=function(){return new Zs},QE=function(){return Or()},No=Mr,YE=ef,JE=fn,fu={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},bs=tf,XE=G,ZE=qe,kn=x;const pu="@firebase/firestore";/**
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
 */class pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pe.UNAUTHENTICATED=new pe(null),pe.GOOGLE_CREDENTIALS=new pe("google-credentials-uid"),pe.FIRST_PARTY=new pe("first-party-uid"),pe.MOCK_USER=new pe("mock-user");/**
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
 */let Xn="10.10.0";/**
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
 */const tn=new Xi("@firebase/firestore");function ci(){return tn.logLevel}function _(n,...e){if(tn.logLevel<=b.DEBUG){const t=e.map(Ac);tn.debug(`Firestore (${Xn}): ${n}`,...t)}}function nt(n,...e){if(tn.logLevel<=b.ERROR){const t=e.map(Ac);tn.error(`Firestore (${Xn}): ${n}`,...t)}}function Un(n,...e){if(tn.logLevel<=b.WARN){const t=e.map(Ac);tn.warn(`Firestore (${Xn}): ${n}`,...t)}}function Ac(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function S(n="Unexpected state"){const e=`FIRESTORE (${Xn}) INTERNAL ASSERTION FAILED: `+n;throw nt(e),new Error(e)}function B(n,e){n||S()}function P(n,e){return n}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends We{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ye{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Uf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(pe.UNAUTHENTICATED))}shutdown(){}}class tI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class nI{constructor(e){this.t=e,this.currentUser=pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ye,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ye)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(B(typeof i.accessToken=="string"),new Uf(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new pe(e)}}class iI{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sI{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new iI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=r=>{r.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(B(typeof t.token=="string"),this.R=t.token,new rI(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function aI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=aI(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function L(n,e){return n<e?-1:n>e?1:0}function Bn(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class ee{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new ee(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?L(this.nanoseconds,e.nanoseconds):L(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new ee(0,0))}static max(){return new C(new ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qi{constructor(e,t,i){t===void 0?t=0:t>e.length&&S(),i===void 0?i=e.length-t:i>e.length-t&&S(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return qi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends qi{construct(e,t,i){return new z(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new I(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new z(t)}static emptyPath(){return new z([])}}const cI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends qi{construct(e,t,i){return new ue(e,t,i)}static isValidIdentifier(e){return cI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new I(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new I(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new I(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
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
 */class w{constructor(e){this.path=e}static fromPath(e){return new w(z.fromString(e))}static fromName(e){return new w(z.fromString(e).popFirst(5))}static empty(){return new w(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new w(new z(e.slice()))}}function lI(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=C.fromTimestamp(i===1e9?new ee(t+1,0):new ee(t,i));return new bt(s,w.empty(),e)}function uI(n){return new bt(n.readTime,n.key,-1)}class bt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new bt(C.min(),w.empty(),-1)}static max(){return new bt(C.max(),w.empty(),-1)}}function hI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=w.comparator(n.documentKey,e.documentKey),t!==0?t:L(n.largestBatchId,e.largestBatchId))}/**
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
 */const dI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function cs(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==dI)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,i)=>{t(e)})}static reject(e){return new p((t,i)=>{i(e)})}static waitFor(e){return new p((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},c=>i(c))}),o=!0,r===s&&t()})}static or(e){let t=p.resolve(!1);for(const i of e)t=t.next(s=>s?p.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new p((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,t){return new p((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}/**
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
 */class Sc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ye,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ti(e,t.error)):this.V.resolve()},this.transaction.onerror=i=>{const s=Rc(i.target.error);this.V.reject(new Ti(e,s))}}static open(e,t,i,s){try{return new Sc(t,e.transaction(s,i))}catch(r){throw new Ti(t,r)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(_("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new gI(t)}}class zt{constructor(e,t,i){this.name=e,this.version=t,this.p=i,zt.S(J())===12.2&&nt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return _("SimpleDb","Removing database:",e),jt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ka())return!1;if(zt.C())return!0;const e=J(),t=zt.S(e),i=0<t&&t<10,s=zt.v(e),r=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||r)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static v(e){const t=e.match(/Android ([\d.]+)/i),i=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async O(e){return this.db||(_("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,i)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=r=>{const o=r.target.result;t(o)},s.onblocked=()=>{i(new Ti(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=r=>{const o=r.target.error;o.name==="VersionError"?i(new I(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new I(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new Ti(e,o))},s.onupgradeneeded=r=>{_("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,s.transaction,r.oldVersion,this.version).next(()=>{_("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=t=>this.L(t)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,s){const r=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Sc.open(this.db,e,r?"readonly":"readwrite",i),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),p.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(_("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class pI{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return jt(this.k.delete())}}class Ti extends I{constructor(e,t){super(g.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ls(n){return n.name==="IndexedDbTransactionError"}class gI{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(_("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(_("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),jt(i)}add(e){return _("SimpleDb","ADD",this.store.name,e,e),jt(this.store.add(e))}get(e){return jt(this.store.get(e)).next(t=>(t===void 0&&(t=null),_("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return _("SimpleDb","DELETE",this.store.name,e),jt(this.store.delete(e))}count(){return _("SimpleDb","COUNT",this.store.name),jt(this.store.count())}W(e,t){const i=this.options(e,t),s=i.index?this.store.index(i.index):this.store;if(typeof s.getAll=="function"){const r=s.getAll(i.range);return new p((o,a)=>{r.onerror=c=>{a(c.target.error)},r.onsuccess=c=>{o(c.target.result)}})}{const r=this.cursor(i),o=[];return this.G(r,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new p((s,r)=>{i.onerror=o=>{r(o.target.error)},i.onsuccess=o=>{s(o.target.result)}})}H(e,t){_("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.J=!1;const s=this.cursor(i);return this.G(s,(r,o,a)=>a.delete())}Y(e,t){let i;t?i=e:(i={},t=e);const s=this.cursor(i);return this.G(s,t)}Z(e){const t=this.cursor({});return new p((i,s)=>{t.onerror=r=>{const o=Rc(r.target.error);s(o)},t.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}G(e,t){const i=[];return new p((s,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new pI(a),l=t(a.primaryKey,a.value,c);if(l instanceof p){const u=l.catch(h=>(c.done(),p.reject(h)));i.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>p.waitFor(i))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.J?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function jt(n){return new p((e,t)=>{n.onsuccess=i=>{const s=i.target.result;e(s)},n.onerror=i=>{const s=Rc(i.target.error);t(s)}})}let gu=!1;function Rc(n){const e=zt.S(J());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const i=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return gu||(gu=!0,setTimeout(()=>{throw i},0)),i}}return n}/**
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
 */class Cc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.se(i),this.oe=i=>t.writeSequenceNumber(i))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Cc._e=-1;function Wr(n){return n==null}function nr(n){return n===0&&1/n==-1/0}function mI(n){return typeof n=="number"&&Number.isInteger(n)&&!nr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function mu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function qf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let X=class fa{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new fa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new fa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ks(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ks(this.root,e,this.comparator,!1)}getReverseIterator(){return new ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ks(this.root,e,this.comparator,!0)}},ks=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Rt=class rt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??rt.RED,this.left=s??rt.EMPTY,this.right=r??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new rt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}};Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(e,t,i,s,r){return this}insert(e,t,i){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _u(this.data.getIterator())}getIteratorFrom(e){return new _u(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class _u{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new be([])}unionWith(e){let t=new de(ue.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class jf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jf("Invalid base64 string: "+r):r}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return L(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const _I=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(n){if(B(!!n),typeof n=="string"){let e=0;const t=_I.exec(n);if(B(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Y(n.seconds),nanos:Y(n.nanos)}}function Y(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
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
 */function Pc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function bc(n){const e=n.mapValue.fields.__previous_value__;return Pc(e)?bc(e):e}function ji(n){const e=kt(n.mapValue.fields.__local_write_time__.timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class yI{constructor(e,t,i,s,r,o,a,c,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Wi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ns={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pc(n)?4:vI(n)?9007199254740991:10:S()}function it(n,e){if(n===e)return!0;const t=sn(n);if(t!==sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ji(n).isEqual(ji(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=kt(s.timestampValue),a=kt(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return nn(s.bytesValue).isEqual(nn(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Y(s.geoPointValue.latitude)===Y(r.geoPointValue.latitude)&&Y(s.geoPointValue.longitude)===Y(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Y(s.integerValue)===Y(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=Y(s.doubleValue),a=Y(r.doubleValue);return o===a?nr(o)===nr(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(s,r){const o=s.mapValue.fields||{},a=r.mapValue.fields||{};if(mu(o)!==mu(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!it(o[c],a[c])))return!1;return!0}(n,e);default:return S()}}function $i(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function qn(n,e){if(n===e)return 0;const t=sn(n),i=sn(e);if(t!==i)return L(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return L(n.booleanValue,e.booleanValue);case 2:return function(r,o){const a=Y(r.integerValue||r.doubleValue),c=Y(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return yu(n.timestampValue,e.timestampValue);case 4:return yu(ji(n),ji(e));case 5:return L(n.stringValue,e.stringValue);case 6:return function(r,o){const a=nn(r),c=nn(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=L(a[l],c[l]);if(u!==0)return u}return L(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,o){const a=L(Y(r.latitude),Y(o.latitude));return a!==0?a:L(Y(r.longitude),Y(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=qn(a[l],c[l]);if(u)return u}return L(a.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Ns.mapValue&&o===Ns.mapValue)return 0;if(r===Ns.mapValue)return 1;if(o===Ns.mapValue)return-1;const a=r.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=L(c[h],u[h]);if(d!==0)return d;const f=qn(a[c[h]],l[u[h]]);if(f!==0)return f}return L(c.length,u.length)}(n.mapValue,e.mapValue);default:throw S()}}function yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return L(n,e);const t=kt(n),i=kt(e),s=L(t.seconds,i.seconds);return s!==0?s:L(t.nanos,i.nanos)}function jn(n){return pa(n)}function pa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=kt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return nn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return w.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=pa(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${pa(t.fields[o])}`;return s+"}"}(n.mapValue):S()}function ga(n){return!!n&&"integerValue"in n}function kc(n){return!!n&&"arrayValue"in n}function vu(n){return!!n&&"nullValue"in n}function Eu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xs(n){return!!n&&"mapValue"in n}function wi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return pn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=wi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function vI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(t)}setAll(e){let t=ue.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=wi(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){pn(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Ae(wi(this.value))}}function Wf(n){const e=[];return pn(n.fields,(t,i)=>{const s=new ue([t]);if(xs(i)){const r=Wf(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new be(e)}/**
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
 */class ge{constructor(e,t,i,s,r,o,a){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ge(e,0,C.min(),C.min(),C.min(),Ae.empty(),0)}static newFoundDocument(e,t,i,s){return new ge(e,1,t,C.min(),i,s,0)}static newNoDocument(e,t){return new ge(e,2,t,C.min(),C.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ge(e,3,t,C.min(),C.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ir{constructor(e,t){this.position=e,this.inclusive=t}}function Iu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=w.comparator(w.fromName(o.referenceValue),t.key):i=qn(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class sr{constructor(e,t="asc"){this.field=e,this.dir=t}}function EI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $f{}class Z extends $f{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new TI(e,t,i):t==="array-contains"?new SI(e,i):t==="in"?new RI(e,i):t==="not-in"?new CI(e,i):t==="array-contains-any"?new PI(e,i):new Z(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new wI(e,i):new AI(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qn(t,this.value)):t!==null&&sn(this.value)===sn(t)&&this.matchesComparison(qn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class st extends $f{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new st(e,t)}matches(e){return Hf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Hf(n){return n.op==="and"}function zf(n){return II(n)&&Hf(n)}function II(n){for(const e of n.filters)if(e instanceof st)return!1;return!0}function ma(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+jn(n.value);if(zf(n))return n.filters.map(e=>ma(e)).join(",");{const e=n.filters.map(t=>ma(t)).join(",");return`${n.op}(${e})`}}function Gf(n,e){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&it(i.value,s.value)}(n,e):n instanceof st?function(i,s){return s instanceof st&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,o,a)=>r&&Gf(o,s.filters[a]),!0):!1}(n,e):void S()}function Kf(n){return n instanceof Z?function(t){return`${t.field.canonicalString()} ${t.op} ${jn(t.value)}`}(n):n instanceof st?function(t){return t.op.toString()+" {"+t.getFilters().map(Kf).join(" ,")+"}"}(n):"Filter"}class TI extends Z{constructor(e,t,i){super(e,t,i),this.key=w.fromName(i.referenceValue)}matches(e){const t=w.comparator(e.key,this.key);return this.matchesComparison(t)}}class wI extends Z{constructor(e,t){super(e,"in",t),this.keys=Qf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class AI extends Z{constructor(e,t){super(e,"not-in",t),this.keys=Qf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Qf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>w.fromName(i.referenceValue))}class SI extends Z{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kc(t)&&$i(t.arrayValue,this.value)}}class RI extends Z{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&$i(this.value.arrayValue,t)}}class CI extends Z{constructor(e,t){super(e,"not-in",t)}matches(e){if($i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!$i(this.value.arrayValue,t)}}class PI extends Z{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>$i(this.value.arrayValue,i))}}/**
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
 */class bI{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function wu(n,e=null,t=[],i=[],s=null,r=null,o=null){return new bI(n,e,t,i,s,r,o)}function Nc(n){const e=P(n);if(e.ce===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>ma(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Wr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>jn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>jn(i)).join(",")),e.ce=t}return e.ce}function Dc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Tu(n.startAt,e.startAt)&&Tu(n.endAt,e.endAt)}function _a(n){return w.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $r{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function kI(n,e,t,i,s,r,o,a){return new $r(n,e,t,i,s,r,o,a)}function Oc(n){return new $r(n)}function Au(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NI(n){return n.collectionGroup!==null}function Ai(n){const e=P(n);if(e.le===null){e.le=[];const t=new Set;for(const r of e.explicitOrderBy)e.le.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new de(ue.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new sr(r,i))}),t.has(ue.keyField().canonicalString())||e.le.push(new sr(ue.keyField(),i))}return e.le}function Je(n){const e=P(n);return e.he||(e.he=DI(e,Ai(n))),e.he}function DI(n,e){if(n.limitType==="F")return wu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new sr(s.field,r)});const t=n.endAt?new ir(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ir(n.startAt.position,n.startAt.inclusive):null;return wu(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ya(n,e,t){return new $r(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Hr(n,e){return Dc(Je(n),Je(e))&&n.limitType===e.limitType}function Yf(n){return`${Nc(Je(n))}|lt:${n.limitType}`}function In(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>Kf(s)).join(", ")}]`),Wr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>jn(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>jn(s)).join(",")),`Target(${i})`}(Je(n))}; limitType=${n.limitType})`}function zr(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):w.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Ai(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(o,a,c){const l=Iu(o,a,c);return o.inclusive?l<=0:l<0}(i.startAt,Ai(i),s)||i.endAt&&!function(o,a,c){const l=Iu(o,a,c);return o.inclusive?l>=0:l>0}(i.endAt,Ai(i),s))}(n,e)}function OI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jf(n){return(e,t)=>{let i=!1;for(const s of Ai(n)){const r=MI(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function MI(n,e,t){const i=n.field.isKeyField()?w.comparator(e.key,t.key):function(r,o,a){const c=o.data.field(r),l=a.data.field(r);return c!==null&&l!==null?qn(c,l):S()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return S()}}/**
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
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return qf(this.inner)}size(){return this.innerSize}}/**
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
 */const LI=new X(w.comparator);function pt(){return LI}const Xf=new X(w.comparator);function _i(...n){let e=Xf;for(const t of n)e=e.insert(t.key,t);return e}function Zf(n){let e=Xf;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Gt(){return Si()}function ep(){return Si()}function Si(){return new Zn(n=>n.toString(),(n,e)=>n.isEqual(e))}const VI=new X(w.comparator),xI=new de(w.comparator);function k(...n){let e=xI;for(const t of n)e=e.add(t);return e}const FI=new de(L);function UI(){return FI}/**
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
 */function tp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nr(e)?"-0":e}}function np(n){return{integerValue:""+n}}function ip(n,e){return mI(e)?np(e):tp(n,e)}/**
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
 */class Gr{constructor(){this._=void 0}}function BI(n,e,t){return n instanceof rr?function(s,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Pc(r)&&(r=bc(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):n instanceof Hi?rp(n,e):n instanceof zi?op(n,e):function(s,r){const o=sp(s,r),a=Su(o)+Su(s.Ie);return ga(o)&&ga(s.Ie)?np(a):tp(s.serializer,a)}(n,e)}function qI(n,e,t){return n instanceof Hi?rp(n,e):n instanceof zi?op(n,e):t}function sp(n,e){return n instanceof Gi?function(i){return ga(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class rr extends Gr{}class Hi extends Gr{constructor(e){super(),this.elements=e}}function rp(n,e){const t=ap(e);for(const i of n.elements)t.some(s=>it(s,i))||t.push(i);return{arrayValue:{values:t}}}class zi extends Gr{constructor(e){super(),this.elements=e}}function op(n,e){let t=ap(e);for(const i of n.elements)t=t.filter(s=>!it(s,i));return{arrayValue:{values:t}}}class Gi extends Gr{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Su(n){return Y(n.integerValue||n.doubleValue)}function ap(n){return kc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class jI{constructor(e,t){this.field=e,this.transform=t}}function WI(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Hi&&s instanceof Hi||i instanceof zi&&s instanceof zi?Bn(i.elements,s.elements,it):i instanceof Gi&&s instanceof Gi?it(i.Ie,s.Ie):i instanceof rr&&s instanceof rr}(n.transform,e.transform)}class $I{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kr{}function cp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new up(n.key,Xe.none()):new us(n.key,n.data,Xe.none());{const t=n.data,i=Ae.empty();let s=new de(ue.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Lt(n.key,i,new be(s.toArray()),Xe.none())}}function HI(n,e,t){n instanceof us?function(s,r,o){const a=s.value.clone(),c=Cu(s.fieldTransforms,r,o.transformResults);a.setAll(c),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Lt?function(s,r,o){if(!Fs(s.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Cu(s.fieldTransforms,r,o.transformResults),c=r.data;c.setAll(lp(s)),c.setAll(a),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ri(n,e,t,i){return n instanceof us?function(r,o,a,c){if(!Fs(r.precondition,o))return a;const l=r.value.clone(),u=Pu(r.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,e,t,i):n instanceof Lt?function(r,o,a,c){if(!Fs(r.precondition,o))return a;const l=Pu(r.fieldTransforms,c,o),u=o.data;return u.setAll(lp(r)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(n,e,t,i):function(r,o,a){return Fs(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function zI(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=sp(i.transform,s||null);r!=null&&(t===null&&(t=Ae.empty()),t.set(i.field,r))}return t||null}function Ru(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Bn(i,s,(r,o)=>WI(r,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class us extends Kr{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends Kr{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function lp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Cu(n,e,t){const i=new Map;B(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,qI(o,a,t[s]))}return i}function Pu(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,BI(r,o,e))}return i}class up extends Kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends Kr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class KI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&HI(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ri(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ri(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=ep();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=t.has(s.key)?null:a;const c=cp(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),k())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(t,i)=>Ru(t,i))&&Bn(this.baseMutations,e.baseMutations,(t,i)=>Ru(t,i))}}class Mc{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){B(e.mutations.length===i.length);let s=function(){return VI}();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Mc(e,t,i,s)}}/**
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
 */class QI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class YI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Q,D;function JI(n){switch(n){default:return S();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function hp(n){if(n===void 0)return nt("GRPC error has no .code"),g.UNKNOWN;switch(n){case Q.OK:return g.OK;case Q.CANCELLED:return g.CANCELLED;case Q.UNKNOWN:return g.UNKNOWN;case Q.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Q.INTERNAL:return g.INTERNAL;case Q.UNAVAILABLE:return g.UNAVAILABLE;case Q.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Q.NOT_FOUND:return g.NOT_FOUND;case Q.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Q.ABORTED:return g.ABORTED;case Q.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Q.DATA_LOSS:return g.DATA_LOSS;default:return S()}}(D=Q||(Q={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XI(){return new TextEncoder}/**
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
 */const ZI=new kn([4294967295,4294967295],0);function bu(n){const e=XI().encode(n),t=new ZE;return t.update(e),new Uint8Array(t.digest())}function ku(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new kn([t,i],0),new kn([s,r],0)]}class Lc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new yi(`Invalid padding: ${t}`);if(i<0)throw new yi(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new yi(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=kn.fromNumber(this.Te)}de(e,t,i){let s=e.add(t.multiply(kn.fromNumber(i)));return s.compare(ZI)===1&&(s=new kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=bu(e),[i,s]=ku(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);if(!this.Ae(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Lc(r,s,t);return i.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=bu(e),[i,s]=ku(t);for(let r=0;r<this.hashCount;r++){const o=this.de(i,s,r);this.Re(o)}}Re(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Qr{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qr(C.min(),s,new X(L),pt(),k())}}class hs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new hs(i,t,k(),k(),k())}}/**
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
 */class Us{constructor(e,t,i,s){this.Ve=e,this.removedTargetIds=t,this.key=i,this.me=s}}class dp{constructor(e,t){this.targetId=e,this.fe=t}}class fp{constructor(e,t,i=Ie.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Nu{constructor(){this.ge=0,this.pe=Ou(),this.ye=Ie.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=k(),t=k(),i=k();return this.pe.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:S()}}),new hs(this.ye,this.we,e,t,i)}Fe(){this.Se=!1,this.pe=Ou()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,B(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class eT{constructor(e){this.Be=e,this.ke=new Map,this.qe=pt(),this.Qe=Du(),this.Ke=new X(L)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.Ce(e.resumeToken);break;case 1:i.Ne(),i.be||i.Fe(),i.Ce(e.resumeToken);break;case 2:i.Ne(),i.be||this.removeTarget(t);break;case 3:this.je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.Ce(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((i,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,i=e.fe.count,s=this.Ye(t);if(s){const r=s.target;if(_a(r))if(i===0){const o=new w(r.path);this.We(t,o,ge.newNoDocument(o,C.min()))}else B(i===1);else{const o=this.Ze(t);if(o!==i){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,l)}}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,a;try{o=nn(i).toUint8Array()}catch(c){if(c instanceof jf)return Un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Lc(o,s,r)}catch(c){return Un(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,i){return t.fe.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(t,r,null),s++)}),s}it(e){const t=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&_a(a.target)){const c=new w(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,ge.newNoDocument(c,e))}r.De&&(t.set(o,r.ve()),r.Fe())}});let i=k();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const s=new Qr(e,t,this.Ke,this.qe,i);return this.qe=pt(),this.Qe=Du(),this.Ke=new X(L),s}Ue(e,t){if(!this.je(e))return;const i=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,i),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const s=this.ze(e);this.st(e,t)?s.Me(t,1):s.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),i&&(this.qe=this.qe.insert(t,i))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new Nu,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new de(L),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||_("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Nu),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Du(){return new X(w.comparator)}function Ou(){return new X(w.comparator)}const tT={asc:"ASCENDING",desc:"DESCENDING"},nT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iT={and:"AND",or:"OR"};class sT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function va(n,e){return n.useProto3Json||Wr(e)?e:{value:e}}function or(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rT(n,e){return or(n,e.toTimestamp())}function Ze(n){return B(!!n),C.fromTimestamp(function(t){const i=kt(t);return new ee(i.seconds,i.nanos)}(n))}function Vc(n,e){return Ea(n,e).canonicalString()}function Ea(n,e){const t=function(s){return new z(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gp(n){const e=z.fromString(n);return B(Ep(e)),e}function Ia(n,e){return Vc(n.databaseId,e.path)}function Do(n,e){const t=gp(e);if(t.get(1)!==n.databaseId.projectId)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new w(_p(t))}function mp(n,e){return Vc(n.databaseId,e)}function oT(n){const e=gp(n);return e.length===4?z.emptyPath():_p(e)}function Ta(n){return new z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _p(n){return B(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Mu(n,e,t){return{name:Ia(n,e),fields:t.value.mapValue.fields}}function aT(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(B(u===void 0||typeof u=="string"),Ie.fromBase64String(u||"")):(B(u===void 0||u instanceof Uint8Array),Ie.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?g.UNKNOWN:hp(l.code);return new I(u,l.message||"")}(o);t=new fp(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Do(n,i.document.name),r=Ze(i.document.updateTime),o=i.document.createTime?Ze(i.document.createTime):C.min(),a=new Ae({mapValue:{fields:i.document.fields}}),c=ge.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];t=new Us(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Do(n,i.document),r=i.readTime?Ze(i.readTime):C.min(),o=ge.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Us([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Do(n,i.document),r=i.removedTargetIds||[];t=new Us([],r,s,null)}else{if(!("filter"in e))return S();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new YI(s,r),a=i.targetId;t=new dp(a,o)}}return t}function cT(n,e){let t;if(e instanceof us)t={update:Mu(n,e.key,e.value)};else if(e instanceof up)t={delete:Ia(n,e.key)};else if(e instanceof Lt)t={update:Mu(n,e.key,e.data),updateMask:_T(e.fieldMask)};else{if(!(e instanceof GI))return S();t={verify:Ia(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,o){const a=o.transform;if(a instanceof rr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw S()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:rT(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(n,e.precondition)),t}function lT(n,e){return n&&n.length>0?(B(e!==void 0),n.map(t=>function(s,r){let o=s.updateTime?Ze(s.updateTime):Ze(r);return o.isEqual(C.min())&&(o=Ze(r)),new $I(o,s.transformResults||[])}(t,e))):[]}function uT(n,e){return{documents:[mp(n,e.path)]}}function hT(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=mp(n,s);const r=function(l){if(l.length!==0)return vp(st.create(l,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Tn(d.field),direction:pT(d.dir)}}(u))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=va(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:t,parent:s}}function dT(n){let e=oT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){B(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(h){const d=yp(h);return d instanceof st&&zf(d)?d.getFilters():[d]}(t.where));let o=[];t.orderBy&&(o=function(h){return h.map(d=>function(m){return new sr(wn(m.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(t.orderBy));let a=null;t.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Wr(d)?null:d}(t.limit));let c=null;t.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ir(f,d)}(t.startAt));let l=null;return t.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ir(f,d)}(t.endAt)),kI(e,s,o,r,a,"F",c,l)}function fT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function yp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=wn(t.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=wn(t.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=wn(t.unaryFilter.field);return Z.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wn(t.unaryFilter.field);return Z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(t){return Z.create(wn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return st.create(t.compositeFilter.filters.map(i=>yp(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return S()}}(t.compositeFilter.op))}(n):S()}function pT(n){return tT[n]}function gT(n){return nT[n]}function mT(n){return iT[n]}function Tn(n){return{fieldPath:n.canonicalString()}}function wn(n){return ue.fromServerFormat(n.fieldPath)}function vp(n){return n instanceof Z?function(t){if(t.op==="=="){if(Eu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NAN"}};if(vu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Eu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NAN"}};if(vu(t.value))return{unaryFilter:{field:Tn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tn(t.field),op:gT(t.op),value:t.value}}}(n):n instanceof st?function(t){const i=t.getFilters().map(s=>vp(s));return i.length===1?i[0]:{compositeFilter:{op:mT(t.op),filters:i}}}(n):S()}function _T(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Ep(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class wt{constructor(e,t,i,s,r=C.min(),o=C.min(),a=Ie.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yT{constructor(e){this.ct=e}}function vT(n){const e=dT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ya(e,e.limit,"L"):e}/**
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
 */class ET{constructor(){this._n=new IT}addToCollectionParentIndex(e,t){return this._n.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}deleteAllFieldIndexes(e){return p.resolve()}createTargetIndexes(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(bt.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(bt.min())}updateCollectionGroup(e,t,i){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class IT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new de(z.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new de(z.comparator)).toArray()}}/**
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
 */class Wn{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Wn(0)}static Ln(){return new Wn(-1)}}/**
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
 */class TT{constructor(){this.changes=new Zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ge.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?p.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class AT{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Ri(i.mutation,s,be.empty(),ee.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,k()).next(()=>i))}getLocalViewOfDocuments(e,t,i=k()){const s=Gt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let o=_i();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const i=Gt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,k()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,i,s){let r=pt();const o=Si(),a=function(){return Si()}();return t.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Lt)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ri(u.mutation,l,u.mutation.getFieldMask(),ee.now())):o.set(l.key,be.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),t.forEach((l,u)=>{var h;return a.set(l,new wT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const i=Si();let s=new X((o,a)=>o-a),r=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=i.get(c)||be.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||k()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=ep();u.forEach(d=>{if(!r.has(d)){const f=cp(t.get(d),i.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return p.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(o){return w.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):NI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):p.resolve(Gt());let a=-1,c=r;return o.next(l=>p.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?p.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,k())).next(u=>({batchId:a,changes:Zf(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new w(t)).next(i=>{let s=_i();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,r).next(a=>p.forEach(a,c=>{const l=function(h,d){return new $r(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,l,i,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(o=>{r.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,ge.newInvalidDocument(u)))});let a=_i();return o.forEach((c,l)=>{const u=r.get(c);u!==void 0&&Ri(u.mutation,l,be.empty(),ee.now()),zr(t,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class ST{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return p.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ze(s.createTime)}}(t)),p.resolve()}getNamedQuery(e,t){return p.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(s){return{name:s.name,query:vT(s.bundledQuery),readTime:Ze(s.readTime)}}(t)),p.resolve()}}/**
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
 */class RT{constructor(){this.overlays=new X(w.comparator),this.hr=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Gt();return p.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),p.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.hr.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(i)),p.resolve()}getOverlaysForCollection(e,t,i){const s=Gt(),r=t.length+1,o=new w(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new X((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Gt(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return p.resolve(a)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(i.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new QI(t,i));let r=this.hr.get(t);r===void 0&&(r=k(),this.hr.set(t,r)),this.hr.set(t,r.add(i.key))}}/**
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
 */class xc{constructor(){this.Pr=new de(ne.Ir),this.Tr=new de(ne.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new ne(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Ar(new ne(e,t))}Rr(e,t){e.forEach(i=>this.removeReference(i,t))}Vr(e){const t=new w(new z([])),i=new ne(t,e),s=new ne(t,e+1),r=[];return this.Tr.forEachInRange([i,s],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new w(new z([])),i=new ne(t,e),s=new ne(t,e+1);let r=k();return this.Tr.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new ne(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ne{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return w.comparator(e.key,t.key)||L(e.pr,t.pr)}static Er(e,t){return L(e.pr,t.pr)||w.comparator(e.key,t.key)}}/**
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
 */class CT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new de(ne.Ir)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KI(r,t,i,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new ne(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.br(i),r=s<0?0:s;return p.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ne(t,0),s=new ne(t,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([i,s],o=>{const a=this.Sr(o.pr);r.push(a)}),p.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new de(L);return t.forEach(s=>{const r=new ne(s,0),o=new ne(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{i=i.add(a.pr)})}),p.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;w.isDocumentKey(r)||(r=r.child(""));const o=new ne(new w(r),0);let a=new de(L);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(e){const t=[];return e.forEach(i=>{const s=this.Sr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){B(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return p.forEach(t.mutations,s=>{const r=new ne(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,t){const i=new ne(t,0),s=this.wr.firstAfterOrEqual(i);return p.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class PT{constructor(e){this.vr=e,this.docs=function(){return new X(w.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return p.resolve(i?i.document.mutableCopy():ge.newInvalidDocument(t))}getEntries(e,t){let i=pt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ge.newInvalidDocument(s))}),p.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=pt();const o=t.path,a=new w(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||hI(uI(u),i)<=0||(s.has(u.key)||zr(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return p.resolve(r)}getAllFromCollectionGroup(e,t,i,s){S()}Fr(e,t){return p.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new bT(this)}getSize(e){return p.resolve(this.size)}}class bT extends TT{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.ar.addEntry(e,s)):this.ar.removeEntry(i)}),p.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
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
 */class kT{constructor(e){this.persistence=e,this.Mr=new Zn(t=>Nc(t),Dc),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Or=0,this.Nr=new xc,this.targetCount=0,this.Lr=Wn.Nn()}forEachTarget(e,t){return this.Mr.forEach((i,s)=>t(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),p.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new Wn(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.qn(t),p.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(r).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return p.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),p.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),p.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return p.resolve(i)}containsKey(e,t){return p.resolve(this.Nr.containsKey(t))}}/**
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
 */class NT{constructor(e,t){this.Br={},this.overlays={},this.kr=new Cc(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kT(this),this.indexManager=new ET,this.remoteDocumentCache=function(s){return new PT(s)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new yT(t),this.$r=new ST(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new RT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new CT(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){_("MemoryPersistence","Starting transaction:",e);const s=new DT(this.kr.next());return this.referenceDelegate.Ur(),i(s).next(r=>this.referenceDelegate.Wr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gr(e,t){return p.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,t)))}}class DT extends fI{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.zr=new xc,this.jr=null}static Hr(e){return new Fc(e)}get Jr(){if(this.jr)return this.jr;throw S()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),p.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),p.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(s=>this.Jr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Jr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,i=>{const s=w.fromPath(i);return this.Yr(e,s).next(r=>{r||t.removeEntry(s,C.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return p.or([()=>p.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
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
 */class Uc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=s}static Ki(e,t){let i=k(),s=k();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Uc(e,t.fromCache,i,s)}}/**
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
 */class OT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MT{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return a_()?8:zt.v(J())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.ji(e,t).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,t,s,i).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new OT;return this.Ji(e,t,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(e,t,o,a.size)})}).next(()=>r.result)}Yi(e,t,i,s){return i.documentReadCount<this.Wi?(ci()<=b.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",In(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(ci()<=b.DEBUG&&_("QueryEngine","Query:",In(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Gi*s?(ci()<=b.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",In(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):p.resolve())}ji(e,t){if(Au(t))return p.resolve(null);let i=Je(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ya(t,null,"F"),i=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=k(...r);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.Zi(t,a);return this.Xi(t,l,o,c.readTime)?this.ji(e,ya(t,null,"F")):this.es(e,l,t,c)}))})))}Hi(e,t,i,s){return Au(t)||s.isEqual(C.min())?p.resolve(null):this.zi.getDocuments(e,i).next(r=>{const o=this.Zi(t,r);return this.Xi(t,o,i,s)?p.resolve(null):(ci()<=b.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),In(t)),this.es(e,o,t,lI(s,-1)).next(a=>a))})}Zi(e,t){let i=new de(Jf(e));return t.forEach((s,r)=>{zr(e,r)&&(i=i.add(r))}),i}Xi(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Ji(e,t,i){return ci()<=b.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",In(t)),this.zi.getDocumentsMatchingQuery(e,t,bt.min(),i)}es(e,t,i,s){return this.zi.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class LT{constructor(e,t,i,s){this.persistence=e,this.ts=t,this.serializer=s,this.ns=new X(L),this.rs=new Zn(r=>Nc(r),Dc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AT(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function VT(n,e,t,i){return new LT(n,e,t,i)}async function Ip(n,e){const t=P(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t._s(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=k();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(i,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function xT(n,e){const t=P(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=p.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(c,m)).next(T=>{const E=l.docVersions.get(m);B(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let c=k();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function Tp(n){const e=P(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function FT(n,e){const t=P(n),i=e.snapshotVersion;let s=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.os.newChangeBuffer({trackRemovals:!0});s=t.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(t.Qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Ie.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,i)),s=s.insert(h,f),function(T,E,F){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(d,f,u)&&a.push(t.Qr.updateTargetData(r,f))});let c=pt(),l=k();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(UT(r,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!i.isEqual(C.min())){const u=t.Qr.getLastRemoteSnapshotVersion(r).next(h=>t.Qr.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(u)}return p.waitFor(a).next(()=>o.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.ns=s,r))}function UT(n,e,t){let i=k(),s=k();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let o=pt();return t.forEach((a,c)=>{const l=r.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function BT(n,e){const t=P(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function qT(n,e){const t=P(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Qr.getTargetData(i,e).next(r=>r?(s=r,p.resolve(s)):t.Qr.allocateTargetId(i).next(o=>(s=new wt(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.ns.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i})}async function wa(n,e,t){const i=P(n),s=i.ns.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ls(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.ns=i.ns.remove(e),i.rs.delete(s.target)}function Lu(n,e,t){const i=P(n);let s=C.min(),r=k();return i.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=P(c),d=h.rs.get(u);return d!==void 0?p.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(i,o,Je(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{r=c})}).next(()=>i.ts.getDocumentsMatchingQuery(o,e,t?s:C.min(),t?r:k())).next(a=>(jT(i,OI(e),a),{documents:a,hs:r})))}function jT(n,e,t){let i=n.ss.get(e)||C.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.ss.set(e,i)}class Vu{constructor(){this.activeTargetIds=UI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WT{constructor(){this.no=new Vu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Vu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $T{io(e){}shutdown(){}}/**
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
 */class xu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ds=null;function Oo(){return Ds===null?Ds=function(){return 268435456+Math.round(2147483648*Math.random())}():Ds++,"0x"+Ds.toString(16)}/**
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
 */const HT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zT{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const fe="WebChannelConnection";class GT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=i+"://"+t.host,this.po=`projects/${s}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get wo(){return!1}So(t,i,s,r,o){const a=Oo(),c=this.bo(t,i.toUriEncodedString());_("RestConnection",`Sending RPC '${t}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,r,o),this.Co(t,c,l,s).then(u=>(_("RestConnection",`Received RPC '${t}' ${a}: `,u),u),u=>{throw Un("RestConnection",`RPC '${t}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(t,i,s,r,o,a){return this.So(t,i,s,r,o)}Do(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,o)=>t[o]=r),s&&s.headers.forEach((r,o)=>t[o]=r)}bo(t,i){const s=HT[t];return`${this.fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,i,s){const r=Oo();return new Promise((o,a)=>{const c=new XE;c.setWithCredentials(!0),c.listenOnce(YE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case No.NO_ERROR:const u=c.getResponseJson();_(fe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case No.TIMEOUT:_(fe,`RPC '${e}' ${r} timed out`),a(new I(g.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const h=c.getStatus();if(_(fe,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(E){const F=E.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(F)>=0?F:g.UNKNOWN}(f.status);a(new I(m,f.message))}else a(new I(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new I(g.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{_(fe,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);_(fe,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",l,i,15)})}Fo(e,t,i){const s=Oo(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=KE(),a=QE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const u=r.join("");_(fe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new zT({lo:E=>{f?_(fe,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||(_(fe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),_(fe,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},ho:()=>h.close()}),T=(E,F,q)=>{E.listen(F,K=>{try{q(K)}catch(we){setTimeout(()=>{throw we},0)}})};return T(h,bs.EventType.OPEN,()=>{f||_(fe,`RPC '${e}' stream ${s} transport opened.`)}),T(h,bs.EventType.CLOSE,()=>{f||(f=!0,_(fe,`RPC '${e}' stream ${s} transport closed`),m.Vo())}),T(h,bs.EventType.ERROR,E=>{f||(f=!0,Un(fe,`RPC '${e}' stream ${s} transport errored:`,E),m.Vo(new I(g.UNAVAILABLE,"The operation could not be completed")))}),T(h,bs.EventType.MESSAGE,E=>{var F;if(!f){const q=E.data[0];B(!!q);const K=q,we=K.error||((F=K[0])===null||F===void 0?void 0:F.error);if(we){_(fe,`RPC '${e}' stream ${s} received error:`,we);const Ft=we.status;let $e=function(ri){const As=Q[ri];if(As!==void 0)return hp(As)}(Ft),Ut=we.message;$e===void 0&&($e=g.INTERNAL,Ut="Unknown error status: "+Ft+" with message "+we.message),f=!0,m.Vo(new I($e,Ut)),h.close()}else _(fe,`RPC '${e}' stream ${s} received:`,q),m.mo(q)}}),T(a,JE.STAT_EVENT,E=>{E.stat===fu.PROXY?_(fe,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===fu.NOPROXY&&_(fe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function Mo(){return typeof document<"u"?document:null}/**
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
 */function Yr(n){return new sT(n,!0)}/**
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
 */class wp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.oi=e,this.timerId=t,this.Mo=i,this.xo=s,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),i=Math.max(0,Date.now()-this.Bo),s=Math.max(0,t-i);s>0&&_("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Ap{constructor(e,t,i,s,r,o,a,c){this.oi=e,this.$o=i,this.Uo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new wp(e,t)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(nt(t.toString()),nt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Wo===t&&this.o_(i,s)},i=>{e(()=>{const s=new I(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.__(s)})})}o_(e,t){const i=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po(()=>{i(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{i(()=>this.__(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return _("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget(()=>this.Wo===e?t():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KT extends Ap{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=aT(this.serializer,e),i=function(r){if(!("targetChange"in r))return C.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?C.min():o.readTime?Ze(o.readTime):C.min()}(e);return this.listener.u_(t,i)}c_(e){const t={};t.database=Ta(this.serializer),t.addTarget=function(r,o){let a;const c=o.target;if(a=_a(c)?{documents:uT(r,c)}:{query:hT(r,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pp(r,o.resumeToken);const l=va(r,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(C.min())>0){a.readTime=or(r,o.snapshotVersion.toTimestamp());const l=va(r,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const i=fT(this.serializer,e);i&&(t.labels=i),this.t_(t)}l_(e){const t={};t.database=Ta(this.serializer),t.removeTarget=e,this.t_(t)}}class QT extends Ap{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=lT(e.writeResults,e.commitTime),i=Ze(e.commitTime);return this.listener.T_(i,t)}return B(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ta(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>cT(this.serializer,i))};this.t_(t)}}/**
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
 */class YT extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,Ea(t,i),s,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(g.UNKNOWN,r.toString())})}vo(e,t,i,s,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Ea(t,i),s,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new I(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class JT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(nt(t),this.g_=!1):_("OnlineStateTracker",t)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class XT{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{i.enqueueAndForget(async()=>{gn(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=P(c);l.v_.add(4),await ds(l),l.x_.set("Unknown"),l.v_.delete(4),await Jr(l)}(this))})}),this.x_=new JT(i,s)}}async function Jr(n){if(gn(n))for(const e of n.F_)await e(!0)}async function ds(n){for(const e of n.F_)await e(!1)}function Sp(n,e){const t=P(n);t.C_.has(e.targetId)||(t.C_.set(e.targetId,e),Wc(t)?jc(t):ei(t).Jo()&&qc(t,e))}function Bc(n,e){const t=P(n),i=ei(t);t.C_.delete(e),i.Jo()&&Rp(t,e),t.C_.size===0&&(i.Jo()?i.Xo():gn(t)&&t.x_.set("Unknown"))}function qc(n,e){if(n.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(C.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ei(n).c_(e)}function Rp(n,e){n.O_.Oe(e),ei(n).l_(e)}function jc(n){n.O_=new eT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>n.C_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),ei(n).start(),n.x_.p_()}function Wc(n){return gn(n)&&!ei(n).Ho()&&n.C_.size>0}function gn(n){return P(n).v_.size===0}function Cp(n){n.O_=void 0}async function ZT(n){n.C_.forEach((e,t)=>{qc(n,e)})}async function ew(n,e){Cp(n),Wc(n)?(n.x_.S_(e),jc(n)):n.x_.set("Unknown")}async function tw(n,e,t){if(n.x_.set("Online"),e instanceof fp&&e.state===2&&e.cause)try{await async function(s,r){const o=r.cause;for(const a of r.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(n,e)}catch(i){_("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ar(n,i)}else if(e instanceof Us?n.O_.$e(e):e instanceof dp?n.O_.Je(e):n.O_.Ge(e),!t.isEqual(C.min()))try{const i=await Tp(n.localStore);t.compareTo(i)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=r.C_.get(l);u&&r.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=r.C_.get(c);if(!u)return;r.C_.set(c,u.withResumeToken(Ie.EMPTY_BYTE_STRING,u.snapshotVersion)),Rp(r,c);const h=new wt(u.target,c,l,u.sequenceNumber);qc(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(i){_("RemoteStore","Failed to raise snapshot:",i),await ar(n,i)}}async function ar(n,e,t){if(!ls(e))throw e;n.v_.add(1),await ds(n),n.x_.set("Offline"),t||(t=()=>Tp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await t(),n.v_.delete(1),await Jr(n)})}function Pp(n,e){return e().catch(t=>ar(n,t,e))}async function Xr(n){const e=P(n),t=Nt(e);let i=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;nw(e);)try{const s=await BT(e.localStore,i);if(s===null){e.D_.length===0&&t.Xo();break}i=s.batchId,iw(e,s)}catch(s){await ar(e,s)}bp(e)&&kp(e)}function nw(n){return gn(n)&&n.D_.length<10}function iw(n,e){n.D_.push(e);const t=Nt(n);t.Jo()&&t.P_&&t.I_(e.mutations)}function bp(n){return gn(n)&&!Nt(n).Ho()&&n.D_.length>0}function kp(n){Nt(n).start()}async function sw(n){Nt(n).d_()}async function rw(n){const e=Nt(n);for(const t of n.D_)e.I_(t.mutations)}async function ow(n,e,t){const i=n.D_.shift(),s=Mc.from(i,e,t);await Pp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Xr(n)}async function aw(n,e){e&&Nt(n).P_&&await async function(i,s){if(function(o){return JI(o)&&o!==g.ABORTED}(s.code)){const r=i.D_.shift();Nt(i).Zo(),await Pp(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Xr(i)}}(n,e),bp(n)&&kp(n)}async function Fu(n,e){const t=P(n);t.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const i=gn(t);t.v_.add(3),await ds(t),i&&t.x_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.v_.delete(3),await Jr(t)}async function cw(n,e){const t=P(n);e?(t.v_.delete(2),await Jr(t)):e||(t.v_.add(2),await ds(t),t.x_.set("Unknown"))}function ei(n){return n.N_||(n.N_=function(t,i,s){const r=P(t);return r.R_(),new KT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:ZT.bind(null,n),To:ew.bind(null,n),u_:tw.bind(null,n)}),n.F_.push(async e=>{e?(n.N_.Zo(),Wc(n)?jc(n):n.x_.set("Unknown")):(await n.N_.stop(),Cp(n))})),n.N_}function Nt(n){return n.L_||(n.L_=function(t,i,s){const r=P(t);return r.R_(),new QT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Po:sw.bind(null,n),To:aw.bind(null,n),E_:rw.bind(null,n),T_:ow.bind(null,n)}),n.F_.push(async e=>{e?(n.L_.Zo(),await Xr(n)):(await n.L_.stop(),n.D_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.D_.length} pending writes`),n.D_=[]))})),n.L_}/**
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
 */class $c{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new $c(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(n,e){if(nt("AsyncQueue",`${e}: ${n}`),ls(n))return new I(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||w.comparator(t.key,i.key):(t,i)=>w.comparator(t.key,i.key),this.keyedMap=_i(),this.sortedSet=new X(this.comparator)}static emptySet(e){return new Nn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Nn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Uu{constructor(){this.B_=new X(w.comparator)}track(e){const t=e.doc.key,i=this.B_.get(t);i?e.type!==0&&i.type===3?this.B_=this.B_.insert(t,e):e.type===3&&i.type!==1?this.B_=this.B_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.B_=this.B_.remove(t):e.type===1&&i.type===2?this.B_=this.B_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):S():this.B_=this.B_.insert(t,e)}k_(){const e=[];return this.B_.inorderTraversal((t,i)=>{e.push(i)}),e}}class $n{constructor(e,t,i,s,r,o,a,c,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new $n(e,t,Nn.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class lw{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class uw{constructor(){this.queries=new Zn(e=>Yf(e),Hr),this.onlineState="Unknown",this.W_=new Set}}async function Np(n,e){const t=P(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.K_()&&e.U_()&&(i=2):(r=new lw,i=e.U_()?0:1);try{switch(i){case 0:r.q_=await t.onListen(s,!0);break;case 1:r.q_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Hc(o,`Initialization of query '${In(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,r),r.Q_.push(e),e.G_(t.onlineState),r.q_&&e.z_(r.q_)&&zc(t)}async function Dp(n,e){const t=P(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.Q_.indexOf(e);o>=0&&(r.Q_.splice(o,1),r.Q_.length===0?s=e.U_()?0:1:!r.K_()&&e.U_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function hw(n,e){const t=P(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.Q_)a.z_(s)&&(i=!0);o.q_=s}}i&&zc(t)}function dw(n,e,t){const i=P(n),s=i.queries.get(e);if(s)for(const r of s.Q_)r.onError(t);i.queries.delete(e)}function zc(n){n.W_.forEach(e=>{e.next()})}var Aa,Bu;(Bu=Aa||(Aa={})).j_="default",Bu.Cache="cache";class Op{constructor(e,t,i){this.query=e,this.H_=t,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=i||{}}z_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new $n(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),t=!0):this.X_(e,this.onlineState)&&(this.ea(e),t=!0),this.Y_=e,t}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let t=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),t=!0),t}X_(e,t){if(!e.fromCache||!this.U_())return!0;const i=t!=="Offline";return(!this.options.ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const t=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ea(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Aa.Cache}}/**
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
 */class Mp{constructor(e){this.key=e}}class Lp{constructor(e){this.key=e}}class fw{constructor(e,t){this.query=e,this.ua=t,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=k(),this.mutatedKeys=k(),this.ha=Jf(e),this.Pa=new Nn(this.ha)}get Ia(){return this.ua}Ta(e,t){const i=t?t.Ea:new Uu,s=t?t.Pa:this.Pa;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=zr(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?m!==T&&(i.track({type:3,doc:f}),E=!0):this.da(d,f)||(i.track({type:2,doc:f}),E=!0,(c&&this.ha(f,c)>0||l&&this.ha(f,l)<0)&&(a=!0)):!d&&f?(i.track({type:0,doc:f}),E=!0):d&&!f&&(i.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(f?(o=o.add(f),r=T?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Pa:o,Ea:i,Xi:a,mutatedKeys:r}}da(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,m){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return T(f)-T(m)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(i),s=s!=null&&s;const a=t&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new $n(this.query,e.Pa,r,o,e.mutatedKeys,c===0,l,!1,!!i&&i.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Uu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(t=>this.ua=this.ua.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.ua=this.ua.delete(t)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=k(),this.Pa.forEach(i=>{this.ma(i.key)&&(this.la=this.la.add(i.key))});const t=[];return e.forEach(i=>{this.la.has(i)||t.push(new Lp(i))}),this.la.forEach(i=>{e.has(i)||t.push(new Mp(i))}),t}fa(e){this.ua=e.hs,this.la=k();const t=this.Ta(e.documents);return this.applyChanges(t,!0)}ga(){return $n.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class pw{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class gw{constructor(e){this.key=e,this.pa=!1}}class mw{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Zn(a=>Yf(a),Hr),this.Sa=new Map,this.ba=new Set,this.Da=new X(w.comparator),this.Ca=new Map,this.va=new xc,this.Fa={},this.Ma=new Map,this.xa=Wn.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function _w(n,e,t=!0){const i=qp(n);let s;const r=i.wa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.ga()):s=await Vp(i,e,t,!0),s}async function yw(n,e){const t=qp(n);await Vp(t,e,!0,!1)}async function Vp(n,e,t,i){const s=await qT(n.localStore,Je(e)),r=s.targetId,o=t?n.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return i&&(a=await vw(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Sp(n.remoteStore,s),a}async function vw(n,e,t,i,s){n.Na=(h,d,f)=>async function(T,E,F,q){let K=E.view.Ta(F);K.Xi&&(K=await Lu(T.localStore,E.query,!1).then(({documents:Ut})=>E.view.Ta(Ut,K)));const we=q&&q.targetChanges.get(E.targetId),Ft=q&&q.targetMismatches.get(E.targetId)!=null,$e=E.view.applyChanges(K,T.isPrimaryClient,we,Ft);return ju(T,E.targetId,$e.Va),$e.snapshot}(n,h,d,f);const r=await Lu(n.localStore,e,!0),o=new fw(e,r.hs),a=o.Ta(r.documents),c=hs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),l=o.applyChanges(a,n.isPrimaryClient,c);ju(n,t,l.Va);const u=new pw(e,t,o);return n.wa.set(e,u),n.Sa.has(t)?n.Sa.get(t).push(e):n.Sa.set(t,[e]),l.snapshot}async function Ew(n,e,t){const i=P(n),s=i.wa.get(e),r=i.Sa.get(s.targetId);if(r.length>1)return i.Sa.set(s.targetId,r.filter(o=>!Hr(o,e))),void i.wa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await wa(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Bc(i.remoteStore,s.targetId),Sa(i,s.targetId)}).catch(cs)):(Sa(i,s.targetId),await wa(i.localStore,s.targetId,!0))}async function Iw(n,e){const t=P(n),i=t.wa.get(e),s=t.Sa.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Bc(t.remoteStore,i.targetId))}async function Tw(n,e,t){const i=bw(n);try{const s=await function(o,a){const c=P(o),l=ee.now(),u=a.reduce((f,m)=>f.add(m.key),k());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=pt(),T=k();return c.os.getEntries(f,u).next(E=>{m=E,m.forEach((F,q)=>{q.isValidDocument()||(T=T.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,m)).next(E=>{h=E;const F=[];for(const q of a){const K=zI(q,h.get(q.key).overlayedDocument);K!=null&&F.push(new Lt(q.key,K,Wf(K.value.mapValue),Xe.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,F,a)}).next(E=>{d=E;const F=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(f,E.batchId,F)})}).then(()=>({batchId:d.batchId,changes:Zf(h)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new X(L)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(i,s.batchId,t),await fs(i,s.changes),await Xr(i.remoteStore)}catch(s){const r=Hc(s,"Failed to persist write");t.reject(r)}}async function xp(n,e){const t=P(n);try{const i=await FT(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Ca.get(r);o&&(B(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?B(o.pa):s.removedDocuments.size>0&&(B(o.pa),o.pa=!1))}),await fs(t,i,e)}catch(i){await cs(i)}}function qu(n,e,t){const i=P(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.wa.forEach((r,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&zc(c)}(i.eventManager,e),s.length&&i.ya.u_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ww(n,e,t){const i=P(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Ca.get(e),r=s&&s.key;if(r){let o=new X(w.comparator);o=o.insert(r,ge.newNoDocument(r,C.min()));const a=k().add(r),c=new Qr(C.min(),new Map,new X(L),o,a);await xp(i,c),i.Da=i.Da.remove(r),i.Ca.delete(e),Gc(i)}else await wa(i.localStore,e,!1).then(()=>Sa(i,e,t)).catch(cs)}async function Aw(n,e){const t=P(n),i=e.batch.batchId;try{const s=await xT(t.localStore,e);Up(t,i,null),Fp(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await fs(t,s)}catch(s){await cs(s)}}async function Sw(n,e,t){const i=P(n);try{const s=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(B(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(i.localStore,e);Up(i,e,t),Fp(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await fs(i,s)}catch(s){await cs(s)}}function Fp(n,e){(n.Ma.get(e)||[]).forEach(t=>{t.resolve()}),n.Ma.delete(e)}function Up(n,e,t){const i=P(n);let s=i.Fa[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Fa[i.currentUser.toKey()]=s}}function Sa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Sa.get(e))n.wa.delete(i),t&&n.ya.La(i,t);n.Sa.delete(e),n.isPrimaryClient&&n.va.Vr(e).forEach(i=>{n.va.containsKey(i)||Bp(n,i)})}function Bp(n,e){n.ba.delete(e.path.canonicalString());const t=n.Da.get(e);t!==null&&(Bc(n.remoteStore,t),n.Da=n.Da.remove(e),n.Ca.delete(t),Gc(n))}function ju(n,e,t){for(const i of t)i instanceof Mp?(n.va.addReference(i.key,e),Rw(n,i)):i instanceof Lp?(_("SyncEngine","Document no longer in limbo: "+i.key),n.va.removeReference(i.key,e),n.va.containsKey(i.key)||Bp(n,i.key)):S()}function Rw(n,e){const t=e.key,i=t.path.canonicalString();n.Da.get(t)||n.ba.has(i)||(_("SyncEngine","New document in limbo: "+t),n.ba.add(i),Gc(n))}function Gc(n){for(;n.ba.size>0&&n.Da.size<n.maxConcurrentLimboResolutions;){const e=n.ba.values().next().value;n.ba.delete(e);const t=new w(z.fromString(e)),i=n.xa.next();n.Ca.set(i,new gw(t)),n.Da=n.Da.insert(t,i),Sp(n.remoteStore,new wt(Je(Oc(t.path)),i,"TargetPurposeLimboResolution",Cc._e))}}async function fs(n,e,t){const i=P(n),s=[],r=[],o=[];i.wa.isEmpty()||(i.wa.forEach((a,c)=>{o.push(i.Na(c,e,t).then(l=>{if((l||t)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Uc.Ki(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.ya.u_(s),await async function(c,l){const u=P(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,d=>p.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!ls(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),m=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(m);u.ns=u.ns.insert(d,T)}}}(i.localStore,r))}async function Cw(n,e){const t=P(n);if(!t.currentUser.isEqual(e)){_("SyncEngine","User change. New user:",e.toKey());const i=await Ip(t.localStore,e);t.currentUser=e,function(r,o){r.Ma.forEach(a=>{a.forEach(c=>{c.reject(new I(g.CANCELLED,o))})}),r.Ma.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fs(t,i.us)}}function Pw(n,e){const t=P(n),i=t.Ca.get(e);if(i&&i.pa)return k().add(i.key);{let s=k();const r=t.Sa.get(e);if(!r)return s;for(const o of r){const a=t.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function qp(n){const e=P(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ww.bind(null,e),e.ya.u_=hw.bind(null,e.eventManager),e.ya.La=dw.bind(null,e.eventManager),e}function bw(n){const e=P(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Aw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sw.bind(null,e),e}class Wu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Yr(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return VT(this.persistence,new MT,e.initialUser,this.serializer)}createPersistence(e){return new NT(Fc.Hr,this.serializer)}createSharedClientState(e){return new WT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cw.bind(null,this.syncEngine),await cw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uw}()}createDatastore(e){const t=Yr(e.databaseInfo.databaseId),i=function(r){return new GT(r)}(e.databaseInfo);return function(r,o,a,c){return new YT(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,o,a){return new XT(i,s,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>qu(this.syncEngine,t,0),function(){return xu.D()?new xu:new $T}())}createSyncEngine(e,t){return function(s,r,o,a,c,l,u){const h=new mw(s,r,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(i){const s=P(i);_("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await ds(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class jp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):nt("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Nw{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=pe.UNAUTHENTICATED,this.clientId=Bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{_("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(_("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Hc(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Lo(n,e){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ip(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ow(n);_("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Fu(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Fu(e.remoteStore,s)),n._onlineComponents=e}function Dw(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ow(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Dw(t))throw t;Un("Error using user provided cache. Falling back to memory cache: "+t),await Lo(n,new Wu)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Lo(n,new Wu);return n._offlineComponents}async function Wp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await $u(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await $u(n,new kw))),n._onlineComponents}function Mw(n){return Wp(n).then(e=>e.syncEngine)}async function $p(n){const e=await Wp(n),t=e.eventManager;return t.onListen=_w.bind(null,e.syncEngine),t.onUnlisten=Ew.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=yw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Iw.bind(null,e.syncEngine),t}function Lw(n,e,t={}){const i=new Ye;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new jp({next:d=>{o.enqueueAndForget(()=>Dp(r,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new I(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new I(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Op(Oc(a.path),u,{includeMetadataChanges:!0,ta:!0});return Np(r,h)}(await $p(n),n.asyncQueue,e,t,i)),i.promise}function Vw(n,e,t={}){const i=new Ye;return n.asyncQueue.enqueueAndForget(async()=>function(r,o,a,c,l){const u=new jp({next:d=>{o.enqueueAndForget(()=>Dp(r,h)),d.fromCache&&c.source==="server"?l.reject(new I(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Op(a,u,{includeMetadataChanges:!0,ta:!0});return Np(r,h)}(await $p(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Hp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hu=new Map;/**
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
 */function zp(n,e,t){if(!t)throw new I(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xw(n,e,t,i){if(e===!0&&i===!0)throw new I(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zu(n){if(!w.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gu(n){if(w.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function gt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new I(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kc(n);throw new I(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Ku{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new I(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hp((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zr{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new eI;switch(i.type){case"firstParty":return new sI(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new I(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Hu.get(t);i&&(_("ComponentProvider","Removing Datastore"),Hu.delete(t),i.terminate())}(this),Promise.resolve()}}function Fw(n,e,t,i={}){var s;const r=(n=gt(n,Zr))._getSettings(),o=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=pe.MOCK_USER;else{a=s_(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new I(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new pe(l)}n._authCredentials=new tI(new Uf(a,c))}}/**
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
 */class eo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new eo(this.firestore,e,this._query)}}class Pe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}}class Ct extends eo{constructor(e,t,i){super(e,t,Oc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new w(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function Qc(n,e,...t){if(n=re(n),zp("collection","path",e),n instanceof Zr){const i=z.fromString(e,...t);return Gu(i),new Ct(n,null,i)}{if(!(n instanceof Pe||n instanceof Ct))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(z.fromString(e,...t));return Gu(i),new Ct(n.firestore,null,i)}}function Uw(n,e,...t){if(n=re(n),arguments.length===1&&(e=Bf.newId()),zp("doc","path",e),n instanceof Zr){const i=z.fromString(e,...t);return zu(i),new Pe(n,null,new w(i))}{if(!(n instanceof Pe||n instanceof Ct))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(z.fromString(e,...t));return zu(i),new Pe(n.firestore,n instanceof Ct?n.converter:null,new w(i))}}/**
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
 */class Bw{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new wp(this,"async_queue_retry"),this.cu=()=>{const t=Mo();t&&_("AsyncQueue","Visibility state changed to "+t.visibilityState),this.jo.Ko()};const e=Mo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const t=Mo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const t=new Ye;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!ls(e))throw e;_("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const t=this.nu.then(()=>(this._u=!0,e().catch(i=>{this.ou=i,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw nt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this._u=!1,i))));return this.nu=t,t}enqueueAfterDelay(e,t,i){this.lu(),this.uu.indexOf(e)>-1&&(t=0);const s=$c.createAndSchedule(this,e,t,i,r=>this.Iu(r));return this.su.push(s),s}lu(){this.ou&&S()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const t of this.su)if(t.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.su)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const t=this.su.indexOf(e);this.su.splice(t,1)}}class ps extends Zr{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=function(){return new Bw}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gp(this),this._firestoreClient.terminate()}}function qw(n,e){const t=typeof n=="object"?n:Ya(),i=typeof n=="string"?n:e||"(default)",s=Zi(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=i_("firestore");r&&Fw(s,...r)}return s}function Yc(n){return n._firestoreClient||Gp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Gp(n){var e,t,i;const s=n._freezeSettings(),r=function(a,c,l,u){return new yI(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Hp(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Nw(n._authCredentials,n._appCheckCredentials,n._queue,r),!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ie.fromBase64String(e))}catch(t){throw new I(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class to{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new I(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class no{constructor(e){this._methodName=e}}/**
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
 */class Jc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new I(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new I(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return L(this._lat,e._lat)||L(this._long,e._long)}}/**
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
 */const jw=/^__.*__$/;class Ww{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new us(e,this.data,t,this.fieldTransforms)}}class Kp{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Qp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Xc{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.Ru(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.mu({path:i,gu:!1});return s.pu(e),s}yu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.mu({path:i,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return cr(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(Qp(this.Vu)&&jw.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class $w{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Yr(e)}Cu(e,t,i,s=!1){return new Xc({Vu:e,methodName:t,Du:i,path:ue.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yp(n){const e=n._freezeSettings(),t=Yr(n._databaseId);return new $w(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Hw(n,e,t,i,s,r={}){const o=n.Cu(r.merge||r.mergeFields?2:0,e,t,s);el("Data must be an object, but it was:",o,i);const a=Jp(i,o);let c,l;if(r.merge)c=new be(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Ra(e,h,t);if(!o.contains(d))throw new I(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Zp(u,d)||u.push(d)}c=new be(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Ww(new Ae(a),c,l)}class io extends no{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof io}}class Zc extends no{constructor(e,t){super(e),this.Fu=t}_toFieldTransform(e){const t=new Gi(e.serializer,ip(e.serializer,this.Fu));return new jI(e.path,t)}isEqual(e){return e instanceof Zc&&this.Fu===e.Fu}}function zw(n,e,t,i){const s=n.Cu(1,e,t);el("Data must be an object, but it was:",s,i);const r=[],o=Ae.empty();pn(i,(c,l)=>{const u=tl(e,c,t);l=re(l);const h=s.yu(u);if(l instanceof io)r.push(u);else{const d=so(l,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new be(r);return new Kp(o,a,s.fieldTransforms)}function Gw(n,e,t,i,s,r){const o=n.Cu(1,e,t),a=[Ra(e,i,t)],c=[s];if(r.length%2!=0)throw new I(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Ra(e,r[d])),c.push(r[d+1]);const l=[],u=Ae.empty();for(let d=a.length-1;d>=0;--d)if(!Zp(l,a[d])){const f=a[d];let m=c[d];m=re(m);const T=o.yu(f);if(m instanceof io)l.push(f);else{const E=so(m,T);E!=null&&(l.push(f),u.set(f,E))}}const h=new be(l);return new Kp(u,h,o.fieldTransforms)}function so(n,e){if(Xp(n=re(n)))return el("Unsupported field value:",e,n),Jp(n,e);if(n instanceof no)return function(i,s){if(!Qp(s.Vu))throw s.Su(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(i,s){const r=[];let o=0;for(const a of i){let c=so(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),o++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=re(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return ip(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=ee.fromDate(i);return{timestampValue:or(s.serializer,r)}}if(i instanceof ee){const r=new ee(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:or(s.serializer,r)}}if(i instanceof Jc)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Hn)return{bytesValue:pp(s.serializer,i._byteString)};if(i instanceof Pe){const r=s.databaseId,o=i.firestore._databaseId;if(!o.isEqual(r))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Vc(i.firestore._databaseId||s.databaseId,i._key.path)}}throw s.Su(`Unsupported field value: ${Kc(i)}`)}(n,e)}function Jp(n,e){const t={};return qf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(n,(i,s)=>{const r=so(s,e.fu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Xp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Jc||n instanceof Hn||n instanceof Pe||n instanceof no)}function el(n,e,t){if(!Xp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=Kc(t);throw i==="an object"?e.Su(n+" a custom object"):e.Su(n+" "+i)}}function Ra(n,e,t){if((e=re(e))instanceof to)return e._internalPath;if(typeof e=="string")return tl(n,e);throw cr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Kw=new RegExp("[~\\*/\\[\\]]");function tl(n,e,t){if(e.search(Kw)>=0)throw cr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new to(...e.split("."))._internalPath}catch{throw cr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cr(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new I(g.INVALID_ARGUMENT,a+n+c)}function Zp(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class eg{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(tg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qw extends eg{data(){return super.data()}}function tg(n,e){return typeof e=="string"?tl(n,e):e instanceof to?e._internalPath:e._delegate._internalPath}/**
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
 */function Yw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Jw{convertValue(e,t="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Y(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return pn(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new Jc(Y(e.latitude),Y(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=bc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ji(e));default:return null}}convertTimestamp(e){const t=kt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=z.fromString(e);B(Ep(i));const s=new Wi(i.get(1),i.get(3)),r=new w(i.popFirst(5));return s.isEqual(t)||nt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function Xw(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class vi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ng extends eg{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(tg("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Bs extends ng{data(e={}){return super.data(e)}}class Zw{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Bs(this._firestore,this._userDataWriter,i.key,i,new vi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new I(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Bs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const c=new Bs(s._firestore,s._userDataWriter,a.doc.key,a.doc,new vi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:eA(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function eA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}/**
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
 */function lP(n){n=gt(n,Pe);const e=gt(n.firestore,ps);return Lw(Yc(e),n._key).then(t=>nA(e,n,t))}class ig extends Jw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}function nl(n){n=gt(n,eo);const e=gt(n.firestore,ps),t=Yc(e),i=new ig(e);return Yw(n._query),Vw(t,n._query).then(s=>new Zw(e,i,n,s))}function uP(n,e,t){n=gt(n,Pe);const i=gt(n.firestore,ps),s=Xw(n.converter,e,t);return sg(i,[Hw(Yp(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function tA(n,e,t,...i){n=gt(n,Pe);const s=gt(n.firestore,ps),r=Yp(s);let o;return o=typeof(e=re(e))=="string"||e instanceof to?Gw(r,"updateDoc",n._key,e,t,i):zw(r,"updateDoc",n._key,e),sg(s,[o.toMutation(n._key,Xe.exists(!0))])}function sg(n,e){return function(i,s){const r=new Ye;return i.asyncQueue.enqueueAndForget(async()=>Tw(await Mw(i),s,r)),r.promise}(Yc(n),e)}function nA(n,e,t){const i=t.docs.get(e._key),s=new ig(n);return new ng(n,s,e._key,i,new vi(t.hasPendingWrites,t.fromCache),e.converter)}function Vo(n){return new Zc("increment",n)}(function(e,t=!0){(function(s){Xn=s})(dn),Be(new Le("firestore",(i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),a=new ps(new nI(i.getProvider("auth-internal")),new oI(i.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new I(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(l.options.projectId,u)}(o,s),o);return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Re(pu,"4.5.1",e),Re(pu,"4.5.1","esm2017")})();function il(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iA=rg,og=new hn("auth","Firebase",rg());/**
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
 */const lr=new Xi("@firebase/auth");function sA(n,...e){lr.logLevel<=b.WARN&&lr.warn(`Auth (${dn}): ${n}`,...e)}function qs(n,...e){lr.logLevel<=b.ERROR&&lr.error(`Auth (${dn}): ${n}`,...e)}/**
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
 */function je(n,...e){throw sl(n,...e)}function et(n,...e){return sl(n,...e)}function ag(n,e,t){const i=Object.assign(Object.assign({},iA()),{[e]:t});return new hn("auth","Firebase",i).create(e,{appName:n.name})}function ht(n){return ag(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return og.create(n,...e)}function A(n,e,...t){if(!n)throw sl(e,...t)}function at(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qs(e),new Error(e)}function mt(n,e){n||at(e)}/**
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
 */function Ca(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rA(){return Qu()==="http:"||Qu()==="https:"}function Qu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function oA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rA()||id()||"connection"in navigator)?navigator.onLine:!0}function aA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ga()||sd()}get(){return oA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rl(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cg{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;at("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;at("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;at("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lA=new gs(3e4,6e4);function Vt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function xt(n,e,t,i,s={}){return lg(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Qn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),cg.fetch()(ug(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function lg(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},cA),e);try{const s=new hA(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Os(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Os(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Os(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Os(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ag(n,u,l);je(n,u)}}catch(s){if(s instanceof We)throw s;je(n,"network-request-failed",{message:String(s)})}}async function ms(n,e,t,i,s={}){const r=await xt(n,e,t,i,s);return"mfaPendingCredential"in r&&je(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ug(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?rl(n.config,s):`${n.config.apiScheme}://${s}`}function uA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(et(this.auth,"network-request-failed")),lA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Os(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=et(n,e,i);return s.customData._tokenResponse=t,s}function Yu(n){return n!==void 0&&n.enterprise!==void 0}class dA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function fA(n,e){return xt(n,"GET","/v2/recaptchaConfig",Vt(n,e))}/**
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
 */async function pA(n,e){return xt(n,"POST","/v1/accounts:delete",e)}async function hg(n,e){return xt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gA(n,e=!1){const t=re(n),i=await t.getIdToken(e),s=ol(i);A(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ci(xo(s.auth_time)),issuedAtTime:Ci(xo(s.iat)),expirationTime:Ci(xo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xo(n){return Number(n)*1e3}function ol(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=zs(t);return s?JSON.parse(s):(qs("Failed to decode base64 JWT payload"),null)}catch(s){return qs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ju(n){const e=ol(n);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ki(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof We&&mA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function mA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class _A{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ur(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ki(n,hg(t,{idToken:i}));A(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?dg(r.providerUserInfo):[],a=vA(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Pa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function yA(n){const e=re(n);await ur(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vA(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function dg(n){return n.map(e=>{var{providerId:t}=e,i=il(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function EA(n,e){const t=await lg(n,{},async()=>{const i=Qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ug(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cg.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function IA(n,e){return xt(n,"POST","/v2/accounts:revokeToken",Vt(n,e))}/**
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
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){A(e.length!==0,"internal-error");const t=Ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await EA(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Dn;return i&&(A(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(A(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(A(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return at("not implemented")}}/**
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
 */function yt(n,e){A(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ct{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=il(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _A(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Pa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ki(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gA(this,e)}reload(){return yA(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ur(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ze(this.auth.app))return Promise.reject(ht(this.auth));const e=await this.getIdToken();return await Ki(this,pA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,F=(l=t.createdAt)!==null&&l!==void 0?l:void 0,q=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:K,emailVerified:we,isAnonymous:Ft,providerData:$e,stsTokenManager:Ut}=t;A(K&&Ut,e,"internal-error");const Ol=Dn.fromJSON(this.name,Ut);A(typeof K=="string",e,"internal-error"),yt(h,e.name),yt(d,e.name),A(typeof we=="boolean",e,"internal-error"),A(typeof Ft=="boolean",e,"internal-error"),yt(f,e.name),yt(m,e.name),yt(T,e.name),yt(E,e.name),yt(F,e.name),yt(q,e.name);const ri=new ct({uid:K,auth:e,email:d,emailVerified:we,displayName:h,isAnonymous:Ft,photoURL:m,phoneNumber:f,tenantId:T,stsTokenManager:Ol,createdAt:F,lastLoginAt:q});return $e&&Array.isArray($e)&&(ri.providerData=$e.map(As=>Object.assign({},As))),E&&(ri._redirectEventId=E),ri}static async _fromIdTokenResponse(e,t,i=!1){const s=new Dn;s.updateFromServerResponse(t);const r=new ct({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ur(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];A(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?dg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Dn;a.updateFromIdToken(i);const c=new ct({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Pa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const Xu=new Map;function lt(n){mt(n instanceof Function,"Expected a class definition");let e=Xu.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xu.set(n,e),e)}/**
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
 */class fg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fg.type="NONE";const Zu=fg;/**
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
 */function js(n,e,t){return`firebase:${n}:${e}:${t}`}class On{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=js(this.userKey,s.apiKey,r),this.fullPersistenceKey=js("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new On(lt(Zu),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||lt(Zu);const o=js(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const h=ct._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new On(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new On(r,e,i))}}/**
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
 */function eh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(al(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pg(n=J()){return/firefox\//i.test(n)}function al(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(n=J()){return/crios\//i.test(n)}function mg(n=J()){return/iemobile/i.test(n)}function _g(n=J()){return/android/i.test(n)}function yg(n=J()){return/blackberry/i.test(n)}function vg(n=J()){return/webos/i.test(n)}function ro(n=J()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function TA(n=J()){var e;return ro(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wA(){return o_()&&document.documentMode===10}function Eg(n=J()){return ro(n)||_g(n)||vg(n)||yg(n)||/windows phone/i.test(n)||mg(n)}function AA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ig(n,e=[]){let t;switch(n){case"Browser":t=eh(J());break;case"Worker":t=`${eh(J())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${i}`}/**
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
 */class SA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function RA(n,e={}){return xt(n,"GET","/v2/passwordPolicy",Vt(n,e))}/**
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
 */const CA=6;class PA{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:CA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class bA{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new th(this),this.idTokenSubscription=new th(this),this.beforeStateQueue=new SA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=og,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await On.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await hg(this,{idToken:e}),i=await ct._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ur(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ze(this.app))return Promise.reject(ht(this));const t=e?re(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ze(this.app)?Promise.reject(ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ze(this.app)?Promise.reject(ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RA(this),t=new PA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await IA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lt(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await On.create(this,[lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mn(n){return re(n)}class th{constructor(e){this.auth=e,this.observer=null,this.addObserver=g_(t=>this.observer=t)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kA(n){oo=n}function Tg(n){return oo.loadJS(n)}function NA(){return oo.recaptchaEnterpriseScript}function DA(){return oo.gapiScript}function OA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const MA="recaptcha-enterprise",LA="NO_RECAPTCHA";class VA{constructor(e){this.type=MA,this.auth=mn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{fA(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new dA(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Yu(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(LA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Yu(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=NA();c.length!==0&&(c+=a),Tg(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function nh(n,e,t,i=!1){const s=new VA(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ba(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await nh(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nh(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function xA(n,e){const t=Zi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ks(r,e??{}))return s;je(s,"already-initialized")}return t.initialize({options:e})}function FA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function UA(n,e,t){const i=mn(n);A(i._canInitEmulator,i,"emulator-config-failed"),A(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=wg(e),{host:o,port:a}=BA(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||qA()}function wg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function BA(n){const e=wg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ih(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ih(o)}}}function ih(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class cl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return at("not implemented")}_getIdTokenResponse(e){return at("not implemented")}_linkToIdToken(e,t){return at("not implemented")}_getReauthenticationResolver(e){return at("not implemented")}}async function jA(n,e){return xt(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WA(n,e){return ms(n,"POST","/v1/accounts:signInWithPassword",Vt(n,e))}/**
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
 */async function $A(n,e){return ms(n,"POST","/v1/accounts:signInWithEmailLink",Vt(n,e))}async function HA(n,e){return ms(n,"POST","/v1/accounts:signInWithEmailLink",Vt(n,e))}/**
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
 */class Qi extends cl{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qi(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Qi(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,t,"signInWithPassword",WA);case"emailLink":return $A(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,i,"signUpPassword",jA);case"emailLink":return HA(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mn(n,e){return ms(n,"POST","/v1/accounts:signInWithIdp",Vt(n,e))}/**
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
 */const zA="http://localhost";class rn extends cl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=il(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new rn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Mn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Mn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mn(e,t)}buildRequest(){const e={requestUri:zA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qn(t)}return e}}/**
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
 */function GA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KA(n){const e=fi(pi(n)).link,t=e?fi(pi(e)).deep_link_id:null,i=fi(pi(n)).deep_link_id;return(i?fi(pi(i)).link:null)||i||t||e||n}class ll{constructor(e){var t,i,s,r,o,a;const c=fi(pi(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=GA((s=c.mode)!==null&&s!==void 0?s:null);A(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=KA(e);try{return new ll(t)}catch{return null}}}/**
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
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,t){return Qi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ll.parseLink(t);return A(i,"argument-error"),Qi._fromEmailAndCode(e,i.code,i.tenantId)}}ti.PROVIDER_ID="password";ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _s extends Ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends _s{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class Et extends _s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Et.credential(t,i)}catch{return null}}}Et.GOOGLE_SIGN_IN_METHOD="google.com";Et.PROVIDER_ID="google.com";/**
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
 */class It extends _s{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class Tt extends _s{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Tt.credential(t,i)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */async function QA(n,e){return ms(n,"POST","/v1/accounts:signUp",Vt(n,e))}/**
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
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ct._fromIdTokenResponse(e,i,s),o=sh(i);return new on({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=sh(i);return new on({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function sh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class hr extends We{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new hr(e,t,i,s)}}function Sg(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(n,r,e,i):r})}async function YA(n,e,t=!1){const i=await Ki(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return on._forOperation(n,"link",i)}/**
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
 */async function JA(n,e,t=!1){const{auth:i}=n;if(ze(i.app))return Promise.reject(ht(i));const s="reauthenticate";try{const r=await Ki(n,Sg(i,s,e,n),t);A(r.idToken,i,"internal-error");const o=ol(r.idToken);A(o,i,"internal-error");const{sub:a}=o;return A(n.uid===a,i,"user-mismatch"),on._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&je(i,"user-mismatch"),r}}/**
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
 */async function Rg(n,e,t=!1){if(ze(n.app))return Promise.reject(ht(n));const i="signIn",s=await Sg(n,i,e),r=await on._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function XA(n,e){return Rg(mn(n),e)}/**
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
 */async function Cg(n){const e=mn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZA(n,e,t){if(ze(n.app))return Promise.reject(ht(n));const i=mn(n),o=await ba(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cg(n),c}),a=await on._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function eS(n,e,t){return ze(n.app)?Promise.reject(ht(n)):XA(re(n),ti.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Cg(n),i})}function tS(n,e,t,i){return re(n).onIdTokenChanged(e,t,i)}function nS(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function iS(n){return re(n).signOut()}const dr="__sak";/**
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
 */class Pg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(dr,"1"),this.storage.removeItem(dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sS(){const n=J();return al(n)||ro(n)}const rS=1e3,oS=10;class bg extends Pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sS()&&AA(),this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);wA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oS):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bg.type="LOCAL";const aS=bg;/**
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
 */class kg extends Pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kg.type="SESSION";const Ng=kg;/**
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
 */function cS(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ao(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await cS(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ao.receivers=[];/**
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
 */function ul(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class lS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=ul("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function uS(n){tt().location.href=n}/**
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
 */function Dg(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function hS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function fS(){return Dg()?self:null}/**
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
 */const Og="firebaseLocalStorageDb",pS=1,fr="firebaseLocalStorage",Mg="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function co(n,e){return n.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function gS(){const n=indexedDB.deleteDatabase(Og);return new ys(n).toPromise()}function ka(){const n=indexedDB.open(Og,pS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(fr,{keyPath:Mg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(fr)?e(i):(i.close(),await gS(),e(await ka()))})})}async function rh(n,e,t){const i=co(n,!0).put({[Mg]:e,value:t});return new ys(i).toPromise()}async function mS(n,e){const t=co(n,!1).get(e),i=await new ys(t).toPromise();return i===void 0?null:i.value}function oh(n,e){const t=co(n,!0).delete(e);return new ys(t).toPromise()}const _S=800,yS=3;class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ka(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>yS)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ao._getInstance(fS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hS(),!this.activeServiceWorker)return;this.sender=new lS(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ka();return await rh(e,dr,"1"),await oh(e,dr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>rh(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>mS(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=co(s,!1).getAll();return new ys(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_S)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lg.type="LOCAL";const vS=Lg;new gs(3e4,6e4);/**
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
 */function ES(n,e){return e?lt(e):(A(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class hl extends cl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function IS(n){return Rg(n.auth,new hl(n),n.bypassAuthState)}function TS(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),JA(t,new hl(n),n.bypassAuthState)}async function wS(n){const{auth:e,user:t}=n;return A(t,e,"internal-error"),YA(t,new hl(n),n.bypassAuthState)}/**
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
 */class Vg{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IS;case"linkViaPopup":case"linkViaRedirect":return wS;case"reauthViaPopup":case"reauthViaRedirect":return TS;default:je(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AS=new gs(2e3,1e4);class Sn extends Vg{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=ul();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AS.get())};e()}}Sn.currentPopupAction=null;/**
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
 */const SS="pendingRedirect",Ws=new Map;class RS extends Vg{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const i=await CS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CS(n,e){const t=kS(e),i=bS(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function PS(n,e){Ws.set(n._key(),e)}function bS(n){return lt(n._redirectPersistence)}function kS(n){return js(SS,n.config.apiKey,n.name)}async function NS(n,e,t=!1){if(ze(n.app))return Promise.reject(ht(n));const i=mn(n),s=ES(i,e),o=await new RS(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const DS=10*60*1e3;class OS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MS(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!xg(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(et(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ah(e))}saveEventToCache(e){this.cachedEventUids.add(ah(e)),this.lastProcessedEventTime=Date.now()}}function ah(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MS(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xg(n);default:return!1}}/**
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
 */async function LS(n,e={}){return xt(n,"GET","/v1/projects",e)}/**
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
 */const VS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xS=/^https?/;async function FS(n){if(n.config.emulator)return;const{authorizedDomains:e}=await LS(n);for(const t of e)try{if(US(t))return}catch{}je(n,"unauthorized-domain")}function US(n){const e=Ca(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!xS.test(t))return!1;if(VS.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const BS=new gs(3e4,6e4);function ch(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qS(n){return new Promise((e,t)=>{var i,s,r;function o(){ch(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ch(),t(et(n,"network-request-failed"))},timeout:BS.get()})}if(!((s=(i=tt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=tt().gapi)===null||r===void 0)&&r.load)o();else{const a=OA("iframefcb");return tt()[a]=()=>{gapi.load?o():t(et(n,"network-request-failed"))},Tg(`${DA()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw $s=null,e})}let $s=null;function jS(n){return $s=$s||qS(n),$s}/**
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
 */const WS=new gs(5e3,15e3),$S="__/auth/iframe",HS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KS(n){const e=n.config;A(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?rl(e,HS):`https://${n.config.authDomain}/${$S}`,i={apiKey:e.apiKey,appName:n.name,v:dn},s=GS.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Qn(i).slice(1)}`}async function QS(n){const e=await jS(n),t=tt().gapi;return A(t,n,"internal-error"),e.open({where:document.body,url:KS(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=et(n,"network-request-failed"),a=tt().setTimeout(()=>{r(o)},WS.get());function c(){tt().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const YS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JS=500,XS=600,ZS="_blank",eR="http://localhost";class lh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tR(n,e,t,i=JS,s=XS){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},YS),{width:i.toString(),height:s.toString(),top:r,left:o}),l=J().toLowerCase();t&&(a=gg(l)?ZS:t),pg(l)&&(e=e||eR,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(TA(l)&&a!=="_self")return nR(e||"",a),new lh(null);const h=window.open(e||"",a,u);A(h,n,"popup-blocked");try{h.focus()}catch{}return new lh(h)}function nR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const iR="__/auth/handler",sR="emulator/auth/handler",rR=encodeURIComponent("fac");async function uh(n,e,t,i,s,r){A(n.config.authDomain,n,"auth-domain-config-required"),A(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:dn,eventId:s};if(e instanceof Ag){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",zo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof _s){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${rR}=${encodeURIComponent(c)}`:"";return`${oR(n)}?${Qn(a).slice(1)}${l}`}function oR({config:n}){return n.emulator?rl(n,sR):`https://${n.authDomain}/${iR}`}/**
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
 */const Fo="webStorageSupport";class aR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=NS,this._overrideRedirectResult=PS}async _openPopup(e,t,i,s){var r;mt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await uh(e,t,i,Ca(),s);return tR(e,o,ul())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await uh(e,t,i,Ca(),s);return uS(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(mt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await QS(e),i=new OS(e);return t.register("authEvent",s=>(A(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fo,{type:Fo},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Fo];o!==void 0&&t(!!o),je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=FS(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Eg()||al()||ro()}}const cR=aR;var hh="@firebase/auth",dh="1.7.0";/**
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
 */class lR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uR(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hR(n){Be(new Le("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ig(n)},l=new bA(i,s,r,c);return FA(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Be(new Le("auth-internal",e=>{const t=mn(e.getProvider("auth").getImmediate());return(i=>new lR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Re(hh,dh,uR(n)),Re(hh,dh,"esm2017")}/**
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
 */const dR=5*60,fR=nd("authIdTokenMaxAge")||dR;let fh=null;const pR=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>fR)return;const s=t==null?void 0:t.token;fh!==s&&(fh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gR(n=Ya()){const e=Zi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xA(n,{popupRedirectResolver:cR,persistence:[vS,aS,Ng]}),i=nd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=pR(r.toString());nS(t,o,()=>o(t.currentUser)),tS(t,a=>o(a))}}const s=ed("auth");return s&&UA(t,`http://${s}`),t}function mR(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=et("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",mR().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hR("Browser");const ph={apiKey:"AIzaSyAyX0y_pFrAS2uS6APjXsv6ibjLXlS6C10",authDomain:"physics-f8473.firebaseapp.com",projectId:"physics-f8473",storageBucket:"physics-f8473.appspot.com",messagingSenderId:"409425797879",appId:"1:409425797879:web:d24494ddc54055654d69f2",measurementId:"G-HMHJ8JGKZS"};let Rn;yy().length&&(Rn=Ya(),vy(Rn)),Rn=Zo(ph);const lo=qw(Rn),Ms=gR(Rn);var gh={};const mh="@firebase/database",_h="1.0.4";/**
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
 */let Fg="";function _R(n){Fg=n}/**
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
 */class yR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),le(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ni(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class vR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return _t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ug=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yR(e)}}catch{}return new vR},Kt=Ug("localStorage"),Na=Ug("sessionStorage");/**
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
 */const Ln=new Xi("@firebase/database"),ER=function(){let n=1;return function(){return n++}}(),Bg=function(n){const e=v_(n),t=new p_;t.update(e);const i=t.digest();return Ha.encodeByteArray(i)},vs=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vs.apply(null,i):typeof i=="object"?e+=le(i):e+=i,e+=" "}return e};let Yt=null,yh=!0;const IR=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(Ln.logLevel=b.VERBOSE,Yt=Ln.log.bind(Ln),e&&Na.set("logging_enabled",!0)):typeof n=="function"?Yt=n:(Yt=null,Na.remove("logging_enabled"))},me=function(...n){if(yh===!0&&(yh=!1,Yt===null&&Na.get("logging_enabled")===!0&&IR(!0)),Yt){const e=vs.apply(null,n);Yt(e)}},Es=function(n){return function(...e){me(n,...e)}},Da=function(...n){const e="FIREBASE INTERNAL ERROR: "+vs(...n);Ln.error(e)},an=function(...n){const e=`FIREBASE FATAL ERROR: ${vs(...n)}`;throw Ln.error(e),new Error(e)},ke=function(...n){const e="FIREBASE WARNING: "+vs(...n);Ln.warn(e)},TR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qg=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wR=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},zn="[MIN_NAME]",cn="[MAX_NAME]",ni=function(n,e){if(n===e)return 0;if(n===zn||e===cn)return-1;if(e===zn||n===cn)return 1;{const t=vh(n),i=vh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},AR=function(n,e){return n===e?0:n<e?-1:1},li=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+le(e))},dl=function(n){if(typeof n!="object"||n===null)return le(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=le(e[i]),t+=":",t+=dl(n[e[i]]);return t+="}",t},jg=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ve(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Wg=function(n){y(!qg(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},SR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},CR=new RegExp("^-?(0*)\\d{1,10}$"),PR=-2147483648,bR=2147483647,vh=function(n){if(CR.test(n)){const e=Number(n);if(e>=PR&&e<=bR)return e}return null},Is=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ke("Exception was thrown by user callback.",t),e},Math.floor(0))}},kR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class NR{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DR{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class Oa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Oa.OWNER="owner";/**
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
 */const fl="5",$g="v",Hg="s",zg="r",Gg="f",Kg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Qg="ls",Yg="p",Ma="ac",Jg="websocket",Xg="long_polling";/**
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
 */class OR{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function MR(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Zg(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===Jg)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Xg)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MR(n)&&(t.ns=n.namespace);const s=[];return Ve(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class LR{constructor(){this.counters_={}}incrementCounter(e,t=1){_t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Jm(this.counters_)}}/**
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
 */const Uo={},Bo={};function pl(n){const e=n.toString();return Uo[e]||(Uo[e]=new LR),Uo[e]}function VR(n,e){const t=n.toString();return Bo[t]||(Bo[t]=e()),Bo[t]}/**
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
 */class xR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Is(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Eh="start",FR="close",UR="pLPCommand",BR="pRTLPCB",em="id",tm="pw",nm="ser",qR="cb",jR="seg",WR="ts",$R="d",HR="dframe",im=1870,sm=30,zR=im-sm,GR=25e3,KR=3e4;class Cn{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=pl(t),this.urlFn=c=>(this.appCheckToken&&(c[Ma]=this.appCheckToken),Zg(t,Xg,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KR)),wR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gl((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Eh)this.id=a,this.password=c;else if(o===FR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Eh]="t",i[nm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[qR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[$g]=fl,this.transportSessionId&&(i[Hg]=this.transportSessionId),this.lastSessionId&&(i[Qg]=this.lastSessionId),this.applicationId&&(i[Yg]=this.applicationId),this.appCheckToken&&(i[Ma]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kg.test(location.hostname)&&(i[zg]=Gg);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cn.forceAllow_=!0}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){return Cn.forceAllow_?!0:!Cn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SR()&&!RR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xh(t),s=jg(i,zR);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[HR]="t",i[em]=e,i[tm]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=le(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gl{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ER(),window[UR+this.uniqueCallbackIdentifier]=e,window[BR+this.uniqueCallbackIdentifier]=t,this.myIFrame=gl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){me("frame writing exception"),a.stack&&me(a.stack),me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[em]=this.myID,e[tm]=this.myPW,e[nm]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sm+i.length<=im;){const o=this.pendingSegs.shift();i=i+"&"+jR+s+"="+o.seg+"&"+WR+s+"="+o.ts+"&"+$R+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(GR)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const QR=16384,YR=45e3;let pr=null;typeof MozWebSocket<"u"?pr=MozWebSocket:typeof WebSocket<"u"&&(pr=WebSocket);class xe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=pl(t),this.connURL=xe.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[$g]=fl,typeof location<"u"&&location.hostname&&Kg.test(location.hostname)&&(o[zg]=Gg),t&&(o[Hg]=t),i&&(o[Qg]=i),s&&(o[Ma]=s),r&&(o[Yg]=r),Zg(e,Jg,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let i;rd(),this.mySock=new pr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&pr!==null&&!xe.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ni(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=le(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=jg(t,QR);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xe.responsesRequiredToBeHealthy=2;xe.healthyTimeout=3e4;/**
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
 */class Yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cn,xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=xe&&xe.isAvailable();let i=t&&!xe.previouslyFailed();if(e.webSocketOnly&&(t||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[xe];else{const s=this.transports_=[];for(const r of Yi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Yi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Yi.globalTransportInitialized_=!1;/**
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
 */const JR=6e4,XR=5e3,ZR=10*1024,eC=100*1024,qo="t",Ih="d",tC="s",Th="r",nC="e",wh="o",Ah="a",Sh="n",Rh="p",iC="h";class sC{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new Yi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qo in e){const t=e[qo];t===Ah?this.upgradeIfSecondaryHealthy_():t===Th?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===wh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=li("t",e),i=li("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Rh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ah,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=li("t",e),i=li("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=li(qo,e);if(Ih in e){const i=e[Ih];if(t===iC){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Sh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===tC?this.onConnectionShutdown_(i):t===Th?this.onReset_(i):t===nC?Da("Server Error: "+i):t===wh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Da("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),fl!==i&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Rh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class rm{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class om{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class gr extends om{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ga()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new gr}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ch=32,Ph=768;class H{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function U(){return new H("")}function O(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Dt(n){return n.pieces_.length-n.pieceNum_}function W(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new H(n.pieces_,e)}function am(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function rC(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function cm(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function lm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new H(e,0)}function se(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof H)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new H(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function Oe(n,e){const t=O(n),i=O(e);if(t===null)return e;if(t===i)return Oe(W(n),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function um(n,e){if(Dt(n)!==Dt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Fe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Dt(n)>Dt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class oC{constructor(e,t){this.errorPrefix_=t,this.parts_=cm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ar(this.parts_[i]);hm(this)}}function aC(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ar(e),hm(n)}function cC(n){const e=n.parts_.pop();n.byteLength_-=Ar(e),n.parts_.length>0&&(n.byteLength_-=1)}function hm(n){if(n.byteLength_>Ph)throw new Error(n.errorPrefix_+"has a key path longer than "+Ph+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ch)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ch+") or object contains a cycle "+qt(n))}function qt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ml extends om{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ml}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ui=1e3,lC=60*5*1e3,bh=30*1e3,uC=1.3,hC=3e4,dC="server_kill",kh=3;class dt extends rm{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=dt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ui,this.maxReconnectDelay_=lC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!rd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ml.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(le(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new za,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;dt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&_t(e,"w")){const i=xn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||f_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=bh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=d_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+le(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Da("Unrecognized action received from server: "+le(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hC&&(this.reconnectDelay_=ui),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+dt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(h){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?me("getToken() completed but was canceled"):(me("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new sC(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ke(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(dC)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),c())}}}interrupt(e){me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zo(this.interruptReasons_)&&(this.reconnectDelay_=ui,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>dl(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new H(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){me("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kh&&(this.reconnectDelay_=bh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){me("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Fg.replace(/\./g,"-")]=1,Ga()?e["framework.cordova"]=1:sd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gr.getInstance().currentlyOnline();return zo(this.interruptReasons_)&&e}}dt.nextPersistentConnectionId_=0;dt.nextConnectionId_=0;/**
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
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
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
 */class uo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new M(zn,e),s=new M(zn,t);return this.compare(i,s)!==0}minPost(){return M.MIN}}/**
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
 */let Ls;class dm extends uo{static get __EMPTY_NODE(){return Ls}static set __EMPTY_NODE(e){Ls=e}compare(e,t){return ni(e.name,t.name)}isDefinedOn(e){throw Kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(cn,Ls)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,Ls)}toString(){return".key"}}const Vn=new dm;/**
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
 */class Vs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ie.RED,this.left=s??Se.EMPTY_NODE,this.right=r??Se.EMPTY_NODE}copy(e,t,i,s,r){return new ie(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Se.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class fC{copy(e,t,i,s,r){return this}insert(e,t,i){return new ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Se{constructor(e,t=Se.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Se(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new Se(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Se.EMPTY_NODE=new fC;/**
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
 */function pC(n,e){return ni(n.name,e.name)}function _l(n,e){return ni(n,e)}/**
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
 */let La;function gC(n){La=n}const fm=function(n){return typeof n=="number"?"number:"+Wg(n):"string:"+n},pm=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&_t(e,".sv"),"Priority must be a string or number.")}else y(n===La||n.isEmpty(),"priority of unexpected type.");y(n===La||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nh;class te{constructor(e,t=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pm(this.priorityNode_)}static set __childrenNodeConstructor(e){Nh=e}static get __childrenNodeConstructor(){return Nh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:O(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=O(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,te.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Wg(this.value_):e+=this.value_,this.lazyHash_=Bg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=te.VALUE_TYPE_ORDER.indexOf(t),r=te.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gm,mm;function mC(n){gm=n}function _C(n){mm=n}class yC extends uo{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ni(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(cn,new te("[PRIORITY-POST]",mm))}makePost(e,t){const i=gm(e);return new M(t,new te("[PRIORITY-POST]",i))}toString(){return".priority"}}const ye=new yC;/**
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
 */const vC=Math.log(2);class EC{constructor(e){const t=r=>parseInt(Math.log(r)/vC,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const mr=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=n[c],d=t?t(h):h,new ie(d,h.node,ie.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=s(c,f),T=s(f+1,l);return h=n[f],d=t?t(h):h,new ie(d,h.node,ie.BLACK,m,T)}},r=function(c){let l=null,u=null,h=n.length;const d=function(m,T){const E=h-m,F=h;h-=m;const q=s(E+1,F),K=n[E],we=t?t(K):K;f(new ie(we,K.node,T,null,q))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const T=c.nextBitIsOne(),E=Math.pow(2,c.count-(m+1));T?d(E,ie.BLACK):(d(E,ie.BLACK),d(E,ie.RED))}return u},o=new EC(n.length),a=r(o);return new Se(i||e,a)};/**
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
 */let jo;const En={};class ut{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(En&&ye,"ChildrenNode.ts has not been loaded"),jo=jo||new ut({".priority":En},{".priority":ye}),jo}get(e){const t=xn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Se?t:null}hasIndex(e){return _t(this.indexSet_,e.toString())}addIndex(e,t){y(e!==Vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=mr(i,e.getCompare()):a=En;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new ut(u,l)}addToIndexes(e,t){const i=Gs(this.indexes_,(s,r)=>{const o=xn(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),s===En)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(M.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),mr(a,o.getCompare())}else return En;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new M(e.name,a))),c.insert(e,e.node)}});return new ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=Gs(this.indexes_,s=>{if(s===En)return s;{const r=t.get(e.name);return r?s.remove(new M(e.name,r)):s}});return new ut(i,this.indexSet_)}}/**
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
 */let hi;class V{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&pm(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hi||(hi=new V(new Se(_l),null,ut.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hi}updatePriority(e){return this.children_.isEmpty()?this:new V(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?hi:t}}getChild(e){const t=O(e);return t===null?this:this.getImmediateChild(t).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new M(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?hi:this.priorityNode_;return new V(s,o,r)}}updateChild(e,t){const i=O(e);if(i===null)return t;{y(O(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(W(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(ye,(o,a)=>{t[o]=a.val(e),i++,r&&V.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fm(this.getPriority().val())+":"),this.forEachChild(ye,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Bg(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ts?-1:0}withIndex(e){if(e===Vn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new V(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(ye),s=t.getIterator(ye);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Vn?null:this.indexMap_.get(e.toString())}}V.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class IC extends V{constructor(){super(new Se(_l),V.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return V.EMPTY_NODE}isEmpty(){return!1}}const Ts=new IC;Object.defineProperties(M,{MIN:{value:new M(zn,V.EMPTY_NODE)},MAX:{value:new M(cn,Ts)}});dm.__EMPTY_NODE=V.EMPTY_NODE;te.__childrenNodeConstructor=V;gC(Ts);_C(Ts);/**
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
 */const TC=!0;function _e(n,e=null){if(n===null)return V.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new te(t,_e(e))}if(!(n instanceof Array)&&TC){const t=[];let i=!1;if(Ve(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=_e(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new M(o,c)))}}),t.length===0)return V.EMPTY_NODE;const r=mr(t,pC,o=>o.name,_l);if(i){const o=mr(t,ye.getCompare());return new V(r,_e(e),new ut({".priority":o},{".priority":ye}))}else return new V(r,_e(e),ut.Default)}else{let t=V.EMPTY_NODE;return Ve(n,(i,s)=>{if(_t(n,i)&&i.substring(0,1)!=="."){const r=_e(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(_e(e))}}mC(_e);/**
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
 */class wC extends uo{constructor(e){super(),this.indexPath_=e,y(!N(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ni(e.name,t.name):r}makePost(e,t){const i=_e(e),s=V.EMPTY_NODE.updateChild(this.indexPath_,i);return new M(t,s)}maxPost(){const e=V.EMPTY_NODE.updateChild(this.indexPath_,Ts);return new M(cn,e)}toString(){return cm(this.indexPath_,0).join("/")}}/**
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
 */class AC extends uo{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ni(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const i=_e(e);return new M(t,i)}toString(){return".value"}}const SC=new AC;/**
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
 */function RC(n){return{type:"value",snapshotNode:n}}function CC(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function PC(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Dh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function bC(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class yl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new yl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Oh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===ye?t="$priority":n.index_===SC?t="$value":n.index_===Vn?t="$key":(y(n.index_ instanceof wC,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=le(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=le(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+le(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=le(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+le(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Mh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==ye&&(e.i=n.index_.toString()),e}/**
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
 */class _r extends rm{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_r.getListenId_(e,i),a={};this.listens_[o]=a;const c=Oh(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(r,h,!1,i),xn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",s(d,null)}})}unlisten(e,t){const i=_r.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Oh(e._queryParams),i=e._path.toString(),s=new za;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ni(a.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kC{constructor(){this.rootNode_=V.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function yr(){return{value:null,children:new Map}}function _m(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=O(e);n.children.has(i)||n.children.set(i,yr());const s=n.children.get(i);e=W(e),_m(s,e,t)}}function Va(n,e,t){n.value!==null?t(e,n.value):NC(n,(i,s)=>{const r=new H(e.toString()+"/"+i);Va(s,r,t)})}function NC(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class DC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ve(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Lh=10*1e3,OC=30*1e3,MC=5*60*1e3;class LC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new DC(e);const i=Lh+(OC-Lh)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ve(e,(s,r)=>{r>0&&_t(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*MC))}}/**
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
 */var Qe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qe||(Qe={}));function ym(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Em(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class vr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Qe.ACK_USER_WRITE,this.source=ym()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new H(e));return new vr(U(),t,this.revert)}}else return y(O(this.path)===e,"operationForChild called for unrelated child."),new vr(W(this.path),this.affectedTree,this.revert)}}/**
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
 */class ln{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Qe.OVERWRITE}operationForChild(e){return N(this.path)?new ln(this.source,U(),this.snap.getImmediateChild(e)):new ln(this.source,W(this.path),this.snap)}}/**
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
 */class Ji{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Qe.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new H(e));return t.isEmpty()?null:t.value?new ln(this.source,U(),t.value):new Ji(this.source,U(),t)}else return y(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ji(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vl{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=O(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function VC(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bC(o.childName,o.snapshotNode))}),di(n,s,"child_removed",e,i,t),di(n,s,"child_added",e,i,t),di(n,s,"child_moved",r,i,t),di(n,s,"child_changed",e,i,t),di(n,s,"value",e,i,t),s}function di(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>FC(n,a,c)),o.forEach(a=>{const c=xC(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function xC(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function FC(n,e,t){if(e.childName==null||t.childName==null)throw Kn("Should only compare child_ events.");const i=new M(e.childName,e.snapshotNode),s=new M(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Im(n,e){return{eventCache:n,serverCache:e}}function bi(n,e,t,i){return Im(new vl(e,t,i),n.serverCache)}function Tm(n,e,t,i){return Im(n.eventCache,new vl(e,t,i))}function xa(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function un(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Wo;const UC=()=>(Wo||(Wo=new Se(AR)),Wo);class j{constructor(e,t=UC()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return Ve(e,(i,s)=>{t=t.set(new H(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:U(),value:this.value};if(N(e))return null;{const i=O(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(W(e),t);return r!=null?{path:se(new H(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=O(e),i=this.children.get(t);return i!==null?i.subtree(W(e)):new j(null)}}set(e,t){if(N(e))return new j(t,this.children);{const i=O(e),r=(this.children.get(i)||new j(null)).set(W(e),t),o=this.children.insert(i,r);return new j(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=O(e),i=this.children.get(t);if(i){const s=i.remove(W(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(N(e))return this.value;{const t=O(e),i=this.children.get(t);return i?i.get(W(e)):null}}setTree(e,t){if(N(e))return t;{const i=O(e),r=(this.children.get(i)||new j(null)).setTree(W(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new j(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(se(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,U(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(N(e))return null;{const r=O(e),o=this.children.get(r);return o?o.findOnPath_(W(e),se(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,U(),t)}foreachOnPath_(e,t,i){if(N(e))return this;{this.value&&i(t,this.value);const s=O(e),r=this.children.get(s);return r?r.foreachOnPath_(W(e),se(t,s),i):new j(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(se(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ue{constructor(e){this.writeTree_=e}static empty(){return new Ue(new j(null))}}function ki(n,e,t){if(N(e))return new Ue(new j(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Oe(s,e);return r=r.updateChild(o,t),new Ue(n.writeTree_.set(s,r))}else{const s=new j(t),r=n.writeTree_.setTree(e,s);return new Ue(r)}}}function Vh(n,e,t){let i=n;return Ve(t,(s,r)=>{i=ki(i,se(e,s),r)}),i}function xh(n,e){if(N(e))return Ue.empty();{const t=n.writeTree_.setTree(e,new j(null));return new Ue(t)}}function Fa(n,e){return _n(n,e)!=null}function _n(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Oe(t.path,e)):null}function Fh(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(ye,(i,s)=>{e.push(new M(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new M(i,s.value))}),e}function Pt(n,e){if(N(e))return n;{const t=_n(n,e);return t!=null?new Ue(new j(t)):new Ue(n.writeTree_.subtree(e))}}function Ua(n){return n.writeTree_.isEmpty()}function Gn(n,e){return wm(U(),n.writeTree_,e)}function wm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=wm(se(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(se(n,".priority"),i)),t}}/**
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
 */function Am(n,e){return bm(e,n)}function BC(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ki(n.visibleWrites,e,t)),n.lastWriteId=i}function qC(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function jC(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&WC(a,i.path)?s=!1:Fe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return $C(n),!0;if(i.snap)n.visibleWrites=xh(n.visibleWrites,i.path);else{const a=i.children;Ve(a,c=>{n.visibleWrites=xh(n.visibleWrites,se(i.path,c))})}return!0}else return!1}function WC(n,e){if(n.snap)return Fe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Fe(se(n.path,t),e))return!0;return!1}function $C(n){n.visibleWrites=Sm(n.allWrites,HC,U()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function HC(n){return n.visible}function Sm(n,e,t){let i=Ue.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)Fe(t,o)?(a=Oe(t,o),i=ki(i,a,r.snap)):Fe(o,t)&&(a=Oe(o,t),i=ki(i,U(),r.snap.getChild(a)));else if(r.children){if(Fe(t,o))a=Oe(t,o),i=Vh(i,a,r.children);else if(Fe(o,t))if(a=Oe(o,t),N(a))i=Vh(i,U(),r.children);else{const c=xn(r.children,O(a));if(c){const l=c.getChild(W(a));i=ki(i,U(),l)}}}else throw Kn("WriteRecord should have .snap or .children")}}return i}function Rm(n,e,t,i,s){if(!i&&!s){const r=_n(n.visibleWrites,e);if(r!=null)return r;{const o=Pt(n.visibleWrites,e);if(Ua(o))return t;if(t==null&&!Fa(o,U()))return null;{const a=t||V.EMPTY_NODE;return Gn(o,a)}}}else{const r=Pt(n.visibleWrites,e);if(!s&&Ua(r))return t;if(!s&&t==null&&!Fa(r,U()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(Fe(l.path,e)||Fe(e,l.path))},a=Sm(n.allWrites,o,e),c=t||V.EMPTY_NODE;return Gn(a,c)}}}function zC(n,e,t){let i=V.EMPTY_NODE;const s=_n(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ye,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Pt(n.visibleWrites,e);return t.forEachChild(ye,(o,a)=>{const c=Gn(Pt(r,new H(o)),a);i=i.updateImmediateChild(o,c)}),Fh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Pt(n.visibleWrites,e);return Fh(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function GC(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=se(e,t);if(Fa(n.visibleWrites,r))return null;{const o=Pt(n.visibleWrites,r);return Ua(o)?s.getChild(t):Gn(o,s.getChild(t))}}function KC(n,e,t,i){const s=se(e,t),r=_n(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Pt(n.visibleWrites,s);return Gn(o,i.getNode().getImmediateChild(t))}else return null}function QC(n,e){return _n(n.visibleWrites,e)}function YC(n,e,t,i,s,r,o){let a;const c=Pt(n.visibleWrites,e),l=_n(c,U());if(l!=null)a=l;else if(t!=null)a=Gn(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function JC(){return{visibleWrites:Ue.empty(),allWrites:[],lastWriteId:-1}}function Ba(n,e,t,i){return Rm(n.writeTree,n.treePath,e,t,i)}function Cm(n,e){return zC(n.writeTree,n.treePath,e)}function Uh(n,e,t,i){return GC(n.writeTree,n.treePath,e,t,i)}function Er(n,e){return QC(n.writeTree,se(n.treePath,e))}function XC(n,e,t,i,s,r){return YC(n.writeTree,n.treePath,e,t,i,s,r)}function El(n,e,t){return KC(n.writeTree,n.treePath,e,t)}function Pm(n,e){return bm(se(n.treePath,e),n.writeTree)}function bm(n,e){return{treePath:n,writeTree:e}}/**
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
 */class ZC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Dh(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,PC(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,CC(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Dh(i,e.snapshotNode,s.oldSnap));else throw Kn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class e0{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const km=new e0;class Il{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new vl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return El(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:un(this.viewCache_),r=XC(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function t0(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function n0(n,e,t,i,s){const r=new ZC;let o,a;if(t.type===Qe.OVERWRITE){const l=t;l.source.fromUser?o=qa(n,e,l.path,l.snap,i,s,r):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!N(l.path),o=Ir(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===Qe.MERGE){const l=t;l.source.fromUser?o=s0(n,e,l.path,l.children,i,s,r):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ja(n,e,l.path,l.children,i,s,a,r))}else if(t.type===Qe.ACK_USER_WRITE){const l=t;l.revert?o=a0(n,e,l.path,i,s,r):o=r0(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===Qe.LISTEN_COMPLETE)o=o0(n,e,t.path,i,r);else throw Kn("Unknown operation type: "+t.type);const c=r.getChanges();return i0(e,o,c),{viewCache:o,changes:c}}function i0(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xa(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(RC(xa(e)))}}function Nm(n,e,t,i,s,r){const o=e.eventCache;if(Er(i,t)!=null)return e;{let a,c;if(N(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=un(e),u=l instanceof V?l:V.EMPTY_NODE,h=Cm(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const l=Ba(i,un(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=O(t);if(l===".priority"){y(Dt(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Uh(i,t,u,c);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=W(t);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Uh(i,t,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=El(i,l,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),l,h,u,s,r):a=o.getNode()}}return bi(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function Ir(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(N(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=O(t);if(!c.isCompleteForPath(t)&&Dt(t)>1)return e;const m=W(t),E=c.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?l=u.updatePriority(c.getNode(),E):l=u.updateChild(c.getNode(),f,E,m,km,null)}const h=Tm(e,l,c.isFullyInitialized()||N(t),u.filtersNodes()),d=new Il(s,h,r);return Nm(n,h,t,s,d,a)}function qa(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new Il(s,e,r);if(N(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=bi(e,l,!0,n.filter.filtersNodes());else{const h=O(t);if(h===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=bi(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=W(t),f=a.getNode().getImmediateChild(h);let m;if(N(d))m=i;else{const T=u.getCompleteChild(h);T!=null?am(d)===".priority"&&T.getChild(lm(d)).isEmpty()?m=T:m=T.updateChild(d,i):m=V.EMPTY_NODE}if(f.equals(m))c=e;else{const T=n.filter.updateChild(a.getNode(),h,m,d,u,o);c=bi(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Bh(n,e){return n.eventCache.isCompleteForChild(e)}function s0(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=se(t,c);Bh(e,O(u))&&(a=qa(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=se(t,c);Bh(e,O(u))||(a=qa(n,a,u,l,s,r,o))}),a}function qh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ja(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;N(t)?l=i:l=new j(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),m=qh(n,f,d);c=Ir(n,c,new H(h),m,s,r,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const m=e.serverCache.getNode().getImmediateChild(h),T=qh(n,m,d);c=Ir(n,c,new H(h),T,s,r,o,a)}}),c}function r0(n,e,t,i,s,r,o){if(Er(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(N(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Ir(n,e,t,c.getNode().getChild(t),s,r,a,o);if(N(t)){let l=new j(null);return c.getNode().forEachChild(Vn,(u,h)=>{l=l.set(new H(u),h)}),ja(n,e,t,l,s,r,a,o)}else return e}else{let l=new j(null);return i.foreach((u,h)=>{const d=se(t,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),ja(n,e,t,l,s,r,a,o)}}function o0(n,e,t,i,s){const r=e.serverCache,o=Tm(e,r.getNode(),r.isFullyInitialized()||N(t),r.isFiltered());return Nm(n,o,t,i,km,s)}function a0(n,e,t,i,s,r){let o;if(Er(i,t)!=null)return e;{const a=new Il(i,e,s),c=e.eventCache.getNode();let l;if(N(t)||O(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ba(i,un(e));else{const h=e.serverCache.getNode();y(h instanceof V,"serverChildren would be complete if leaf node"),u=Cm(i,h)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=O(t);let h=El(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=n.filter.updateChild(c,u,h,W(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,V.EMPTY_NODE,W(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ba(i,un(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Er(i,U())!=null,bi(e,l,o,n.filter.filtersNodes())}}function c0(n,e){const t=un(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(O(e)).isEmpty())?t.getChild(e):null}function jh(n,e,t,i){e.type===Qe.MERGE&&e.source.queryId!==null&&(y(un(n.viewCache_),"We should always have a full cache before handling merges"),y(xa(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=n0(n.processor_,s,e,t,i);return t0(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,l0(n,r.changes,r.viewCache.eventCache.getNode(),null)}function l0(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return VC(n.eventGenerator_,e,t,s)}/**
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
 */let Wh;function u0(n){y(!Wh,"__referenceConstructor has already been defined"),Wh=n}function Tl(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),jh(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(jh(o,e,t,i));return r}}function wl(n,e){let t=null;for(const i of n.views.values())t=t||c0(i,e);return t}/**
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
 */let $h;function h0(n){y(!$h,"__referenceConstructor has already been defined"),$h=n}class Hh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=JC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function d0(n,e,t,i,s){return BC(n.pendingWriteTree_,e,t,i,s),s?fo(n,new ln(ym(),e,t)):[]}function Pn(n,e,t=!1){const i=qC(n.pendingWriteTree_,e);if(jC(n.pendingWriteTree_,e)){let r=new j(null);return i.snap!=null?r=r.set(U(),!0):Ve(i.children,o=>{r=r.set(new H(o),!0)}),fo(n,new vr(i.path,r,t))}else return[]}function ho(n,e,t){return fo(n,new ln(vm(),e,t))}function f0(n,e,t){const i=j.fromObject(t);return fo(n,new Ji(vm(),e,i))}function p0(n,e,t,i){const s=Lm(n,i);if(s!=null){const r=Vm(s),o=r.path,a=r.queryId,c=Oe(o,e),l=new ln(Em(a),c,t);return xm(n,o,l)}else return[]}function g0(n,e,t,i){const s=Lm(n,i);if(s){const r=Vm(s),o=r.path,a=r.queryId,c=Oe(o,e),l=j.fromObject(t),u=new Ji(Em(a),c,l);return xm(n,o,u)}else return[]}function Dm(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=Oe(o,e),l=wl(a,c);if(l)return l});return Rm(s,e,r,t,!0)}function fo(n,e){return Om(e,n.syncPointTree_,null,Am(n.pendingWriteTree_,U()))}function Om(n,e,t,i){if(N(n.path))return Mm(n,e,t,i);{const s=e.get(U());t==null&&s!=null&&(t=wl(s,U()));let r=[];const o=O(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=Pm(i,o);r=r.concat(Om(a,c,l,u))}return s&&(r=r.concat(Tl(s,n,i,t))),r}}function Mm(n,e,t,i){const s=e.get(U());t==null&&s!=null&&(t=wl(s,U()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Pm(i,o),u=n.operationForChild(o);u&&(r=r.concat(Mm(u,a,c,l)))}),s&&(r=r.concat(Tl(s,n,i,t))),r}function Lm(n,e){return n.tagToQueryMap.get(e)}function Vm(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new H(n.substr(0,e))}}function xm(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=Am(n.pendingWriteTree_,e);return Tl(i,t,s,null)}/**
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
 */class Al{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Al(t)}node(){return this.node_}}class Sl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=se(this.path_,e);return new Sl(this.syncTree_,t)}node(){return Dm(this.syncTree_,this.path_)}}const m0=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},zh=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return _0(n[".sv"],e,t);if(typeof n[".sv"]=="object")return y0(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},_0=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},y0=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},v0=function(n,e,t,i){return Rl(e,new Sl(t,n),i)},E0=function(n,e,t){return Rl(n,new Al(e),t)};function Rl(n,e,t){const i=n.getPriority().val(),s=zh(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=zh(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new te(a,_e(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new te(s))),o.forEachChild(ye,(a,c)=>{const l=Rl(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class Cl{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Pl(n,e){let t=e instanceof H?e:new H(e),i=n,s=O(t);for(;s!==null;){const r=xn(i.node.children,s)||{children:{},childCount:0};i=new Cl(s,i,r),t=W(t),s=O(t)}return i}function ii(n){return n.node.value}function Fm(n,e){n.node.value=e,Wa(n)}function Um(n){return n.node.childCount>0}function I0(n){return ii(n)===void 0&&!Um(n)}function po(n,e){Ve(n.node.children,(t,i)=>{e(new Cl(t,n,i))})}function Bm(n,e,t,i){t&&!i&&e(n),po(n,s=>{Bm(s,e,!0,i)}),t&&i&&e(n)}function T0(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ws(n){return new H(n.parent===null?n.name:ws(n.parent)+"/"+n.name)}function Wa(n){n.parent!==null&&w0(n.parent,n.name,n)}function w0(n,e,t){const i=I0(t),s=_t(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Wa(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Wa(n))}/**
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
 */const A0=/[\[\].#$\/\u0000-\u001F\u007F]/,S0=/[\[\].#$\u0000-\u001F\u007F]/,$o=10*1024*1024,qm=function(n){return typeof n=="string"&&n.length!==0&&!A0.test(n)},R0=function(n){return typeof n=="string"&&n.length!==0&&!S0.test(n)},C0=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),R0(n)},jm=function(n,e,t){const i=t instanceof H?new oC(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+qt(i));if(typeof e=="function")throw new Error(n+"contains a function "+qt(i)+" with contents = "+e.toString());if(qg(e))throw new Error(n+"contains "+e.toString()+" "+qt(i));if(typeof e=="string"&&e.length>$o/3&&Ar(e)>$o)throw new Error(n+"contains a string greater than "+$o+" utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ve(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!qm(o)))throw new Error(n+" contains an invalid key ("+o+") "+qt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aC(i,o),jm(n,a,i),cC(i)}),s&&r)throw new Error(n+' contains ".value" child '+qt(i)+" in addition to actual children.")}},P0=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!C0(t))throw new Error(y_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k0(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!um(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function yn(n,e,t){k0(n,t),N0(n,i=>Fe(i,e)||Fe(e,i))}function N0(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(D0(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function D0(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Yt&&me("event: "+t.toString()),Is(i)}}}/**
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
 */const O0="repo_interrupt",M0=25;class L0{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=yr(),this.transactionQueueTree_=new Cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function V0(n,e,t){if(n.stats_=pl(n.repoInfo_),n.forceRestClient_||kR())n.server_=new _r(n.repoInfo_,(i,s,r,o)=>{Gh(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Kh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{le(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new dt(n.repoInfo_,e,(i,s,r,o)=>{Gh(n,i,s,r,o)},i=>{Kh(n,i)},i=>{F0(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=VR(n.repoInfo_,()=>new LC(n.stats_,n.server_)),n.infoData_=new kC,n.infoSyncTree_=new Hh({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=ho(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bl(n,"connected",!1),n.serverSyncTree_=new Hh({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);yn(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function x0(n){const t=n.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Wm(n){return m0({timestamp:x0(n)})}function Gh(n,e,t,i,s){n.dataUpdateCount++;const r=new H(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Gs(t,l=>_e(l));o=g0(n.serverSyncTree_,r,c,s)}else{const c=_e(t);o=p0(n.serverSyncTree_,r,c,s)}else if(i){const c=Gs(t,l=>_e(l));o=f0(n.serverSyncTree_,r,c)}else{const c=_e(t);o=ho(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Nl(n,r)),yn(n.eventQueue_,a,o)}function Kh(n,e){bl(n,"connected",e),e===!1&&B0(n)}function F0(n,e){Ve(e,(t,i)=>{bl(n,t,i)})}function bl(n,e,t){const i=new H("/.info/"+e),s=_e(t);n.infoData_.updateSnapshot(i,s);const r=ho(n.infoSyncTree_,i,s);yn(n.eventQueue_,i,r)}function U0(n){return n.nextWriteId_++}function B0(n){$m(n,"onDisconnectEvents");const e=Wm(n),t=yr();Va(n.onDisconnect_,U(),(s,r)=>{const o=v0(s,r,n.serverSyncTree_,e);_m(t,s,o)});let i=[];Va(t,U(),(s,r)=>{i=i.concat(ho(n.serverSyncTree_,s,r));const o=$0(n,s);Nl(n,o)}),n.onDisconnect_=yr(),yn(n.eventQueue_,U(),i)}function q0(n){n.persistentConnection_&&n.persistentConnection_.interrupt(O0)}function $m(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),me(t,...e)}function Hm(n,e,t){return Dm(n.serverSyncTree_,e,t)||V.EMPTY_NODE}function kl(n,e=n.transactionQueueTree_){if(e||go(n,e),ii(e)){const t=Gm(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&j0(n,ws(e),t)}else Um(e)&&po(e,t=>{kl(n,t)})}function j0(n,e,t){const i=t.map(l=>l.currentWriteId),s=Hm(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];y(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Oe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{$m(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Pn(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();go(n,Pl(n.transactionQueueTree_,e)),kl(n,n.transactionQueueTree_),yn(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Is(h[d])}else{if(l==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ke("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=l}Nl(n,e)}},o)}function Nl(n,e){const t=zm(n,e),i=ws(t),s=Gm(n,t);return W0(n,s,i),i}function W0(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Oe(t,c.path);let u=!1,h;if(y(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,s=s.concat(Pn(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=M0)u=!0,h="maxretry",s=s.concat(Pn(n.serverSyncTree_,c.currentWriteId,!0));else{const d=Hm(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){jm("transaction failed: Data returned ",f,c.path);let m=_e(f);typeof f=="object"&&f!=null&&_t(f,".priority")||(m=m.updatePriority(d.getPriority()));const E=c.currentWriteId,F=Wm(n),q=E0(m,d,F);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=q,c.currentWriteId=U0(n),o.splice(o.indexOf(E),1),s=s.concat(d0(n.serverSyncTree_,c.path,q,c.currentWriteId,c.applyLocally)),s=s.concat(Pn(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",s=s.concat(Pn(n.serverSyncTree_,c.currentWriteId,!0))}yn(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}go(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Is(i[a]);kl(n,n.transactionQueueTree_)}function zm(n,e){let t,i=n.transactionQueueTree_;for(t=O(e);t!==null&&ii(i)===void 0;)i=Pl(i,t),e=W(e),t=O(e);return i}function Gm(n,e){const t=[];return Km(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Km(n,e,t){const i=ii(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);po(e,s=>{Km(n,s,t)})}function go(n,e){const t=ii(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Fm(e,t.length>0?t:void 0)}po(e,i=>{go(n,i)})}function $0(n,e){const t=ws(zm(n,e)),i=Pl(n.transactionQueueTree_,e);return T0(i,s=>{Ho(n,s)}),Ho(n,i),Bm(i,s=>{Ho(n,s)}),t}function Ho(n,e){const t=ii(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Pn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fm(e,void 0):t.length=r+1,yn(n.eventQueue_,ws(e),s);for(let o=0;o<i.length;o++)Is(i[o])}}/**
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
 */function H0(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function z0(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ke(`Invalid query segment '${t}' in query '${n}'`)}return e}const Qh=function(n,e){const t=G0(n),i=t.namespace;t.domain==="firebase.com"&&an(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||TR();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new OR(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new H(t.pathString)}},G0=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=H0(n.substring(u,h)));const d=z0(n.substring(Math.min(n.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class Dl{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return N(this._path)?null:am(this._path)}get ref(){return new si(this._repo,this._path)}get _queryIdentifier(){const e=Mh(this._queryParams),t=dl(e);return t==="{}"?"default":t}get _queryObject(){return Mh(this._queryParams)}isEqual(e){if(e=re(e),!(e instanceof Dl))return!1;const t=this._repo===e._repo,i=um(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+rC(this._path)}}class si extends Dl{constructor(e,t){super(e,t,new yl,!1)}get parent(){const e=lm(this._path);return e===null?null:new si(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}u0(si);h0(si);/**
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
 */const K0="FIREBASE_DATABASE_EMULATOR_HOST",$a={};let Q0=!1;function Y0(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),me("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Qh(r,s),a=o.repoInfo,c,l;typeof process<"u"&&gh&&(l=gh[K0]),l?(c=!0,r=`http://${l}?ns=${a.namespace}`,o=Qh(r,s),a=o.repoInfo):c=!o.repoInfo.secure;const u=s&&c?new Oa(Oa.OWNER):new DR(n.name,n.options,e);P0("Invalid Firebase Database URL",o),N(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const h=X0(a,n,u,new NR(n.name,t));return new Z0(h,n)}function J0(n,e){const t=$a[e];(!t||t[n.key]!==n)&&an(`Database ${e}(${n.repoInfo_}) has already been deleted.`),q0(n),delete t[n.key]}function X0(n,e,t,i){let s=$a[e.name];s||(s={},$a[e.name]=s);let r=s[n.toURLString()];return r&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new L0(n,Q0,t,i),s[n.toURLString()]=r,r}class Z0{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(V0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new si(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(J0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}/**
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
 */function eP(n){_R(dn),Be(new Le("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Y0(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Re(mh,_h,n),Re(mh,_h,"esm2017")}dt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};dt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};eP();const hP=Tr({user:null,loading:!0,data:{}}),tP=Tr({questions:[],loading:!0}),nP=Tr({topics:[],loading:!0}),iP=Tr({flashcards:[],loading:!0}),dP={signup:async(n,e)=>{await ZA(Ms,n,e)},login:async(n,e)=>{await eS(Ms,n,e)},logout:async()=>{await iS(Ms)},getEmail:()=>{const n=Ms.currentUser;return n?n.email:null}};async function fP(n,e){const t=Uw(lo,"questions",n);await tA(t,{attempted:Vo(1),correct:Vo(e?1:0)})}async function pP(n){const e=Qc(lo,`${n}Topics`),t=await nl(e),i=[];t.forEach(s=>{i.push({topic:s.data().topic,...s.data()})}),nP.set({topics:i,loading:!1})}async function gP(n){const e=Qc(lo,n),t=await nl(e),i=[];t.forEach(s=>{i.push({id:s.data().id,attempted:s.data().attempted,topic:s.data().topic,correct:s.data().correct,difficulty:s.data().difficulty,image:s.data().image,explanation:s.data().explanation,options:s.data().options,answer:s.data().answer,question:s.data().question,type:s.data().type,unit:s.data().unit,formattedAnswer:s.data().formattedAnswer,...s.data()})}),tP.set({questions:i,loading:!1})}async function mP(n){const e=Qc(lo,`${n} Flashcards`),t=await nl(e),i=[];t.forEach(s=>{i.push({front:s.data().front,back:s.data().back,...s.data()})}),iP.set({flashcards:i,loading:!1})}export{Ms as a,lo as b,hP as c,Uw as d,dP as e,pP as f,lP as g,gP as h,iP as i,mP as j,tP as q,uP as s,nP as t,fP as u};
