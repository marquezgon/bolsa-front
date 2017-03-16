import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { dias, meses, ano } from '../helpers/helper.js';

const renderTextarea = ({ input, label, type, placeholder, meta: { touched, error, warning } }) => {
  return (
    <div className={`form-group ${touched && error ? 'has-danger' : ''}`}>
        <label>{label}</label>
        <div>
            <textarea {...input} className="form-control" rows="3" placeholder={placeholder}></textarea>
            {touched && ((error && <div className="text-danger">{error}</div>))}
        </div>
    </div>
  )
}

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
              <Field name="puesto" component={renderInput} type="text" label="Puesto" placeholder="Puesto dentro de la empresa" />
            </div>
            <div className="col-xs-6">
              <Field name="salario" component={renderInput} type="text" label="Salario" placeholder="Ingresa tu salario" />
            </div>
            <div className="col-xs-12">
              <Field name="puesto" component={renderTextarea} label="Puesto" placeholder="Describe tus logros, actividades realizadas, y las tecnologías que usaste" />
            </div>
            <div className="col-xs-6">
              <label className="col-xs-12 no-side-padding">Fecha de Inicio</label>
              <div className="col-xs-4 no-side-padding">
                <Field name="diasInicio" component={renderSelect} options={dias} />
              </div>
              <div className="col-xs-4 no-side-padding">
                <Field name="mesesInicio" component={renderSelect} options={meses} />
              </div>
              <div className="col-xs-4 no-side-padding">
                <Field name="anoInicio" component={renderSelect} options={ano} />
              </div>
            </div>
            <div className="col-xs-6">
              <label className="col-xs-12 no-side-padding">Fecha de Término</label>
              <div className="col-xs-4 no-side-padding">
                <Field name="diasTermino" component={renderSelect} options={dias} />
              </div>
              <div className="col-xs-4 no-side-padding">
                <Field name="mesesTermino" component={renderSelect} options={meses} />
              </div>
              <div className="col-xs-4 no-side-padding">
                <Field name="anoTermino" component={renderSelect} options={ano} />
              </div>
              <p class="checkbox-inline"><input type="checkbox" value="" />&nbsp;&nbsp;Actualmente</p>
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
