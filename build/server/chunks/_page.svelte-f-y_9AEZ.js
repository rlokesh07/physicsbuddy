import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-DFZIQmHs.js';
import { t as topicsStore, a as fetchTopics } from './store-DKXlb3c_.js';
import './firebase-BZD7hgW_.js';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import './index2-CiqHNoG2.js';

const css = {
  code: ".topic.svelte-1e5gujy{height:50px;background:white;display:flex;align-items:center;border:5px solid hsla(204, 41%, 25%, 1);border-radius:5px;padding:5px;max-width:60rem;width:90%;justify-content:space-evenly}a.svelte-1e5gujy{text-decoration:none;color:grey}a.svelte-1e5gujy:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}.topicContainer.svelte-1e5gujy{padding-top:10px;display:flex;flex-direction:column;justify-content:space-evenly;gap:15px;height:100%;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topicList;
  topicsStore.subscribe((value) => {
    topicList = value.topics;
  });
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  {
    {
      fetchTopics(data.subject);
    }
  }
  return `<div class="topicContainer svelte-1e5gujy">${each(topicList, (topic) => {
    return `<div class="topic svelte-1e5gujy"><a${add_attribute("href", `/${data.subject}/${topic.topic}`, 0)} class="svelte-1e5gujy">${escape(topic.topic)}</a> </div>`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f-y_9AEZ.js.map
