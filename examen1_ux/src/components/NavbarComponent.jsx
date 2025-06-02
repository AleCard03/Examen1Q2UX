
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavbarComponent = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#000", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#">
          <img src="/Imagenes/Max.png" alt="Max" height="30" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-3" navbarScroll>
            <Nav.Link href="#carouselE" className="text-white">Inicio</Nav.Link>
            <Nav.Link href="#" className="text-white">Series</Nav.Link>
            <Nav.Link href="#" className="text-white">Películas</Nav.Link>
            <Nav.Link href="#">
              <img
                src="/Imagenes/Hbo.png"
                alt="HBO"
                height="30"
                style={{ objectFit: "contain" }}
              />
            </Nav.Link>
            <Nav.Link href="#" className="text-white">Niños y Familia</Nav.Link>
          </Nav>

          <Nav className="ms-auto align-items-center gap-3">

            <Nav.Link href="#" className="text-white p-0">
              <i className="bi bi-search" style={{ fontSize: '1.4rem' }}></i>
            </Nav.Link>
            <span className="text-white fw-semibold">Gunther</span>

            <Nav.Link
              href="https://www.youtube.com/watch?v=y2tctX1Yd5c"
              target="_blank"
              rel="noopener noreferrer"
              className="p-0"
            >
              <img
                src="/Imagenes/profile.jpg"
                alt="Profile"
                height="40"
                width="40"
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
