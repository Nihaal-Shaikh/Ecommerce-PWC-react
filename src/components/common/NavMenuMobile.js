import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import Bars from "../../assets/images/bars.png";
import { Link } from "react-router-dom";
import MegaMenuMobile from '../home/MegaMenuMobile';

function NavMenuMobile() {

    const [sideNavState, setSideNavState] = useState('sideNavClose');
    const [contentOverState, setContentOverState] = useState('ContentOverlayClose');
  
    const sideNavOpenClose = () => {
      if (sideNavState === 'sideNavOpen') {
        setSideNavState('sideNavClose');
        setContentOverState('ContentOverlayClose');
      } else {
        setSideNavState('sideNavOpen');
        setContentOverState('ContentOverlayOpen');
      }
    };

    return (
        <>
        <div className='TopSectionDown'>
                    <Container fluid={'true'} className='fixed-top shadow-sm p-2 mb-0 bg-white'>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <img src={Bars} onClick={sideNavOpenClose} className='bar-img' alt="" />
                                <Link to="/">{' '}<img className='nav-logo' src={Logo} alt="" />{' '}</Link>
                                <Button className='cart-btn'><i className='fa fa-shopping-cart'></i>3 items</Button>
                            </Col>
                        </Row>
                    </Container>
                    <div className={sideNavState}>
                            <MegaMenuMobile />
                    </div>
                    <div onClick={sideNavOpenClose} className={contentOverState}>

                    </div>
            </div>
        </>
    )
}

export default NavMenuMobile