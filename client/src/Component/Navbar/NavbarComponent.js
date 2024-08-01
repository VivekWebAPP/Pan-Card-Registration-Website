import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import Context from '../../Context API/ContextState';

const NavbarComponent = () => {
    const context = useContext(Context);
    const { auth, setAuth } = context;
    const token = localStorage.getItem('AuthToken');
    const handleOnLogout = () => {
        localStorage.removeItem('AuthToken');
        setAuth('');
    }

    return (
        <Navbar bg="light" expand="lg" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand">
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {token && <Nav className="ml-auto navbar-actions">
                        <Nav.Link as={Link} to="/address" className="nav-link">
                            Addresses
                        </Nav.Link>
                        <Button variant="outline-danger" className="logout-button" onClick={handleOnLogout}>
                            Logout
                        </Button>
                    </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
