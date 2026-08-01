import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import ChatroomView from '../views/ChatroomView.vue'
import getUser from '@/composables/getUser'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeView,
    beforeEnter: (to, from, next) => {
      const { user } = getUser()
      if (user.value) {
        next({ name: 'Chatroom' })
      } else {
        next({ name: 'Welcome' })
      }
    }
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: ChatroomView,
    beforeEnter: (to, from, next) => {
      const { user } = getUser()
      if (!user.value) {
        next({ name: 'Welcome' })
      } else {
        next()
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
