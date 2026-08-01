// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH8LvRCk0EHCWXJJghnF8PPSd1t3HE2IA",
  authDomain: "vue-blog-system-8ac25.firebaseapp.com",
  projectId: "vue-blog-system-8ac25",
  storageBucket: "vue-blog-system-8ac25.firebasestorage.app",
  messagingSenderId: "155538208474",
  appId: "1:155538208474:web:922f164c7c1359fc5ad7e3",
  measurementId: "G-ZNVEXHTQNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth, serverTimestamp };