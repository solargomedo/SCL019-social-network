export const home = ()=>{
    const userData = document.createElement('div');
  userData.className = 'userData';
  userData.setAttribute("class", "mainclass");
  const data = `
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
 userData.innerHTML = data;

 window.location.hash = 'home';
 return userData
}







