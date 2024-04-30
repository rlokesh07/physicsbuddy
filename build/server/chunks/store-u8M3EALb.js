import { d as db } from './firebase-BZD7hgW_.js';
import 'firebase/auth';
import 'firebase/database';
import { collection, getDocs } from 'firebase/firestore';
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
async function fetchTopics(subject) {
  const topicRef = collection(db, `${subject}Topics`);
  const querySnapshot = await getDocs(topicRef);
  const topics = [];
  querySnapshot.forEach((doc) => {
    topics.push({
      topic: doc.data().topic,
      ...doc.data()
    });
  });
  topicsStore.set({ topics, loading: false });
}

export { fetchTopics as a, flashcardsStore as f, questionsStore as q, topicsStore as t };
//# sourceMappingURL=store-u8M3EALb.js.map