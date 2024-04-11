<script lang="ts">


	import { authHandlers } from '../../store/store';

	let email = "";
	let password = "";
	let confirmPass = "";
	let error = false;
	let register = false;
	let authenticating = false;

	async function handleAuthenticate() {
		if (authenticating) {
			return;
		}
		if (!email || !password || (register && !confirmPass)) {
			error = true;
			return;
		}
		authenticating = true;

		try {
			if (!register) {
				await authHandlers.login(email, password);
				window.location.href = "/"
			} else {
				await authHandlers.signup(email, password);
				window.location.href = "/"
			}
		} catch (err) {
			console.log("There was an auth error", err);
			error = true;
			authenticating = false;
		}
	}

	function handleRegister() {
		register = !register;
	}
</script>

<div class="authContainer">
	<form>
		<h1>{register ? "Register" : "Login"}</h1>
		{#if error}
			<p class="error">The information you have entered is not correct</p>
		{/if}
		<label>
			<p class={email ? " above" : " center"}>Email</p>
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
		<label>
			<p class={password ? " above" : " center"}>Password</p>
			<input
				bind:value={password}
				type="password"
				placeholder="Password"
			/>
		</label>
		{#if register}
			<label>
				<p class={confirmPass ? " above" : " center"}>
					Confirm Password
				</p>
				<input
					bind:value={confirmPass}
					type="password"
					placeholder="Confirm Password"
				/>
			</label>
		{/if}

		<button on:click={handleAuthenticate} type="button" class="submitBtn">
			{#if authenticating}
				<i class="fa-solid fa-spinner loadingSpinner" />
			{:else}
				Submit
			{/if}
		</button>
	</form>
	<div class="options">
		{#if register}
			<div>
				<p>Already have an account? </p>
				<p class="clicker" on:click={handleRegister} on:keydown={() => {}}>Login</p>
			</div>
		{:else}
			<div class="registerLogin">
				<p>Don't have an account? </p>
				<p class="clicker " on:click={handleRegister} on:keydown={() => {}}>Register</p>
			</div>
		{/if}
	</div>
</div>

<style>

    .registerLogin {
        display: flex;
        align-items: center;
				gap: 5px;
    }

		.clicker{
        user-select: none;
		}

    .authContainer{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 4px;
	}
	form{
			display: flex;
			flex-direction: column;
			width: 400px;
			max-width: 100%;
			margin: 0 auto;
	}

  input{
      height: 40px;
      width: 100%;
			border: black solid 2px;
      border-radius: 3px;
      font-size: 14px;
			background: white;
  }
  button {
      margin-top: 15px;
      width: 100%;
      background-color: #ffffff;
      color: #080710;
      font-size: 18px;
      font-weight: 600;
      border-radius: 3px; /* Match the border radius of the input fields */
      height: 40px; /* Match the height of the input fields */
      cursor: pointer;
  }
	.clicker:hover{
			color: hsla(204, 41%, 25%, 1);
			text-decoration: underline;
	}

</style>