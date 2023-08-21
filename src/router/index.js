import { createRouter, createWebHistory } from 'vue-router'
import Banks from '@/module/banks/view/bankScreen.vue'
import Cep from '@/module/cep/view/cepScreen.vue'
import CepV2 from '@/module/cepV2/view/cepV2Screen.vue'
import CNPJ from '@/module/cnpj/view/cnpjScreen.vue'
import Brokers from "@/module/brokers/view/brokersScreen.vue"
import DDD from "@/module/ddd/view/dddScreen.vue"
import NationalHolidays from "@/module/nationalHolidays/view/nationalHolidaysScreen.vue"
import ISBN from "@/module/ISBN/view/isbnScreen.vue"
import PIX from "@/module/pix/view/pixScreen.vue"

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
  {
    path: '/corretoras',
    name: 'Corretoras',
    component: Brokers
  },
  {
    path: '/ddd',
    name: 'DDD',
    component: DDD
  },
  {
    path: '/feriados-nacionais',
    name: 'Feriados Nacionais',
    component: NationalHolidays
  },
  {
    path: '/isbn',
    name: 'ISBN',
    component: ISBN
  },
  {
    path: '/pix',
    name: 'PIX',
    component: PIX
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
