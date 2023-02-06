import React from 'react';
import logo from '../logo.svg';
import './Menu.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu() {
	return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto nav-link"
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <Nav.Link href="#action3">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
	);
}

export default Menu;
