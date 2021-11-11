import React from 'react'
import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Link to='/'>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            {/* <Button variant="outline-success">Search</Button> */}
                        </Form>
                    </Nav>
                    <Nav className="me-auto">

                        <Nav.Link >
                            <Link to='/'>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to='/mynotes'>
                            Browse
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link to='/'>
                            Profile
                            </Link>
                        </Nav.Link>
                        <NavDropdown className="" title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
