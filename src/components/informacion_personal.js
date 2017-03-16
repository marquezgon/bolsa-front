import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { dias, meses, ano, sexo, nacionalidad, zona, civil } from '../helpers/helper.js';

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

class InformacionPersonal extends Component {
  render() {
    return (
      <div className="col-sm-8 perfil-container">
        <h3 className="col-xs-12 text-center">Información Personal</h3>
        <div className="col-sm-2 top-buffer">
          <img className="img-responsive img-circle centered" src="/images/default-profile-photo.png" alt="" />
          <button className="btn btn-default change-img-btn">Cambiar</button>
        </div>
        <div className="col-sm-10 top-buffer">
          <div className="row">
            <div className="col-xs-6">
              <Field name="nombre" component={renderInput} type="text" label="Nombre(s)" placeholder="Ingresa tu(s) nombre(s)" />
            </div>
            <div className="col-xs-6">
              <Field name="apellidos" component={renderInput} type="text" label="Apellidos" placeholder="Ingresa tus apellidos" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-4">
              <Field name="sexo" component={renderSelect} options={sexo} label="Sexo" />
            </div>
            <div className="col-xs-6 col-sm-4">
              <label>Fecha de Nacimiento</label>
              <div className="col-xs-4 col-sm-4 no-side-padding">
                <Field name="dias" component={renderSelect} options={dias} />
              </div>
              <div className="col-xs-4 col-sm-4 no-side-padding">
                <Field name="meses" component={renderSelect} options={meses} />
              </div>
              <div className="col-xs-4 col-sm-4 no-side-padding">
                <Field name="ano" component={renderSelect} options={ano} />
              </div>
            </div>
            <div className="col-xs-6 col-sm-4">
              <Field name="nacionalidad" component={renderSelect} options={nacionalidad} label="Nacionalidad" />
            </div>
            <div className="col-xs-6">
              <Field name="direccion" component={renderInput} type="text" label="Localidad de Residencia" placeholder="Localidad" />
            </div>
            <div className="col-xs-6">
              <Field name="ciudad" component={renderSelect} options={zona} label="Zona de Residencia" />
            </div>
            <div className="col-xs-6 col-sm-4">
              <Field name="civil" component={renderSelect} options={civil} label="Estado Civil" />
            </div>
            <div className="col-xs-6 col-sm-4">
              <Field name="phone" component={renderInput} type="text" label="Teléfono 1" placeholder="" />
            </div>
            <div className="col-xs-6 col-sm-4">
              <Field name="secondary_phone" component={renderInput} type="text" label="Teléfono 2" placeholder="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(reduxForm({
    form: 'InformacionPersonal'
})(InformacionPersonal));
