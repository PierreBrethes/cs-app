import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from '../js/fetch.js';

import menuPng from '../img/menu.png';
import dashboardPng from '../img/dashboard.png';
import plusPng from '../img/plus.png';
import './../App.css';

class Home extends Component {

  render() {

    return (
      <div className="home">
        <h1>Welcome my guys</h1>
      </div>
    );
  }
}

export default Home;
