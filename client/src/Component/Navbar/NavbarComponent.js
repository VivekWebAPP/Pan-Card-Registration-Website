import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto navbar-actions">
                        <Nav.Link as={Link} to="/address" className="nav-link">
                            Addresses
                        </Nav.Link>
                        <Button variant="outline-danger" className="logout-button">
                            Logout
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
