import { getApps, initializeApp, getApp, deleteApp } from 'firebase/app';
import 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const firebaseConfig = {
  apiKey: define_import_meta_env_default.VITE_APIKEY,
  authDomain: define_import_meta_env_default.VITE_AUTH_DOMAIN,
  projectId: define_import_meta_env_default.VITE_PROJECT_ID,
  storageBucket: define_import_meta_env_default.VITE_STORAGE_BUCKET,
  messagingSenderId: define_import_meta_env_default.VITE_MESSAGING_SENDER_ID,
  appId: define_import_meta_env_default.VITE_APP_ID,
  measurementId: define_import_meta_env_default.VITE_MEASUREMENT_ID
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
const db = getFirestore(firebaseApp);
getAuth(firebaseApp);

export { db as d };
//# sourceMappingURL=firebase-lDnSjTbF.js.map
