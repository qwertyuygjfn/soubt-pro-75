import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAsdYcyG9kJIFM48raKiCpfzVfgFdlcIio",
  authDomain: "pro74and75.firebaseapp.com",
  databaseURL: "https://pro74and75-default-rtdb.firebaseio.com",
  projectId: "pro74and75",
  storageBucket: "pro74and75.appspot.com",
  messagingSenderId: "132775329858",
  appId: "1:132775329858:web:92dd2f3d6ecee9237caddb"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
