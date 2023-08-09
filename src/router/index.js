import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/module/banks/view/brasilAPI.vue'

const routes = [
  { path: '/', redirect: '/banks' },
  {
    path: '/banks',
    name: 'Banks',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
