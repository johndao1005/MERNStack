import axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const {Title} = Typography

function RegisterForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    let navigator = useNavigate()

    const registerHandler = async () => {
        setLoading(true)
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
                setLoading(false)
                navigator('/user', { replace: true })
            }
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }
    return (
        <>
      <Title style={{marginTop:10, marginBottom: 19}} level={3}>Register</Title>
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={registerHandler}
        autoComplete="off"
      >
          <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },{type:"email", message: "Please enter correct email address"}
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },{type:"email", message: "Please enter correct email address"}
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8, message: "Password must be minimum 8 characters." },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 15,
          }}
        >
          <Button loading={loading} style={{minWidth: 350}} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row justify="center" className="my-3">
        <Col>New User ? Please go to Register tab</Col>
      </Row>
    </>
    )
}

export default RegisterForm