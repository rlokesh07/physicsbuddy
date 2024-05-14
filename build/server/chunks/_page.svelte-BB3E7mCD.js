import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute } from './ssr-L4uK7k91.js';
import './firebase-lDnSjTbF.js';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: ".registerLogin.svelte-utqbqa{display:flex;align-items:center;gap:5px}.clicker.svelte-utqbqa{user-select:none}.authContainer.svelte-utqbqa{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px}form.svelte-utqbqa{display:flex;flex-direction:column;width:400px;max-width:100%;margin:0 auto}input.svelte-utqbqa{height:40px;width:100%;border:black solid 2px;border-radius:3px;font-size:14px;background:white;margin-bottom:10px}button.svelte-utqbqa{margin-top:15px;width:100%;background-color:#ffffff;color:#080710;font-size:18px;font-weight:600;border-radius:3px;height:40px;cursor:pointer;margin-bottom:10px}.clicker.svelte-utqbqa:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}",
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer svelte-utqbqa"><form class="svelte-utqbqa"><h1>${escape("Login")}</h1> ${``} <label><p${add_attribute("class", " center", 0)}>Email</p> <input type="email" placeholder="Email" class="svelte-utqbqa"${add_attribute("value", email, 0)}></label> <label><p${add_attribute("class", " center", 0)}>Password</p> <input type="password" placeholder="Password" class="svelte-utqbqa"${add_attribute("value", password, 0)}></label> ${``} <button type="button" class="submitBtn svelte-utqbqa">${`Submit`}</button></form> <div class="options">${`<div class="registerLogin svelte-utqbqa"><p data-svelte-h="svelte-qd51yb">Don&#39;t have an account?</p> <p class="clicker svelte-utqbqa" data-svelte-h="svelte-1pt9e1">Register</p></div>`}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BB3E7mCD.js.map
