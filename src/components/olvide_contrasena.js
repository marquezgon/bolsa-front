import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import LoadingSpinner from './loading_spinner';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { forgotPassword } from '../api/aws/aws_cognito';

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

class OlvideContrasena extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, cognitoUserPackage: false, isLoadingRedirect: false };
  }

  sendVerificationPIN(values) {
    this.setState({ isLoading: true });
    forgotPassword(values.email)
			.then((cognitoUserPackage)=>{
				this.setState({
					cognitoUserPackage: cognitoUserPackage,
					isLoading: false
				});
        console.log(this.state.cognitoUserPackage);
			})
			.catch((err)=>{
				this.setState({
					isLoading: false
				})
			})
  }

  resetPassword(values) {
    if(values.password == values.confirm_password) {
      this.setState({isLoadingRedirect: true});
      this.state.cognitoUserPackage.cognitoUser.confirmPassword(values.pin, values.password, this.state.cognitoUserPackage.thirdArg);
      setTimeout(()=>{
        browserHistory.push("/login")
      }, 500)
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="body-content clearfix">
        <div className="block-section bg-color4">
          {
            this.state.isLoadingRedirect ?
            <LoadingSpinner backgroundColor="#fff" top="200px" /> :
            <div className="container">
              <div className="panel panel-md">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="white-space-10"></div>
                      <p className="text-center"><span className="span-line">RESTABLECE TU CONTRASEÑA</span></p>
                      {
                        this.state.cognitoUserPackage ?
                        <form onSubmit={handleSubmit(this.resetPassword.bind(this))} >
                          <Field name="pin" component={renderInput} type="text" label="PIN de Verificación" placeholder="Ingresa el PIN que se envió a tu correo" />
                          <Field name="password" component={renderInput} type="password" label="Contraseña" placeholder="Ingresa una nueva contraseña" />
                          <Field name="confirm_password" component={renderInput} type="password" label="Repite Contraseña" placeholder="Vuelve a ingresar tu nueva contraseña" />
                          {
                            this.state.error ?
                            <div className="text-danger">{this.state.errorText}</div> : null
                          }
                          <div className="white-space-10"></div>
                          <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Cambiar Contraseña</button>
                        </form> :
                        <form onSubmit={handleSubmit(this.sendVerificationPIN.bind(this))} >
                          <Field name="email" component={renderInput} type="email" label="Email" placeholder="Ingresa tu email" />
                          <div className="white-space-10"></div>
                          <div>
                            { this.state.isLoading ?
                              <LoadingSpinner backgroundColor="#bbb" top="0" /> :
                              <button type="submit" className="btn btn-theme btn-lg btn-t-primary btn-block">Enviar PIN a mi correo</button>
                            }
                          </div>
                        </form>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="white-space-20"></div>
            </div>
          }
        </div>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if(!values.pin) {
    errors.pin = 'Este campo es obligatorio';
  }

  if(!values.password) {
    errors.password = 'Este campo es obligatorio';
  }

  if(!values.confirm_password) {
    errors.confirm_password = 'Este campo es obligatorio';
  }

  if(!values.email) {
    errors.email = 'Este campo es obligatorio';
  }

  return errors;
}

export default connect(null, null)(reduxForm({
  form: 'ResetPassword',
  validate
})(OlvideContrasena));
