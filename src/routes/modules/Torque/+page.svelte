<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>
	<h1>Rigid Body Mechanics/Torque</h1>
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
	<div>
		<h2>Torque</h2>
		<p>Given a force F acting some distance r from a point of rotation at an angle, the torque is</p>
		<p>{@html renderTextWithMathMode(`$$\\tau =Frsin\\theta$$`)}</p>
		<div>
			<h3>Center of Mass</h3>
			<p>The center of where all the mass is concentrated</p>
			<h3>Center of Gravity</h3>
			<p>The center of the force of gravity</p>
		</div>
		<div>
			<h3>Moment of Inertia</h3>
			<p>The measure of angular inertia or the resistance to change</p>
			<p>{@html renderTextWithMathMode(`The moment of inertia for a single point is $$I = mr^2$$`)}</p>
			<p>{@html renderTextWithMathMode(`The moment of inertia for a system is $$I = \\sum_i m_ir_i^2$$`)}</p>

		</div>
	</div>
	<div>
		<h2>Rotational Momentum</h2>
		<p>{@html renderTextWithMathMode(`$$L = I\\omega$$`)}</p>
		<p>Just like translational inertia, this must always be conserved</p>
		<p>This is typically used in questions where the radius of a point changes</p>

	</div>
	<div>
		<h2>Rotational Kinetic Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E_k = \\frac{1}{2}I\\omega^2 = \\frac{L^2}{2I}$$`)}</p>
		<p>Where L is the rotational momentum</p>
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
