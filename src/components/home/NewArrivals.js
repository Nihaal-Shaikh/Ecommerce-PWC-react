import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';
import NewArrivalLoading from '../Placeholder/NewArrivalLoading';

function NewArrivals() {

    const [productData, setProductData] = useState([]);
    const sliderRef = useRef(null);
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {

        axios.get(AppUrl.ProductListByRemark("NEW"))
            .then(response => {
                setProductData(response.data);
                setLoaderDiv('d-none');
                setMainDiv('');
            })
            .catch(error => {
            });
    }, []);


    const settings = {
        dots: false,
        infinite: productData.length > 4,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const next = (e) => {
        e.preventDefault();
        sliderRef.current.slickNext();
    };

    const previous = (e) => {
        e.preventDefault();
        sliderRef.current.slickPrev();
    };

    return (
        <>
            <NewArrivalLoading loaderDiv={loaderDiv} />
            <div className={mainDiv}>
                <Container className='text-center' fluid={true}>
                    <div className='section-title text-center mb-55'>
                        <h2>NEW ARRIVALS &nbsp;
                            <a href="" className='btn btn-sm ml-2 site-btn' onClick={previous}><i className='fa fa-angle-left'></i></a>
                            &nbsp;
                            <a href="" className='btn btn-sm ml-2 site-btn' onClick={next}><i className='fa fa-angle-right'></i></a>
                        </h2>
                        <p>Some of our Exclusive Collections.</p>
                    </div>
                    <Row>
                        <Slider ref={sliderRef} {...settings}>
                            {productData.map((NewList, i) => (
                                <div key={i.toString()}>
                                    <Link to={"/productDetails/" + NewList.id}>
                                        <Card className='image-box card'>
                                            <img className='center' src={NewList.image} alt="" />
                                            <Card.Body>
                                                <p className='product-name-on-card'>{NewList.title}</p>
                                                {!NewList.special_price ? (
                                                    <p className='product-price-on-card'>Price: ${NewList.price}</p>
                                                ) : (
                                                    <p className='product-price-on-card'>
                                                        Price: <strike className='text-secondary'>${NewList.special_price}</strike> ${NewList.price}
                                                    </p>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default NewArrivals