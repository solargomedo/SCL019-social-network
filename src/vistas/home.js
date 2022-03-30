import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {app} from "../lib/firebase.js" 
import { register } from "./register.js";
//import { auth } from "./register";

export const home = ()=>{
  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
  <div class = "mainclass">
  <div class = "header">
  <div class="logo">
  <img class="img" src="../Imagenes/mano1.png">  
  </div>
  <h1>Te Apaño!</h1>
  </div>
  <div class="form">
  <form id="formLogin" class="FormLogin">
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/><br>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu clave"/>
  <button type="button" id="boton" class="boton">Ingresa</button>
  <button type="button" id="botonGoogle" class="botonGoogle">Ingresa con Google</button>
  <p>¿No tienes cuenta?</p>
  <butoon type="button" id="botonRegister" class="botonRegister">Registrate</button>
  </form>
  </div>
  <p class="mensajeErrorLogin" id="mensajeErrorLogin" style="color:red;  font-size: 30px; font-weight: bold; -webkit-text-stroke: 0.5px ; text-shadow:1px 1px 10px #fff, 1px 1px 10px #ccc;"></p>
  <h2>Conoce compañer@s de entrenamiento y multiplica la motivación.</h2>
  <div class="imagen">
  <img class="img" src="../Imagenes/deportesvec.jpg">
  </div>
  </div>`;


 userData.innerHTML = data;

 //--------Evento boton para loguearse--------
 let btonRegistro = userData.querySelector('#boton');       
 btonRegistro.addEventListener('click', () => {                       
   login();                                                 
 });

 //--------Evento boton para ingresar con Google------------
 let btnGoogle = userData.querySelector('#botonGoogle');
 btnGoogle.addEventListener('click', () =>{
  registerGoogle()
  
 });

  //-------Evento para boton y direccionar a REGISTRATE y nos muestra html para ingresar datos-------------
  let btn2 = userData.querySelector('#botonRegister');
  btn2.addEventListener('click', () =>{
   register()
  });

 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();


 //----Función para loguearse----------
 function login(){                                           
  let email = document.getElementById("emailLogin").value;                
  let password = document.getElementById("passwordLogin").value;

  

  //Codigo traido de firebase
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //console.log(user);
      window.location.hash = 'post';
  
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode === "auth/user-not-found"){
        root.querySelector("#mensajeErrorLogin").innerHTML = "usuario no regristrado";
        
      } else if (errorCode === "auth/wrong-password"){
        root.querySelector("#mensajeErrorLogin").innerHTML = "Contraseña incorrecta";
      }
        else if (errorCode === "auth/invalid-email"){
        root.querySelector("#mensajeErrorLogin").innerHTML= "Correo invalido";
      }
        else if (errorCode === "auth/internal-error"){
        root.querySelector("#mensajeErrorLogin").innerHTML= "Ingrese contraseña";
      }

    });
    
    
}  
//Ingreso con google firebase
function registerGoogle(){
//const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    window.location.hash = 'post';

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...

    

  });
}

 window.location.hash = 'home';
 return userData
}