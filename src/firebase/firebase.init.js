// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo2Em6yT4Bk6itEqH6RNKmIAS6iDv_qIg",
  authDomain: "react-authintegration.firebaseapp.com",
  projectId: "react-authintegration",
  storageBucket: "react-authintegration.firebasestorage.app",
  messagingSenderId: "896215298253",
  appId: "1:896215298253:web:810ab70b5c449f48b23984",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
