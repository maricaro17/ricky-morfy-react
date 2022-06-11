import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <img
                className="bi me-2"
                width="64"
                src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654914516/rick-and-morty-logo-also-buy-this-artwork-on-stickers-pickle-rick-board-game-11563506215qipcqzf4yn_b0wnp0.png"
                alt="logo"
              />
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">

                  <Link to="/login" className="nav-link text-uppercase fw-bold">
                    Iniciar Sesion
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/registro"
                    className="nav-link text-uppercase fw-bold"
                  >
                    Registro
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </div>
    </div>
  )
}

export default NavBar