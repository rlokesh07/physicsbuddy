<script lang="ts">

	let flipped = false;

	function flipCard() {
		flipped = !flipped;
	}

	export let flashcard: FlashcardType;
</script>


<div class="container">
	<div class="flashcard" class:flipped={flipped} on:click={flipCard}>
		<div class="card-inner">
			<div class="front">
				<h2>{flashcard.front}</h2>
			</div>
			<div class="back">
				<h2>{flashcard.back}</h2>
			</div>
		</div>
	</div>
</div>

<style>
    .flashcard {
        width: 1000px;
        height: 300px;

        position: relative;
        cursor: pointer;
        display: flex;

        justify-content: center;
        align-items: center;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        transition: transform 0.5s;
        transform-style: preserve-3d;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;

        justify-content: center;
        align-items: center;
    }

    .flashcard.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .front, .back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: #1e3748 solid 0.5em;
        border-radius: 1em;
        padding: 10px;
    }

    .back {
        transform: rotateY(180deg);
    }

    h2, h1 {
        font-family: system-ui;
        color: #4c5958;
        text-shadow: none;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>