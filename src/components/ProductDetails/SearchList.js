import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


function SearchList(props) {

    const productData = props.productData;
    const searchKey = props.searchKey;

  return (
    <>
        <Container className="text-center" fluid={true}>
            <div className='breadBody'>
                <Breadcrumb>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <Link to={"/searchByProduct/" + searchKey}>Search results for: {searchKey}</Link>
                    </Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <div className='section-title text-center mb-40 mt-2'>
                <h2>{searchKey}</h2>
            </div>
            <Row>
                {productData.map((ProductList, i) => (
                    <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6} key={i}>
                        <Link className='text-link' to={"/productDetails/" + ProductList.id}>
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
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
)
}

export default SearchList