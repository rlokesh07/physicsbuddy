import { c as create_ssr_component, d as add_attribute, b as each, e as escape } from './ssr-CwJoaMNW.js';
import { q as questionsStore, u as usersStore } from './store-C-y3AlvB.js';
import './firebase-BZD7hgW_.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index2-BmljZYn6.js';

const css = {
  code: ".question.svelte-1q8crdw{height:50px;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%;justify-content:space-evenly}a.svelte-1q8crdw{text-decoration:none}a.svelte-1q8crdw:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.questionContainer.svelte-1q8crdw{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}.topGrid.svelte-1q8crdw{display:grid;gap:10px;max-width:20rem;width:90%}.topGrid.svelte-1q8crdw{display:flex;justify-content:center;width:100%;max-width:60rem;height:50px;align-items:center}.studyGuide.svelte-1q8crdw{display:flex;justify-content:center;width:100%;max-width:60rem;height:50px;background:white;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let questionList = [];
  questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
  });
  usersStore.subscribe((value) => {
    console.log(value.users[0]);
  });
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="questionContainer svelte-1q8crdw"><div class="topGrid svelte-1q8crdw"><div class="studyGuide svelte-1q8crdw"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-1q8crdw">Study Guide</a></div></div> ${each(questionList, (question) => {
    return `${question.topic === data.topic ? `<div class="question svelte-1q8crdw"><div><a${add_attribute("href", `/questions/${data.subject}/${question.id}`, 0)} class="svelte-1q8crdw">ID: ${escape(question.id)}</a></div> <div><esm>Difficulty: ${escape(question.difficulty)}</esm></div> <div><esm>Type: ${escape(question.type)}</esm></div> </div>` : ``}`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B8R__UBd.js.map
