import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
        <div>
          <header className="main-header">
            <Header />
            {this.props.children}
          </header>
          <Footer />
        </div>
    );
  }
}
