import firebase from 'firebase';
import 'firebase/analytics';

var firebaseConfig = {
  apiKey: "AIzaSyD3k6uAuibES5iXJlX9A_i2wcViloVn_hY",
  authDomain: "react-game-fa128.firebaseapp.com",
  projectId: "react-game-fa128",
  storageBucket: "react-game-fa128.appspot.com",
  messagingSenderId: "654294567539",
  appId: "1:654294567539:web:4dcb54cafc087d4467b806",
  measurementId: "G-6TS9SV1NXJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase