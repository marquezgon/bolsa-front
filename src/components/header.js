import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './nav_link';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default main-navbar hidden-sm hidden-xs">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav" id="navbar-header-ul">
              <li><Link to="/"><img src="http://localhost:8075/images/logo.png" width="100" /></Link></li>
              <NavLink to="/"><strong>Candidato</strong></NavLink>
              <NavLink to="/empresa"><strong>Empresa</strong></NavLink>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="link-btn"><Link to="/login"><span className="btn btn-theme btn-pill btn-xs btn-line">Iniciar Sesión</span></Link></li>
              <li className="link-btn"><Link to="registro"><span className="btn btn-theme  btn-pill btn-xs btn-line">Registrarse</span></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
