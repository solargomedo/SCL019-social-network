export const post = () => {
  const userData = document.createElement('div');
  userData.setAttribute("class", "mainclass");
  const data = `
    <main>
    <section  class= "contentBox">
    <div class="iconshome">
    <a span class="icon icon-home3" href="#postPage">Muro</a>
    <button class="returnBtn" type="submit">
    <a href="#home" type="button" id="botonpost" class="botonpost">Cerrar cesion</a>
    </div>
     
      <section id="contenedor-perfil" class="contenedor-perfil">
        <article class="recet">
          <input type="search" class="textarea" name="textarea" id="postt" 
            placeholder="¿Cual es tu nombre?"/>
          <input type="search" class="textarea" name="textarea" id="posttt" 
            placeholder="Dejanos tu tips saludable"/>
          <input type="search" class="textarea" name="textarea" id="post" 
            placeholder="¿Me apañas a entrenar?"/>
            </article>
          <button class="botones-post" type="button" id="publicar">Publicar</button>
    
        
    </section>
    </main>


      </section>
      <section class= "link" >
      <div class="linkId">
      <a href="https://www.salesianos.edu/wp-content/uploads/2020/05/Sin-ti%CC%81tulo-13-3.png"><img src=""></a> 
      
     </div>
      </section>
  
    </main>
       </div> `;

  userData.innerHTML = data;

  window.location.hash = 'post';
  return userData

  }
