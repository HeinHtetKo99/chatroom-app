<template>
  <div>
    <h1>Welcome</h1>
    <div v-if="isLogin">
        <Login @enterChatroom="enterChatroom" />
        <p>Don't have an account? <button @click="isLogin = false">Sing Up</button></p>
    </div>
    <div v-else>
        <SingUp @enterChatroom="enterChatroom" />
        <p>Already have an account? <button @click="isLogin = true">Login</button></p>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import SingUp from '../components/SingUp.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        let router = useRouter();
        let isLogin = ref(true);
        let enterChatroom = () => {
            router.push({ name: 'Chatroom' });
        }
        return {
            isLogin,
            enterChatroom
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