import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import { getFirestore, collection} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword, 
  // signOut,
   signInWithEmailAndPassword,
   sendEmailVerification,
  //  onAuthStateChanged,
   GoogleAuthProvider,
  //  getRedirectResult,
  // signInWithRedirect,
  signInWithPopup
}

// Your web app's Firebase configuration
from firebaseConfig = {
  apiKey: 'AIzaSyBUvj7Ny-b2QLU57iZ_B0CP8gsezTwV75Q',
  authDomain: 'social-network-949f0.firebaseapp.com',
  projectId: 'social-network-949f0',
  storageBucket: 'social-network-949f0.appspot.com',
  messagingSenderId: '499338039893',
  appId: '1:499338039893:web:7f04fc4790a65d8949fadc',
};

// Initialize Firebase
const auth = getAuth();
const db = getFirestore();
db.collection("todos").getDocs();
const todosCol = collection(db, "todos");
const snapshot = await getDocs(todosCol);


//minuto 5, aun falta
//detect outh slate
//auth.onAuthStateChanged (user) => {




onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});