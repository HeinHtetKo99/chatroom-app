import { ref } from "vue";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
let useLogin = () => {
    let error = ref(null);
    let handleLogin = async (email, password) => {
        try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            return user;
        } catch (err) {
            error.value = err.message;
        }
    }
    return {error, handleLogin}
}

export default useLogin;