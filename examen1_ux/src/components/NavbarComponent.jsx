// src/components/NavbarComponent.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar style={{ backgroundColor: "#000" }} variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src="/Imagenes/Max.png" alt="Max" height="30" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#carouselE">Inicio</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
            <Nav.Link href="#">Películas</Nav.Link>
            <Nav.Link href="#">
              <img src="/Imagenes/Hbo.png" alt="HBO" height="30" />
            </Nav.Link>
            <Nav.Link href="#">Niños y Familia</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link
              href="https://www.youtube.com/watch?v=y2tctX1Yd5c"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: 0, marginLeft: "1rem" }}
            >
              <img
                src="/Imagenes/profile.jpg"
                alt="Profile"
                height="45" 
                style={{ borderRadius: "50%" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;