<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
	import Draggable from '$lib/components/Draggable.svelte';

</script>
<div class="container">
	<h1>Trigonometry</h1>

	<div class="trigFunctions">
		<h2>Trig Functions</h2>
		<img alt="trig functions" src="https://cdn.discordapp.com/attachments/744944331542233173/1248009130111799369/image.png?ex=66621a93&is=6660c913&hm=e8444d5bb34a9f906d2d37e496b757fa4081a1e789c7487020e3757bbc26fc18&"/>
		<p>{@html renderTextWithMathMode(`From this we can infer that $$csc$$ is the inverse of $$sin$$ and $$sec$$ is the inverse of $$cos$$. As seen in the data booklet`)}</p>
		<img alt="data booklet reciprocal" src="https://cdn.discordapp.com/attachments/744944331542233173/1248012422992892059/image.png?ex=66621da4&is=6660cc24&hm=d3812c6fbd16d5de34e7509fcc49bac740d2d8d006df01fa0c846b0b0981f15e&"/>
		<p>{@html renderTextWithMathMode(``)}</p>

	</div>

	<div class="pythagoreanIdentities">
			<h2>Pythagorean Identities</h2>
			<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248012952452464671/image.png?ex=66621e22&is=6660cca2&hm=7c03b72af370219c77a9db192e8f57d140da8bdc039f5d29041931f0d2fb4a06&" />
			<p>This comes from creating a triangle using the unit circle, with the hypotenuse being 1</p>
			<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248013360310780045/image.png?ex=66621e84&is=6660cd04&hm=cd467c6def405fa28122279de2acb2348c7ed0d1dea3afa3ad8e4b1c8c0c1bb4&" />
	</div>

	<div class="inverseTrig">
		<h2>Inverse Trigonometric Functions</h2>
		<p>In order to ensure that the Invere trigonometric functions are one to one, there are special range restrictions put on the functions to prevent one input yielding multiple outputs</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248013678742339684/image.png?ex=66621ecf&is=6660cd4f&hm=225ba4ac37bc23167b33336836c5de05f179bcc116743a3d76db58b9c26fc6b9&" />
		<p>{@html renderTextWithMathMode(`$$arcsin$$ and $$arctan$$ has a domain restriction of $$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$$ and $$arccos$$ has a range of $$[0,\\pi]$$. This is to ensure that all values -1 to 1 are covered`)}</p>
	</div>

	<div class="compoundAngles">
		<h2>Compound Angle Identities</h2>
		<p>As seen in the data booklet</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248014259141607495/image.png?ex=66621f5a&is=6660cdda&hm=50d0a1f3a0d54883958ddc7afb41d7bcf48bcbef991427e070fbd60cae826704&" />
		<p>{@html renderTextWithMathMode(`Keep in mind that the sign for the $$cos$$ identity is the opposite of what if inputted`)}</p>
	</div>

	<div class="trigGraphs">
		<h2>Trig Graphs</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248014887163133962/image.png?ex=66621ff0&is=6660ce70&hm=a472b529f7f419654fabce627ca71eb6eb9f6df8ff09192fedc5100f5c26a959&" />
		<p>{@html renderTextWithMathMode(`A is the amplitude of the graph`)}</p>
		<p>{@html renderTextWithMathMode(`The period is $$\\frac{2\\pi}{b}$$ for $$sin$$ and $$cos$$, and $$\\frac{\\pi}{b}$$ for $$tan$$`)}</p>
		<p>{@html renderTextWithMathMode(`The vertical shift is $$d$$`)}</p>
		<p>{@html renderTextWithMathMode(`The horizontal shift is $$\\frac{c}{b}$$`)}</p>
	</div>

	<div class="reciprocalFunction" >
		<h2>Reciprocal Functions</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248015548214935593/image.png?ex=6662208d&is=6660cf0d&hm=fa12310cc9dbe767ee996298ab2d2ad50f8105ceb2b9ccf4684a31b9b070ac73&" />
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248015701277413436/image.png?ex=666220b2&is=6660cf32&hm=b7219a7c91e4eaed34f10d0fb82e16c986c7319f3c0dad6beaf99d7108a34244&"/>
	</div>
	<div class="eofunctions">
		<h2>Even and Odd Functions</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248027844542468118/image.png?ex=66622c01&is=6660da81&hm=c1a1b1253e03f17c7c18eb48d443d273479066a83653cf721076ffade21d57f0&" />
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248028479929454613/image.png?ex=66622c98&is=6660db18&hm=91cc894efafe0d3353506415225129263262c34231959e45e0638331290ed5ed&" />

	</div>
	<div class="inverseFunctions" >
		<h2>Inverse Functions</h2>
		<p>A function has an inverse if and only if it is one-to-one</p>
		<p>A functions inverse is by switching the x and y</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248029269171634296/image.png?ex=66622d55&is=6660dbd5&hm=8ad244e9bdbf291df2178015cb903b763a64d66f6d9ee577864902acf8edd9ec&">
	</div>
</div>

<style>
		div{
				padding-bottom: 80px;
		}
    img{
        height: 200px;
    }
</style>