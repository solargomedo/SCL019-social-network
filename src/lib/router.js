import { loginUser } from '../vistas/login.js';
import { registerUser } from '../vistas/register.js';
import { home } from '../vistas/home.js';

export const changeRoute = (hash) => {
  const root = document.getElementById('root');
  root.innerHTML = '';

  switch (hash) {
    case '':
    case '#':
    case '#/':
    case '#/login':
      root.appendChild(loginUser());
      break;
    case '#/register':
      root.appendChild(registerUser());
      break;
    case '#/home':
      root.appendChild(home());
      break;
    default:
      alert('¡Ups, parece que te has equivocado!');
  }
};




document.getElementById('root').appendChild(infoContainer);