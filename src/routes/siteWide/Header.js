import React, { Component } from 'react';
import { Link } from "react-router-dom";

import logo from '../../Assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <a className="header__logo" href="/" title="Logo"><img src={logo} alt=''/></a>
          <nav className="navigation menu--main">
            <ul className="menu header__nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="work">Work</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
