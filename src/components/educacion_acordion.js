import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { meses, ano, nivelEstudios, statusEstudios } from '../helpers/helper.js';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

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

class EducacionAcordion extends Component {
  render() {
    return (
      <Accordion defaultActiveKey="1">
        <Panel header={<p><Glyphicon glyph="plus" /> Añadir Formación Académica</p>} bsStyle="primary" eventKey="1">
          <div className="row">
            <div className="col-xs-12">
              <Field name="institucion" component={renderInput} type="text" label="Institución" placeholder="Nombre de la institución" />
            </div>
            <div className="col-xs-6">
              <Field name="nivelEstudios" component={renderSelect} options={nivelEstudios} label="Nivel de Estudios" />
            </div>
            <div className="col-xs-6">
              <Field name="statusEstudios" component={renderSelect} options={statusEstudios} label="Giro de la Empresa" />
            </div>
            <div className="row">
              <div className="col-xs-6">
                <label className="col-xs-12">Inicio</label>
                <div className="col-xs-6 no-right-side-padding">
                  <Field name="giro" component={renderSelect} options={meses} />
                </div>
                <div className="col-xs-6 no-side-padding">
                  <Field name="anoInicio" component={renderSelect} options={ano} />
                </div>
              </div>
              <div className="col-xs-6">
                <label className="col-xs-12 no-left-side-padding">Fin</label>
                <div className="col-xs-6 no-side-padding">
                  <Field name="mesTermino" component={renderSelect} options={meses} />
                </div>
                <div className="col-xs-6 no-left-side-padding">
                  <Field name="anoTermino" component={renderSelect} options={ano} />
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Accordion>
    )
  }
}

export default connect(null, null)(reduxForm({
    form: 'Educacion'
})(EducacionAcordion));
