<script>
	import { createEventDispatcher } from 'svelte';
	export let left = 100;
	export let top = 100;

	let moving = false;
	const dispatch = createEventDispatcher();
	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;

			dispatch('positionChange', { left, top });
		}
	}

	function onMouseUp() {
		moving = false;
	}

	// 	$: console.log(moving);
</script>

<style>
    .draggable {
        user-select: none;
        cursor: move;
        position: absolute;
    }
</style>

<section on:mousedown={onMouseDown} style="left: {left}px; top: {top}px;" class="draggable">
	<slot></slot>
</section>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />