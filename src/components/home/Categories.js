import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';
import CategoryLoading from '../Placeholder/CategoryLoading';

function Categories() {

    const [menuData, setMenuData] = useState([]);
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');

    useEffect(() => {
        axios.get(AppUrl.allCategoryDetails)
            .then((response) => {
                setMenuData(response.data);
                setLoaderDiv('d-none');
                setMainDiv('');
            })
            .catch((error) => {
                // Handle error here
            });
    }, []);

    return (
        <>
            <CategoryLoading loaderDiv={loaderDiv} />
            <div className={mainDiv}>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2> CATEGORIES</h2>
                        <p>Some Of Our Exclusive Collection.</p>
                    </div>
                    <Row>
                        {menuData.map((catList, i) => (
                            <Col key={i.toString()} className="p-0" xl={2} lg={2} md={2} sm={6} xs={6}>
                                <Link className='text-link' to={"/productCategory/" + catList.category_name}>
                                    <Card className="h-100 w-100 text-center">
                                        <Card.Body>
                                            <img className="center" src={catList.category_image} alt={catList.category_name} />
                                            <h5 className="category-name">{catList.category_name}</h5>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Categories;
