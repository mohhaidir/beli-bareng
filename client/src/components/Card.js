import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardTodo() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Todo Description</Card.Text>
        <div style={styles.allButton}>
          <Button variant="secondary">Button Edit</Button>
          <Button variant="secondary">Button Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

const styles = {
  allButton: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
};
