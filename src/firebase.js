import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCISUSaUd8qPfZQaznVtR65JbqkKFTRT0E",
  authDomain: "rickandmorty-63a4a.firebaseapp.com",
  databaseURL: "https://rickandmorty-63a4a.firebaseio.com",
  projectId: "rickandmorty-63a4a",
  storageBucket: "rickandmorty-63a4a.appspot.com",
  messagingSenderId: "964947428142",
  appId: "1:964947428142:web:04458daa1e0b5f906870bf"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
};

export const signOutGoogle = () => {
  firebase.auth().signOut();
}

let db = firebase.firestore().collection('favs');

export const updateFavs = (array, uid) => {
  return db.doc(uid).set({array}); //set debe recibir un objeto
}