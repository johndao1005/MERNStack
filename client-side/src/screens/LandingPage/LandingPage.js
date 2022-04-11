import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Container } from 'react-bootstrap'
import './LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Form } from 'react-bootstrap'

const LandingPage = () => {
    const navigator = useNavigate()
    const [products, setProducts] = useState([])
    const [token, setToken] = useState('')

    const handleSubmitToken=()=>{
        console.log(token)
        navigator('/packages', { replace: true })
    }
    const heroSection = (
        <Row className='hero' id='hero'>
            <Col>
                <div className="center p-4 text-light mx-5 my-1">
                    <div className='pt-5 my-5'>
                        <h1 className="title"> Welcome to Kai Rescue</h1>
                        <h4 className="subtitle py-1">Incididunt eu dolore eiusmod cupidatat.</h4>
                    </div>
                </div>
            </Col>
            <Col className='singleCard py-3 m-5'>
                <Card className="text-center mx-3 login">
                    <Card.Body>
                        <Card.Title>Claim your delivery packet</Card.Title>
                        <Form onSubmit={(e)=>handleSubmitToken(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Got a food voucher to claim ? Enter below</Form.Label>
                                <Form.Control type="token" placeholder="Enter Code"/>
                                <Form.Text className="text-muted">
                                    Please reframe from sharing your voucher code <br /> as it can only be claimed once
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Claim your voucher
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Body>
                        <Card.Title>Donators and Volunteers</Card.Title>
                        <Card.Text>
                            Are you looking to be a part of the team<br /> or contribute to the community ? Enter bellow
                        </Card.Text>
                        <Button variant="primary">
                            <Link to='/login'>
                                Login Portal
                            </Link>
                            </Button>
                    </Card.Body>
                </Card></Col>
        </Row>
    )
    const missionSection = (
        <div className='center' id='mission'>
            <Col className='py-5 px-2 text-center center'>
                <h1>Our Mission</h1>
                <p>Dolore enim eu reprehenderit nulla tempor ipsum et. Culpa sit t officia cupidatat est sunt. Cupidatat aliquip qui nisi eiusmod. Mollit duis in sit aliqua. Tempor labore qui cupidatat deserunt aute nisi ex anim voluptate commodo. Laboris amet exercitation dolore ipsum occaecat aute id aute laborum proident commodo. Quis pariatur velit fugiat elit amet ipsum incididunt.</p>
                <Row className='mx-auto px-5 py-1 text-center center d-flex flex-row'>
                    <Card className='smallCard p-3 m-2'>
                        <Card.Body>
                            <Card.Title>Donators and Volunteers</Card.Title>
                            <Card.Text>
                            Cupidatat ex enim anim labore nisi exercitation exercitation aliquip consequat nostrud pariatur nulla ut consequat.                            </Card.Text>
                            <Button variant="primary">Login Portal</Button>
                        </Card.Body>
                    </Card>
                    <Card className='smallCard p-3 m-2'>
                        <Card.Body>
                            <Card.Title>Donators and Volunteers</Card.Title>
                            <Card.Text>
                            Cupidatat ex enim anim labore nisi exercitation exercitation aliquip consequat nostrud pariatur nulla ut consequat.                        </Card.Text>
                            <Button variant="primary">Login Portal</Button>
                        </Card.Body>
                    </Card>
                    <Card className='smallCard p-3 m-2'>
                        <Card.Body>
                            <Card.Title>Donators and Volunteers</Card.Title>
                            <Card.Text>
                            Cupidatat ex enim anim labore nisi exercitation exercitation aliquip consequat nostrud pariatur nulla ut consequat.                            </Card.Text>
                            <Button variant="primary">Login Portal</Button>
                        </Card.Body>
                    </Card>
                    <Card className='smallCard p-3 m-2'>
                        <Card.Body>
                            <Card.Title>Donators and Volunteers</Card.Title>
                            <Card.Text>
                                Cupidatat ex enim anim labore nisi exercitation exercitation aliquip consequat nostrud pariatur nulla ut consequat.
                            </Card.Text>
                            <Button variant="primary">Login Portal</Button>
                        </Card.Body>
                    </Card>
                </Row>
            </Col>
        </div>
    )
    const aboutSection = (
        <>
            <Col className='center py-5 bg-dark text-light' id='about'>
                <h1>About Us</h1>
                <p className='p-4'>Dolore enim eu reprehenderit nulla tempor ipsum et. Culpa sit et officia cupidatat est sunt. Cupidatat aliquip qui nisi eiusmod. Mollit duis in sit aliqua. Tempor labore qui cupidatat deserunt aute nisi ex anim voluptate commodo. Laboris amet exercitation dolore ipsum occaecat aute id aute laborum proident commodo. Quis pariatur velit fugiat elit amet ipsum incididunt.</p>
            </Col>
        </>
    )
    return (
        <>
            {heroSection}
            {missionSection}
            {aboutSection}
        </>
    )
}

export default LandingPage
