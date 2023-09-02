import React from 'react';
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png"
import { Link } from "react-router-dom"

function NavMenuMobile() {
    return (
        <>
        <div className='TopSectionDown'>
                    <Container fluid={'true'} className='fixed-top shadow-sm p-2 mb-0 bg-white'>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Button className='btn'><i className='fa fa-bars'></i></Button>
                                <Link to="/">{' '}<img className='nav-logo' src={Logo} alt="" />{' '}</Link>
                                <Button className='cart-btn'><i className='fa fa-shopping-cart'></i>3 items</Button>
                            </Col>
                        </Row>
                    </Container>
                    <div className='sideNavOpen'>
                        <hr className='w-80' />
                        <div className='list-group'>
                            <a href="" className='list-group-item nav-font nav-itemmenu list-group-item-action'><i className='fa mr-2 fa-home'>Home</i></a>
                        </div>
                    </div>
                    <div className='ContentOverlayOpen'>

                    </div>
            </div>
        </>
    )
}

export default NavMenuMobile