import { c as create_ssr_component, v as validate_component, h as each } from './ssr-Ll_B-SDe.js';
import { q as questions } from './questions-qRdLVyBC.js';
import { r as renderTextWithMathMode } from './AnswerPage.svelte_svelte_type_style_lang-xA5IKkOT.js';
import 'katex';

const css$1 = {
  code: "h2.svelte-sdutof,h1.svelte-sdutof{font-family:system-ui}",
  map: null
};
const AnswerPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `<h1 class="svelte-sdutof"><!-- HTML_TAG_START -->${renderTextWithMathMode(questions[index].options[questions[index].answer])}<!-- HTML_TAG_END --></h1> ${each(questions[index].explanation, (string, index2) => {
    return `<h2 class="svelte-sdutof"><!-- HTML_TAG_START -->${renderTextWithMathMode(string)}<!-- HTML_TAG_END --></h2>`;
  })}`;
});
const css = {
  code: ".body.svelte-1q2s9x4{text-align:center;align-items:center;justify-content:center;width:90%;margin:0 auto;background:#cef2e0;border:solid black 1px}.answerbackground.svelte-1q2s9x4{position:relative;height:100px;border:solid black 1px;text-align:center;background:#a3bfb1;width:95%;margin:0px auto 0;top:10px}.correct.svelte-1q2s9x4{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block}h1.svelte-1q2s9x4{font-family:system-ui}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  var index = questions.findIndex(function(item, i) {
    return item.id === data.id;
  });
  let correct = questions[index].answer.toString() === data.answer;
  console.log(index);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="body svelte-1q2s9x4"><div class="answerbackground svelte-1q2s9x4">${correct ? `<div class="correct svelte-1q2s9x4" data-svelte-h="svelte-1k7uxv6"><h1 class="svelte-1q2s9x4">Correct!</h1></div>` : `<h1 class="svelte-1q2s9x4" data-svelte-h="svelte-idc75r">False</h1>`}</div> ${validate_component(AnswerPage, "AnswerPage").$$render($$result, { index }, {}, {})} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C45-rUN9.js.map
