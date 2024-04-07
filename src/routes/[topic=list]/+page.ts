import { topics } from '$lib/topics';

export function load({ params }) {
	return {
		topic: topics[params.topic].topic
	};
}
