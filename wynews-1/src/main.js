import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import lodash from 'lodash'
import VueJsonp from 'vue-jsonp'

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })
Vue.use(VueJsonp)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
