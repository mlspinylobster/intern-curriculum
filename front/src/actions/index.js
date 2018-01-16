export const launch = () => {
  return {
    type: 'LAUNCH'
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
