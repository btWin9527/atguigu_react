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

  // 删除一个todo
  deleteTodo = (id) => {
    // 获取状态中的todos
    const {todos} = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter(todo => todo.id !== id);
    // 更新状态
    this.setState({todos: newTodos});
  }
  // 用于全选
  checkAllTodo = (done) => {
    // 获取状态中的todos
    let {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        done
      }
    });
    // 更新状态
    this.setState({todos: newTodos});
  }

  // 清除所有已完成
  clearAllDone = () => {
    // 获取状态中的todos
    const {todos} = this.state;
    // 过滤数据
    const newTodos = todos.filter(todo => !todo.done);
    // 更新状态
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <!-- Header组件 -->
          <Header addTodo={this.addTodo}/>
          <!-- List组件 -->
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <!-- Footer组件 -->
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}
/*
* todoList功能组件划分：
* + App组件       【容器组件】
*   数据：todos [任务列表数据]
*   事件：影响todos的相关事件
*
*   + Header组件  【功能组件】
*     + 功能一：输入任务名称，按回车触发添加todos
*
*   + List组件    【列表渲染组件】
*
*     + Item组件  【功能组件】
*       + 功能一：鼠标移过每一条item时，item显示高亮，且显示该列的删除按钮
*       + 功能二：点击删除，提示是否删除弹窗(window.confirm),确认时删除该列的item项
*       + 功能三：点击该item的选中按钮，修改该列的选中状态
*
*   + Footer组件  【功能组件】
*       + 功能一：显示已完成和全部的数量
*       + 功能二：点击全选按钮，todos列表全部选中
*       + 功能三：点击取消选中，todos列表全部取消选中
*       + 功能四：点击清除已完成任务，删除todos列表中已经选中的任务
*
* */
