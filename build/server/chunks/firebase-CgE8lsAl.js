import { getApps, initializeApp, getApp, deleteApp } from 'firebase/app';
import 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAyX0y_pFrAS2uS6APjXsv6ibjLXlS6C10",
  authDomain: "physics-f8473.firebaseapp.com",
  projectId: "physics-f8473",
  storageBucket: "physics-f8473.appspot.com",
  messagingSenderId: "409425797879",
  appId: "1:409425797879:web:d24494ddc54055654d69f2",
  measurementId: "G-HMHJ8JGKZS"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth as a };
//# sourceMappingURL=firebase-CgE8lsAl.js.map
