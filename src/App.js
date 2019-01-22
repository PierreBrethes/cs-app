import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Menu from './components/menu.js';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Menu></Menu>
        <Header></Header>
      </div>
    );
  }
}

export default App;
