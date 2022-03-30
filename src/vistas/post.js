export const post = () => {
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclass");
  const data = `
    <div class= mainclass>
    <div class = "header">
    <div class="logo">
    <img class="img" src="../Imagenes/mano1.png">  
    </div>
    <h1>Te Apaño!</h1>
    </div>
    <form id="formLogin" class= "FormLogin">
    <a span class="icon icon-home3" href="#muro">Muro</a>
    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    <input type="search" class="textarea" id="NamePost" placeholder="¿Cual es tu nombre?"/>
    <input type="search" class="textarea" id="tipPost" placeholder="Dejanos tu tips saludable"/>
    <input type="search" class="textarea" id="post" placeholder="¿Me apañas a entrenar?"/>
    <button class="botonPost" id="publicar">Publicar</button>  
    </form>
    </div>`;

  dataPost.innerHTML = data;

  window.location.hash = 'post';
  return dataPost

  }
