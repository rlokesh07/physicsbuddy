import { c as create_ssr_component, e as escape } from './ssr-Ll_B-SDe.js';
import { a as auth } from './firebase-CgE8lsAl.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const authHandlers = {
  signup: async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
  },
  login: async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
  },
  logout: async () => {
    await signOut(auth);
  },
  getEmail: () => {
    const user = auth.currentUser;
    if (user) {
      return user.email;
    } else {
      return null;
    }
  }
};
const css = {
  code: "div.svelte-zrtkdq{display:flex;justify-content:center;align-items:center}h1.svelte-zrtkdq{font-size:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="welcomeSign svelte-zrtkdq" data-svelte-h="svelte-1biv1n9"><h1 class="svelte-zrtkdq">Welcome to Study Sign!</h1></div> <div class="svelte-zrtkdq"><h2 class="svelte-zrtkdq">Hello ${escape(authHandlers.getEmail())}!</h2> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-B64TaB3w.js.map
