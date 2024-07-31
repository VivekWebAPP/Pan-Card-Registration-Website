import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkerAlt, faCity, faBuilding, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './addAddress.css';

const AddAddress = () => {
    const [formData, setFormData] = useState({
        address: '',
        pincode: '',
        state: '',
        city: ''
    });
    const [addresses, setAddresses] = useState([
        {
            address: '123 Main Street',
            pincode: 110001,
            state: 'Delhi',
            city: 'New Delhi'
        },
        {
            address: '456 Elm Street',
            pincode: 560001,
            state: 'Karnataka',
            city: 'Bangalore'
        }
    ]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddresses([...addresses, formData]);
        setFormData({
            address: '',
            pincode: '',
            state: '',
            city: ''
        });
    };

    const handleDelete = (index) => {
        const newAddresses = addresses.filter((_, i) => i !== index);
        setAddresses(newAddresses);
    };

    const handleEdit = (index) => {
        const addressToEdit = addresses[index];
        setFormData(addressToEdit);
        handleDelete(index);
    };

    return (
        <Container className="add-address-container">
            <Card className="shadow-sm p-4 mb-5 bg-white rounded">
                <Card.Body>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <h2 className="form-title">Add Address</h2>
                            <Form onSubmit={handleSubmit} className="custom-form">
                                <Form.Group controlId="formAddress" className="form-group">
                                    <Form.Label>Address</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faHome} className="input-icon" />
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            required
                                            className="input-field ps-5"
                                            placeholder="Enter your address"
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formPincode" className="form-group">
                                    <Form.Label>Pincode</Form.Label>
                                    <div className="input-wrapper">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                                        <Form.Control
                                            type="number"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleChange}
                                            required
                                            className="input-field ps-5"
                                            placeholder="Enter your pincode"
                                        />
                                    </div>
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formState" className="form-group">
                                            <Form.Label>State</Form.Label>
                                            <div className="input-wrapper">
                                                <FontAwesomeIcon icon={faBuilding} className="input-icon" />
                                                <Form.Control
                                                    type="text"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    required
                                                    className="input-field ps-5"
                                                    placeholder="Enter your state"
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formCity" className="form-group">
                                            <Form.Label>City</Form.Label>
                                            <div className="input-wrapper">
                                                <FontAwesomeIcon icon={faCity} className="input-icon" />
                                                <Form.Control
                                                    type="text"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    required
                                                    className="input-field ps-5"
                                                    placeholder="Enter your city"
                                                />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button variant="primary" type="submit" className="submit-button">
                                    Add Address
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className="shadow-sm p-4 mb-5 bg-white rounded">
                <Card.Body>
                    <h2 className="form-title">Your Addresses</h2>
                    {addresses.map((address, index) => (
                        <div key={index} className="address-card">
                            <p><FontAwesomeIcon icon={faHome} /> Address: {address.address}</p>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Pincode: {address.pincode}</p>
                            <p><FontAwesomeIcon icon={faBuilding} /> State: {address.state}</p>
                            <p><FontAwesomeIcon icon={faCity} /> City: {address.city}</p>
                            <div className="address-actions">
                                <Button variant="outline-primary" onClick={() => handleEdit(index)}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </Button>
                                <Button variant="outline-danger" onClick={() => handleDelete(index)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </Button>
                            </div>
                        </div>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddAddress;
