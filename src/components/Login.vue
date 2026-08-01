<template>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
      <p v-if="error" class="auth-error" role="alert">{{ error }}</p>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useLogin from '@/composables/useLogin';

  export default {
      setup(props, context) {
          let email = ref('');
          let password = ref('');
          let {error, handleLogin} = useLogin();
          let handleSubmit = async () => {
              let user = await handleLogin(email.value, password.value);
              if(user) {
                context.emit('enterChatroom');
              }
          }
          return {
              email,
              password,
              error,
              handleSubmit
          }
      }
  }
  </script>
  
  <style>
  
  </style>