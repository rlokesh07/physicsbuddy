<script lang="ts">
	import Question from '$lib/components/Question.svelte';
	import { questionsStore, fetchQuestions, updateQuestionCounts } from '../../../../store/store';
	import type { QuestionType as QType } from '$lib/types.js';
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';

	let questionList: QuestionType[] = [];
	let loading: boolean = true;

	const unsubscribe = questionsStore.subscribe((value) => {
		questionList = value.questions;
		loading = value.loading;
	});
	export let data;
	var index = questionList.findIndex(function (item, i) {
		return item.id === data.id;
	});
	const handleSubmit = async (event: CustomEvent<{ question: QType; selected: string }>) => {
		const { question, selected } = event.detail;

		navigate(`/questions/${data.subject}/${question.id}/${encodeURIComponent(selected)}`);
	};
	onMount(async () => {
		await fetchQuestions(data.subject);
	});
</script>

<Question on:formSubmitted={handleSubmit} question={questionList[index]} />

<style>
	div {
		padding-top: 10px;
	}
</style>
