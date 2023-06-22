import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDuQjc6B4OTbfdrC2fsGhD0JfiTDUIkBYQ",
  authDomain: "gestion-escarlata.firebaseapp.com",
  projectId: "gestion-escarlata",
  storageBucket: "gestion-escarlata.appspot.com",
  messagingSenderId: "73995997482",
  appId: "1:73995997482:web:30b377e624b78aaed14e53"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
