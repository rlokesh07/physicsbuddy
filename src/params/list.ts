import { subjects } from '$lib/subjects';

export function match(param) {
	return param in subjects;
}
