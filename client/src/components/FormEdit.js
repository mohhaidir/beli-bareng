import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormEdit() {
  return (
    <div>
      {/* <div>FORM WILL SHOW HERE</div> */}
      <div style={styles.title}>
        <h1 style={styles.text}>Edit Todo</h1>
      </div>
      <Form style={styles.add}>
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Todo's Name" />
          <Form.Text className="text-muted">
            Edit Your Todo Such as Category
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label style={{ fontSize: "23px" }}>Description</Form.Label>
          <Form.Control
            type="Text"
            placeholder="Enter Todo's Description"
            as="textarea"
            rows="5"
          />
          <Form.Text className="text-muted">Max. 200 Character</Form.Text>
        </Form.Group>
        <Button
          style={{ height: "40px" }}
          variant="warning"
          type="submit"
          size="sm"
          block
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

const styles = {
  add: {
    margin: "7% 300px",
    border: "solid #bdc3c7 1px",
    padding: "30px 30px",
    borderRadius: "10px"
  },
  title: {
    textAlign: "center",
    margin: "40px"
  },
  text: {
    fontFamily: "Fondamento"
  }
};
