import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';

let useLogout = () => {
    let error = ref(null);
    let handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            error.value = err.message;
        }
    }
    return {error, handleLogout}
}

export default useLogout;