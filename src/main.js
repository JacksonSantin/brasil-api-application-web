import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import router from './router'
import vuetify from './plugins/vuetify'
import 'leaflet/dist/leaflet.css'

loadFonts()

createApp(App)
  .use(router)
  .use(VueTheMask)
  .use(vuetify)
  .mount('#app')
