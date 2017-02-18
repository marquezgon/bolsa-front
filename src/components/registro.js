import React, { Component } from 'react';

class Registro extends Component {
  render() {
    return (
      <div className="body-content clearfix">
        <div className="block-section bg-color4">
          <div className="container">
            <div className="panel panel-md">
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-12">
                    <p><a href="#" className="btn btn-primary btn-theme btn-block"><i className="fa fa-facebook pull-left bordered-right"></i> Register with Facebook</a></p>
                    <p><a href="#" className="btn btn-danger btn-theme btn-block"><i className="fa fa-google-plus pull-left bordered-right"></i> Register with Google</a></p>
                    <div className="white-space-10"></div>
                    <p className="text-center"><span className="span-line">OR</span></p>
                    <form>
                      <div className="form-group">
                        <label>Nombre(s)</label>
                        <input type="text" className="form-control" placeholder="Ingresa tu nombre" />
                      </div>
                      <div className="form-group">
                        <label>Apellidos</label>
                        <input type="text" className="form-control" placeholder="Ingresa tus apellidos" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email" />
                      </div>
                      <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña" />
                      </div>
                      <div className="white-space-10"></div>
                      <div className="form-group no-margin">
                        <button className="btn btn-theme btn-lg btn-t-primary btn-block">Registrar</button>
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

export default Registro;
