import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {
  render() {
    const {todos, updateTodo} = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo}/>)}
      </ul>
    );
  }
}

export default List;
