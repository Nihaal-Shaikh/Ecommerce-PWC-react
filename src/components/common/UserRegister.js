import React from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png"
import { Link } from "react-router-dom";

function UserRegister() {
  return (
    <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form className='onboardForm'>
                                <h4 className='section-title-login'>User Registration</h4>
                                <input className='form-control m-2' type="text" placeholder='Enter your name' />
                                <input className='form-control m-2' type="email" placeholder='Enter your email' />
                                <input className='form-control m-2' type="password" placeholder='Enter your password' />
                                <input className='form-control m-2' type="password" placeholder='Confirm password' />
                                <Button className='btn btn-block m-2 site-btn-login'>Sign Up</Button>
                                <br /><br />
                                <hr />
                                <Link to='/forgotPassword'><b>Forgot your password?</b></Link>
                                <br /><br />
                                <Link to='/login'><b>Already have an account?</b></Link>
                            </Form>
                        </Col>
                        <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                            <img className='onboardBanner' src={Login} alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default UserRegister