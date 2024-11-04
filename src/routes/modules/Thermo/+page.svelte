<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<h1>Missing Thermal Concepts and Greenhouse Gas and Entropy</h1>
<div>
	<h1>Kinetic Theory</h1>
	<p>Kinetic theory states that at a microscopic level all matter is made from particles. They are always in motion and attracted to each other through the IMF. Because they are in motion they have kinetic energy, and because they have attractive forces they have potential energy. </p>
	<p>Adding or removing energy can either change the distance between the particles (PE) or the speed of the particles (KE). The internal energy is the sum of the kinetic energy and potential energy</p>
	<h2>{@html renderTextWithMathMode(`$$u = KE + PE$$`)}</h2>
	<p>{@html renderTextWithMathMode(`Kelvin: The SI unit of temperature. $$0 C  = 273.15 K$$, $$\\Delta C = \\Delta k$$`)}</p>
	<p>{@html renderTextWithMathMode(`Density is a substance’s mass per unit volume. $$P = \\frac{m}{v}$$ in either $$kg m^{-3}$$ or $$g cm ^{-3}$$`)}</p>
</div>

<div>
	<h1>Temperature Time Graphs</h1>
	<div>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302775949225361439/image.png?ex=67295826&is=672806a6&hm=5850105e04c9c89c76a7184f3982f84ea8a04e418196581923df0c812d74ce6d&">
	</div>
	<div>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302776447340908584/image.png?ex=6729589d&is=6728071d&hm=fc0ffed24bc9f47e56d0dfc632ef593edcd702fda93da1155b709443c6820504&">
	</div>
	<p>The moment where the graph is rising is an increase of kinetic energy with the temperature of the object. Given this is a closed container this will increase linearly. When the graph is in a straight line is when the potential energy is increasing in the form of a phase shift.</p>
	<p>A graph of the temperature over a function of time is called a heating curve and will be around the same for every substance</p>
	<h2>Specific Heat Capacity</h2>
	<p>{@html renderTextWithMathMode(`The specific heat capacity of a substance is the amount of energy required to heat 1 $$kg$$ of a substance by 1 degree celsius or kelvin (remember change in celsius is the same as change in kelvin).`)}</p>
	<h3>{@html renderTextWithMathMode(`$$c = \\frac{Q}{m \\Delta T}$$`)}</h3>
	<p>{@html renderTextWithMathMode(`Units of $$J kg^{-1} K^{-1}$$`)}</p>
	<p>Q is thermal energy. M is the mass of the object. C is the specific heat capacity. Delta T is the change in temperature (k or c).</p>
	<p>The phase a substance is in changes its specific heat capacity</p>

	<h2>Specific Latent Heat</h2>
	<p>The specific latent heats of fusion and vaporization are the energy needed to change the phase of 1 kg of a substance at its melting (fusion) or boiling point (vaporization).</p>
	<h3>{@html renderTextWithMathMode(`$$L = \\frac{Q}{m}$$`)}</h3>
	<p>{@html renderTextWithMathMode(`$$L_f$$ or $$L_v$$`)}</p>
	<p>{@html renderTextWithMathMode(`Units of $$J kg^{-1}$$`)}</p>
	<p>{@html renderTextWithMathMode(`Q is thermal energy. M is mass. $$L_f$$ is specific latent heat of fusion while $$L_v$$ is specific latent heat of vaporization`)}</p>
	<p>Note that fusion is the same as melting, and vaporization is the same as liquidating from a gaseous state</p>

	<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302778655176527923/image.png?ex=67295aab&is=6728092b&hm=257bb772d6b96de250d839b0d58febf002e70ac84553a915d50178b7c4c0e451&">

	<p>{@html renderTextWithMathMode(`The gradients/slopes at the graph where kinetic energy is increasing is quantified by the formula $$Q=m c \\Delta t$$. The gradient of the line is the change in temperature over time, and objects with a higher specific heat capacity will need more energy to heat up, in turn decreasing the gradient.`)}</p>
	<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302779057238311002/image.png?ex=67295b0b&is=6728098b&hm=6a3b8203e9df4eac36ad88c4bbf97e0805e8fb05f103eb69d2e44fa2c8b3d559&">
	<p>{@html renderTextWithMathMode(`When the object is going through a phase change the temperature of the line is staying the same, and the gradient is 0. $$Q = mL$$ applies here. The form with the highest specific latent heat will have a longer line. Keep in mind the specific latent heat of vaporization is always higher than the specific latent heat of fusion.`)}</p>
</div>
<div>
	<p>Two objects that are touching each other will transfer energy until they are in thermal equilibrium (at the same temperature). Due to the conservation of energy, the thermal energy lost by the otter one will be the same as the thermal energy gained by the colder one.</p>
	<p>For questions that look like that, use the formula</p>
	<h3>{@html renderTextWithMathMode(`$$Q_{out} = Q_{in} $$`)}</h3>
	<h3>{@html renderTextWithMathMode(`$$ -m_1 c_w \\Delta T = m_2 c_w \\Delta T $$`)}</h3>
	<p>It is negative because the one losing temperature has a negative thermal energy</p>
