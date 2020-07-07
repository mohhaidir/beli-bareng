import React, { useEffect } from "react";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/action/action";

export default function Home() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todoListReducer);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      {/* <h1>home will show card with all todo list</h1> */}
      {/* {<div>{JSON.stringify(todos)}</div>} */}
      <div style={styles.allCard}>
        {todos.length !== 0 ? (
          todos.map(e => {
            return (
              <div key={e._id}>
                <Card todo={e} key={e._id} />
              </div>
            );
          })
        ) : (
          <div style={styles.load}>
            <img style={styles.object} src="/confused.gif" alt="loading..." />
          </div>
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
  load: {
    justifyContent: "center",
    width: "70px",
    margin: "300px",
    marginLeft: "210%"
  },
  object: {
    width: "170%",
    height: "170%"
  }
};
