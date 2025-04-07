
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAXtpthj89B0LimTvcXMA3qqCdVJLOZkg",
    authDomain: "btech-gang.firebaseapp.com",
    projectId: "btech-gang",
    storageBucket: "btech-gang.firebasestorage.app",
    messagingSenderId: "291123526738",
    appId: "1:291123526738:web:32101b409a43fc24b1f38b"
  };
  

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
