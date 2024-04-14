<script lang="ts">

	import { authHandlers, authStore } from "../store/store";
</script>
<div class="welcomeSign">
	<h1>
		Welcome to Study Sign!
	</h1>




</div>
<div>

	<h2>Hello {authHandlers.getEmail()}!</h2>

</div>

<style>
	div{
			display: flex;
			justify-content: center;
			align-items: center;
	}
	h1{
			font-size: 50px;
      text-shadow: 4px 4px 4px 4px hsla(204, 41%, 20%, 1);

	}
	h2{
			color: black;
	}
</style>