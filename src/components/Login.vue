<template>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
      setup() {
          let email = ref('');
          let password = ref('');
          let handleSubmit = () => {
              console.log(email.value, password.value);
          }
          return {
              email,
              password
          }
      }
  }
  </script>
  
  <style>
  
  </style>