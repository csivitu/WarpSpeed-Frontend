import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const provider = new firebase.auth.GoogleAuthProvider();
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

firebase.initializeApp(firebaseConfig);

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};