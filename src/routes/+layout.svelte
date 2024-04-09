<script lang="ts">
	import { onMount } from 'svelte';0
	import { auth, db } from '$lib/firebase/firebase';
	import {getDoc, doc, setDoc} from 'firebase/firestore';
	import {authStore} from '../store/store';

	const nonAuthRoutes= ['/login']

	onMount(() =>{
		console.log("Mounting");
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
				const currentPath = window.location.pathname;

				if(!user && !nonAuthRoutes.includes(currentPath)){
						window.location.href = "/login"
						return
				}

				if (user && currentPath =='/login'){
						window.location.href = "/"
						return
				}

				if (user){
					let dataToSetToStore;
					const docRef = doc(db, 'users', user.uid)
					const docSnap = await getDoc(docRef)

					if(!docSnap.exists()){
						const userRef = doc(db, 'users', user.uid);
						dataToSetToStore = {
							email: user.email
						}
						await setDoc(
							userRef,
							dataToSetToStore,
							{ merge: true}
						)
					} else {
						const userData = docSnap.data()
						dataToSetToStore = userData;
					}

					authStore.update((curr) => {
						return {
							...curr,
							user,
							data: dataToSetToStore,
							loading: false,
						};
					});
				}
				return unsubscribe()

		})
	})
</script>

<nav>
	<a href="/">Physics Buddy</a>

	<div class="modes">
		<a href="/HarmonicMotion">Harmonic Motion</a>
	</div>

	<a href="/account">Account</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
	}

	a {
		font-family: system-ui;
		color: inherit;
		text-decoration: none;
		border: 2px hidden #000; /* Border style */
		border-radius: 3px;
		outline: 2px solid grey; /* Outline style */
		outline-offset: 4px; /* Offset value */
	}

	.modes {
		display: flex;
		gap: 1em;
	}
</style>
