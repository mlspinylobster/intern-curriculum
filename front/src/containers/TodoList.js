import { connect } from 'react-redux';
import TodoListView from '../components/TodoListView';
import ModelTask from '../models/Task';

const mapStateToProps = (_, ownProps) => ownProps;

const mapDispatchToProps = (dispatch) => {
  return {
    onCompletedChange: todo => {
      ModelTask.patchCompleted(dispatch, todo);
    }
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView);

export default TodoList;
