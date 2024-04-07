<script lang="ts">
	import questions from '$lib/questions/questions.json';
	export const prerender = false;
	export let data;
</script>

{#each questions as question}
	{#if question.topic === data.topic}
		<div>
			<a href={`/questions/${question.id}`}>{question.id}</a>
		</div>
	{/if}
{/each}
