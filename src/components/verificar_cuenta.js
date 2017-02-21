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

class Verificar extends Component {
  render() {
    return (
      <div className="body-content clearfix">
        <div className="block-section bg-color4">
          <div className="container">
            <div className="panel panel-md">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="white-space-10"></div>
                    <p className="text-center"><span className="span-line">VERIFICA TU CUENTA</span></p>
                    <form>
                      <Field name="email" component={renderInput} type="email" label="Email" placeholder="Ingresa tu email" />
                      <Field name="pin" component={renderInput} type="text" label="Código de Verificación" placeholder="Ingresa tu código de verificación" />
                      <div className="white-space-10"></div>
                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Verificar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-space-20"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(reduxForm({
    form: 'Verificar'
})(Verificar));
