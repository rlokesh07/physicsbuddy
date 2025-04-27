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

			<br>

			<p>For a straight wire carrying current I, the force in a magnetic field is</p>
			<p>{@html renderTextWithMathMode('$$F = IlB \\sin(\\theta)$$')}</p>
			<p>Where l is the length of the wire</p>
			<h3>Trajectory of a Charge in a Magnetic Field</h3>
			<div>
				<p>When a proton enters a constant magnetic field, the force always points perpendicular to the velocity, causing a centripetal net force</p>
				<img src="https://openstax.org/apps/archive/20250226.165223/resources/39801086ff242e6af70fdc752a02d98f48b37ae2">
			</div>
		</div>
		<h2>Changing Magnetic Fields</h2>
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
