export const post = () => {
  const dataPost = document.createElement('div');
  dataPost.setAttribute("class", "mainclass");
  const data = `
    <main>
    <section  class= "contentBox">
    <div class="iconshome">
    <a span class="icon icon-home3" href="#muro">Muro</a>
    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
    </div>
    </section>
    <section id="contenedor-perfil" class="contenedor-perfil"
    <article class="recet">
    <input type="search" class="textarea" id="NamePost" placeholder="¿Cual es tu nombre?"/>
    <input type="search" class="textarea" id="tipPost" placeholder="Dejanos tu tips saludable"/>
    <input type="search" class="textarea" id="post" placeholder="¿Me apañas a entrenar?"/>
    <button class="botonPost" id="publicar">Publicar</button>  
    </section>
    </main>`;

  dataPost.innerHTML = data;

  window.location.hash = 'post';
  return dataPost

  }
