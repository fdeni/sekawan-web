import { Timestamp, doc, setDoc } from 'firebase/firestore';
import db from '../../data/database/Firestore'

async function insertBooking(bookingData) {
    
    const bookingId = alphanumeric_unique()
    const data = {
        bookingId: bookingId,
        brideName: bookingData.bride,
        groomName: bookingData.groom,
        package:{
            service: bookingData.service,
            package: bookingData.package,
        },
        bookingDate: Timestamp.fromDate(new Date()),
        event: {
            eventDate:bookingData.eventDate,
            startTime: bookingData.startTime,
            endTime: bookingData.endTime,
            eventAddress: bookingData.eventAddress,
        },
        brideInstagram: bookingData.brideInstagram,
        groomInstagram: bookingData.brideInstagram,
      };
    
      try {
        await setDoc(doc(db, "booking", bookingId), data);
        console.log("Document booking written with ID: ", bookingId);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
}

export default insertBooking;

function alphanumeric_unique() {
    return Math.random().toString(36).split('').filter( function(value, index, self) { 
        return self.indexOf(value) === index;
    }).join('').substring(2,9).toUpperCase();
}