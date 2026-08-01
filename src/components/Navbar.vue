<template>
  <nav class="navbar" v-if="user">
    <div class="navbar-user">
        <div class="user-avatar">T</div>
        <div class="user-info">
          <h1>login in as {{ user.displayName }}</h1>
          <h2>login email: {{ user.email }}</h2>
        </div>
    </div>
    <button class="logout-btn" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '@/composables/useLogout'; 
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';

export default {
  setup() {
    let {error, handleLogout} = useLogout();
    let router = useRouter();
    let { user } = getUser();
    
    let handleClick = async () => {
      await handleLogout();
    }
    return {
      error,
      handleClick,
      router,
      user
    }
  }

}
</script>

<style scoped>
.navbar {
  width: 100%;
  max-width: 900px;
  margin: 0 auto 20px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  box-shadow: 0 16px 36px rgba(30, 20, 70, 0.28);
}

.navbar-user {
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  min-width: 0;
}

.user-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 1.05rem;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.35);
}

.user-info h1 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #4b3f72;
  letter-spacing: 0.2px;
  text-shadow: none;
  text-align: left;
}

.user-info h1::after {
  content: none;
}

.user-info h2 {
  margin: 4px 0 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: #8b90a8;
  text-align: left;
}

.user-info h2::after {
  content: none;
}

.logout-btn {
  margin: 0;
  padding: 10px 18px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.logout-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(80, 60, 160, 0.4);
}

@media (max-width: 540px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }

  .logout-btn {
    width: 100%;
  }
}
</style>
