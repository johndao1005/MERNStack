import { Menu, Typography, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;
function Navbar() {
  const [current, setCurrent] = useState("mail");
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
      label: <a href="/#policy">Policy</a>,
      key: "policy",
    },
    {
      label: <a href="/user">Login</a>,
      key: "login",
      icon: <UserOutlined />,
    },
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col span={8}>
        <a href="/">
          <Title style={{ maxWidth: 200, marginTop: 10 }}> Kai Rescue</Title>
        </a>
      </Col>
      <Col span={16}>
        <Menu
          style={{
            float: "right",
            minWidth: 400,
          }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>
    </Row>
  );
}

export default Navbar;
