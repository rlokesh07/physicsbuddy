import { a as auth } from './firebase-CgE8lsAl.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { w as writable } from './index-BCD5SKTV.js';

const questionsStore = writable({
  /**
   * @type {QuestionType[]}
   */
  questions: [],
  loading: true
});
const topicsStore = writable({
  /**
   * @type {TopicType[]}
   */
  topics: [],
  loading: true
});
const flashcardsStore = writable({
  /**
   * @type {FlashcardType[]}
   */
  flashcards: [],
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

export { authHandlers as a, flashcardsStore as f, questionsStore as q, topicsStore as t };
//# sourceMappingURL=store-CElMOH4N.js.map
