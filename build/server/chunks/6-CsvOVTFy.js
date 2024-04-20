function load({ params }) {
	const question = params.id;
	return {
		id: question
	};
}

var _page_ts = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	load: load
});

const index = 6;
let component_cache;
const component = async () =>
	(component_cache ??= (await import('./_page.svelte-D1RowKnV.js')).default);
const universal_id = 'src/routes/questions/[id]/+page.ts';
const imports = [
	'_app/immutable/nodes/6.C_Q7aRp-.js',
	'_app/immutable/chunks/scheduler.C8hMGX5Y.js',
	'_app/immutable/chunks/index.BW63jDgk.js',
	'_app/immutable/chunks/each.D6YF6ztN.js',
	'_app/immutable/chunks/KaTeX.DDaMeVYv.js',
	'_app/immutable/chunks/store.1S1T_c8D.js',
	'_app/immutable/chunks/index.C6r_ZE0-.js'
];
const stylesheets = ['_app/immutable/assets/6.DfCDV_Xg.css'];
const fonts = [
	'_app/immutable/assets/KaTeX_AMS-Regular.BQhdFMY1.woff2',
	'_app/immutable/assets/KaTeX_AMS-Regular.DMm9YOAa.woff',
	'_app/immutable/assets/KaTeX_AMS-Regular.DRggAlZN.ttf',
	'_app/immutable/assets/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2',
	'_app/immutable/assets/KaTeX_Caligraphic-Bold.BEiXGLvX.woff',
	'_app/immutable/assets/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf',
	'_app/immutable/assets/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2',
	'_app/immutable/assets/KaTeX_Caligraphic-Regular.CTRA-rTL.woff',
	'_app/immutable/assets/KaTeX_Caligraphic-Regular.wX97UBjC.ttf',
	'_app/immutable/assets/KaTeX_Fraktur-Bold.CL6g_b3V.woff2',
	'_app/immutable/assets/KaTeX_Fraktur-Bold.BsDP51OF.woff',
	'_app/immutable/assets/KaTeX_Fraktur-Bold.BdnERNNW.ttf',
	'_app/immutable/assets/KaTeX_Fraktur-Regular.CTYiF6lA.woff2',
	'_app/immutable/assets/KaTeX_Fraktur-Regular.Dxdc4cR9.woff',
	'_app/immutable/assets/KaTeX_Fraktur-Regular.CB_wures.ttf',
	'_app/immutable/assets/KaTeX_Main-Bold.Cx986IdX.woff2',
	'_app/immutable/assets/KaTeX_Main-Bold.Jm3AIy58.woff',
	'_app/immutable/assets/KaTeX_Main-Bold.waoOVXN0.ttf',
	'_app/immutable/assets/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2',
	'_app/immutable/assets/KaTeX_Main-BoldItalic.SpSLRI95.woff',
	'_app/immutable/assets/KaTeX_Main-BoldItalic.DzxPMmG6.ttf',
	'_app/immutable/assets/KaTeX_Main-Italic.NWA7e6Wa.woff2',
	'_app/immutable/assets/KaTeX_Main-Italic.BMLOBm91.woff',
	'_app/immutable/assets/KaTeX_Main-Italic.3WenGoN9.ttf',
	'_app/immutable/assets/KaTeX_Main-Regular.B22Nviop.woff2',
	'_app/immutable/assets/KaTeX_Main-Regular.Dr94JaBh.woff',
	'_app/immutable/assets/KaTeX_Main-Regular.ypZvNtVU.ttf',
	'_app/immutable/assets/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2',
	'_app/immutable/assets/KaTeX_Math-BoldItalic.iY-2wyZ7.woff',
	'_app/immutable/assets/KaTeX_Math-BoldItalic.B3XSjfu4.ttf',
	'_app/immutable/assets/KaTeX_Math-Italic.t53AETM-.woff2',
	'_app/immutable/assets/KaTeX_Math-Italic.DA0__PXp.woff',
	'_app/immutable/assets/KaTeX_Math-Italic.flOr_0UB.ttf',
	'_app/immutable/assets/KaTeX_SansSerif-Bold.D1sUS0GD.woff2',
	'_app/immutable/assets/KaTeX_SansSerif-Bold.DbIhKOiC.woff',
	'_app/immutable/assets/KaTeX_SansSerif-Bold.CFMepnvq.ttf',
	'_app/immutable/assets/KaTeX_SansSerif-Italic.C3H0VqGB.woff2',
	'_app/immutable/assets/KaTeX_SansSerif-Italic.DN2j7dab.woff',
	'_app/immutable/assets/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf',
	'_app/immutable/assets/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2',
	'_app/immutable/assets/KaTeX_SansSerif-Regular.CS6fqUqJ.woff',
	'_app/immutable/assets/KaTeX_SansSerif-Regular.BNo7hRIc.ttf',
	'_app/immutable/assets/KaTeX_Script-Regular.D3wIWfF6.woff2',
	'_app/immutable/assets/KaTeX_Script-Regular.D5yQViql.woff',
	'_app/immutable/assets/KaTeX_Script-Regular.C5JkGWo-.ttf',
	'_app/immutable/assets/KaTeX_Size1-Regular.mCD8mA8B.woff2',
	'_app/immutable/assets/KaTeX_Size1-Regular.C195tn64.woff',
	'_app/immutable/assets/KaTeX_Size1-Regular.Dbsnue_I.ttf',
	'_app/immutable/assets/KaTeX_Size2-Regular.Dy4dx90m.woff2',
	'_app/immutable/assets/KaTeX_Size2-Regular.oD1tc_U0.woff',
	'_app/immutable/assets/KaTeX_Size2-Regular.B7gKUWhC.ttf',
	'_app/immutable/assets/KaTeX_Size3-Regular.CTq5MqoE.woff',
	'_app/immutable/assets/KaTeX_Size3-Regular.DgpXs0kz.ttf',
	'_app/immutable/assets/KaTeX_Size4-Regular.Dl5lxZxV.woff2',
	'_app/immutable/assets/KaTeX_Size4-Regular.BF-4gkZK.woff',
	'_app/immutable/assets/KaTeX_Size4-Regular.DWFBv043.ttf',
	'_app/immutable/assets/KaTeX_Typewriter-Regular.CO6r4hn1.woff2',
	'_app/immutable/assets/KaTeX_Typewriter-Regular.C0xS9mPB.woff',
	'_app/immutable/assets/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf'
];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-CsvOVTFy.js.map
