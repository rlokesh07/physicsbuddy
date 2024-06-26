import katex from 'katex';

const fontMacro = {
	'\\times': '\\text{\\fontfamily{Times New Roman}\\selectfont}'
};
export function renderWithFont(text: string) {
	return katex.renderToString(text, {
		// Pass custom macros to KaTeX
		macros: fontMacro
	});
}

export function renderTextWithMathMode(text: string): string {
	const mathModeRegex = /\$\$(.*?)\$\$/g;
	let renderedText = text;

	// Replace math mode segments with their rendered counterparts
	renderedText = renderedText.replace(mathModeRegex, (_, segment) => {
		return renderWithFont(segment);
	});

	// Split the text into segments based on the replaced math mode segments
	return renderedText;
}
