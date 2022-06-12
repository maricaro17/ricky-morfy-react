import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="bi me-2" src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654989867/Rick-and-Morty_kt4kt8.png" width={150} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link text-uppercase fw-bold" to="/">Home</Link>
            <Link className="nav-link text-uppercase fw-bold" to="/login">Login</Link>
            <Link className="nav-link text-uppercase fw-bold" to="/registro">Registro</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
