<script lang="ts">

	import { onMount } from 'svelte';
	import { SVG } from '@svgdotjs/svg.js';
	import Draggable from '$lib/components/Draggable.svelte';
	const position = [
		{ x: 100, y: 100 },
		{ x: 0, y: 0}
	]
	let draggableLeft = 100;
	let draggableTop = 100;

	function handlePositionChange1(event) {
		position[0].x = event.detail.left;
		position[0].y = event.detail.top;
		console.log(position[0].x);
		console.log(position[0].y);
		const newD = `M ${10+ position[0].x} ${10 + position[0].y} C 40 10, 65 10, ${95 - position[0].x} ${10 + position[0].y}`;
		document.getElementById('1').setAttribute('d', newD)
	}
	function handlePositionChange2(event) {
		position[1].x = event.detail.left;
		position[1].y = event.detail.top;
		const desiredPosition = { x: 95, y: 72 };

		var newD;
		var distance = Math.sqrt(Math.pow(position[1].x -95, 2) + Math.pow(position[1].y -72, 2))
		if (distance < 8){
			 newD = `M ${0 - position[1].x + desiredPosition.x} ${80 - position[1].y + desiredPosition.y} C ${55 - position[1].x + desiredPosition.x} ${220 - position[1].y + desiredPosition.y}, ${85 - position[1].x + desiredPosition.x} ${80 - position[1].y + desiredPosition.y}, ${105 - position[1].x + desiredPosition.x} ${0 - position[1].y + desiredPosition.y}`;
			 console.log(newD)
		} else{
			 newD = `M${0 - position[1].x + desiredPosition.x} ${80 - position[1].y + desiredPosition.y} C 55 220, 85 80, ${105 - position[1].x + desiredPosition.x} ${0 - position[1].y + desiredPosition.y}`;
		}

		console.log(position[1].x);
		console.log(position[1].y);
		console.log(distance);
		document.getElementById('2').setAttribute('d', newD)
	}

	onMount(() => {
		var draw = SVG().addTo('Draggable').size(100, 100)
		var polyline = draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z')

	});


</script>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">
	<path id="graph" d="M 10 80 C 40 10, 65 10, 95 80 C 150 220, 180 80, 200 0" stroke="blue" stroke-width="4" fill="none"/>
</svg>
<Draggable bind:left={position[0].x} bind:top={position[0].y} on:positionChange={handlePositionChange1}>
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100">
			<path id="1" d="M 10 40 C 40 10, 65 10, 95 40" stroke="blue" stroke-width="4" fill="none"/>
		</svg>
</Draggable>
<Draggable bind:left={position[1].x} bind:top={position[1].y} on:positionChange={handlePositionChange2}>
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="200">
		<path id="2" d="M0 80 C 55 220, 85 80, 105 0" stroke="blue" stroke-width="4" fill="none"/>
	</svg>
</Draggable>


