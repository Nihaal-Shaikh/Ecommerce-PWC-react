import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HomeSlider from './HomeSlider'

function HomeTopMobile() {
  return (
    <>
    <Container className='p-0 m-0 overflow-hidden' fluid={true}>
        <Row className='p-0 m-0 overflow-hidden'>
            <Col lg={12} md={12} sm={12}>
                {/* <HomeSlider /> */}
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default HomeTopMobile