import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import Select from 'react-select';

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

    const cityOptions = [
      { value: 'Assam', label: 'Assam' },
      { value: 'Bihar', label: 'Bihar' },
      { value: 'Goa', label: 'Goa' },
      { value: 'Gujarat', label: 'Gujarat' },
      { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
      { value: 'Punjab', label: 'Punjab' }
    ];

    const paymentMethodOptions = [
      { value: 'Cash On Delivery', label: 'Cash On Delivery' },
      { value: 'Stripe', label: 'Stripe' }
    ];

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); 

    const totalPrice = productData.reduce((acc, CartList) => acc + CartList.total_price, 0);

    const RemoveCartItem = (id) => {

        axios.get(AppUrl.RemoveCartItem(id))
            .then(response => {
                if(response.data === 1) {
                    cogoToast.success('Product removed successfully from cart.', { position: 'top-right' });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }else {
                    cogoToast.error('Your request was not successful', { position: 'top-right' });
                }
            })
            .catch(error => {
                cogoToast.error('Your request was not successful', { position: 'top-right' });
            });

    }

    const ItemPlus = (id, quantity, price) => {

        axios.get(AppUrl.CartItemPlus(id, quantity, price))
            .then(response => {
                if(response.data === 1) {
                    cogoToast.success('Product added successfully to cart.', { position: 'top-right' });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }else {
                    cogoToast.error('Your request was not successful', { position: 'top-right' });
                }
            })
            .catch(error => {
                cogoToast.error('Your request was not successful', { position: 'top-right' });
            });

    }

    const ItemMinus = (id, quantity, price) => {

        axios.get(AppUrl.CartItemMinus(id, quantity, price))
            .then(response => {
                if(response.data === 1) {
                    cogoToast.success('Product removed successfully from cart.', { position: 'top-right' });
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }else {
                    cogoToast.error('Your request was not successful', { position: 'top-right' });
                }
            })
            .catch(error => {
                cogoToast.error('Your request was not successful', { position: 'top-right' });
            });

    }

    return (
        <>
            <Container>
                <div className="section-title text-center mb-55"><h2>Product Cart List</h2>
                </div>
                <Row>
                    <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
                        {productData.map((CartList, i) => (
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
                                            <p>Total price: </p>
                                        </Col>
                                        <Col md={3} lg={3} sm={12} xs={12}>
                                            <Button onClick={() => ItemPlus(CartList.id, CartList.quantity, CartList.unit_price)} className="btn mt-2 mx-1 btn-lg  site-btn"><i className="fa fa-plus"></i></Button>
                                            <Button onClick={() => ItemMinus(CartList.id, CartList.quantity, CartList.unit_price)} className="btn mt-2 mx-1 btn-lg  site-btn"><i className="fa fa-minus"></i></Button>
                                            <Button onClick={() => RemoveCartItem(CartList.id)} className="btn mt-2 mx-1 btn-lg  site-btn"><i className="fa fa-trash-alt"></i></Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                    <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
                        <Card>
                            <Card.Body>
                                <Container fluid={true}>
                                    <Row>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <h5 className="Product-Name text-danger">Total Due: ${totalPrice}</h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Form.Group>
                                                <Form.Label>Choose City</Form.Label>
                                                <Select
                                                    value={selectedCity}
                                                    onChange={(selectedOption) => setSelectedCity(selectedOption)}
                                                    options={cityOptions}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Form.Group>
                                                <Form.Label>Choose Payment Method</Form.Label>
                                                <Select
                                                    value={selectedPaymentMethod}
                                                    onChange={(selectedOption) => setSelectedPaymentMethod(selectedOption)}
                                                    options={paymentMethodOptions}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Form.Group>
                                                <Form.Label>Your Name</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Form.Group>
                                                <Form.Label>Delivery Address</Form.Label>
                                                <Form.Control as="textarea" rows={2} placeholder="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Button className="btn site-btn">Confirm Order</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart