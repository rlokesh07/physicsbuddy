import katex from "katex";
const fontMacro = {
  "\\times": "\\text{\\fontfamily{Times New Roman}\\selectfont}"
};
function renderWithFont(text) {
  return katex.renderToString(text, {
    // Pass custom macros to KaTeX
    macros: fontMacro
  });
}
function renderTextWithMathMode(text) {
  const mathModeRegex = /\$\$(.*?)\$\$/g;
  let renderedText = text;
  renderedText = renderedText.replace(mathModeRegex, (_, segment) => {
    return renderWithFont(segment);
  });
  return renderedText;
}
export {
  renderTextWithMathMode as r
};
