import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function NewArrivals() {

    var settings = {
        dots: false,
               infinite: false,
               speed: 500,
               autoplay: true,
               autoplaySpeed:3000,
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

    return (
        <>
            <Container className='text-center' fluid={true}>
                <div className='section-title text-center mb-55'>
                    <h2>NEW ARRIVALS</h2>
                    <p>Some of our Exclusive Collections.</p>
                </div>
                <Row>
                    <Slider {...settings}>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/kl2mljk0/watch/u/8/h/dz4459-diesel-original-imagya23urdjgfzh.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>MASTER CHIEF Analog Watch - For Men DZ4459</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/kfvfwy80-0/watch/q/x/o/ssc766p1-seiko-original-imafw8kqq2htfkxd.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Analog Watch - For Men SSC766P1</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/j/d/r/na-1-smwgc2101430-swiss-military-hanowa-men-original-imagz2mhedpe7uuh.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>BLACKBIRD Analog Watch - For Men SMWGC2101430</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/a/1/1-dtwgc0000301-ducati-corse-men-original-imagj769a2wfnqpr.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Analog Watch - For Men DTWGC0000301</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/kj1r53k0-0/watch/b/k/o/dz7333-diesel-original-imafypb3shpnxfj8.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Mr Daddy 2 Analog Watch - For Men DZ7333</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/ksru0sw0/watch/4/p/o/1-ar11360-emporio-armani-men-original-imag69rcsndqz9n5.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Diver Analog Watch - For Men AR11360</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/1/w/1-es-8225-05-earnshaw-men-original-imags54y4wgrq3yz.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Analog Watch - For Men ES-8225-05</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                        <div>
                        <Card className='image-box card'>
                            <img className='center' src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/h/p/o/1-90158ym01-titan-men-original-imagmqnm7hgyahd2.jpeg?q=70" alt="" />
                            <Card.Body>
                                <p className='product-name-on-card'>Mechanical Slimline Analog Watch - For Men 90158YM01</p>
                                <p className='product-price-on-card'>Price: $150</p>
                            </Card.Body>
                        </Card>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </>
    )
}

export default NewArrivals