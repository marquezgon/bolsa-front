import React from 'react';
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className="body-content clearfix">
      <div className="block-section bg-color4">
        <div className="container">
          <div className="panel panel-md">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-12">
                  <p><a href="#" className="btn btn-primary btn-theme btn-block"><i className="fa fa-facebook pull-left bordered-right"></i> Login with Facebook</a></p>
                  <p><a href="#" className="btn btn-danger btn-theme btn-block"><i className="fa fa-google-plus pull-left bordered-right"></i> Login with Google</a></p>
                  <div className="white-space-10"></div>
                  <p className="text-center"><span className="span-line">OR</span></p>
                  <form>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                      <label>Contraseña</label>
                      <input type="password" className="form-control" placeholder="Your Password" />
                    </div>
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
                          <p className="help-block"><a href="#myModal" data-toggle="modal">¿Olvidaste tu contraseña?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="form-group no-margin">
                      <button className="btn btn-theme btn-lg btn-t-primary btn-block">Log In</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="white-space-20"></div>
          <div className="text-center color-white">¿No eres miembro? &nbsp; <Link to="registro" className="link-white"><strong>Crea una cuenta</strong></Link></div>
        </div>
      </div>
    </div>
  )
}

export default Login;
