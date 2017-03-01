import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signInUser } from '../api/aws/aws_cognito';
import { Field, reduxForm } from 'redux-form';
import { setUser } from '../actions/index';
import FacebookButton from './facebook_button';

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
  }

  onSubmit({ email, password }) {
		signInUser({
			email,
			password
		}).then((userProfileObject)=>{
			localStorage.setItem('candidato_email', email)
			this.props.setUser(userProfileObject);
    });
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
                    <p><FacebookButton text="Inicia Sesión con Facebook" /></p>
                    <p><a className="btn btn-danger btn-theme btn-block login-btn"><i className="fa fa-google-plus pull-left bordered-right"></i> Login with Google</a></p>
                    <div className="white-space-10"></div>
                    <p className="text-center"><span className="span-line">Ó</span></p>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                      <Field name="email" component={renderInput} type="email" label="Email" placeholder="Ingresa tu email" />
                      <Field name="password" component={renderInput} type="password" label="Contraseña" placeholder="Ingresa tu contraseña" />
                      <div className="form-group">
                        <div className="row">
                          <div className="col-xs-6">
                            <div className="checkbox flat-checkbox">
                              <label>
                                <input type="checkbox" />
                                <span className="fa fa-check"></span>
                                Remember me?
                              </label>
                            </div>
                          </div>
                          <div className="col-xs-6 text-right">
                            <p className="help-block"><a data-toggle="modal">¿Olvidaste tu contraseña?</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="form-group no-margin">
                        <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Log In</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-space-20"></div>
            <div className="text-center color-white">¿No eres miembro? &nbsp; <Link to="registro" className="link-white"><strong>Crea tu cuenta</strong></Link></div>
          </div>
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
