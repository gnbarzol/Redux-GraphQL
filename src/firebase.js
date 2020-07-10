import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDEvQTTSzS7iSqf3fwkObI4NvsDnqYM1o0",
    authDomain: "login-rickandmorty.firebaseapp.com",
    databaseURL: "https://login-rickandmorty.firebaseio.com",
    projectId: "login-rickandmorty",
    storageBucket: "login-rickandmorty.appspot.com",
    messagingSenderId: "854150206119",
    appId: "1:854150206119:web:7119727153843023b38182",
    measurementId: "G-NC71WTK6FV"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
        .catch(err => console.log(err.message))
} 