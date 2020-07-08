import React from "react";
import { Link } from "react-router-dom";
import { Nav, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #00838F, #B2EBF2)"
      }}
      variant="light"
    >
      <Navbar.Brand style={styles.text}>TODO's App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link>
            <Link to="/" data-testid="home-btn">
              <Button variant="outline-dark">Home</Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/todos" data-testid="todos-btn">
              <Button variant="outline-dark">Todos</Button>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/addTodo" data-testid="add-todo-btn">
              <Button variant="outline-dark">Add More Todo</Button>
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const styles = {
  text: {
    fontFamily: "Fondamento",
    fontSize: "30px"
  }
};
