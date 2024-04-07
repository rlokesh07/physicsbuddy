<script>
	import questions from '$lib/questions/questions.json';
	import AnswerPage from '$lib/components/AnswerPage.svelte';
	export let data;

	var index = questions.findIndex(function (item, i) {
		return item.id === data.id;
	});

	let correct = questions[index].answer.toString() === data.answer;

	console.log(index);
</script>

<div class="body">
	<div class="answerbackground">
		{#if correct}
			<div class="correct">
				<h1>Correct!</h1>
			</div>
		{:else}
			<h1>False</h1>
		{/if}
	</div>

	<AnswerPage {index} />
</div>

<style>
	.body {
		text-align: center;
		align-items: center;
		justify-content: center;
		width: 90%;
		margin: 0 auto;
		background: #cef2e0;
		border: solid black 1px;
	}
	.answerbackground {
		position: relative;
		height: 100px;
		border: solid black 1px;
		text-align: center;
		background: #a3bfb1;
		width: 95%;
		margin: 0px auto 0;
		top: 10px;
	}

	.correct {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: inline-block;
	}
</style>
