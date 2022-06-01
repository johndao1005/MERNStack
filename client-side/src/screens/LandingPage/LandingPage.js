import React, { useState } from "react";
import {
  Layout,
  Input,
  Form,
  Card,
  Row,
  Col,
  Button,
  Typography,
  Space,
} from "antd";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FooterBar from "../../components/Footer";
import Navbar from "../../components/Navbar";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
/**
first page where user can enter the pages which allow user to enter token or login */
const LandingPage = () => {
  const navigator = useNavigate();
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);

  const handleSubmitToken = async (e) => {
    e.preventDefault();
    //check empty field and remove current error
    if (token.trim() === "") {
      setError("Please enter you voucher number");
      return;
    } else {
      setError("");
    }
    try {
      // allow CORS request to go throuhg
      const config = {
        headers: { "Access-Control-Allow-Origin": "*" },
      };
      // using post request to check if the token is used
      const response = await axios.post(
        `http://localhost:5000/transaction/${token}`,
        config
      );

      if (response.data.message === "The voucher is claimed or not exist") {
        setError(response.data.message);
      } else {
        localStorage.setItem("token", token);
        navigator("/packages", { replace: true });
      }
    } catch (e) {
      setError(e.message);
    }
  };

  //seperate page components for easier maintain and display
  const heroSection = () => (
    <Row className="hero" id="hero">
      <Col xs={24} sm={24} md={24} lg={16} xl={16}>
        <Row justify="center">
          <div className="center p-4 text-light ">
            <div style={{ marginTop: 100 }}>
              <Title level={2} style={{ color: "white" }} className="title">
                {" "}
                Welcome to Kai Rescue
              </Title>
              <Title
                level={4}
                style={{ color: "white" }}
                className="subtitle py-1">
                Incididunt eu dolore eiusmod cupidatat.
              </Title>
            </div>
          </div>
        </Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={8}
      >
        <Row justify="center">
          <Card
            style={{ maxWidth: 400,  marginBottom: 40, marginTop: 40, }}
            className="text-center center login"
          >
            <Space direction="vertical" size="middle">
              <Title level={4}>Claim your delivery packet</Title>
              <Form>
                <span>Got a food voucher to claim ? Enter below</span>
                {error && <span className="text-danger mb-2">{error}</span>}
                <Input
                  type="string"
                  value={token}
                  placeholder="Enter Your Token"
                  onChange={(e) => setToken(e.target.value)}
                />
                <div className="text-muted">
                  Please reframe from sharing your voucher code <br /> as it can
                  only be claimed once
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => handleSubmitToken(e)}
                >
                  Claim your voucher
                </Button>
              </Form>
              <Title level={4}>Donators and Volunteers</Title>
              <span>
                Are you looking to be a part of the team
                <br /> or contribute to the community ? Enter bellow
              </span>
              <Button variant="primary" onClick={() => navigator("/login")}>
                Login Portal
              </Button>
            </Space>
          </Card>
        </Row>
        
      </Col>
    </Row>
  );

  const missionSection = () => (
    <div className="center" style={{ marginTop: 30 }} id="mission">
      <Col className="text-center center">
        <h1>Our Mission</h1>
        <p>
          Dolore enim eu reprehenderit nulla tempor ipsum et. Culpa sit t
          officia cupidatat est sunt. Cupidatat aliquip qui nisi eiusmod. Mollit
          duis in sit aliqua. Tempor labore qui cupidatat deserunt aute nisi ex
          anim voluptate commodo. Laboris amet exercitation dolore ipsum
          occaecat aute id aute laborum proident commodo. Quis pariatur velit
          fugiat elit amet ipsum incididunt.
        </p>

        <Row
          justify="center"
          className="mx-auto px-5 py-1 text-center center d-flex flex-row"
        >
          <Col xs={24} sm={12} md={8} lg={8} xl={6}>
            <Card className="smallCard p-3 m-2">
              <Title level={4}>Donators and Volunteers</Title>
              <div>
                Cupidatat ex enim anim labore nisi exercitation exercitation
                aliquip consequat nostrud pariatur nulla ut consequat.{" "}
              </div>
              <Button variant="primary">Login Portal</Button>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
  const aboutSection = () => (
    <>
      <Space
        className="center"
        style={{ padding: 30, marginBottom: 30 }}
        direction="vertical"
        size="middle"
        id="about"
      >
        <Title level={3}>About Us</Title>
        <Title level={5}>
          Dolore enim eu reprehenderit nulla tempor ipsum et. Culpa sit et
          officia cupidatat est sunt. Cupidatat aliquip qui nisi eiusmod. Mollit
          duis in sit aliqua. Tempor labore qui cupidatat deserunt aute nisi ex
          anim voluptate commodo. Laboris amet exercitation dolore ipsum
          occaecat aute id aute laborum proident commodo. Quis pariatur velit
          fugiat elit amet ipsum incididunt.
        </Title>
      </Space>
    </>
  );

  return (
    <Layout>
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

      <Content
        style={{
          padding: "0 50px",
          marginTop: 67,
        }}
      >
        {heroSection()}
        {aboutSection()}
        {missionSection()}
      </Content>

      <Footer>
        <FooterBar />
      </Footer>
    </Layout>
  );
};

export default LandingPage;
