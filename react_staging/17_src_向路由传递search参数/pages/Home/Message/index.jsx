import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Detail from './Detail'

class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map(message => <li key={message.id}>
            {/* 向路由组件传递params参数 */}
            {/*<Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>*/}
            {/* 向路由组件传递search参数 */}
            <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
            &nbsp;&nbsp;
          </li>)}
        </ul>
        <hr/>
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}

export default Message;
