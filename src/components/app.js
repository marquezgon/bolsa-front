import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveUserFromLocalStorage } from '../api/aws/aws_cognito';
import axios from 'axios';
import Header from '../containers/header';
import Footer from './footer';
import LoadingSpinner from '../components/loading_spinner';
import { logoutUser, setUser, loadUser } from '../actions/index';

class App extends Component {
  componentWillMount(){
    if(localStorage.bolsa_user_token) {
      retrieveUserFromLocalStorage()
        .then((data) => {
          this.props.loadUser();
        }).catch(() => {
          axios.get('http://localhost:7777/checkSocialSession', { headers: { 'Authorization': `Bearer ${localStorage.bolsa_user_token}` } })
            .then((user) => {
              const { userType, email, identity } = user.data;
              this.props.setUser({ userType, email, identity });
              this.props.loadUser();
            }).catch(() => {
              //no session stored either via aws nor my own backend auth system
              this.props.loadUser();
              delete localStorage.bolsa_user_token;
            });
        })
      //checkSession()
    } else {
      this.props.loadUser();
    }
  }

  render() {
    return (
        <div>
        { this.props.pageLoaded ?
          <div>
            <header className="main-header">
              <Header />
              {this.props.children}
            </header>
            <Footer />
          </div>:
          <div>
            <div className="loading-page-container">
              <div className="vertical-center">
                <LoadingSpinner top="0" />
              </div>
            </div>
          </div>
        }
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageLoaded: state.user.pageLoaded
  };
}

export default connect(mapStateToProps, { setUser, loadUser })(App)
