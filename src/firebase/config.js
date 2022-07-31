// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACl3pLUbKA1dM2jJS5R7cum6MY1sFyqtg",
  authDomain: "coderhouse-ecommerce-d875c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-d875c",
  storageBucket: "coderhouse-ecommerce-d875c.appspot.com",
  messagingSenderId: "68479671148",
  appId: "1:68479671148:web:be017d9fdc3abb5329f149"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);