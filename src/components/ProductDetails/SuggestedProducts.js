import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AppUrl from '../../Api/AppUrl';

function SuggestedProducts(props) {

    const [productData, setProductData] = useState([]);
    const subcategory = props.subcategory;

    useEffect(() => {

        axios.get(AppUrl.SimilarProducts(subcategory))
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
                    <h2>You may also like</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                {productData.length > 0 ? (
                    <Row>
                        {productData.map((productList, i) => (
                            <Col className="p-1" key={i} xl={2} lg={2} md={2} sm={4} xs={6}>
                                <Link className="text-link" to={`/productdetails/${productList.id}`}>
                                    <Card className="image-box card">
                                        <img className="center" src={productList.image} />
                                        <Card.Body>
                                            <p className="product-name-on-card">{productList.title}</p>
                                            {productList.special_price === 'na' ? (
                                                <p className="product-price-on-card">Price: ${productList.price}</p>
                                            ) : (
                                                <p className="product-price-on-card">
                                                    Price: <strike className="text-secondary">${productList.price}</strike> ${productList.special_price}
                                                </p>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <p>There are no similar products</p>
                )}
            </Container>
        </>
    )
}

export default SuggestedProducts