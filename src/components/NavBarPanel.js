import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand to="/" as={Link}>
            React Redux
          </Navbar.Brand>
          <Nav className="d-flex">
            <Nav.Link to="/products" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/carts" as={Link}>
                My bag {cartProducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
