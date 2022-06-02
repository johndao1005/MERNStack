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
          <a href="tel:+642040784967">020 4078 4967</a>
          <div>Email</div>
          <a href="mailto:kairescue@nec.org.nz">kairescue@gmail.com</a>
          <div>Social Account</div>
          <Space>
            <a>Facebook</a>
            <a>Twitter</a>
          </Space>
        </Space>
      </Col>
      <Col style={{ paddingLeft: 40 }} xs={12} sm={12} md={8} lg={8} xl={8}>
        <Space direction="vertical" size="middle">
          <h3>Kai Rescue: </h3>
          <div>
            30 Trafalgar Street,<br/> The Wood, Nelson 7010
          </div>
          <h3>Nelson environment centre: </h3>
          <div>6 Vivian Place,<br/> Annesbrook 7011</div>
        </Space>
      </Col>
    </Row>
  );
}

export default FooterBar;
