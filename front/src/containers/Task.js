import { connect } from 'react-redux';
import TaskView from '../components/TaskView';
import ModelTask from '../models/Task';

const mapStateToProps = state => {
  return state.task;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCompleted: (id, completed) => {
      ModelTask.patchTaskCompleted(dispatch, id, completed);
    }
  };
};

const Task = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView);

export default Task;
