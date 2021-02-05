import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"; // 路由组件
import Header from "./components/Header"; // 一般组件
import MyNavLink from "./components/MyNavLink";

class App extends Component {
  render() {
    /*
          解决多级路径刷新页面样式丢失的问题
          1.public/index.html 中 引入样式时不写 ./ 写 / （常用）
          2.public/index.html 中 引入样式时不写 ./ 写 %PUBLIC_URL% （常用）
          3.使用HashRouter (向服务器请求数据，默认#后面的为前端数据，不会参数请求发送)
     */
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
              <MyNavLink to="/atguigu/about">About</MyNavLink>
              <MyNavLink to="/atguigu/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/atguigu/home" component={Home}/>
                  <Route path="/atguigu/about" component={About}/>
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
