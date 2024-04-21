<script lang="ts">
	import Flashcard from '$lib/components/Flashcard.svelte';
	import { fetchFlashcards, flashcardsStore } from '../../../../store/store';
	import { onMount } from 'svelte';
	export let data;
	let flashcardList: FlashcardType[] = [];
	let sampleArray: Number[] = [1];
	let loading: boolean = true;
	let index:number = 0;
	console.log(`${data.topic} Flashcards`);
	const unsubscribe = flashcardsStore.subscribe((value) => {
		flashcardList = value.flashcards;
		loading = value.loading;
	});

	let i = 0;

	onMount(async () => {
		await fetchFlashcards(data.topic);
	});
	function h(){
		console.log("h");
	}

	flashcardList.forEach(h);

</script>
<div class="container">
	{#each flashcardList as flashcard}
	<div class="card">
		<Flashcard flashcard={flashcard} />
	</div>
		{/each}
</div>

<style>
    .card {
				margin-top: 20px;
        height: 100%;
        perspective: 100vw;
				width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
		.container{
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 50px;
        height: 100%;
        align-items: center;
				margin-left: auto;
				margin-right: auto;
		}
</style>