import React, { Component } from 'react';
import { registerFacebookLoginWithCognito } from '../api/aws/aws_cognito';

class FacebookButton extends Component {
  login() {
    window.FB.login(function (response) {
      registerFacebookLoginWithCognito(response)
        .then(() => {
          FB.api('/me', {fields: ['first_name', 'last_name', 'email']}, function(userInfo) {
            console.log(userInfo);
          });
        })
    }, {scope: 'public_profile,email,user_friends'})
  }

  render() {
    return (
      <a onClick={this.login.bind(this)} className="btn btn-primary btn-theme btn-block login-btn"><i className="fa fa-facebook pull-left bordered-right"></i> {this.props.text}</a>
    )
  }
}

export default FacebookButton;
