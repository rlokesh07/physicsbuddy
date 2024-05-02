<script lang="ts">
	import { renderTextWithMathMode } from '$lib/KaTeX';
	import { fetchQuestions, questionsStore } from '../../store/store';
	import { onMount } from 'svelte';
	let questionList: QuestionType[] = [];
	let loading: boolean = true;

	const unsubscribe = questionsStore.subscribe((value) => {
		questionList = value.questions;
		loading = value.loading;
	});
	onMount(async () => {
		await fetchQuestions(subject);
	});
	export let index: number;
	export let subject: string;
</script>
{#if questionList[index].type === "Multiple Choice"}
	<h1>{@html renderTextWithMathMode(questionList[index].options[questionList[index].answer])}</h1>
	{:else if questionList[index].type === "Free Response"}
	<h1>{@html renderTextWithMathMode(questionList[index].formattedAnswer)}</h1>

{/if}

{#each questionList[index].explanation as string, index}
	<h2>{@html renderTextWithMathMode(string)}</h2>
{/each}

<a href={`/${subject}/${questionList[index].topic}`}>Back</a>

<style>
	h2,
	h1 {
		font-family: system-ui;
		color: #4c5958;
		text-shadow: none;
	}

</style>
