import React from "react";
import { Link } from "react-router-dom";
import { Nav, Form, FormControl, Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">TODO</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">
              <Button variant="outline-secondary">Home</Button>
            </Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-secondary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
