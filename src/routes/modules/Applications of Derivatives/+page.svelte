<script lang="ts">
	import { interactable } from '$lib/interactable';
	import { onMount } from 'svelte';
	const position = { x: 0, y: 0 }


	onMount(() => {
		const elements = [...document.querySelectorAll(".draggable")];

		if (elements) {
			for (const el of elements) {
				interactable(el);
			}
		}
	});

</script>

<div class="draggable">drag</div>