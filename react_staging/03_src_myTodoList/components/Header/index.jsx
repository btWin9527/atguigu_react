import React, {Component} from 'react';
import {nanoid} from 'nanoid'; // 生成唯一id值
import './index.css'
/*
* Header组件 【功能组件】
* 功能一：输入任务名称，按回车确认，并添加到显示的列表中
* */

/*
* 易错点：
* 1. 事件绑定需要使用keyUp(keyUp才能获取到e.keyCode，keyUp比keydown用户体验会更佳)
* */
class Header extends Component {

  handleInputTask = (e) => {

    let {target: {value: todo}, keyCode} = e;
    if (keyCode !== 13 || !todo) return;
    // 拼接todoObj数据,默认添加任务已经完成
    let todoObj = {
      id: nanoid(),
      des: todo.trim(),
      done: false
    };
    this.props.addTodo(todoObj);
    e.target.value = ''; // 清空输入框
  }

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleInputTask}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    );
  }
}

export default Header;
