export function load({ params }){

	const question = params.id;
	const answer = params.option;
	return{
		id: question,
		answer: answer

	}

}
