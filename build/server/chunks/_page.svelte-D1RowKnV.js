import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, f as each, b as add_attribute } from './ssr-BBztw5b5.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import './firebase-CgE8lsAl.js';
import 'firebase/auth';
import 'firebase/firestore';
import { q as questionsStore } from './store-BHt_OmOw.js';
import 'katex';
import 'firebase/app';
import 'firebase/analytics';
import './index-BFKNpo2f.js';

const css$1 = {
  code: "img.svelte-jfdexj{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;height:100%;margin:0 auto;width:auto}h1.svelte-jfdexj{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;margin:0 auto;text-align:center;text-shadow:0px 0px hsla(204, 41%, 20%, 1);color:#10403B}p.svelte-jfdexj{font-family:Arial;align-items:center;justify-content:center;margin:0 auto;text-align:center;font-weight:400}.question.svelte-jfdexj{text-align:center;margin:0 auto}.answer.svelte-jfdexj{padding-left:60px}.fullContainer.svelte-jfdexj{padding:20px;display:flex;justify-content:center}.questionBox.svelte-jfdexj{background-color:white;padding:20px;max-width:60em;border:#656565 solid 3px}.submit-button.svelte-jfdexj{background-color:hsla(204, 41%, 20%, 1);border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;border-radius:5px;cursor:pointer}.submit-button-container.svelte-jfdexj{padding-top:10px}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  createEventDispatcher();
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css$1);
  return `<div class="fullContainer svelte-jfdexj"><div class="questionBox svelte-jfdexj"><div class="question svelte-jfdexj"><h1 class="svelte-jfdexj">${escape(question.topic)}</h1> <p class="svelte-jfdexj"><!-- HTML_TAG_START -->${renderTextWithMathMode(question.question)}<!-- HTML_TAG_END --></p> ${question.image ? `<img class="questionImage svelte-jfdexj" src="/src/lib/images/HM0003.png" alt=" Image">` : ``}</div> <div class="answer svelte-jfdexj">${question.options ? `<form>${each(question?.options, (option, index) => {
    return `<label class="radio"${add_attribute("for", `option${index}`, 0)}><input type="radio"${add_attribute("id", `option${index}`, 0)} name="option"${add_attribute("value", index, 0)} required> <span class="radio-custom"></span> <!-- HTML_TAG_START -->${renderTextWithMathMode(option)}<!-- HTML_TAG_END --> </label><br>`;
  })} <div class="submit-button-container svelte-jfdexj" data-svelte-h="svelte-kk7jo9"><button type="submit" class="submit-button svelte-jfdexj">Submit</button></div></form>` : ``}</div></div> </div>`;
});
const canUseDOM = () => typeof window !== "undefined" && "document" in window && "location" in window;
const getLocation = (source) => {
  return {
    ...source.location,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};
const createHistory = (source) => {
  const listeners = [];
  let location = getLocation(source);
  return {
    get location() {
      return location;
    },
    listen(listener) {
      listeners.push(listener);
      const popstateListener = () => {
        location = getLocation(source);
        listener({ location, action: "POP" });
      };
      source.addEventListener("popstate", popstateListener);
      return () => {
        source.removeEventListener("popstate", popstateListener);
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
    navigate(to, { state, replace = false, preserveScroll = false, blurActiveElement = true } = {}) {
      state = { ...state, key: Date.now() + "" };
      try {
        if (replace)
          source.history.replaceState(state, "", to);
        else
          source.history.pushState(state, "", to);
      } catch (e) {
        source.location[replace ? "replace" : "assign"](to);
      }
      location = getLocation(source);
      listeners.forEach(
        (listener) => listener({ location, action: "PUSH", preserveScroll })
      );
      if (blurActiveElement)
        document.activeElement.blur();
    }
  };
};
const createMemorySource = (initialPathname = "/") => {
  let index = 0;
  const stack = [{ pathname: initialPathname, search: "" }];
  const states = [];
  return {
    get location() {
      return stack[index];
    },
    addEventListener(name, fn) {
    },
    removeEventListener(name, fn) {
    },
    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        index++;
        stack.push({ pathname, search });
        states.push(state);
      },
      replaceState(state, _, uri) {
        const [pathname, search = ""] = uri.split("?");
        stack[index] = { pathname, search };
        states[index] = state;
      }
    }
  };
};
createHistory(
  canUseDOM() ? window : createMemorySource()
);
const css = {
  code: "div.svelte-6fw5dc{padding-top:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionList = [];
  questionsStore.subscribe((value) => {
    questionList = value.questions;
    value.loading;
  });
  let { data } = $$props;
  var index = questionList.findIndex(function(item, i) {
    return item.id === data.id;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="svelte-6fw5dc" data-svelte-h="svelte-12du6ng"></div> ${validate_component(Question, "Question").$$render($$result, { question: questionList[index] }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D1RowKnV.js.map
