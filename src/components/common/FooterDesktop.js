import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import parse from 'html-react-parser';

function FooterDesktop() {

    const [address, setAddress] = useState('');
    const [androidLink, setAndroidLink] = useState('');
    const [iosLink, setIosLink] = useState('');
    const [facebookLink, setFacebookLink] = useState('');
    const [twitterLink, SetTwitterLink] = useState('');
    const [instaLink, SetInstaLink] = useState('');
    const [copyrightText, SetCopyrightText] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

        axios.get(AppUrl.allSiteInfo)
            .then(response => {
                setAddress(response.data[0]['address']);
                setAndroidLink(response.data[0]['android_app_link']);
                setIosLink(response.data[0]['ios_app_link']);
                setFacebookLink(response.data[0]['facebook_link']);
                SetTwitterLink(response.data[0]['twitter_link']);
                SetInstaLink(response.data[0]['instagram_link']);
                SetCopyrightText(response.data[0]['copyright_text']);
                setLoaderDiv('d-none');
                setMainDiv('');
            })
            .catch(error => {
            });

    }, []);

    return (
        <>
            <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
                <Container>
                    <Row className='px-0 my-5'>
                        <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                            <div className={loaderDiv}>
                                <div class="ph-item">
                                    <div class="ph-col-12">
                                        <div class="ph-row">
                                            <div class="ph-col-4"></div>
                                            <div class="ph-col-8 empty"></div>
                                            <div class="ph-col-6"></div>
                                            <div class="ph-col-6 empty"></div>
                                            <div class="ph-col-12"></div>
                                            <div class="ph-col-12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={mainDiv}>
                                <h5 className='footer-menu-title'>Office Address</h5>
                                {parse(address)}
                            </div>
                            <h5 className='footer-menu-title'>
                                Social Link
                            </h5>
                            <a href={facebookLink} target='_blank'><i className='fab m-1 h4 fa-facebook'></i></a>
                            <a href={instaLink} target='_blank'><i className='fab m-1 h4 fa-instagram'></i></a>
                            <a href={twitterLink} target='_blank'><i className='fab m-1 h4 fa-twitter'></i></a>
                        </Col>
                        <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                            <h5 className='footer-menu-title'>
                                The Company
                            </h5>
                            <Link to='/about' className='footer-link'> About Us</Link><br />
                            <Link to='/' className='footer-link'> Company Profile</Link><br />
                            <Link to='/contact' className='footer-link'> Contact Us</Link><br />
                        </Col>
                        <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                            <h5 className='footer-menu-title'>
                                More Info
                            </h5>
                            <Link to='/purchase' className='footer-link'>How to Purchase</Link><br />
                            <Link to='/privacy' className='footer-link'>Privacy Policy</Link><br />
                            <Link to='/refund' className='footer-link'>Refund Policy</Link><br />
                        </Col>
                        <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                            <h5 className='footer-menu-title'>Download App</h5>
                            <a href={androidLink} target='_blank'><img src={Google} alt="" /></a><br />
                            <a href={iosLink} target='_blank'><img className='mt-2' src={Apple} alt="" /></a><br />
                            Change your language
                            <div id='google_translate_element'></div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
                    <Container>
                        <Row>
                            <h6 className='text-white'>{parse(copyrightText)}</h6>
                        </Row>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default FooterDesktop