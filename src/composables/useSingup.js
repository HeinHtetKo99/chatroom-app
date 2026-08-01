import { ref } from 'vue';
import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


let useSingup = () => {
    let error = ref(null);


    let handleSingup = async (email, password, displayName) => {
        try {
            let user = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user.user, { displayName: displayName });
            return user;
        } catch (err) {
            error.value = err.message;
        }
    }
    return{error, handleSingup}
}

export default useSingup;