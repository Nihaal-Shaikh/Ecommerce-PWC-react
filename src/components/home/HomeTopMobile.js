import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeSlider from './HomeSlider'
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function HomeTopMobile() {

  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
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
        <Row className='p-0 m-0 overflow-hidden'>
            <Col lg={12} md={12} sm={12}>
                <HomeSlider data={sliderData} />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default HomeTopMobile