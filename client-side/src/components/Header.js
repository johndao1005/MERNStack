import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    // Button
} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const history = useNavigate();
    
    const logoutHandler = () => {
    
        history("/", { replace: true })
    }

    return (
        <Navbar bg="primary" expand="lg" variant="dark" >
            <Container>
                <Link to='/'>
                    <Navbar.Brand>Toy Shopy</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="me-auto">

                        {/* {(!userInfo || userInfo.isAdmin === false) && ( */}
                        <Nav.Link >
                            <Link to='/'>
                                Home
                            </Link>
                        </Nav.Link>
                         {/* )} */}
                                <Nav.Item >
                                    <Nav.Link href='/admin/user'>
                                        Users
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href='/admin/product'>
                                        Products
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item >
                                    <Nav.Link href="/admin/order">
                                        Order
                                    </Nav.Link>
                                </Nav.Item>

                                <Nav.Item onClick={() => {
                                    logoutHandler()
                                }}><Nav.Link>
                                        Logout
                                    </Nav.Link>
                                </Nav.Item>
                                

                            (<NavDropdown className=""  id="basic-nav-dropdown">
                                <NavDropdown.Item href="/profile">Details</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {
                                    logoutHandler()
                                }}>Logout</NavDropdown.Item>
                            </NavDropdown>
                            ) : (<Nav.Link>
                                <Link to='/login'>
                                    Login
                                </Link>
                            </Nav.Link>)

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
