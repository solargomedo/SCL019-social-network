export const home = ()=>{
    const userData = document.createElement('div');
  userData.className = 'userData';
  userData.setAttribute("class", "mainclass");
  const data = `
  <div class="titulo"> Te apaño </div>
 
  <form id="formLogin" class="FormLogin">
  <div class="email"> Correo electrónico </div>
  <input type="email" id="emailLogin" class="emailLogin" placeholder= "Ingresa tu e-mail"/>
  <div class="password"> Contraseña </div>
  <span class="iconEye"><i id="checkEye" class="fas fa-eye-slash"></i></span>
  <input type="password" id="passwordLogin" class="passwordLogin" placeholder= "Ingresa tu clave"/>
  <input type="submit" id="submit-register" class="submit-register" value="Ingresar">
  <button id="boton" class="boton">Ingresa con Google</button>
  <div class="registrate"> ¿No tienes cuenta?</div>
  <button id="boton" class="boton">Registrate</button>
  </form>
  <div class="imagen">
  <img src="../Imagenes/deportesvec.jpg"> </div>
    
  </div>
  `;
 userData.innerHTML = data;

 window.location.hash = 'home';
 return userData
}







