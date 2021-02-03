import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from "../Item";
import './index.css'

class List extends Component {
  // 对接收的Props进行类型和必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }

  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (
      <ul className="todo-main">
        {todos.map(todo => <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)}
      </ul>
    );
  }
}

export default List;
