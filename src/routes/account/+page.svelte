<script lang="ts">
	import { fetchQuestions, fetchUsers, questionsStore, usersStore } from '../../store/store';
	import { auth, db } from '$lib/firebase/firebase';
	import type { UserType } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	let index: number;
	let userList: UserType[] = [];

	const unsubscribe = usersStore.subscribe((value) => {
		let email: string;
		userList = value.users;
		let loading;
		loading = value.loading;
		email = auth.currentUser?.email;
		if(auth.currentUser?.email){
			index = userList.findIndex((item) => item.email === email);
		}
		console.log(index)

	})
	onMount(async () => {
		await fetchUsers();
	});

	let largestPoints: UserType = userList[0];
	let largestPointsEmail: string;
	userList.forEach(updateMaximum)
	function updateMaximum(item: UserType){
		if(item.bananaPoints && largestPoints.bananaPoints){
			if (item.bananaPoints > largestPoints.bananaPoints){
				largestPoints = item;
				largestPointsEmail = item.email;
			}
		} else if(item.bananaPoints){
			largestPoints = item;
			largestPointsEmail = item.email;
		}

	}
</script>

<h1>Banana Points: {userList[index].bananaPoints}</h1>
<h1>Most Points: {largestPointsEmail}</h1>

<style>
	h1 {
		color: black;
		text-shadow: 0px 0px hsla(204, 41%, 20%, 1);
	}
</style>
