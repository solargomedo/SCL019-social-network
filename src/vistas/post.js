//import { async } from "regenerator-runtime";
import { createPost, db, updatePost } from "../../lib/firebase.js";
import { collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
//getDocs, orderBy, getTask, 

export const post = () => {
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclasPost");
  const data = `    
  <div id="task-form">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    <br>
    <input type="text" placeholder="NOMBRE" id= "task-title" class="nombrePost">     
    <textarea id="task-description" rows="3" placeholder= "COMENTARIO"></textarea>
    <button id="btn-task-save">Publicar</button>
  </div>

  <div id="tasks-container"></div>
  `;
  dataPost.innerHTML = data;

  let editStatus = false;
  let id = '';

  /*Creacion de post */
  const btnSavePost = dataPost.querySelector('#btn-task-save');
  btnSavePost.addEventListener('click', () => {

    const post = dataPost.querySelector("#task-title").value;
    const desc = dataPost.querySelector("#task-description").value;
    //console.log(post)
    createPost(post, desc);
  });

  /* Funcion para mostrar post en muro*/
  const newContainer = dataPost.querySelector('#tasks-container')
  const newAllPost = async () => {
    //const querySnapshot = await getTask()
    onSnapshot(collection(db, "post"), (querySnapshot) => {
      let html = ''
      querySnapshot.forEach(doc => {
        const commentPost = doc.data();
        //const userId = getAuth().currentUser.uid;
        html += `
            <div> 
              <h3 class="titlePost">${commentPost.titulo}</h3>
              <textarea class="commentDone" readonly>${commentPost.comentario}</textarea>
              <h3 class="nombreUsuario">${commentPost.email}</h3> 
              <h4 class="fecha">${commentPost.date}</h4>
            </div>
            `;
        //userId()   
      })
      newContainer.innerHTML = html
    })
  }
  newAllPost()

  /* FUNCION PARA GUARDAR POST Y RESET FORMULARIO*/
  let formulario = dataPost.querySelector('#task-form');

  formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = dataPost.querySelector("#task-title");
    const comentario = dataPost.querySelector("#task-description");
    //const titulo = formulario["task-title"]
    // const comentario = formulario["task-description"]

    if (titulo.value === '' || comentario.value === '') {
      alert('No se puede publicar un post vacío')
    } else if (!editStatus) {
      createPost(titulo.value, comentario.value,);

    } else {
      updatePost(id, {
        titulo: titulo.value,
        comentario: comentario.value,
        email: auth.currentUser.email,
        date: Date(Date.now()),
      });
      editStatus = false;
    }
    formulario.reset();
  });
  //window.location.hash = 'post';
  return dataPost

}








