import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterDesktop() {
    return (
        <>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
        <Container>
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
                        The Company
                    </h5>
                </Col>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>
                        More Info
                    </h5>
                </Col>
                <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                    <h5 className='footer-menu-title'>
                        Download App
                    </h5>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default FooterDesktop