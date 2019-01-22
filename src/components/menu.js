import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from '../js/fetch.js';

import menuPng from '../img/menu.png';
import dashboardPng from '../img/dashboard.png';
import plusPng from '../img/plus.png';
import './../App.css';

class Menu extends Component {

  render() {

    return (
      <div className="menu">
        <div className="icons">
          <img src={menuPng} />
        </div>
        <div className="icons">
          <img src={dashboardPng} />
        </div>
        <div className="icons">
          <img src={plusPng} />
        </div>
      </div>
    );
  }
}

export default Menu;
