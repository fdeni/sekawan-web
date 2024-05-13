

import { getDownloadURL, listAll, ref } from "firebase/storage";
import firebaseApps from "./Firebase";

const storage = firebaseApps.storage

const listRef = ref(storage, 'portofolio/');

async function loadPortofolioImages() {
    let listImages = []
    listAll(listRef)
        .then((res) => {
            res.items.forEach((itemRef) => {
                // All the items under listRef.
                getDownloadURL(ref(storage, `${itemRef}`))
                    .then((downloadURL) => {
                        const data = {
                            src:downloadURL.toString(),
                            className: "img-fluid",
                            altText: "",
                            caption: "",
                            header: "",
                        }
                        listImages.push(data) 
                    });
            });         
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    return listImages;
}

export default loadPortofolioImages;