<script>

	import { renderTextWithMathMode } from '$lib/KaTeX';
	import Draggable from '$lib/components/Draggable.svelte';
</script>

<div class="container" >

	<h1>Complex Numbers</h1>
	<div>
		<h2>Synthetic Division</h2>
		<img src="https://mathbitsnotebook.com/Algebra2/Polynomials/synpicN.jpg">
	</div>
	<div>
		<h2>Remainder Theorem</h2>
		<p>{@html renderTextWithMathMode(`If a polynomial function $$f(x)$$ is divided by $$(ax - b)$$ then the remainder is $$f(\\frac{b}{a})$$`)}</p>
	</div>
	<div>
		<h2>Factor Theorem</h2>
		<p>{@html renderTextWithMathMode(`If $$f(\\frac{b}{a})$$, then $$(ax - b)$$ is a factor of $$f(x)$$`)}</p>
	</div>
	<div>
		<h2>Sum and Product of Roots Quadratic</h2>
		<p>{@html renderTextWithMathMode(`If $$p$$ and $$q$$ are roots of a quadratic equation $$ax^2 + bx + c$$ then`)}</p>
		<p>{@html renderTextWithMathMode(`$$p + q = -\\frac{b}{a}$$ and $$pq = \\frac{c}{a}$$`)}</p>

	</div>
	<div>
		<h2>Sum and Products of Roots Polynomials</h2>
		<p>{@html renderTextWithMathMode(`$$a_nx^n+ a_{a-1}x^{n-1}+...+a_1x+a_0 = 0$$`)}</p>
		<p>{@html renderTextWithMathMode(`the sum of the roots is $$-\\frac{a_{a-1}}{a_n}$$`)}</p>
		<p>{@html renderTextWithMathMode(`the products of roots is $$(-1)^n\\frac{a_0}{a_n}$$`)}</p>
	</div>
	<div>
		<h2>Cartesian Form</h2>
		<h4>Form</h4>
		<p>{@html renderTextWithMathMode(`$$z = a + bi$$`)}</p>
		<h4>Conjugate</h4>
		<p>{@html renderTextWithMathMode(`$$z^* = a - bi$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$zz^* = a^2 + b^2$$`)}</p>
	</div>

	<div>
		<h2>Modulus Agreement Form</h2>
		<h4>Modulus</h4>
		<p>{@html renderTextWithMathMode(`modulus = $$|z| = \\sqrt{a^2+b^2}$$`)}</p>
		<h4>Agreement</h4>
		<p>{@html renderTextWithMathMode(`agreement = $$\\theta = arctan(\\frac{b}{a})$$`)}</p>
		<h4>Polar Form</h4>
		<p>{@html renderTextWithMathMode(`$$z = r(\\cos\\theta + i\\sin\\theta) = r * cis(\\theta)$$`)}</p>
		<h4>Euler Form</h4>
		<p>{@html renderTextWithMathMode(`$$cis(\\theta) = e^{i\\theta}$$`)}</p>
	</div>

	<div>
		<h2>Complex Roots</h2>
		<p>You can solve for complex roots when your determinate of a quadratic is negative answer</p>
		<p>{@html renderTextWithMathMode(`You can also solve knowing that $$a^2 + b^2 = (a + bi)(a - bi)$$`)}</p>
	</div>
	<div>
		<h2>De Moivre's Theorem</h2>
		<p>{@html renderTextWithMathMode(`De Moivre's: $$(r(cis(\\theta)))^n = r^n(cis(n\\theta))$$`)}</p>
		<p>{@html renderTextWithMathMode(`You can solve the same thing using the binomial expansion of $$(\\cos\\theta + i \\sin\\theta)^n$$`)}</p>
	</div>
	<div>
		<h2>Complex Roots of Number</h2>
		<p>{@html renderTextWithMathMode(`The solutions of $$z^n = w$$ form a regular n-gon with vertices on a circle of radius $$|z|$$ centered at the origin`)}</p>
		<h4>Roots of Unity</h4>
		<p>{@html renderTextWithMathMode(`the roots of unity are the solutions of $$z^n = 1$$`)}</p>
		<p>{@html renderTextWithMathMode(`the roots are $$1, cis(\\frac{2\\pi}{n}), cis(\\frac{4\\pi}{n}), ... cis(\\frac{2(n - 1)\\pi}{n})$$`)}</p>
	</div>

</div>

<style>
    div{
        padding-bottom: 40px;
    }
    img{
        height: 200px;
    }
</style>