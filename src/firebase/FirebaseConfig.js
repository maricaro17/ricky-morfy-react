import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpEohOI2LIwbYIE4PX8N3iYK1u3CGWuWE",
  authDomain: "rickyandmorfy.firebaseapp.com",
  projectId: "rickyandmorfy",
  storageBucket: "rickyandmorfy.appspot.com",
  messagingSenderId: "422281561803",
  appId: "1:422281561803:web:737ef0418becd3f9b83d4e"
};

const app  = initializeApp(firebaseConfig);
const auth  = getAuth(app)
const db = getFirestore(app);
const google = new GoogleAuthProvider();

export {google,app, auth, db}