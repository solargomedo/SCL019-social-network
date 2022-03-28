
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBIqyphHuzt--s38OayJrvHpQl11oY8Fw0",
  authDomain: "appsocialnetwork-45b2a.firebaseapp.com",
  projectId: "appsocialnetwork-45b2a",
  storageBucket: "appsocialnetwork-45b2a.appspot.com",
  messagingSenderId: "836635648711",
  appId: "1:836635648711:web:16311e14543b650b1914e2",
  measurementId: "G-DQBKH5J1LL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { collection, addDoc, getDocs } from "firebase/firestore";

// Add a new document with a generated id.
export const createPost = async(comentario, titulo)=>{
const docRef = await addDoc(collection(db, "post"), {
  name: titulo,
  country: comentario
});
console.log("Document written with ID: ", docRef.id);
}

export const getAllPost = async() =>{
const allpost = await getDocs(collection(db, "post"));
allpost.forEach((doc) => {
console.log(doc, id, "=>", doc.data());

});
}

