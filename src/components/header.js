import React, { Component } from 'react';
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default main-navbar hidden-sm hidden-xs">
        <div className="container">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className=""><Link to="/"><strong>Candidato</strong></Link></li>
              <li className=""><a href="resume_list.html"><strong>Empresa</strong></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="link-btn"><a href="login.html"><span className="btn btn-theme btn-pill btn-xs btn-line">Iniciar Sesión</span></a></li>
              <li className="link-btn"><a href="register.html"><span className="btn btn-theme  btn-pill btn-xs btn-line">Registrarse</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
