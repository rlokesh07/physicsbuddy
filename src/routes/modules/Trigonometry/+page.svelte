<script>
	import { renderTextWithMathMode } from '$lib/KaTeX';
	import Draggable from '$lib/components/Draggable.svelte';

</script>
<div class="container">
	<h1>Trigonometry</h1>

	<div class="trigFunctions">
		<h2>Trig Functions</h2>
		<img alt="trig functions" src="https://cdn.discordapp.com/attachments/744944331542233173/1248009130111799369/image.png?ex=66f47113&is=66f31f93&hm=07c44b2fd8bf177f729c103c8a293f0c55b014c6124c6f3fb0f40a400ebd6241&"/>
		<p>{@html renderTextWithMathMode(`From this we can infer that $$csc$$ is the inverse of $$sin$$ and $$sec$$ is the inverse of $$cos$$. As seen in the data booklet`)}</p>
		<img alt="data booklet reciprocal" src="https://cdn.discordapp.com/attachments/744944331542233173/1248012422992892059/image.png?ex=66f47424&is=66f322a4&hm=2b3661e8d624b387c6783a8ba43ceda9b7ff58296b346058ff66c487e12b8ec6&"/>
		<p>{@html renderTextWithMathMode(``)}</p>

	</div>

	<div class="pythagoreanIdentities">
			<h2>Pythagorean Identities</h2>
			<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248012952452464671/image.png?ex=66f474a2&is=66f32322&hm=a1ef008ee445687254a7a4bbf2f5de91b58f10d2efb01cceda04e18bd4320304&" />
			<p>This comes from creating a triangle using the unit circle, with the hypotenuse being 1</p>
			<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248013360310780045/image.png?ex=66f47504&is=66f32384&hm=de1593b53549b93321fa788f637a401fa2b0146c622e2a0b29558e656a938aae&" />
	</div>

	<div class="inverseTrig">
		<h2>Inverse Trigonometric Functions</h2>
		<p>In order to ensure that the Invere trigonometric functions are one to one, there are special range restrictions put on the functions to prevent one input yielding multiple outputs</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248013678742339684/image.png?ex=66f4754f&is=66f323cf&hm=24faa345d4ceb98d9fd1c45af39f23b1846bbda9a443b0a3b1cfb0c00524ef56&" />
		<p>{@html renderTextWithMathMode(`$$arcsin$$ and $$arctan$$ has a domain restriction of $$[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$$ and $$arccos$$ has a range of $$[0,\\pi]$$. This is to ensure that all values -1 to 1 are covered`)}</p>
	</div>

	<div class="compoundAngles">
		<h2>Compound Angle Identities</h2>
		<p>As seen in the data booklet</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248014259141607495/image.png?ex=66f475da&is=66f3245a&hm=33812509f7091209cbbd71119050ffdd34cd778cc685b722d8b3a67767d18c50&" />
		<p>{@html renderTextWithMathMode(`Keep in mind that the sign for the $$cos$$ identity is the opposite of what if inputted`)}</p>
	</div>

	<div class="trigGraphs">
		<h2>Trig Graphs</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248014887163133962/image.png?ex=66f47670&is=66f324f0&hm=3d0113175d4ef58be617b951f12203b7bd02d59ac94d3ca03e9a4869bb928bd8&" />
		<p>{@html renderTextWithMathMode(`A is the amplitude of the graph`)}</p>
		<p>{@html renderTextWithMathMode(`The period is $$\\frac{2\\pi}{b}$$ for $$sin$$ and $$cos$$, and $$\\frac{\\pi}{b}$$ for $$tan$$`)}</p>
		<p>{@html renderTextWithMathMode(`The vertical shift is $$d$$`)}</p>
		<p>{@html renderTextWithMathMode(`The horizontal shift is $$\\frac{c}{b}$$`)}</p>
	</div>

	<div class="reciprocalFunction" >
		<h2>Reciprocal Functions</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248015472155299850/image.png?ex=66f476fb&is=66f3257b&hm=7e3816fc67fed74f35e01f192cf739873f045e987c58617faf48e3704123b740&" />
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248015548214935593/image.png?ex=66f4770d&is=66f3258d&hm=ac935534ebb914df57fd3ebce8066af261498d5b45457da44492a1d18397f4d7&"/>
	</div>
	<div class="eofunctions">
		<h2>Even and Odd Functions</h2>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248024268332335176/image.png?ex=66f47f2c&is=66f32dac&hm=a14dbd0005ba173a2023becd53a10e4e1c22bf2f6abd9814ec5055d6bc4dcad4&" />
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248024424947646494/image.png?ex=66f47f52&is=66f32dd2&hm=b603451eed08be41964573b6db305b2bbc3f6e96188d1a267655969387ddec1a&" />

	</div>
	<div class="inverseFunctions" >
		<h2>Inverse Functions</h2>
		<p>A function has an inverse if and only if it is one-to-one</p>
		<p>A functions inverse is by switching the x and y</p>
		<img src="https://cdn.discordapp.com/attachments/744944331542233173/1248029269171634296/image.png?ex=66f483d5&is=66f33255&hm=d8bcb531fbc63890d6959acc13c9afc22a618732d6d47224fba43670c8741ff9&">
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