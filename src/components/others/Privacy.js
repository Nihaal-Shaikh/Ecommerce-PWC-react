import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from '../../Api/AppUrl';
import axios from 'axios';
import parse from 'html-react-parser';

function Privacy() {

    const [privacyText, setPrivacyText] = useState('');

    useEffect(() => {
        axios.get(AppUrl.allSiteInfo)
          .then(response => {
            setPrivacyText(response.data[0]['privacy']);
          })
          .catch(error => {
            // Handle errors here
          });
    }, []);

    return (
        <>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' md={12} lg={12} sm={12} xs={12}>
                        <h4 className='section-title-login'>Privacy Page</h4>
                        <p className='section-title-contact'>{parse(privacyText)}</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Privacy