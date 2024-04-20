import {
	c as create_ssr_component,
	v as validate_component,
	e as escape,
	b as add_attribute
} from './ssr-BBztw5b5.js';
import './firebase-CgE8lsAl.js';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/app';
import 'firebase/analytics';

const css = {
	code: '.registerLogin.svelte-185vwe9{display:flex;align-items:center;gap:5px}.clicker.svelte-185vwe9{user-select:none}.authContainer.svelte-185vwe9{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4px}form.svelte-185vwe9{display:flex;flex-direction:column;width:400px;max-width:100%;margin:0 auto}input.svelte-185vwe9{height:40px;width:100%;border:black solid 2px;border-radius:3px;font-size:14px;background:white}button.svelte-185vwe9{margin-top:15px;width:100%;background-color:#ffffff;color:#080710;font-size:18px;font-weight:600;border-radius:3px;height:40px;cursor:pointer}.clicker.svelte-185vwe9:hover{color:hsla(204, 41%, 25%, 1);text-decoration:underline}',
	map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let email = '';
	let password = '';
	$$result.css.add(css);
	return `<div class="authContainer svelte-185vwe9"><form class="svelte-185vwe9"><h1>${escape('Login')}</h1> ${``} <label><p${add_attribute('class', ' center', 0)}>Email</p> <input type="email" placeholder="Email" class="svelte-185vwe9"${add_attribute('value', email, 0)}></label> <label><p${add_attribute('class', ' center', 0)}>Password</p> <input type="password" placeholder="Password" class="svelte-185vwe9"${add_attribute('value', password, 0)}></label> ${``} <button type="button" class="submitBtn svelte-185vwe9">${`Submit`}</button></form> <div class="options">${`<div class="registerLogin svelte-185vwe9"><p data-svelte-h="svelte-1n3pyjz">Don&#39;t have an account?</p> <p class="clicker  svelte-185vwe9" data-svelte-h="svelte-mf02fv">Register</p></div>`}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	return `${validate_component(Authenticate, 'Authenticate').$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CsUGla95.js.map
