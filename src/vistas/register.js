export const registerUser = () => {
    const viewRegister = document.createElement('section');
    const formularioLogin = `<form id = "formularioRegistro" class = "formularioRegistro">
    
    <div class="register-container">
      <div class="container-images">
        <div class="illustration">
          <img id="" src="" alt="">
        </div>
      </div>
      <div class="register-credentials">
        <div class="logo">
          <img id="logo" src="" alt="">
        </div>
        
        <div class="form">
          <input type="text" id="name" placeholder="Nombre de usuario"></input>
          <input type="email" id="email" placeholder="Email"></input>
          <input type="password" id="password" placeholder="Contraseña"></input>
        </div>
        <div class="buttons">
          <button id="registerBtn">Registrate</button>
        </div>
        <div class="conditions">
        <h4> Al hacer click en “Registrarte”, confirmo que leí y acepto los <a href='#/login'>Acuerdos de convivencia.</a></h4>
        </div>
        <div class="login-here">
          <h4>¿Ya tienes cuenta?<a href='#/login'>Inicia sesión aqui</a></h4>
        </div>
    
      </div>
    </div>
  `;
  viewRegister.innerHTML = formularioLogin ;
  return viewRegister;
};  

