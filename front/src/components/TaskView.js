import React from 'react';
import TaskDescription from './TaskDescription';

// ({ onClick, completed, text })
const TaskView = ({title, description}) => (
  <React.Fragment>
    <h1>{ title }</h1>
    <TaskDescription description={description} />
  </React.Fragment>
);

export default TaskView;
