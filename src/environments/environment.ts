// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
production: false,
  apiKey: "AIzaSyB9RhloKf6CSU_UPPiJgIIcKfStLeT24aU",
  authDomain: "rapi-ccefe.firebaseapp.com",
  projectId: "rapi-ccefe",
  storageBucket: "rapi-ccefe.appspot.com",
  messagingSenderId: "753081041356",
  appId: "1:753081041356:web:23b5ecc205fe6cfbd3dd69",
  measurementId: "G-Z9P0TZ2Q63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);