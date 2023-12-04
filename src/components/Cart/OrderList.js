import React, { useEffect, useState } from 'react'
import AppUrl from '../../Api/AppUrl';
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import axios from 'axios';

function OrderList(props) {

  const user = props.user.email
  const [productData, setProductData] = useState([]);

  useEffect(() => {

      axios.get(AppUrl.OrderListByUser(user))
          .then(response => {
              setProductData(response.data);
          })
          .catch(error => {
          });
  }, [user]);

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
                  <Button className="btn btn-danger">Post Review </Button>
                  <hr></hr>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default OrderList