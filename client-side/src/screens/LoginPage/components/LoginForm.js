import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/action/authenticate.action";

const { Title } = Typography;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo,error } = userLogin;
  const dispatch = useDispatch();

  const loginHandler = async () => {
    setLoading(true);
    dispatch(login(email, password, () => setLoading(false)));
    console.log(error);
  };

  return (
    <>
      <Title style={{ marginTop: 10, marginBottom: 19 }} level={3}>
        Login
      </Title>
      <Form
        layout="vertical"
        name="login"
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
            style={{ minWidth: 330, marginTop: 10 }}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Row justify="center" className="my-3">
        <Col>New User ? Please go to Register tab</Col>
      </Row>
    </>
  );
}

export default LoginForm;
