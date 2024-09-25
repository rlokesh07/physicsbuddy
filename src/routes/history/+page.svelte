<script lang="ts">
	import { onMount } from 'svelte';


	import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
	import { OpenAIEmbeddings } from "@langchain/openai";
	import type { MessageType } from '$lib/types';
	import { Button } from '@sveltestrap/sveltestrap';
	import OpenAI from 'openai';

	let text: string | null;
	let question = "";
	type Message = {
		role: 'system' | 'user' | 'assistant' | 'function';
		name?: null | string;
		content: string | null;
	};


	async function handleQuestion() {

	}
</script>

<h2>{text}</h2>

<input bind:value={question} placeholder="Ask Question" />
<Button on:click={handleQuestion}>Submit</Button>
