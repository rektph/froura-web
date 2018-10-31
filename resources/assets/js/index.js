require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import checkAuth from '../js/utils/checkAuth'

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
Vue.prototype.$user = fb.db.collection("users")
Vue.prototype.$auth = fb.auth

router.beforeEach((to, from, next) => {
  if(checkAuth(to.meta.auth, store.state.auth.access, -1)) {
    next()
  } else {
    if(checkAuth(store.state.auth.access, [-1, 1, 2, 3, 4])) {
      if(checkAuth(store.state.auth.access, [1])) {
        next('/dashboard')
      }
    } else {
      next('/')
    }
  }
})


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
