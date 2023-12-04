import React, { useEffect, useState } from 'react'
import AppUrl from '../../Api/AppUrl';
import { Container, Row, Col, Button, Card, Form, Modal } from "react-bootstrap";
import axios from 'axios';

function OrderList(props) {

  const user = props.user.email
  const [productData, setProductData] = useState([]);
  const [show, setShow] = useState(false);

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
    const nMsg = event.target.getAttribute('message');
    const nTitle = event.target.getAttribute('title');
    const nDate = event.target.getAttribute('date');
    setNotificationMsg(nMsg);
    setNotificationTitle(nTitle);
    setNotificationDate(nDate);
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
                    <h6>Review</h6>
                    <p>Review</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}

export default OrderList