<script lang="ts">
	import '../styles.css';
	import { onMount } from 'svelte';
	import { auth, db } from '$lib/firebase/firebase';
	import { getDoc, doc, setDoc } from 'firebase/firestore';
	import { authStore } from '../store/store';

	const nonAuthRoutes = ['/login'];

	onMount(() => {
		console.log('Mounting');
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			const currentPath = window.location.pathname;

			if (!user && !nonAuthRoutes.includes(currentPath)) {
				window.location.href = '/login';
				return;
			}

			if (user && currentPath == '/login') {
				window.location.href = '/';
				return;
			}

			if (user) {
				let dataToSetToStore;
				const docRef = doc(db, 'users', user.uid);
				const docSnap = await getDoc(docRef);

				if (!docSnap.exists()) {
					const userRef = doc(db, 'users', user.uid);
					dataToSetToStore = {
						email: user.email
					};
					await setDoc(userRef, dataToSetToStore, { merge: true });
				} else {
					const userData = docSnap.data();
					dataToSetToStore = userData;
				}

				authStore.update((curr) => {
					return {
						...curr,
						user,
						data: dataToSetToStore,
						loading: false
					};
				});
			}
			return unsubscribe();
		});
	});
</script>

<nav>
	<a href="/">Study Sign</a>

	<div class="modes">
		<a href="/Physics">Physics</a>
		<a href="/Math">Math</a>
		<a href="/Chemistry">Chemistry</a>
	</div>

	<a href="/account">Account</a>
</nav>

<slot />

<style>
	nav {
		display: flex;
		width: 100% - 40px;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		background: hsla(204, 41%, 25%, 1);
		border: #656565 solid 3px;
		padding: 10px;
	}

	a {
		font-family: system-ui;
		font-weight: bold;
		font-size: 25px;
		color: white;
		text-decoration: none;
		text-shadow: 2px 2px hsla(80, 0%, 50%, 1);
	}

	a:hover {
		text-decoration: underline;
		text-decoration-thickness: 5px;
		text-decoration-skip-ink: none;
	}
	.modes {
		display: flex;
		gap: 3em;
	}
</style>
