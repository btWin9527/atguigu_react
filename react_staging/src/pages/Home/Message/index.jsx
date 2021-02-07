import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Detail from './Detail'

/*
*
* 借助this.prosp.history对象上的API对操作路由跳转、前进、后退
						-this.prosp.history.push()
						-this.prosp.history.replace()
						-this.prosp.history.goBack()
						-this.prosp.history.goForward()
						-this.prosp.history.go()
* */
class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'},
    ]
  }
  pushSHow = (id) => {
    // params传参
    this.props.history.push(`/home/message/detail/${id}`)
    // state传参
    // this.props.history.push(`/home/message/detail/${id}`, {id})
  }

  replaceShow = (id) => {
    // params传参
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map(message => <li key={message.id}>
            {/* 向路由组件传递params参数 */}
            <Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>&nbsp;&nbsp;
            <button onClick={() => this.pushSHow(message.id)}>push查看</button>
            &nbsp;&nbsp;
            <button onClick={() => this.replaceShow(message.id)}>replace查看</button>
            {/* 向路由组件传递search参数 */}
            {/*  <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>*/}
            {/* 向路由组件传递state参数 */}
            {/* 开启replace模式 */}
            {/* <Link to={{
              pathname: '/home/message/detail',
              state: {
                id: message.id,
                title: message.title
              }
            }} replace>{message.title}</Link>*/}
            &nbsp;&nbsp;
          </li>)}
        </ul>
        <hr/>
        {/* 接收params参数，需要拼接:id使用动态参数拼接 */}
        <Route path="/home/message/detail/:id" component={Detail}/>
      </div>
    );
  }
}

export default Message;
