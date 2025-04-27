<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>

	<h1>Magnetism</h1>
	<div>
		<h2>Magnetic Fields</h2>
		<div>
			<p>A magnet creates a magnetic field around it that describes the force exerted on other magnets placed in the field.</p>
			<p>When a wire has a current going through it, you can use the right hand rule to determine the direction of the magnetic field</p>
			<img src="https://openstax.org/apps/archive/20250226.165223/resources/943acc26c844edd99d683834e8f592a563ab7573">
			<p>When you create coils of wire with current going through it, it acts like an electromagnet</p>
			<img src="https://openstax.org/apps/archive/20250226.165223/resources/85edb53f7d1d77733ae30a205ac4ec11cb4504cb">

		</div>
		<h2>Magnetic Force</h2>
		<div>
			<p>{@html renderTextWithMathMode('For a charge $$q$$ moving with a velocity $$\\vec{v}$$ through a field $$\\vec{B}$$, the force $$F$$ is')}</p>
			<p>{@html renderTextWithMathMode('$$F = qvB \\sin(\\theta)$$')}</p>
			<p>The direction of the field is determined using the cross product formula. You can also use the right hand rule</p>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9DWA1VG09TOVYMAJx3zHNpjPO1tZxbZmVBQ&s">



			<p>For a straight wire carrying current I, the force in a magnetic field is</p>
			<p>{@html renderTextWithMathMode('$$F = IlB \\sin(\\theta)$$')}</p>
			<p>Where l is the length of the wire</p>
			<h3>Trajectory of a Charge in a Magnetic Field</h3>
			<div>
				<p>When a proton enters a constant magnetic field, the force always points perpendicular to the velocity, causing a centripetal net force</p>
				<img src="https://openstax.org/apps/archive/20250226.165223/resources/39801086ff242e6af70fdc752a02d98f48b37ae2">
			</div>
			<h3>Magnetic Flux</h3>
			<div>
				<p>{@html renderTextWithMathMode('Magnetic flux describes the amount of magnetic field passing through a given area. It is represented by the symbol $$\\Phi_B$$ and is calculated using the formula:')}</p>
				<p>{@html renderTextWithMathMode('$$\\Phi_B = B A \\cos(\\theta)$$')}</p>
				<p>{@html renderTextWithMathMode('<strong>$$B$$</strong> is the magnetic field strength (measured in Tesla)')}</p>
				<p>{@html renderTextWithMathMode('<p><strong>$$A$$</strong> is the area through which the magnetic field lines pass (measured in square meters)</p>\n')}</p>
				<p>{@html renderTextWithMathMode('<p><strong>$$\\theta$$</strong> is the angle between the magnetic field lines and the normal (perpendicular) to the area</p>\n')}</p>

				<p>{@html renderTextWithMathMode('If the magnetic field lines are perpendicular to the surface, $$\\theta$$ is 0° and the flux is maximized. If the field lines are parallel to the surface, $$\\theta$$ is 90° and the flux is zero.')}</p>
			</div>

		</div>
		<h2>Changing Magnetic Fields</h2>
		<div>
			<p>Just like how you can create magnetic fields with current, you can generate a current through a magnetic field, which is called induction</p>
			<p>Because there is a current generated, there is a emf generated due to the change of flux</p>
			<h3>{@html renderTextWithMathMode('$$\\epsilon = -N \\frac{\\Delta \\Phi_B}{\\Delta t}$$')}</h3>
			<p>{@html renderTextWithMathMode('Where $$\\Delta \\Phi_B$$ is the change in flux and $$\\Delta t$$ is the change in time')}</p>
		</div>

	</div>






</div>
<style>
    div {
        padding-bottom: 40px;
        padding-left: 40px;
    }
    p {
        font-size: 20px;
    }
    img {
        height: 50vh;
    }
</style>
