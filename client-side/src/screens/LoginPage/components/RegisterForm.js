import axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../../../store/action/authenticate.action";
import { useDispatch, useSelector } from "react-redux";

const { Title } = Typography;

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const registerHandler = async () => {
    setLoading(true);
    dispatch(register(name, email, password, () => setLoading(false)));
  };
  return (
    <>
      <Title style={{ marginTop: 10, marginBottom: 19 }} level={3}>
        Register
      </Title>
      <Form
        name="register"
        layout="vertical"
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
            },
          ]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email address!",
            },
            { type: "email", message: "Please enter correct email address" },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
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
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 15,
          }}
        >
          <Button
            loading={loading}
            style={{ minWidth: 330, marginTop: 10 }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default RegisterForm;
