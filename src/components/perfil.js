import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformacionPersonal from '../containers/informacion_personal';

class Perfil extends Component {
  render() {
    return (
      <div className="container perfil-main-container">
        <div className="row perfil-row">
          <InformacionPersonal />
          <div className="col-sm-1"></div>
          <div className="col-sm-3 perfil-container">
            hey son yeah im here
          </div>
        </div>
      </div>
    )
  }
}

export default Perfil;
