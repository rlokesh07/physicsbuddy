import { k as o } from './katex.Dfyhscvt.js';
const a = { '\\times': '\\text{\\fontfamily{Times New Roman}\\selectfont}' };
function i(e) {
	return o.renderToString(e, { macros: a });
}
function s(e) {
	const r = /\$\$(.*?)\$\$/g;
	let t = e;
	return (t = t.replace(r, (c, n) => i(n))), t;
}
export { s as r };
