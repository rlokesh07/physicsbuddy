<script lang="ts">
	import questions from '$lib/questions/questions.json';
	import { questionsStore, fetchQuestions, usersStore, fetchUsers } from '../../../store/store';
	import { onMount } from 'svelte';

	export const prerender = false;

	let questionList: QuestionType[] = [];
	let loading: boolean = true;

	const unsubscribe = questionsStore.subscribe((value) => {
		questionList = value.questions;
		loading = value.loading;
	});

	usersStore.subscribe((value) => {
		console.log(value.users[0])
	})

	onMount(async () => {
		await fetchUsers()
		await fetchQuestions(data.subject);
	});
	export let data;
</script>

<div class="questionContainer">
	<div class="topGrid">
		<div class="studyGuide">
			<a href={`/modules/${data.topic}`}>Study Guide</a>
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

	/* Center grid items horizontally in the topGrid */
	.topGrid {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 60rem;
		height: 50px;
		align-items: center;
	}
	.studyGuide {
		display: flex;
		justify-content: center;
		width: 100%;
		max-width: 60rem;
		height: 50px;
		background: white;
		align-items: center;
		border: 5px solid hsla(204, 41%, 25%, 1);
		border-radius: 5px;

	}
</style>
