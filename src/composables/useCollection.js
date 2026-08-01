import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

let useCollection = (collectionName) => {
    let error = ref(null);
    let colRef = collection(db, collectionName);
    let addDocument = async (doc) => {
        try {
            let docRef = await addDoc(colRef, doc);
            return docRef;
        } catch (err) {
            error.value = err.message;
        }
    }
    return {error, addDocument}
}

export default useCollection;