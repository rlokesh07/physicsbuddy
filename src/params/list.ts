import { topics } from '$lib/topics';

export function match(param) {
	return param in topics;
}
