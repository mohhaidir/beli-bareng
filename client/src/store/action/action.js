const url = "https://fast-wave-81961.herokuapp.com/todo";

export const getTodos = () => {
  return dispatch => {
    fetch(`${url}`)
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
    fetch(`${url}`, {
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

export const editTodoAction = (data, id) => {
  return dispatch => {
    fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(todo => {
        dispatch({
          type: "EDIT_TODOS",
          payload: todo
        });
      });
  };
};

export const deleteTodo = id => {
  return (dispatch, getState) => {
    let target = getState().todoListReducer.todos;
    let temp = target.filter(e => e._id !== id);
    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(todos => {
        dispatch({
          type: "DELETE_TODO",
          payload: temp
        });
      });
  };
};
