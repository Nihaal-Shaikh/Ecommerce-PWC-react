import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProducts from './SuggestedProducts';
import ProductReviewList from './ProductReviewList';
import cogoToast from 'cogo-toast';
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function ProductDetails(props) {

    const productData = props.data;
    const product_id = productData['productDetails'][0]['product_id'];
    const title = productData['productList'][0]['title'];
    const category = productData['productList'][0]['category'];
    const subcategory = productData['productList'][0]['subcategory'];
    const [previewImage, setPreviewImage] = useState('0');
    const quantityArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const quantityOptions = quantityArray.map((QuantityList) => ({
        value: QuantityList,
        label: QuantityList
    }));
    const[isSize, setIsSize] =  useState('');
    const[isColour, setIsColour] =  useState('');
    const[colour, setColour] =  useState('');
    const[size, setSize] =  useState('');
    const[quantity, setQuantity] =  useState('');
    const [productCode, setProductCode] = useState('');
    const [addToCart, setAddToCart] = useState('Add To Cart');

    let colorOptions = [];

    if (productData['productDetails'][0]['color']) {
        const colorData = productData['productDetails'][0]['color'];
        const colorArray = colorData.split(',');
        colorOptions = colorArray.map((ColorList) => ({
            value: ColorList,
            label: ColorList
        }));
    }

    let sizeOptions = [];
    if (productData['productDetails'][0]['size']) {
        const sizeData = productData['productDetails'][0]['size'];
        const sizeArray = sizeData.split(',');
        sizeOptions = sizeArray.map((SizeList) => ({
            value: SizeList,
            label: SizeList
        }));
    }

    const imgOnClick = (event) => {
        const imgSrc = event.target.getAttribute('src');
        setPreviewImage(imgSrc);
    };

    if(isSize == '') {
        if(!sizeOptions.length > 0) {
            setIsSize('No');
        } else {
            setIsSize('Yes');
        }
    }

    if(isColour == '') {
        if(!colorOptions.length > 0) {
            setIsColour('No');
        } else {
            setIsColour('Yes');
        }
    }

    const AddToCart = () => {
        if(isColour === 'Yes' && colour.length === 0) {
            cogoToast.error('Please select a colour.', {position:'top-right'});
        } else if(isSize === 'Yes' && size.length === 0) {
            cogoToast.error('Please select a size.', {position:'top-right'});
        } else if(quantity.length === 0) {
            cogoToast.error('Please select a quantity.', {position:'top-right'});
        } else if(!localStorage.getItem('token')) {
            cogoToast.warn('Please login first', {position:'top-right'});
        } else {
            setAddToCart('Adding...');
            
            let myFormData = new FormData();

            myFormData.append('colour', colour.value);
            myFormData.append('size', size.value);
            myFormData.append('quantity', quantity.value);
            myFormData.append('product_code', productCode);
            myFormData.append('email', props.user.email);

            axios.post(AppUrl.addToCart, myFormData)
                .then(response => {
                    if(response.data === 1) {
                        cogoToast.success('Product added successfully.', {position: 'top-right'});
                        setAddToCart('Add To Cart');
                        window.location.reload();
                    } else {
                        cogoToast.error('Your request was not successful.', {position: 'top-right'});
                        setAddToCart('Add To Cart');
                    }
                })
                .catch(error => {
                    cogoToast.error('Your request was not successful.', {position: 'top-right'});
                    setAddToCart('Add To Cart');
                });

        }
    };

    if (previewImage === '0') {
        setPreviewImage(productData['productList'][0]['image']);
    }

    if(productCode == '') {
        setProductCode(productData['productList'][0]['product_code']);
    }

    return (
        <>
            <Container className="BetweenTwoSection" fluid={true}>
                <div className='breadBody'>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productCategory/" + category}>{category}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productSubCategory/" + category + '/' + subcategory}>{subcategory}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productDetails/" + product_id}>{title}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                        <Row>
                            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                <InnerImageZoom className='detailImage' zoomScale={1.8} zoomType={'hover'} src={previewImage} zoomSrc={previewImage} />
                                <Container className="my-3">
                                    <Row>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100 smallImage product-sm-img" onClick={imgOnClick} src={productData['productDetails'][0]['image_one']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100 smallImage product-sm-img" onClick={imgOnClick} src={productData['productDetails'][0]['image_two']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100 smallImage product-sm-img" onClick={imgOnClick} src={productData['productDetails'][0]['image_three']} />
                                        </Col>
                                        <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                            <img className="w-100 smallImage product-sm-img" onClick={imgOnClick} src={productData['productDetails'][0]['image_four']} />
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                <h5 className="Product-Name">{productData['productList'][0]['title']}</h5>
                                <h6 className="section-sub-title">{productData['productDetails'][0]['short_description']}</h6>
                                {!productData['productList'][0]['special_price'] ? (
                                    <p className='product-price-on-card'>Price: ${productData['productList'][0]['price']}</p>
                                ) : (
                                    <p className='product-price-on-card'>
                                        Price: <strike className='text-secondary'>${productData['productList'][0]['price']}</strike> ${productData['productList'][0]['special_price']}
                                    </p>
                                )}
                                <h6 className="mt-2">Category: <b>{category}</b></h6>
                                <h6 className="mt-2">Sub Category: <b>{subcategory}</b></h6>
                                <h6 className="mt-2">Brand: <b>{productData['productList'][0]['brand']}</b></h6>
                                <h6 className="mt-2">Product Code: <b>{productData['productList'][0]['product_code']}</b></h6>
                                <div className={colorOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2"> Choose Color </h6>
                                    <Select
                                        options={colorOptions}
                                        value={colour}
                                        onChange={(selectedOption) => {setColour(selectedOption)}}
                                        placeholder="Choose Color"
                                    />
                                </div>
                                <div className={sizeOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2"> Choose Size </h6>
                                    <Select
                                        options={sizeOptions}
                                        value={size}
                                        onChange={(selectedOption) => setSize(selectedOption)}
                                        placeholder="Choose Size"
                                    />
                                </div>
                                <div className={quantityOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2">Choose Quantity</h6>
                                    <Select
                                        options={quantityOptions}
                                        value={quantity}
                                        onChange={(selectedOption) => setQuantity(selectedOption)}
                                        placeholder="Choose Quantity"
                                    />
                                </div>

                                <div className="input-group mt-3" style={{ zIndex: 0 }}>
                                    <button onClick={AddToCart} className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>{addToCart}</button>
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
                                <ProductReviewList id={product_id} />
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
            <SuggestedProducts subcategory={subcategory} />
        </>
    )
}

export default ProductDetails