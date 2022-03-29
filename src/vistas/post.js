//import { async } from "regenerator-runtime";
import { createPost, db, getTask } from "../../lib/firebase.js";
//import { collection, getDocs, orderBy,} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';


export const post = () => {

  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclass");
  const data = `
    
    <main>
    <div id="task-form">
    <label for="title"> Nombre:</label>
    <input type="text" placeholder="task title" id= "task-title">
    
    <label for="description"> comentario:</label>
    <textarea id="task-description" rows="3" placeholder= "task description"></textarea>
    
    <button id="btn-task-save">Publicar</button>

    </form>
    
    <div id="tasks-container"></div>

    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    </main>`;

  dataPost.innerHTML = data;

  const btnSavePost = dataPost.querySelector('#btn-task-save');
  btnSavePost.addEventListener('click', () => {

    const post = dataPost.querySelector("#task-title").value;
    const desc = dataPost.querySelector("#task-description").value;

    console.log(post)
    createPost(post, desc);

  });



  /* Funcion para mostrar post en muro*/

  const newContainer = dataPost.querySelector('#tasks-container')
  const newAllPost = async () => {
    console.log("hola1")
    const querySnapshot = await getTask()
    console.log(querySnapshot)

    let html = ''
    querySnapshot.forEach(doc => {
      const commentPost = doc.data();
      //const userId = getAuth().currentUser.uid;
      html += `

          <div> 
          <h3 class="titlePost">${commentPost.titulo}</h3>
          <textarea class="commentDone" readonly>${commentPost.comentario}</textarea>
          </div>
          `
    })

    //taksContainer.innerHTML = html
    newContainer.innerHTML = html
  }
  newAllPost()



  //window.location.hash = 'post';
  return dataPost

}








