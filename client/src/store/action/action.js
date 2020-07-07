export const getTodos = () => {
  return dispatch => {
    fetch("http://localhost:3001/todo")
      .then(res => res.json())
      .then(todos => {
        dispatch({
          type: "GET_TODOS",
          payload: todos
        });
      });
  };
};
