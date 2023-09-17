import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MegaMenu from './MegaMenu';
import HomeSlider from './HomeSlider';
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function HomeTop() {

    const [menuData, setMenuData] = useState([]);
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        axios.get(AppUrl.allCategoryDetails)
            .then(response => {
                setMenuData(response.data);
            })
            .catch(error => {
            });

        axios.get(AppUrl.allSlider)
            .then(response => {
                setSliderData(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <>
            <Container className='p-0 m-0 overflow-hidden' fluid={true}>
                <Row>
                    <Col lg={3} md={3} sm={12}>
                        <MegaMenu data={menuData} />
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                        <HomeSlider data={sliderData} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeTop