<template>
  <form @submit.prevent="handleSubmit">
    <h2>Sing Up</h2>
    <label for="displayName">Display Name</label>
    <input type="text" id="displayName" v-model="displayName" required>
    <label for="email">Email</label>
    <input type="email" id="email" v-model="email" required>
    <label for="password">Password</label>
    <input type="password" id="password" v-model="password" required>
    <button type="submit">Sing Up</button>
    <p v-if="error" class="auth-error" role="alert">{{ error }}</p>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSingup from '@/composables/useSingup';

export default {
    setup(props, context) {
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        let {error, handleSingup} = useSingup();
        
        let handleSubmit = async () => {
            let user = await handleSingup(email.value, password.value, displayName.value);
            if(user) {
                context.emit('enterChatroom');
            }
        }

        return {
            displayName,
            email,
            password,
            error,
            handleSubmit
        }
    }
}
</script>

<style>
  .auth-error {
    color: red;
    font-size: 14px;
    margin-top: 10px;
  }
</style>