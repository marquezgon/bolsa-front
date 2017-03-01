import React, { Component } from 'react';
import { registerFacebookLoginWithCognito } from '../api/aws/aws_cognito';

class FacebookButton extends Component {
  login() {
    window.FB.login(function (response) {
      registerFacebookLoginWithCognito(response)
    })
  }

  render() {
    return (
      <a onClick={this.login.bind(this)} className="btn btn-primary btn-theme btn-block login-btn"><i className="fa fa-facebook pull-left bordered-right"></i> {this.props.text}</a>
    )
  }
}

export default FacebookButton;
