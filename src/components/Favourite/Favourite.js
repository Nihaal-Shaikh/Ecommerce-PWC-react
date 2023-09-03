import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Favourite() {
  return (
    <>
        <Container className="text-center" fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2>My Favourite Items</h2>
                <p>Some of our Exclusive Collections.</p>
            </div>
            <Row>
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card w-100'>
                        <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70" alt="" />
                        <Card.Body>
                            <p className='product-name-on-card'>Men Striped Round Neck Cotton Blend Blue, Black T-Shirt</p>
                            <p className='product-price-on-card'>Price: $150</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove</i></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card w-100'>
                        <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/z/i/6/m-a2atw139-tommy-hilfiger-original-imagk4enwa9vxkfj.jpeg?q=70" alt="" />
                        <Card.Body>
                            <p className='product-name-on-card'>Men Regular Fit Striped Button Down Collar Casual Shirt</p>
                            <p className='product-price-on-card'>Price: $150</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove</i></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card w-100'>
                        <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/4/c/l/-original-imagsbygt7cnkghy.jpeg?q=70" alt="" />
                        <Card.Body>
                            <p className='product-name-on-card'>Men Printed Round Neck Pure Cotton Blue T-Shirt</p>
                            <p className='product-price-on-card'>Price: $150</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove</i></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card w-100'>
                        <img className='center w-75' src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/g/e/-original-imagpqjxyad3gjby.jpeg?q=70" alt="" />
                        <Card.Body>
                            <p className='product-name-on-card'>Men Printed V Neck Polyester Green T-Shirt</p>
                            <p className='product-price-on-card'>Price: $150</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove</i></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Favourite