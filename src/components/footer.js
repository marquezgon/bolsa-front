import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ul className="list-inline link-footer text-center-xs">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-sm-6 ">
              <p className="text-center-xs hidden-lg hidden-md hidden-sm">Stay Connect</p>
              <div className="socials text-right text-center-xs">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-youtube-play"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
