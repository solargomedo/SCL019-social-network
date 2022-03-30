
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { collection, addDoc, getFirestore, getDocs, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"

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



// Add a new document with a generated id.
export const createPost = async (titulo, comentario) => {
  const docRef = await addDoc(collection(db, "post"), {
    titulo,
    comentario
  });
  console.log("Document written with ID: ", docRef.id);
}


export const getTask = async (id) => {
  return await getDocs(collection(db, 'post'));
}
 
export const onGetTask = () => {

}
export const updatePost = (id, newFields) => updateDoc(doc(db, "post", id), newFields);

export const guardarTask= (titulo, comentario) => {
  const docRef = addDoc(collection(db,"post"),{
    titulo,
    comentario,
    email: auth.currentUser.email,
    userId: auth.currentUser.uid,
    date: Date(Date.now()),

  });
  
  return docRef
};

