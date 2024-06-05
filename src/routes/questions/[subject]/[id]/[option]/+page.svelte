<script lang="ts">
	import AnswerPage from '$lib/components/AnswerPage.svelte';
	import { authStore, questionsStore, updateQuestionCounts } from '../../../../../store/store.js';
	import { onDestroy, onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/firebase';

	export let data: { id: string; answer: string; subject:string }; // Assuming data is of type { id: string, answer: string }

	let questionList: QuestionType[] = [];
	let correct: boolean = false;
	let loading: boolean = true;
	let index: number;
	const unsubscribe = questionsStore.subscribe((value) => {
		questionList = value.questions;
		loading = value.loading;

		// Calculate the index when questionList is updated
		index = questionList.findIndex((item) => item.id === data.id);

		if (index !== -1) {
			correct = questionList[index].answer.toString() === data.answer;
			console.log(correct);
		}
	});

	onMount(async () => {

		if (index !== undefined && questionList[index]){
			await updateQuestionCounts(questionList[index].id,  correct, data.subject, auth.currentUser?.uid);
		}
	});



	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="body">
	<div class="answerbackground">
		{#if correct}
			<div class="correct">
				<h1 class="answertext">Correct!</h1>
			</div>
		{:else}
			<div class="false">
				<h1 class="answertext">False</h1>
			</div>
		{/if}
	</div>
	<div class="break"></div>
	<AnswerPage  subject={data.subject} {index}/>
</div>

<style>
	.body {
		text-align: center;
		align-items: center;
		justify-content: center;
		width: 90%;
		margin-top: 10px;
		margin-left: auto;
		margin-right: auto;
		background: #eaeaea;
		border: solid black 1px;
		max-width: 60em;
	}
	.answerbackground {
		position: relative;
		height: 100px;
		border: solid black 1px;
		text-align: center;
		width: 95%;
		margin: 0px auto 0;
		top: 10px;
			padding: 50px 0;
	}
	.answertext{  position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);}
	.correct {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: inline-block;
		background: #a3bfb1;
		height: 100%;
		width: 100%;

	}
	.false {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: inline-block;
		background: #c56c6c;
		height: 100%;
		width: 100%;
	}
	.break{
			margin-top: 15px;
	}

	h2,
	h1 {
		font-family: system-ui;
	}
</style>
