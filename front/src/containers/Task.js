import React from 'react';
import { connect } from 'react-redux';
import TaskView from '../components/TaskView';

const mapStateToProps = (state) => {
  return {
    title: state.task.title,
    //    description: state.task.description
    description: state.task.description
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     }
//   };
// };

const Task = connect(
  mapStateToProps
)(TaskView);

export default Task;
