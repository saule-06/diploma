// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfG-k8fl6AEQz-0Qkd7VsUYkn-3vn27QU",
  authDomain: "diploma-26f72.firebaseapp.com",
  projectId: "diploma-26f72",
  storageBucket: "diploma-26f72.appspot.com",
  messagingSenderId: "97603450546",
  appId: "1:97603450546:web:72152dab21f0634e3ffbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categories = collection(db, 'categories');