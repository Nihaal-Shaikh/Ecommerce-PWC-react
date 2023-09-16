import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import parse from 'html-react-parser';

function Privacy() {

    const [privacyText, setPrivacyText] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

        const siteInfoPrivacy = sessionStorage.getItem('siteInfoPrivacy');

        if (siteInfoPrivacy == undefined) {
            axios.get(AppUrl.allSiteInfo)
                .then(response => {
                    setPrivacyText(response.data[0]['privacy']);
                    setLoaderDiv('d-none');
                    setMainDiv('');
                    sessionStorage.setItem('siteInfoPrivacy', response.data[0]['privacy']);
                })
                .catch(error => {
                    toast.error('Something went wrong', {
                        position: 'bottom-center'
                    });
                });
        } else {
            setPrivacyText(siteInfoPrivacy);
            setLoaderDiv('d-none');
            setMainDiv('');
        }
    }, []);

    return (
        <>
            <Container>
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
                            <h4 className='section-title-login'>Privacy Page</h4>
                            <p className='section-title-contact'>{parse(privacyText)}</p></div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Privacy