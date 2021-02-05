import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About"; // 路由组件
import Header from "./components/Header"; // 一般组件
/*
 路由组件和一般组件的区别：
    1.写法不同：
					一般组件：<Demo/>
					路由组件：<Route path="/demo" component={Demo}/>
		2.存放位置不同：
					一般组件：components
					路由组件：pages
		3.接收到的props不同：
					一般组件：写组件标签时传递了什么，就能收到什么
					路由组件：接收到三个固定的属性
		history:
		              go
		              goBack
		              goForward
		              push
		              replace
    location:
                  pathname
                  search
                  state
    match:
                  params
                  path
                  url
*/
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
              {/*原生html, a标签跳转不同页面 */}
              {/*<a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>*/}
              {/* react中，路由链接切换组件 -- 编写路由链接 */}
              {/*
                NavLink会默认给当前路由添加active 类名
                也可以使用activeClassName自定义类名
              */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
