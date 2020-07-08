import React, { useEffect } from "react";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/action/action";
import notFound from "../assets/not-found.png";

export default function Todos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todoListReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div data-testid="todos-page">
      {/* <h1>home will show card with all todo list</h1> */}
      {/* {<div>{JSON.stringify(todos)}</div>} */}
      <div style={styles.title}>
        <h1 style={styles.text}>Your Todos</h1>
      </div>
      <div style={styles.allCard}>
        {todos.map(e => {
          return (
            <div key={e._id}>
              <Card todo={e} key={e._id} />
            </div>
          );
        })}
        {todos.length === 0 && (
          <img style={styles.object} src={notFound} alt="none..." />
        )}
      </div>
    </div>
  );
}

const styles = {
  allCard: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    position: "relative",
    flexWrap: "wrap",
    margin: "20px"
  },
  object: {
    width: "12%",
    height: "12%",
    marginTop: "10%"
  },
  title: {
    textAlign: "center",
    margin: "40px"
  },
  text: {
    fontFamily: "Fondamento"
  }
};
