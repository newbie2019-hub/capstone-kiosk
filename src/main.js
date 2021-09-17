import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import { BootstrapVue } from 'bootstrap-vue'

import './assets/js/hands'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import "vue-toastification/dist/index.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(Toast, {
  position: "top-right",
  timeout: 3500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
  maxToasts: 2,
  transition: "Vue-Toastification__fade",
  newestOnTop: true,
  filterBeforeCreate: (toast, toasts) => {
  if (toasts.filter(
    t => t.type === toast.type
  ).length !== 0) {
    return false;
  }
  return toast;
}});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
