import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logos/Group 1329.png';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img style={{ height: '60px' }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Donation
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Events
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Blog
            </Nav.Link>
            <Nav.Link
              className="bg-primary text-light px-4 register border-style"
              eventKey={2}
              href="#memes"
            >
              Register
            </Nav.Link>
            <Nav.Link
              className="bg-dark text-light px-4 border-style"
              eventKey={2}
              href="#memes"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
