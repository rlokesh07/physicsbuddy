import { c as create_ssr_component, o as onDestroy, v as validate_component, b as each } from './ssr-L4uK7k91.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import { q as questionsStore } from './store-CElMOH4N.js';
import 'firebase/firestore';
import './firebase-CgE8lsAl.js';
import 'katex';
import 'firebase/auth';
import 'firebase/database';
import './index-BCD5SKTV.js';
import 'firebase/app';
import 'firebase/analytics';

const css$1 = {
  code: "h2.svelte-1nrzz7m,h1.svelte-1nrzz7m{font-family:system-ui;color:#4c5958;text-shadow:none}",
  map: null
};
const AnswerPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionList = [];
  questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
  });
  let { index } = $$props;
  let { subject } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  $$result.css.add(css$1);
  return `${questionList[index].type === "Multiple Choice" ? `<h1 class="svelte-1nrzz7m"><!-- HTML_TAG_START -->${renderTextWithMathMode(questionList[index].options[questionList[index].answer])}<!-- HTML_TAG_END --></h1>` : `${questionList[index].type === "Free Response" ? `<h1 class="svelte-1nrzz7m"><!-- HTML_TAG_START -->${renderTextWithMathMode(questionList[index].formattedAnswer)}<!-- HTML_TAG_END --></h1>` : ``}`} ${each(questionList[index].explanation, (string, index2) => {
    return `<h2 class="svelte-1nrzz7m"><!-- HTML_TAG_START -->${renderTextWithMathMode(string)}<!-- HTML_TAG_END --></h2>`;
  })}`;
});
const css = {
  code: ".body.svelte-136dnhw{text-align:center;align-items:center;justify-content:center;width:90%;margin-top:10px;margin-left:auto;margin-right:auto;background:#eaeaea;border:solid black 1px;max-width:60em}.answerbackground.svelte-136dnhw{position:relative;height:100px;border:solid black 1px;text-align:center;width:95%;margin:0px auto 0;top:10px}.correct.svelte-136dnhw{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#a3bfb1;height:100%;width:100%}.false.svelte-136dnhw{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#c56c6c;height:100%;width:100%}h1.svelte-136dnhw{font-family:system-ui}",
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
    if (index !== -1) {
      correct = questionList[index].answer.toString() === data.answer;
      console.log(correct);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="body svelte-136dnhw"><div class="answerbackground svelte-136dnhw">${correct ? `<div class="correct svelte-136dnhw" data-svelte-h="svelte-1k7uxv6"><h1 class="svelte-136dnhw">Correct!</h1></div>` : `<div class="false svelte-136dnhw" data-svelte-h="svelte-ai9k7t"><h1 class="svelte-136dnhw">False</h1></div>`}</div> ${validate_component(AnswerPage, "AnswerPage").$$render($$result, { index, subject: data.subject }, {}, {})} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BN1kUDpy.js.map
