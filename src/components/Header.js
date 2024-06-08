import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../styles/Header.css';  // Import the CSS file

function Header() {
  return (
    <Navbar bg="custom" variant="dark" className="navbar-custom"> 
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.svg"
            alt="Ecoguard"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" className="nav-link-large">Home</Nav.Link>
          <Nav.Link href="#about" className="nav-link-large">About Us</Nav.Link>
          <Nav.Link href="#sectors" className="nav-link-large">Sectors</Nav.Link>
          <Nav.Link href="#alliances" className="nav-link-large">Alliances</Nav.Link>
          <Nav.Link href="#careers" className="nav-link-large">Careers</Nav.Link>
          <Nav.Link href="#contact" className="nav-link-large">Contact Us</Nav.Link>
        </Nav>
        <div className="d-flex">
          <Button variant="outline-light" href="#shop">Shop Now</Button> {/* Add your shop URL in the href */}
          <div style={{ width: 10 }}></div> {/* Add a spacer */}
          <Button variant="outline-light" href="#quote">Get a Quote</Button> {/* Add your quote URL in the href */}
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
