export const muro = () => {
    const dataMuro = document.createElement('div');
    dataMuro.setAttribute("class", "mainclass");
    const data = `
      <main>
      <section  class= "ContenedorMuro">
        <div class="ContenedorMuro">
         <a span class="icon icon-home3" href="#post">Volver a Post </a>
          <button class="returnBtn" type="submit">
  
        <a href="#home" type="button" id="btnCerrar" class="btnCerrar">Cerrar sesion</a>
      </div>
       
        <section id="contenedor-perfil" class="contenedor-perfil"
          <article class="recet">
            <input type="search" class="textarea" id="NamePost" placeholder="PROBANDO ANDO"/>
    
            </main>
       </div> `;

  dataMuro.innerHTML = data;

  window.location.hash = 'muro';
  return dataMuro
}
