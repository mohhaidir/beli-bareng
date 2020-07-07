import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardTodo({ todo }) {
  return (
    <div>
      <Card
        key={todo._id}
        style={{
          width: "18rem",
          height: "20rem",
          marginRight: "20px",
          marginTop: "20px"
        }}
      >
        <Card.Body>
          <Card.Title>{todo.name}</Card.Title>
          <Card.Text>{todo.description}</Card.Text>
          <div style={styles.allButton}>
            <Button
              style={{ marginRight: "50px" }}
              variant="outline-secondary"
              size="sm"
            >
              Button Edit
            </Button>
            <Button variant="outline-secondary" size="sm">
              Button Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

const styles = {
  allButton: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    bottom: "18px"
  }
};
