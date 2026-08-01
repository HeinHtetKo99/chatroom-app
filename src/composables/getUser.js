import { auth } from "@/firebase/config";
import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
});

export default () => {
    return { user };
};