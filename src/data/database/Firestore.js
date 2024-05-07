import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = require('../config/firebaseConfig');

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default getFirestore(app);


