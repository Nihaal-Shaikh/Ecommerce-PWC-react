import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        alert('Hello');
    }

    return (
        <>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                        <Row className='text-center'>
                            <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                                <Form onSubmit={onFormSubmit} className='onboardForm'>
                                    <h4 className='section-title-login'>Contact With Us</h4>
                                    <h6 className='section-sub-title'>Please contact with us</h6>
                                    <input className='form-control m-2' type="text" placeholder='Enter Your Name' onChange={(e) => {setName(e.target.value)}} />
                                    <input className='form-control m-2' type="email" placeholder='Enter Email Id' onChange={(e) => {setEmail(e.target.value);}} />
                                    <Form.Control className='form-control m-2' as="textarea" rows={3} placeholder='Message' onChange={(e) => {setMessage(e.target.value);}} />
                                    <Button type='submit' className='btn btn-block m-2 site-btn-login'>Next</Button>
                                </Form>
                            </Col>
                            <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}> <br /><br />
                                <p className='section-title-contact'>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                                    Email: support@easyshop.com</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03608971403!2d-74.30933232776687!3d40.697539959864436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1693733950951!5m2!1sen!2sin" width="550" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Contact