<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>

<h1>Mechanics Study Guide</h1>
<div>
	<h3>Distance vs. Displacement</h3>
	<div>
		<p><strong>Distance:</strong> How far something travels (scalar)</p>
		<p><strong>Displacement:</strong> Final difference in position (vector)</p>
	</div>
</div>

<div>
<h3>Average Velocity</h3>
<div>
	<p>Average Velocity = total distance traveled / total time</p>
	<p>{@html renderTextWithMathMode(`$$\\text{Average velocity} = \\frac{\\Delta x}{\\Delta t}$$`)}</p>
</div>
</div>
<div>
<h2>Acceleration</h2>
<div>
	<p>Rate of change of velocity</p>
	<p>{@html renderTextWithMathMode(`$$a = \\frac{\\Delta v}{\\Delta t}$$`)}</p>
</div>
</div>
<div>
	<h1>Kinematics Equations</h1>
<div>
	<p>{@html renderTextWithMathMode(`$$v = u + at$$`)}</p>
	<p><em>Final velocity = Initial velocity + acceleration × time</em></p>
	<br>
	<p>{@html renderTextWithMathMode(`$$s = ut + \\frac{1}{2}at^2$$`)}</p>
	<p><em>Final position = Initial velocity × time + ½ × acceleration × time²</em></p>
	<br>
	<p>{@html renderTextWithMathMode(`$$v^2 = u^2 + 2as$$`)}</p>
	<p><em>Final Velocity² = Initial Velocity² + 2 × Acceleration × Final Position</em></p>
	<br>
	<p>{@html renderTextWithMathMode(`$$s = \\frac{v + u}{2} \\cdot t$$`)}</p>
	<p><em>Final position = average of initial and final velocity × time (only if acceleration is constant)</em></p>

</div>
</div>



<div>
	<h1>Free fall</h1>
	<p><strong>Free Fall:</strong> When a object is falling only due to the force of gravity</p>
	<div>
		<p>{@html renderTextWithMathMode(`$$g=9.8ms^{-2}$$`)}</p>
	</div>

</div>
<div>
	<h1>Newton's 3 Laws</h1>
	<div>
		<h2>Newton's First Law (Law of Inertia)</h2>
		<p>
			An object at rest stays at rest, and an object in motion stays in motion with the same velocity,
			unless acted upon by a net external force.
		</p>
		<p><em>This means: Objects resist changes to their state of motion.</em></p>
	</div>

	<div>
		<h2>Newton's Second Law</h2>
		<p>
			The net force acting on an object is equal to the rate of change of its momentum. For constant mass:
		</p>
		<p>{@html renderTextWithMathMode(`$$F = ma$$`)}</p>
		<p>
			Where: <br />
			<code>F</code> = Net force (N) <br />
			<code>m</code> = Mass (kg) <br />
			<code>a</code> = Acceleration (m/s²)
		</p>
	</div>

	<div>
		<h2>Newton's Third Law</h2>
		<p>
			For every action, there is an equal and opposite reaction.
		</p>
		<p><em>This means: Forces always come in pairs. If object A exerts a force on object B, then B exerts an equal and opposite force on A.</em></p>
	</div>

