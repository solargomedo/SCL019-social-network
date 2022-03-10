// Ubicacion del texto REGISTRO
/*let infoContainer = document.getElementsByClassName('infoContainer')[0]
const registerText = document.createElement('div');
registerText.className = 'registerText';
registerText.textContent = 'REGISTER';
infoContainer.appendChild(registerText);*/

 

  
 
  export const register =  () => {
    
    const userData = document.createElement('div');
  userData.className = 'userData';
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
  <input type="submit" id="submit-register" class="submit-register" value="Registrarse">
  </form>
  </div>
  `;
 userData.innerHTML = data;

 window.location.hash = 'register';
 return userData
    //viewLogin.innerHTML= formularioregister;

    return viewLogin
    }


  
