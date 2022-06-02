import React from 'react'
import { Image, Col, Row, Space, Typography } from "antd";
const { Title } = Typography;

function About() {
  return (
    <div style={{backgroundColor: "#1791AA", width: "100%"}}>
      <Space
        className="center"
        style={{ padding: 30, marginBottom: 30 }}
        direction="vertical"
        size="middle"
        id="about"
      >
        <Title style={{color:"white"}} level={3}>About Us</Title>
        <Row justify="center">
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Title
              level={5}
              style={{
                textAlign: "start",
                fontSize: 20,
                fontWeight: 400,
                marginRight: 40,
                color: "white"
              }}
            >
              The Kai Rescue programme was established in 2017 with the aim of
              minimising food waste in our community. Our team collects food
              from supermarkets, growers, manufacturers and other food outlets
              that is good enough to eat but is surplus or non-saleable.
              <br />
              <br />
              We partner with 60+ food recipient organisations from Nelson
              Tasman region who distribute food to individuals and families in
              need. Kai Rescue runs on the energy and dedication of a fantastic
              team of volunteers who help us to collect, sort and pack the food.
            </Title>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Image
            alt='picture about kai rescue'
            style={{ marginTop : 50}}
              width={450}
              src="https://images.squarespace-cdn.com/content/v1/5c8081ad3560c30c71af6c51/89e631be-1d60-4f3e-8456-6bf1f6c67997/Countdown.jpg?format=750w"
            />
          </Col>
        </Row>
      </Space>
    </div>
  )
}

export default About