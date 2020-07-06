export const getTodo = () => {
  return dispatch => {
    fetch("https://secure-cove-72475.herokuapp.com")
      .then(res => res.json())
      .then(todo => {
        dispatch({
          type: "GET_TODO",
          payload: todo
        });
      });
  };
};
