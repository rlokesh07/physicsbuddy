import { c as create_ssr_component } from './ssr-ziHnzutJ.js';
import { r as renderTextWithMathMode } from './KaTeX-xA5IKkOT.js';
import 'katex';

const css = {
  code: "img.svelte-w15qlz{height:200px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container"><h1 data-svelte-h="svelte-1vts2k8">Waves</h1> <div class="typeOfWaves" data-svelte-h="svelte-1e6rbzz"><h2>Types of Waves</h2> <p>Traveling Waves: Waves that propagate through a medium</p> <p>Mechanical Waves: The only type of wave that needs a medium to run through</p> <p>Transverse Waves: Particles of the medium that vibrate perpendicular to the direction of the wave&#39;s velocity</p> <p>Longitudinal Waves: Particles of the wave vibrate parallel to the direction of the wave&#39;s velocity</p> <img src="https://i0.wp.com/cms.jackwestin.com/wp-content/uploads/2020/03/Mechanical-waves-transverse-longitudinal.png?resize=1025%2C587&ssl=1" class="svelte-w15qlz"></div> <div class="anatomyOfWave" data-svelte-h="svelte-1ruxgq4"><h2>The Anatomy of a Wave</h2> <p>Period: the amount of time for a wave to go through one full cycle</p> <p>Frequency: Number of vibrations per second</p> <p>Wavelength: The length of one full wave</p> <p>Wave speed: the speed at which energy is transferred by a wave</p> <p>Amplitude: The maximum displacement of a wave from equilibrium</p> <img src="https://pressbooks.pub/app/uploads/sites/140/2022/07/T-wave_DSA.jpg" class="svelte-w15qlz"></div> <div class="waveSpeed"><h2 data-svelte-h="svelte-wer6b8">Wave Speed</h2> <p>Wave Speed Equation: <!-- HTML_TAG_START -->${renderTextWithMathMode(`$$v = \\lambda f = \\frac{\\lambda}{f}$$`)}<!-- HTML_TAG_END --></p> <p><!-- HTML_TAG_START -->${renderTextWithMathMode(`$$v$$`)}<!-- HTML_TAG_END --> is velocity</p> <p><!-- HTML_TAG_START -->${renderTextWithMathMode(`$$\\lambda$$`)}<!-- HTML_TAG_END --> is wavelength</p> <p><!-- HTML_TAG_START -->${renderTextWithMathMode(`$$f$$`)}<!-- HTML_TAG_END --> is frequency</p> <p data-svelte-h="svelte-v7y9oo">This is in the formula booklet</p></div> <div class="inferenceAndSuperposition" data-svelte-h="svelte-1btzvi3"><h2>Inference and Superposition</h2> <p>Principle of Superposition: The displacement caused by two or more waves is the sum of its displacements</p> <img src="https://waves.neocities.org/interference.JPG" class="svelte-w15qlz"></div> <div class="standingWaves" data-svelte-h="svelte-1h1sjru"><h2>Standing Waves</h2> <p>Node: a place in the standing wave where the displacement is 0</p> <p>Anti-Node: a place in the standing wave where displacement is maximum</p> <img src="https://cdn.kastatic.org/ka-perseus-images/e45c33bb944a2f5fd7a853d18fd6f15d05cd0adf.png" class="svelte-w15qlz"> <p>A standing wave is created due to the superposition caused by the reflection fo the wave</p></div> <div class="graphicalAnalysis" data-svelte-h="svelte-ml52zm"><h2>Graphical Analysis</h2> <p>Displacement-Time Graph: a graph where the x-axis is the time passed and the y-axis is the displacement of a single point. Using this graph you can find the amplitude and period</p> <p>Position-Time Graph: a graph where the x-axis is the physical position of the points, and the y-axis is the displacement. Using this graph you can find the amplitude and wavelength. Using this on a longitudinal graph can show us centers of high and low pressure</p> <img src="http://mrthou.com/wp-content/uploads/2017/08/SciPTBCh13_03.jpg" class="svelte-w15qlz"> <p>Transmission of sound: sound travels as a series of compressions (C) and rarefactions (R) in the medium. The particles simply oscillate back and forth about their individual equilibrium positions, and this displacement (oscillation) causes the sound waves to travel.</p> <p>Compressions are regions where air pressure is higher than the surrounding air pressure.</p> <p>Rarefactions are regions where air pressure is lower than the surrounding air pressure.</p> <p>You know it is a point of compression or rarefaction based on the slope of the graph. If the graph is pointing downwards at that specific point, its a point of compression. If it is pointing upwards, its a point of rarefaction</p></div> <div class="phaseShift"><h2 data-svelte-h="svelte-8gtw4j">Phase Shift</h2> <p data-svelte-h="svelte-nu1drt">How much the graph is shifted left or right</p> <p>Phase Shift = <!-- HTML_TAG_START -->${renderTextWithMathMode(`$$2 \\pi \\frac{\\Delta x}{\\lambda}$$`)}<!-- HTML_TAG_END --></p> <p data-svelte-h="svelte-kcynke">Delta x is the distance between two equal areas of the graph</p> <p data-svelte-h="svelte-18ppaot">All points on a standing wave between two nodes are in phase with each other</p> <p data-svelte-h="svelte-xfmhpu">The reflection of the wave in a standing wave is exactly out of phase by pi</p></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D6ye951H.js.map
