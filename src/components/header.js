import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './nav_link';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { showDropdown: false };
  }
  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

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
            {this.props.authenticated ?
              <ul className="nav navbar-nav navbar-right">
                <li className={`dropdown ${this.state.showDropdown ? 'open' : ''}`}>
                  <a onClick={this.toggleDropdown.bind(this)} className="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Cerrar Sesión</a></li>
                  </ul>
                </li>
              </ul> :
              <ul className="nav navbar-nav navbar-right">
                <li className="link-btn"><Link to="/login"><span className="btn btn-theme btn-pill btn-xs btn-line">Iniciar Sesión</span></Link></li>
                <li className="link-btn"><Link to="registro"><span className="btn btn-theme  btn-pill btn-xs btn-line">Registrarse</span></Link></li>
              </ul>
            }
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.user.authenticated
  }
}

export default connect(mapStateToProps, null)(Header);
