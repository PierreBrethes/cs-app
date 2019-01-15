import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './../App.css';

class Header extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    return (
      <div className="header">
      <div className="title">Content Stream</div>
      <FacebookLogin
        appId="578189005964062"
        autoLoad={true}
        callback={responseFacebook}
        render={renderProps => (
          <button class="loginBtn loginBtn--facebook" onClick={renderProps.onClick}>
            Login with Facebook
          </button>
        )}
      />
      </div>
    );
  }
}

export default Header;
