import React from 'react';
import amb from '../images/amb.svg';
import logo from '../images/logo_text.svg';
import '../styles/Menu.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu() {
	return (

        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={amb} className="App-amb" alt="logo" />
                    <img src={logo} className="App-text" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto nav-link"
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">About</Nav.Link>
                    <Nav.Link href="#action3">Information</Nav.Link>
                    <Nav.Link href="#action3">Portfolio</Nav.Link>
                    <Nav.Link href="#action3">Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
	);
}

export default Menu;
