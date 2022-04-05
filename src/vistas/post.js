import { createPost, db} from "../../lib/firebase.js";
import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';

export const post = () => {
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclasPost");
  const data = ` 
  <div id="task-form">
    <header class = "header">
      <div class="logo">
      <img class="img" src="../Imagenes/mano1.png"></div>
      <h1>Te Apaño!</h1>
    </header>
    <main>
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    <br>
      <input type="text" placeholder="NOMBRE" id= "task-title" class="nombrePost">     
      <textarea id="task-description" class="comentarioPost" rows="3" placeholder= "COMENTARIO"></textarea>
      <button id="btn-task-save">Publicar</button>
    </main>
  </div>

  <div id="tasks-container"></div>
  `;
  dataPost.innerHTML = data;


  //-------------Crear post en firestore-------//
  const btnSavePost = dataPost.querySelector('#btn-task-save');
  btnSavePost.addEventListener('click', () => {
    const post = dataPost.querySelector("#task-title").value;
    const desc = dataPost.querySelector("#task-description").value;
    //console.log(post)
    createPost(post, desc);

    document.querySelector('#task-title').value = "";
    document.querySelector('#task-description').value = "";
  });


  //---------------Funcion para mostrar post en muro-------//
  const newContainer = dataPost.querySelector('#tasks-container')
  const newAllPost = async () => {
    onSnapshot(collection(db, "post"), (querySnapshot) => {
      let html = ''
      querySnapshot.forEach(doc => {
        const commentPost = doc.data();
        html += `
            <div class= "postPublicado"> 
              <h3 class="titlePost">${commentPost.titulo}</h3>
              <textarea class="commentDone" readonly>${commentPost.comentario}</textarea>
              <h3 class="nombreUsuario">${commentPost.email}</h3> 
              <h4 class="fecha">${commentPost.date}</h4>
              <div class="icono">
              <img class="iconoImg" src="../Imagenes/mano1.png">
              <img class="imgIcono" src="../Imagenes/Editars.png">
              <img class="imgIcono" src="../Imagenes/Papelera.png">
              </div>
            </div>`;
      })
      newContainer.innerHTML = html
    })
  }
  newAllPost()

  return dataPost
}








