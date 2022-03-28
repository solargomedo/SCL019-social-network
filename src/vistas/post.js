import { createPost, db } from "../../lib/firebase.js";
//import { collection, getDocs, orderBy,} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';


 export const post =  () => {  
 
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclass");
  const data = `
    
    <main>
    <div id="task-form">
    <label for="title"> title:</label>
    <input type="text" placeholder="task title" id= "task-title">
    
    <label for="description"> description:</label>
    <textarea id="task-description" rows="3" placeholder= "task description"></textarea>
    
    <button id="btn-task-save">save</button>

    </div>
    
    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>

    <div id="tesks-container"></div>

    </main>`;

    dataPost.innerHTML = data;

    const btnSavePost = dataPost.querySelector('#btn-task-save');
    btnSavePost.addEventListener('click', ()=> {

    const post = dataPost.querySelector("#task-title").value;
    const desc = dataPost.querySelector("#task-description").value;

      console.log(post)  
      createPost(post, desc);

    });



    //window.location.hash = 'post';
    return dataPost


    
    }

   
 
    
    
  
    

    
