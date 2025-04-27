<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>

	<h1>Circuits</h1>
	<div>
		<h2>Current</h2>
		<div>
			<p>Electrons like to move from places of high electric potential to place of low electric potential</p>
			<p>In a battery, this is going from the negative terminal to the positive terminal. </p>
			<p>{@html renderTextWithMathMode('Current is defined as $$\\frac{\\Delta Q}{\\Delta t}$$ where Q is the charge that flows over an area, and t is the time it flows by')}</p>
			<p>{@html renderTextWithMathMode('The unit for current is amp, which is defined as one colomb per second')}</p>
			<div>
				<h3>Direct Current</h3>
				<p>Direct current is when the current just goes in one direction</p>
				<h3>Alternating Current</h3>
				<p>The current switches forwards and backwards</p>
			</div>
		</div>
		<h2>Ohm's Law</h2>
		<div>
			<h4>{@html renderTextWithMathMode('V = IR')}</h4>
			<p>Where V is voltage, I is current, and R is resistance in ohms</p>
			<p>Something is considered <em>ohmic</em> if it follows ohms law</p>
		</div>

		<h2>Circuits</h2>
		<div>
			<h3>Series</h3>
			<div>
				<p>The resistance of all the resistors adds up. To calculate the current of the circuit, add up all the resistance and plug that into ohms law</p>
			</div>
			<h3>Parallel</h3>
			<div>
				<p>The resistance in a circuit in parallel is </p>
				<p>{@html renderTextWithMathMode('$$R = \\frac{I}{\\frac{1}{R_1} + \\frac{1}{R_2} ... + \\frac{1}{R_n}}$$')}</p>
			</div>
		</div>
		<h2>Power</h2>
		<div>
			<p>{@html renderTextWithMathMode('Electrical power is given in watts which is a SI unit for joules per second')}</p>
			<h3>{@html renderTextWithMathMode('$$P = IV = \\frac{V^2}{R}$$')}</h3>
		</div>
	</div>



</div>
<style>
    div {
        padding-bottom: 10px;
        padding-left: 40px;
    }
    p {
        font-size: 20px;
    }
    img {
        height: 50vh;
    }
</style>