</div>
<div>
	<h1>Gas Laws</h1>
	<p>Gasses can be described by their pressure, temperature, and volume. The temperature of a gas is directly proportional to its average kinetic energy. Pressure of a gas is the force of a gas against a container's walls. The volume of a gas is the space occupied by a gas. Because of the collisions between particles, this is the volume of the container it is in.</p>
	<h2>Ideal Gasses</h2>
	<p>Particles are identical</p>
	<p>Particles spacing are much larger than the particles themselves</p>
	<p>No intermolecular forces</p>
	<p>Elastic collision</p>
	<p>In other words, if they have a high temperature, low pressure, and low density they can be considered ideal in this scope</p>
	<h2>Moles</h2>
	<p>{@html renderTextWithMathMode(`1 mole is $$6.02 * 10^{23}$$ particles`)}</p>
	<p>The molar mass is the mass of one mole of a substance</p>
	<h2>Pressure</h2>
	<h4>{@html renderTextWithMathMode(`Pressure = $$F/A$$`)}</h4>
	<h4>{@html renderTextWithMathMode(`Pascal = $$N m^{-2}$$`)}</h4>
	<h4>{@html renderTextWithMathMode(`Pressure = $$\\frac{1}{3} \\rho \\overline{v}^2$$`)}</h4>

	<p>Because the IMF of ideal gasses is negligible, all ideal gasses have a PE of 0. This means that the internal energy is just the kinetic energy.</p>
	<h3>{@html renderTextWithMathMode(`$$\\overline{E}_k = \\frac{3}{2} k_b T$$`)}</h3>
	<p>Kinetic energy average = 3/2 Boltzmann's constant times temperature</p>
	<p>Therefor, the internal energy (total kinetic energy) can be determined by the average kinetic energy multiplied by the number of particles</p>
	<h3>{@html renderTextWithMathMode(`$$u = \\frac{3}{2} k_b T N$$`)}</h3>
	<p>Internal Energy = 3/2 Boltzmann's constant times temperature times number of particles</p>
	<p>You can also represent this using a different formula using the number of moles</p>
	<h3>{@html renderTextWithMathMode(`$$u = \\frac{3}{2} R T n$$`)}</h3>
	<p>Internal Energy = 3/2 gas constant times temperature times number of moles</p>
<p>Keep in mind that</p>
	<h3>{@html renderTextWithMathMode(`$$K_b = \\frac{R}{N_a}$$`)}</h3>
</div>
<div>
	<h1>Gas Laws</h1>
	<div>
		<h2>Boyle’s Law (Isothermal)</h2>
		<p>Same temperature</p>
		<p>Pressure is proportional to 1/volume</p>
		<h3>{@html renderTextWithMathMode(`$$P_1 V_1 = P_2 V_2$$`)}</h3></div>
	<div>
		<h2>Charles' Law (Isobaric)</h2>
		<p>Same pressure</p>
		<p>Volume proportional to temperature</p>
		<h3>{@html renderTextWithMathMode(`$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$`)}</h3>
		<p></p>
	</div>
	<div>
		<h2>Gay-Lussac’s Law (Isochoric\isovolumetric)</h2>
		<p>Same volume</p>
		<p>The pressure is proportional to temperature</p>
		<h3>{@html renderTextWithMathMode(`$$\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$$`)}</h3>
	</div>
	<div>
		<h2>Ideal Gas Equation</h2>
		<h3>{@html renderTextWithMathMode(`$$PV = nRT$$`)}</h3>
		<p>{@html renderTextWithMathMode(`P = pressure in Pascals/$$Pa$$/$$nm^{-2}$$`)}</p>
		<p>{@html renderTextWithMathMode(`V = volume in $$m^3$$`)}</p>
		<p>n = number of moles</p>
		<p>R = gas constant</p>
		<p>T = temperature in kelvin</p>
	</div>

</div>
<div>
	<h1>First Law of Thermodynamics</h1>
	<h2>{@html renderTextWithMathMode(`$$Q = \\Delta U + w$$`)}</h2>
	<p>Q is thermal energy. Delta U is the change in internal energy. W is the work done by the gas.</p>
	<p>If thermal energy enters a system, Q is set as a positive value, while leaving makes Q a negative value.</p>
	<p>The increase in temperature leads to a positive delta U while a decrease in temperature leads to a negative delta U</p>
	<p>If the volume expands the work is positive, and if it decreases the work is negative. It is represented by the volume under a pressure volume gas.</p>
</div>
<div>
	<h1>Pressure Volume Graphs</h1>
	<div>
		<h2>Isochoric</h2>
		<p>Volume is constant</p>
		<p>Gay-Lussac's Law</p>
		<p>Vertical line on volume pressure graph</p>
		<p>No work done</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302806190698397706/image.png?ex=67297450&is=672822d0&hm=11fa5b73758b52effdb24d9089aea9c148c2b2485e0a328171e7b393356f88a6&">
	</div>
	<div>
		<h2>Isothermal</h2>
		<p>Constant temperature</p>
		<p>Boyle’s law</p>
		<p>Hotter isothermal processes create a line up and to the right of cooler ones</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302807174195708016/image.png?ex=6729753b&is=672823bb&hm=28f20e82f3d18c7e6434f95fa0001c57cf34e2a075180762efe2da415cdcdf36&">
	</div>
	<div>
		<h2>Atiabatic</h2>
		<p>No thermal energy in or out</p>
		<p>Not possible in real life</p>
		<p>{@html renderTextWithMathMode(`$$Q = 0$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$PV^{\\frac{5}{3}} = constant$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$$`)}</p>
		<p>Adiabatic curves are much steeper than isothermal ones</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1302807772886470738/image.png?ex=672975ca&is=6728244a&hm=a87b9e5392e179e768e8c8f098eeea939e4f53aa3fb327c91e9ad14773b070b3&">
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