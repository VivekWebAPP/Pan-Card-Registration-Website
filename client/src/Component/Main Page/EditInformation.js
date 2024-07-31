import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faUser, faIdCard, faPhone } from '@fortawesome/free-solid-svg-icons';
import './editInformation.css';

const EditInformation = () => {
    const [formData, setFormData] = useState({
        pan: '',
        name: '',
        phone: '',
        address: '',
        pincode: '',
        state: '',
        city: ''
    });

    useEffect(() => {
        // Simulate fetching user data
        const fetchUserData = () => {
            // Replace with actual data fetching logic
            setFormData({
                pan: 'ABCD1234E',
                name: 'John Doe',
                phone: '1234567890',
                address: '123 Main Street',
                pincode: 110001,
                state: 'Delhi',
                city: 'Delhi'
            });
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Updated data:', formData);
    };

    return (
        <Container className="edit-information-container">
            <Card className="custom-card">
                <Card.Body>
                    <Row>
                        <Col>
                            <h2 className="form-title">Edit Information</h2>
                            <Form onSubmit={handleSubmit} className="custom-form">
                                <Form.Group controlId="formPAN" className="form-group">
                                    <Form.Label>PAN Card Number</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faIdCard} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="pan"
                                            value={formData.pan}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your PAN card number"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formName" className="form-group">
                                    <Form.Label>Name</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formPhone" className="form-group">
                                    <Form.Label>Phone</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faPhone} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formAddress" className="form-group">
                                    <Form.Label>Address</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formPincode" className="form-group">
                                    <Form.Label>Pincode</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faHome} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your pincode"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formState" className="form-group">
                                    <Form.Label>State</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your state"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formCity" className="form-group">
                                    <Form.Label>City</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            required
                                            className="input-field"
                                            placeholder="Enter your city"
                                        />
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="submit" className="submit-btn">
                                    Save Changes
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default EditInformation;
