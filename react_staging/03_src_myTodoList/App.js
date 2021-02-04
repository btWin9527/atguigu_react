import React, {Component} from 'react';
import './App.css'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

/*
* todoList功能开发流程：
* 1. 还原静态资源
* 2. 组件划分
*   + App
*     + Header
*     + List
*       + Item
*     + Footer
* */

/*
* 易出错点：
* 1. css资源引入使用相对路径
* 2. reduce方法使用不熟练
* 3. 事件绑定需要使用keyUp(keyUp才能获取到e.keyCode，keyUp比keydown用户体验会更佳)
* */
class App extends Component {

  state = {
    todos: [ // 任务列表数据
      {id: '001', des: '玩游戏', done: true},
      {id: '002', des: '睡觉', done: true},
      {id: '003', des: '敲代码', done: false},
    ]
  }

  // 添加任务 (任务添加到列表的开头)
  addTodo = (todoObj) => {
    const {todos} = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos
    })
  }
  // 切换任务选中状态
  changeTodoState = (id, done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => todo.id === id ? {...todo, done} : todo);
    this.setState({todos: newTodos});
  }

  // 删除任务
  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
  }

  // 全选或取消全选任务
  handleCheckAll = (done) => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {...todo, done}
    });
    this.setState({todos: newTodos});
  }

  // 清空选中状态
  clearFinishTask = () => {
    const {todos} = this.state;
    const newTodos = todos.map(todo => {
      return {...todo, done: false}
    });
    this.setState({todos: newTodos});
  }

  render() {
    const {todos} = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos}
                deleteTodo={this.deleteTodo}
                changeTodoState={this.changeTodoState}/>
          <Footer
            todos={todos}
            clearFinishTask={this.clearFinishTask}
            handleCheckAll={this.handleCheckAll}/>
        </div>
      </div>
    );
  }
}

export default App;
