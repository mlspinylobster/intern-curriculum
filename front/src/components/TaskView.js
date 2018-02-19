import React from 'react';
import TaskDescription from './TaskDescription';
import TodoList from '../containers/TodoList';

const TaskView = ({id, title, description, completed, todos, isNextTaskPresent, onCompleted}) => (
  <React.Fragment>
    <h1>{ title }</h1>
    <TaskDescription description={description} />
    <TodoList todos={todos} />
    <button type='button' disabled={!todos.every((element) => (element.completed))}
      style={{ display: isNextTaskPresent ? '' : 'none' }}
      onClick={() => onCompleted(id, completed)}>完了</button>
    <h1 style={{ display: completed ? '' : 'none' }}>完了!</h1>
  </React.Fragment>
);

export default TaskView;
