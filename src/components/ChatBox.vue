<template>
  <div class="chat-box">
    <div class="chat-messages" ref="chatMessages">
      <div class="chat-message" v-for="message in updatedMessages" :key="message.id">
        <div class="message-avatar">{{ message.name?.charAt(0).toUpperCase() }}</div>
        <div class="chat-message-content">
          <div class="message-meta">
            <span class="sender">{{ message.name }}</span>
            <span class="timestamp">{{ message.createdAt}}</span>
          </div>
          <p class="message">{{ message.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getMessages from '@/composables/getMessages';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';
export default {
  setup() {
    let { messages } = getMessages();
    let chatMessages = ref(null);

    onUpdated(() => {
      chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
    });
    
    let updatedMessages = computed(() => {
      return messages.value.map(message => {
        let date = message.createdAt
          ? formatDistanceToNow(message.createdAt.toDate())
          : 'just now';
        return {
          ...message,
          createdAt: date
        }
      });
    });
    return { updatedMessages, chatMessages };
  }
}
</script>

<style scoped>
.chat-box {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 18px;
  padding: 20px 22px;
  background: rgba(255, 255, 255, 0.96);
  border-radius: 18px;
  box-shadow: 0 16px 36px rgba(30, 20, 70, 0.28);
  text-align: left;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  animation: message-in 0.35s ease both;
}

.chat-message:nth-child(2) {
  animation-delay: 0.08s;
}

.chat-message:nth-child(3) {
  animation-delay: 0.16s;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 0.95rem;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.35);
}

.message-avatar.avatar-alt {
  background: linear-gradient(135deg, #7c8ef0 0%, #9b6bc7 100%);
}

.chat-message-content {
  flex: 1;
  min-width: 0;
  padding: 12px 16px;
  background: #f8f9fd;
  border: 1.5px solid #e4e7f2;
  border-radius: 14px;
  border-top-left-radius: 6px;
}

.message-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 6px;
}

.sender {
  font-size: 0.92rem;
  font-weight: 600;
  color: #4b3f72;
}

.timestamp {
  font-size: 0.75rem;
  font-weight: 500;
  color: #8b90a8;
  white-space: nowrap;
}

.message {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.55;
  color: #2d2d3a;
  text-align: left;
}

@keyframes message-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 540px) {
  .chat-box {
    padding: 14px;
    border-radius: 14px;
  }

  .message-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
}
</style>
