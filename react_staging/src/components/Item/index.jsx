import React, {Component} from 'react';
import './index.css'

/* 状态组件
* 状态用处：mouse 处理鼠标经过该列表显示不同的交互状态
*  */
class Item extends Component {

  state = {
    mouse: false, // 标识鼠标移入,移除状态
  }

  handleMouse = (flag) => {
    this.setState({mouse: flag});
  }

  handleCheck = (id, event) => {
    this.props.updateTodo(id, event.target.checked);
  }

  render() {
    const {name, done, id} = this.props;
    const {mouse} = this.state;
    return (
      <li
        style={{backgroundColor: mouse ? '#ddd' : 'white'}}
        onMouseLeave={() => this.handleMouse(false)}
        onMouseEnter={() => this.handleMouse(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={(event) => this.handleCheck(id, event)}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
      </li>
    );
  }
}

export default Item;
