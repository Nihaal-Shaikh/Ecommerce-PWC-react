import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select'

function ProductDetails(props) {

    const productData = props.data;
    const [mainImage, setMainImage] = useState(productData['productDetails'][0]['image_one']);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const quantityArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const quantityOptions = quantityArray.map((QuantityList) => ({
        value: QuantityList,
        label: QuantityList
    }));

    let colorOptions = [];

    if(productData['productDetails'][0]['color']) {
        const colorData = productData['productDetails'][0]['color'];
        const colorArray = colorData.split(',');
        colorOptions = colorArray.map((ColorList) => ({
            value: ColorList,
            label: ColorList
        }));
    }

    let sizeOptions = [];
    if(productData['productDetails'][0]['size']) {
        const sizeData = productData['productDetails'][0]['size'];
        const sizeArray = sizeData.split(',');
        sizeOptions = sizeArray.map((SizeList) => ({
            value: SizeList,
            label: SizeList
        }));
    }

    const imgOnClick = (event) => {
        const imgSrc = event.target.getAttribute('src');
        setMainImage(imgSrc);
    };

    return (
        <>
            <Container className="BetweenTwoSection" fluid={true}>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                        <Row>
                            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                <img className="bigImage" src={mainImage} />
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
                                        Price: <strike className='text-secondary'>${productData['productList'][0]['special_price']}</strike> ${productData['productList'][0]['price']}
                                    </p>
                                )}
                                <h6 className="mt-2">Category: <b>{productData['productList'][0]['category']}</b></h6>
                                <h6 className="mt-2">Sub Category: <b>{productData['productList'][0]['subcategory']}</b></h6>
                                <h6 className="mt-2">Brand: <b>{productData['productList'][0]['brand']}</b></h6>
                                <h6 className="mt-2">Product Code: <b>{productData['productList'][0]['product_code']}</b></h6>
                                <div className={colorOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2"> Choose Color </h6>
                                    <Select
                                        options={colorOptions}
                                        value={selectedColor}
                                        onChange={(value) => setSelectedColor(value)}
                                        placeholder="Choose Color"
                                    />
                                </div>
                                <div className={sizeOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2"> Choose Size </h6>
                                    <Select
                                        options={sizeOptions}
                                        value={selectedSize}
                                        onChange={(value) => setSelectedSize(value)}
                                        placeholder="Choose Size"
                                    />
                                </div>
                                <div className={quantityOptions.length > 0 ? '' : 'd-none'}>
                                    <h6 className="mt-2">Choose Quantity</h6>
                                    <Select
                                        options={quantityOptions}
                                        value={selectedQuantity}
                                        onChange={(value) => setSelectedQuantity(value)}
                                        placeholder="Choose Quantity"
                                    />
                                </div>

                                <div className="input-group mt-3" style={{ zIndex: 0 }}>
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