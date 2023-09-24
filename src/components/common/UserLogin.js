import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png"
import { Link } from "react-router-dom";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function UserLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {

        e.preventDefault();

        const data = {
            email,
            password
        }

        axios.post(AppUrl.userLogin, data)
            .then(resonse => {

            }).catch(error => {

            });
    }

  return (
    <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form className='onboardForm' onSubmit={handleLogin}>
                                <h4 className='section-title-login'>User Sign In</h4>
                                <input className='form-control m-2' onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Enter your email' />
                                <input className='form-control m-2' onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Enter your password' />
                                <Button className='btn btn-block m-2 site-btn-login' type='submit'>Login</Button>
                                <br /><br />
                                <hr />
                                <Link to='/forgotPassword'><b>Forgot your password?</b></Link>
                                <br /><br />
                                <Link to='/register'><b>Don't have an account?</b></Link>
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

export default UserLogin