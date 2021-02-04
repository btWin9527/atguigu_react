import React, {Component} from 'react';
import './index.css'

/*
* Item组件  【功能组件】
* 功能一：修改item完成状态，通知外层修改列表该item状态
* 功能二：鼠标移动到item，背景色发生变化，同时该列删除按钮显示
* 功能三：点击删除按钮，通知外层删除该列的任务
* */
class Item extends Component {

  state = {
    isMouseEnter: false, // 鼠标进入状态
  }
  /*
  * 切换选择状态
  * description 通过todos组件修改该id对应的item的状态值
  * */
  handleCheck = (id, e) => {
    let {target: {checked}} = e;
    this.props.changeTodoState(id, checked);
  }

  /* 鼠标移入和移出该列状态 */
  handleHoverState = (flag) => {
    this.setState({isMouseEnter: flag})
  }

  /* 删除该列状态 */
  handleDelete = (id) => {
    if (window.confirm('您确认删除吗?')) this.props.deleteTodo(id);
  }

  render() {
    let {id, done, des} = this.props;
    let {isMouseEnter} = this.state;
    return (
      <li
        onMouseEnter={() => this.handleHoverState(true)}
        onMouseLeave={() => this.handleHoverState(false)}
        style={{backgroundColor: isMouseEnter ? '#ddd' : '#fff'}}>
        <label>
          <input
            type="checkbox"
            onChange={(e) => this.handleCheck(id, e)}
            checked={done}/>
          <span>{des}</span>
        </label>
        <button
          onClick={() => this.handleDelete(id)}
          className="btn btn-danger"
          style={{display: isMouseEnter ? 'block' : 'none'}}>
          删除
        </button>
      </li>
    );
  }
}

export default Item;
