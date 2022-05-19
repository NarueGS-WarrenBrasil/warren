import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Maska from 'maska'
Vue.use(Maska)
Vue.config.productionTip = false
// const VMask = require('v-mask');

// Vue.use(VMask);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
