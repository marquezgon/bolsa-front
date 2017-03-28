import React, { Component } from 'react';
import axios from 'axios';
import { registerGoogleLoginWithCognito } from '../api/aws/aws_cognito';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setUser } from '../actions/index';

class GoogleButton extends Component {
  componentDidMount() {
    let auth2 = null;
    const thisObj = this;
    window.gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '114519604320-28gr7mnl6hmb2et19dhrfpmij79602d3.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      attachSignin(document.getElementById('google-login-btn'));
    });

    function attachSignin(element) {
      auth2.attachClickHandler(element, {}, function(googleUser) {
        registerGoogleLoginWithCognito(googleUser).then((identity) => {
          const email = googleUser.getBasicProfile().getEmail();
          const userObj = { email, userType: 'candidato', identity, provider: 'google' };
          axios.post(`http://localhost:7777/login`, { email, userType: userObj.userType, identity }).then(({ data }) => {
            console.log(data);
            localStorage.setItem('bolsa_user_token', data.token);
            localStorage.setItem('bolsa_email', email);
            thisObj.props.setUser(userObj);
            browserHistory.push('/');
          })
        });
      }, function(error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
    }
  }

  render() {
    return (
      <a id="google-login-btn" className="btn btn-danger btn-theme btn-block login-btn"><i className="fa fa-google-plus pull-left bordered-right"></i> {this.props.text}</a>
    )
  }
}

export default connect(null, { setUser })(GoogleButton);
