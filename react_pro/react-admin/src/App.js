// App组件
import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";

import './App.less';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
