<template>
  <div>
    <h1>Welcome</h1>
    <div v-if="isLogin">
        <Login />
        <p>Don't have an account? <button @click="isLogin = false">Sing Up</button></p>
    </div>
    <div v-else>
        <SingUp />
        <p>Already have an account? <button @click="isLogin = true">Login</button></p>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import SingUp from '../components/SingUp.vue';
import { ref } from 'vue';
export default {
    setup() {
        let isLogin = ref(true);
        return {
            isLogin
        }
    },
    components: {
        Login,
        SingUp
    }

}
</script>

<style>

</style>