// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-f758c.firebaseapp.com",
  projectId: "react-f758c",
  storageBucket: "react-f758c.appspot.com",
  messagingSenderId: "227960903330",
  appId: "1:227960903330:web:d1ac346517b526a82529fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export default app;