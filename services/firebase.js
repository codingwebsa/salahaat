// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCiydxkSJytenZaGIqzperuzAs4K2-UKhc",
  authDomain: "salahaat-services.firebaseapp.com",
  projectId: "salahaat-services",
  storageBucket: "salahaat-services.appspot.com",
  messagingSenderId: "105701065566",
  appId: "1:105701065566:web:f79e23ca8224a0ccc6c5cf",
  measurementId: "G-FKZHJVZ2WP",
};

//** */ Initialize Firebase
const app = initializeApp(firebaseConfig);
//  firestore
// initialize firestore
const firebaseDB = getFirestore(app);
const orderColRef = collection(firebaseDB, "orders");
//** */ initialize analytics
let analytics;

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// sign in function
const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
};

// sign out function
const googleSignOut = () => {
  signOut(auth);
};

export default app;
export {
  auth,
  googleSignIn,
  googleSignOut,
  analytics,
  orderColRef,
  firebaseDB,
};
