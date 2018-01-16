import React from 'react';
import Todo from './Todo';

const TodoListView = ({todos, onTodoClick}) => (
  <React.Fragment>
    <h2>やること</h2>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />))
      }
    </ul>
  </React.Fragment>
);

export default TodoListView;
