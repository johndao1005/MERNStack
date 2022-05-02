import axios from 'axios'
import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [errorLogin, setErrorLogin] = useState(null)
    const [loading, setLoading] = useState(false)

    let navigator = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
        if (emailLogin.trim().length === 0 || passwordLogin.trim().length === 0) {
            setErrorLogin("Please enter email and/or password to login")
            return
        } else {
            setEmailLogin('')
        }
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            const {data} = await axios.get(
                `http://localhost:5000/user/login/`,
                { email: emailLogin, 
                password: passwordLogin }
                , config
            )

            // navigator('/user', { replace: true })
            if(data.error){
                throw new Error(data.error)
            }else (
                console.log(data)
            )
        } catch (e) {
            setErrorLogin(e.message)
        }
    }
  return (
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
  )
}

export default LoginForm