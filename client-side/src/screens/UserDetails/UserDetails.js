import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function UserDetails() {
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const id = localStorage.getItem('_id')
    let navigator = useNavigate()

    //get user data when first load the component
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            const { data } = await axios.get(
                `http://localhost:5000/user/profile/${id}`,
                config
            )
            console.log(data)
            setEmail(data.email)
            setName(data.name)
            setAddress(data.address || '')
            setPhone(data.phone || '')
        } catch (error) {
            setError(error)
        }
    }

    const handleLogout = () => {
        navigator('/', { replace: true })
        localStorage.removeItem('_id')
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: { 'Access-Control-Allow-Origin': '*' }
            }
            console.log(
                email,
                address,
                phone,
                name,
                password
                )
            const { data } = await axios.put(
                `http://localhost:5000/user/profile/${id}`,
                {
                    email,
                    address,
                    phone,
                    name,
                    password,
                },
                config
            )
            console.log(data)

            if (data) {
                setEdit(false)
                getData()
            } else {
            }
        } catch (error) {
            setError(error)
        }
    }


    const detailForm = (
        <Form className='mx-auto my-5 w-50' onSubmit={(e) => handleSubmit(e)}>
            <Form.Text as={'h1'}>User Details</Form.Text>
            <Button className='my-2' onClick={() => { setEdit(!edit) }}>Edit User details</Button>
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
                        onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="address"
                        value={address}
                        placeholder="Enter address"
                        onChange={(e) => setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                {edit && <Button className='m-3' type="submit">
                    Update
                </Button>}
            </fieldset>
        </Form>
    )

    return (
        <>
            <div className='m-5 row'>
                <h1 className='mx-2'>Welcome User</h1>
                <Button onClick={() => handleLogout()}>Log out</Button>
            </div>
            <div id="details" className='text-center'>
                {detailForm}
            </div>
        </>
    )
}

export default UserDetails
