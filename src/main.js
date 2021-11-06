import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper/css/swiper.css'
import './assets/js/elements'
import './assets/js/hands'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')


