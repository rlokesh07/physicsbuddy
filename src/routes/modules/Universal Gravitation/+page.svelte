<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>
	<h1>Gravitation</h1>
	<div>
		<h2>Gravitational Force</h2>
		<p>{@html renderTextWithMathMode(`$$F = \\dfrac{G \\cdot m_1 \\cdot m_2}{r^2}$$`)}</p>
		<p>{@html renderTextWithMathMode(`G = Gravitational Constant = $$6.673 \\cdot 10^{-11} Nm^{2}{Kg}^{-2}$$`)}</p>
		<p>r = Distance from the centers of mass (m)</p>

	</div>
	<div>
		<h2>Gravitational Field Strength</h2>
		<p>{@html renderTextWithMathMode(`$$g = \\dfrac{F}{m} = \\dfrac{GM}{r^2}$$`)}</p>
		<p>Gravitational force per unit mass</p>
	</div>



	<div>
		<h2>Gravitational Potential Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E_p = -\\dfrac{GMm}{r}$$`)}</p>
		<p>Ep = Gravitational potential energy (J)</p>
		<p>m = Mass experiencing the potential (kg)</p>
		<p>{@html renderTextWithMathMode(`Note that the gravitational potential energy at $$r = \\infty$$ is $$-\\infty$$`)}</p>

		<p></p>
	</div>
	<div>
		<h2>Gravitational Potential</h2>
		<p>{@html renderTextWithMathMode(`$$\\phi = -\\dfrac{GM}{r}$$`)}</p>
		<p>ϕ = Gravitational potential (J/kg)</p>
		<p>Work done to bring unit mass from infinity to a point in the field</p>
		<p>It is the gravitational potential energy per unit mass</p>
	</div>
	<div>
		<h2>Escape Velocity</h2>
		<p>{@html renderTextWithMathMode(`$$v = \\sqrt{\\dfrac{2GM}{r}}$$`)}</p>
		<p>v = Escape velocity (m/s)</p>
		<p>The minimum speed required to escape a gravitational field without further propulsion</p>
	</div>

	<div>
		<h2>Orbital Velocity</h2>
		<p>{@html renderTextWithMathMode(`$$v = \\sqrt{\\dfrac{GM}{r}}$$`)}</p>
		<p>v = Orbital speed for a stable circular orbit (m/s)</p>
	</div>

	<div>
		<h2>Total Orbital Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E = -\\dfrac{GMm}{2r}$$`)}</p>
		<p>Total energy = Kinetic + Potential in a bound circular orbit</p>
	</div>

	<div>
		<h2>Potential Gradient</h2>
		<p>{@html renderTextWithMathMode(`$$\\text{Potential Gradient} = -\\dfrac{\\Delta\\phi}{\\Delta r} = g$$`)}</p>
		<p>The negative gradient of gravitational potential is the gravitational field strength</p>
	</div>

	<div>
		<h2>Kepler’s Third Law</h2>
		<p>{@html renderTextWithMathMode(`$$(\\frac{T_1}{T_2})^2 = (\\frac{r_1}{r_2})^3$$`)}</p>
		<p>or</p>
		<p>{@html renderTextWithMathMode(`$$T^2 \\propto r^3$$`)}</p>

		<p>Where T is the orbital period and r is the radius of orbit</p>
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
