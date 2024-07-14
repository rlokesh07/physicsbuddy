<script lang="ts">
	import { fetchUsers, usersStore } from '../../store/store';
	import { auth, db } from '$lib/firebase/firebase';
	import type { UserType } from '$lib/types';
	import { onDestroy, onMount } from 'svelte';
	let index: number;
	let userList: UserType[] = [];
	import { redirect } from '@sveltejs/kit';
	let bananaPoints: any;
	let largestPoints: UserType;
	let largestPointsEmail: string;
	onMount(async () => {
		await fetchUsers();
		console.log("jfc")
		usersStore.subscribe((value) => {

			let email: string;
			userList = value.users;
			console.log(userList[0])
			let loading;
			loading = value.loading;


			if(auth.currentUser?.email){
				index = userList.findIndex((item) => item.email === auth.currentUser?.email);
			} else {
				throw redirect(300, "/login")
			}


		})

		bananaPoints = userList.findIndex((item) => item.email === auth.currentUser?.email);
		console.log(auth.currentUser?.email)
		largestPoints = userList[0];

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
	});



</script>

<h1>Banana Points: {bananaPoints}</h1>
<h1>Most Point: {largestPointsEmail}</h1>
<style>
	h1 {
		color: black;
		text-shadow: 0px 0px hsla(204, 41%, 20%, 1);
	}
</style>
