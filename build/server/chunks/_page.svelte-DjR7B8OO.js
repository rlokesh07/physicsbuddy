import {
	c as create_ssr_component,
	b as add_attribute,
	e as escape,
	f as each
} from './ssr-BBztw5b5.js';
import { q as questionsStore } from './store-BHt_OmOw.js';
import './firebase-CgE8lsAl.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import './index-BFKNpo2f.js';

const css = {
	code: '.question.svelte-1nw5ahe{height:50px;background:white;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%;justify-content:space-evenly}a.svelte-1nw5ahe,p.svelte-1nw5ahe{text-decoration:none;color:grey}a.svelte-1nw5ahe:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.questionContainer.svelte-1nw5ahe{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}.topGrid.svelte-1nw5ahe{display:grid;gap:10px;grid-auto-rows:minmax(100px, auto)}.one.svelte-1nw5ahe{grid-column:1/4;grid-row:1/3;background:white}.topGrid.svelte-1nw5ahe{display:flex;justify-content:center;width:100%;max-width:60rem;height:50px;align-items:center}.one.svelte-1nw5ahe,.two.svelte-1nw5ahe,.three.svelte-1nw5ahe{display:flex;justify-content:center;width:95%;max-width:60rem;height:50px;background:white;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px}',
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
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);
	return `<div class="questionContainer svelte-1nw5ahe"><div class="topGrid svelte-1nw5ahe"><div class="one svelte-1nw5ahe"><a${add_attribute('href', `/modules/${data.topic}`, 0)} class="svelte-1nw5ahe">Study Guide</a></div> <div class="two svelte-1nw5ahe"><a${add_attribute('href', `/modules/${data.topic}`, 0)} class="svelte-1nw5ahe">Flash Cards</a></div> <div class="three svelte-1nw5ahe"><a${add_attribute('href', `/modules/${data.topic}`, 0)} class="svelte-1nw5ahe">${escape(data.topic)}</a></div></div> ${each(
		questionList,
		(question) => {
			return `${question.topic === data.topic ? `<div class="question svelte-1nw5ahe"><a${add_attribute('href', `/questions/${question.id}`, 0)} class="svelte-1nw5ahe">ID: ${escape(question.id)}</a> <p class="svelte-1nw5ahe">Difficulty: ${escape(question.difficulty)}</p> <p class="svelte-1nw5ahe">Accuracy: ${escape((question.correct / question.attempted) * 100)}%</p> </div>` : ``}`;
		}
	)} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DjR7B8OO.js.map
