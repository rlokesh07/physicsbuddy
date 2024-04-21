import { auth, db } from '$lib/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { collection, doc, getDocs, increment, setDoc, updateDoc } from 'firebase/firestore';
import { writable } from 'svelte/store';



export const authStore = writable({
	user: null,
	loading: true,
	data: {}
})
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
 * @property {string} type
 * @property {string[]} unit
 * @property {string} formattedAnswer
 */

export const questionsStore = writable({
	/**
	 * @type {QuestionType[]}
	 */
	questions: [],
	loading: true
});
export const topicsStore = writable({
	/**
	 * @type {TopicType[]}
	 */
	topics: [],
	loading: true
});

export const flashcardsStore = writable({
	/**
	 * @type {FlashcardType[]}
	 */
	flashcards:[],
	loading: true
})

export const authHandlers = {
	signup: async (/** @type {string} */ email, /** @type {string} */ pass) => {
		await createUserWithEmailAndPassword(auth, email, pass);
	},
	login: async (/** @type {string} */ email, /** @type {string} */ pass) => {
		await signInWithEmailAndPassword(auth, email, pass);
	},
	logout: async () => {
		await signOut(auth);
	},
	getEmail: () => {
		const user = auth.currentUser;
		if (user) {
			return user.email;
		} else {
			return null; // Or throw an error, depending on your preference
		}
	},

};

/**
 * @param {string} questionId
 * @param {boolean} correct
 */
export async function updateQuestionCounts(questionId, correct) {
		const questionRef = doc(db, "questions", questionId);
		await updateDoc(questionRef, {
			attempted: increment(1),
			correct: correct ? increment(1): increment(0)
		})

}

/**
 * @param {string} subject
 */
export async function fetchTopics(subject){
	const topicRef = collection(db, `${subject}Topics`);
	const querySnapshot = await getDocs(topicRef);
	/**
	 * @type {Array<{topic:string}>}
	 */
	const topics = [];
	querySnapshot.forEach((doc) =>{
		topics.push({
			topic: doc.data().topic,
			...doc.data()
		});
	});
	topicsStore.set({ topics, loading:false})

}
/**
 * @param {string} subject
 * */
export async function fetchQuestions(subject) {
	const questionsRef = collection(db, subject);
	const querySnapshot = await getDocs(questionsRef);
	/**
	 * @type {Array<{ id: string, attempted: number, topic:string, correct:number, difficulty:string, image:string, explanation:string[], options:string[], question:string, answer:number, type:string, unit:string[], formattedAnswer:string }>} questions
	 */
	const questions = [];
	querySnapshot.forEach((doc) => {
		questions.push({
			id: doc.data().id,
			attempted: doc.data().attempted,
			topic: doc.data().topic,
			correct: doc.data().correct,
			difficulty: doc.data().difficulty,
			image: doc.data().image,
			explanation: doc.data().explanation,
			options: doc.data().options,
			answer: doc.data().answer,
			question: doc.data().question,
			type: doc.data().type,
			unit: doc.data().unit,
			formattedAnswer: doc.data().formattedAnswer,
			...doc.data()
		});
	});
	questionsStore.set({ questions, loading: false });
}
/**
 * @param {string} subject
 */
export async function fetchFlashcards(subject){
	const flashcardsRef = collection(db, `${subject} Flashcards`);
	const querySnapshot = await getDocs(flashcardsRef);
	/**
	 * @type {Array<{front:string, back:string}>}
	 */
	const flashcards = [];
	querySnapshot.forEach((doc) =>{
		flashcards.push({
			front: doc.data().front,
			back: doc.data().back,
			...doc.data()
		});
	});
	flashcardsStore.set({ flashcards, loading:false});

}