import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Forgot from "../../assets/images/forget.jpg"
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');

    const formSubmit = (e) => {

        e.preventDefault();

        const data = {
            token,
            email,
            password,
            password_confirmation
        }

        axios.post(AppUrl.resetPassword, data)
            .then(response => {
                toast.success(response.data.message, {
                    position: 'top-right'
                });
                setToken('');
                setEmail('');
                setPassword('');
                setPassword_confirmation('');
            }).catch(error => {
                toast.error(error.response.data.message, {
                    position: 'top-right'
                });
            });
    }

  return (
    <>
    <Container>
        <Row className='p-2'>
            <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                <Row className='text-center'>
                    <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                        <Form className='onboardForm' onSubmit={formSubmit}>
                            <h4 className='section-title-login'>Reset Password</h4>
                            <input className='form-control m-2' type="text" placeholder='Enter your pin' value={token} onChange={(e) => { setToken(e.target.value) }} />
                            <input className='form-control m-2' type="email" placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input className='form-control m-2' type="password" placeholder='Enter your new password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <input className='form-control m-2' type="password" placeholder='Confirm password' value={password_confirmation} onChange={(e) => { setPassword_confirmation(e.target.value) }} />
                            <Button type='submit' className='btn btn-block m-2 site-btn-login'>Reset Password</Button>
                        </Form>
                    </Col>
                    <Col className='p-0 Desktop m-0' md={6} lg={6} sm={6} xs={6}>
                        <img className='onboardBanner' src={Forgot} alt="" />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    <ToastContainer />
    </>
  )
}

export default ResetPassword