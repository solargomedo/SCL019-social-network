import { createPost, db } from "../../lib/firebase.js";
import { collection, getDocs, orderBy,} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';


 export const post =  () => {  
 
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclass");
  const data = `
    
    <main>
    <form id="task-form">
    <label for="title"> title:</label>
    <input type="text" placeholder="task title" id= "task-title">
    
    <label for="description"> description:</label>
    <textarea id="task-description" rows="3" placeholder= "task description"></textarea>
    
    <button id="btn-task-save">save</button>

    </form>
    
    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    <div id="tesks-container"></div>

    </main>`;

    dataPost.innerHTML = data;



    //btn addPost
const btnAddPost = dataPost.querySelector("#btn-task-save"); //--------Evento boton registrarse
let btonPost = dataPost.querySelector('#btn-task-save');       
btonPost.addEventListener('click', () => {                       
 postUsuario();                                                 
});
btnAddPost.addEventListener("click", async(event) => {
    event.preventDefault();
    //almacena el comentario
    const publication = dataPost.querySelector("#task-description").value;
    console.log(publication);
    //llamar a createpost
    await createPost(publication);
});

const getAllPost = async() => {

    const allpost = await getDocs(collection(db, "post"));
    allpost.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());

        const containerPost = dataPost.querySelector('#tesks-container')
        const timer = query(collection(db, "post"), orderBy("date", "desc"))

        onSnapshot(timer, (querySnapshot) => {
            let html = ''

            querySnapshot.forEach(doc => {
                const commentPost = doc.data();
                html += `
        
          <div> 
          <h3 class="titlePost">${commentPost.title}</h3>
          <textarea class="commentDone" readonly>${commentPost.description}</textarea>
       
          <div class="btns"> 
            <input class="counter" id="counter" type="number"  value="0" name="" readonly  />
            
            <button class="like" id="like"><i class="fa-solid fa-heart"></i></button> 
            <button class="btnDelete" data-id="${doc.id}"><i class="fa-solid fa-trash"></i>
                Delete</button>
            <button class="btnEdit" data-id="${doc.id}"><i class="fa-solid fa-pen-to-square"></i>
                Edit</button>
          </div> 
        </div>`
            })
        })
    });
 
    }
    
    
    window.location.hash = 'post';

    return dataPost


    
    }

   
 
    
    
  
    

    
