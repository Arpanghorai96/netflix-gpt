// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmuUkTeeWxI2tE6umKTzz5gXvcq0PN2oc",
  authDomain: "netflixgpt-35d87.firebaseapp.com",
  projectId: "netflixgpt-35d87",
  storageBucket: "netflixgpt-35d87.appspot.com",
  messagingSenderId: "760723630815",
  appId: "1:760723630815:web:bc9a4ec1f953f1a4dd176a",
  measurementId: "G-G5K94JFLB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();