// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWt1Uc0f1jN-N5aJBuUpHl68N8bfjUVSI",
  authDomain: "winter-wolf-assingment.firebaseapp.com",
  projectId: "winter-wolf-assingment",
  storageBucket: "winter-wolf-assingment.firebasestorage.app",
  messagingSenderId: "75916966951",
  appId: "1:75916966951:web:034b38a5497bc29a3f6202"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const  auth = getAuth();