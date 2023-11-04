import React, { useState } from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Forgot from "../../assets/images/forget.jpg"
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const formSubmit = (e) => {

        e.preventDefault();

        const data = {
            email
        }

        axios.post(AppUrl.forgotPassword, data)
            .then(response => {
                toast.success(response.data.message, {
                    position: 'top-right'
                });
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
                                    <h4 className='section-title-login'>Forgot Password</h4>
                                    <input className='form-control m-2' type="email" placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                                    <Button type='submit' className='btn btn-block m-2 site-btn-login'>Send Email</Button>
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

export default ForgotPassword