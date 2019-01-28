import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from '../js/fetch.js';
import InstaList from './businessAccountsList/instaList.js';
import NewPosts from './newPosts/newPosts.js';
import './../App.css';

class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">
        <NewPosts />
      </div>
    );
  }
}

export default Dashboard;
