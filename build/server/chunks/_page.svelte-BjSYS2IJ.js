import { c as create_ssr_component, v as validate_component, k as createEventDispatcher, e as escape, b as each, d as add_attribute } from './ssr-ziHnzutJ.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import './firebase-BZD7hgW_.js';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { q as questionsStore } from './store-BNlAk45D.js';
import 'katex';
import 'firebase/app';
import 'firebase/analytics';
import './index2-C7r_T28S.js';

const css = {
  code: "img.svelte-1em7ev9{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;height:100%;margin:0 auto;width:auto}h1.svelte-1em7ev9{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;margin:0 auto;text-align:center;text-shadow:0px 0px hsla(204, 41%, 20%, 1);color:#10403b}p.svelte-1em7ev9{font-family:Arial;align-items:center;justify-content:center;margin:0 auto;text-align:center;font-weight:400}.question.svelte-1em7ev9{text-align:center;margin:0 auto}.answer.svelte-1em7ev9{padding-left:60px}.fullContainer.svelte-1em7ev9{padding:20px;display:flex;justify-content:center}.questionBox.svelte-1em7ev9{background-color:white;padding:20px;max-width:60em;border:#656565 solid 3px}.submit-button.svelte-1em7ev9{background-color:hsla(204, 41%, 20%, 1);border:none;color:white;padding:10px 20px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;border-radius:5px;cursor:pointer}.submit-button-container.svelte-1em7ev9{padding-top:10px}img.svelte-1em7ev9{width:100%}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  createEventDispatcher();
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  return `<div class="fullContainer svelte-1em7ev9"><div class="questionBox svelte-1em7ev9"><div class="question svelte-1em7ev9"><h1 class="svelte-1em7ev9">${escape(question.topic)}</h1> <p class="svelte-1em7ev9"><!-- HTML_TAG_START -->${renderTextWithMathMode(question.question)}<!-- HTML_TAG_END --></p> ${question.image ? `<img class="questionImage svelte-1em7ev9" src="/src/lib/images/HM0003.png" alt=" Image">` : ``}</div> <div class="answer svelte-1em7ev9">${question.type === "Multiple Choice" ? `<form>${each(question?.options, (option, index) => {
    return `<label class="radio"${add_attribute("for", `option${index}`, 0)}><input type="radio"${add_attribute("id", `option${index}`, 0)} name="option"${add_attribute("value", index, 0)} required> <span class="radio-custom"></span> <!-- HTML_TAG_START -->${renderTextWithMathMode(option)}<!-- HTML_TAG_END --> </label><br>`;
  })} <div class="submit-button-container svelte-1em7ev9" data-svelte-h="svelte-184z3ph"><button type="submit" class="submit-button svelte-1em7ev9">Submit</button></div></form>` : `${question.type === "Free Response" ? `<form><input type="text" id="FreeResponse" name="FreeResponse"> <select name="unit" id="unit">${each(question?.unit, (unit, index) => {
    return `<option${add_attribute("value", index, 0)}><!-- HTML_TAG_START -->${renderTextWithMathMode(unit)}<!-- HTML_TAG_END --></option>`;
  })}</select> <button type="submit" class="submit-button svelte-1em7ev9" data-svelte-h="svelte-ttjbab">Submit</button></form>` : ``}`}</div></div> </div>`;
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
  return `${validate_component(Question, "Question").$$render($$result, { question: questionList[index] }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BjSYS2IJ.js.map
