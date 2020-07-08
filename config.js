import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBSc5VzcOhD2ZCv8Ef7Qoz0m0sOwISG1kY",
    authDomain: "book-santa-ec162.firebaseapp.com",
    databaseURL: "https://book-santa-ec162.firebaseio.com",
    projectId: "book-santa-ec162",
    storageBucket: "book-santa-ec162.appspot.com",
    messagingSenderId: "522790568860",
    appId: "1:522790568860:web:418197022c0d0ca5b37e59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();