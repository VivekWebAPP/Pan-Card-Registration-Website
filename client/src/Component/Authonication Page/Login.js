import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './createNewUser.css';
import image from '../../assets/loginPage.jpg';
import { Link } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log(formData);
        }
    };

    return (
        <Container>
            <Row className="align-items-center full-height">
                <Col md={6} className="d-none d-md-block">
                    <img src={image} alt="Backdrop" className="backdrop-image" />
                </Col>
                <Col md={6}>
                    <div className="custom-form-container">
                        <h2>Login</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    placeholder="Enter your email"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                    placeholder="Enter your password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Login
                            </Button>
                        </Form>
                        <Link to={"/"} className="custom-link">Don't have an account? Register</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
