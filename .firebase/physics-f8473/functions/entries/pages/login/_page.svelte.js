import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/firebase.js";
import "firebase/auth";
const css = {
  code: ".authContainer.svelte-72w0xh.svelte-72w0xh{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px}form.svelte-72w0xh.svelte-72w0xh{display:flex;flex-direction:column;gap:8px;width:400px;max-width:100%;margin:0 auto}form.svelte-72w0xh input.svelte-72w0xh{width:100%}",
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-72w0xh"><form class="svelte-72w0xh"><h1>${escape("Login")}</h1> ${``} <label><p${add_attribute("class", " center", 0)}>Email</p> <input type="email" placeholder="Email" class="svelte-72w0xh"${add_attribute("value", email, 0)}></label> <label><p${add_attribute("class", " center", 0)}>Password</p> <input type="password" placeholder="Password" class="svelte-72w0xh"${add_attribute("value", password, 0)}></label> ${``} <button type="button" class="submitBtn">${`Submit`}</button></form> <div class="options"><p data-svelte-h="svelte-93986n">Or</p> ${`<div><p data-svelte-h="svelte-qd51yb">Don&#39;t have an account?</p> <p data-svelte-h="svelte-1ndb079">Register</p></div>`}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
