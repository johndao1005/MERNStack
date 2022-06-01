import { Typography, Col, Row, Space } from "antd";

const { Title } = Typography;

function FooterBar() {
  return (
    <Row id="footer">
      <Col style={{ textAlign: "center" }} xs={0} sm={0} md={8} lg={8} xl={8}>
        <a href="/">
          <Title> Kai Rescue</Title>
        </a>
        <Title level={5}>@ Copyright by John Dao 2022</Title>
        <Space size={"large"} style={{ marginTop: 40 }}>
          <a href="/#about">About</a>
          <a href="/#mission">Mission</a>
          <a href="/#footer">Contact</a>
        </Space>
      </Col>
      <Col style={{ paddingLeft: 40 }} xs={12} sm={12} md={8} lg={8} xl={8}>
        <Space direction="vertical" size="middle">
          <div>Phone number</div>
          <a href="/">123456789</a>
          <div>Email</div>
          <a href="/">kairescue@gmail.com</a>
          <div>Social Account</div>
          <Space>
            <a>Facebook</a>
            <a>Twitter</a>
          </Space>
        </Space>
      </Col>
      <Col style={{ paddingLeft: 40 }} xs={12} sm={12} md={8} lg={8} xl={8}>
        <Space direction="vertical" size="middle" >
          <div>Address 1: </div>
          <div>123 Queen st, Nelson</div>
          <div>Address 2: </div>
          <div>567 King st, Stoke</div>
        </Space>
      </Col>
    </Row>
  );
}

export default FooterBar;
