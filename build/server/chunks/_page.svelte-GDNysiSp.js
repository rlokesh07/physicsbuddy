import { c as create_ssr_component, d as add_attribute, e as escape, b as each } from './ssr-L4uK7k91.js';
import { q as questionsStore } from './store-u8M3EALb.js';
import './firebase-BZD7hgW_.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index-BCD5SKTV.js';

const css = {
  code: ".question.svelte-8rx5oq{height:50px;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%;justify-content:space-evenly;background:#f3f3f3}a.svelte-8rx5oq{text-decoration:none;color:grey}a.svelte-8rx5oq:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.questionContainer.svelte-8rx5oq{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}.topGrid.svelte-8rx5oq{display:grid;gap:10px;grid-auto-rows:minmax(100px, auto)}.one.svelte-8rx5oq{grid-column:1/4;grid-row:1/3}.topGrid.svelte-8rx5oq{display:flex;justify-content:center;width:100%;max-width:60rem;height:50px;align-items:center}.one.svelte-8rx5oq,.two.svelte-8rx5oq,.three.svelte-8rx5oq{display:flex;justify-content:center;width:95%;max-width:60rem;height:50px;background:white;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;background:#f3f3f3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let questionList = [];
  questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
  });
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="questionContainer svelte-8rx5oq"><div class="topGrid svelte-8rx5oq"><div class="one svelte-8rx5oq"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-8rx5oq">Study Guide</a></div> <div class="two svelte-8rx5oq"><a${add_attribute("href", `/flashcards/${data.subject}/${data.topic}`, 0)} class="svelte-8rx5oq">Flash Cards</a></div> <div class="three svelte-8rx5oq"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-8rx5oq">${escape(data.topic)}</a></div></div> ${each(questionList, (question) => {
    return `${question.topic === data.topic ? `<div class="question svelte-8rx5oq"><div><a${add_attribute("href", `/questions/${data.subject}/${question.id}`, 0)} class="svelte-8rx5oq">ID: ${escape(question.id)}</a></div> <div><esm>Difficulty: ${escape(question.difficulty)}</esm></div> <div><esm>Type: ${escape(question.type)}</esm></div> </div>` : ``}`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-GDNysiSp.js.map
