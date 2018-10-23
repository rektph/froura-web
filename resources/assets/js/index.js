require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'

const fb = require('./firebaseConfig.js');
Vue.use(Vuetify, {
  theme: {
    primary: '#F9A825',
    secondary: '#FFB300',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

Vue.config.productionTip = false
Vue.prototype.$db = fb.db
Vue.prototype.$auth = fb.auth

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
