import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBupeQrU7MyTNotvRDRKioJ3XsS59V-Uds",
  authDomain: "step-form-a3a42.firebaseapp.com",
  projectId: "step-form-a3a42",
  storageBucket: "step-form-a3a42.appspot.com",
  messagingSenderId: "692104141637",
  appId: "1:692104141637:web:398930b675cbc3ff813c2c",
  measurementId: "G-B1EGFDC47C"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);