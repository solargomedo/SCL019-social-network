import { login } from '../vistas/login.js';
import { register } from '../vistas/register.js';
import { home } from '../vistas/home.js';

export const routes = (hash) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    case '#/login':
      root.appendChild(login());
      break;
    case '#/register':
      root.appendChild(register());
      break;
    case '#/home':
      root.appendChild(home());
      break;
    default:
      alert('¡Ups, parece que te has equivocado!');
  }
};




document.getElementById('root').appendChild(infoContainer);