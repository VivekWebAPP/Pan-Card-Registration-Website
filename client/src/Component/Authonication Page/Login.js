import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './createNewUser.css';
import image from '../../assets/loginPage.jpg';
import { Link } from 'react-router-dom';
import Context from '../../Context API/ContextState';


const Login = () => {
    const [formData, setFormData] = useState({
        pan:'',
        name:'',
        email:'',
    });
    const [errors, setErrors] = useState({});
    const context = useContext(Context);
    const {setpanCardNumber,panCardLoading,userDetails} = context;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if(name==='pan'){
            setpanCardNumber(value);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.pan) newErrors.pan = 'Pan Card Number is required';
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
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
                                <Form.Label>Pan Card Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pan"
                                    value={formData.pan}
                                    onChange={handleChange}
                                    isInvalid={!!errors.pan}
                                    placeholder="Enter your Pan Card Number"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.pan}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                    placeholder="Enter your full name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    placeholder="Email your password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
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
