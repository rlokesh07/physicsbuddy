<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>

	<h1>Electrostatics</h1>

	<div>

		<h2>Electric Charge</h2>
		<div>
			<p>Charge is something that objects have that causes them to attract or repel. They come in positive and negative varieties, where the same types repel and the opposite type attract</p>

			<h3>Protons and Electrons</h3>
			<div>

				<p>{@html renderTextWithMathMode(`The elementary charge $$e$$ is $$1.602 \\cdot 10^{-19} C$$`)}</p>
				<p>{@html renderTextWithMathMode(`Protons have a charge of $$+e$$ an electrons have a charge of $$-e$$`)}</p>
				<p>Electrons can be easily rubbed off, giving the object they rubbed off on a negative charge and the object they came from a positive one</p>

			</div>
			<h3>Millikan Oil Drop Experiment</h3>
			<div>
				<p>They squired drops of oil against two charged plates, and were able to determine the electrostatic force by comparing the force the field needed to be to cancel out the force of gravity</p>
				<p>This experiment also helped discover the value of the charge of an electron because the charges of the oil droplets would be discrete</p>
			</div>
		</div>
		<h2>Coulomb's Law</h2>
		<div>
			<h4>{@html renderTextWithMathMode(`$$F = \\frac{kq_1q_2}{r^2}$$`)}</h4>
			<p>Where q is the charges, k is the Coulomb's Constant, and r is the distance between the points</p>
			<h5>{@html renderTextWithMathMode(`$$k = 8.99 \\cdot 10^9 N \\cdot m^2 \\cdot C^{-2}$$`)}</h5>
		</div>
		<h2>Electric Field</h2>
		<div>
			<p>The electric field strength is determined by the force per unit charge of a small test particle</p>
			<h4>{@html renderTextWithMathMode('$$E = \\frac{F}{q_{test}}$$')}</h4>
		</div>
		<h2>Electric Potential</h2>
		<div>

			<p>Think about electric potential like gravitational potential. When you move an object farther away from the earth it goes up.</p>
			<p>Same thing with a positive and a negative charge. As you move them away, the electric potential increases</p>
			<p>{@html renderTextWithMathMode('Also known as voltage, electric potential from a distance r from a point charge q is $$\\frac{kq}{r}$$')}</p>
			<p>The potential at a point effected by a bunch of different charges is the sum of all of them</p>

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
