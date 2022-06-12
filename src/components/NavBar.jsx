import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/authAction";

const NavBar = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="bi me-2" src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654989867/Rick-and-Morty_kt4kt8.png" width={150} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link text-uppercase fw-bold" to="/">Home</Link>
            {user.isAuthenticated ?<></>:<Link className="nav-link text-uppercase fw-bold" to="/login">Login</Link>}
            <Link className="nav-link text-uppercase fw-bold" to="/registro">Registro</Link>
            <button
              className="nav-link text-uppercase fw-bold text-decoration-none bg-transparent"
              style={{ display: user?.isAuthenticated ? "block" : "none", border: "none"}}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
