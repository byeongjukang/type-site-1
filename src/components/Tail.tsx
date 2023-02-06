import React from 'react';
import './Tail.css';
import { Container, Row, Col } from 'react-bootstrap';

function Tail() {
	return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='text-center'>Copyright © WSGROUND 2022. All rights reserved.</div>
                </Col>
            </Row>
        </Container>
	);
}

export default Tail;
