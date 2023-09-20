import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parse from 'html-react-parser';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";

function Refund() {

    const [refundText, setRefundText] = useState('');
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

        const siteInfoRefund = sessionStorage.getItem('siteInfoRefund');

        if (siteInfoRefund == undefined) {
            axios.get(AppUrl.allSiteInfo)
                .then(response => {
                    setRefundText(response.data[0]['refund']);
                    setLoaderDiv('d-none');
                    setMainDiv('');
                    sessionStorage.setItem('siteInfoRefund', response.data[0]['refund']);
                })
                .catch(error => {
                    toast.error('Something went wrong', {
                        position: 'bottom-center'
                    });
                });
        } else {
            setRefundText(siteInfoRefund);
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
                        <Link to="/refund">Refund</Link>
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
                            <h4 className='section-title-login'>Refund Page</h4>
                            <p className='section-title-contact'>{parse(refundText)}</p></div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Refund