import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/App.css';

import Routes from '../routes/routes';

const App = () => {
  return (
    <div className='App'>
        <div className='nav-bar'>
          <NavLink className="link" activeClassName='active' exact to='/'>
            Inicio
          </NavLink>
          <NavLink className="link" activeClassName='active' exact to='/favs'>
            Favoritos
          </NavLink>
          <NavLink className="link" activeClassName='active' exact to='/login'>
            Login
          </NavLink>
        </div>
        <Routes />
    </div>
  );
}

export default App;
