import React, { Component } from 'react';

class CandidatoIndex extends Component {
  render() {
    return (
      <div>
        <div className="hero-header">
          <div className="inner-hero-header">
            <div className="container">
              <div className="text-center logo">
                <a href="index.html"><img src="/images/logo.png" alt="" /></a>
              </div>
              <div className="relative">
                <i className="fa fa-globe ic-fade-globe"></i>
                <form className="form-search-home" method="post" action="job_list.html">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>What</label>
                        <input className="form-control  input-lg" placeholder="job title, keywords or company name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Where</label>
                        <input className="form-control input-lg" placeholder="city, province, or region" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-t-primary btn-lg btn-theme btn-pill btn-block">Find Jobs</button>
                  </div>
                  <div class="text-center">
                    &nbsp;
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="body-content clearfix" >
          <div className="block-section bg-color1">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4">
                  <h3 className="font-2x ">203,285</h3>
                  <h4 className="color-text">Registered Member</h4>
                </div>
                <div className="col-md-4">
                  <h3 className="font-2x ">3,603,945</h3>
                  <h4 className="color-text">Joblist Posted</h4>
                </div>
                <div className="col-md-4">
                  <h3 className="font-2x ">53,945</h3>
                  <h4 className="color-text">Awesome Company</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CandidatoIndex;
