import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormEdit(props) {
  return (
    <div>
      {/* <div>FORM WILL SHOW HERE</div> */}
      <div style={styles.title}>
        <h1 style={styles.text}>Edit Todo</h1>
      </div>
      <Form style={styles.add}>
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Name</Form.Label>
          <Form.Control
            value={props.name}
            onChange={e => props.setName(e.target.value)}
            type="text"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Edit Your Todo Such as Category, etc.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label style={{ fontSize: "23px" }}>Description</Form.Label>
          <Form.Control
            value={props.description}
            onChange={e => props.setDescription(e.target.value)}
            type="Text"
            as="textarea"
            rows="5"
            maxlength="150"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Max. 150 Character
          </Form.Text>
        </Form.Group>
        <Button
          onClick={props.onEditSubmit}
          style={{ height: "40px", fontSize: "20px", fontWeight: "500" }}
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
