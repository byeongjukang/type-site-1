import React from 'react';
import '../styles/Main.css';
import { Container, Row, Col } from 'react-bootstrap';

function Main() {
	return (
        <div className='wrap_container'>
            <Container fluid>
                <Row>
                    <Col>
                        <div></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div></div>
                    </Col>
                </Row>
            </Container>
        </div>
	);
}

export default Main;
