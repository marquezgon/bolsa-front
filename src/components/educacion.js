import React from 'react';
import EducacionAcordion from './educacion_acordion';

const Educacion = (props) => {
  return (
    <div className="col-sm-8 perfil-container top-margin">
      <h3 className="col-xs-12 text-center">Formación Académica</h3>
      <div className="col-xs-12 top-buffer">
        <EducacionAcordion />
      </div>
    </div>
  )
}

export default Educacion;
