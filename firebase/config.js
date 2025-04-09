import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL-FSWJHvP8B65Ku1jiaak980dsoUX88M",
  authDomain: "vall-b1251.firebaseapp.com",
  projectId: "vall-b1251",
  storageBucket: "vall-b1251.firebasestorage.app",
  messagingSenderId: "1039373560388",
  appId: "1:1039373560388:web:b3c04b8ce4bc13802d6a11",
  measurementId: "G-WR3SZ6NP81"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
