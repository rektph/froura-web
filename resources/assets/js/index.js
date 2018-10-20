require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyC1H8XbcpJVdud0i4bP5XJt9zpNaCvQBvg",
  authDomain: "frourav2.firebaseapp.com",
  databaseURL: "https://frourav2.firebaseio.com",
  projectId: "frourav2",
  storageBucket: "frourav2.appspot.com",
  messagingSenderId: "63193249338"
}

const settings = {
  timestampsInSnapshots: true
}

firebase.initializeApp(config)
var db = firebase.firestore()

db.settings(settings)

Vue.use(Vuetify, {
  theme: {
    primary: '#F9A825',
    secondary: '#FFB300',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false


new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
