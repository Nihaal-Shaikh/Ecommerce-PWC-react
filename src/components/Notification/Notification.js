import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function Notification() {

    const [notificationData, setNotificationData] = useState([]);
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(AppUrl.notificationHistory)
            .then(response => {
                setNotificationData(response.data);
                setLoaderDiv('d-none');
                setMainDiv('');
            })
            .catch(error => {
            });
    }, []);


    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <div className={mainDiv}>
                <Container className="TopSection">
                    <Row>
                        {notificationData.map((Notifications, i) => (
                            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                                <Card onClick={handleShow} className="notification-card">
                                    <Card.Body>
                                        <h6>{Notifications.title}</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {Notifications.date} | Status: Unread</p>
                                        <Button className='btn btn-danger'>Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h6>
                        <i className="fa fa-bell"></i> Date: 11/05/2021
                    </h6>
                </Modal.Header>
                <Modal.Body>
                    <h6>Woohoo, you're reading this text in a modal!</h6>
                    <p>
                        Each course has been hand-tailored to teach a specific skill. I hope you agree! Whether you’re trying to learn a new skill from scratch or want to refresh your memory on something you’ve learned in the past, you’ve come to the right place.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Notification