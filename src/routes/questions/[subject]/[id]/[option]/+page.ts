export function load({ params }) {
	const question = params.id;
	const answer = params.option;
	const subject = params.subject;
	return {
		id: question,
		answer: answer,
		subject:subject
	};
}
