import { createRouter, createWebHistory } from "vue-router";
import Banks from "@/module/banks/view/bankScreen.vue";
import Cep from "@/module/cep/view/cepScreen.vue";
import CepV2 from "@/module/cepV2/view/cepV2Screen.vue";
import CNPJ from "@/module/cnpj/view/cnpjScreen.vue";
import Brokers from "@/module/brokers/view/brokersScreen.vue";
import CPTECCapitals from "@/module/CPTECCapitals/view/cptecCapitalsScreen.vue";
import CPTECAirports from "@/module/CPTECAirports/view/cptecAirportsScreen.vue";
import CPTECCity from "@/module/CPTECCity/view/cptecCityScreen.vue";
import DDD from "@/module/ddd/view/dddScreen.vue";
import NationalHolidays from "@/module/nationalHolidays/view/nationalHolidaysScreen.vue";
import IBGE from "@/module/IBGE/view/ibgeScreen.vue";
import ISBN from "@/module/ISBN/view/isbnScreen.vue";
import NCM from "@/module/ncm/view/ncmScreen.vue";
import PIX from "@/module/pix/view/pixScreen.vue";
import RegistroBR from "@/module/registroBr/view/registroBrScreen.vue";
import Taxas from "@/module/taxa/view/taxaScreen.vue";
import Fipe from "@/module/fipe/view/fipeScreen.vue";
import Cidades from "@/module/city/view/cityScreen.vue";

const routes = [
  { path: "/", redirect: "/banks" },
  {
    path: "/banks",
    name: "Banks",
    component: Banks,
  },
  {
    path: "/cep",
    name: "Cep",
    component: Cep,
  },
  {
    path: "/cep-v2",
    name: "Cep V2",
    component: CepV2,
  },
  {
    path: "/cnpj",
    name: "CNPJ",
    component: CNPJ,
  },
  {
    path: "/corretoras",
    name: "Corretoras",
    component: Brokers,
  },
  {
    path: "/cptec-capitais",
    name: "CPTEC - Capitais",
    component: CPTECCapitals,
  },
  {
    path: "/cptec-aeroporto",
    name: "CPTEC - Aeroporto",
    component: CPTECAirports,
  },
  {
    path: "/cptec-cidade",
    name: "CPTEC - Cidade",
    component: CPTECCity,
  },
  {
    path: "/ddd",
    name: "DDD",
    component: DDD,
  },
  {
    path: "/feriados-nacionais",
    name: "Feriados Nacionais",
    component: NationalHolidays,
  },
  {
    path: "/fipe",
    name: "FIPE",
    component: Fipe,
  },
  {
    path: "/ibge",
    name: "IBGE",
    component: IBGE,
  },
  {
    path: "/isbn",
    name: "ISBN",
    component: ISBN,
  },
  {
    path: "/ncm",
    name: "NCM",
    component: NCM,
  },
  {
    path: "/pix",
    name: "PIX",
    component: PIX,
  },
  {
    path: "/registro-br",
    name: "Registro BR",
    component: RegistroBR,
  },
  {
    path: "/taxas",
    name: "Taxas",
    component: Taxas,
  },
  {
    path: "/cidade",
    name: "Cidades",
    component: Cidades,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
