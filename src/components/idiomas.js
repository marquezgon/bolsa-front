import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { idiomas, nivelIdiomas } from '../helpers/helper.js';

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

class Idiomas extends Component {
  render() {
    return (
      <div className="col-sm-8 perfil-container top-margin">
        <h3 className="col-xs-12 text-center">Idiomas</h3>
        <div className="col-xs-12 top-buffer">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="col-xs-6">
                <Field name="nivelEstudios" component={renderSelect} options={idiomas} label="Idioma" />
              </div>
              <div className="col-xs-6">
                <Field name="nivelEstudios" component={renderSelect} options={nivelIdiomas} label="Nivel del Idioma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(reduxForm({
    form: 'Idiomas'
})(Idiomas));
