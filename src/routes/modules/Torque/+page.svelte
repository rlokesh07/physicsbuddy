<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>
	<h1>Simple Harmonic Motion</h1>
	<div>
		<h2>Rotational Kinematics</h2>
		<div>
			<h3>Angular Displacement</h3>
			<p>{@html renderTextWithMathMode(`One revolution = $$360\\deg$$ = $$2\\pi$$ $$ rad$$`)}</p>
			<p>Because how radians are just ratios of the circumference of a circle, you can write the arc length of the circle as</p>
			<p>{@html renderTextWithMathMode(`$$s = r \\theta$$`)}</p>
			<p>where s is the arc length and r is the radius</p>
		</div>
		<div>
			<h3>Angular Velocity</h3>
			<p>{@html renderTextWithMathMode(`Written as $$\\omega$$`)}</p>
			<p>Angular displacement over time</p>
			<p>This is not a measure of meters per second, as that is the tangential velocity</p>
			<p>{@html renderTextWithMathMode(`You can calculate tangential velocity with $$\\omega \\cdot r$$`)}</p>

		</div>
		<div>
			<h3>Angular Acceleration</h3>
			<p>{@html renderTextWithMathMode(`The rate of change of the angular velocity, measured in $$rad$$ $$s^{-2}$$`)}</p>
		</div>
		<div>
			<h3>Kinematic Formulas</h3>
			<p>You can use all of the linear kinematic equations with angular</p>
			<p>{@html renderTextWithMathMode(`$$\\Delta\\theta = \\frac{\\omega_f + \\omega_i}{2} + t$$`)}</p>
			<p>{@html renderTextWithMathMode(`$$\\omega_f = \\omega_i + \\alpha t$$`)}</p>
			<p>{@html renderTextWithMathMode(`$$\\Delta\\theta = \\omega_it+\\frac{1}{2}\\alpha t^2$$`)}</p>
			<p>{@html renderTextWithMathMode(`$$\\omega_f^2 = \\omega_i^2 + 2 \\alpha \\Delta \\theta$$`)}</p>


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
