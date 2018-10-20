require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify';
import store from './store'

<<<<<<< HEAD
const baseUrl = 'http://pos.test'

Vue.use(Vuetify)

=======
Vue.use(Vuetify, {
  theme: {
    primary: '#F9A825',
    secondary: '#FFB300',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
>>>>>>> Saved some changes
Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
