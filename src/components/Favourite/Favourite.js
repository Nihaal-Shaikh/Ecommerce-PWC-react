import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import { useNavigate } from 'react-router';
import cogoToast from 'cogo-toast';

function Favourite(props) {

    const navigate = useNavigate();

    const user = props.user.email
    const [productData, setProductData] = useState([]);

    useEffect(() => {

        axios.get(AppUrl.FavouriteList(user))
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
            });
    }, [user]);

    useEffect(() => {
      if(!localStorage.getItem('token')) {
        navigate('/login');
      }
    }, []);

    const RemoveItem = (product_code) => {

        axios.get(AppUrl.RemoveFavourite(product_code, user))
            .then(response => {
                cogoToast.success('Product removed successfully from favourites.', { position: 'top-right' });
                window.location.reload();
            })
            .catch(error => {
            });
    }

  return (
    <>
        <Container className="text-center" fluid={true}>
            <div className='section-title text-center mb-55'>
                <h2>My Favourite Items</h2>
                <p>Some of our Exclusive Collections.</p>
            </div>
            <Row>
            {productData.map((FeaturedList, i) => (
                <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
                    <Card className='image-box card w-100'>
                        <img className='center w-75' src={FeaturedList.image} alt="" />
                        <Card.Body>
                            <p className='product-name-on-card'>{FeaturedList.product_name}</p>
                            <Button onClick={() => RemoveItem(FeaturedList.product_code)} className='btn btn-sm'><i className='fa fa-trash-alt'> Remove</i></Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    </>
  )
}

export default Favourite