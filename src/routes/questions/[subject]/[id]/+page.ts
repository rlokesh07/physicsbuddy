export function load({ params }) {
	const question = params.id;
	const subject = params.subject;

	return {
		id: question,
		subject: subject
	};
}
