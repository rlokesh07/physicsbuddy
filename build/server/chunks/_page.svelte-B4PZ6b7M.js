import { c as create_ssr_component, o as onDestroy, v as validate_component, f as each } from './ssr-BBztw5b5.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import { q as questionsStore } from './store-BHt_OmOw.js';
import 'katex';
import './firebase-CgE8lsAl.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import './index-BFKNpo2f.js';

const css$1 = {
  code: "h2.svelte-m1ac0l,h1.svelte-m1ac0l{font-family:system-ui;color:#4C5958;text-shadow:none}",
  map: null
};
const AnswerPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionList = [];
  questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
  });
  let { index } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$1);
  return `<h1 class="svelte-m1ac0l"><!-- HTML_TAG_START -->${renderTextWithMathMode(questionList[index].options[questionList[index].answer])}<!-- HTML_TAG_END --></h1> ${each(questionList[index].explanation, (string, index2) => {
    return `<h2 class="svelte-m1ac0l"><!-- HTML_TAG_START -->${renderTextWithMathMode(string)}<!-- HTML_TAG_END --></h2>`;
  })}`;
});
const css = {
  code: ".body.svelte-16icxxy{text-align:center;align-items:center;justify-content:center;width:90%;margin-top:10px;margin-left:auto;margin-right:auto;background:#eaeaea;border:solid black 1px;max-width:60em}.answerbackground.svelte-16icxxy{position:relative;height:100px;border:solid black 1px;text-align:center;width:95%;margin:0px auto 0;top:10px}.correct.svelte-16icxxy{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#a3bfb1;height:100%;width:100%}.false.svelte-16icxxy{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#c56c6c;height:100%;width:100%}h1.svelte-16icxxy{font-family:system-ui}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let questionList = [];
  let correct = false;
  let index;
  const unsubscribe = questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
    index = questionList.findIndex((item) => item.id === data.id);
    console.log(index);
    if (index !== -1) {
      correct = questionList[index].answer.toString() === data.answer;
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="body svelte-16icxxy"><div class="answerbackground svelte-16icxxy">${correct ? `<div class="correct svelte-16icxxy" data-svelte-h="svelte-1k7uxv6"><h1 class="svelte-16icxxy">Correct!</h1></div>` : `<div class="false svelte-16icxxy" data-svelte-h="svelte-ai9k7t"><h1 class="svelte-16icxxy">False</h1></div>`}</div> ${validate_component(AnswerPage, "AnswerPage").$$render($$result, { index }, {}, {})} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B4PZ6b7M.js.map
