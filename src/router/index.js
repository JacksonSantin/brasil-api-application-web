import { createRouter, createWebHistory } from 'vue-router'
import Banks from '@/module/banks/view/bankScreen.vue'
import Cep from '@/module/cep/view/cepScreen.vue'

const routes = [
  { path: '/', redirect: '/banks' },
  {
    path: '/banks',
    name: 'Banks',
    component: Banks
  },
  {
    path: '/cep',
    name: 'Cep',
    component: Cep
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
