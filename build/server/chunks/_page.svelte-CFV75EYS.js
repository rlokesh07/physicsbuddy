import { c as create_ssr_component, e as escape } from './ssr-L4uK7k91.js';
import { u as usersStore } from './store-FHK7xRRK.js';
import { a as auth } from './firebase-Dys_eMen.js';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import './index-BCD5SKTV.js';
import 'firebase/app';
import 'firebase/analytics';

const css = {
  code: "h1.svelte-19w4sal{color:black;text-shadow:0px 0px hsla(204, 41%, 20%, 1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index;
  let userList = [];
  usersStore.subscribe((value) => {
    let email;
    userList = value.users;
    value.loading;
    email = auth.currentUser?.email;
    if (auth.currentUser?.email) {
      index = userList.findIndex((item) => item.email === email);
    }
    console.log(index);
  });
  let largestPoints = userList[0];
  let largestPointsEmail;
  userList.forEach(updateMaximum);
  function updateMaximum(item) {
    if (item.bananaPoints && largestPoints.bananaPoints) {
      if (item.bananaPoints > largestPoints.bananaPoints) {
        largestPoints = item;
        largestPointsEmail = item.email;
      }
    } else if (item.bananaPoints) {
      largestPoints = item;
      largestPointsEmail = item.email;
    }
  }
  $$result.css.add(css);
  return `<h1 class="svelte-19w4sal">Banana Points: ${escape(userList[index].bananaPoints)}</h1> <h1 class="svelte-19w4sal">Most Points: ${escape(largestPointsEmail)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CFV75EYS.js.map
