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
	}
	h2{

	}
</style>