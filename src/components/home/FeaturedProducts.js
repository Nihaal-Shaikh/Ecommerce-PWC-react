import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function FeaturedProducts() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get(AppUrl.ProductListByRemark("FEATURED"))
            .then(response => {
                console.log(response);
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, []);

    const MyView = productData.map((FeaturedList, i) => {
        if(!FeaturedList.special_price) {
            return <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
            <Link to="/productDetail">
                <Card className='image-box card'>
                    <img className='center' src={FeaturedList.image} alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>{FeaturedList.title}</p>
                        <p className='product-price-on-card'>Price: ${FeaturedList.price}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
        } else {
            return <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
            <Link to="/productDetail">
                <Card className='image-box card'>
                    <img className='center' src={FeaturedList.image} alt="" />
                    <Card.Body>
                        <p className='product-name-on-card'>{FeaturedList.title}</p>
                        <p className='product-price-on-card'>Price: <strike className='text-secondary'>${FeaturedList.special_price}</strike> ${FeaturedList.price}</p>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
        }
    });

    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                <Row>
                    {MyView}
                </Row>
            </Container>
        </>
    )
}

export default FeaturedProducts