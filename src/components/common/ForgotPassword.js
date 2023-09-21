import React from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Forgot from "../../assets/images/forget.jpg"
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form className='onboardForm'>
                                <h4 className='section-title-login'>Forgot Password</h4>
                                <input className='form-control m-2' type="email" placeholder='Enter your email' />
                                <Button className='btn btn-block m-2 site-btn-login'>Send Email</Button>
                            </Form>
                        </Col>
                        <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                            <img className='onboardBanner' src={Forgot} alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ForgotPassword