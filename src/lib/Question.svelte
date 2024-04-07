<script lang="ts">

	import questions from '$lib/questions/questions.json';
	import 'katex/dist/katex.min.css';


	import { createEventDispatcher, onMount } from 'svelte';
	import type { QuestionType } from '$lib/types';
	import { renderTextWithMathMode } from '$lib/KaTeX';



	function pickRandomQuestion() {
		const randomIndex = (Math.floor(Math.random() * questions.length));
		return questions[randomIndex];
	}



	let question: QuestionType = pickRandomQuestion();

	onMount(() => {
		question =  pickRandomQuestion();
	});

	const dispatch = createEventDispatcher();
	function handleSubmit(event: Event) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const selectedOption = formData.get('option');
		dispatch('formSubmitted', {question, selectedOption});
	}
</script>


<div class="question">
	<h1>{question.topic}</h1>
<p>{@html renderTextWithMathMode(question.question)}</p>

	{#if question.image}
	<img src="{question.image}" alt=" Image" />
	{/if}
</div>

<div class="answer">
{#if question.options}

	<form on:submit={handleSubmit}>
		{#each question?.options as option, index}
			<label class="radio">
				<input type="radio" name="option" value={index} required>
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