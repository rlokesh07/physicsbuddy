<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div>

	<h1>Reference Frames</h1>
	<div>
		<p>Inertial Frames: Frame moving at constant velocity where all laws of physics would be the same</p>


	<h3>Galilean Addition of Velocities</h3>

		<p>Used for everyday speeds (nothing even close to speed of light), where you just add vectors</p>
		<img alt="trig functions" src="https://cdn.discordapp.com/attachments/744944331542233173/1288333834630467644/galileo_motion.png?ex=66f4cde2&is=66f37c62&hm=39404646d7a4ab1fa670bcada81f31083567b867b441fbf0f42f94cc75409a47&"/>
		<p>Keep in mind that two objects moving in opposite directions add up, and same direction subtract</p>
	</div>

	<h1>Special Relativity</h1>
	<div>
		<h3>Two Postulates of Special Relativity</h3>
		<p>1. The laws of physics are the same in all inertial frames of reference</p>
		<p>2. The speed of light is the same in all inertial frames of reference</p>



	<h3>Simultaneity</h3>
	<p>The idea that if two things appear to happen at the same time to you, it might not be the same for me</p>
	<img alt="simultaneity diagram" src="https://cdn.discordapp.com/attachments/744944331542233173/1288335211792433212/Color-online-An-example-of-the-relativity-of-simultaneity-in-the-perspective-of.png?ex=66f4cf2a&is=66f37daa&hm=0d1da67382fff65ecff23c717ec736c1c635567eb6e5d141bbf56698a2340146&">

	<h3>Time Dilation</h3>
	<p>Proper Time: The time interval measured by an observer that is seeing the events occur at rest with the clock. This is always the shortest time period in a question</p>
	<p>Time Dilation: The lengthening of time intervals in a frame that is moving with reference to the frame that is at rest</p>
	<p>{@html renderTextWithMathMode(`If $$\\Delta x = 0$$, then $$\\Delta t = \\gamma \\Delta t_{0}$$`)}</p>
	<h4>Gamma</h4>
	<p>{@html renderTextWithMathMode(`$$\\gamma = \\frac{1}{\\sqrt{1-\\frac{v^2}{c^2}}}$$`)}</p>

	<h3>Twin Paradox</h3>
	<p>Two twins start together on earth, Atiksh and Ben. Atiksh gets on a spaceship and travels far away really quickly away from Ben. After going some distance, he turns back and goes towards Ben. From Ben's perspective, it looked like Atiksh moved away from him, but in Atish's perspective it looked like Ben moved away from him. This is fine, however we know for sure that Atiksh has seen less time pass by than Ben. How is that possible if they were in the same situations?</p>
	<h4>Solution</h4>
	<p>Because Atiksh turned around, that breaks the inertial frame because he is accelerating, causing the break in symmetry. Ben remained in an inertial frame while Atiksh broke it by accelerating back towards Ben</p>

	<h3>Length Contraction</h3>
	<p>Proper Length: The length of the object measured at rest relative to both the points, which are measured simultaneously</p>
	<p>{@html renderTextWithMathMode(`Length Contraction: When traveling close to the speed of light, the moving object's length appears to be shorter by a factor of $$\\frac{1}{\\gamma}$$`)}</p>
	<p>{@html renderTextWithMathMode(`When $$\\Delta= 0$$, then $$L = \\frac{L_0}{\\gamma}$$`)}</p>

	<h3>Lorentz Transformations</h3>
	<p>The previous equations are either assuming constant position or constant time. If you do not have that use these equations</p>
	<p>{@html renderTextWithMathMode(`$$x' = \\gamma (x-vt)$$`)}</p>
	<p>{@html renderTextWithMathMode(`$$t' = \\gamma (t - \\frac{vx}{c^2})$$`)}</p>

	<h3>Inverse Lorentz</h3>
	<p>Switch out x' and t' for x and t and switch the signs</p>
	<p>{@html renderTextWithMathMode(`$$x = \\gamma (x'-vt')$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$t = \\gamma (t + \\frac{vx'}{c^2})$$`)}</p>
		</div>

	<h1>Relativistic Addition of Velocity</h1>
	<div>
		<h3>Data Booklet Version</h3>
		<h3>{@html renderTextWithMathMode(`$$u' = \\frac{u - v}{1 - \\frac{uv}{c^2}}$$`)}</h3>
		<h3>Solving for u</h3>
		<h3>{@html renderTextWithMathMode(`$$u = \\frac{u' + v}{1 + \\frac{u'v}{c^2}}$$`)}</h3>
	</div>

	<h1>Space Time Diagrams</h1>
	<div>

	</div>

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