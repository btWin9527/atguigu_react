import React, {Component} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // 路由组件
import Header from "./components/Header"; // 一般组件
import MyNavLink from "./components/MyNavLink";

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header/>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  {/* redirect路由重定向使用 */}
                  <Redirect to="/about"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
