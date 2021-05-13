const firebase = require('firebase')

const firebaseConfig = {
  apiKey: 'AIzaSyC-spp0wrAjnpPAvOM61azjQuBvqk01uus',
  authDomain: 'testi-2f86d.firebaseapp.com',
  projectId: 'testi-2f86d',
  storageBucket: 'testi-2f86d.appspot.com',
  messagingSenderId: '814013455525',
  appId: '1:814013455525:web:e1d924b213b41f0628814c',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const db = firebase.firestore()

module.exports = db
