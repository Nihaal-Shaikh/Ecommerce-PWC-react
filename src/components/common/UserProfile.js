import React, { useEffect } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import Itachi from '../../assets/images/itachi.jpg';
import { Link } from 'react-router-dom';

function UserProfile(props) {

  const navigate = useNavigate();
  let name = '';
  let email = '';

  if (props.user) {
    name = props.user.name;
    email = props.user.email;
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <div className="section-title text-center mb-55">
        <h2>User Profile Page</h2>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Itachi} className='user-profile' />
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <Link className='text-link' to={'/orderList'}>
                    <p className='product-name-on-card'>Order List</p>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className='text-link' to={'/orderList'}>
                    <p className='product-name-on-card'>Order List</p>
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link className='text-link' to={'/orderList'}>
                    <p className='product-name-on-card'>Order List</p>
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={8} md={8} sm={12}>
            <ul className='list-group'>
              <li className='list-group-item'>Name: {name}</li>
              <li className='list-group-item'>Email: {email}</li>
            </ul>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default UserProfile