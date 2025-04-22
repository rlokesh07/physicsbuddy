<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
	import { Accordion } from '@sveltestrap/sveltestrap';
</script>
<div>
	<h1>Simple Harmonic Motion</h1>
	<h5><strong>Simple Harmonic Motion is <em>simply</em> defined as motion whose acceleration is proportional to the displacement from equilibrium, and that the force always acts towards equilibrium</strong></h5>
	<p>{@html renderTextWithMathMode(`$$a \\propto -x$$`)}</p>
	<br>
	<div>
		<h2>Terminology</h2>

		<div>
			<h2>Frequency</h2>
			<p>The number of cycles completed per second in SHM.</p>
			<p>{@html renderTextWithMathMode(`$$f = \\text{Frequency} \\ (\\text{Hz or s}^{-1})$$`)}</p>
		</div>

		<div>
			<h2>Amplitude</h2>
			<p>The maximum displacement from the fixed equilibrium position.</p>
			<p>{@html renderTextWithMathMode(`$$A \\text{ or } x_0 = \\text{Amplitude (m)}$$`)}</p>
		</div>

		<div>
			<h2>Displacement</h2>
			<p>The distance of the object from the equilibrium position at a given time.</p>
			<p>{@html renderTextWithMathMode(`$$x = \\text{Displacement (m)}$$`)}</p>
		</div>

		<div>
			<h2>Time Period</h2>
			<p>The time taken to complete one full cycle of SHM.</p>
			<p>{@html renderTextWithMathMode(`$$T = \\text{Time Period (s)}$$`)}</p>
			<p>{@html renderTextWithMathMode(`Note $$T = \\frac{1}{f} = \\frac{2\\pi}{\\omega}$$`)}</p>

		</div>
	</div>


	<div>
		<h2>Angular Velocity</h2>
		<p>Angular velocity represents the velocity of the circular projection of the harmonic motion</p>
		<p>{@html renderTextWithMathMode(`Therefore we can represent the displacement as $$x = x_0 sin(\\omega t + \\text{shift})$$`)}</p>
		<p>Knowing how displacement is proportional to acceleration, we can write velocity as</p>
		<p>{@html renderTextWithMathMode(`$$v = \\omega x_0 sin(\\omega t + \\text{shift})$$`)}</p>
		<p>and also</p>
		<p>{@html renderTextWithMathMode(`$$x = \\pm \\omega \\sqrt{x_0^2 - x^2}$$`)}</p>


		<div>
			<h3>Phase Shift</h3>
			<p>Phase shift is the angle at which two oscillating objects differ by</p>
		</div>

	</div>
	<div>
		<h2>Simple Harmonic Oscillators</h2>
		<div>
			<h3>Mass on a Spring</h3>
			<p>The period of oscillation for a mass on a spring is</p>
			<p>{@html renderTextWithMathMode(`$$T=2\\pi \\sqrt{\\frac{m}{k}}$$`)}</p>
		</div>
		<div>
			<h2>Pendulum</h2>
			<p>The period of oscillation for a pendulum is</p>
			<p>{@html renderTextWithMathMode(`$$T=2\\pi \\sqrt{\\frac{L}{g}}$$`)}</p>
		</div>
	</div>


</div>
<style>
    div {
        padding-bottom: 10px;
        padding-left: 70px;
    }
    p {
        font-size: 20px;
    }
</style>
