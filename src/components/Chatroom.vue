<template>
    <form class="chat-form">
        <textarea class="chat-input" placeholder="Hit enter to send a message..." v-model="message"
        @keydown.enter.prevent="handleSubmit"></textarea>
        <div class="error" v-if="error">{{ error }}</div>
    </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { serverTimestamp } from '@/firebase/config';
import useCollection from '@/composables/useCollection';
export default {
  setup() {
    let message = ref('');
    let {user} = getUser();
    let {error, addDocument} = useCollection('messages');
    let handleSubmit = async () => {
        let data = {
            message: message.value,
            name: user.value.displayName,
            createdAt: serverTimestamp()
        }
        await addDocument(data);
        message.value = '';
    }
    return {
      message,
      handleSubmit,
      error
    }
  }

}
</script>

<style scoped>
.chat-form {
  width: 100%;
  max-width: 900px;
  margin: 18px auto 0;
  padding: 18px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  box-shadow: 0 16px 36px rgba(30, 20, 70, 0.28);
}

.chat-input {
  width: 100%;
  min-height: 120px;
  padding: 16px 18px;
  font: inherit;
  font-size: 1rem;
  line-height: 1.6;
  color: #2d2d3a;
  background: #f8f9fd;
  border: 1.5px solid #d7dbe8;
  border-radius: 14px;
  outline: none;
  resize: vertical;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.chat-input:hover {
  border-color: #b3bad4;
}

.chat-input:focus {
  background: #fff;
  border-color: #667eea;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.18);
}

.chat-input::placeholder {
  color: #a5aabb;
}

.error {
  margin-top: 12px;
  text-align: left;
  color: #c2410c;
  font-size: 0.92rem;
  font-weight: 600;
}

@media (max-width: 540px) {
  .chat-form {
    padding: 14px;
    border-radius: 14px;
  }

  .chat-input {
    min-height: 100px;
    padding: 14px;
  }
}
</style>