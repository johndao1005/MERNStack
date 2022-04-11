import { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../../components/Message'
import Loading from '../../components/Loading'
import './LoginPage.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Card } from 'react-bootstrap'


const LoginPage = () => {
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let navigator = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
        navigator('/user', { replace: true })
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        navigator('/user', { replace: true })
    }

    const loginForm = (
        <>
        <h1 className='mt-5'>Login</h1>
                <Form className='p-3' onSubmit={loginHandler}>
                    <Form.Group className="mb-3 start" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="my-3">
                    <Col>
                        New User ? Please go to Register tab
                    </Col>
                </Row>
                </>
    );
    const registerForm = (
        <>
        <h1 className='mt-5'>Register</h1>
                <Form className='p-3' onSubmit={registerHandler}>
                    <Form.Group className="mb-3 start" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </>
    );
    const tabCard = (
        <Card>
            <Tabs defaultActiveKey="Login" className="mb-3">
                <Tab eventKey="Login" title="Login">
                    {loginForm}
                </Tab>
                <Tab eventKey="Register" title="Register">
                    {registerForm}
                </Tab>
            </Tabs>
        </Card>
    );
    const submitToken = async (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Container className="my-5 mx-auto center w-50">
                {tabCard}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loading />}
            </Container>
        </>
    )
}

export default LoginPage
