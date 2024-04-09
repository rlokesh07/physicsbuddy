import { t as topics } from "../../chunks/topics.js";
function match(param) {
  return param in topics;
}
export {
  match
};
