import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../lib/firebase.js"
import { home } from "./home.js";

export const register = () => {

  const dataRegistrer = document.createElement('div');
  dataRegistrer.setAttribute("class", "mainclassRegister");
  const data = `
  <div class="contenedorRegister">
    <header class = "header">
      <div class="logo">
      <img class="img" src="../Imagenes/mano1.png"></div>
      <h1>Te Apaño!</h1>
    </header>

    <main id="formLogin" class="FormLogin">
      <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Ingresa tu nombre"/>
      <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
      <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu contraseña"/>
      <butoon type="button" id="submit-register" class="botonRegister">Registrate</button>
    </main> 
    <div class = "imagenRegister">
    <div class="imagen">
    <img class="img" src="../Imagenes/register.jpg"></div>
   </div>
   </div>

 

   <p class="mensajeErrorRegistro" id="mensajeErrorRegistro"></p>
  
  <div id="modal_container" class="modal-container">
    <div class="modal">
    <h3>¡Estas registrado!</h3>
    <p1> Ahora debes ingresar y hacer inicio de sesión </p1>
    <br>
    <button id="close">Ir a home</button>
  </div>

  `;
  dataRegistrer.innerHTML = data;

  //--------Evento boton registrarse
  let btonRegistro = dataRegistrer.querySelector('#submit-register');
  btonRegistro.addEventListener('click', () => {
    registroUsuario();
  });

  window.location.hash = 'register';
  return dataRegistrer
}

const auth = getAuth(app);

//---------Registro de usuarios---------
function registroUsuario() {
  let email = document.getElementById("emailLogin").value;
  let password = document.getElementById("passwordLogin").value;

  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      //-- registrado
      const user = userCredential.user;
      //alert("Felicidades")

      let open = document.getElementById('submit-register');
      let modal_container = document.getElementById('modal_container');
      let close = document.getElementById('close');

      open.addEventListener('click', () => {
        modal_container.classList.add('show');
      });

      close.addEventListener('click', () => {
        modal_container.classList.remove('show');
        home()
      });
    })
    //--no registrado
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)

      if (errorCode === 'auth/invalid-email') {
        root.querySelector("#mensajeErrorRegistro").innerHTML = "Email Invalido";

        //Email invalido
      } else if (errorCode === 'auth/invalid-email') {
        root.querySelector("#mensajeErrorRegistro").innerHTML = "Email invalido";

        //Ingrese email
      } else if (errorCode === 'auth/missing-email') {
        root.querySelector("#mensajeErrorRegistro").innerHTML = "Ingresar Email";


      } else if (errorCode === 'auth/internal-error') {
        root.querySelector("#mensajeErrorRegistro").innerHTML = "Rellene todos los campos";

      } else if (errorCode === 'auth/weak-password') {
        root.querySelector("#mensajeErrorRegistro").innerHTML = "Minimo 6 caracteres";
      }
    });
}

