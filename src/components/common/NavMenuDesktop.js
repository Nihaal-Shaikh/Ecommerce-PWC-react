import React, { useState } from 'react';
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png";
import { Link, useNavigate   } from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
import Bars from "../../assets/images/bars.png"

function NavMenuDesktop(props) {

    const [sideNavState, setSideNavState] = useState('sideNavClose');
    const [contentOverState, setContentOverState] = useState('ContentOverlayClose');
    const [searchKey, setSearchKey] = useState('');
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');
  
    const sideNavOpenClose = () => {
      if (sideNavState === 'sideNavOpen') {
        setSideNavState('sideNavClose');
        setContentOverState('ContentOverlayClose');
      } else {
        setSideNavState('sideNavOpen');
        setContentOverState('ContentOverlayOpen');
      }
    };

    const searchOnChange = (event) => {
        setSearchKey(event.target.value);
    };

    const onSearch = () => {
        if(searchKey.length >= 2) {
            navigate(`/searchByProduct/${searchKey}`);
            setSearchKey('');
        }
    };
    
    return (
        <>
            <div className='TopSectionDown'>
                <Navbar fixed={'top'} className='navbar' bg="light">
                    <Container fluid={'true'} className='fixed-top shadow-sm p-2 mb-0 bg-white'>
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <img src={Bars} onClick={sideNavOpenClose} className='bar-img' alt="" />
                                <Link to="/">{' '}<img className='nav-logo' src={Logo} alt="" />{' '}</Link>
                            </Col>
                            <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                                <div className='input-group w-100'>
                                    <input onChange={searchOnChange} type="text" value={searchKey} className='form-control' />
                                    <Button onClick={onSearch} type='button' className='btn site-btn'>
                                        <i className='fa fa-search' />
                                    </Button>
                                </div>
                            </Col>
                            <Col className='p-1 mt-1' lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favourite" className='btn'>
                                    <i className='fa h4 fa-heart'></i><sup><span className='badge text-white bg-danger'>3</span></sup>
                                </Link>
                                <Link to="/notification" className='btn'>
                                    <i className='fa h4 fa-bell'></i><sup><span className='badge text-white bg-danger'>5</span></sup>
                                </Link>
                                {isLoggedIn ? (
                                    <>
                                        <Link to="/profile" className="h4 btn">
                                            PROFILE
                                        </Link>
                                        <Link to="/login" className="h4 btn">
                                            LOGOUT
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="h4 btn">
                                            LOGIN
                                        </Link>
                                        <Link to="/register" className="h4 btn">
                                            REGISTER
                                        </Link>
                                    </>
                                )}
                                <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </div>
            <div className={sideNavState}>
                <MegaMenuAll />
            </div>
            <div onClick={sideNavOpenClose} className={contentOverState}>

            </div>
        </>
    )
}

export default NavMenuDesktop