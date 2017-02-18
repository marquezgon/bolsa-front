import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return(
      <li className={`${this.context.router.isActive(this.props.to, true) ? 'active' : ''}`}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    )
  }
}

export default NavLink;
