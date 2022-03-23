import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import {app} from "../lib/firebase.js" 
import { register } from "./register.js";
//import { auth } from "./register";

export const home = ()=>{
  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
  <div class = "header">
    <div class="logo">
      <img class= "imgResponsive" src="../Imagenes/mano1.png">  </div>
       <h1>Te Apaño!</h1>
  </div>
 
  <form id="formLogin" class="FormLogin">
    <label class="email"> Correo electrónico </label>
    <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
 
    <label class="password"> Contraseña </label>
    <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu clave"/>
    <button type="button" id="boton" class="boton">Ingresa</button>
    <button type="button" id="botonGoogle" class="boton2">Ingresa con Google</button>
      <p>¿No tienes cuenta?</p>
    <butoon type="button" id="boton2" class="boton2">Registrate</button>
  </form>
  
  <div class="imagen">
    <img src="../Imagenes/deportesvec.jpg"></div>
  </div>

  <p class="mensajeErrorLogin" id="mensajeErrorLogin" </p>

  `;

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
  let btn2 = userData.querySelector('#boton2');
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