import React from 'react';
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png"
import { Link } from "react-router-dom"

function NavMenuDesktop() {
    return (
        <>
            <div className='TopSectionDown'>
                <Navbar fixed='top' className='navbar' bg="light">
                    <Container fluid={true}>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Link to="/"><img className='nav-logo' src={Logo} alt="" /></Link>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default NavMenuDesktop