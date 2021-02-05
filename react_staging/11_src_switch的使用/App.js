import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"; // 路由组件
import Test from "./pages/Test"; // 路由组件
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
                {/* 注册路由 */}
                {/*
                    switch
                    使用多个路由时，使用switch包裹
                    1.通常情况下，path和component是一一对应的关系。
			              2.Switch可以提高路由匹配效率(单一匹配)。
                */}
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/about" component={Test}/>
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
