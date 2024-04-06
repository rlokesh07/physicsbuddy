<script lang="ts">
	import Question from '$lib/Question.svelte';
	import type { QuestionType } from '$lib/types';
	import * as questions from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	type QuestionType = { id:string }

	const handleSubmit = async (question:QuestionType) => {

		await goto(`/questions/${question.id}`)


	}
</script>

<Question on:formSubmitted={handleSubmit}/>