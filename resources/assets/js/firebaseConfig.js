import firebase from 'firebase/app'
import 'firebase/firestore'
require('firebase/auth')

// firebase init goes here
const config = {
    apiKey: "AIzaSyAOM55prrVcbDihJVz8qpapapXYRty3qlQ",
    authDomain: "frourav2-21856.firebaseapp.com",
    databaseURL: "https://frourav2-21856.firebaseio.com",
    projectId: "frourav2-21856",
    storageBucket: "frourav2-21856.appspot.com",
    messagingSenderId: "929594596126"
}
firebase.initializeApp(config)
// firebase.auth().useDeviceLanguage()

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

export {
    db,
    auth
}