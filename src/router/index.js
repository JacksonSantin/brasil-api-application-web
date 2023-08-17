import { createRouter, createWebHistory } from 'vue-router'
import Banks from '@/module/banks/view/bankScreen.vue'
import Cep from '@/module/cep/view/cepScreen.vue'
import CepV2 from '@/module/cepV2/view/cepV2Screen.vue'
import CNPJ from '@/module/cnpj/view/cnpjScreen.vue'

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
  {
    path: '/cep-v2',
    name: 'Cep V2',
    component: CepV2
  },
  {
    path: '/cnpj',
    name: 'CNPJ',
    component: CNPJ
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
