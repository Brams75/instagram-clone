// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJT67zfxjmh5QgFUTXipUD3nXvcqnR9_8",
  authDomain: "instagram-clone-85501.firebaseapp.com",
  projectId: "instagram-clone-85501",
  storageBucket: "instagram-clone-85501.appspot.com",
  messagingSenderId: "656641743611",
  appId: "1:656641743611:web:68d46da7f44e1ff66f2e5e",
  measurementId: "G-6JJCZJTEPE",
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.auth();

export default db;
