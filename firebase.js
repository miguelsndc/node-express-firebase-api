const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'api key',
  authDomain: 'auth domain',
  projectId: 'project id',
  storageBucket: 'bucket',
  messagingSenderId: 'sender id',
  appId: 'app id',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()

module.exports = db
