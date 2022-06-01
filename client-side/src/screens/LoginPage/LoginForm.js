import axios from "axios";
import React, { useState } from "react";
import { Form, Input, Button, Col, Row,  Typography } from "antd";
import { useNavigate } from "react-router-dom";

const {Title} = Typography

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);

  let navigator = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      seterror("Please enter email and/or password to login");
      return;
    } else {
      setEmail("");
    }
    try {
      const config = {
        headers: { "Access-Control-Allow-Origin": "*" },
      };
      const { data } = await axios.post(
        `http://localhost:5000/user/login/`,
        { email, password },
        config
      );
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
      } else {
        localStorage.setItem("_id", data._id);
        navigator("/user", { replace: true });
      }
    } catch (e) {
      seterror(e.message);
    }
  };

  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  return (
    <>
      <Title style={{marginTop:10, marginBottom: 19}} level={3}>Login</Title>
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
        onFinish={loginHandler}
        autoComplete="off"
      >
        <Form.Item
          label="Email Adress"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },{type:"email", message: "Please enter correct email address"},
            
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
            offset: 8,
            span: 16,
          }}
        >
          <Button className="center" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row justify="center" className="my-3">
        <Col>New User ? Please go to Register tab</Col>
      </Row>
    </>
  );
}

export default LoginForm;
