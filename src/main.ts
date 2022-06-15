import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Maska from 'maska'
Vue.use(Maska)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareEnvelope }from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWhatsapp,faSquareEnvelope)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
