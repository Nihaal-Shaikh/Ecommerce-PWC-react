import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SubCategory(props) {

    const productData = props.productData;
    const category = props.category;
    const subcategory = props.subcategory;

    return (
        <>
            <Container className="text-center" fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>{category}</h2>
                </div>
                <Row>
                    {productData.map((ProductList, i) => (
                        <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
                            <Card className='image-box card w-100'>
                                <img className='center w-75' src={ProductList.image} alt="" />
                                <Card.Body>
                                    <p className='product-name-on-card'>{ProductList.title}</p>
                                    {!ProductList.special_price ? (
                                        <p className='product-price-on-card'>Price: ${ProductList.price}</p>
                                    ) : (
                                        <p className='product-price-on-card'>
                                            Price: <strike className='text-secondary'>${ProductList.special_price}</strike> ${ProductList.price}
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

export default SubCategory