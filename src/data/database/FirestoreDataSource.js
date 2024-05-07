import { collection } from 'firebase/firestore';
import initializeApps from './Firestore.js'

initializeApps();

async function getData(db,col,docId) {
    const colletionRef = db.collection(col).doc(docId);
    const doc = await colletionRef.get();
    return doc;
}