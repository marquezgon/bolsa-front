import React, { Component } from 'react';
import ListaOfertas from '../components/lista_ofertas';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';

class CandidatoIndex extends Component {
  render() {
    console.log(this.props);
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
                  <div className="text-center">
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
              <div className="row hidden-xs">
                <div className="col-sm-12">
                  <h4><strong className="color-black">Últimas Oferta de Trabajo</strong></h4>
                </div>
              </div>
              <ListaOfertas />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const query = gql`
  {
     candidatos {
       email
     }
  }`;

  const mutation = gql`
    mutation {
      addCandidato(email: "selena222@mex.com") {
        email
      }
  }`;

export default compose(graphql(query), graphql(mutation), connect(null, null))(CandidatoIndex);
