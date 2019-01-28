import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import request from '../js/fetch.js';

import menuPng from '../img/menu.png';
import dashboardPng from '../img/dashboard.png';
import plusPng from '../img/plus.png';
import './../App.css';

class Menu extends Component {

  render() {

    return (
      <div className="menu">
        <Link to='/'><a><div className="icons">
          <img src={menuPng} />
        </div></a></Link>
        <Link to='/dashboard'><a><div className="icons">
          <img src={dashboardPng} />
        </div></a></Link>
        <Link to='/spyinglist'><a><div className="icons">
          <img src={plusPng} />
        </div></a></Link>
      </div>
    );
  }
}

export default Menu;
