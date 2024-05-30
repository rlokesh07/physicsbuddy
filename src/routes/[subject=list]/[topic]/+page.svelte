<script lang="ts">
	import questions from '$lib/questions/questions.json';
	import { questionsStore, fetchQuestions } from '../../../store/store';
	import { onMount } from 'svelte';

	export const prerender = false;

	let questionList: QuestionType[] = [];
	let loading: boolean = true;

	const unsubscribe = questionsStore.subscribe((value) => {
		questionList = value.questions;
		loading = value.loading;
	});

	onMount(async () => {
		await fetchQuestions(data.subject);
	});
	export let data;
</script>

<div class="questionContainer">
	<div class="topGrid">
		<div class="one">
			<a href={`/modules/${data.topic}`}>Study Guide</a>
		</div>

		<div class="two">
			<a href={`/flashcards/${data.subject}/${data.topic}`}>Flash Cards</a>
		</div>

		<div class="three">
			<a href={`/modules/${data.topic}`}>{data.topic}</a>
		</div>
	</div>
	{#each questionList as question}
		{#if question.topic === data.topic}
			<div class="question">
				<div><a href={`/questions/${data.subject}/${question.id}`}>ID: {question.id}</a></div>
				<div><esm>Difficulty: {question.difficulty}</esm></div>
				<div><esm>Type: {question.type}</esm></div>
			</div>
		{/if}
	{/each}
</div>

<style>
	.question {
		height: 50px;
		display: flex;
		align-items: center;
		border: 5px solid hsla(204, 41%, 25%, 1);
		border-radius: 5px;
		padding: 5px;
		max-width: 60rem;
		width: 90%;
		justify-content: space-evenly;
		background: #f3f3f3;
	}
  a,
  p {
      text-decoration: none;
  }

	a:hover {
		color: hsla(204, 41%, 25%, 1);
		text-decoration: underline;
	}

	.questionContainer {
		padding-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		gap: 15px;
		height: 100%;
		align-items: center;
	}

	.topGrid {
		display: grid;
		gap: 10px;
      max-width: 20rem;
      width: 90%;

	}

	.one {
		grid-column: 1/4; /* Span all columns */
		grid-row: 1/3;

	}

	/* Center grid items horizontally in the topGrid */
	.topGrid {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 60rem;
		height: 50px;
		align-items: center;
	}
	.one,
	.two,
	.three {
		display: flex;
		justify-content: center;
		width: 95%;
		max-width: 60rem;
		height: 50px;
		background: white;
		align-items: center;
		border: 5px solid hsla(204, 41%, 25%, 1);
		border-radius: 5px;
      background: #f3f3f3;
	}
</style>
