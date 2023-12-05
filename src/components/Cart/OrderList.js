import React, { useEffect, useState } from 'react'
import AppUrl from '../../Api/AppUrl';
import { Container, Row, Col, Button, Card, Form, Modal } from "react-bootstrap";
import axios from 'axios';
import Select from 'react-select';

function OrderList(props) {

  const user = props.user.email
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedRating, setSelectedRating] = useState();
  const [productReview, setProductReview] = useState('');
  const [name, setName] = useState('');

  const ratingOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];
  useEffect(() => {

    axios.get(AppUrl.OrderListByUser(user))
      .then(response => {
        setProductData(response.data);
      })
      .catch(error => {
      });
  }, [user]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (event) => {
    setShow(true);
  };

  const postReview = () => {

  };

  return (
    <>
      <Container>
        <div className="section-title text-center mb-55">
          <h2>Order History</h2>
        </div>
        <Card>
          <Card.Body>
            <Row>
              {productData.map((CartList, i) => (
                <Col key={i} md={6} lg={6} sm={6} xs={6}>
                  <h5 className="product-name">{CartList.product_name}</h5>
                  <h6> Quantity = {CartList.quantity} </h6>
                  <p>{CartList.size} | {CartList.colour}</p>
                  <h6>Price = {CartList.unit_price} x {CartList.quantity} = {CartList.total_price}$</h6>
                  <h6>Status = {CartList.order_status} </h6>
                  <Button onClick={handleShow} className="btn btn-danger">Post Review </Button>
                  <hr></hr>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h6>
            <i className="fa fa-bell"></i> Post your review
          </h6>
        </Modal.Header>
        <Modal.Body>
          <Col md={12} lg={12} sm={12} xs={12} className="p-1">
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
          </Col>

          <Col md={12} lg={12} sm={12} xs={12} className="p-1">
            <Form.Group>
              <Form.Label>Select Product Rating</Form.Label>
              <Select
                value={selectedRating}
                onChange={(selectedOption) => setSelectedRating(selectedOption)}
                options={ratingOptions}
              />
            </Form.Group>
          </Col>
          <Col md={12} lg={12} sm={12} xs={12} className="p-1">
            <Form.Group>
              <Form.Label>Your Review</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="" value={productReview} onChange={(e) => setProductReview(e.target.value)} />
            </Form.Group>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={postReview}>
            Post
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderList