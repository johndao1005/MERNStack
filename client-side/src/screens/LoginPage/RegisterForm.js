import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let navigator = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault()
        if (name.trim().length === 0 ||
            email.trim().length === 0 ||
            password.trim().length === 0) {
            setError("Please enter all the information")
        } else {
            setError('')
        }
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' },
            }
            const { data } = await axios.post(
                `http://localhost:5000/user/register/`,
                {
                    name,
                    email,
                    password
                },
                config
            )
            if (data.error) {
                throw new Error(data.error)
            } else{
                localStorage.setItem('_id',data._id)
                navigator('/user', { replace: true })
            }
        } catch (e) {
            setError(e.message)
        }
    }
    return (
        <>
            <h1 className='mt-5'>Register</h1>
            <Form className='p-3' onSubmit={registerHandler}>
                {loading && <p>Loading</p>}
                {error && <p>{error}</p>}
                <Form.Group className="mb-3 start" controlId="formBasicEmail">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                        type="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)} />
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
        </>
    )
}

export default RegisterForm