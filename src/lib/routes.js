import { login } from '../vistas/login.js';
/*import { register } from '../vistas/register.js';*/
/*import { post } from '../vistas/post.js';*/
import { home } from '../vistas/home.js';

const showTemplate = (hash) =>{
 
  const router = hash.substring(0);
  const containerRoot =
      document.getElementById('root');
  containerRoot.innerHTML = '';

  console.log("valor = " + window.location);
  switch (router) {

      case '#home':
          containerRoot.appendChild(home())
          break;
      case '#login':
          containerRoot.appendChild(login())
          break;
      default:
        console.log("valor = " + router);
          containerRoot.innerHTML = `<p> Error 404 + router </p>`
  }
}

export const initRouter = () => {
  window.addEventListener('load', showTemplate(window.location.hash));
  if ('onhashchange' in window) {
      window.onhashchange = () => {
          showTemplate(window.location.hash);
      }
  }
}



