import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function Collection() {

    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get(AppUrl.ProductListByRemark("COLLECTION"))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, []);

    return (
        <>
            <Container className="text-center" fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>PRODUCT COLLECTION</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                <Row>
                    {productData.map((CollectionList, i) => (
                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src={CollectionList.image} alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>{CollectionList.title}</p>
                                    {!CollectionList.special_price ? (
                                        <p className='product-price-on-card'>Price: ${CollectionList.price}</p>
                                    ) : (
                                        <p className='product-price-on-card'>
                                            Price: <strike className='text-secondary'>${CollectionList.special_price}</strike> ${CollectionList.price}
                                        </p>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Collection