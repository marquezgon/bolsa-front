import React, { Component } from 'react';
import ExperienciaLaboralAcordion from './experiencia_laboral_acordion';

const ExperienciaLaboral = (props) => {
  return (
    <div className="col-sm-8 perfil-container top-margin">
      <h3 className="col-xs-12 text-center">Experiencia Laboral</h3>
      <div className="col-xs-12 top-buffer">
        <ExperienciaLaboralAcordion />
      </div>
    </div>
  )
}

export default ExperienciaLaboral;
