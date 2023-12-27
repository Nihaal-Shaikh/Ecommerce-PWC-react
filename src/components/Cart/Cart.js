import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import cogoToast from 'cogo-toast';
import Select from 'react-select';
import { useNavigate } from 'react-router';

function Cart(props) {

    const navigate = useNavigate();
    const user = props.user.email
    const [productData, setProductData] = useState([]);
    const [name, setName] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [confirmBtn, setConfirmBtn] = useState('Confirm Order');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
          navigate('/login');
        }
    }, []);

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

    const [selectedCity, setSelectedCity] = useState();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();

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
                    navigate('/orderList');
                }else {
                    cogoToast.error('Your request was not successful', { position: 'top-right' });
                }
            })
            .catch(error => {
                cogoToast.error('Your request was not successful', { position: 'top-right' });
            });

    }

    const confirmClick = () => {
        if(!selectedCity){
            cogoToast.error('Please select a city', { position: 'top-right' });
        } else if(!selectedPaymentMethod){
            cogoToast.error('Please select a payment method', { position: 'top-right' });
        } else if(!name){
            cogoToast.error('Please enter your name', { position: 'top-right' });
        } else if(!deliveryAddress){
            cogoToast.error('Please enter your delivery address', { position: 'top-right' });
        } else {
            setConfirmBtn('Placing order...')
            const invoice_no = new Date().getTime();

            let myFormData = new FormData();

            myFormData.append('city', selectedCity.value);
            myFormData.append('payment_method', selectedPaymentMethod.value);
            myFormData.append('name', name);
            myFormData.append('delivery_address', deliveryAddress);
            myFormData.append('email', user);
            myFormData.append('invoice_no', invoice_no);
            myFormData.append('delivery_charge', '0');

            axios.post(AppUrl.cartOrder, myFormData)
                .then(response => {
                    if(response.data === 1) {
                        cogoToast.success('Order confirmed.', { position: 'top-right' });
                        setConfirmBtn('Confirm Order');
                        navigate('/orderList');
                    }else {
                        cogoToast.error('Your request was not successful', { position: 'top-right' });
                    }
                })
                .catch(error => {
                    cogoToast.error('Your request was not successful', { position: 'top-right' });
                });
        }
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
                                            <h6>Price = {CartList.quantity} x {CartList.unit_price} = ₹{CartList.total_price}</h6>
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
                                            <h5 className="Product-Name text-danger">Total Due: ₹{totalPrice}</h5>
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
                                                <Form.Control type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Form.Group>
                                                <Form.Label>Delivery Address</Form.Label>
                                                <Form.Control as="textarea" rows={2} placeholder="" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12} lg={12} sm={12} xs={12} className="p-1">
                                            <Button onClick={confirmClick} className="btn site-btn">{confirmBtn}</Button>
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