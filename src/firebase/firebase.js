import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
  authDomain: "pain-relief-bcf38.firebaseapp.com",
  projectId: "pain-relief-bcf38",
  storageBucket: "pain-relief-bcf38.firebasestorage.app",
  messagingSenderId: "549752441272",
  appId: "1:549752441272:web:1f8a7813984534f8ace74d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider("apple.com");
export const db = getFirestore(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

const messaging = getMessaging(app);

export { messaging, app };
