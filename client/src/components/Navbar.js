import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar
        style={{
          backgroundImage: "linear-gradient(to bottom right, #FB8C00, #FFF9C4)"
        }}
        variant="light"
      >
        <Navbar.Brand style={styles.text}>TODO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">
              <Button variant="outline-dark">Home</Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/todos">
              <Button variant="outline-dark">Todos</Button>
            </Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link>
            <Link to="/addTodo">
              <Button variant="outline-dark">Add More Todo</Button>
            </Link>
          </Nav.Link>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

const styles = {
  text: {
    fontFamily: "Fondamento",
    fontSize: "40px"
  }
};
