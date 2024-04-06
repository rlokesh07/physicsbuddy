<script lang="ts">

	import questions from '$lib/questions/questions.json';
	import 'katex/dist/katex.min.css';
	import katex from 'katex';
	import { createEventDispatcher, onMount } from 'svelte';
	import type { QuestionType } from '$lib/types';



	const fontMacro = {
		'\\times': '\\text{\\fontfamily{Times New Roman}\\selectfont}'
	}
	function renderWithFont(text: string) {
		return katex.renderToString(text, {
			// Pass custom macros to KaTeX
			macros: fontMacro,
		})
	}
	function pickRandomQuestion() {
		const randomIndex = (Math.floor(Math.random() * questions.length));
		return questions[randomIndex];
	}
	function renderTextWithMathMode(text: string): string {
		const mathModeRegex = /\$\$(.*?)\$\$/g;
		let renderedText = text;

		// Replace math mode segments with their rendered counterparts
		renderedText = renderedText.replace(mathModeRegex, (_, segment) => {
			return renderWithFont(segment);
		});

		// Split the text into segments based on the replaced math mode segments
		return renderedText;
	}


	let question:QuestionType = pickRandomQuestion();

	const dispatch = createEventDispatcher();
	function handleSubmit(event: CustomEvent<any>) {
		const question: QuestionType = event.detail;
		dispatch('formSubmitted', question);
	}

</script>


<div class="question">
	<h1>{question.topic}</h1>
<p>{@html renderTextWithMathMode(question.question)}</p>
	<img src="{question.image}" alt=" Image" />
</div>

<div class="answer">
{#if question.options}

	<form on:submit={handleSubmit}>
		{#each question?.options as option}
			<label class="radio">
				<input type="radio" name="option" value={option} required>
				{@html renderTextWithMathMode(option)}
			</label><br>
		{/each}
		<button type="submit">Submit</button>
	</form>

{/if}
</div>

<style>

	img{
      font-family: Arial,serif;
      justify-content: center;
      align-items: center;
      display: flex;
			height: 100%;
			margin: 0 auto;
			width: auto;
	}
	h1 {
			font-family: Arial,serif;
			justify-content: center;
			align-items: center;
			display: flex;
			margin: 0 auto;
      text-align: center;
	}
	p{
			font-family: Arial;
      align-items: center;
      justify-content: center;
			margin: 0 auto;
      text-align: center;
	}
	.question{
			max-width: 1000px;
			text-align: center;
			margin: 0 auto;
	}

</style>