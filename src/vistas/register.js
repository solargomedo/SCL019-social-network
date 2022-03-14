
  export const register =  () => {
    
  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
  <form id="formLogin" class="FormLogin">
  <div class="name"> Nombre </div>
  <input type="text" id="registerNameLogin" class="registerNameLogin" placeholder= "Ingresa tu nombre"/>
  <div class="email"> Correo Electrónico </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
  <div class="password"> Contraseña </div>
  <span class="iconEye"><i id="checkEye" class="fas fa-eye-slash"></i></span>

  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu clave"/>
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


  
