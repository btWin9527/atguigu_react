import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {

  getStudentData = () => {
    axios.get('api1/students').then(response => {
      console.log('成功了', response.data)
    }, error => {
      console.log(error, '失败了')
    })
  }

  getCarsData = () => {
    axios.get('api2/cars').then(response => {
      console.log('成功了', response.data)
    }, error => {
      console.log(error, '失败了')
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取一些学生数据</button>
        <button onClick={this.getCarsData}>点我获取一些汽车数据</button>
      </div>
    );
  }
}
