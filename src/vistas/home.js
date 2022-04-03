import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { app } from "../lib/firebase.js"
import { register } from "./register.js";

export const home = () => {
  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
  <div class="contenedor">
    <header class = "header">
      <div class="logo">
      <img class="img" src="../Imagenes/mano1.png"></div>
      <h1>Te Apaño!</h1>
    </header>
    <main id="formLogin" class="FormLogin">
      <input type="email" id="emailLogin" class="emailLogin" placeholder= "Correo electronico"/><br>
      <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "contraseña"/>
      <button type="button" id="boton" class="boton">Ingresar</button>
      <button type="button" id="botonGoogle" class="botonGoogle">Ingresa con Google</button>
      <p>¿No tienes cuenta?</p>
      <butoon type="button" id="botonRegister" class="botonRegister">Registrate</button>
    </main>
  </div>
  <p class="mensajeErrorLogin" id="mensajeErrorLogin" ></p>
  <div class = "ultimo">
    <h4>Conoce compañer@s de entrenamiento y multiplica la motivación.</h4>
    <div class="imagen">
    <img class="img" src="../Imagenes/deportesvec.jpg"></div>
  </div>
  <footer> @Todos los derechos reservados<br>Solange Argomedo - Mónica Cofré - Gabriela Romero</footer>  `
  ;
  userData.innerHTML = data;

  //--------Evento boton para loguearse--------//
  let btonRegistro = userData.querySelector('#boton');
  btonRegistro.addEventListener('click', () => {
    login();
  });

  //--------Evento boton para ingresar con Google-------
  let btnGoogle = userData.querySelector('#botonGoogle');
  btnGoogle.addEventListener('click', () => {
    registerGoogle()
  });

  //-------Evento para boton y direccionar a REGISTRATE y nos muestra html para ingresar datos-------
  let btn2 = userData.querySelector('#botonRegister');
  btn2.addEventListener('click', () => {
    register()
  });

  //------Atributos de firebase -------------
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  //------Función para loguearse----------
  function login() {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLogin").value;

    //-----Codigo traido de firebase------
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);
        window.location.hash = 'post';
      })      
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/user-not-found") {
          root.querySelector("#mensajeErrorLogin").innerHTML = "usuario no regristrado";

        } else if (errorCode === "auth/wrong-password") {
          root.querySelector("#mensajeErrorLogin").innerHTML = "Contraseña incorrecta";
        }
        else if (errorCode === "auth/invalid-email") {
          root.querySelector("#mensajeErrorLogin").innerHTML = "Correo invalido";
        }
        else if (errorCode === "auth/internal-error") {
          root.querySelector("#mensajeErrorLogin").innerHTML = "Ingrese contraseña";
        }
      });
  }

  //----------Ingreso con google firebase---------//
  function registerGoogle() {
    //const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        
//------------ Esto le da un token de acceso de Google. Puede usarlo para acceder a la API de Google ----//
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
//----------La información del usuario registrado---------//
        const user = result.user;

        window.location.hash = 'post';

      }).catch((error) => {
       // Manejar errores aquí--------//
        const errorCode = error.code;
        const errorMessage = error.message;
       // El correo electrónico de la cuenta de usuario utilizada----//
        const email = error.email;
       // El tipo AuthCredential que se utilizó----------//
        const credential = GoogleAuthProvider.credentialFromError(error);
        
      });
  }
  window.location.hash = 'home';

  return userData
}