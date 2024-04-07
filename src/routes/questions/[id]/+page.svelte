<script lang="ts">
	import AnswerPage from '$lib/components/AnswerPage.svelte';
	import questions from '$lib/questions/questions.json';
	import Question from '$lib/components/Question.svelte';
	import type { QuestionType as QType } from '$lib/types.js';
	import { navigate } from 'svelte-routing';

	export let data;
	var index = questions.findIndex(function (item, i) {
		return item.id === data.id;
	});
	const handleSubmit = async (event: CustomEvent<{ question: QType; selectedOption: string }>) => {
		const { question, selectedOption } = event.detail;

		console.log(question.id + selectedOption);

		navigate(`/questions/${question.id}/${encodeURIComponent(selectedOption)}`);
	};
</script>

<Question on:formSubmitted={handleSubmit} question={questions[index]} />
