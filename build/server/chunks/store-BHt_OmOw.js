import { a as auth } from './firebase-CgE8lsAl.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import 'firebase/firestore';
import { w as writable } from './index-BFKNpo2f.js';

const questionsStore = writable({
	/**
	 * @type {QuestionType[]}
	 */
	questions: [],
	loading: true
});
const authHandlers = {
	signup: async (email, pass) => {
		await createUserWithEmailAndPassword(auth, email, pass);
	},
	login: async (email, pass) => {
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
			return null;
		}
	}
};

export { authHandlers as a, questionsStore as q };
//# sourceMappingURL=store-BHt_OmOw.js.map
