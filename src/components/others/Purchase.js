import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import parse from 'html-react-parser';
import AppUrl from '../../Api/AppUrl';

function Purchase() {
    
    const [purchaseText, setPurchaseText] = useState('');

    useEffect(() => {

        const siteInfoPurchase = sessionStorage.getItem('siteInfoPurchase');

        if (siteInfoPurchase == undefined) {
            axios.get(AppUrl.allSiteInfo)
            .then(response => {
              setPurchaseText(response.data[0]['purchase_guide']);
              sessionStorage.setItem('siteInfoPurchase', response.data[0]['purchase_guide']);
            })
            .catch(error => {
                toast.error('Something went wrong', {
                    position: 'bottom-center'
                });
            });
        } else {
            setPurchaseText(siteInfoPurchase);
        }

    }, []);

    return (
        <>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                        <h4 className='section-title-login'>Purchase Page</h4>
                        <p className='section-title-contact'>{parse(purchaseText)}</p>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </>
    )
}

export default Purchase