import { c as create_ssr_component, o as onDestroy, v as validate_component, d as each, f as add_attribute } from './ssr-DFZIQmHs.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import { q as questionsStore } from './store-DKXlb3c_.js';
import './firebase-BZD7hgW_.js';
import 'katex';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import './index2-CiqHNoG2.js';
import 'firebase/app';
import 'firebase/analytics';

const css$1 = {
  code: "h2.svelte-rqlsim,h1.svelte-rqlsim{font-family:system-ui;color:#4c5958;text-shadow:none}",
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
  return `${questionList[index].type === "Multiple Choice" ? `<h1 class="svelte-rqlsim"><!-- HTML_TAG_START -->${renderTextWithMathMode(questionList[index].options[questionList[index].answer])}<!-- HTML_TAG_END --></h1>` : `${questionList[index].type === "Free Response" ? `<h1 class="svelte-rqlsim"><!-- HTML_TAG_START -->${renderTextWithMathMode(questionList[index].formattedAnswer)}<!-- HTML_TAG_END --></h1>` : ``}`} ${each(questionList[index].explanation, (string, index2) => {
    return `<h2 class="svelte-rqlsim"><!-- HTML_TAG_START -->${renderTextWithMathMode(string)}<!-- HTML_TAG_END --></h2>`;
  })} <a${add_attribute("href", `/${subject}/${questionList[index].topic}`, 0)}>Back</a>`;
});
const css = {
  code: ".body.svelte-1krstp0{text-align:center;align-items:center;justify-content:center;width:90%;margin-top:10px;margin-left:auto;margin-right:auto;background:#eaeaea;border:solid black 1px;max-width:60em}.answerbackground.svelte-1krstp0{position:relative;height:100px;border:solid black 1px;text-align:center;width:95%;margin:0px auto 0;top:10px;padding:50px 0}.answertext.svelte-1krstp0{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.correct.svelte-1krstp0{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#a3bfb1;height:100%;width:100%}.false.svelte-1krstp0{margin:0;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:inline-block;background:#c56c6c;height:100%;width:100%}.break.svelte-1krstp0{margin-top:15px}h2.svelte-1krstp0,h1.svelte-1krstp0{font-family:system-ui}",
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
  return `<div class="body svelte-1krstp0"><div class="answerbackground svelte-1krstp0">${correct ? `<div class="correct svelte-1krstp0" data-svelte-h="svelte-75ln9g"><h1 class="answertext svelte-1krstp0">Correct!</h1></div>` : `<div class="false svelte-1krstp0" data-svelte-h="svelte-10r1tu7"><h1 class="answertext svelte-1krstp0">False</h1></div>`}</div> <div class="break svelte-1krstp0"></div> ${validate_component(AnswerPage, "AnswerPage").$$render($$result, { subject: data.subject, index }, {}, {})} <h2 class="svelte-1krstp0" data-svelte-h="svelte-1sodl0n">+1 Banana Point</h2> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CpDwYXwr.js.map
