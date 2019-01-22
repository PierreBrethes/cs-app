import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import Facebook from './facebook.js';
import request from '../js/fetch.js';
import './../App.css';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div className="header">
        <div className="title">Content Stream</div>
        <Facebook />
      </div>
    );
  }
}

export default Header;
