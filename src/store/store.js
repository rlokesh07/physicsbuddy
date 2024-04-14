import { auth, db } from '$lib/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { writable } from 'svelte/store';

export const authStore = writable(
	{
		user: null,
		loading: true,
		data: {}
	}
)
/**
 * @typedef {Object} Question
 * @property {string} id - The ID of the question.
 * @property {number} attempted
 * @property {string} topic
 * @property {number} correct
 * @property {string} difficulty
 * @property {string} image
 * @property {string[]} explanation
 * @property {string} question
 * @property {string[]} options
 * @property {number} answer
 */

export const questionsStore = writable({
	/**
	 * @type {QuestionType[]}
	 */
	questions: [],
	loading: true
});


export const authHandlers = {
	signup: async (/** @type {string} */ email, /** @type {string} */ pass) => {
		await createUserWithEmailAndPassword(auth, email, pass)
	},
	login: async (/** @type {string} */ email, /** @type {string} */ pass) => {

		await signInWithEmailAndPassword(auth, email, pass)
	},
	logout: async () =>{
		await signOut(auth)
	},
	getEmail: () => {
		const user = auth.currentUser;
		if (user) {
			return user.email;
		} else {
			return null; // Or throw an error, depending on your preference
		}
	}

}

/**
 * @param {string} questionId
 * @param {number} attemptedCount
 * @param {number} correctCount
 */
export function updateQuestionCounts(questionId, attemptedCount, correctCount){

	questionsStore.update((storeData) => {
			const updatedQuestions = storeData.questions.map((question) => {
				if (question.id === questionId) {
					return {
						...question,
						attempted: attemptedCount,
						correct: correctCount
					};
				}
				return question;
			});
			return {...storeData, questions: updatedQuestions};
		});
}
export async function fetchQuestions(){
	const questionsRef = collection(db, 'questions');
	const querySnapshot = await getDocs(questionsRef);
	/**
	 * @type {Array<{ id: string, attempted: number, topic:string, correct:number, difficulty:string, image:string, explanation:string[], options:string[], question:string, answer:number }>} questions
	 */
	const questions = [];
	querySnapshot.forEach((doc) => {
		questions.push({
			id: doc.data().id,
			attempted: doc.data().attempted,
			topic: doc.data().topic,
			correct:doc.data().correct,
			difficulty:doc.data().difficulty,
			image:doc.data().image,
			explanation:doc.data().explanation,
			options:doc.data().options,
			answer:doc.data().answer,
			question:doc.data().question,
			...doc.data()
		});
	});
	questionsStore.set({  questions, loading:false});
}