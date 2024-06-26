const questions = [
	{
		question:
			'A mass of 400 $$g$$ is connected to a spring on a frictionless surface, the spring constant is $$0.06 N cm^{-1} $$. What is the magnitude of acceleration when the mass is 20 $$cm$$ from equilibrium?',
		image: '/src/lib/images/HM0001.png',
		options: ['$$0.03 m s^{-2}$$', '$$0.06 m s^{-2}$$', '$$0.6 m s^{-2}$$', '$$3 m s^{-2}$$'],
		answer: 3,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0001',
		explanation: [
			'Because the units on the spring constant and distance match ($$cm$$) we can simply multiply',
			'$$F = kx = 1.2 N$$',
			"Then use Newton's Second Law  ($$F=MA$$)",
			'$$a = \\frac{F}{m} = \\frac{1.2 N}{0.40kg} = 3 m s^{-2}$$'
		]
	},
	{
		question:
			'A particle undergoes simple harmonic motion. Which of the following can be an expression of acceleration $$a$$ in terms of displacement $$x$$ and a constant value $$k$$?',
		image: null,
		options: ['$$a=k^2x$$', '$$a=-k^2x$$', '$$a=-kx^2$$', '$$a=kx^2$$'],
		answer: 1,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0002',
		explanation: [
			'In order for something to be simple harmonic motions, the acceleration has to be proportional to the displacement, and the acceleration and displacement are in opposite directions (because the spring pulls in the opposite direction). That means your displacement needs to be linear, and a negative sign to make the result negative when x is positive'
		]
	},
	{
		question: "Which graph shows how the object's acceleration $$a$$ varies with time $$t$$?",
		image: '/src/lib/images/HM0003.png',
		options: ['a', 'b', 'c', 'd'],
		answer: 3,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0003',
		explanation: [
			"There are a couple of ways to think about this question. The easiest is that the acceleration is at its maximum when the displacement is the farthest away, and according to Hooke's law, it should be in the opposite direction"
		]
	},
	{
		question:
			"The graph below shows how the displacement of $$x$$ of a particle undergoing simple harmonic motion. Which graph shows the object's velocity $$v$$ varies with time $$t$$?",
		image: '/src/lib/images/HM0004.png',
		options: ['a', 'b', 'c', 'd'],
		answer: 2,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0004',
		explanation: [
			"There are a couple ways to think about this question. The easiest is knowing though conservation of energy that the maximum velocity is when displacement is 0, and according to Hooke's law, it needs to be in the opposite direction"
		]
	},
	{
		question:
			'A particle is moving in a straight line with an acceleration proportional to its displacement and\nopposite to its direction. What are the velocity and the acceleration of the particle when it is at its\nmaximum displacement?',
		image: '/src/lib/images/HM0004.png',
		options: ['a', 'b', 'c', 'd'],
		answer: 2,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0005',
		explanation: [
			"According to conservation of energy, when the displacement is maximum, the velocity is 0. We can use Hooke's law to see that when the displacement is the largest, the force is the largest, meaning the acceleration is at its maximum"
		]
	},
	{
		question:
			'A particle undergoes simple harmonic motion. Which quantities of the motion can be simultaneously zero?',
		image: null,
		options: [
			'Displacement and velocity',
			'Displacement and acceleration',
			'Velocity and acceleration',
			'Displacement, velocity and acceleration'
		],
		answer: 1,
		difficulty: 'easy',
		topic: 'Harmonic Motion',
		id: 'HM0006',
		explanation: [
			"According to Hooke's law, if the displacement of an object is 0, the force acting on it is 0. That means there is no acceleration. If the object is going though simple harmonic motion, then we know according to the conservation of energy, if the potential elastic energy is 0, the kinetic energy is at its max, meaning the velocity is non-zero"
		]
	},
	{
		question:
			'A particle undergoes simple harmonic motion of amplitude $$x_0$$ and frequency $$f$$. What is the average speed of the particle during one oscillation?',
		image: null,
		options: ['0', '$$fx_0$$', '$$2fx_0$$', '$$4fx_0$$'],
		answer: 3,
		difficulty: 'medium',
		topic: 'Harmonic Motion',
		id: 'HM0007',
		explanation: [
			'Keep in mind the question is asking about speed and not velocity. Whenever dealing with a question like this, think about the formula for speed, distance/time',
			'We know that because our amplitude is $$x_0$$, then our total distance traveled is that times 4',
			'We also know the total time taken is $$\\frac{1}{f}, so dividing those two gives us $$4fx_0$$'
		]
	}
];
export { questions as q };
