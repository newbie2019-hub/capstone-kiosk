import Vue from 'vue'
import Vuex from 'vuex'

import info from './module'

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
  info
 }
})

