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
  </form>
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let displayName = ref('');
        let email = ref('');
        let password = ref('');
        let handleSubmit = () => {
            console.log(displayName.value, email.value, password.value);
        }
        return {
            displayName,
            email,
            password
        }
    }
}
</script>

<style>

</style>