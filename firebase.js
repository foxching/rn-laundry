import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEsRcxH_xMpxPPH_YSYcoqY5YOpnXw7tU",
  authDomain: "rn-laundry.firebaseapp.com",
  projectId: "rn-laundry",
  storageBucket: "rn-laundry.appspot.com",
  messagingSenderId: "488949577624",
  appId: "1:488949577624:web:620b49aab10d0fbec21ded",
  measurementId: "G-RE7XM2T4PS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
