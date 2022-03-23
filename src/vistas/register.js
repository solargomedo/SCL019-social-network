import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {app} from "../lib/firebase.js" 
import { home } from "./home.js";

export const register =  () => {                      

  const dataRegistrer = document.createElement('div');
  dataRegistrer.setAttribute("class", "mainclass");
  const data = `
    <div class="register">
    <form id="formLogin" class="FormLogin">

    <label class="name"> Nombre </label>
    <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Ingresa tu nombre"/>
    <label class="email"> E-mail </label>
    <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
    <label class="password"> Contraseña </label>
    <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu contraseña"/>
    <butoon type="button" id="submit-register" class="botonRegister">Registrate</button>
    </form>
    <p class="mensajeErrorRegistro" id="mensajeErrorRegistro" </p>

    </div>   
    
    
    <div id="modal_container" class="modal-container">
  <div class="modal">
    <h3>felicidades</h>
    <p> Ahora debes ingresar hacer inicio de sesión    </p>
    <button id="close">Ir a home</button>
  </div>
</div>;`
    

  


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
function registroUsuario(){                                                 
  let email = document.getElementById("emailLogin").value;                
  let password = document.getElementById("passwordLogin").value;

createUserWithEmailAndPassword(auth, email, password)                   

  .then((userCredential) => {
    //-- registrado
    const user = userCredential.user;
    //alert("Felicidades")

    
  })
  //--no registrado
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)

    if(errorCode === 'auth/invalid-email'){
      root.querySelector("#mensajeErrorRegistro").innerHTML = "Email Invalido";
    
      //Email invalido
    }else if(errorCode === 'auth/invalid-email'){
      root.querySelector("#mensajeErrorRegistro").innerHTML = "Ingresa Email";
    
      //Ingrese email
    } else if(errorCode === 'auth/missing-email'){
      root.querySelector("#mensajeErrorRegistro").innerHTML = "Ingresar Email";
      

    } else if(errorCode === 'auth/internal-error'){
      root.querySelector("#mensajeErrorRegistro").innerHTML = "Rellene todos los campos";
     
    } else if(errorCode === 'auth/weak-password'){
      root.querySelector("#mensajeErrorRegistro").innerHTML = "Minimo 6 caracteres";
    }

  });



  const open = document.getElementById('submit-register');
  const modal_container = document.getElementById('modal_container');
  const close = document.getElementById('close');
  
  open.addEventListener('click', () => {
    modal_container.classList.add('show');
  });
  
  close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    home()
  });

}

  