import React from 'react';
import Todo from './Todo';

const TodoListView = ({todos, onCompletedChange}) => (
  <React.Fragment>
    <h2>やること</h2>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onChange={() => onCompletedChange(todo)} />))
      }
    </ul>
  </React.Fragment>
);

export default TodoListView;
