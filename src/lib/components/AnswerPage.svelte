<script lang="ts">
	import questions from '$lib/questions/questions.json';

	import { renderTextWithMathMode } from '$lib/KaTeX';

	export let index: number;
</script>

<h1>{@html renderTextWithMathMode(questions[index].options[questions[index].answer])}</h1>

{#each questions[index].explanation as string, index}
	<h2>{@html renderTextWithMathMode(string)}</h2>
{/each}

<style>
	h2, h1 {
		font-family: system-ui;
	}
</style>
