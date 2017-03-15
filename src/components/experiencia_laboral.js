import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const renderInput = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <div>
            <input {...input} className="form-control" placeholder={placeholder} type={type}/>
            {touched && ((error && <div className="text-danger">{error}</div>))}
        </div>
    </div>
  )
}

const renderSelect = ({ input, label, type, options, meta: { touched, error, warning } }) => {
  const renderOptions = options.map((el, index) => {
      return <option key={index}>{el}</option>;
  });

  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
      {label ? <label>{label}</label> : null }
      <select {...input} className="form-control">
        {renderOptions}
      </select>
      {touched && ((error && <div className="text-danger">{error}</div>))}
    </div>
  )
}

class ExperienciaLaboral extends Component {
  render() {
    const giro = ['Selecciona un giro de la empresa', 'Agricultura / Pesca / Ganadería', 'Construcción / Obras', 'Educación', 'Energía', 'Entretenimiento / Deportes', 'Fabricación', 'Finanzas / Banca', 'Gobierno / No Lucro', 'Hostelería / Turismo', 'Informática / Hardware', 'Informática / Software', 'Internet', 'Legal / Asesoría', 'Materias Primas', 'Medios de Comunicación', 'Publicidad / RRPP', 'RRHH / Personal', 'Salud / Medicina', 'Servicios Profesionales', 'Telecomunicaciones', 'Transporte', 'Venta al Consumidor', 'Venta al por mayor', 'Otro'];

    return (
      <div className="col-sm-8 perfil-container top-margin">
        <h3 className="col-xs-12 text-center">Experiencia Laboral</h3>
        <div className="col-xs-12 top-buffer">
          <div className="row">
            <div className="col-xs-6">
              <Field name="empresa" component={renderInput} type="text" label="Empresa" placeholder="Nombre de la empresa" />
            </div>
            <div className="col-xs-6">
              <Field name="giro" component={renderSelect} options={giro} label="Giro de la Empresa" />
            </div>
            <div className="col-xs-6">
              <Field name="puesto" component={renderInput} type="text" label="Empresa" placeholder="Puesto dentro de la empresa" />
            </div>
            <div className="col-xs-6">
              <Field name="giro" component={renderSelect} options={giro} label="Giro de la Empresa" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(reduxForm({
    form: 'InformacionPersonal'
})(ExperienciaLaboral));
