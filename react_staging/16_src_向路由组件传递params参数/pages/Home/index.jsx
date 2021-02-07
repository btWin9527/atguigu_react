import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import News from './News'
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          {/*二级路由*/}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Home;
