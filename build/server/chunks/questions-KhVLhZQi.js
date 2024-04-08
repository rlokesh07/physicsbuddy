const questions = [
  {
    question: "A mass of 400 $$g$$ is connected to a spring on a frictionless surface, the spring constant is $$0.06 N cm^{-1} $$. What is the magnitude of acceleration when the mass is 20 $$cm$$ from equilibrium?",
    image: "/src/lib/images/HM0001.png",
    options: [
      "$$0.03 m s^{-2}$$",
      "$$0.06 m s^{-2}$$",
      "$$0.6 m s^{-2}$$",
      "$$3 m s^{-2}$$"
    ],
    answer: 3,
    difficulty: "easy",
    topic: "Harmonic Motion",
    id: "HM0001",
    explanation: [
      "Because the units on the spring constant and distance match ($$cm$$) we can simply multiply",
      "$$F = kx = 1.2 N$$",
      "Then use Newton's Second Law  ($$F=MA$$)",
      "$$a = \\frac{F}{m} = \\frac{1.2 N}{0.40kg} = 3 m s^{-2}$$"
    ]
  },
  {
    question: "A particle undergoes simple harmonic motion. Which of the following can be an expression of acceleration $$a$$ in terms of displacement $$x$$ and a constant value $$k$$?",
    image: null,
    options: [
      "$$a=k^2x$$",
      "$$a=-k^2x$$",
      "$$a=-kx^2$$",
      "$$a=kx^2$$"
    ],
    answer: 1,
    difficulty: "easy",
    topic: "Harmonic Motion",
    id: "HM0002",
    explanation: [
      "In order for something to be simple harmonic motions, the acceleration has to be proportional to the displacement, and the acceleration and displacement are in opposite directions (because the spring pulls in the opposite direction). That means your displacement needs to be linear, and a negative sign to make the result negative when x is positive"
    ]
  },
  {
    question: "Which graph shows how the object's acceleration $$a$$ varies with time $$t$$?",
    image: "/src/lib/images/HM0003.png",
    options: [
      "a",
      "b",
      "c",
      "d"
    ],
    answer: 3,
    difficulty: "easy",
    topic: "Harmonic Motion",
    id: "HM0003",
    explanation: [
      "There are a couple of ways to think about this question. The easiest is that the acceleration is at its maximum when the displacement is the farthest away, and according to Hooke's law, it should be in the opposite direction"
    ]
  },
  {
    question: "The graph below shows how the displacement of $$x$$ of a particle undergoing simple harmonic motion. Which graph shows the object's velocity $$v$$ varies with time $$t$$?",
    image: "/src/lib/images/HM0004.png",
    options: [
      "a",
      "b",
      "c",
      "d"
    ],
    answer: 2,
    difficulty: "easy",
    topic: "Harmonic Motion",
    id: "HM0004",
    explanation: [
      "There are a couple ways to think about this question. The easiest is knowing though conservation of energy that the maximum velocity is when displacement is 0, and according to Hooke's law, it needs to be in the opposite direction"
    ]
  }
];

export { questions as q };
//# sourceMappingURL=questions-KhVLhZQi.js.map
