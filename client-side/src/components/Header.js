import React from 'react'
import {
    Navbar,
    Nav,
    // Button
} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const history = useNavigate();

    const logoutHandler = () => {

        history("/", { replace: true })
    }

    return (
        <Navbar className='center' bg="primary" expand="lg" variant="dark" >
                <Link to='/'>
                    <Navbar.Brand>Kai Rescue</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
                    
                    <Nav className="me-auto">
                        <Nav.Link >
                            <HashLink to='#about'>
                                About
                            </HashLink>
                        </Nav.Link>
                        <Nav.Link >
                            <HashLink to='/#mission'>
                                Mission
                            </HashLink>
                        </Nav.Link>
                        <Nav.Link >
                            <HashLink to='/#footer'>
                                Contact
                            </HashLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
