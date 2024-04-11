import { c as create_ssr_component, v as validate_component, f as createEventDispatcher, e as escape, h as each, d as add_attribute } from './ssr-Ll_B-SDe.js';
import { q as questions } from './questions-BXhhC-HB.js';
import 'katex';
import { r as renderTextWithMathMode } from './AnswerPage.svelte_svelte_type_style_lang-xA5IKkOT.js';

const css = {
  code: "img.svelte-1yeoynr{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;height:100%;margin:0 auto;width:auto}h1.svelte-1yeoynr{font-family:Arial, serif;justify-content:center;align-items:center;display:flex;margin:0 auto;text-align:center}p.svelte-1yeoynr{font-family:Arial;align-items:center;justify-content:center;margin:0 auto;text-align:center}.question.svelte-1yeoynr{max-width:1000px;text-align:center;margin:0 auto}",
  map: null
};
const Question = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  createEventDispatcher();
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  return `<div class="question svelte-1yeoynr"><h1 class="svelte-1yeoynr">${escape(question.topic)}</h1> <p class="svelte-1yeoynr"><!-- HTML_TAG_START -->${renderTextWithMathMode(question.question)}<!-- HTML_TAG_END --></p> ${question.image ? `<img class="questionImage svelte-1yeoynr" src="/src/lib/images/HM0003.png" alt=" Image">` : ``}</div> <div class="answer">${question.options ? `<form>${each(question?.options, (option, index) => {
    return `<label class="radio"><input type="radio" name="option"${add_attribute("value", index, 0)} required> <!-- HTML_TAG_START -->${renderTextWithMathMode(option)}<!-- HTML_TAG_END --> </label><br>`;
  })} <button type="submit" data-svelte-h="svelte-1ou7dtz">Submit</button></form>` : ``} </div>`;
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
  let { data } = $$props;
  var index = questions.findIndex(function(item, i) {
    return item.id === data.id;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Question, "Question").$$render(
    $$result,
    {
      question: questions[index],
      image: questions[index].image
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-k_IhwSQv.js.map
