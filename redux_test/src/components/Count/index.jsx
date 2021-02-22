import React, {Component} from 'react';
import store from "../../redux/store";
// 引入actionCreator，专门用于创建action对象
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/count_action";

class Count extends Component {

  // 检测store状态的变化
  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({}) // 触发render,更新视图
  //   })
  // }

  // 加法
  increment = () => {
    const {value} = this.selectNumber;
    // 直接调用dispatch分发当前任务通知redux,但redux不会触发视图的更新
    store.dispatch(createIncrementAction(value * 1));
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  }
  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    let count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  }
  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    store.dispatch(createIncrementAsyncAction(value * 1, 500));
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState()}</h1>
        <select name="" id="" ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={this.increment}>+</button>
        &nbsp;
        <button onClick={this.decrement}>-</button>
        &nbsp;
        <button onClick={this.incrementIfOdd}>当前求和奇数再加</button>
        &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
        &nbsp;
      </div>
    );
  }
}

export default Count;
