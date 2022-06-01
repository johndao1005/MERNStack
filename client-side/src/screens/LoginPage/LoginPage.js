import { Button, Form, Col, Row, Layout, Typography, Card, Menu } from "antd";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Navbar from "../../components/Navbar";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

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
      <Card style={{ marginTop: 200, minWidth: 380 }}>
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
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            display: "block",
            backgroundColor: "white",
          }}
        >
          <Navbar navigate={() => {}} />
        </Header>
        <Content className="hero">{tabCard}</Content>
      </Layout>
    </>
  );
};

export default LoginPage;
