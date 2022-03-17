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

  <a href="#post" type="button" id="boton" class="boton">Ingresa</a>
  <a href="#post" type="button" id="boton2" class="boton2">Ingresa con Google</a>
  <p>¿No tienes cuenta?</p>
  <a href="#register" type="button" id="boton2" class="boton2">Registrate</a>

  </form>
  
  <div class="imagen">
  <img src="../Imagenes/deportesvec.jpg"></div>
    
  </div>
  `;
 userData.innerHTML = data;

 window.location.hash = 'home';
 return userData
}







