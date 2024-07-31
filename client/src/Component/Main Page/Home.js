import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
    const [users, setUsers] = useState([
        {
            pan: 'ABCDE1234F',
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: 9876543210,
            address: '123 Elm Street',
            pincode: 110001,
            state: 'Delhi',
            city: 'Delhi',
            role: 'user',
        },
        {
            pan: 'FGHIJ5678K',
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: 8765432109,
            address: '456 Oak Avenue',
            pincode: 110002,
            state: 'Delhi',
            city: 'Delhi',
            role: 'admin',
        },
        {
            pan: 'KLMNO9876P',
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            phone: 7654321098,
            address: '789 Pine Road',
            pincode: 110003,
            state: 'Delhi',
            city: 'Delhi',
            role: 'user',
        },
        {
            pan: 'QRSTU5432V',
            name: 'Bob Brown',
            email: 'bob.brown@example.com',
            phone: 6543210987,
            address: '321 Maple Street',
            pincode: 110004,
            state: 'Delhi',
            city: 'Delhi',
            role: 'user',
        },
    ]);

    const navigate = useNavigate();
    const loggedInUser = users.find(user => user.role === 'admin'); // Example: assuming an admin is logged in

    const handleAddAddress = (newAddress) => {
        setUsers(users.map(user => 
            user.pan === loggedInUser.pan
                ? { ...user, ...newAddress }
                : user
        ));
    };

    const handleEdit = (user) => {
        navigate('/edit-information', { state: { user } });
    };

    const handleDelete = (pan) => {
        setUsers(users.filter(user => user.pan !== pan));
    };

    if (!loggedInUser) {
        return (
            <Container className="main-content">
                <Row className="my-5">
                    <Col md={12}>
                        <h2>No logged in user found. Please log in.</h2>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <>
            <header className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={12} lg={10}>
                            <h1 className="hero-title">Welcome, {loggedInUser.name}!</h1>
                            <p className="hero-subtitle">Your personal dashboard to manage your information and connect with others</p>
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container className="main-content">
                <Row className="my-5">
                    <Col md={12}>
                        <Card className="user-card mb-4">
                            <Card.Body>
                                <Card.Title className="card-title">My Information</Card.Title>
                                <Card.Text>
                                    <div className="card-detail"><strong>Email:</strong> {loggedInUser.email}</div>
                                    <div className="card-detail"><strong>Phone:</strong> {loggedInUser.phone}</div>
                                    <div className="card-detail"><strong>Address:</strong> {loggedInUser.address}</div>
                                    <div className="card-detail"><strong>Pincode:</strong> {loggedInUser.pincode}</div>
                                    <div className="card-detail"><strong>State:</strong> {loggedInUser.state}</div>
                                    <div className="card-detail"><strong>City:</strong> {loggedInUser.city}</div>
                                </Card.Text>
                                <Button variant="primary" className="btn-edit" onClick={() => handleEdit(loggedInUser)}>
                                    <FaEdit className="me-2" /> Edit Information
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="section-title">Other Users</h2>
                        <div className="user-cards-container">
                            {users.filter(user => user.pan !== loggedInUser.pan).map(user => (
                                <Card className="user-card mb-4" key={user.pan}>
                                    <Card.Body>
                                        <Card.Title className="card-title">{user.name}</Card.Title>
                                        <Card.Text>
                                            <div className="card-detail"><strong className='me-5'>Email:</strong> {user.email}</div>
                                            <div className="card-detail"><strong>Phone:</strong> {user.phone}</div>
                                            <div className="card-detail"><strong>Address:</strong> {user.address}</div>
                                            <div className="card-detail"><strong>Pincode:</strong> {user.pincode}</div>
                                            <div className="card-detail"><strong>State:</strong> {user.state}</div>
                                            <div className="card-detail"><strong>City:</strong> {user.city}</div>
                                        </Card.Text>
                                        {loggedInUser.role === 'admin' && (
                                            <div className='d-flex flex-row flex-wrap justify-content-end gap-3'>
                                                <Button variant="primary" className="btn-edit" onClick={() => handleEdit(user)}>
                                                    <FaEdit className="me-2" /> Edit
                                                </Button>
                                                <Button variant="danger" className="btn-delete" onClick={() => handleDelete(user.pan)}>
                                                    <FaTrash className="me-2" /> Delete
                                                </Button>
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
