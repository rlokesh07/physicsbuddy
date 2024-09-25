import { c as create_ssr_component, v as validate_component, k as createEventDispatcher, e as escape } from './ssr-ziHnzutJ.js';
import '@svgdotjs/svg.js';

/* empty css                                                         */
const css$1 = {
  code: ".draggable.svelte-1jph29o{user-select:none;cursor:move;position:absolute}",
  map: null
};
const Draggable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { left = 100 } = $$props;
  let { top = 100 } = $$props;
  createEventDispatcher();
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  $$result.css.add(css$1);
  return `<section style="${"left: " + escape(left, true) + "px; top: " + escape(top, true) + "px;"}" class="draggable svelte-1jph29o">${slots.default ? slots.default({}) : ``}</section> `;
});
const css = {
  code: ".concaveDown.svelte-fidf38{position:relative;left:240px;top:-300px}.concaveUp.svelte-fidf38{position:relative;left:250px;top:-220px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const position = [{ x: 250, y: 100 }, { x: 250, y: 200 }];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300"><path id="graph" d="M 10 80 C 40 10, 65 10, 95 80 C 150 220, 180 80, 200 0" stroke="blue" stroke-width="4" fill="none"></path></svg> <p class="concaveDown svelte-fidf38" data-svelte-h="svelte-1lgbc7b">Concave Down</p> <p class="concaveUp svelte-fidf38" data-svelte-h="svelte-14ydbmf">Concave Up</p> ${validate_component(Draggable, "Draggable").$$render(
      $$result,
      { left: position[0].x, top: position[0].y },
      {
        left: ($$value) => {
          position[0].x = $$value;
          $$settled = false;
        },
        top: ($$value) => {
          position[0].y = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><path id="1" d="M 0 40 C 30 10, 55 10, 85 40" stroke="blue" stroke-width="4" fill="none"></path></svg>`;
        }
      }
    )} ${validate_component(Draggable, "Draggable").$$render(
      $$result,
      { left: position[1].x, top: position[1].y },
      {
        left: ($$value) => {
          position[1].x = $$value;
          $$settled = false;
        },
        top: ($$value) => {
          position[1].y = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="150"><path id="2" d="M 0 40 C 30 90, 55 90, 85 40" stroke="blue" stroke-width="4" fill="none"></path></svg>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-suu-Ge9Y.js.map
