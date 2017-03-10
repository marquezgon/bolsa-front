import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { registerFacebookLoginWithCognito } from '../api/aws/aws_cognito';
import { browserHistory } from 'react-router';
import { setUser } from '../actions/index';

class FacebookButton extends Component {
  login() {
    this.props.showSpinner();
    const thisObj = this;
    window.FB.login(function (response) {
      registerFacebookLoginWithCognito(response)
        .then((identity) => {
          FB.api('/me', {fields: ['first_name', 'last_name', 'email']}, function({ email }) {
            const userObj = { email, userType: 'candidato', identity, provider: 'facebook' };
            axios.post(`http://localhost:7777/login`, { email, userType: userObj.userType, identity }).then(({ data }) => {
              localStorage.setItem('bolsa_user_token', data.token);
              localStorage.setItem('bolsa_email', email);
              thisObj.props.setUser(userObj);
              browserHistory.push('/'); //redirect to home once user has been authenticated
            })
          });
        }).catch(() => {
          thisObj.props.hideSpinner();
        })
    }, {scope: 'public_profile,email'})
  }

  render() {
    return (
      <a onClick={this.login.bind(this)} className="btn btn-primary btn-theme btn-block login-btn"><i className="fa fa-facebook pull-left bordered-right"></i> {this.props.text}</a>
    )
  }
}

export default connect(null, { setUser })(FacebookButton);
