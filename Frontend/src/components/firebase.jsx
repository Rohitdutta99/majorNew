// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6djQUwv4E-s-kUP-0Dvm7vqSLw-8pd38",
  authDomain: "authentication-76575.firebaseapp.com",
  projectId: "authentication-76575",
  storageBucket: "authentication-76575.appspot.com",
  messagingSenderId: "287446467642",
  appId: "1:287446467642:web:971db7b721e63ae624a103",
  measurementId: "G-148KSS70H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}