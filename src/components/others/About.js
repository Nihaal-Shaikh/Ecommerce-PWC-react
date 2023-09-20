import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import parse from 'html-react-parser';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

function About() {

    const [aboutText, setAboutText] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

        const siteInfoAbout = sessionStorage.getItem('siteInfoAbout');

        if (siteInfoAbout == undefined) {
            axios.get(AppUrl.allSiteInfo)
                .then(response => {
                    setAboutText(response.data[0]['about']);
                    setLoaderDiv('d-none');
                    setMainDiv('');
                    sessionStorage.setItem('siteInfoAbout', response.data[0]['about']);
                })
                .catch(error => {
                    toast.error('Something went wrong', {
                        position: 'bottom-center'
                    });
                });
        } else {
            setAboutText(siteInfoAbout);
            setLoaderDiv('d-none');
            setMainDiv('');
        }
    }, []);

    return (
        <>
            <Container>
                <div className='breadBody'>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>
                        <Link to="/about">About</Link>
                        </Breadcrumb.Item>
                </Breadcrumb>
                </div>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
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
                                        <div class="ph-col-12"></div>
                                        <div class="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={mainDiv}>
                            <h4 className='section-title-login'>About Us Page</h4>
                            <p className='section-title-contact'>{parse(aboutText)}</p>
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default About