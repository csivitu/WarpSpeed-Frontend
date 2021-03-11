import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA279KZ-4cMThQ-oqDBN5BObomQoTzwwh4",
    authDomain: "game-a3466.firebaseapp.com",
    databaseURL: "https://game-a3466-default-rtdb.firebaseio.com",
    projectId: "game-a3466",
    storageBucket: "game-a3466.appspot.com",
    messagingSenderId: "535654653293",
    appId: "1:535654653293:web:358b0201e1f58951e64e64",
    measurementId: "G-948ZKZ6D5H"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider} ;
export default db;