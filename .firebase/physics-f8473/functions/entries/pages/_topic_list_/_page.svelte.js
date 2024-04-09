import { c as create_ssr_component, d as add_attribute, e as escape, h as each } from "../../../chunks/ssr.js";
import { q as questions } from "../../../chunks/questions.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = false;
  let { data } = $$props;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<a${add_attribute("href", `/modules/${data.topic}`, 0)}>${escape(data.topic)}</a> ${each(questions, (question) => {
    return `${question.topic === data.topic ? `<div><a${add_attribute("href", `/questions/${question.id}`, 0)}>${escape(question.id)}</a> </div>` : ``}`;
  })}`;
});
export {
  Page as default
};
