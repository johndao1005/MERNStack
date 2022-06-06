import React, { useState } from "react";
import { Button, Card, Col, Form, Input, Row, Space, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "../../../store/action/token.action";
const { Title } = Typography;

function Hero() {
  const [token, setToken] = useState("");
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false)
  const tokenReducer = useSelector((state) => state.tokenReducer);
  const { error } = tokenReducer;
  const dispatch = useDispatch();
  const handleSubmitToken = async () => {
    //check empty field and remove current error
    setLoading(true);
    dispatch(checkToken(token, (check) => check?navigator("/package", { replace: true }): setLoading(false)));
   
  };

  return (
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
                className="subtitle py-1"
              >
                Incididunt eu dolore eiusmod cupidatat.
              </Title>
            </div>
          </div>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={8}>
        <Row justify="center">
          <Card
            style={{ maxWidth: 400, marginBottom: 40, marginTop: 40 }}
            className="text-center center login"
          >
            <Space direction="vertical" size="middle">
              <Title level={4}>Claim your delivery packet</Title>
              <Form>
                <span>Got a food voucher to claim ? Enter below</span> <br/>
                
                <Input
                  style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
                  type="string"
                  value={token}
                  placeholder="Enter Your Token"
                  onChange={(e) => setToken(e.target.value)}
                />
                {error && <p style={{color: "red"}}>{error}</p>}
                <div className="text-muted">
                  Please reframe from sharing your voucher code as it can
                  only be claimed once
                </div>
                <Button
                  style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
                  type={"primary"}
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
              <Button
                style={{ maxWidth: 300, marginTop: 10, marginBottom: 10 }}
                type={"primary"}
                onClick={() => navigator("/login")}
              >
                Login Portal
              </Button>
            </Space>
          </Card>
        </Row>
      </Col>
    </Row>
  );
}

export default Hero;
