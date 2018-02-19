import { toggleTodo } from '../actions/index';

function launchState (json) {
  return {
    type: 'LAUNCH',
    json
  };
}

const myHeaders = new Headers();
myHeaders.append('Content-type', 'application/json');
const myInit = {
  method: 'PATCH',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
  body: ''
};

class ModelTask {
  static async getTask (dispatch) {
    const result = await fetch('http://localhost:4200/tasks/current');
    const currentTask = await result.json();
    if (currentTask) {
      dispatch(launchState(await result.json()));
    }
  }

  static async patchCompleted (dispatch, todo) {
    myInit.body = JSON.stringify({completed: !todo.completed});
    await fetch(`http://localhost:4200/todos/${todo.id}`, myInit);
    dispatch(toggleTodo(todo.id));
  }

  static async patchTaskCompleted (dispatch, id) {
    myInit.body = JSON.stringify({completed: true});
    await fetch(`http://localhost:4200/tasks/${id}`, myInit);
    this.getTask(dispatch);
  }
}
export default ModelTask;
