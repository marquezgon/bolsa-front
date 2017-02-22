import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { resetVerificationPIN } from '../api/aws/aws_cognito';
import LoadingSpinner from './loading_spinner';

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
  constructor(props) {
    super(props);

    this.state = { isLoading: false, isSendingCode: false, isSent: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(email) {
    this.setState({ isSendingCode: true })
    resetVerificationPIN(email)
      .then((result) => {
        this.setState({ isSendingCode: false, isSent: true });
        setTimeout(() => {
          this.setState({ isSent: false });
        }, 1300);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillMount() {
    this.props.dispatch(change('Verificar', 'email', localStorage.candidato_email));
  }

  render() {
    const { email } =  this.props;

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
                      <div>
                        { this.state.isSendingCode ?
                          <LoadingSpinner backgroundColor="#bbb" top="0" /> :
                          this.state.isSent ?
                          <a className="text-success"><i className="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Código de confirmación envíado</a> :
                          <a onClick={() => this.handleClick(email)} className="resend-code">Reenviar código de confirmación</a>
                        }
                      </div>
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

const selector = formValueSelector('Verificar') // <-- same as form name

export default connect(state => {
  // can select values individually
  const email = selector(state, 'email')

  return {
    email
  }
}, null)(reduxForm({
  form: 'Verificar'
})(Verificar));
