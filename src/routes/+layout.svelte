<script lang="ts">
</script>

<nav>
	<a href="/">Physics Buddy</a>

	<div class="modes">
		<a href="/HarmonicMotion">Harmonic Motion</a>
	</div>

	<a href="/account">Account</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
	}

	a {
		font-family: system-ui;
		color: inherit;
		text-decoration: none;
		border: 2px hidden #000; /* Border style */
		border-radius: 3px;
		outline: 2px solid grey; /* Outline style */
		outline-offset: 4px; /* Offset value */
	}

	.modes {
		display: flex;
		gap: 1em;
	}
</style>
