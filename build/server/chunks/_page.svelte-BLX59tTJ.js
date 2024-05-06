import { c as create_ssr_component, v as validate_component, f as createEventDispatcher, e as escape } from './ssr-L4uK7k91.js';
import '@svgdotjs/svg.js';

const css = {
  code: ".draggable.svelte-jzvapm{user-select:none;cursor:move;border:solid 1px gray;position:absolute}",
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
  $$result.css.add(css);
  return `<section style="${"left: " + escape(left, true) + "px; top: " + escape(top, true) + "px;"}" class="draggable svelte-jzvapm">${slots.default ? slots.default({}) : ``}</section> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const position = [{ x: 100, y: 100 }, { x: 0, y: 0 }];
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300"><path id="graph" d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="blue" stroke-width="4" fill="none"></path></svg> ${validate_component(Draggable, "Draggable").$$render(
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
          return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><path id="1" d="M 10 40 C 40 10, 65 10, 95 40" stroke="blue" stroke-width="4" fill="none"></path></svg>`;
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
          return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><path id="2" d="M 10 40 C 40 110, 65 110, 95 40" stroke="blue" stroke-width="4" fill="none"></path></svg>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BLX59tTJ.js.map
