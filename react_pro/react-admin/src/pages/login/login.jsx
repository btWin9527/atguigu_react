import React, {Component} from 'react';
import './index.less'
// const logo = require('./images/logo.png');
import logo from './images/logo.png';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} className="login-logo" alt="logo"/>
          <h2 className="login-tit">React项目：后台管理系统</h2>
        </header>
        <div className="login-form">form</div>
      </div>
    );
  }
}

export default Login;
