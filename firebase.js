import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAja9ODcqCPvETIp-_nAheV5oLks2pl4AI",
  authDomain: "dealer-a8162.firebaseapp.com",
  projectId: "dealer-a8162",
  storageBucket: "dealer-a8162.firebasestorage.app",
  messagingSenderId: "729635410709",
  appId: "1:729635410709:web:04a1a60f7e4c04c0304f1c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
