import React, { Component } from 'react';
import { connect } from 'react-redux';
import InformacionPersonal from '../components/informacion_personal';
import ExperienciaLaboral from '../components/experiencia_laboral';
import Educacion from '../components/educacion';
import Idiomas from '../components/idiomas';

class Perfil extends Component {
  render() {
    return (
      <div className="container perfil-main-container">
        <div className="row perfil-row">
          <div>
            <InformacionPersonal />
            <div className="col-sm-1"></div>
            <div className="col-sm-3 perfil-container">
              something goes here
            </div>
          </div>
          <div>
            <ExperienciaLaboral />
            <div className="col-sm-1 top-margin"></div>
            <div className="col-sm-3 perfil-container top-margin">
              additional info goes here
            </div>
          </div>
          <div>
            <Educacion />
            <div className="col-sm-1 top-margin"></div>
            <div className="col-sm-3 perfil-container top-margin">
              something else goes here
            </div>
          </div>
          <div>
            <Idiomas />
            <div className="col-sm-1 top-margin"></div>
            <div className="col-sm-3 perfil-container top-margin">
              something else goes here
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Perfil;
