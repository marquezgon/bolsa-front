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

class InformacionPersonal extends Component {
  render() {
    const dias = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ano = ['2016','2015','2014','2013','2012','2011','2010','2009','2008','2007','2006','2005','2004','2003','2002','2001','2000','1999','1998','1997','1996','1995','1994','1993','1992','1991','1990','1989','1988','1987','1986','1985','1984','1983','1982','1981','1980','1979','1978','1977','1976','1975','1974','1973','1972','1971','1970','1969','1968','1967','1966','1965','1964','1963','1962','1961','1960'];
    const sexo = ['Masculino', 'Femenino'];
    const nacionalidad = ['Costa Rica'];

    return (
      <div className="col-sm-8 perfil-container">
        <h3 className="col-xs-12 text-center">Información Personal</h3>
        <div className="col-sm-2 top-buffer">
          <img className="img-responsive img-circle centered" src="/images/default-profile-photo.png" alt="" />
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
              <Field name="direccion" component={renderInput} type="text" label="Dirección" placeholder="Ingresa tu dirección" />
            </div>
            <div className="col-xs-6">
              <Field name="ciudad" component={renderSelect} options={sexo} label="Ciudad" />
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
