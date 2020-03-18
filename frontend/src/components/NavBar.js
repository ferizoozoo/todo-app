import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton'

class NavBar extends React.Component {
    render(){
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as={LoginButton}></Nav.Link>
                        <Nav.Link as={SignUpButton}></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default NavBar;