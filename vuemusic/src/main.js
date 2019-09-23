import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import vueSwiper from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.css'
import loadsh from 'lodash'  

Vue.use(vueSwiper)
Vue.use(VueAxios,axios)
Vue.use( loadsh)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
