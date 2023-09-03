import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Apple from "../../assets/images/apple.png";
import Google from "../../assets/images/google.png";

function FooterMobile() {
    return (
        <>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
        <Container className='text-center'>
            <Row className='px-0 my-5'>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>
                        Office Address
                    </h5>
                    <p>
                        1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104 <br /> Email: support@easyshop.com
                    </p>
                    <h5 className='footer-menu-title'>
                        Social Link
                    </h5>
                    <a href=""><i className='fab m-1 h4 fa-facebook'></i></a>
                    <a href=""><i className='fab m-1 h4 fa-instagram'></i></a>
                    <a href=""><i className='fab m-1 h4 fa-twitter'></i></a>
                </Col>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>
                        Download App
                    </h5>
                    <a href=""><img src={Google} alt="" /></a><br />
                    <a href=""><img className='mt-2' src={Apple} alt="" /></a><br />
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
            <Container>
                <Row>
                    <h6 className='text-white'>® Copyright 2023 by Easy Shop, All Rights Reserved</h6>
                </Row>
            </Container>
        </Container>
        </div>
        </>
    )
}

export default FooterMobile