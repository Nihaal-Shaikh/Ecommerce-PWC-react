import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Product1 from "../../assets/images/product1.png";
import Product2 from "../../assets/images/product2.png";
import Product3 from "../../assets/images/product3.png";
import Product4 from "../../assets/images/product4.png";

function ProductDetails(props) {

    const productData = props.data;

    return (
        <>
            <Container className="BetweenTwoSection" fluid={true}>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                        <Row>
                            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                <img className="w-100" src={productData['productDetails'][0]['image_one']} />
                                <Container className="my-3">
                                    <Row>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100" src={productData['productDetails'][0]['image_one']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100" src={productData['productDetails'][0]['image_two']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100" src={productData['productDetails'][0]['image_three']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100" src={productData['productDetails'][0]['image_four']} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                <h5 className="Product-Name">{productData['productList'][0]['title']}</h5>
                                <h6 className="section-sub-title">{productData['productDetails'][0]['short_description']}</h6>
                                <div className="input-group">
                                    <div className="Product-price-card d-inline ">Reguler Price ${productData['productList'][0]['price']}</div>
                                    <div className="Product-price-card d-inline ">50% Discount</div>
                                    <div className="Product-price-card d-inline ">New Price ${productData['productList'][0]['special_price']}</div>
                                </div>
                                <h6 className="mt-2">Category: <b>{productData['productList'][0]['category']}</b></h6>
                                <h6 className="mt-2">Sub Category: <b>{productData['productList'][0]['subcategory']}</b></h6>
                                <h6 className="mt-2">Brand: <b>{productData['productList'][0]['brand']}</b></h6>
                                <h6 className="mt-2">Product Code: <b>{productData['productList'][0]['product_code']}</b></h6>
                                <h6 className="mt-2">Quantity</h6>
                                <input className="form-control text-center w-50" type="number" />

                                <div className="input-group mt-3">
                                    <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                    <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                    <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">DETAILS</h6>
                                {productData['productDetails'][0]['long_description']}
                            </Col>

                            <Col className="" md={6} lg={6} sm={12} xs={12}>
                                <h6 className="mt-2">REVIEWS</h6>
                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                                <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductDetails