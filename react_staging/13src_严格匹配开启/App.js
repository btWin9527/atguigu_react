import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // 路由组件
import Header from "./components/Header"; // 一般组件
import MyNavLink from "./components/MyNavLink";
/**
 *  1.默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
  	2.开启严格匹配：<Route exact={true} path="/about" component={About}/>
		3.严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
 */
class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home/a">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  {/* 开启严格匹配(一般不建议开启) */}
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/about" component={About} />
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
