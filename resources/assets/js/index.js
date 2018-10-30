require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import toNumberArray from '../js/utils/toNumberArray'

const fb = require('./firebaseConfig.js');
Vue.use(Vuetify, {
  theme: {
    primary: '#F9A825',
    secondary: '#FFB300',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})

const checkAuth = function(auth, n, concat) {
  auth = toNumberArray(auth)
  n = toNumberArray(n)
  
  // do concat
  if (typeof concat === 'object' || typeof concat === 'number') {
      n = toNumberArray(n.concat(concat))
  }
  // check if some n exists in auth
  let result = false
  auth.every(e => !(result = n.indexOf(e) > -1))
  return result
}

Vue.config.productionTip = false
Vue.prototype.$db = fb.db
Vue.prototype.$user = fb.db.collection("users")
Vue.prototype.$auth = fb.auth

router.beforeEach((to, from, next) => {
  
})


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
