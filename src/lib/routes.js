import { register } from '../vistas/register.js';
import { post } from '../vistas/post.js';
import { home } from '../vistas/home.js';

/* mostrar plantillas */
const showTemplate = (hash) => {
  const router = hash.substring(0);
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  // console.log("valor = " + router);
  switch (router) {
    case '':

    case '#home':
      containerRoot.appendChild(home());
      break;

    case '#register':
      containerRoot.appendChild(register());
      break;

    case '#post':
      containerRoot.appendChild(post());
      break;

    default:
      console.log(`valor = ${router}`);
      containerRoot.innerHTML = 'Ups!algo salio mal';
  }
};

export const initRouter = () => {
  window.addEventListener('load', showTemplate(window.location.hash));
  // console.log(showTemplate)
  // console.log(showTemplate(window.location.hash))
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      showTemplate(window.location.hash);
    };
  }
};
