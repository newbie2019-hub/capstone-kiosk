import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { AvatarPlugin } from 'bootstrap-vue'

import './assets/js/elements'
import './assets/js/hands'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(AvatarPlugin)

window.addEventListener('load', () => {
  setTimeout(() => {
    new Vue({
      router, store,
      render: h => h(App)
    }).$mount('#app')
  }, 2000)
});
  




