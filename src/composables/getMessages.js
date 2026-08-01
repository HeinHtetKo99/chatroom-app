import { ref } from "vue";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/config";

const messages = ref([]);

const q = query(collection(db, "messages"), orderBy("createdAt"));

onSnapshot(q, (snapshot) => {
  let docs = [];
  snapshot.docs.forEach((doc) => {
    let data = doc.data();
    // skip docs that don't have createdAt yet (serverTimestamp pending)
    if (data.createdAt) {
      docs.push({ ...data, id: doc.id });
    }
  });
  messages.value = docs;
});

export default () => {
  return { messages };
};
