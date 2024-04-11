import { c as create_ssr_component, d as add_attribute, e as escape, h as each } from './ssr-Ll_B-SDe.js';
import { q as questions } from './questions-BXhhC-HB.js';

const css = {
  code: ".question.svelte-xbo7w3{height:50px;background:white;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%}a.svelte-xbo7w3{text-decoration:none;color:grey}a.svelte-xbo7w3:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.questionContainer.svelte-xbo7w3{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}.topGrid.svelte-xbo7w3{display:grid;gap:10px;grid-auto-rows:minmax(100px, auto)}.one.svelte-xbo7w3{grid-column:1/4;grid-row:1/3;background:white}.topGrid.svelte-xbo7w3{display:flex;justify-content:center;width:95%;max-width:60rem;height:50px;align-items:center}.one.svelte-xbo7w3,.two.svelte-xbo7w3,.three.svelte-xbo7w3{display:flex;justify-content:center;width:90%;max-width:60rem;height:50px;background:white;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="questionContainer svelte-xbo7w3"><div class="topGrid svelte-xbo7w3"><div class="one svelte-xbo7w3"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-xbo7w3">Study Guide</a></div> <div class="two svelte-xbo7w3"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-xbo7w3">Flash Cards</a></div> <div class="three svelte-xbo7w3"><a${add_attribute("href", `/modules/${data.topic}`, 0)} class="svelte-xbo7w3">${escape(data.topic)}</a></div></div> ${each(questions, (question) => {
    return `${question.topic === data.topic ? `<div class="question svelte-xbo7w3"><a${add_attribute("href", `/questions/${question.id}`, 0)} class="svelte-xbo7w3">${escape(question.id)}</a> </div>` : ``}`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Dbdviaam.js.map
