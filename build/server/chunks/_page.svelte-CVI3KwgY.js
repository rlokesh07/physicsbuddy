import { c as create_ssr_component, e as escape } from './ssr-CwJoaMNW.js';
import './firebase-BZD7hgW_.js';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import './index-BIAFQWR9.js';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: "h1.svelte-19w4sal{color:black;text-shadow:0px 0px hsla(204, 41%, 20%, 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bananaPoints;
  let largestPointsEmail;
  $$result.css.add(css);
  return `<h1 class="svelte-19w4sal">Banana Points: ${escape(bananaPoints)}</h1> <h1 class="svelte-19w4sal">Most Point: ${escape(largestPointsEmail)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CVI3KwgY.js.map
