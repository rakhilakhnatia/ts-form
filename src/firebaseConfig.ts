import  {initializeApp} from 'firebase/app';
import { getAuth } from "firebase/auth" // New import
import { getFirestore } from "firebase/firestore"; 

export const app = initializeApp({
	apiKey: "AIzaSyBknmZJJY_5JnXv5P2bLREVwreCxVTQBbY",
  authDomain: "react-ts-form.firebaseapp.com",
  databaseURL: "https://react-ts-form-default-rtdb.firebaseio.com",
  projectId: "react-ts-form",
  storageBucket: "react-ts-form.appspot.com",
  messagingSenderId: "306003351816",
  appId: "1:306003351816:web:cca841775f0557624fb4bd",
  measurementId: "G-5C4Z31XQGT"
})

export const auth = getAuth(app);
const db = getFirestore(app);

