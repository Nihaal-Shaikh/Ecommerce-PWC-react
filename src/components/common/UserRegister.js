import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Login from "../../assets/images/login.png"
import { Link, useNavigate } from "react-router-dom";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';

function UserRegister(props) {
    
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const formSubmit = (e) => {

        e.preventDefault();

        const data = {
            name,
            email,
            password,
            password_confirmation
        }

        axios.post(AppUrl.userRegister, data)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                setIsLoggedIn(true);
                props.setUser(response.data.user);
            }).catch(error => {

            });
    }

    useEffect(() => {
        
        if (isLoggedIn) {
            navigate('/profile');
        }
        
    }, [isLoggedIn]);

    useEffect(() => {
        if(localStorage.getItem('token')) {
          navigate('/profile');
        }
    }, []);

  return (
    <>
        <Container>
            <Row className='p-2'>
                <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className='d-flex justify-content-center' md={6} lg={6} sm={12} xs={12}>
                            <Form className='onboardForm' onSubmit={formSubmit}>
                                <h4 className='section-title-login'>User Registration</h4>
                                <input className='form-control m-2' type="text" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
                                <input className='form-control m-2' type="email" placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                                <input className='form-control m-2' type="password" placeholder='Enter your password' onChange={(e) => { setPassword(e.target.value) }} />
                                <input className='form-control m-2' type="password" placeholder='Confirm password' onChange={(e) => { setPassword_confirmation(e.target.value) }} />
                                <Button type='submit' className='btn btn-block m-2 site-btn-login'>Sign Up</Button>
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