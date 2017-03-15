import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { signInUser } from '../api/aws/aws_cognito';
import { Field, reduxForm } from 'redux-form';
import { setUser } from '../actions/index';
import LoadingSpinner from '../components/loading_spinner';
import FacebookButton from './facebook_button';
import GoogleButton from './google_button';

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

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  onSubmit({ email, password }) {
    this.setState({ isLoading: true });
		signInUser({ email, password })
      .then((userProfileObject)=>{
			  localStorage.setItem('bolsa_email', email);
        userProfileObject.provider = 'aws';
			  this.props.setUser(userProfileObject);
        browserHistory.push('/')})
      .catch(() => {
        this.setState({ isLoading: true });
      });
  }

  showSpinner() {
    this.setState({ isLoading: true });
  }

  hideSpinner() {
    this.setState({ isLoading: false });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="body-content clearfix">
        <div className="block-section bg-color4">
          { this.state.isLoading ?
            <LoadingSpinner backgroundColor="#fff" top="200px" /> :
            <div className="container">
              <div className="panel panel-md">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p><FacebookButton text="Inicia Sesión con Facebook" showSpinner={this.showSpinner.bind(this)} hideSpinner={this.hideSpinner.bind(this)} /></p>
                      <p><GoogleButton text="Inicia Sesión Google" showSpinner={this.showSpinner.bind(this)} hideSpinner={this.hideSpinner.bind(this)} /></p>
                      <div className="white-space-10"></div>
                      <p className="text-center"><span className="span-line">Ó</span></p>
                      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="email" component={renderInput} type="email" label="Email" placeholder="Ingresa tu email" />
                        <Field name="password" component={renderInput} type="password" label="Contraseña" placeholder="Ingresa tu contraseña" />
                        <div className="form-group">
                          <div className="row">
                            <div className="col-xs-12 text-left">
                              <p className="help-block"><Link to="olvide_contrasena" className="forgot-pass-btn">¿Olvidaste tu contraseña?</Link></p>
                            </div>
                          </div>
                        </div>
                        <div className="form-group no-margin">
                          <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Iniciar Sesión</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-space-20"></div>
              <div className="text-center color-white">¿No eres miembro? &nbsp; <Link to="registro" className="link-white"><strong>Crea tu cuenta</strong></Link></div>
            </div>
          }
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.email) {
    errors.email = 'Este campo es obligatorio';
  }
  if(!values.password) {
    errors.password = 'Este campo es obligatorio';
  }

  return errors;
}

export default connect(null, { setUser })(reduxForm({
    form: 'Login',
    validate
})(Login));
