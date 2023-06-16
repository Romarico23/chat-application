// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY10OwQ4SwSGrE3EdV-6xu7ArBQ7yW1DY",
  authDomain: "chat-application-def55.firebaseapp.com",
  projectId: "chat-application-def55",
  storageBucket: "chat-application-def55.appspot.com",
  messagingSenderId: "1087185797468",
  appId: "1:1087185797468:web:52180bfe506b364c90c199",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
