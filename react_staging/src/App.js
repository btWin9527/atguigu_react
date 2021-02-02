// 创建"外壳"组件App
import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'
/*
* 状态组件
* 状态功能：
*         todos 渲染列表数据;对列表进行增删操作修改
* */
// 创建并暴露App组件
export default class App extends Component {
  // 状态在哪，操作状态的方法就在哪
  // 初始化数据
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '敲代码', done: false},
      {id: '004', name: '逛街', done: true},
    ]
  }
  // addTodo用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原todos
    const {todos} = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos];
    // 更新状态
    this.setState({todos: newTodos});
  }

  // updateTodo用于更新一个todo对象
  updateTodo = (id, done) => {
    // 获取状态中的todos
    const {todos} = this.state;
    // 匹配处理数据
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return {...todoObj, done}
      } else {
        return todoObj;
      }
    });
    // 更新状态
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo}/>
          <Footer/>
        </div>
      </div>
    )
  }
}
