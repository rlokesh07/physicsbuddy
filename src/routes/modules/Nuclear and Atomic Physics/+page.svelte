<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>

<h1>Photons</h1>
<div>
	<h2>Photon</h2>
	<p>A particle representing a quantum of light.</p>
	<h2>Quantum</h2>
	<p>Smallest discrete amount of something.</p>
	<h2>Discrete</h2>
	<p>An individually separate and distinct thing. Not made of anything else.</p>
</div>

<h1>Wave-Particle Duality</h1>
<div>
	<p>Photons exhibit wave properties under refraction and interference.</p>
	<p>Photons exhibit particle properties under emission or absorption.</p>
</div>

<h1>Photon Energy</h1>
<div>
	<p>{@html renderTextWithMathMode(`$$E = hf = \\frac{hc}{\\lambda}$$`)}</p>
	<p>Where <em>h</em> is Planck's constant, <em>c</em> is the speed of light, and <em>λ</em> is its wavelength.</p>
</div>

<h1>The Photoelectric Effect</h1>
<div>
	<h2>Threshold Frequency</h2>
	<p>The minimum frequency for the emission of electrons due to incident radiation.</p>
	<h2>Work Function</h2>
	<p>The minimum quantity of energy required to remove an electron from a solid.</p>
	<h2>Stopping Potential</h2>
	<p>The minimum negative voltage applied to the anode to stop the photocurrent, representing the maximum kinetic energy of the electron.</p>
	<p>{@html renderTextWithMathMode(`$$\\Phi = hf_0$$`)}, where {@html renderTextWithMathMode(`$$f_0$$`)} is the threshold frequency.</p>
	<p>Total energy: {@html renderTextWithMathMode(`$$hf = \\Phi + E_k$$`)}</p>
	<p>Threshold wavelength: {@html renderTextWithMathMode(`$$\\lambda_c = \\frac{hc}{\\Phi}$$`)}</p>
</div>

<h1>Matter Waves</h1>
<div>
	<p>De Broglie proposed that all matter has wave-like properties.</p>
	<p>Momentum-wavelength relation: {@html renderTextWithMathMode(`$$p = \\frac{h}{\\lambda}$$`)}</p>
</div>

<h1>Bohr Model</h1>
<div>
	<p>Electrons orbit the nucleus in discrete paths with quantized angular momentum.</p>
	<p>Nuclear radius: {@html renderTextWithMathMode(`$$R = R_0 A^{\\frac{1}{3}}$$`)}</p>
	<p>Energy levels: {@html renderTextWithMathMode(`$$E_n = -R_H \\left(\\frac{1}{n^2}\\right)$$`)}</p>
	<p>Angular momentum: {@html renderTextWithMathMode(`$$mvr = \\frac{nh}{2\\pi}$$`)}</p>
	<p>Energy of an electron in orbit: {@html renderTextWithMathMode(`$$E = -\\left(\\frac{13.6}{n^2}\\right) eV$$`)}</p>
</div>

<h1>Rutherford Scattering</h1>
<div>
	<p>Rutherford's students shot alpha particles at gold foil.</p>
	<p>The Plum Pudding Model predicted uniform density, meaning no deflection, but scattering was observed, proving the nuclear model of the atom.</p>
</div>

<h1>Nuclear Energy Levels</h1>
<div>
	<p>The nucleus moves between discrete energy levels, often emitting gamma rays corresponding to distinct energy transitions.</p>
</div>

<h1>Absorption and Emission Spectra</h1>
<div>
	<p>Electrons moving down in energy levels emit photons, forming an emission spectrum.</p>
	<p>Absorption spectra show wavelengths absorbed as electrons move up energy levels.</p>
</div>

<h1>Compton Scattering</h1>
<div>
	<p>Arthur Compton observed an increase in photon wavelength after colliding with an electron, leading to a wavelength shift formula:</p>
	<p>{@html renderTextWithMathMode(`$$\\Delta \\lambda = \\frac{h}{m_e c} (1 - \\cos \\theta)$$`)}</p>
	<p>The energy used to accelerate electrons equals their kinetic energy.</p>
	<p>{@html renderTextWithMathMode(`$$\\lambda = \\frac{h}{\\sqrt{2mqV}}$$`)}</p>
</div>

<style>
    div{
        padding-bottom: 80px;
        padding-left: 70px;
    }
    img{
        height: 400px;
    }
    p{
        font-size: 20px;
    }
</style>