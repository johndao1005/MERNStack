import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function RegisterForm() {
    const [emailRegister, setEmailRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [nameRegister, setNameRegister] = useState('')
    const [errorRegister, setErrorRegister] = useState(null)
    const [loading, setLoading] = useState(false)

    const registerHandler = async (e) => {
        e.preventDefault()
        if (nameRegister.trim().length === 0 ||
            emailRegister.trim().length === 0 ||
            passwordRegister.trim().length === 0) {
            setErrorRegister("Please enter all the information")
        } else {
            setErrorRegister('')
        }
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' },
            }
            console.log(passwordRegister, emailRegister, nameRegister)
            const { data } = await axios.get(
                `http://localhost:5000/user/register`,
                {
                    name: nameRegister,
                    email: emailRegister,
                    password: passwordRegister
                },
                config
            )
            // navigator('/user', { replace: true })
            console.log(data)
            if (data.error) {
                throw new Error(data.error)
            }
        } catch (e) {
            setErrorRegister(e.message)
        }
    }
    return (
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
                        onChange={(e) => setNameRegister(e.target.value)} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={emailRegister}
                        placeholder="Email"
                        onChange={(e) => setEmailRegister(e.target.value)} />
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
    )
}

export default RegisterForm