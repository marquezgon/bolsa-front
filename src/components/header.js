import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import NavLink from './nav_link';
import { connect } from 'react-redux';
import { retrieveUserFromLocalStorage } from '../api/aws/aws_cognito';
import axios from 'axios';
import { signOutUser } from '../api/aws/aws_cognito';
import { logoutUser, setUser } from '../actions/index';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { showDropdown: false };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  componentWillMount(){
    if(localStorage.bolsa_user_token) {
      retrieveUserFromLocalStorage()
        .then((data) => {
          console.log(data);
        }).catch(() => {
          axios.get('http://localhost:7777/checkSocialSession', { headers: { 'Authorization': `Bearer ${localStorage.bolsa_user_token}` } })
            .then((user) => {
              const { userType, email, identity } = user.data;
              this.props.setUser({ userType, email, identity });
            });
        })
      //checkSession()
    }
  }

  logout() {
    signOutUser();
    this.props.logoutUser();
    delete localStorage.bolsa_user_token;
    browserHistory.push('/');
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

                <Nav bsClass="nav navbar-nav navbar-right">
                  <NavDropdown eventKey={3} title="Dropdown" id="menu-nav">
                    <MenuItem eventKey={3.1} href="/perfil">Mi Perfil</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.2} onClick={this.logout.bind(this)}>Cerrar Sesión</MenuItem>
                  </NavDropdown>
                </Nav> :
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

export default connect(mapStateToProps, { logoutUser, setUser })(Header);
