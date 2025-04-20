import { c as create_ssr_component, d as each, v as validate_component, e as escape } from './ssr-DFZIQmHs.js';
import { f as flashcardsStore } from './store-DKXlb3c_.js';
import './firebase-BZD7hgW_.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index2-CiqHNoG2.js';

const css$1 = {
  code: ".flashcard.svelte-1wwq5bt.svelte-1wwq5bt{width:1000px;height:300px;position:relative;cursor:pointer;display:flex;justify-content:center;align-items:center}.card-inner.svelte-1wwq5bt.svelte-1wwq5bt{width:100%;height:100%;transition:transform 0.5s;transform-style:preserve-3d;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center}.flashcard.flipped.svelte-1wwq5bt .card-inner.svelte-1wwq5bt{transform:rotateY(180deg)}.front.svelte-1wwq5bt.svelte-1wwq5bt,.back.svelte-1wwq5bt.svelte-1wwq5bt{width:100%;height:100%;position:absolute;backface-visibility:hidden;display:flex;justify-content:center;align-items:center;background:white;border:#1e3748 solid 0.5em;border-radius:1em;padding:10px}.back.svelte-1wwq5bt.svelte-1wwq5bt{transform:rotateY(180deg)}h2.svelte-1wwq5bt.svelte-1wwq5bt{font-family:system-ui;color:#4c5958;text-shadow:none}.container.svelte-1wwq5bt.svelte-1wwq5bt{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Flashcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flashcard } = $$props;
  if ($$props.flashcard === void 0 && $$bindings.flashcard && flashcard !== void 0)
    $$bindings.flashcard(flashcard);
  $$result.css.add(css$1);
  return `<div class="container svelte-1wwq5bt"><div class="${["flashcard svelte-1wwq5bt", ""].join(" ").trim()}"><div class="card-inner svelte-1wwq5bt"><div class="front svelte-1wwq5bt"><h2 class="svelte-1wwq5bt">${escape(flashcard.front)}</h2></div> <div class="back svelte-1wwq5bt"><h2 class="svelte-1wwq5bt">${escape(flashcard.back)}</h2></div></div></div> </div>`;
});
const css = {
  code: ".card.svelte-jnu4a5{margin-top:20px;height:100%;perspective:100vw;width:50%;margin-left:auto;margin-right:auto}.container.svelte-jnu4a5{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:50px;height:100%;align-items:center;margin-left:auto;margin-right:auto}",
  map: null
};
function h() {
  console.log("h");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let flashcardList = [];
  console.log(`${data.topic} Flashcards`);
  flashcardsStore.subscribe((value) => {
    flashcardList = value.flashcards;
    value.loading;
  });
  flashcardList.forEach(h);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-jnu4a5">${each(flashcardList, (flashcard) => {
    return `<div class="card svelte-jnu4a5">${validate_component(Flashcard, "Flashcard").$$render($$result, { flashcard }, {}, {})} </div>`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BQrfp9lw.js.map
