import React, {Component} from 'react';
import Item from "./Item";
import './index.css'

/*
* 列表组件  【中间组件】
*
* */
class List extends Component {
  render() {
    let {todos, changeTodoState,deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => <Item
          key={todo.id} {...todo}
          deleteTodo={deleteTodo}
          changeTodoState={changeTodoState}/>)}
      </ul>
    );
  }
}

export default List;
