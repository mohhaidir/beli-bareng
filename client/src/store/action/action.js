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

export const addTodoAction = data => {
  return dispatch => {
    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(todo => {
        dispatch({
          type: "ADD_TODOS",
          payload: todo
        });
      });
  };
};

export const editTodoAction = data => {};

export const deleteTodo = id => {
  return (dispatch, getState) => {
    let target = getState().todoListReducer.todos;
    let temp = target.filter(e => e._id !== id);
    fetch(`http://localhost:3001/todo/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(todos => {
        dispatch({
          type: "DELETE_TODO",
          payload: temp
        });
      });
  };
};