</div>
<div>
	<h2>Spring Force (Hooke's Law)</h2>
	<p>
		The force exerted by a spring is directly proportional to its extension or compression from its equilibrium (rest) position:
	</p>
	<p>{@html renderTextWithMathMode(`$$F = -kx$$`)}</p>
	<p>
		Where: <br />
		<code>F</code> = Restoring force (N) <br />
		<code>k</code> = Spring constant (N/m) <br />
		<code>x</code> = Displacement from equilibrium (m) <br />
	</p>
	<p>
		The negative sign indicates that the force exerted by the spring is in the opposite direction of displacement.
	</p>
</div>
<div>
	<h1>Force of Friction</h1>
	<div>
		<h2>1. Static Friction</h2>
		<p>{@html renderTextWithMathMode(`$$f_{\\text{static}} \\leq \\mu_s N$$`)}</p>
		<p>
			Static friction resists the start of motion. It increases with applied force up to a maximum limit.
		</p>
		<ul>
			<p>{@html renderTextWithMathMode(`<strong>$$f_{\\text{static}}$$</strong> = Static friction force (N)`)}</p>
			<p>{@html renderTextWithMathMode(`<strong>$$\\mu_s$$</strong> = Coefficient of static friction (unitless)`)}</p>
			<p>{@html renderTextWithMathMode(`<strong>$$N$$</strong> = Normal force (N)`)}</p>
		</ul>
	</div>

	<div>
		<h2>2. Kinetic (Dynamic) Friction</h2>
		<p>{@html renderTextWithMathMode(`$$f_{\\text{kinetic}} = \\mu_k N$$`)}</p>
		<p>
			Kinetic friction acts on objects in motion and stays constant.
		</p>
		<ul>
			<p>{@html renderTextWithMathMode(`<strong>$$f_{\\text{kinetic}}$$</strong> = Kinetic friction force (N)`)}</p>
			<p>{@html renderTextWithMathMode(`<strong>$$\\mu_k$$</strong> = Coefficient of kinetic friction (unitless)`)}</p>
			<p>{@html renderTextWithMathMode(`<strong>$$N$$</strong> = Normal force (N)`)}</p>
		</ul>
	</div>
	<div>
		<h1>Fluids</h1>
		<div>
			<h2>Drag Force Equation</h2>
			<br>
			<p>{@html renderTextWithMathMode(`$$F_d = 6 \\pi \\eta r v$$`)}</p>
			<p>
				Drag force opposes the motion of an object moving through a fluid (like air or water).
			</p>
			<p>
				The drag force originates from Newton's third law, where pushing the air molecules in one direction causes a force in the opposite direction
			</p>
				<p>{@html renderTextWithMathMode(`<strong>$$F_d$$</strong> = Drag force (N)`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$\\eta$$</strong> = coefficient of viscosity`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$r$$</strong> = radius (m)`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$v$$</strong> = Velocity of the object relative to fluid (m/s)`)}</p>
			<div>
				<h3>Terminal Velocity</h3>
				<p>Terminal velocity is the maximum speed that an object to reach while in free fall. To calculate it set the gravitational force equal to the drag force</p>
			</div>
		</div>
		<div>
			<h2>Buoyant Force Equation</h2>
			<br>
			<p>{@html renderTextWithMathMode(`$$F_b = \\rho V g$$`)}</p>
			<p>
				Buoyant force is the upward force exerted by a fluid on an object placed in it. It's equal to the weight of the fluid displaced by the object.
			</p>

				<p>{@html renderTextWithMathMode(`<strong>$$F_b$$</strong> = Buoyant force (N)`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$\\rho$$</strong> = Density of fluid (kg/m³)`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$V$$</strong> = Volume of displaced fluid (m³)`)}</p>
				<p>{@html renderTextWithMathMode(`<strong>$$g$$</strong> = Gravitational acceleration (9.81 m/s²)`)}</p>

		</div>
	</div>

</div>
<div>
	<h1>Work and Energy</h1>

	<div>
		<h2>Work</h2>
		<p>{@html renderTextWithMathMode(`$$\\text{Work} = \\text{Force} \\cdot \\text{Distance} \\cdot \\cos(\\theta)$$`)}</p>
		<p>W = Work (Joules, J)</p>
		<p>F = Force (Newtons, N)</p>
		<p>d = Displacement (meters, m)</p>
		<p>θ = Angle between force and displacement</p>
	</div>

	<div>
		<h2>Kinetic Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E_k = \\frac{1}{2} m v^2$$`)}</p>
		<p>Ek = Kinetic Energy (J)</p>
		<p>m = Mass (kg)</p>
		<p>v = Velocity (m/s)</p>
	</div>

	<div>
		<h2>Gravitational Potential Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E_p = m g h$$`)}</p>
		<p>Ep = Gravitational Potential Energy (J)</p>
		<p>m = Mass (kg)</p>
		<p>g = Acceleration due to gravity (9.81 m/s²)</p>
		<p>h = Height above reference point (m)</p>
	</div>

	<div>
		<h2>Elastic Potential Energy</h2>
		<p>{@html renderTextWithMathMode(`$$E_e = \\frac{1}{2} k x^2$$`)}</p>
		<p>Eₑ = Elastic Potential Energy (J)</p>
		<p>k = Spring constant (N/m)</p>
		<p>x = Displacement from equilibrium (m)</p>
	</div>

	<div>
		<h2>Power</h2>
		<p>{@html renderTextWithMathMode(`$$P = \\frac{W}{t}$$`)}</p>
		<p>P = Power (Watts, W)</p>
		<p>W = Work done (J)</p>
		<p>t = Time taken (s)</p>
	</div>

	<div>
		<h2>Efficiency</h2>
		<p>{@html renderTextWithMathMode(`$$\\text{Efficiency} = \\frac{\\text{Useful Output Energy}}{\\text{Total Input Energy}} \\cdot 100\\%$$`)}</p>
		<p>Efficiency = Percentage of input energy converted into useful output</p>
	</div>
</div>
<div>
	<h1>Momentum</h1>
	<div>
		<p>{@html renderTextWithMathMode(`$$\\rho = mv$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$\\rho$$ = momentum`)}</p>
		<p>m = Mass</p>
		<p>v = Velocity</p>
		<br>
		<h2>Collisions</h2>
		<div>
			<h3>Elastic Collisions</h3>
			<p>Objects bounce off each other</p>
			<p>Kinetic Energy is conserved</p>
			<p>Momentum is conserved</p>
		</div>
		<div>
			<h3>Inelastic Collisions</h3>
			<p>Objects stick together</p>
			<p>Kinetic Energy is NOT conserved</p>
			<p>Momentum is conserved</p>
		</div>
		<p>Momentum before collision = momentum collision no matter what</p>
		<p>In 2 dimensions, the momentum is conserved in both axis individually</p>
	</div>
</div>
<div>
	<h1>Projectile Motion</h1>
	<p>Break down motion between x and y axis</p>
	<p><strong>x-axis:</strong> constant velocity from launch</p>
	<p><strong>y-axis:</strong> downward acceleration from gravity</p>
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
