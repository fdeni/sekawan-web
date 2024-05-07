// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7O2EuHHQRy33QVPVm87x-52na5efidUE",
  authDomain: "sekawan-web.firebaseapp.com",
  projectId: "sekawan-web",
  storageBucket: "sekawan-web.appspot.com",
  messagingSenderId: "822513298542",
  appId: "1:822513298542:web:0e930c99c0672db1740a7f",
  measurementId: "G-7M2YWFRRRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;