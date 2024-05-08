import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7O2EuHHQRy33QVPVm87x-52na5efidUE",
    authDomain: "sekawan-web.firebaseapp.com",
    projectId: "sekawan-web",
    storageBucket: "sekawan-web.appspot.com",
    messagingSenderId: "822513298542",
    appId: "1:822513298542:web:0e930c99c0672db1740a7f",
    measurementId: "G-7M2YWFRRRT"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;


