import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import image from '../../assets/registrationImage.jpg';
import './createNewUser.css';
import { Link } from 'react-router-dom';
import Context from '../../Context API/ContextState';
import { action } from '../../redux/index.js';
import { useDispatch, useSelector } from 'react-redux';

const CreateANewUser = () => {
    const [formData, setFormData] = useState({
        pan: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        pincode: '',
        state: '',
        city: '',
        role: 'user'
    });
    const context = useContext(Context);
    const { setPincode, stateAndCity,setAuth } = context;
    const regestrationState = useSelector((state)=>state.authonication);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'pincode') {
            setPincode(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(action.CreateANewUser(formData.pan,formData.name,formData.email,formData.phone,formData.address,formData.address,stateAndCity.state,stateAndCity.city));
        if(regestrationState){
            localStorage.setItem('AuthToken',regestrationState);
            setAuth(regestrationState);
        }
    };

    return (
        <Container>
            <Row className="align-items-center full-height">
                <Col md={6} className="d-none d-md-block">
                    <img src={image} alt="Backdrop" className="backdrop-image" />
                </Col>
                <Col md={6}>
                    <div className="custom-form-container mb-5">
                        <h2>Registration</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formPan">
                                <Form.Label>PAN</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pan"
                                    value={formData.pan}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPincode">
                                <Form.Label>Pincode</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="state"
                                    value={formData.state || stateAndCity.state}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city || stateAndCity.city}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Register
                            </Button>
                        </Form>
                        <Link to={"/login"} className="custom-link">Already have an account? Login</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateANewUser;
