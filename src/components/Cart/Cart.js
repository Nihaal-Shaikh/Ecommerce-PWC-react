import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Product1 from "../../assets/images/product1.png";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';

function Cart(props) {

    const user = props.user.email
    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get(AppUrl.CartList(user))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, [user]);

    return (
        <>
            <Container>
                <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                </div>
                <Row>
                {productData.map((CartList, i) => (
                    <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                        <Card >
                            <Card.Body>
                                <Row>
                                    <Col md={3} lg={3} sm={6} xs={6}>
                                        <img className="cart-product-img" src={CartList.image} />
                                    </Col>

                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <h5 className="product-name">{CartList.product_name}</h5>
                                        <h6> Quantity = {CartList.quantity} </h6>
                                        <p>Size: {CartList.size} | Colour: {CartList.colour}</p>
                                        <h6>Price = {CartList.quantity} x {CartList.unit_price} = ${CartList.total_price}</h6>
                                    </Col>

                                    <Col md={3} lg={3} sm={12} xs={12}>
                                        <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-trash-alt"></i> Remove </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                    <Col className="p-1" lg={12} md={12} sm={12} xs={12} >
                        <Card >
                            <Card.Body>
                                <Row>
                                    <Col md={4} lg={4} sm={6} xs={6}>
                                        <h5> Total Items = 05 </h5>
                                        <h5>Total Price = 5000$</h5>
                                        <Button className="btn btn-block w-100 mt-3  site-btn"><i className="fa fa-shopping-cart"></i> Checkout </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Cart