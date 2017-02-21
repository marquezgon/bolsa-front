import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { signUpUser } from '../api/aws/aws_cognito';

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

class Registro extends Component {
  onSubmit(values) {
    signUpUser(values)
			.then(({email})=>{
				// if successful, then save the email to localStorage so we can pre-fill the email form on the login & verify account screens
				localStorage.setItem('User_Email', email)
				// re-route to the verify account screen
				browserHistory.push('/verificar_cuenta')
        console.log("success");
			})
			.catch((err)=>{
				console.log(err)
				// if failure, display the error message and toggle the loading icon to disappear
				this.setState({
					errorMessage: err.message,
					loading: false
				})
			})
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="body-content clearfix">
        <div className="block-section bg-color4">
          <div className="container">
            <div className="panel panel-md">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <p><a href="#" className="btn btn-primary btn-theme btn-block"><i className="fa fa-facebook pull-left bordered-right"></i> Register with Facebook</a></p>
                    <p><a href="#" className="btn btn-danger btn-theme btn-block"><i className="fa fa-google-plus pull-left bordered-right"></i> Register with Google</a></p>
                    <div className="white-space-10"></div>
                    <p className="text-center"><span className="span-line">OR</span></p>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                      <Field name="nombre" component={renderInput} type="text" label="Nombre(s)" placeholder="Ingresa tu nombre" />
                      <Field name="apellidos" component={renderInput} type="text" label="Apellidos" placeholder="Ingresa tus apellidos" />
                      <Field name="email" component={renderInput} type="email" label="Email" placeholder="Ingresa tu email" />
                      <Field name="password" component={renderInput} type="password" label="Contraseña" placeholder="Ingresa tu contraseña" />
                      <div className="white-space-10"></div>
                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Registrar</button>
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

function validate(values) {
  const errors = {};

  if(!values.nombre) {
    errors.nombre = 'Este campo es obligatorio';
  }
  if(!values.apellidos) {
    errors.apellidos = 'Este campo es obligatorio';
  }
  if(!values.email) {
    errors.email = 'Este campo es obligatorio';
  }
  if(!values.password) {
    errors.password = 'Este campo es obligatorio';
  }

  return errors;
}

export default connect(null, null)(reduxForm({
    form: 'Registro',
    validate
})(Registro));
