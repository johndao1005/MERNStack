import { Menu, Typography, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;
function Navbar() {
  const [current, setCurrent] = useState("");
  const items = [
    {
      label: <a href="/#about">About</a>,
      key: "mail",
    },
    {
      label: <a href="/#mission">Mission</a>,
      key: "mission",
    },
    {
      label: <a href="/#footer">Contact</a>,
      key: "policy",
    },
    {
      label: <a href="/login">Login</a>,
      key: "login",
      icon: <UserOutlined />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col  xs={0} sm={10} md={8} lg={8} xl={8}>
        <a href="/">
          <Title style={{ maxWidth: 200, marginTop: 10 }}> Kai Rescue</Title>
        </a>
      </Col>
      <Col  xs={24} sm={14} md={16} lg={16} xl={16}>
        <Row justify="end">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        </Row>
      </Col>
    </Row>
  );
}

export default Navbar;
