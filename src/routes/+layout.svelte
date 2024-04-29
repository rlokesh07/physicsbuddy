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

<nav class="navbar navbar-expand-md bg-body py-3">
	<div class="container"><a class="navbar-brand d-flex align-items-center" href="/"><span>To Teach a Monkey</span></a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-3"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navcol-3" style="padding-right: 1px;">
			<ul class="navbar-nav mx-auto">
				<li class="nav-item"><a class="nav-link active" href="/Physics">Physics</a></li>
				<li class="nav-item"><a class="nav-link" href="/Math">Math</a></li>
				<li class="nav-item"><a class="nav-link" href="/History">History</a></li>
			</ul><span class="navbar-text" style="padding-right: 0px;padding-left: 0px;margin-left: 125px;">Account</span>
		</div>
	</div>
</nav>

<slot />

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';

</style>
