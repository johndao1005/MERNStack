import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function UserDetails() {
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const detailForm = (
        <Form className='mx-auto my-5 w-50 '>
                <Form.Text as={'h1'}>User Details</Form.Text>
                <Button className='my-2' onClick={()=>{setEdit(!edit)}}>Edit User details</Button>
            <fieldset disabled={!edit}>

                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="name"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="phone"
                        value={phone}
                        placeholder="Enter Phone Number"
                        onChange={(e) => setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="address"
                        value={address}
                        placeholder="Enter address"
                        onChange={(e) => setPassword(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                {edit && <Button className='m-3' type="submit">
                    Update
                </Button>}
            </fieldset>
        </Form>
    )
    return (
        <div id="details" className='text-center'>
            {detailForm}
        </div>
    )
}

export default UserDetails
