  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
  import {app} from "../lib/firebase.js"
  export const register =  () => {

  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
  <form id="formLogin" class="FormLogin">
  <div class="name"> Name </div>
  <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Enter your name"/>
  <div class="email"> E-mail </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Enter e-mail"/>
  <div class="password"> Password </div>
  <span class="iconEye"><i id="checkEye" class="fas fa-eye-slash"></i></span>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Enter password"/>
  <input type="submit" id="submit-register" class="submit-register" value="Registrate">
  </form>
  </div>
  `;
 userData.innerHTML = data;
 let btonRegistro = userData.querySelector('#submit-register');
 btonRegistro.addEventListener('click', () => {
   registroUsuario();
 });

 window.location.hash = 'register';
 return userData
}



const auth = getAuth(app);
function registroUsuario(){
  let email = document.getElementById("emailLogin").value;
  let password = document.getElementById("passwordLogin").value;

createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
}
  
