import { combineReducers } from 'redux';

const initialTask = {
  title: '',
  description: '',
  isNextTaskPresent: false,
  todos: []
};

const task = (state = initialTask, action) => {
  switch (action.type) {
    case 'LAUNCH' :
      return action.json;
    case 'TOGGLE_TODO' :
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  task
});

export default reducers
;
