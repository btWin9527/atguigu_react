import React, {Component} from 'react';
import './index.css'

class Footer extends Component {

  handleCheckAll = (event) => {
    let done = event.target.checked;
    this.props.checkAllTodo(done);
  }

  // 清除所有已完成任务的回调
  handleClearAll = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    // 已完成个数
    // const doneCount = todos.filter(todo => todo.done).length;
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    // 总数
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox" onChange={this.handleCheckAll}
            checked={doneCount === total && total !== 0}/>
        </label>
        <span><span>已完成{doneCount}</span> / 全部{total}</span>
        <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
