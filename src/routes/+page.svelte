<script lang="ts">
	import Question from '$lib/Question.svelte';
	import type { QuestionType as QType } from '$lib/types';
	import { goto } from '$app/navigation';
	import { navigate } from 'svelte-routing';


	const handleSubmit = async (event: CustomEvent<{ question: QType, selectedOption: string}>) => {

		const { question, selectedOption } = event.detail;

		console.log(question.id + selectedOption)

		 navigate(`/questions/${question.id}/${encodeURIComponent(selectedOption)}`);


	}
</script>

<Question on:formSubmitted={handleSubmit}/>