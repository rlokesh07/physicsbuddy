<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
</script>
<div class="container">
	<h1>Limits and Differentiation</h1>
	<div>
		<h2>Limits</h2>
		<h4>Direct Substitution</h4>
		<p>For regular continuous functions, you can sub in a value c</p>
		<p>{@html renderTextWithMathMode(`$$ \\lim_{x\\to c} f(x) = f(c)$$`)}</p>
		<h4>Indeterminate Form</h4>
		<p>If direct substitution leads to any of the forms below</p>
		<img class="wideImage" src="https://cdn.discordapp.com/attachments/744944331542233173/1249379822979911711/image.png?ex=66671722&is=6665c5a2&hm=817e709d49a8e8ee886f8e40cf7ed158b0497055d54ad78a2410951cf2066530&">
		<p>That means that you need to change something about the expression</p>
		<h4>Special Trigonometric Fucntions</h4>
		<p>{@html renderTextWithMathMode(`$$ \\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$$ and $$ \\lim_{x\\to 0} \\frac{1 - \\cos x}{x} = 0$$`)}</p>
	</div>
	<div>
		<h2>Derivatives</h2>
		<h4>First Principles</h4>
		<p>If you need to solve using first principles then you need to use the following equation</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{dy}{dx} = \\lim_{x\\to 0} \\frac{f(x + h) - f(x)}{h}$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{dy}{dx}$$ represents the change in y with respect to the change in x`)}</p>
		<h4>Constant Rule</h4>
		<p>The derivative of a constant function if 0 because it is not changing at all</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[c] = 0$$`)}</p>
		<h4>Power Rule</h4>
		<p>Multiply the function by its power, then subtract the power by 1</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[cx^n] = cnx^{n-1}$$`)}</p>
		<h4>Sum and Difference Rules</h4>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$$`)}</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[f(x) - g(x)] = f'(x) - g'(x)$$`)}</p>
		<h4>Derivative of Sine and Cosine</h4>
		<p>Whenever you are doing calculus make sure you use radians</p>
		<img src="https://www.allaboutcircuits.com/uploads/articles/trigonometric-derivatives-equation.jpg">
		<h4>Kinematics</h4>
		<p>The derivative of displacement is velocity and the derivative of velocity is acceleration</p>
		<h4>Chain Rule</h4>
		<p>If you have a function within another function, you take the derivative of the outside then multiplied by the derivative of the inside</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) * g'(x)$$`)}</p>
		<p>You can do this with any number of functions within each other</p>
		<h4>Product Rule</h4>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[f(x)*g(x)] = f'(x)g(x) * f(x)g'(x)$$`)}</p>
		<h4>Quotient Rule</h4>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[\\frac{f(x)}{g(x)}] = \\frac{g(x)f'(x) - f(x)g'(x)}{g(x)^2}$$`)}</p>
		<h4>Implicit Differentiation</h4>
		<p>If you have a different variable than what you are differentiating against you multiply that by the derivative of that variable with respect to the variable you deriving against</p>
		<p>{@html renderTextWithMathMode(`$$\\frac{d}{dx}[g(y)] = g'(y)\\frac{dy}{dx}$$`)}</p>
	</div>

</div>
<style>
    div{
        padding-bottom: 40px;
    }
    img{
        height: 200px;
    }
		.wideImage{
				height: 100%;
				width: 600px;
		}
</style>
