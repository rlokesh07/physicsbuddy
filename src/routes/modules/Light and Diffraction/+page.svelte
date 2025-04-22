<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>
	<h1>Light and Diffraction</h1>
	<div>
		<h2>Light</h2>
		<p>Light waves are also known as electromagnetic waves, and visible light is a specific range of frequencies that responds to our eyes to allow us to see things. Light has particle and wave like properties, but this unit surrounds the wave like properties</p>
		<p>{@html renderTextWithMathMode(`Light follows the equation $$c = f\\lambda$$ where c is the speed of light, f is the frequency in $$Hz$$, and $$\\lambda$$ is the wavelength in m`)}</p>
	</div>
	<div>
		<h2>Refraction</h2>
		<p>When light travels between two materials, its wavelength and speed change, but the frequency does not. It changes with reference to its index of refraction, n</p>
		<p>{@html renderTextWithMathMode(`$$\\lambda_n = \\frac{\\lambda}{n}$$ where $$\\lambda$$ is the wavelength in a vacuum`)}</p>
	</div>
	<div>
		<h2>Wavefronts</h2>
		<p>Wavefronts are the idea that there are points on a waves surface that share the same, constant phase. Every point on a wave is made up of wavelets, and the new wavefront is the tangent line of all the wavelets</p>
		<img src="https://openstax.org/apps/archive/20250226.165223/resources/507cc041bedf479cb60385fe0bd55c97e1c5f228">
	</div>
	<div>
		<h2>Diffraction</h2>
		<p>When a wave passes through a smaller opening, the light wave will bend through a concept called diffraction</p>
		<img src="https://openstax.org/apps/archive/20250226.165223/resources/a9f36df31fe15b66e6c48e2b739aa3af5e85a5de">
	</div>
	<div>
		<h2>Single Slit Interference</h2>
		<p>Even with just one slit, light waves still interfere with themselves due to diffraction. The light spreading from different parts of the slit overlaps and creates a pattern of bright and dark fringes on a screen.</p>
		<img src="https://sites.science.oregonstate.edu/~hadlekat/COURSES/ph212/waveOptics/images/slide23.png?crc=39642021">
		<p>{@html renderTextWithMathMode(`The condition for destructive interference (dark fringes) is $$ a \\sin(\\theta) = m \\lambda$$, where $$a$$ is the width of the slit, $$\\lambda$$ is the wavelength of the light, $$\\theta$$ is the angle from the center, and $$m$$ is a non-zero integer (±1, ±2, ...).`)}</p>
		<p>The central maximum is the brightest and widest, while subsequent maxima are dimmer and narrower, decreasing in intensity as you move away from the center.</p>
	</div>
	<div>
		<h2>Double Slit Interference</h2>
		<p>When you have two slits, with a light shining through them into a wall, the two diffractions will create moments of constructive and destructive interference on the wall</p>
		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xxybJGvRK5_zg3k6RUpKqXO9ftnx4263Og&s">
		<p>{@html renderTextWithMathMode(`Using trigonometry, we can find the peaks of the interference as $$d \\sin(\\theta) = m \\lambda$$, where m is a integer representing the peak number/order. Note this pattern is symmetrical `)}</p>
		<p>{@html renderTextWithMathMode(`Using trigonometry, we can find the peaks of the interference as $$d \\sin(\\theta) = m \\lambda$$, where m is a integer representing the peak number/order. Note this pattern is symmetrical `)}</p>

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
		img {
				height: 50vh;
		}
</style>
