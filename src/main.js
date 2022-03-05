
// Este es el punto de entrada de tu aplicacion

//import { myFunction } from "./lib/index.js";

//myFunction();


const infoContainer = document.createElement('div');
  infoContainer.className = 'infoContainer';
  document.getElementById('root').appendChild(infoContainer);


  // Ubicacion del texto REGISTRO
  const registerText = document.createElement('div');
  registerText.className = 'registerText';
  registerText.textContent = 'REGISTER';

  infoContainer.appendChild(registerText);

  
  // Creacion de los campos de texto

  const userData = document.createElement('div');
  userData.className = 'userData';
  userData.innerHTML = `
  <form id="formLogin" class="FormLogin">
  <div class="name"> Name </div>
  <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Enter your name"/>
  <div class="nickName"> Nickname </div>
  <input type="text" id="nickNameLogin" class="nickNameLogin" placeholder= "Enter your nickname"/>
  <div class="email"> E-mail </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Enter e-mail"/>
  <div class="password"> Password </div>
  <span class="iconEye"><i id="checkEye" class="fas fa-eye-slash"></i></span>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Enter password"/>
  <input type="submit" id="submit-register" class="submit-register" value="Continue">
  </form>
  </div>
  `;

  infoContainer.appendChild(userData);
  // console.log('Hola mundo!');

  // Mostrar y ocultar contraseña
  const iconEye = userData.querySelector('.iconEye');
  const checkEye = userData.querySelector('#checkEye');
  const passwordLogin = userData.querySelector('#passwordLogin');

  iconEye.addEventListener('click', () => {
    if (passwordLogin.type === 'password') {
      passwordLogin.type = 'text';
      checkEye.classList.remove('fa-eye-slash');
      checkEye.classList.add('fa-eye');
    } else {
      passwordLogin.type = 'password';
      checkEye.classList.add('fa-eye-slash');
      checkEye.classList.remove('fa-eye');
    }
  });

