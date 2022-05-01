import { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'
import './LoginPage.css'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import axios from 'axios'


const LoginPage = () => {
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [nameRegister, setNameRegister] = useState('')
    const [errorLogin, setErrorLogin] = useState(null)
    const [errorRegister, setErrorRegister] = useState(null)
    const [loading, setLoading] = useState(false)

    let navigator = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            const response = await axios.get(
                `http://localhost:5000/user/login/`,
                { emailLogin, passwordLogin }
                , config
            )

            navigator('/user', { replace: true })
            console.log(response.data)
        } catch (e) {
            setErrorLogin(e.message)
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' },
            }
            const response = await axios.get(
                `http://localhost:5000/user/register/`,
                { emailRegister, passwordRegister },
                config
            )
            navigator('/user', { replace: true })
            console.log(response.data)
        } catch (e) {
            setErrorRegister(e.message)
        }
    }

    const loginForm = (
        <>
            <h1 className='mt-5'>Login</h1>
            <Form className='p-3' onSubmit={loginHandler}>
                <Form.Group className="mb-3 start" controlId="formBasicEmail">
                    {loading && <p>Loading</p>}
                    {errorLogin && <p>{errorLogin}</p>}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={emailLogin}
                        placeholder="Email"
                        onChange={(e) => { setEmailLogin(e.target.value) }} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={passwordLogin}
                        onChange={(e) => setPasswordLogin(e.target.value)} />
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
                {loading && <p>Loading</p>}
                {errorRegister && <p>{errorRegister}</p>}
                <Form.Group className="mb-3 start" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        type="name"
                        value={nameRegister}
                        placeholder="Name"
                        onChange={(e) => { setNameRegister(e.target.value) }} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={emailRegister}
                        placeholder="Email"
                        onChange={(e) => { setEmailRegister(e.target.value) }} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={passwordRegister}
                        onChange={(e) => setPasswordRegister(e.target.value)} />
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
    return (
        <>
            <Container id="login" className="my-5 mx-auto center w-50">
                {tabCard}
            </Container>
        </>
    )
}

export default LoginPage
