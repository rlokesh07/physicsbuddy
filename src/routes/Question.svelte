<script lang="ts">

	import questions from '$lib/questions/questions.json';
	import 'katex/dist/katex.min.css';
	import katex from 'katex';
	import { onMount } from 'svelte';



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
		const randomIndex = (0);
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


	let question = pickRandomQuestion();
	function handleSubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const selectedOption = formData.get('option');
		console.log('Selected Option:', selectedOption);
		// You can add further processing logic here, such as checking the selected option against the correct answer
	}

</script>


<div class="question">
	<h1>{question.topic}</h1>
<p>{@html renderTextWithMathMode(question.question)}</p>
	<img src="{question.image}" alt=" Image" />
</div>
{#if question.options}

	<form on:submit={handleSubmit}>
		{#each question?.options as option}
			<label>
				<input type="radio" name="option" value={option} required>
				{@html renderTextWithMathMode(option)}
			</label><br>
		{/each}
		<button type="submit">Submit</button>
	</form>

{/if}

<style>

	img{
      font-family: Arial,serif;
      justify-content: center;
      align-items: center;
      display: flex;
			height: 100%;
	}
	h1 {
			font-family: Arial,serif;
			justify-content: center;
			align-items: center;
			display: flex;
	}
	p{
			font-family: Arial;
      align-items: center;
      justify-content: center;
	}

</style>