import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';

function About() {

    const [about, setAbout] = useState('');

    useEffect(() => {
        axios.get(AppUrl.allSiteInfo)
          .then(response => {
            setAbout(response.data[0]['about']);
          })
          .catch(error => {
            // Handle errors here
          });
    }, []);      

    console.log(about);

    return (
        <>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                        <h4 className='section-title-login'>About Us Page</h4>
                        <p className='section-title-contact'>{about}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About