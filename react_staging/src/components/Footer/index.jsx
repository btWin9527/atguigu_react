import React, {Component} from 'react';
import './index.css'

/*
* Footer组件  【功能组件】
* 功能一： 显示已完成和全部任务数量
* 功能二： 点击全选或取消全选，修改列表状态
* 功能三： 任务列表若全选，则全选按钮选中
* 功能四： 点击清除已完成任务，清除列表中已经完成的任务
*
* */
class Footer extends Component {
  // 全选
  handleCheckAll = (e) => {
    let {target: {checked: state}} = e;
    this.props.handleCheckAll(state);
  }

  render() {
    let {todos, clearFinishTask} = this.props;
    let totalNum = todos.length;
    let finishNum = todos.reduce((preVal, curVal) => curVal.done ? preVal + 1 : preVal, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            onChange={this.handleCheckAll}
            type="checkbox"
            checked={finishNum && totalNum === finishNum}/>
        </label>
        <span>
          <span>已完成{finishNum}</span> / 全部{totalNum}
        </span>
        <button className="btn btn-danger" onClick={clearFinishTask}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
