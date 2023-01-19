import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {

  apiKey: "AIzaSyAIRn9ureHDilVl-ejsqY2FRqgWnhdua3Y",
  authDomain: "gestionreservation-6c639.firebaseapp.com",
  projectId: "gestionreservation-6c639",
  storageBucket: "gestionreservation-6c639.appspot.com",
  messagingSenderId: "761979138133",
  appId: "1:761979138133:web:47e479cb547a5af05a24dc",
  measurementId: "G-B695B5BB6T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
