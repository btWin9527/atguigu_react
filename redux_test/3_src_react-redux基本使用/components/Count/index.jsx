import React, {Component} from 'react';

class Count extends Component {

  // 加法
  increment = () => {
    const {value} = this.selectNumber;
    this.props.increment(value * 1);
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNumber;
    this.props.decrement(value * 1);
  }
  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber;
    let {count} = this.props;
    if (count % 2 !== 0) {
      this.props.increment(value * 1);
    }
  }
  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber;
    this.props.asyncIncrement(value * 1, 500);
  }

  render() {
    let {count} = this.props;
    return (
      <div>
        <h1>当前求和为: {count}</h1>
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
