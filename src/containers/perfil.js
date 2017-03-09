import React, { Component } from 'react';
import { connect } from 'react-redux';

class Perfil extends Component {
  render() {
    return (
      <div className="container perfil-main-container">
        <div className="row perfil-row">
          <div className="col-sm-8 perfil-container">
            <div className="col-sm-4 top-buffer">
              <img className="img-responsive img-circle centered" src="/images/default-profile-photo.png" alt="" />
            </div>
            <div className="col-sm-8 top-buffer">
              Info aca
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-3 perfil-container">
            hey son yeah im here
          </div>
        </div>
      </div>
    )
  }
}

export default Perfil;
