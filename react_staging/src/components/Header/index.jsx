import React, {Component} from 'react';
import {nanoid} from 'nanoid'; // 唯一值
import './index.css'

class Header extends Component {

  handleKeyUp = (event) => {
    let {keyCode, target: {value}} = event;
    // 判断是否为回车
    if (keyCode !== 13) return;
    // 添加的todo名字非空
    if (!value.trim()) {
      alert('输入非空');
      return;
    }
    const todoObj = {
      id: nanoid(), name: value, done: false
    }
    this.props.addTodo(todoObj);
    event.target.value = ''; // 清空输入
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
      </div>
    );
  }
}

export default Header;
