import {  Row, Layout, Typography, Card, Menu } from "antd";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./LoginPage.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const { Content } = Layout;

const LoginPage = () => {
  const [current, setCurrent] = useState("login");
  const items = [
    {
      label: "Register",
      key: "register",
      icon: <UserAddOutlined />,
    },
    {
      label: "Login",
      key: "login",
      icon: <LogoutOutlined />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  // seperate 2 forms in seperate files to maintain and control state and request
  const tabCard = (
    <Row justify="center">
      <Card style={{ marginTop: 150, minWidth: 380 }}>
      <Row justify="center">
        <Menu
          style={{ minWidth: 200, padding: 10 }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Row>
        {current === "login" ? <LoginForm /> : <RegisterForm />}
      </Card>
    </Row>
  );

  return (
    <>
      <Layout
        id="login"
        style={{
          height: "100vh",
        }}
        className="my-5 mx-auto center w-50"
      >
        <Content className="hero">{tabCard}</Content>
      </Layout>
    </>
  );
};

export default LoginPage;
