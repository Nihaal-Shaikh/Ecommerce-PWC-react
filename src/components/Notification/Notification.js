import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import axios from 'axios';
import AppUrl from '../../Api/AppUrl';

function Notification() {

    const [notificationData, setNotificationData] = useState([]);
    const [loaderDiv, setLoaderDiv] = useState('');
    const [mainDiv, setMainDiv] = useState('d-none');
    const [show, setShow] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState('');
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDate, setNotificationDate] = useState('');

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
            <div className={mainDiv}>
                <Container className="TopSection">
                    <Row>
                        {notificationData.map((Notifications, i) => (
                            <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                                <Card className="notification-card">
                                    <Card.Body>
                                        <h6>{Notifications.title}</h6>
                                        <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {Notifications.date} | Status: Unread</p>
                                        <Button
                                            onClick={handleShow}
                                            title={Notifications.title}
                                            date={Notifications.date}
                                            message={Notifications.message}
                                            className="btn btn-danger"
                                        >
                                            Details
                                        </Button>
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
                        <i className="fa fa-bell"></i> Date: {notificationDate}
                    </h6>
                </Modal.Header>
                <Modal.Body>
                    <h6>{notificationTitle}</h6>
                    <p>{notificationMsg} </p>
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