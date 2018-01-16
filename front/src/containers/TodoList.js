import { connect } from 'react-redux';
import TodoListView from '../components/TodoListView';
import { toggleTodo } from '../actions';

const mapStateToProps = (state) => (
  {
    todos: state.task.todos
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListView);

export default TodoList;
