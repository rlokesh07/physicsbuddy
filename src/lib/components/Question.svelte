<script lang="ts">
	import 'katex/dist/katex.min.css';

	import { createEventDispatcher, onMount } from 'svelte';
	import type { QuestionType } from '$lib/types';
	import { renderTextWithMathMode } from '$lib/KaTeX';
	import { questionsStore } from '../../store/store';

	export let question: QuestionType;

	onMount(() => {
		// Set the image source based on question.image
		const imageElement = document.querySelector('.questionImage') as HTMLImageElement;
		if (question.image) {
			imageElement.src = `${question.image}`;
		}
	});

	const dispatch = createEventDispatcher();
	function handleSubmit(event: Event) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const selectedOption = formData.get('option');
		dispatch('formSubmitted', { question, selectedOption });


	}

</script>
<div class="fullContainer">
<div class="questionBox">
<div class="question">
	<h1>{question.topic}</h1>
	<p>{@html renderTextWithMathMode(question.question)}</p>

	{#if question.image}
		<img class="questionImage" src="/src/lib/images/HM0003.png" alt=" Image" />
	{/if}
</div>

<div class="answer">
	{#if question.options}
		<form on:submit={handleSubmit}>
			{#each question?.options as option, index}
				<label class="radio" for="{`option${index}`}">
					<input type="radio" id="{`option${index}`}" name="option" value={index} required />
					<span class="radio-custom"></span>
					{@html renderTextWithMathMode(option)}
				</label><br />

			{/each}
			<div class="submit-button-container">
				<button type="submit" class="submit-button">Submit</button>
			</div>
		</form>
	{/if}
</div>
</div>
</div>
<style>
	img {
		font-family: Arial, serif;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 100%;
		margin: 0 auto;
		width: auto;
	}
	h1 {
		font-family: Arial, serif;
		justify-content: center;
		align-items: center;
		display: flex;
		margin: 0 auto;
		text-align: center;
    text-shadow: 0px 0px hsla(204, 41%, 20%, 1);
			color: #10403B;
	}
	p {
		font-family: Arial;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		text-align: center;
			font-weight: 400;
	}
	.question {
		text-align: center;
		margin: 0 auto;

	}

	.answer{
			padding-left: 60px;
	}
	.fullContainer{
			padding: 20px;
			display: flex;
			justify-content: center;

	}
	.questionBox{
			background-color:white;
			padding: 20px;
      max-width: 60em;
      border: #656565 solid 3px;
	}
  .submit-button {
      background-color: hsla(204, 41%, 20%, 1);
      border: none;
      color: white;
      padding: 10px 20px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;

  }
	.submit-button-container{
			padding-top: 10px;
	}
</style>
