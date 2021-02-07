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
            <Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>
            &nbsp;&nbsp;
          </li>)}
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id" component={Detail}/>
      </div>
    );
  }
}

export default Message;
