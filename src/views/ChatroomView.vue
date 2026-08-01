<template>
  <div>
    <h1>Chatroom</h1>
    <Navbar />
    <ChatBox />
    <Chatroom />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
import Chatroom from '@/components/Chatroom.vue';
import ChatBox from '@/components/ChatBox.vue';
export default {
  components: {
    Navbar,
    Chatroom,
    ChatBox
  },
  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if(!user.value) {
        router.push({ name: 'Welcome' });
      }
    })
  }
}
</script>

<style>

</style>