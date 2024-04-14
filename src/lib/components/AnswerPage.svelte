<script lang="ts">

	import { renderTextWithMathMode } from '$lib/KaTeX';
	import { questionsStore } from '../../store/store';
	let questionList: QuestionType[] = [];
	let loading:boolean = true;

	const unsubscribe = questionsStore.subscribe(value => {
		questionList = value.questions;
		loading = value.loading;

	});
	export let index: number;
</script>

<h1>{@html renderTextWithMathMode(questionList[index].options[questionList[index].answer])}</h1>

{#each questionList[index].explanation as string, index}
	<h2>{@html renderTextWithMathMode(string)}</h2>
{/each}

<style>
	h2, h1 {
		font-family: system-ui;
			color: #4C5958;
			text-shadow: none;
	}
</style>
