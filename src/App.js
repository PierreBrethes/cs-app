import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route} from 'react-router-dom';
import Header from './components/header.js';
import Menu from './components/menu.js';
import Home from './components/home.js';
import InstaList from './components/businessAccountsList/instaList.js';
import Dashboard from './components/dashboard.js';
import PrivateRoute from './components/privateRoute/privateRoute.js'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <Menu></Menu>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/spyinglist" component={InstaList} />
        </Switch>
      </div>
    );
  }
}

export default App;
