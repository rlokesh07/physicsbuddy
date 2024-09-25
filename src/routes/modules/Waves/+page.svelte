<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';

</script>
<div class="container">
	<h1>Waves</h1>
	<div class="typeOfWaves">
		<h2>Types of Waves</h2>
		<p>Traveling Waves: Waves that propagate through a medium</p>
		<p>Mechanical Waves: The only type of wave that needs a medium to run through</p>
		<p>Transverse Waves: Particles of the medium that vibrate perpendicular to the direction of the wave's velocity</p>
		<p>Longitudinal Waves: Particles of the wave vibrate parallel to the direction of the wave's velocity</p>
		<img src="https://i0.wp.com/cms.jackwestin.com/wp-content/uploads/2020/03/Mechanical-waves-transverse-longitudinal.png?resize=1025%2C587&ssl=1"/>
	</div>
	<div class="anatomyOfWave">
		<h2>The Anatomy of a Wave</h2>
		<p>Period: the amount of time for a wave to go through one full cycle</p>
		<p>Frequency: Number of vibrations per second</p>
		<p>Wavelength: The length of one full wave</p>
		<p>Wave speed: the speed at which energy is transferred by a wave</p>
		<p>Amplitude: The maximum displacement of a wave from equilibrium</p>
		<img src="https://pressbooks.pub/app/uploads/sites/140/2022/07/T-wave_DSA.jpg"/>
	</div>
	<div class="waveSpeed">
			<h2>Wave Speed</h2>
			<p>Wave Speed Equation: {@html renderTextWithMathMode(`$$v = \\lambda f = \\frac{\\lambda}{f}$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$v$$`)} is velocity</p>
		<p>{@html renderTextWithMathMode(`$$\\lambda$$`)} is wavelength</p>
		<p>{@html renderTextWithMathMode(`$$f$$`)} is frequency</p>
		<p>This is in the formula booklet</p>
	</div>
	<div class="inferenceAndSuperposition">
			<h2>Inference and Superposition</h2>
			<p>Principle of Superposition: The displacement caused by two or more waves is the sum of its displacements</p>
		<img src="https://waves.neocities.org/interference.JPG"/>
	</div>

	<div class="standingWaves">
		<h2>Standing Waves</h2>
		<p>Node: a place in the standing wave where the displacement is 0</p>
		<p>Anti-Node: a place in the standing wave where displacement is maximum</p>
		<img src="https://cdn.kastatic.org/ka-perseus-images/e45c33bb944a2f5fd7a853d18fd6f15d05cd0adf.png"/>
		<p>A standing wave is created due to the superposition caused by the reflection fo the wave</p>
	</div>

	<div class="graphicalAnalysis">
		<h2>Graphical Analysis</h2>
		<p>Displacement-Time Graph: a graph where the x-axis is the time passed and the y-axis is the displacement of a single point. Using this graph you can find the amplitude and period</p>
		<p>Position-Time Graph: a graph where the x-axis is the physical position of the points, and the y-axis is the displacement. Using this graph you can find the amplitude and wavelength. Using this on a longitudinal graph can show us centers of high and low pressure</p>
		<img src="http://mrthou.com/wp-content/uploads/2017/08/SciPTBCh13_03.jpg" />
		<p>Transmission of sound: sound travels as a series of compressions (C) and rarefactions (R) in the medium. The particles simply oscillate back and forth about their individual equilibrium positions, and this displacement (oscillation) causes the sound waves to travel.</p>
		<p>Compressions are regions where air pressure is higher than the surrounding air pressure.</p>
		<p>Rarefactions are regions where air pressure is lower than the surrounding air pressure.</p>
		<p>You know it is a point of compression or rarefaction based on the slope of the graph. If the graph is pointing downwards at that specific point, its a point of compression. If it is pointing upwards, its a point of rarefaction</p>
	</div>

	<div class="phaseShift">
		<h2>Phase Shift</h2>
		<p>How much the graph is shifted left or right</p>
		<p>Phase Shift = {@html renderTextWithMathMode(`$$2 \\pi \\frac{\\Delta x}{\\lambda}$$`)}</p>
		<p>Delta x is the distance between two equal areas of the graph</p>
		<p>All points on a standing wave between two nodes are in phase with each other</p>
		<p>The reflection of the wave in a standing wave is exactly out of phase by pi</p>
	</div>


</div>

<style>
	img{
			height: 200px;
	}
</style>