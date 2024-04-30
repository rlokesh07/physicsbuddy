<script lang="ts">
	import { fetchTopics, topicsStore } from '../../store/store';
	import { onMount } from 'svelte';

	let topicList: TopicType[];
	const unsubscribe = topicsStore.subscribe((value) => {
		topicList = value.topics;

	});
	 export let data;
	$: {
			fetchTopics(data.subject);
		}
	onMount(async () => {
		await fetchTopics(data.subject);
	});

</script>
<div class="topicContainer">
	{#each topicList as topic}
		<div class="topic">
			<a href={`/${data.subject}/${topic.topic}`}>{topic.topic}</a>
		</div>
	{/each}
</div>

<style>
    .topic {
        height: 50px;
        background: white;
        display: flex;
        align-items: center;
        border: 5px solid hsla(204, 41%, 25%, 1);
        border-radius: 5px;
        padding: 5px;
        max-width: 60rem;
        width: 90%;
        justify-content: space-evenly;
    }
    a,
    p {
        text-decoration: none;
        color: grey;
    }

    a:hover {
        color: hsla(204, 41%, 25%, 1);
        text-decoration: underline;
    }
    .topicContainer {
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 15px;
        height: 100%;
        align-items: center;

    }

</style>