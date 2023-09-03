import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SuggestedProducts() {
  return (
    <>
    <Container className='text-center' fluid={true}>
        <div className='section-title text-center mb-55'>
            <h2>You may also like</h2>
            <p>Some of our Exclusive Collections.</p>
        </div>
        <Row>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Link to="/productDetail">
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/n/m/-original-imagna3rjqn8vqxb.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>Infinix SMART 7 (Emerald Green, 64 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
                </Link>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/a/6/f/-original-imagnb6nvnqz7hqq.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>POCO C55 (Forest Green, 64 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>APPLE iPhone 13 (Midnight, 128 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>Google Pixel 7a (Sea, 128 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/2/r/galaxy-fold5-sm-f946blbhins-samsung-original-imagru5ugghfnwnj.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>SAMSUNG Galaxy Z Fold5 (Icy Blue, 512 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
                <Card className='image-box card'>
                    <img className='center' src="https://rukminim2.flixcart.com/image/416/416/ksnjp8w0/mobile/f/k/y/galaxy-z-flip3-5g-sm-f711bzkainu-samsung-original-imag662axn2xmght.jpeg?q=70" alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>SAMSUNG Galaxy Z Flip3 5G (Phantom Black, 128 GB)</p>
                        <p className='product-price-on-card'>Price: $150</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default SuggestedProducts