<script lang="ts">

	import { onMount } from 'svelte';
	import { SVG } from '@svgdotjs/svg.js';
	import Draggable from '$lib/components/Draggable.svelte';
	const position = [
		{ x: 250, y: 100 },
		{ x: 250, y: 200}
	]
	let draggableLeft = 100;
	let draggableTop = 100;

	function handlePositionChange1(event) {
		position[0].x = event.detail.left;
		position[0].y = event.detail.top;
		console.log(position[0].x);
		console.log(position[0].y);

		const desiredPosition = { x: 10, y: 70 };
		const roundConstant = 15;

		var newD;
		var distance = Math.sqrt(Math.pow(position[0].x - desiredPosition.x, 2) + Math.pow(position[0].y -desiredPosition.y, 2))
		var roundDistance = Math.sqrt(Math.pow(position[0].x - desiredPosition.x, 2) + Math.pow(position[0].y -desiredPosition.y, 2))
		if(roundDistance < roundConstant){
			roundDistance = roundConstant;
		}
		if (distance < 8){
			newD = `M ${0 - position[0].x + desiredPosition.x} ${80 - position[0].y + desiredPosition.y} C ${30 - position[0].x + desiredPosition.x} ${10 - position[0].y + desiredPosition.y}, ${55 - position[0].x + desiredPosition.x} ${10 - position[0].y + desiredPosition.y}, ${85 - position[0].x + desiredPosition.x} ${85 - position[0].y + desiredPosition.y}`;


			console.log(newD)
		} else{
			"M 0 40 C 30 10, 55 10, 85 40"
			newD = `M0 ${40 + 40 * Math.abs(roundConstant/roundDistance)} C 30 10, 55 10, 85 ${40 + 45 * Math.abs(roundConstant/roundDistance)}`;
			console.log(newD)
		}

		document.getElementById('1').setAttribute('d', newD)
	}
	function handlePositionChange2(event) {
		position[1].x = event.detail.left;
		position[1].y = event.detail.top;
		const desiredPosition = { x: 95, y: 72 };
		const roundConstant = 15;

		var newD;
		var distance = Math.sqrt(Math.pow(position[1].x - desiredPosition.x, 2) + Math.pow(position[1].y -desiredPosition.y, 2))
		var roundDistance = Math.sqrt(Math.pow(position[1].x - desiredPosition.x, 2) + Math.pow(position[1].y -desiredPosition.y, 2))
		if(roundDistance < roundConstant){
			roundDistance = roundConstant;
		}
		if (distance < 8){
			 newD = `M ${0 - position[1].x + desiredPosition.x} ${80 - position[1].y + desiredPosition.y} C ${55 - position[1].x + desiredPosition.x} ${220 - position[1].y + desiredPosition.y}, ${85 - position[1].x + desiredPosition.x} ${80 - position[1].y + desiredPosition.y}, ${105 - position[1].x + desiredPosition.x} ${0 - position[1].y + desiredPosition.y}`;

		} else{
			 newD = `M0 ${40 + 40 * Math.abs(roundConstant/roundDistance)} C ${30 + 25 * Math.abs(roundConstant/roundDistance)} ${90 + 130 * Math.abs(roundConstant/roundDistance)}, ${55 + 30 * Math.abs(roundConstant/roundDistance)} ${90 - 10 * Math.abs(roundConstant/roundDistance)}, ${85 + 20 * Math.abs(roundConstant/roundDistance)} ${40 - 40 * Math.abs(roundConstant/roundDistance)}`;
			console.log(newD)
		}

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
<p class="concaveDown">Concave Down</p>
<p class="concaveUp">Concave Up</p>
<Draggable bind:left={position[0].x} bind:top={position[0].y} on:positionChange={handlePositionChange1}>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100">
			<path id="1" d="M 0 40 C 30 10, 55 10, 85 40" stroke="blue" stroke-width="4" fill="none"/>
		</svg>

</Draggable>
<Draggable bind:left={position[1].x} bind:top={position[1].y} on:positionChange={handlePositionChange2}>

	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="150">
		<path id="2" d="M 0 40 C 30 90, 55 90, 85 40" stroke="blue" stroke-width="4" fill="none"/>
	</svg>

</Draggable>

<style>
	.concaveDown{
			position: relative;
			left: 240px;
      top: -300px;
	}
  .concaveUp{
      position: relative;
      left: 250px;
      top: -220px;
  }
</style>
