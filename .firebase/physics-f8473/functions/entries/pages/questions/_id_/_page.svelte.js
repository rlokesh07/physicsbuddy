import { c as create_ssr_component, f as createEventDispatcher, e as escape, d as add_attribute, h as each, v as validate_component } from "../../../../chunks/ssr.js";
import { q as questions } from "../../../../chunks/questions.js";
import "katex";
import { r as renderTextWithMathMode } from "../../../../chunks/AnswerPage.svelte_svelte_type_style_lang.js";
import "../../../../chunks/history.js";
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
  return `<div class="question svelte-1yeoynr"><h1 class="svelte-1yeoynr">${escape(question.topic)}</h1> <p class="svelte-1yeoynr"><!-- HTML_TAG_START -->${renderTextWithMathMode(question.question)}<!-- HTML_TAG_END --></p> ${question.image ? `<img${add_attribute("src", question.image, 0)} alt=" Image" class="svelte-1yeoynr">` : ``}</div> <div class="answer">${question.options ? `<form>${each(question?.options, (option, index) => {
    return `<label class="radio"><input type="radio" name="option"${add_attribute("value", index, 0)} required> <!-- HTML_TAG_START -->${renderTextWithMathMode(option)}<!-- HTML_TAG_END --> </label><br>`;
  })} <button type="submit" data-svelte-h="svelte-1ou7dtz">Submit</button></form>` : ``} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  var index = questions.findIndex(function(item, i) {
    return item.id === data.id;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Question, "Question").$$render($$result, { question: questions[index] }, {}, {})}`;
});
export {
  Page as default
};
