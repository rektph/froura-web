import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyC1H8XbcpJVdud0i4bP5XJt9zpNaCvQBvg",
    authDomain: "frourav2.firebaseapp.com",
    databaseURL: "https://frourav2.firebaseio.com",
    projectId: "frourav2",
    storageBucket: "frourav2.appspot.com",
    messagingSenderId: "63193249338"
}
firebase.initializeApp(config)

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