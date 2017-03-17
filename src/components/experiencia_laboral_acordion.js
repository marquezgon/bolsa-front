import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { dias, meses, ano, giro } from '../helpers/helper.js';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

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

class ExperienciaLaboralAcordion extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  handleCheckboxChange(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    return (
      <Accordion defaultActiveKey="1">
        <Panel header={<p><Glyphicon glyph="plus" /> Añadir Experiencia Laboral</p>} bsStyle="primary" eventKey="1">
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
              <Field name="puesto" component={renderTextarea} label="Funciones y Logros" placeholder="Describe tus logros, actividades realizadas, y las tecnologías que usaste" />
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
              {
                !this.state.checked ?
                <div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="diasTermino" component={renderSelect} options={dias} />
                  </div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="mesesTermino" component={renderSelect} options={meses} />
                  </div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="anoTermino" component={renderSelect} options={ano} />
                  </div>
                </div> : null
              }
              <p className="checkbox-inline"><input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} name="actualmente" />&nbsp;&nbsp;Actualmente</p>
            </div>
          </div>
        </Panel>
        <Panel header={<p><Glyphicon glyph="plus" /> Añadir Experiencia Laboral</p>} bsStyle="primary" eventKey="2">
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
              <Field name="puesto" component={renderTextarea} label="Funciones y Logros" placeholder="Describe tus logros, actividades realizadas, y las tecnologías que usaste" />
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
              {
                !this.state.checked ?
                <div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="diasTermino" component={renderSelect} options={dias} />
                  </div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="mesesTermino" component={renderSelect} options={meses} />
                  </div>
                  <div className="col-xs-4 no-side-padding">
                    <Field name="anoTermino" component={renderSelect} options={ano} />
                  </div>
                </div> : null
              }
              <p className="checkbox-inline"><input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} name="actualmente" />&nbsp;&nbsp;Actualmente</p>
            </div>
          </div>
        </Panel>
      </Accordion>
    )
  }
}

export default connect(null, null)(reduxForm({
    form: 'ExperienciaLaboral'
})(ExperienciaLaboralAcordion));
