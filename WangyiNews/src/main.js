import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueJsonp from 'vue-jsonp'
import store from './store'
import lodash from 'lodash'
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })
Vue.use(VueJsonp)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
