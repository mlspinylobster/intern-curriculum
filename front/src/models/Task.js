
function launchState (json) {
  return {
    type: 'LAUNCH',
    json
  };
}

class Task {
  static async getTask (dispatch) {
    const result = await fetch('http://localhost:4200/task');
    dispatch(launchState(await result.json()));
  }
}

export default Task;
