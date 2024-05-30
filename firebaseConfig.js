import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjvdEshHEhqWvcbHnktDBNQ04MFTCkKEE",
    authDomain: "elearning-c9391.firebaseapp.com",
    projectId: "elearning-c9391",
    storageBucket: "elearning-c9391.appspot.com",
    messagingSenderId: "172280140451",
    appId: "1:172280140451:web:a60df1f4b55fa45e6e6516",
    measurementId: "G-VEFLCFV5SD"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
