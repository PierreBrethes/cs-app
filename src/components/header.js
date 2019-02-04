import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import Facebook from './facebook.js';
import request from '../js/fetch.js';
import arrowPng from '../img/arrow.png';
import Modal from 'react-modal';
import './../App.css';

class Header extends Component {

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
