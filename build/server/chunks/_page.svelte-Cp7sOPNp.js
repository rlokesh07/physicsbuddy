import { c as create_ssr_component, d as add_attribute, e as escape, b as each } from './ssr-L4uK7k91.js';
import { q as questionsStore } from './store-CElMOH4N.js';
import './firebase-CgE8lsAl.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index-BCD5SKTV.js';

const css = {
  code: ".question.svelte-53wu9e{height:50px;background:white;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%;justify-content:space-evenly}a.svelte-53wu9e,p.svelte-53wu9e{text-decoration:none;color:grey}a.svelte-53wu9e:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.questionContainer.svelte-53wu9e{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}.topGrid.svelte-53wu9e{display:grid;gap:10px;grid-auto-rows:minmax(100px, auto)}.one.svelte-53wu9e{grid-column:1/4;grid-row:1/3;background:white}.topGrid.svelte-53wu9e{display:flex;justify-content:center;width:100%;max-width:60rem;height:50px;align-items:center}.one.svelte-53wu9e,.two.svelte-53wu9e,.three.svelte-53wu9e{display:flex;justify-content:center;width:95%;max-width:60rem;height:50px;background:white;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px}",
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
  return `<div class="questionContainer svelte-53wu9e"><div class="topGrid svelte-53wu9e"><div class="one svelte-53wu9e"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-53wu9e">Study Guide</a></div> <div class="two svelte-53wu9e"><a${add_attribute("href", `/flashcards/${data.subject}/${data.topic}`, 0)} class="svelte-53wu9e">Flash Cards</a></div> <div class="three svelte-53wu9e"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-53wu9e">${escape(data.topic)}</a></div></div> ${each(questionList, (question) => {
    return `${question.topic === data.topic ? `<div class="question svelte-53wu9e"><a${add_attribute("href", `/questions/${data.subject}/${question.id}`, 0)} class="svelte-53wu9e">ID: ${escape(question.id)}</a> <p class="svelte-53wu9e">Difficulty: ${escape(question.difficulty)}</p> <p class="svelte-53wu9e">Type: ${escape(question.type)}</p> </div>` : ``}`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Cp7sOPNp.js.map
