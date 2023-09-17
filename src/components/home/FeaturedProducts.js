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
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>FEATURED PRODUCT</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                <Row>
                    {productData.map((FeaturedList, i) => (
                        <Col className='p-1' key={i} xl={2} lg={2} sm={4} xs={6}>
                            <Link to="/productDetail">
                                <Card className='image-box card'>
                                    <img className='center' src={FeaturedList.image} alt="" />
                                    <Card.Body>
                                        <p className='product-name-on-card'>{FeaturedList.title}</p>
                                        {!FeaturedList.special_price ? (
                                            <p className='product-price-on-card'>Price: ${FeaturedList.price}</p>
                                        ) : (
                                            <p className='product-price-on-card'>
                                                Price: <strike className='text-secondary'>${FeaturedList.special_price}</strike> ${FeaturedList.price}
                                            </p>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default FeaturedProducts