import axios from 'axios'
import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState(null)
    const [loading, setLoading] = useState(false)

    let navigator = useNavigate()

    const loginHandler = async (e) => {
        e.preventDefault()
        if (email.trim().length === 0 || password.trim().length === 0) {
            seterror("Please enter email and/or password to login")
            return
        } else {
            setEmail('')
        }
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            const {data} = await axios.post(
                `http://localhost:5000/user/login/`,
                { email, password }
                , config
            )
            console.log(data)
            if(data.error){
                throw new Error(data.error)
            }else {
                localStorage.setItem('_id',data._id)
                navigator('/user', { replace: true })
            }
        } catch (e) {
            seterror(e.message)
        }
    }
  return (
    <>
            <h1 className='mt-5'>Login</h1>
            <Form className='p-3' onSubmit={loginHandler}>
                <Form.Group className="mb-3 start" controlId="formBasicEmail">
                    {loading && <p>Loading</p>}
                    {error && <p>{error}</p>}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
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
  )
}

export default LoginForm