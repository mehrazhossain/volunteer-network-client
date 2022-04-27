import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/logos/Group 1329.png';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img style={{ height: '60px' }} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex align-items-center justify-content-center">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/donation">Donation</CustomLink>
            <CustomLink to="/events">Events</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <Button className="bg-primary text-light px-4 register border-style">
              Register
            </Button>
            <Button className="bg-dark text-light px-4 border-style">
              Admin
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
