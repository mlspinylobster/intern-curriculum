import React from 'react';
import Task from '../containers/Task';
import TodoList from '../containers/TodoList';

const App = () => (
  <React.Fragment>
    <Task />
    <TodoList hoge={'hoge'} />
  </React.Fragment>
);

export default App;
